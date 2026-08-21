"use client";

import { motion } from "framer-motion";
import { Section } from "../arche/section";
import { Reveal } from "../arche/reveal";
import { Sparkles, Zap, Shield, Heart } from "lucide-react";

const FEATURES = [
  {
    icon: Sparkles,
    title: "Kein Baukasten-Gefühl",
    desc: "Deine Website soll nach dir aussehen — nicht nach dem Template von gestern.",
    span: "lg:col-span-2",
  },
  {
    icon: Zap,
    title: "Schnell, weil sauber",
    desc: "Performance wird nicht am Ende repariert. Sie gehört von Anfang an dazu.",
    span: "",
  },
  {
    icon: Shield,
    title: "Transparent",
    desc: "Du weißt, was du bekommst und was es kostet. Keine versteckten Agenturpakete.",
    span: "",
  },
  {
    icon: Heart,
    title: "Direkt",
    desc: "Du sprichst mit der Person, die dein Projekt tatsächlich baut.",
    span: "lg:col-span-2",
  },
] as const;

export function FeaturesSection() {
  return (
    <Section id="section-features" ariaLabel="Warum arche.">
      {/* Header */}
      <Reveal className="max-w-3xl mb-12 md:mb-16">
        <span className="text-eyebrow">The arche. approach</span>
        <h2 className="text-headline mt-4">
          Warum arche.?
        </h2>
      </Reveal>

      {/* Bento Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
        {FEATURES.map((f, i) => {
          const Icon = f.icon;
          return (
            <Reveal key={i} delay={i * 0.07} className={f.span}>
              <motion.div
                className={`group surface card-hover-lift rounded-2xl p-6 md:p-8 h-full flex flex-col gap-4 hover:border-white/[0.12] relative overflow-hidden ${f.span}`}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(80% 60% at 0% 0%, oklch(0.62 0.24 295 / 0.06) 0%, transparent 60%)",
                  }}
                />
                <div className="relative z-10 flex flex-col gap-4 h-full">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center group-hover:bg-[oklch(0.62_0.24_295/0.1)] group-hover:border-[oklch(0.62_0.24_295/0.25)] transition-colors duration-500">
                    <Icon className="w-4 h-4 text-foreground/80 group-hover:text-[oklch(0.72_0.20_295)] transition-colors duration-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-title text-foreground">{f.title}</h3>
                    <p className="text-body text-muted-foreground mt-2 leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
