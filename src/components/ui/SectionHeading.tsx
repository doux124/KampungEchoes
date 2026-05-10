interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  copy: string;
  align?: "left" | "center";
}

export function SectionHeading({ eyebrow, title, copy, align = "center" }: SectionHeadingProps) {
  return (
    <div className={`mx-auto max-w-3xl ${align === "center" ? "text-center" : "text-left"}`}>
      <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-old-gold">{eyebrow}</p>
      <h2 className="mt-3 font-display text-4xl font-black leading-tight text-white md:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-8 text-white/72 md:text-lg">{copy}</p>
    </div>
  );
}
