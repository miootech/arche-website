"use client";

import { motion } from "framer-motion";
import { Link2, Scissors, FileText, ArrowUpRight, Sparkles } from "lucide-react";
import { Section } from "../arche/section";
import { Reveal } from "../arche/reveal";
import { siteConfig } from "@/lib/site-config";

const EASE = [0.22, 1, 0.36, 1] as const;

// Icon Mapping je nach Tool-ID
const ICON_MAP: Record<string, typeof Link2> = {
  links: Link2,
  "remove-bg": Scissors,
  "pdf-tools": FileText,
};

export function ToolsSection() {
  const tools = siteConfig.tools;

  if (!tools || tools.length === 0) return null;

  return (
    <Section id="section-tools" ariaLabel="Kostenlose Tools">
      {/* Header */}
      <Reveal className="max-w-3xl mb-12 md:mb-16">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[oklch(0.72_0.20_295)]" />
          <span className="text-eyebrow">Free Tools</span>
        </div>
        <h2 className="text-headline mt-4">
          Kostenlose Tools.
          <br />
          Direkt im Browser.
        </h2>
        <p className="text-body-lg text-muted-foreground mt-4">
          Drei nützliche Tools — gratis, ohne Registrierung, ohne Datenschutz-Sorgen.
          Einfach nutzen.
        </p>
      </Reveal>

      {/* Tools Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
        {tools.map((tool, i) => {
          const Icon = ICON_MAP[tool.id] || Sparkles;
          return (
            <Reveal key={tool.id} delay={i * 0.08}>
              <motion.a
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block surface card-hover-lift rounded-2xl p-6 md:p-7 h-full relative overflow-hidden hover:border-white/[0.12]"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.4, ease: EASE }}
              >
                {/* Subtle gradient on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(80% 60% at 0% 0%, oklch(0.62 0.24 295 / 0.08) 0%, transparent 60%)",
                  }}
                />

                <div className="relative z-10 flex flex-col gap-4 h-full">
                  {/* Icon + Badge */}
                  <div className="flex items-start justify-between">
                    <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center group-hover:bg-[oklch(0.62_0.24_295/0.1)] group-hover:border-[oklch(0.62_0.24_295/0.25)] transition-colors duration-500">
                      <Icon className="w-5 h-5 text-foreground/80 group-hover:text-[oklch(0.72_0.20_295)] transition-colors duration-500" />
                    </div>
                    <span className="text-micro text-foreground/75 px-2.5 py-1 rounded-full border border-white/[0.1] bg-white/[0.03]">
                      {tool.badge}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-title text-foreground">{tool.name}</h3>
                    <p className="text-body text-muted-foreground mt-2 leading-relaxed">
                      {tool.summary}
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between">
                    <span className="text-micro text-muted-foreground group-hover:text-foreground transition-colors">
                      Kostenlos · Keine Anmeldung
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-[oklch(0.72_0.20_295)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                  </div>
                </div>
              </motion.a>
            </Reveal>
          );
        })}
      </div>

      {/* Footer Hinweis */}
      <Reveal delay={0.15} className="mt-8 md:mt-10">
        <p className="text-micro text-muted-foreground text-center max-w-md mx-auto">
          Alle Tools laufen direkt im Browser. Keine Daten werden an Server
          gesendet, die du nicht kontrollierst.
        </p>
      </Reveal>
    </Section>
  );
}
