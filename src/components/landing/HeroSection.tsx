import { ArrowRight, MapPinned } from "lucide-react";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { HeroPhoneMockup } from "./HeroPhoneMockup";
import { publicPath } from "../../utils/paths";

interface HeroSectionProps {
  onTryDemo: () => void;
  onExplore: () => void;
}

export function HeroSection({ onTryDemo, onExplore }: HeroSectionProps) {
  return (
    <section className="relative isolate overflow-hidden bg-charcoal pt-24">
      <div className="absolute inset-0 -z-20">
        <img
          src={publicPath("assets/heritage-shophouses.jpg")}
          alt="Restored Singapore shophouses used as a cinematic heritage backdrop"
          className="h-full w-full object-cover opacity-34"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,47,53,.96),rgba(6,47,53,.72)_42%,rgba(22,23,23,.38)),linear-gradient(180deg,rgba(22,23,23,.25),#161717_94%)]" />
      </div>
      <div className="absolute inset-0 -z-10 bg-map-lines bg-[length:90px_90px] opacity-35" />
      <div className="mx-auto grid min-h-[calc(100dvh-4rem)] max-w-7xl items-center gap-12 px-4 pb-20 pt-12 sm:px-6 lg:grid-cols-[1.02fr_.98fr] lg:px-8">
        <div className="max-w-3xl">
          <Badge tone="gold">Frontend MVP · Chinatown demo ready</Badge>
          <h1 className="mt-6 max-w-4xl font-display text-5xl font-black leading-[0.98] text-white sm:text-6xl lg:text-7xl">
            Stand in the present. Reveal the Singapore they remember.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/76 sm:text-xl">
            Kampung Echoes transforms selected Singapore locations into immersive then-and-now
            memory portals, helping families rediscover the places that shaped earlier generations.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button onClick={onTryDemo} icon={<ArrowRight aria-hidden="true" className="h-5 w-5" />}>
              Try Chinatown Demo
            </Button>
            <Button
              variant="secondary"
              onClick={onExplore}
              icon={<MapPinned aria-hidden="true" className="h-5 w-5" />}
            >
              Explore Locations
            </Button>
          </div>
          <div className="mt-10 grid max-w-xl grid-cols-3 gap-3 text-white">
            {["Camera-first", "One demo video", "No backend"].map((item) => (
              <div key={item} className="rounded-lg border border-white/12 bg-white/8 p-3 backdrop-blur">
                <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-old-gold">
                  MVP
                </p>
                <p className="mt-1 text-sm font-bold">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <HeroPhoneMockup />
      </div>
    </section>
  );
}
