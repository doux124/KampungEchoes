import { MapPinned } from "lucide-react";
import { Button } from "../ui/Button";

interface HeaderProps {
  onLogoClick: () => void;
  onExplore: () => void;
  onTryDemo: () => void;
}

export function Header({ onLogoClick, onExplore, onTryDemo }: HeaderProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-charcoal/72 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <button
          className="flex min-h-11 cursor-pointer items-center gap-3 rounded-full pr-3 text-left text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-old-gold"
          onClick={onLogoClick}
          aria-label="Go to Kampung Echoes home"
        >
          <span className="grid h-10 w-10 place-items-center rounded-full bg-old-gold text-charcoal">
            <MapPinned aria-hidden="true" className="h-5 w-5" />
          </span>
          <span>
            <span className="block font-display text-lg font-black leading-none">Kampung Echoes</span>
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/55">
              Singapore memory portal
            </span>
          </span>
        </button>
        <div className="hidden items-center gap-2 md:flex">
          <Button variant="ghost" onClick={onExplore}>
            Explore Locations
          </Button>
          <Button onClick={onTryDemo}>Try Chinatown Demo</Button>
        </div>
        <Button className="md:hidden" onClick={onTryDemo}>
          Try Demo
        </Button>
      </nav>
    </header>
  );
}
