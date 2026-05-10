import { ArrowRight, Clock, LockKeyhole, MapPin } from "lucide-react";
import type { LocationData } from "../../types";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { publicPath } from "../../utils/paths";

interface LocationCardProps {
  location: LocationData;
  onSelect?: () => void;
}

export function LocationCard({ location, onSelect }: LocationCardProps) {
  const isReady = location.status === "ready";
  const statusText = isReady ? "Demo ready" : location.status === "preview" ? "Preview only" : "Coming soon";

  return (
    <article className="group relative min-h-[440px] overflow-hidden rounded-lg border border-white/12 bg-charcoal shadow-2xl shadow-black/25">
      <img
        src={publicPath(location.image)}
        alt={`${location.area} location preview`}
        className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.12),rgba(0,0,0,.7)_46%,rgba(0,0,0,.92))]" />
      <div className="relative flex h-full min-h-[440px] flex-col justify-between p-5">
        <div className="flex items-start justify-between gap-3">
          <Badge tone={isReady ? "gold" : "dark"}>{statusText}</Badge>
          <span className="rounded-full bg-black/45 p-3 text-white backdrop-blur">
            {isReady ? <MapPin aria-hidden="true" className="h-5 w-5" /> : <LockKeyhole aria-hidden="true" className="h-5 w-5" />}
          </span>
        </div>
        <div>
          <p className="text-sm font-bold text-old-gold">{location.coordinatesLabel}</p>
          <h3 className="mt-2 font-display text-3xl font-black leading-tight text-white">
            {location.name}
          </h3>
          <p className="mt-3 text-sm leading-7 text-white/72">{location.description}</p>
          <p className="mt-4 rounded-lg border border-white/12 bg-white/10 p-3 text-xs font-bold uppercase tracking-[0.12em] text-white/78 backdrop-blur">
            {location.memoryCue}
          </p>
          {isReady ? (
            <Button
              className="mt-5 w-full"
              onClick={onSelect}
              icon={<ArrowRight aria-hidden="true" className="h-5 w-5" />}
            >
              Launch demo
            </Button>
          ) : (
            <div className="mt-5 flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/18 bg-white/10 px-4 py-3 text-sm font-extrabold text-white/72">
              <Clock aria-hidden="true" className="h-4 w-4" />
              {statusText}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
