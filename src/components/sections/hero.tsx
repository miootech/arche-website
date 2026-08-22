"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, ArrowDown } from "lucide-react";
import { ArcheButton } from "../arche/button";

const EASE = [0.22, 1, 0.36, 1] as const;

interface HeroProps {
  onContactClick: () => void;
  onWorkClick: () => void;
}

export function HeroSection({ onContactClick, onWorkClick }: HeroProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const glowY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <section
      ref={ref}
      id="section-home"
      aria-labelledby="hero-heading"
      className="relative min-h-[88svh] flex flex-col justify-center overflow-hidden py-16 md:py-24"
    >
      {/* Subtiler Glow */}
      <motion.div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{ y: glowY, opacity: glowOpacity }}
      >
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/4 w-[120vw] max-w-[900px] aspect-square animate-glow-breathe">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(50% 40% at 50% 50%, oklch(0.62 0.24 295 / 0.18) 0%, transparent 65%)",
            }}
          />
        </div>
        <div
          className="absolute inset-x-0 bottom-0 h-1/3"
          style={{
            background: "linear-gradient(to bottom, transparent, var(--background))",
          }}
        />
      </motion.div>

      <motion.div
        className="mx-auto w-full max-w-6xl px-5 sm:px-8"
        style={{ y: contentY }}
      >
        {/* Logo — prominent über der Headline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="mb-8 md:mb-10"
        >
          <img
            src="/arche-lockup.png"
            alt="arche. — Independent Digital Studio"
            className="h-12 md:h-16 w-auto opacity-90"
            width={280}
            height={64}
          />
        </motion.div>

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="inline-block w-6 h-px bg-foreground/20" aria-hidden="true" />
          <span className="text-eyebrow">Independent Digital Studio</span>
        </motion.div>

        {/* H1 — Hauptheadline */}
        <h1
          id="hero-heading"
          className="text-hero text-foreground max-w-4xl"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
            className="block"
          >
            Deine Idee.
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.25 }}
            className="block"
          >
            Richtig umgesetzt
            <span className="arche-dot ml-1" aria-hidden="true" />
          </motion.span>
        </h1>

        {/* Subheadline */}
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.4 }}
          className="text-body-lg text-muted-foreground max-w-xl mt-6 font-normal"
        >
          Websites und digitale Experiences für Menschen, die keinen
          08/15-Auftritt wollen. Konzept, Design und Frontend — direkt mit mir.
          Ab 169 €.
        </motion.h2>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.55 }}
          className="flex flex-wrap items-center gap-3 mt-8 md:mt-10"
        >
          <ArcheButton variant="purple" size="md" onClick={onContactClick}>
            <span>Projekt besprechen</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </ArcheButton>
          <ArcheButton variant="ghost" size="md" onClick={onWorkClick}>
            Arbeit ansehen
          </ArcheButton>
        </motion.div>

        {/* Trust Hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.75 }}
          className="mt-8 flex items-center gap-2 text-micro text-muted-foreground"
        >
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[oklch(0.62_0.24_295)] animate-pulse-soft" aria-hidden="true" />
          <span>Kostenlos · Unverbindlich · Direkt mit dem Founder</span>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        style={{ opacity: glowOpacity }}
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-3.5 h-3.5 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
}
