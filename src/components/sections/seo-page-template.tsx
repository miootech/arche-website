"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, MapPin } from "lucide-react";
import { Reveal } from "@/components/arche/reveal";
import { ArcheButton } from "@/components/arche/button";
import { siteConfig } from "@/lib/site-config";

interface SeoPageProps {
  eyebrow: string;
  title: string;
  description: string;
  heroHeadline: string;
  heroSub: string;
  bullets: string[];
  sections: { heading: string; body: string }[];
  faqItems: { q: string; a: string }[];
  inquiry: string;
}

export function SeoPageTemplate({
  eyebrow,
  title,
  description,
  heroHeadline,
  heroSub,
  bullets,
  sections,
  faqItems,
  inquiry,
}: SeoPageProps) {
  const goContact = () => {
    window.location.href = `${siteConfig.url}/#contact`;
  };

  return (
    <main className="min-h-screen bg-background text-foreground pt-20">
      <div className="mx-auto w-full max-w-4xl px-5 sm:px-8 py-16 md:py-24">
        {/* Zurück Link */}
        <Link
          href="/"
          className="group inline-flex items-center gap-2 text-body text-muted-foreground hover:text-foreground transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
          <span>Zurück zur Startseite</span>
        </Link>

        {/* Header */}
        <div className="mb-12 md:mb-16">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-3.5 h-3.5 text-[oklch(0.72_0.20_295)]" />
            <span className="text-eyebrow">{eyebrow}</span>
          </div>
          <h1 className="text-hero text-foreground mb-6">{heroHeadline}</h1>
          <p className="text-body-lg text-muted-foreground max-w-2xl leading-relaxed">
            {heroSub}
          </p>
        </div>

        {/* Bullets */}
        <div className="grid sm:grid-cols-2 gap-3 mb-16 md:mb-20">
          {bullets.map((b, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="surface rounded-xl p-5 flex items-start gap-3">
                <Check className="w-4 h-4 text-[oklch(0.72_0.20_295)] mt-1 shrink-0" />
                <span className="text-body text-foreground/90">{b}</span>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Content Sections */}
        <div className="space-y-12 mb-16 md:mb-20">
          {sections.map((s, i) => (
            <Reveal key={i}>
              <section>
                <h2 className="text-title text-foreground mb-4">
                  <span className="text-[oklch(0.72_0.20_295)] mr-3 font-mono text-micro">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {s.heading}
                </h2>
                <p className="text-body-lg text-muted-foreground leading-relaxed">
                  {s.body}
                </p>
              </section>
            </Reveal>
          ))}
        </div>

        {/* FAQ */}
        {faqItems.length > 0 && (
          <div className="mb-16 md:mb-20">
            <h2 className="text-title text-foreground mb-6">Häufige Fragen</h2>
            <div className="space-y-3">
              {faqItems.map((f, i) => (
                <Reveal key={i} delay={i * 0.04}>
                  <div className="surface rounded-xl p-5">
                    <h3 className="text-body-lg text-foreground font-medium mb-2">
                      {f.q}
                    </h3>
                    <p className="text-body text-muted-foreground leading-relaxed">
                      {f.a}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <Reveal>
          <div className="surface rounded-2xl p-8 md:p-10 text-center">
            <h2 className="text-title text-foreground mb-3">
              Bereit, wenn du es bist.
            </h2>
            <p className="text-body text-muted-foreground mb-6 max-w-md mx-auto">
              Unverbindliches Erstgespräch. Direkt mit Ali aus Ludwigshafen.
            </p>
            <ArcheButton variant="purple" size="md" onClick={goContact}>
              <span>Kostenlos sprechen</span>
              <ArrowRight className="w-4 h-4" />
            </ArcheButton>
          </div>
        </Reveal>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-white/[0.06]">
          <p className="text-micro text-muted-foreground/70">
            {siteConfig.brand} — {siteConfig.business.city} ·{" "}
            {siteConfig.email}
          </p>
        </div>
      </div>
    </main>
  );
}
