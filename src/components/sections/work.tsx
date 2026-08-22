"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useCallback } from "react";
import { ArrowRight, ExternalLink, Plus, X, ArrowUpRight, Maximize2 } from "lucide-react";
import { Section } from "../arche/section";
import { Reveal } from "../arche/reveal";
import { ArcheButton } from "../arche/button";
import { siteConfig } from "@/lib/site-config";

interface WorkProps {
  onContactClick: () => void;
}

const EASE = [0.22, 1, 0.36, 1] as const;

type ProjectEntry = { name: string; url: string; year: string };

// Live-URL des Apex Dienstleister Projekts
const PROJECT_URL = "https://handienstleister.pages.dev/";
const PROJECT_NAME = "Apex Dienstleister GmbH";

export function WorkSection({ onContactClick }: WorkProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const subY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);

  const [projectModalOpen, setProjectModalOpen] = useState(false);

  const clientProjects = siteConfig.projects.client as readonly ProjectEntry[];
  const studioProjects = siteConfig.projects.studio as readonly ProjectEntry[];
  const hasMoreProjects = clientProjects.length > 0 || studioProjects.length > 0;

  return (
    <Section id="section-work" ariaLabel={`Referenzprojekt ${PROJECT_NAME}`}>
      {/* Header */}
      <Reveal className="mb-12 md:mb-16">
        <span className="text-eyebrow">Selected Work</span>
        <h2 className="text-headline mt-4">{PROJECT_NAME}</h2>
        <p className="text-body-lg text-muted-foreground mt-4 max-w-lg">
          Eine moderne Web App — von der Konzeption bis zum Deployment. Schau dir
          das Live-Ergebnis direkt hier an.
        </p>
      </Reveal>

      {/* Meta-Zeile */}
      <Reveal
        delay={0.05}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 pb-6 mb-10 md:mb-14 border-b border-white/[0.06]"
      >
        <Meta label="Projekt" value={PROJECT_NAME} />
        <Meta label="Kategorie" value="Web App · Frontend" />
        <Meta label="Rolle" value="Konzept · Design · Umsetzung" />
        <Meta label="Status" value="Live" />
      </Reveal>

      {/* Visual + Sidebar */}
      <div
        ref={ref}
        className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-start"
      >
        {/* Live iframe */}
        <Reveal className="lg:col-span-8" delay={0.1}>
          <LiveIframe url={PROJECT_URL} title={PROJECT_NAME} />
        </Reveal>

        {/* Sidebar */}
        <motion.div
          className="lg:col-span-4"
          style={{ y: subY }}
        >
          <Reveal delay={0.15}>
            <p className="text-body text-muted-foreground leading-relaxed">
              Bei dieser Web App lag der Fokus auf einer klaren Positionierung,
              moderner Ästhetik und kompromissloser Performance.
            </p>
            <p className="text-body text-muted-foreground leading-relaxed mt-4">
              Statt veralteter Strukturen überzeugt das Projekt durch eine
              strukturierte Leistungsübersicht, saubere Typografie und direkte
              Conversion-Pfade.
            </p>

            <div className="mt-6 pt-6 border-t border-white/[0.06]">
              <div className="text-caption mb-3">Im Fokus</div>
              <ul className="flex flex-col gap-2">
                {[
                  "Moderne Web App Architektur",
                  "Optimierte Nutzerführung & Performance",
                  "Responsive auf allen Endgeräten",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-body"
                  >
                    <span
                      className="mt-1.5 inline-block w-1 h-1 rounded-full bg-[oklch(0.62_0.24_295)] shrink-0"
                      aria-hidden="true"
                    />
                    <span className="text-foreground/85">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 flex flex-col gap-3">
              <ArcheButton
                variant="secondary"
                size="sm"
                onClick={onContactClick}
              >
                <span>Ähnliches Projekt besprechen</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </ArcheButton>

              <a
                href={PROJECT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors px-1 py-1"
              >
                <span>Live-Website in neuem Tab öffnen</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </Reveal>
        </motion.div>
      </div>

      {/* Weitere Projekte Trigger */}
      {hasMoreProjects && (
        <Reveal delay={0.1} className="mt-12 md:mt-16">
          <button
            onClick={() => setProjectModalOpen(true)}
            className="group inline-flex items-center gap-2 text-body text-muted-foreground hover:text-foreground transition-colors"
          >
            <Plus className="w-4 h-4 transition-transform duration-300 group-hover:rotate-90" />
            <span>Weitere Projekte ansehen</span>
          </button>
        </Reveal>
      )}

      {/* Project Modal */}
      <ProjectModal
        open={projectModalOpen}
        onClose={() => setProjectModalOpen(false)}
      />
    </Section>
  );
}

/* ------------------------- Live Iframe ------------------------- */

function LiveIframe({ url, title }: { url: string; title: string }) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className="relative aspect-[16/10] rounded-2xl overflow-hidden surface">
      {/* Loading State */}
      {!loaded && !error && (
        <div className="absolute inset-0 flex items-center justify-center bg-background">
          <div className="flex flex-col items-center gap-3">
            <div className="w-8 h-8 rounded-full border-2 border-white/10 border-t-[oklch(0.62_0.24_295)] animate-spin" />
            <span className="text-micro text-muted-foreground">Live-Vorschau lädt …</span>
          </div>
        </div>
      )}

      {/* Error Fallback */}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-background p-8">
          <div className="text-center max-w-sm">
            <p className="text-body text-foreground mb-2">Vorschau nicht verfügbar</p>
            <p className="text-micro text-muted-foreground mb-4">
              Die Live-Vorschau konnte nicht geladen werden.
            </p>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[oklch(0.72_0.20_295)] hover:text-foreground transition-colors"
            >
              <span>In neuem Tab öffnen</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      )}

      {/* iframe */}
      {!error && (
        <iframe
          src={url}
          title={`${title} — Live Vorschau`}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          className="w-full h-full border-0"
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          referrerPolicy="no-referrer"
        />
      )}

      {/* Top Badges */}
      <div className="absolute top-3 left-3 flex items-center gap-2 pointer-events-none">
        <div className="glass px-2.5 py-1 rounded-full text-[0.6875rem] tracking-wide text-foreground/80 flex items-center gap-1.5">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>Live</span>
        </div>
      </div>

      <div className="absolute top-3 right-3 pointer-events-none">
        <div className="glass px-2.5 py-1 rounded-full text-[0.6875rem] tracking-wide text-[oklch(0.72_0.20_295)]">
          Echtes Projekt
        </div>
      </div>

      {/* Open External Button */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-3 right-3 group inline-flex items-center gap-1.5 glass px-3 py-1.5 rounded-full text-xs text-foreground/80 hover:text-foreground hover:bg-white/[0.08] transition-all pointer-events-auto"
        aria-label={`${title} in neuem Tab öffnen`}
      >
        <Maximize2 className="w-3 h-3" />
        <span>Vollbild</span>
      </a>

      {/* Subtle gradient border overlay */}
      <div className="absolute inset-0 pointer-events-none rounded-2xl ring-1 ring-inset ring-white/[0.05]" />
    </div>
  );
}

