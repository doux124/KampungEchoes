import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  tone?: "gold" | "green" | "dark" | "light";
  className?: string;
}

const tones = {
  gold: "border-old-gold/45 bg-old-gold/15 text-old-gold",
  green: "border-sage/45 bg-sage/15 text-sage",
  dark: "border-white/15 bg-charcoal/70 text-white",
  light: "border-charcoal/10 bg-rice-paper/80 text-deep-teal",
};

export function Badge({ children, tone = "gold", className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-extrabold uppercase tracking-[0.14em] ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
