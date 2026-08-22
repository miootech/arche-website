"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ChevronRight,
  Plus,
  CheckCircle2,
  Sparkles,
  Palette,
  Smartphone,
  Zap,
  TrendingUp,
  ShieldCheck,
  Code2,
  Rocket,
  Layers,
  Cpu,
  Terminal,
  ShieldAlert,
  Layout,
  MousePointerClick,
  RefreshCw,
  Component,
  Eye,
  Sliders,
  Search,
  Gauge,
  FileCode,
  Globe2,
  Share2,
  LineChart,
  Link2,
  Scissors,
  FileText,
  Boxes,
  Home as HomeIcon,
  LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/arche/navbar";
import { Footer } from "@/components/sections/footer";
import { ArcheButton } from "@/components/arche/button";
import { Reveal } from "@/components/arche/reveal";
import { siteConfig } from "@/lib/site-config";

const EASE = [0.22, 1, 0.36, 1] as const;

export type IconKey =
  | "palette"
  | "smartphone"
  | "zap"
  | "trendingUp"
  | "shieldCheck"
  | "sparkles"
  | "code"
  | "rocket"
  | "layers"
  | "cpu"
  | "terminal"
  | "shieldAlert"
  | "layout"
  | "mousePointerClick"
  | "refreshCw"
  | "component"
  | "eye"
  | "sliders"
  | "search"
  | "gauge"
  | "fileCode"
  | "globe"
  | "share"
  | "lineChart"
  | "link"
  | "scissors"
  | "fileText"
  | "boxes";

const ICON_MAP: Record<IconKey, LucideIcon> = {
  palette: Palette,
  smartphone: Smartphone,
  zap: Zap,
  trendingUp: TrendingUp,
  shieldCheck: ShieldCheck,
  sparkles: Sparkles,
  code: Code2,
  rocket: Rocket,
  layers: Layers,
  cpu: Cpu,
  terminal: Terminal,
  shieldAlert: ShieldAlert,
  layout: Layout,
  mousePointerClick: MousePointerClick,
  refreshCw: RefreshCw,
  component: Component,
  eye: Eye,
  sliders: Sliders,
  search: Search,
  gauge: Gauge,
  fileCode: FileCode,
  globe: Globe2,
  share: Share2,
  lineChart: LineChart,
  link: Link2,
  scissors: Scissors,
  fileText: FileText,
  boxes: Boxes,
};

export interface LandingPageFeature {
  iconKey: IconKey;
  title: string;
  description: string;
}

export interface LandingPageProcessStep {
  step: string;
  title: string;
  description: string;
  duration: string;
}

export interface LandingPageTech {
  name: string;
  category: string;
  note: string;
}

export interface LandingPageFaq {
  q: string;
  a: string;
}

export interface LandingPageProps {
  slug: string;
  serviceName: string;
  eyebrow: string;
  h1: string;
  lead: string;
  priceHint?: string;
  badges: string[];
  featuresTitle?: string;
  featuresSubtitle?: string;
  features: LandingPageFeature[];
  processTitle?: string;
  processSubtitle?: string;
  processSteps: LandingPageProcessStep[];
  techTitle?: string;
  techSubtitle?: string;
  techStack?: LandingPageTech[];
  faq: LandingPageFaq[];
  relatedServices?: { name: string; slug: string; description: string }[];
  schemaJsonLd: Record<string, any>;
}

