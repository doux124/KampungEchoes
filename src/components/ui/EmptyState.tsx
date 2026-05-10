import { Film } from "lucide-react";
import { Badge } from "./Badge";

interface EmptyStateProps {
  title: string;
  copy: string;
}

export function EmptyState({ title, copy }: EmptyStateProps) {
  return (
    <div className="flex min-h-[360px] flex-col items-center justify-center rounded-lg border border-dashed border-old-gold/45 bg-black/35 p-8 text-center text-white">
      <div className="mb-5 rounded-full border border-old-gold/30 bg-old-gold/15 p-4 text-old-gold">
        <Film aria-hidden="true" className="h-8 w-8" />
      </div>
      <Badge>Demo video will appear here.</Badge>
      <h3 className="mt-5 font-display text-3xl font-black">{title}</h3>
      <p className="mt-3 max-w-sm text-sm leading-7 text-white/70">{copy}</p>
    </div>
  );
}
