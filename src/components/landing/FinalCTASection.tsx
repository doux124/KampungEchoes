import { Sparkles } from "lucide-react";
import { Button } from "../ui/Button";

interface FinalCTASectionProps {
  onTryDemo: () => void;
}

export function FinalCTASection({ onTryDemo }: FinalCTASectionProps) {
  return (
    <section className="bg-paper-fiber px-4 py-20 text-charcoal sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-lg border border-charcoal/10 bg-rice-paper/80 p-8 shadow-2xl shadow-charcoal/15 md:p-12">
        <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-sepia">Frontend proof-of-concept</p>
        <h2 className="mt-4 max-w-3xl font-display text-4xl font-black leading-tight md:text-5xl">
          Start at Chinatown and make the present give way to memory.
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-8 text-charcoal/72">
          The demo path is intentionally narrow: choose Chinatown, open the camera-style screen,
          and tap one luminous action to simulate a historical reveal.
        </p>
        <Button
          className="mt-8"
          onClick={onTryDemo}
          icon={<Sparkles aria-hidden="true" className="h-5 w-5" />}
        >
          Launch Chinatown Demo
        </Button>
      </div>
    </section>
  );
}
