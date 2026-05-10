import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowLeft, MapPinned, Sparkles } from "lucide-react";
import type { CameraState, LocationData, RevealState } from "../../types";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { CameraPermissionFallback } from "./CameraPermissionFallback";
import { RevealPlayer } from "./RevealPlayer";
import { RevealTransition } from "./RevealTransition";
import { ScanningOverlay } from "./ScanningOverlay";

interface CameraExperienceProps {
  location: LocationData;
  onBack: () => void;
  onChooseAnother: () => void;
}

export function CameraExperience({ location, onBack, onChooseAnother }: CameraExperienceProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const [cameraState, setCameraState] = useState<CameraState>("requesting");
  const [revealState, setRevealState] = useState<RevealState>("present");
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let mounted = true;

    const startCamera = async () => {
      if (!navigator.mediaDevices?.getUserMedia) {
        setCameraState("unavailable");
        return;
      }

      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: { ideal: "environment" } },
          audio: false,
        });
        if (!mounted) {
          stream.getTracks().forEach((track) => track.stop());
          return;
        }
        streamRef.current = stream;
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          await videoRef.current.play();
        }
        setCameraState("live");
      } catch {
        setCameraState("denied");
      }
    };

    void startCamera();

    return () => {
      mounted = false;
      streamRef.current?.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    };
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => setSeconds((value) => value + 1), 1000);
    return () => window.clearInterval(timer);
  }, []);

  const formattedTimer = useMemo(() => {
    const minutes = Math.floor(seconds / 60).toString().padStart(2, "0");
    const remainingSeconds = (seconds % 60).toString().padStart(2, "0");
    return `${minutes}:${remainingSeconds}`;
  }, [seconds]);

  const revealPast = () => {
    setRevealState("transitioning");
    window.setTimeout(() => setRevealState("revealed"), 950);
  };

  return (
    <main className="relative min-h-dvh overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          className={`h-full w-full object-cover ${cameraState === "live" ? "block" : "hidden"}`}
          muted
          playsInline
          aria-label="Live camera feed"
        />
        {cameraState !== "live" ? (
          <CameraPermissionFallback image={location.image} title={location.name} />
        ) : null}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.68),rgba(0,0,0,.08)_34%,rgba(0,0,0,.82))]" />
      </div>

      <ScanningOverlay />

      <div className="relative z-20 flex min-h-dvh flex-col justify-between p-4 pt-[max(1rem,env(safe-area-inset-top))]">
        <div className="rounded-lg border border-white/14 bg-black/42 p-4 backdrop-blur-xl">
          <div className="flex items-start justify-between gap-3">
            <div>
              <Badge tone={revealState === "present" ? "green" : "gold"}>
                {revealState === "present" ? "Current view" : "Past view"}
              </Badge>
              <h1 className="mt-3 font-display text-2xl font-black leading-tight">{location.name}</h1>
              <p className="mt-1 text-sm text-white/64">{location.coordinatesLabel}</p>
            </div>
            <div className="rounded-full bg-red-500 px-3 py-1 text-xs font-black shadow-lg">
              REC {formattedTimer}
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2 text-sm text-white/70">
            <MapPinned aria-hidden="true" className="h-4 w-4 text-old-gold" />
            <span>
              {cameraState === "live"
                ? "Live camera aligned to present-day scene"
                : "Static fallback aligned for demo mode"}
            </span>
          </div>
        </div>

        <div className="rounded-lg border border-white/14 bg-black/50 p-4 backdrop-blur-xl">
          <p className="mb-3 text-center text-xs font-extrabold uppercase tracking-[0.2em] text-old-gold">
            Replace this exact camera position with an AI-generated historical reconstruction
          </p>
          <div className="grid gap-3">
            <Button
              className="min-h-16 text-base"
              onClick={revealPast}
              icon={<Sparkles aria-hidden="true" className="h-5 w-5" />}
            >
              Reveal the Past
            </Button>
            <Button variant="secondary" onClick={onBack} icon={<ArrowLeft aria-hidden="true" className="h-5 w-5" />}>
              Back
            </Button>
          </div>
        </div>
      </div>

      {revealState === "transitioning" ? <RevealTransition /> : null}
      {revealState === "revealed" ? (
        <RevealPlayer onReturnToPresent={() => setRevealState("present")} onChooseAnother={onChooseAnother} />
      ) : null}
    </main>
  );
}
