"use client";

import { motion } from "framer-motion";
import { Link2, Scissors, FileText, ArrowUpRight, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";
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
    <Section id="section-tools" ariaLabel="Kostenlose Tools und digitale Produkte">
      {/* Header */}
      <Reveal className="max-w-3xl mb-12 md:mb-16">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[oklch(0.72_0.20_295)]" />
          <span className="text-eyebrow">Studio Tools · Digitale Produkte</span>
        </div>
        <h2 className="text-headline mt-4">
          Kostenlose Tools.
          <br />
          Direkt im Browser.
        </h2>
        <p className="text-body-lg text-muted-foreground mt-4">
          Drei nützliche Web-Werkzeuge aus unserem Studio — gratis, ohne Registrierung,
          ohne Werbung und mit 100% Datenschutz durch lokale Browser-Berechnung.
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
                title={tool.anchorText}
                aria-label={tool.anchorText}
                className="group block surface card-hover-lift rounded-2xl p-6 md:p-7 h-full relative overflow-hidden hover:border-white/[0.12] transition-colors"
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

                <div className="relative z-10 flex flex-col justify-between gap-4 h-full">
                  {/* Top */}
                  <div>
                    {/* Icon + Badge */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center group-hover:bg-[oklch(0.62_0.24_295/0.1)] group-hover:border-[oklch(0.62_0.24_295/0.25)] transition-colors duration-500">
                        <Icon className="w-5 h-5 text-foreground/80 group-hover:text-[oklch(0.72_0.20_295)] transition-colors duration-500" />
                      </div>
                      <span className="text-micro text-foreground/75 px-2.5 py-1 rounded-full border border-white/[0.1] bg-white/[0.03]">
                        {tool.badge}
                      </span>
                    </div>

                    {/* Content */}
                    <h3 className="text-title text-foreground">{tool.name}</h3>
                    <p className="text-xs text-[oklch(0.72_0.20_295)] mt-0.5 font-medium">
                      {tool.headline}
                    </p>
                    <p className="text-body text-muted-foreground mt-2 leading-relaxed">
                      {tool.summary}
                    </p>
                  </div>

                  {/* CTA with descriptive anchor */}
                  <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between">
                    <span className="text-micro text-muted-foreground group-hover:text-foreground transition-colors font-medium">
                      {tool.id === "links"
                        ? "kostenlose Link-in-Bio Alternative"
                        : tool.id === "remove-bg"
                          ? "kostenloser KI Hintergrund Entferner"
                          : "kostenlose PDF Tools"}
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-[oklch(0.72_0.20_295)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                  </div>
                </div>
              </motion.a>
            </Reveal>
          );
        })}
      </div>

      {/* Footer / Subpage Link */}
      <Reveal delay={0.15} className="mt-8 md:mt-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 surface rounded-xl p-4 md:p-5 border border-white/[0.06]">
          <p className="text-micro text-muted-foreground text-center sm:text-left">
            Alle Tools laufen direkt im Browser. Keine Bilder oder Dokumente werden an fremde Server gesendet.
          </p>
          <Link
            href="/digitale-produkte"
            className="inline-flex items-center gap-1.5 text-xs text-[oklch(0.72_0.20_295)] hover:text-foreground font-medium transition-colors shrink-0"
          >
            <span>Mehr über unsere digitalen Produkte</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </Reveal>
    </Section>
  );
}

