"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Logo } from "../arche/logo";
import { siteConfig } from "@/lib/site-config";
import { Reveal } from "../arche/reveal";

interface FooterProps {
  onContactClick?: () => void;
}

export function Footer({ onContactClick }: FooterProps) {
  const handleScrollTo = (id: string) => {
    if (typeof window !== "undefined") {
      const el = document.getElementById(`section-${id}`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.location.href = `/#${id}`;
      }
    }
  };

  const handleContact = () => {
    if (onContactClick) {
      onContactClick();
    } else {
      handleScrollTo("contact");
    }
  };

  return (
    <footer className="relative border-t border-white/[0.06] mt-16 bg-background">
      {/* Closing Line */}
      <Reveal className="mx-auto w-full max-w-6xl px-5 sm:px-8 pt-20 md:pt-28 pb-10">
        <p className="text-hero text-foreground/95 max-w-3xl">
          Eine gute Idee
          <br />
          verdient einen guten
          <br />
          Auftritt
          <span className="arche-dot ml-2" aria-hidden="true" />
        </p>

        <div className="mt-8">
          <button
            onClick={handleContact}
            className="group inline-flex items-center gap-3 text-body-lg text-foreground font-medium hover:text-[oklch(0.72_0.20_295)] transition-colors cursor-pointer"
          >
            <span>Projekt besprechen</span>
            <span className="inline-flex w-9 h-9 rounded-full bg-foreground text-background items-center justify-center group-hover:bg-[oklch(0.62_0.24_295)] transition-all duration-300">
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </button>
        </div>
      </Reveal>

      {/* Footer Body */}
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8 py-12 border-t border-white/[0.06]">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" aria-label="arche. Startseite">
              <Logo />
            </Link>
            <p className="text-body text-muted-foreground mt-3 max-w-sm leading-relaxed">
              arche. ist ein unabhängiges Digital Studio für modernes Webdesign,
              Frontend-Entwicklung (React & Next.js), UI/UX und technisches SEO.
            </p>
            <div className="mt-4 flex flex-wrap gap-2 text-micro text-muted-foreground">
              <span className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.06]">
                Ludwigshafen am Rhein
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.06]">
                Mannheim
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.06]">
                Deutschland Remote
              </span>
            </div>
          </div>

          {/* Leistungen */}
          <div>
            <div className="text-caption text-foreground/90 font-medium mb-3">Leistungen</div>
            <ul className="flex flex-col gap-2.5 text-body text-muted-foreground">
              <li>
                <Link href="/webdesign" className="hover:text-foreground transition-colors">
                  Webdesign
                </Link>
              </li>
              <li>
                <Link href="/webentwicklung" className="hover:text-foreground transition-colors">
                  Webentwicklung
                </Link>
              </li>
              <li>
                <Link href="/ui-ux-design" className="hover:text-foreground transition-colors">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link href="/seo" className="hover:text-foreground transition-colors">
                  Technisches SEO
                </Link>
              </li>
              <li>
                <Link href="/digitale-produkte" className="hover:text-foreground transition-colors">
                  Digitale Produkte
                </Link>
              </li>
            </ul>
          </div>

          {/* Free Tools */}
          <div>
            <div className="text-caption text-foreground/90 font-medium mb-3">Studio Tools</div>
            <ul className="flex flex-col gap-2.5 text-body text-muted-foreground">
              <li>
                <a
                  href="https://arche-links.pages.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                  title="arche.links — kostenlose Link-in-Bio Alternative"
                >
                  arche.links
                </a>
              </li>
              <li>
                <a
                  href="https://arche-remove.pages.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                  title="arche.remove — kostenloser KI Hintergrund Entferner"
                >
                  arche.remove
                </a>
              </li>
              <li>
                <a
                  href="https://arche-pdf.pages.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                  title="arche.pdf — kostenlose PDF Tools"
                >
                  arche.pdf
                </a>
              </li>
              <li>
                <Link href="/digitale-produkte" className="text-xs text-[oklch(0.72_0.20_295)] hover:text-foreground transition-colors">
                  Alle Tools →
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation & Legal */}
          <div>
            <div className="text-caption text-foreground/90 font-medium mb-3">Studio</div>
            <ul className="flex flex-col gap-2.5 text-body text-muted-foreground">
              <li>
                <button
                  onClick={() => handleScrollTo("work")}
                  className="hover:text-foreground transition-colors text-left cursor-pointer"
                >
                  Projekte
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo("about")}
                  className="hover:text-foreground transition-colors text-left cursor-pointer"
                >
                  Über arche.
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo("reviews")}
                  className="hover:text-foreground transition-colors text-left cursor-pointer"
                >
                  Reviews
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo("faq")}
                  className="hover:text-foreground transition-colors text-left cursor-pointer"
                >
                  FAQ
                </button>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-foreground transition-colors"
                >
                  Kontakt
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-micro text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.brand} — Inhaber: {siteConfig.business.ownerName}, {siteConfig.business.city}.
          </p>
          <div className="flex items-center gap-4 text-micro text-muted-foreground">
            <Link href="/impressum" className="hover:text-foreground transition-colors">
              Impressum
            </Link>
            <span aria-hidden="true">·</span>
            <Link href="/datenschutz" className="hover:text-foreground transition-colors">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

