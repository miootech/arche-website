"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Section } from "../arche/section";
import { Reveal } from "../arche/reveal";
import { ArcheButton } from "../arche/button";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

interface ServicesProps {
  onContactClick: (inquiry?: string) => void;
}

export function ServicesSection({ onContactClick }: ServicesProps) {
  return (
    <Section id="section-services" ariaLabel="Leistungen und Preise">
      {/* Header */}
      <Reveal className="max-w-3xl mb-12 md:mb-16">
        <span className="text-eyebrow">Services · Webdesign & Entwicklung</span>
        <h2 className="text-headline mt-4">Einfach anfangen. Später wachsen.</h2>
        <p className="text-body-lg text-muted-foreground mt-4">
          Kein riesiges Paket nötig, wenn du erstmal eine gute Website brauchst.
          Starte mit dem, was du wirklich brauchst — und erweitere später.
        </p>
      </Reveal>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
        {siteConfig.services.map((service, i) => (
          <ServiceCard
            key={service.id}
            service={service}
            index={i}
            onSelect={() => onContactClick(service.inquiry)}
          />
        ))}
      </div>

      {/* Service CTA */}
      <Reveal delay={0.1} className="mt-10 md:mt-14">
        <div className="surface rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          <div className="max-w-md">
            <h3 className="text-title text-foreground">
              Keine Ahnung, welches Paket passt?
            </h3>
            <p className="text-body text-muted-foreground mt-2">
              Kein Problem. Erzähl mir kurz, was du vorhast. Ich sage dir, was
              du wirklich brauchst — und was du dir sparen kannst.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/webdesign"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors px-3 py-2 rounded-lg border border-white/[0.06] hover:bg-white/[0.04]"
            >
              Alle Leistungen ansehen
            </Link>
            <ArcheButton variant="purple" size="md" onClick={() => onContactClick()}>
              <span>Kurz besprechen</span>
              <ArrowRight className="w-4 h-4" />
            </ArcheButton>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

function ServiceCard({
  service,
  index,
  onSelect,
}: {
  service: (typeof siteConfig.services)[number];
  index: number;
  onSelect: () => void;
}) {
  const isHighlight = service.highlight;
  return (
    <Reveal delay={index * 0.05}>
      <motion.div
        className={cn(
          "group w-full text-left rounded-2xl p-5 md:p-6 flex flex-col justify-between gap-4 transition-all duration-300 relative overflow-hidden card-hover-lift h-full",
          isHighlight
            ? "bg-[oklch(0.10_0.02_295)] border border-[oklch(0.62_0.24_295/0.3)] hover:border-[oklch(0.62_0.24_295/0.5)]"
            : "surface hover:bg-white/[0.03] hover:border-white/[0.12]",
        )}
        whileHover={{ y: -3 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: isHighlight
              ? "radial-gradient(80% 60% at 50% 0%, oklch(0.62 0.24 295 / 0.10) 0%, transparent 60%)"
              : "radial-gradient(80% 60% at 50% 0%, oklch(1 0 0 / 0.02) 0%, transparent 60%)",
          }}
        />

        <div>
          {isHighlight && (
            <div className="self-start inline-block mb-3 px-2 py-0.5 rounded-full bg-[oklch(0.62_0.24_295)] text-white text-[0.6875rem] font-medium tracking-wide relative z-10">
              Beliebt
            </div>
          )}

          <div className="relative z-10">
            <div className="text-micro text-muted-foreground font-mono">
              {String(index + 1).padStart(2, "0")}
            </div>
            <h3 className="text-title mt-2 text-foreground">{service.name}</h3>
          </div>

          <div className="text-xl font-semibold tracking-tight text-foreground relative z-10 mt-3">
            {service.priceLabel}
          </div>

          <p className="text-body text-muted-foreground leading-relaxed relative z-10 mt-3">
            {service.summary}
          </p>
        </div>

        <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between relative z-10">
          <Link
            href={service.slug}
            className="text-xs text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
          >
            <span>Details</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
          <button
            onClick={onSelect}
            className="text-xs text-[oklch(0.72_0.20_295)] hover:text-foreground font-medium transition-colors cursor-pointer"
          >
            Anfragen →
          </button>
        </div>
      </motion.div>
    </Reveal>
  );
}

