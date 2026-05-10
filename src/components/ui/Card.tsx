import type { HTMLAttributes } from "react";

export function Card({ className = "", ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`rounded-lg border border-white/12 bg-white/[0.07] shadow-2xl shadow-charcoal/20 backdrop-blur-xl ${className}`}
      {...props}
    />
  );
}
