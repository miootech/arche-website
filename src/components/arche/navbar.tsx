"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { Logo } from "./logo";
import { ArcheButton } from "./button";
import { cn } from "@/lib/utils";

interface NavbarProps {
  onContactClick: () => void;
}

const NAV_LINKS = [
  { label: "Work", target: "work" },
  { label: "Services", target: "services" },
  { label: "Reviews", target: "reviews" },
  { label: "FAQ", target: "faq" },
] as const;

export function Navbar({ onContactClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Body scroll lock wenn Mobile-Menü offen
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    setTimeout(() => {
      const el = document.getElementById(`section-${id}`);
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 180);
  };

  return (
    <>
      {/* Solid Background Header — kein Overlay */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-background/95 backdrop-blur-xl border-b border-white/[0.06]"
            : "bg-background border-b border-white/[0.04]",
        )}
      >
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <div className="flex items-center justify-between h-14 md:h-16">
            <Logo
              onClick={() => {
                setMobileOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            />

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((item) => (
                <button
                  key={item.target}
                  onClick={() => scrollTo(item.target)}
                  className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-2">
              <ArcheButton
                variant="purple"
                size="sm"
                onClick={onContactClick}
                className="!h-9 !px-4"
              >
                <span className="hidden sm:inline">Projekt starten</span>
                <span className="sm:hidden">Start</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </ArcheButton>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileOpen((v) => !v)}
                className="md:hidden p-2 -mr-1 text-foreground"
                aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
                aria-expanded={mobileOpen}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {mobileOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-5 h-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-5 h-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer — verhindert, dass Content unter der festen Navbar verschwindet */}
      <div className="h-14 md:h-16" aria-hidden="true" />

      {/* Mobile Fullscreen Menu — Apple-style */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 top-14 z-40 md:hidden bg-background flex flex-col"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Nav Items */}
            <nav className="flex-1 flex flex-col justify-center px-6 gap-1">
              {NAV_LINKS.map((item, i) => (
                <motion.button
                  key={item.target}
                  onClick={() => scrollTo(item.target)}
                  className="group flex items-center justify-between py-4 border-b border-white/[0.05]"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.08 + i * 0.06,
                    duration: 0.45,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <span className="text-3xl font-semibold tracking-tight text-foreground">
                    {item.label}
                  </span>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                </motion.button>
              ))}
            </nav>

            {/* Bottom CTA */}
            <motion.div
              className="p-6 pb-10 border-t border-white/[0.06]"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.45 }}
            >
              <ArcheButton
                variant="purple"
                size="lg"
                onClick={() => {
                  setMobileOpen(false);
                  setTimeout(onContactClick, 180);
                }}
                className="w-full"
              >
                <span>Kostenlos sprechen</span>
                <ArrowRight className="w-4 h-4" />
              </ArcheButton>
              <p className="text-center text-micro text-muted-foreground mt-5">
                Unverbindlich · Kein Verkaufsdruck
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export function scrollToSection(id: string) {
  const el = document.getElementById(`section-${id}`);
  el?.scrollIntoView({ behavior: "smooth", block: "start" });
}
