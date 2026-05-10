import type { ReactNode } from "react";

interface PhoneFrameProps {
  children: ReactNode;
  className?: string;
  label?: string;
}

export function PhoneFrame({ children, className = "", label }: PhoneFrameProps) {
  return (
    <div
      className={`relative mx-auto w-full max-w-[330px] rounded-[2.4rem] border border-white/25 bg-charcoal p-2 shadow-phone ${className}`}
    >
      <div className="absolute left-1/2 top-3 z-20 h-5 w-24 -translate-x-1/2 rounded-full bg-black/75" />
      <div className="relative min-h-[610px] overflow-hidden rounded-[1.9rem] bg-deep-teal">
        {label ? (
          <span className="absolute bottom-4 left-1/2 z-20 -translate-x-1/2 rounded-full bg-black/50 px-3 py-1 text-[11px] font-bold text-white/80 backdrop-blur">
            {label}
          </span>
        ) : null}
        {children}
      </div>
    </div>
  );
}
