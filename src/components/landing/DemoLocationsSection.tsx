import { locations } from "../../data/locations";
import { LocationCard } from "../experience/LocationCard";
import { SectionHeading } from "../ui/SectionHeading";

interface DemoLocationsSectionProps {
  onTryDemo: () => void;
}

export function DemoLocationsSection({ onTryDemo }: DemoLocationsSectionProps) {
  return (
    <section className="relative overflow-hidden bg-deep-teal px-4 py-20 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-paper-fiber opacity-[0.08]" />
      <div className="relative mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Supported locations"
          title="Three Singapore places, one polished demo."
          copy="Chinatown is ready for the full frontend simulation. Tiong Bahru and Queenstown show the shape of future location packs."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {locations.map((location) => (
            <LocationCard
              key={location.id}
              location={location}
              onSelect={location.status === "ready" ? onTryDemo : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
