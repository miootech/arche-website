"use client";

import { Section } from "../arche/section";
import { Reveal } from "../arche/reveal";
import { siteConfig } from "@/lib/site-config";

const statusStyles: Record<string, string> = {
  Exploring: "bg-amber-500/10 text-amber-300/90 border-amber-500/20",
  Planned:
    "bg-[oklch(0.62_0.24_295/0.12)] text-[oklch(0.72_0.20_295)] border-[oklch(0.62_0.24_295/0.25)]",
  Future: "bg-white/[0.04] text-muted-foreground border-white/10",
};

export function FutureSection() {
  return (
    <Section id="section-future" ariaLabel="Geplante Erweiterungen">
      <Reveal className="max-w-3xl mb-12 md:mb-16">
        <span className="text-eyebrow">What's next</span>
        <h2 className="text-headline mt-4">arche. ist noch nicht fertig.</h2>
        <p className="text-body-lg text-muted-foreground mt-4">
          Und genau das ist der Punkt. Das Studio wächst mit den Projekten —
          Schritt für Schritt, ohne Leistungen zu versprechen, die heute noch
          nicht da sind.
        </p>
      </Reveal>

      <ul className="flex flex-col gap-2 list-none">
        {siteConfig.future.map((item, i) => (
          <li key={i}>
            <Reveal delay={i * 0.04}>
              <div className="flex items-center justify-between gap-4 surface rounded-xl px-5 py-4 md:px-6 md:py-5 hover:bg-white/[0.03] transition-colors">
                <div className="flex items-center gap-4 md:gap-6">
                  <span className="text-micro text-muted-foreground/70 font-mono">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-body-lg text-foreground font-medium">
                    {item.title}
                  </h3>
                </div>
                <span
                  className={`shrink-0 px-2.5 py-0.5 rounded-full text-[0.6875rem] font-medium tracking-wide border ${statusStyles[item.status]}`}
                >
                  {item.status}
                </span>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
