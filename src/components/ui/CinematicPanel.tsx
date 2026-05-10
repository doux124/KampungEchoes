import type { HTMLAttributes } from "react";

export function CinematicPanel({ className = "", ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`relative overflow-hidden rounded-lg border border-white/12 bg-charcoal/72 shadow-2xl shadow-black/35 backdrop-blur-xl before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_20%_10%,rgba(216,166,58,.18),transparent_32%),radial-gradient(circle_at_85%_20%,rgba(31,107,85,.2),transparent_35%)] before:content-[''] ${className}`}
      {...props}
    />
  );
}
