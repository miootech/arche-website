"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Section } from "../arche/section";
import { Reveal } from "../arche/reveal";
import { ArcheButton } from "../arche/button";
import { siteConfig } from "@/lib/site-config";

interface FaqProps {
  onContactClick: () => void;
}

export function FaqSection({ onContactClick }: FaqProps) {
  const [open, setOpen] = useState<number | null>(0);

  // JSON-LD für FAQ — wichtig für Google Rich Results
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: siteConfig.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <Section id="section-faq" ariaLabel="Häufige Fragen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Reveal className="max-w-2xl mb-12 md:mb-16">
        <span className="text-eyebrow">FAQ</span>
        <h2 className="text-headline mt-4">Bevor du fragst.</h2>
      </Reveal>

      <div className="max-w-2xl flex flex-col gap-2">
        {siteConfig.faq.map((item, i) => (
          <Reveal key={i} delay={i * 0.03}>
            <FaqItem
              q={item.q}
              a={item.a}
              isOpen={open === i}
              onToggle={() => setOpen(open === i ? null : i)}
            />
          </Reveal>
        ))}
      </div>

      {/* CTA */}
      <Reveal delay={0.1} className="mt-10 md:mt-14">
        <div className="flex items-center justify-between gap-4 surface rounded-2xl p-5 md:p-6">
          <div>
            <h3 className="text-body-lg text-foreground font-medium">
              Noch etwas unklar?
            </h3>
            <p className="text-body text-muted-foreground mt-1">
              Frag einfach. Eine kurze Nachricht reicht.
            </p>
          </div>
          <ArcheButton variant="ghost" size="sm" onClick={onContactClick}>
            <span>Kontakt aufnehmen</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </ArcheButton>
        </div>
      </Reveal>
    </Section>
  );
}

function FaqItem({
  q,
  a,
  isOpen,
  onToggle,
}: {
  q: string;
  a: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="surface rounded-xl overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-3 p-4 md:p-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-body text-foreground font-medium">{q}</span>
        <motion.div
          className="shrink-0 w-6 h-6 rounded-full bg-white/[0.04] border border-white/[0.06] flex items-center justify-center"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <Plus className="w-3 h-3 text-foreground" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-4 md:px-5 pb-4 md:pb-5">
              <div className="h-px bg-white/[0.06] mb-3" />
              <p className="text-body text-muted-foreground leading-relaxed">
                {a}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