export function LandingPageTemplate(props: LandingPageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleContact = () => {
    window.location.href = `/#contact`;
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: props.serviceName,
        item: `${siteConfig.url}${props.slug}`,
      },
    ],
  };

  const faqJsonLd =
    props.faq && props.faq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: props.faq.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.a,
            },
          })),
        }
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(props.schemaJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      <Navbar onContactClick={handleContact} />


      <main className="relative min-h-screen">
        {/* Breadcrumb Bar */}
        <div className="w-full border-b border-white/[0.04] bg-background/50 backdrop-blur-md">
          <div className="mx-auto w-full max-w-6xl px-5 sm:px-8 py-3">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-muted-foreground">
              <Link
                href="/"
                className="hover:text-foreground transition-colors flex items-center gap-1.5"
              >
                <HomeIcon className="w-3.5 h-3.5" />
                <span>Startseite</span>
              </Link>
              <ChevronRight className="w-3.5 h-3.5 opacity-50" />
              <Link href="/#services" className="hover:text-foreground transition-colors">
                Leistungen
              </Link>
              <ChevronRight className="w-3.5 h-3.5 opacity-50" />
              <span className="text-foreground font-medium" aria-current="page">
                {props.serviceName}
              </span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative py-16 md:py-24 overflow-hidden border-b border-white/[0.04]">
          {/* Subtle Ambient Glow */}
          <div className="absolute inset-0 -z-10 pointer-events-none">
            <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[100vw] max-w-[800px] aspect-square">
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(50% 40% at 50% 50%, oklch(0.62 0.24 295 / 0.14) 0%, transparent 65%)",
                }}
              />
            </div>
          </div>

          <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
            <div className="max-w-3xl">
              {/* Eyebrow */}
              <Reveal>
                <div className="flex items-center gap-2 mb-6">
                  <span className="inline-block w-6 h-px bg-[oklch(0.62_0.24_295)]" aria-hidden="true" />
                  <span className="text-eyebrow text-[oklch(0.72_0.20_295)]">{props.eyebrow}</span>
                </div>
              </Reveal>

              {/* H1 */}
              <Reveal delay={0.08}>
                <h1 className="text-hero text-foreground font-semibold tracking-tight">
                  {props.h1}
                </h1>
              </Reveal>

              {/* Lead Text */}
              <Reveal delay={0.16}>
                <p className="text-body-lg text-muted-foreground mt-6 leading-relaxed">
                  {props.lead}
                </p>
              </Reveal>

              {/* Badges / USPs */}
              <Reveal delay={0.24}>
                <div className="flex flex-wrap items-center gap-2 mt-8">
                  {props.badges.map((badge, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-white/[0.04] border border-white/[0.08] text-foreground/90"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[oklch(0.72_0.20_295)]" />
                      <span>{badge}</span>
                    </span>
                  ))}
                </div>
              </Reveal>

              {/* CTAs */}
              <Reveal delay={0.32}>
                <div className="flex flex-wrap items-center gap-4 mt-10">
                  <ArcheButton variant="purple" size="md" onClick={handleContact}>
                    <span>Projekt unverbindlich anfragen</span>
                    <ArrowRight className="w-4 h-4" />
                  </ArcheButton>
                  {props.priceHint && (
                    <span className="text-xs text-muted-foreground font-mono">
                      {props.priceHint}
                    </span>
                  )}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Features / Deep Service Details */}
        <section className="relative py-16 md:py-24 border-b border-white/[0.04]">
          <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
            <Reveal className="max-w-2xl mb-12 md:mb-16">
              <span className="text-eyebrow">Leistungsumfang & Vorteile</span>
              <h2 className="text-headline mt-3">
                {props.featuresTitle || "Was du mit arche. bekommst"}
              </h2>
              {props.featuresSubtitle && (
                <p className="text-body-lg text-muted-foreground mt-3">
                  {props.featuresSubtitle}
                </p>
              )}
            </Reveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {props.features.map((f, i) => {
                const Icon = ICON_MAP[f.iconKey] || Sparkles;
                return (
                  <Reveal key={i} delay={i * 0.06}>
                    <motion.div
                      className="surface card-hover-lift rounded-2xl p-6 md:p-8 h-full flex flex-col gap-4 border border-white/[0.06] hover:border-white/[0.12] transition-colors"
                      whileHover={{ y: -3 }}
                      transition={{ duration: 0.3, ease: EASE }}
                    >
                      <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[oklch(0.72_0.20_295)]">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-title text-foreground mt-1">{f.title}</h3>
                      <p className="text-body text-muted-foreground leading-relaxed flex-1">
                        {f.description}
                      </p>
                    </motion.div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="relative py-16 md:py-24 border-b border-white/[0.04]">
          <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
            <Reveal className="max-w-2xl mb-12 md:mb-16">
              <span className="text-eyebrow">Transparenter Ablauf</span>
              <h2 className="text-headline mt-3">
                {props.processTitle || "In 4 Schritten zum perfekten Ergebnis"}
              </h2>
              {props.processSubtitle && (
                <p className="text-body-lg text-muted-foreground mt-3">
                  {props.processSubtitle}
                </p>
              )}
            </Reveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {props.processSteps.map((p, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <div className="surface rounded-2xl p-6 h-full flex flex-col gap-4 border border-white/[0.06]">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-[oklch(0.72_0.20_295)] px-2.5 py-1 rounded-full bg-[oklch(0.62_0.24_295/0.1)] border border-[oklch(0.62_0.24_295/0.2)]">
                        {p.step}
                      </span>
                      <span className="text-micro text-muted-foreground">{p.duration}</span>
                    </div>
                    <h3 className="text-title text-foreground">{p.title}</h3>
                    <p className="text-body text-muted-foreground leading-relaxed flex-1">
                      {p.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack Section (if present) */}
        {props.techStack && props.techStack.length > 0 && (
          <section className="relative py-16 md:py-24 border-b border-white/[0.04]">
            <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
              <Reveal className="max-w-2xl mb-12 md:mb-16">
                <span className="text-eyebrow">Technologie & Standards</span>
                <h2 className="text-headline mt-3">
                  {props.techTitle || "Moderner Tech-Stack ohne Altlasten"}
                </h2>
                {props.techSubtitle && (
                  <p className="text-body-lg text-muted-foreground mt-3">
                    {props.techSubtitle}
                  </p>
                )}
              </Reveal>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {props.techStack.map((tech, i) => (
                  <Reveal key={i} delay={i * 0.05}>
                    <div className="surface rounded-xl p-5 border border-white/[0.06] flex flex-col gap-1">
                      <div className="flex items-center justify-between">
                        <span className="text-title text-foreground">{tech.name}</span>
                        <span className="text-micro text-[oklch(0.72_0.20_295)] px-2 py-0.5 rounded bg-white/[0.04]">
                          {tech.category}
                        </span>
                      </div>
                      <p className="text-caption text-muted-foreground mt-2">{tech.note}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQ Section */}
        {props.faq && props.faq.length > 0 && (
          <section className="relative py-16 md:py-24 border-b border-white/[0.04]">
            <div className="mx-auto w-full max-w-4xl px-5 sm:px-8">
              <Reveal className="max-w-2xl mb-12">
                <span className="text-eyebrow">FAQ</span>
                <h2 className="text-headline mt-3">Häufige Fragen zu {props.serviceName}</h2>
              </Reveal>

              <div className="flex flex-col gap-2">
                {props.faq.map((item, i) => (
                  <Reveal key={i} delay={i * 0.04}>
                    <div className="surface rounded-xl overflow-hidden border border-white/[0.06]">
                      <button
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        className="w-full flex items-center justify-between gap-3 p-4 md:p-5 text-left cursor-pointer"
                        aria-expanded={openFaq === i}
                      >
                        <span className="text-body text-foreground font-medium">{item.q}</span>
                        <motion.div
                          className="shrink-0 w-6 h-6 rounded-full bg-white/[0.04] border border-white/[0.06] flex items-center justify-center"
                          animate={{ rotate: openFaq === i ? 180 : 0 }}
                          transition={{ duration: 0.3, ease: EASE }}
                        >
                          <Plus className="w-3 h-3 text-foreground" />
                        </motion.div>
                      </button>
                      <AnimatePresence initial={false}>
                        {openFaq === i && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: EASE }}
                            className="overflow-hidden"
                          >
                            <div className="px-4 md:px-5 pb-4 md:pb-5">
                              <div className="h-px bg-white/[0.06] mb-3" />
                              <p className="text-body text-muted-foreground leading-relaxed">
                                {item.a}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Related Services & Internal Links */}
        <section className="relative py-16 md:py-24 border-b border-white/[0.04]">
          <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
            <Reveal className="mb-10">
              <span className="text-eyebrow">Weitere Leistungen</span>
              <h2 className="text-headline mt-3">Alles aus einer Hand</h2>
            </Reveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {siteConfig.services
                .filter((s) => s.slug !== props.slug)
                .slice(0, 3)
                .map((srv, i) => (
                  <Reveal key={srv.id} delay={i * 0.06}>
                    <Link
                      href={srv.slug}
                      className="group surface card-hover-lift rounded-2xl p-6 h-full flex flex-col justify-between gap-4 border border-white/[0.06] hover:border-white/[0.15] transition-all block"
                    >
                      <div>
                        <span className="text-micro text-[oklch(0.72_0.20_295)] font-mono">
                          {srv.priceLabel}
                        </span>
                        <h3 className="text-title text-foreground mt-2 group-hover:text-[oklch(0.72_0.20_295)] transition-colors">
                          {srv.name}
                        </h3>
                        <p className="text-caption text-muted-foreground mt-2 line-clamp-3">
                          {srv.summary}
                        </p>
                      </div>
                      <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs text-foreground/80 group-hover:text-foreground">
                        <span>Details ansehen</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  </Reveal>
                ))}
            </div>

            {/* Studio Tools Crosslink Banner */}
            <Reveal className="mt-12">
              <div className="surface rounded-2xl p-6 md:p-8 border border-white/[0.08] flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-4 h-4 text-[oklch(0.72_0.20_295)]" />
                    <span className="text-eyebrow">Kostenlose arche Tools</span>
                  </div>
                  <h3 className="text-title text-foreground">
                    Entdecke unsere kostenlosen Web-Werkzeuge
                  </h3>
                  <p className="text-body text-muted-foreground mt-1 max-w-xl">
                    Nutze arche.links (Linktree-Alternative), arche.remove (KI-Hintergrundentferner) und arche.pdf direkt kostenlos im Browser.
                  </p>
                </div>
                <Link
                  href="/digitale-produkte"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] text-foreground text-sm font-medium transition-colors shrink-0"
                >
                  <span>Tools & Produkte entdecken</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Bottom CTA Banner */}
        <section className="relative py-20 md:py-28">
          <div className="mx-auto w-full max-w-6xl px-5 sm:px-8 text-center">
            <Reveal>
              <div className="surface rounded-3xl p-8 md:p-16 border border-white/[0.08] relative overflow-hidden">
                <div
                  className="absolute inset-0 pointer-events-none opacity-50"
                  style={{
                    background:
                      "radial-gradient(60% 50% at 50% 50%, oklch(0.62 0.24 295 / 0.15) 0%, transparent 70%)",
                  }}
                />
                <div className="relative z-10 max-w-2xl mx-auto">
                  <span className="text-eyebrow">Erstgespräch 100% kostenlos</span>
                  <h2 className="text-headline text-foreground mt-3">
                    Lass uns dein {props.serviceName}-Projekt verwirklichen.
                  </h2>
                  <p className="text-body-lg text-muted-foreground mt-4">
                    Kurze Rückmeldung innerhalb von 24–48 Stunden. Direkt mit Gründer & Entwickler Ali Malik.
                  </p>
                  <div className="mt-8 flex justify-center">
                    <ArcheButton variant="purple" size="lg" onClick={handleContact}>
                      <span>Jetzt unverbindlich anfragen</span>
                      <ArrowRight className="w-4 h-4" />
                    </ArcheButton>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer onContactClick={handleContact} />
    </>
  );
}
