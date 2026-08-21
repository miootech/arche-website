"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Reveal } from "../arche/reveal";

interface CtaBannerProps {
  onContactClick: () => void;
  title?: string;
  subtitle?: string;
}

/**
 * Subtiler CTA Banner.
 */
export function CtaBanner({
  onContactClick,
  title = "Du musst noch nicht alles wissen.",
  subtitle = "Ein kurzes Gespräch reicht für den ersten Schritt. Kostenlos, unverbindlich und ohne Verkaufsshow.",
}: CtaBannerProps) {
  return (
    <section className="relative py-12 md:py-20" aria-label="Handlungsaufruf">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <Reveal>
          <motion.div
            className="relative surface rounded-3xl p-8 md:p-16 overflow-hidden"
            whileHover={{ scale: 1.005 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-[120%] h-[150%] pointer-events-none opacity-60"
              style={{
                background:
                  "radial-gradient(50% 50% at 50% 50%, oklch(0.62 0.24 295 / 0.12) 0%, transparent 60%)",
              }}
            />

            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-10">
              <div className="max-w-xl">
                <h2 className="text-headline text-foreground">{title}</h2>
                <p className="text-body-lg text-muted-foreground mt-3">
                  {subtitle}
                </p>
              </div>

              <motion.button
                onClick={onContactClick}
                className="group shrink-0 inline-flex items-center gap-3 h-12 px-6 rounded-full bg-[oklch(0.62_0.24_295)] text-white font-medium shimmer-on-hover shadow-[0_8px_30px_-12px_oklch(0.62_0.24_295/0.5)] hover:shadow-[0_12px_40px_-8px_oklch(0.62_0.24_295/0.7)] transition-shadow"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <span>Projekt besprechen</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </motion.button>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
