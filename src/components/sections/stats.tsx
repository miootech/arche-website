"use client";

import { motion } from "framer-motion";
import { Reveal } from "../arche/reveal";

/**
 * Trust Row — echte, nicht-erfundene Fakten.
 * Hairline-Grid, sehr clean.
 */
const STATS = [
  {
    value: "ab 169 €",
    label: "Einstieg",
    sub: "Klare Preise statt Pakete voller Extras",
  },
  {
    value: "1:1",
    label: "Kontakt",
    sub: "Direkt mit dem Founder",
  },
  {
    value: "100 %",
    label: "Unabhängig",
    sub: "Keine Konzern-Struktur, keine Zwischenstufen",
  },
  {
    value: "0 €",
    label: "Erstgespräch",
    sub: "Erst reden. Dann entscheiden.",
  },
] as const;

export function StatsRow() {
  return (
    <section
      aria-label="Eckdaten auf einen Blick"
      className="relative w-full py-12 md:py-16 border-y border-white/[0.04]"
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.04] rounded-2xl overflow-hidden">
          {STATS.map((stat, i) => (
            <Reveal
              key={i}
              delay={i * 0.08}
              className="bg-background p-5 md:p-7 flex flex-col gap-1"
              variant="fade"
            >
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.15 + i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground"
              >
                {stat.value}
              </motion.div>
              <div className="text-body text-foreground/85 font-medium mt-1">
                {stat.label}
              </div>
              <div className="text-micro text-muted-foreground">{stat.sub}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
