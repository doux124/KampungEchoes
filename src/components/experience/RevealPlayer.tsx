import { useRef, useState } from "react";
import { ArrowLeft, List, RotateCcw } from "lucide-react";
import { Button } from "../ui/Button";
import { EmptyState } from "../ui/EmptyState";

interface RevealPlayerProps {
  onReturnToPresent: () => void;
  onChooseAnother: () => void;
}

export function RevealPlayer({ onReturnToPresent, onChooseAnother }: RevealPlayerProps) {
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const replay = () => {
    if (videoRef.current && !videoError) {
      videoRef.current.currentTime = 0;
      void videoRef.current.play();
    }
  };

  return (
    <div className="absolute inset-0 bg-charcoal text-white">
      {!videoError ? (
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          src="/demo/past-reveal.mp4"
          controls
          autoPlay
          playsInline
          onError={() => setVideoError(true)}
          aria-label="Past reveal demo video"
        >
          Place your premade reveal video at public/demo/past-reveal.mp4
        </video>
      ) : (
        <div className="flex h-full items-center justify-center p-5">
          <EmptyState
            title="Past reveal video placeholder"
            copy="Add your demo video at public/demo/past-reveal.mp4. Demo video will appear here."
          />
        </div>
      )}
      <div className="pointer-events-none absolute inset-x-0 top-0 bg-gradient-to-b from-black/80 to-transparent p-5 pt-[max(1.25rem,env(safe-area-inset-top))]">
        <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-old-gold">Past reconstruction preview</p>
        <h2 className="mt-1 font-display text-2xl font-black">Smith Street memory layer</h2>
      </div>
      <div className="absolute inset-x-4 bottom-4 grid gap-2 rounded-lg border border-white/14 bg-black/48 p-3 backdrop-blur-xl sm:grid-cols-3">
        <Button variant="secondary" onClick={replay} icon={<RotateCcw aria-hidden="true" className="h-5 w-5" />}>
          Replay
        </Button>
        <Button
          variant="secondary"
          onClick={onReturnToPresent}
          icon={<ArrowLeft aria-hidden="true" className="h-5 w-5" />}
        >
          Return to Present
        </Button>
        <Button variant="secondary" onClick={onChooseAnother} icon={<List aria-hidden="true" className="h-5 w-5" />}>
          Choose Another Location
        </Button>
      </div>
    </div>
  );
}
