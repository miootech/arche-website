"use client";

import { ArrowRight } from "lucide-react";
import { Logo } from "../arche/logo";
import { siteConfig } from "@/lib/site-config";
import { Reveal } from "../arche/reveal";

interface FooterProps {
  onContactClick: () => void;
}

export function Footer({ onContactClick }: FooterProps) {
  const scrollTo = (id: string) => {
    const el = document.getElementById(`section-${id}`);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer className="relative border-t border-white/[0.06] mt-16">
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
            onClick={onContactClick}
            className="group inline-flex items-center gap-3 text-body-lg text-foreground font-medium hover:text-[oklch(0.72_0.20_295)] transition-colors"
          >
            <span>Projekt besprechen</span>
            <span className="inline-flex w-9 h-9 rounded-full bg-foreground text-background items-center justify-center group-hover:bg-[oklch(0.62_0.24_295)] transition-all duration-300">
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </button>
        </div>
      </Reveal>

      {/* Footer Body */}
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8 py-10 border-t border-white/[0.06]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-2">
            <Logo
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            />
            <p className="text-body text-muted-foreground mt-3 max-w-xs">
              arche. ist ein unabhängiges Digital Studio für Webdesign, Frontend
              und UI/UX — direkt aus Deutschland.
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer-Navigation">
            <div className="text-caption mb-3">Navigation</div>
            <ul className="flex flex-col gap-2">
              <li>
                <button
                  onClick={() => scrollTo("work")}
                  className="text-body text-foreground/80 hover:text-foreground transition-colors"
                >
                  Work
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("services")}
                  className="text-body text-foreground/80 hover:text-foreground transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("reviews")}
                  className="text-body text-foreground/80 hover:text-foreground transition-colors"
                >
                  Reviews
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("faq")}
                  className="text-body text-foreground/80 hover:text-foreground transition-colors"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </nav>

          {/* Connect */}
          <div>
            <div className="text-caption mb-3">Connect</div>
            <ul className="flex flex-col gap-2">
              <li>
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-body text-foreground/80 hover:text-foreground transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-body text-foreground/80 hover:text-foreground transition-colors"
                >
                  E-Mail
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-micro text-muted-foreground/70">
            © {new Date().getFullYear()} arche. — Independent Digital Studio.
          </p>
          <div className="flex items-center gap-3 text-micro text-muted-foreground/70">
            <a href="#" className="hover:text-foreground transition-colors">
              Impressum
            </a>
            <span aria-hidden="true">·</span>
            <a href="#" className="hover:text-foreground transition-colors">
              Datenschutz
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
