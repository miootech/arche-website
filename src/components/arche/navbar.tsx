"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./logo";
import { ArcheButton } from "./button";
import { cn } from "@/lib/utils";

interface NavbarProps {
  onContactClick?: () => void;
}

const NAV_LINKS = [
  { label: "Services", target: "services", href: "/#services" },
  { label: "Work", target: "work", href: "/#work" },
  { label: "Tools", target: "tools", href: "/#tools" },
  { label: "Reviews", target: "reviews", href: "/#reviews" },
  { label: "FAQ", target: "faq", href: "/#faq" },
] as const;

export function Navbar({ onContactClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

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

  const handleNavClick = (target: string, href: string) => {
    setMobileOpen(false);
    if (isHome) {
      setTimeout(() => {
        const el = document.getElementById(`section-${target}`);
        el?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    } else {
      window.location.href = href;
    }
  };

  const handleContact = () => {
    setMobileOpen(false);
    if (onContactClick) {
      onContactClick();
    } else if (isHome) {
      const el = document.getElementById("section-contact");
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.location.href = "/#contact";
    }
  };

  return (
    <>
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
            <Link
              href="/"
              onClick={() => {
                setMobileOpen(false);
                if (isHome) {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              className="inline-flex items-center"
              aria-label="arche. Startseite"
            >
              <Logo />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1" aria-label="Hauptnavigation">
              {NAV_LINKS.map((item) => (
                <button
                  key={item.target}
                  onClick={() => handleNavClick(item.target, item.href)}
                  className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 cursor-pointer"
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
                onClick={handleContact}
                className="!h-9 !px-4 cursor-pointer"
              >
                <span className="hidden sm:inline">Projekt anfragen</span>
                <span className="sm:hidden">Anfragen</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </ArcheButton>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileOpen((v) => !v)}
                className="md:hidden p-2 -mr-1 text-foreground cursor-pointer"
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

      {/* Spacer */}
      <div className="h-14 md:h-16" aria-hidden="true" />

      {/* Mobile Fullscreen Menu */}
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
            <nav className="flex-1 flex flex-col justify-center px-6 gap-1" aria-label="Mobile Navigation">
              {NAV_LINKS.map((item, i) => (
                <motion.button
                  key={item.target}
                  onClick={() => handleNavClick(item.target, item.href)}
                  className="group flex items-center justify-between py-4 border-b border-white/[0.05] text-left cursor-pointer"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.08 + i * 0.06,
                    duration: 0.45,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <span className="text-2xl font-semibold tracking-tight text-foreground">
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
                onClick={handleContact}
                className="w-full"
              >
                <span>Kostenlos sprechen</span>
                <ArrowRight className="w-4 h-4" />
              </ArcheButton>
              <p className="text-center text-micro text-muted-foreground mt-5">
                Unverbindlich · Kein Verkaufsdruck · Rhein-Neckar & Remote
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

