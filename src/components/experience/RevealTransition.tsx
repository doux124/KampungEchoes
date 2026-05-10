export function RevealTransition() {
  return (
    <div className="absolute inset-0 z-40 grid place-items-center bg-charcoal/80 text-center text-white backdrop-blur-md">
      <div className="reveal-shimmer rounded-lg border border-old-gold/35 bg-white/10 px-6 py-5 shadow-glow">
        <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-old-gold">Reconstructing memory layer…</p>
        <p className="mt-3 max-w-xs text-sm leading-6 text-white/72">
          Simulating an AI-generated historical reconstruction from the same camera position.
        </p>
      </div>
    </div>
  );
}
