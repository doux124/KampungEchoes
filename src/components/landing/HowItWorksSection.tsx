import { Camera, MapPin, Sparkles } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";

const steps = [
  {
    icon: MapPin,
    title: "Go to a supported place",
    copy: "Pick a real Singapore location prepared for the demo, starting with Smith Street in Chinatown.",
    detail: "Location layer",
  },
  {
    icon: Camera,
    title: "Point your camera",
    copy: "The phone view becomes the anchor for a future reconstruction from the same position.",
    detail: "Present view",
  },
  {
    icon: Sparkles,
    title: "Reveal the past",
    copy: "For the MVP, a premade video simulates the old scene replacing the exact camera viewpoint.",
    detail: "Memory reveal",
  },
];

export function HowItWorksSection() {
  return (
    <section className="bg-charcoal px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="How it works"
        title="A simple ritual: arrive, align, reveal."
        copy="The prototype keeps the interaction focused on the emotional moment: seeing a familiar street shift into another time."
      />
      <div className="mx-auto mt-12 grid max-w-6xl gap-4 md:grid-cols-3">
        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <article
              className="group relative overflow-hidden rounded-lg border border-white/12 bg-white/[0.06] p-6 shadow-2xl shadow-black/20 transition duration-200 hover:-translate-y-1"
              key={step.title}
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-old-gold via-sage to-clay" />
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-old-gold/16 text-old-gold">
                <Icon aria-hidden="true" className="h-6 w-6" />
              </div>
              <p className="mt-8 text-xs font-extrabold uppercase tracking-[0.18em] text-sage">{step.detail}</p>
              <h3 className="mt-2 font-display text-2xl font-black text-white">{step.title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/68">{step.copy}</p>
              <div className="mt-8 h-20 rounded-lg border border-white/10 bg-map-lines bg-[length:34px_34px] opacity-80" />
            </article>
          );
        })}
      </div>
    </section>
  );
}