/* ------------------------- Project Modal ------------------------- */

function ProjectModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const clientProjects = siteConfig.projects.client as readonly ProjectEntry[];
  const studioProjects = siteConfig.projects.studio as readonly ProjectEntry[];

  const hasClient = clientProjects.length > 0;
  const hasStudio = studioProjects.length > 0;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className="absolute inset-0 bg-background/85 backdrop-blur-md"
            onClick={onClose}
          />

          <motion.div
            className="relative w-full sm:max-w-lg glass rounded-t-3xl sm:rounded-3xl p-6 sm:p-8 max-h-[88vh] overflow-y-auto"
            initial={{ y: 60, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 60, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.4, ease: EASE }}
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-6">
              <div>
                <span className="text-eyebrow">More Work</span>
                <h3 className="text-title text-foreground mt-2">
                  Weitere Projekte
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 -mr-1.5 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Schließen"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Kunden-Sektion */}
            {hasClient && (
              <div className="mb-6">
                <div className="text-eyebrow mb-3">Kunden</div>
                <ul className="flex flex-col gap-1 list-none">
                  {clientProjects.map((p, i) => (
                    <motion.li
                      key={p.name}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.1 + i * 0.06,
                        duration: 0.5,
                        ease: EASE,
                      }}
                    >
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between gap-3 py-2.5 px-2 -mx-2 rounded-lg hover:bg-white/[0.03] transition-colors"
                      >
                        <span className="flex items-baseline gap-3 min-w-0">
                          <span className="text-body text-foreground group-hover:text-[oklch(0.72_0.20_295)] transition-colors truncate">
                            {p.name}
                          </span>
                          <span className="text-micro text-muted-foreground shrink-0">
                            {p.year}
                          </span>
                        </span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-[oklch(0.72_0.20_295)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 shrink-0" />
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </div>
            )}

            {/* Studio-Sektion */}
            {hasStudio && (
              <div>
                <div className="text-eyebrow mb-3">Studio</div>
                <ul className="flex flex-col gap-1 list-none">
                  {studioProjects.map((p, i) => (
                    <motion.li
                      key={p.name}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.25 + i * 0.06,
                        duration: 0.5,
                        ease: EASE,
                      }}
                    >
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between gap-3 py-2.5 px-2 -mx-2 rounded-lg hover:bg-white/[0.03] transition-colors"
                      >
                        <span className="flex items-baseline gap-3 min-w-0">
                          <span
                            className="inline-block w-1 h-1 rounded-full bg-muted-foreground/60 shrink-0 translate-y-[-2px]"
                            aria-hidden="true"
                          />
                          <span className="text-body text-foreground group-hover:text-[oklch(0.72_0.20_295)] transition-colors truncate">
                            {p.name}
                          </span>
                          <span className="text-micro text-muted-foreground shrink-0">
                            {p.year}
                          </span>
                        </span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-[oklch(0.72_0.20_295)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 shrink-0" />
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </div>
            )}

            {/* Footer Hint */}
            <p className="mt-6 pt-4 border-t border-white/[0.06] text-micro text-muted-foreground text-center">
              Externe Links öffnen in neuem Tab
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-caption">{label}</div>
      <div className="text-body mt-1 text-foreground font-medium">{value}</div>
    </div>
  );
}