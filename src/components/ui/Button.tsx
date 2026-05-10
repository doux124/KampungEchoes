import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  icon?: ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-old-gold text-charcoal shadow-glow hover:-translate-y-0.5 hover:bg-warm-amber focus-visible:ring-old-gold",
  secondary:
    "border border-white/25 bg-white/12 text-white backdrop-blur-xl hover:-translate-y-0.5 hover:bg-white/18 focus-visible:ring-old-gold",
  ghost:
    "text-white/85 hover:bg-white/10 focus-visible:ring-old-gold",
  danger:
    "bg-clay text-white hover:-translate-y-0.5 hover:bg-sepia focus-visible:ring-clay",
};

export function Button({ variant = "primary", icon, className = "", children, ...props }: ButtonProps) {
  return (
    <button
      className={`inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-extrabold transition duration-200 ease-out focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal disabled:cursor-not-allowed disabled:opacity-55 ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {icon}
      <span>{children}</span>
    </button>
  );
}
