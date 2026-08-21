"use client";

import { motion } from "framer-motion";
import { Section } from "../arche/section";
import { Reveal } from "../arche/reveal";
import { MessageSquare, FileText, Code, Rocket } from "lucide-react";

const STEPS = [
  {
    icon: MessageSquare,
    title: "01 · Kennenlernen",
    desc: "Du erzählst mir, was du vorhast. Ich stelle die richtigen Fragen und sage dir ehrlich, was sinnvoll ist.",
    duration: "30 Min · Kostenlos",
  },
  {
    icon: FileText,
    title: "02 · Konzept",
    desc: "Wir legen Struktur, Stil und Umfang fest. So weißt du vor der Umsetzung, wohin die Reise geht.",
    duration: "1–2 Tage",
  },
  {
    icon: Code,
    title: "03 · Build",
    desc: "Design, Frontend und Feinschliff. Ich baue das Projekt sauber und mit Fokus auf die Details.",
    duration: "3–7 Tage",
  },
  {
    icon: Rocket,
    title: "04 · Launch",
    desc: "Wir gehen gemeinsam live. Wenn du beim Domain- oder Deployment-Setup Hilfe brauchst, unterstütze ich dich dabei.",
    duration: "1 Tag",
  },
] as const;

export function ProcessSection() {
  return (
    <Section id="section-process" ariaLabel="So läuft ein Projekt ab">
      {/* Header */}
      <Reveal className="max-w-3xl mb-12 md:mb-16">
        <span className="text-eyebrow">So läuft's</span>
        <h2 className="text-headline mt-4">
          Von „Ich hab da eine Idee" zu „Genau so."
        </h2>
        <p className="text-body-lg text-muted-foreground mt-4">
          Ein klarer Ablauf, ohne unnötige Meetings und ohne Rätselraten. Du
          weißt, was als Nächstes passiert.
        </p>
      </Reveal>

      {/* Steps Grid */}
      <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 list-none">
        {STEPS.map((step, i) => {
          const Icon = step.icon;
          return (
            <li key={i}>
              <Reveal delay={i * 0.08}>
                <motion.article
                  className="group surface card-hover-lift rounded-2xl p-5 md:p-6 h-full flex flex-col gap-4 hover:border-white/[0.12]"
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center group-hover:bg-[oklch(0.62_0.24_295/0.1)] group-hover:border-[oklch(0.62_0.24_295/0.25)] transition-colors duration-500">
                      <Icon className="w-4 h-4 text-foreground/80 group-hover:text-[oklch(0.72_0.20_295)] transition-colors duration-500" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-title text-foreground">{step.title}</h3>
                    <p className="text-body text-muted-foreground mt-2 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/[0.06]">
                    <span className="text-micro text-muted-foreground/80">
                      {step.duration}
                    </span>
                  </div>
                </motion.article>
              </Reveal>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
