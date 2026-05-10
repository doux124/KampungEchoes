import { Aperture, Cuboid, Database, ScanLine, Video } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";

const futureSteps = [
  ["Capture camera position", Aperture],
  ["Estimate scene alignment", ScanLine],
  ["Retrieve historical references", Database],
  ["Generate old 3D reconstruction", Cuboid],
  ["Render the past from the same viewpoint", Video],
] as const;

export function FutureTechSection() {
  return (
    <section className="bg-charcoal px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Future AI backend"
          title="The real system would reconstruct memory, not just play a video."
          copy="This MVP does not implement AI, AR, backend storage, or 3D generation. It demonstrates the intended product feeling with a controlled frontend simulation."
        />
        <div className="mt-12 grid gap-3 md:grid-cols-5">
          {futureSteps.map(([label, Icon], index) => (
            <div
              key={label}
              className="relative rounded-lg border border-white/12 bg-white/[0.06] p-5 text-white"
            >
              <p className="text-xs font-black text-old-gold">0{index + 1}</p>
              <Icon aria-hidden="true" className="mt-5 h-7 w-7 text-sage" />
              <p className="mt-5 text-sm font-extrabold leading-6">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
