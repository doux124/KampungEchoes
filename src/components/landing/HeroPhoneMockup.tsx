import { LocateFixed, Route, Sparkles } from "lucide-react";
import { Badge } from "../ui/Badge";
import { PhoneFrame } from "../ui/PhoneFrame";
import { publicPath } from "../../utils/paths";

export function HeroPhoneMockup() {
  return (
    <div className="relative">
      <div className="absolute -left-8 top-12 z-20 hidden rounded-lg border border-white/18 bg-rice-paper/95 p-4 text-deep-teal shadow-2xl md:block">
        <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-sepia">Smith Street · Chinatown</p>
        <p className="mt-1 max-w-[180px] text-sm font-bold">Camera aligned at street level</p>
      </div>
      <div className="absolute -right-2 bottom-20 z-20 hidden rounded-lg border border-old-gold/35 bg-charcoal/88 p-4 text-white shadow-glow backdrop-blur md:block">
        <div className="flex items-center gap-2 text-old-gold">
          <Sparkles aria-hidden="true" className="h-4 w-4" />
          <p className="text-xs font-extrabold uppercase tracking-[0.16em]">Past reconstruction preview</p>
        </div>
        <p className="mt-1 max-w-[190px] text-sm text-white/72">The MVP swaps the camera view for a premade reveal video.</p>
      </div>
      <PhoneFrame>
        <img
          src={publicPath("assets/chinatown-smith-street.jpg")}
          alt="Smith Street Chinatown present-day camera preview"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.48),transparent_38%,rgba(0,0,0,.78))]" />
        <div className="absolute left-4 right-4 top-9 z-10 flex items-center justify-between">
          <Badge tone="dark">Current view</Badge>
          <span className="rounded-full bg-red-500/90 px-3 py-1 text-xs font-black text-white shadow-lg">REC 00:18</span>
        </div>
        <div className="absolute inset-x-7 top-28 h-72 rounded-lg border border-old-gold/60 shadow-glow">
          <div className="absolute left-1/2 top-0 h-full w-px bg-old-gold/35" />
          <div className="absolute top-1/2 h-px w-full bg-old-gold/35" />
        </div>
        <div className="absolute bottom-28 left-6 right-6 rounded-lg border border-white/15 bg-white/12 p-4 text-white backdrop-blur-xl">
          <div className="flex items-center gap-2">
            <LocateFixed aria-hidden="true" className="h-4 w-4 text-old-gold" />
            <p className="text-sm font-extrabold">Smith Street · Chinatown</p>
          </div>
          <div className="mt-3 flex items-center gap-2 text-xs text-white/68">
            <Route aria-hidden="true" className="h-4 w-4" />
            <span>Route line locked to memory layer</span>
          </div>
        </div>
        <div className="absolute bottom-8 left-6 right-6 rounded-full bg-old-gold px-5 py-4 text-center text-sm font-black text-charcoal shadow-glow">
          Reveal the Past
        </div>
        <div className="absolute -right-10 top-40 h-64 w-48 rotate-6 overflow-hidden rounded-lg border border-rice-paper/35 opacity-80 shadow-2xl">
          <img
            src={publicPath("assets/heritage-shophouses.jpg")}
            alt="Ghosted old Singapore shophouse preview"
            className="h-full w-full object-cover sepia"
          />
          <div className="absolute inset-0 bg-old-gold/10 mix-blend-screen" />
        </div>
      </PhoneFrame>
    </div>
  );
}
