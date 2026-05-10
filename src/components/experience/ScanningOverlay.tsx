export function ScanningOverlay() {
  return (
    <div className="pointer-events-none absolute inset-0 z-10">
      <div className="absolute inset-6 rounded-lg border border-old-gold/55 shadow-glow">
        <span className="absolute -left-px -top-px h-12 w-12 border-l-4 border-t-4 border-old-gold" />
        <span className="absolute -right-px -top-px h-12 w-12 border-r-4 border-t-4 border-old-gold" />
        <span className="absolute -bottom-px -left-px h-12 w-12 border-b-4 border-l-4 border-old-gold" />
        <span className="absolute -bottom-px -right-px h-12 w-12 border-b-4 border-r-4 border-old-gold" />
        <div className="absolute left-1/2 top-0 h-full w-px bg-old-gold/22" />
        <div className="absolute top-1/2 h-px w-full bg-old-gold/22" />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(216,166,58,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(216,166,58,.08)_1px,transparent_1px)] bg-[length:34px_34px] opacity-60" />
      <div className="scan-line absolute left-8 right-8 top-20 h-px bg-old-gold/80 shadow-glow" />
    </div>
  );
}
