"use client";

import { motion } from "framer-motion";
import { Section } from "../arche/section";
import { Reveal } from "../arche/reveal";
import { siteConfig } from "@/lib/site-config";

/**
 * About + Philosophy kombiniert.
 */
export function AboutSection() {
  return (
    <Section id="section-about" ariaLabel="Über arche.">
      {/* Header */}
      <Reveal className="max-w-3xl mb-12 md:mb-16">
        <span className="text-eyebrow">About arche.</span>
        <h2 className="text-headline mt-4">
          Klein im Team.
          <br />
          Groß im Anspruch.
        </h2>
      </Reveal>

      {/* Haupttext + Founder-Karte */}
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
        <Reveal className="lg:col-span-7" delay={0.05}>
          <p className="text-body-lg text-foreground/90 leading-relaxed">
            arche. ist ein unabhängiges digitales Studio, das ich Schritt für
            Schritt aufbaue. Mein Anspruch ist simpel: gute digitale Arbeit,
            ohne das typische Agentur-Theater dazwischen.
          </p>
          <p className="text-body-lg text-muted-foreground leading-relaxed mt-5">
            Du bekommst keinen Account Manager und keine fünf Ansprechpartner.
            Du arbeitest direkt mit mir — von der ersten Idee bis zum fertigen
            Produkt.
          </p>
          <p className="text-body-lg text-muted-foreground leading-relaxed mt-5">
            Dabei soll professionelle digitale Gestaltung nicht nur großen
            Unternehmen vorbehalten sein. Auch ein kleines Business, ein
            persönliches Projekt oder eine gute Idee verdient einen Auftritt,
            auf den man stolz sein kann.
          </p>
        </Reveal>

        <Reveal className="lg:col-span-5" delay={0.1}>
          <div className="relative surface rounded-2xl p-6 md:p-8 h-full flex flex-col justify-between gap-6 overflow-hidden">
            <div
              className="absolute -top-12 -right-12 w-40 h-40 rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, oklch(0.62 0.24 295 / 0.15) 0%, transparent 70%)",
              }}
            />
            <div className="relative z-10">
              <div className="text-eyebrow">Founder</div>
              <div className="text-title mt-3 text-foreground">
                {siteConfig.founder.name}
              </div>
              <div className="text-body text-muted-foreground mt-1">
                {siteConfig.founder.role}
              </div>
            </div>
            <div className="pt-5 border-t border-white/[0.06] space-y-3 relative z-10">
              <ValueRow label="Direkter Ansprechpartner" />
              <ValueRow label="Saubere Umsetzung" />
              <ValueRow label="Klare Kommunikation" />
            </div>
          </div>
        </Reveal>
      </div>

      {/* Philosophie */}
      <Reveal className="mt-16 md:mt-24" delay={0.05}>
        <div className="border-t border-white/[0.06] pt-10 md:pt-14">
          <span className="text-eyebrow">Wofür arche. steht</span>
          <div className="mt-8 flex flex-col gap-6 md:gap-8">
            {siteConfig.philosophy.map((statement, i) => (
              <motion.div
                key={i}
                className="group flex items-baseline gap-4 md:gap-6"
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <span className="text-micro text-muted-foreground/70 font-mono shrink-0 transition-colors group-hover:text-[oklch(0.72_0.20_295)] duration-500">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-title text-foreground/95 leading-snug">
                  {statement}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

function ValueRow({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-body text-foreground/85">{label}</span>
      <span
        className="inline-block w-1.5 h-1.5 rounded-full bg-[oklch(0.62_0.24_295)]"
        aria-hidden="true"
      />
    </div>
  );
}
