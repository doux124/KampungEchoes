import { ArrowLeft } from "lucide-react";
import type { LocationData } from "../../types";
import { Button } from "../ui/Button";
import { LocationCard } from "./LocationCard";

interface LocationSelectorProps {
  locations: LocationData[];
  onSelect: (location: LocationData) => void;
  onBack: () => void;
}

export function LocationSelector({ locations, onSelect, onBack }: LocationSelectorProps) {
  return (
    <section className="min-h-dvh bg-charcoal px-4 pb-20 pt-28 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Button
          variant="ghost"
          onClick={onBack}
          icon={<ArrowLeft aria-hidden="true" className="h-5 w-5" />}
        >
          Back
        </Button>
        <div className="mt-8 max-w-3xl">
          <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-old-gold">
            Choose a location
          </p>
          <h1 className="mt-3 font-display text-5xl font-black leading-tight text-white">
            Begin where the street still remembers.
          </h1>
          <p className="mt-4 text-lg leading-8 text-white/72">
            Only Chinatown is wired for the full MVP flow. The other locations preview the future
            collection of Singapore memory portals.
          </p>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {locations.map((location) => (
            <LocationCard key={location.id} location={location} onSelect={() => onSelect(location)} />
          ))}
        </div>
      </div>
    </section>
  );
}
