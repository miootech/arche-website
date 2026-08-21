"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Loader2,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Mail,
} from "lucide-react";
import { Section } from "../arche/section";
import { Reveal } from "../arche/reveal";
import { ArcheButton } from "../arche/button";
import { siteConfig } from "@/lib/site-config";

const PROJECT_TYPES = [
  "Website — Single Page",
  "Website — Multipage",
  "UI/UX",
  "Media Design",
  "Noch nicht sicher",
  "Anderes",
];

const BUDGETS = [
  "Bis 200 €",
  "200 – 500 €",
  "500 – 1.000 €",
  "1.000 €+",
  "Noch offen",
];

interface ContactProps {
  preselectInquiry?: string;
}

export function ContactSection({ preselectInquiry }: ContactProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);
  const [projectType, setProjectType] = useState<string>("");
  const [budget, setBudget] = useState<string>("");

  // Automatische Vorauswahl bei Service-Klick
  useEffect(() => {
    if (preselectInquiry) {
      const match = PROJECT_TYPES.find((p) =>
        p.toLowerCase().includes(preselectInquiry.toLowerCase()),
      );
      if (match) setProjectType(match);
    }
  }, [preselectInquiry]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      company: (formData.get("company") as string) || "",
      projectType: formData.get("projectType") as string,
      budget: (formData.get("budget") as string) || "",
      message: formData.get("message") as string,
    };

    if (!data.name || data.name.trim().length < 2) {
      setError("Bitte gib deinen Namen an.");
      setStatus("error");
      return;
    }
    if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      setError("Bitte gib eine gültige E-Mail an.");
      setStatus("error");
      return;
    }
    if (!data.message || data.message.trim().length < 10) {
      setError("Bitte schreib eine kurze Nachricht (min. 10 Zeichen).");
      setStatus("error");
      return;
    }
    if (data.message.length > 2000) {
      setError("Nachricht zu lang (max. 2000 Zeichen).");
      setStatus("error");
      return;
    }

    const accessKey = siteConfig.web3formsKey;
    if (!accessKey) {
      setTimeout(() => setStatus("success"), 600);
      return;
    }

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `Neue Anfrage — ${data.name}`,
          from_name: "arche. Website",
          name: data.name,
          email: data.email,
          company: data.company || "—",
          project_type: data.projectType,
          budget: data.budget || "—",
          message: data.message,
        }),
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
      } else {
        throw new Error(json.message || "Senden fehlgeschlagen.");
      }
    } catch {
      setError("Etwas ist schief gelaufen. Bitte später erneut versuchen.");
      setStatus("error");
    }
  };

  return (
    <Section id="section-contact" ariaLabel="Kontakt aufnehmen">
      {/* JSON-LD: ContactPoint */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Kontakt — arche.",
            description:
              "Kostenloses Erstgespräch für moderne Websites und digitale Experiences.",
            mainEntity: {
              "@type": "Organization",
              name: "arche.",
              email: "hello@arche.studio",
              url: "https://arche.studio",
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                email: "hello@arche.studio",
                availableLanguage: ["German", "English"],
              },
            },
          }),
        }}
      />

      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        {/* Left */}
        <Reveal className="lg:col-span-5">
          <span className="text-eyebrow">Let's talk</span>
          <h2 className="text-headline mt-4">
            Erzähl mir von deiner Idee.
          </h2>
          <p className="text-body-lg text-muted-foreground mt-5 leading-relaxed">
            Ob konkrete Website, erste Idee oder einfach eine Frage: Schreib mir
            kurz, worum es geht. Ich melde mich persönlich zurück.
          </p>

          <div className="mt-8 flex flex-col gap-3">
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-3 text-body text-foreground/85 hover:text-foreground transition-colors group"
            >
              <span className="w-8 h-8 rounded-full surface flex items-center justify-center">
                <Mail className="w-3.5 h-3.5 text-muted-foreground group-hover:text-[oklch(0.72_0.20_295)] transition-colors" />
              </span>
              {siteConfig.email}
            </a>
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-body text-foreground/85 hover:text-foreground transition-colors"
            >
              <span className="w-8 h-8 rounded-full surface flex items-center justify-center text-sm font-medium">
                @
              </span>
              @{siteConfig.instagram}
            </a>
          </div>
        </Reveal>

        {/* Right — Form */}
        <Reveal className="lg:col-span-7" delay={0.05}>
          <div className="surface rounded-2xl p-5 md:p-8">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="inline-flex w-14 h-14 rounded-full bg-[oklch(0.62_0.24_295/0.15)] items-center justify-center mb-5"
                  >
                    <CheckCircle2 className="w-7 h-7 text-[oklch(0.72_0.20_295)]" />
                  </motion.div>
                  <h3 className="text-title text-foreground">
                    Ist angekommen.
                  </h3>
                  <p className="text-body text-muted-foreground mt-2 max-w-sm mx-auto">
                    Danke. Ich schaue mir deine Nachricht an und melde mich
                    persönlich — normalerweise innerhalb von 1–2 Werktagen.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col gap-4"
                >
                  <div className="grid sm:grid-cols-2 gap-3">
                    <Field label="Name" name="name" required placeholder="Dein Name" />
                    <Field label="E-Mail" name="email" type="email" required placeholder="deine@email.de" />
                  </div>

                  <Field label="Unternehmen" name="company" placeholder="Optional" required={false} />

                  <div className="grid sm:grid-cols-2 gap-3">
                    <SelectField
                      label="Projektart"
                      name="projectType"
                      options={PROJECT_TYPES}
                      value={projectType}
                      onChange={setProjectType}
                    />
                    <SelectField
                      label="Budget"
                      name="budget"
                      options={BUDGETS}
                      placeholder="Optional"
                      value={budget}
                      onChange={setBudget}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="text-caption block mb-1.5">
                      Nachricht
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      minLength={10}
                      maxLength={2000}
                      rows={5}
                      placeholder="Erzähl uns, was du vorhast …"
                      className="w-full bg-white/[0.03] border border-white/[0.06] rounded-xl px-3 py-3 text-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-[oklch(0.62_0.24_295/0.5)] focus:bg-white/[0.05] transition-colors resize-none"
                    />
                  </div>

                  {error && (
                    <div className="flex items-start gap-2 p-2.5 rounded-xl bg-red-500/10 border border-red-500/20 text-xs text-red-300">
                      <AlertCircle className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  <ArcheButton
                    type="submit"
                    variant="purple"
                    size="md"
                    disabled={status === "submitting"}
                    className="w-full sm:w-auto"
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Wird gesendet …</span>
                      </>
                    ) : (
                      <>
                        <span>Gespräch anfragen</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </ArcheButton>

                  <p className="text-micro text-muted-foreground/70">
                    Deine Angaben werden nur zur Bearbeitung deiner Anfrage
                    verwendet.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = true,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-caption block mb-1.5">
        {label} {required && <span className="text-[oklch(0.72_0.20_295)]">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        maxLength={100}
        className="w-full bg-white/[0.03] border border-white/[0.06] rounded-xl px-3 h-11 text-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-[oklch(0.62_0.24_295/0.5)] focus:bg-white/[0.05] transition-colors"
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
  placeholder,
  value,
  onChange,
}: {
  label: string;
  name: string;
  options: string[];
  placeholder?: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-caption block mb-1.5">
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-white/[0.03] border border-white/[0.06] rounded-xl px-3 h-11 text-body text-foreground focus:outline-none focus:border-[oklch(0.62_0.24_295/0.5)] focus:bg-white/[0.05] transition-colors appearance-none cursor-pointer"
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((opt) => (
          <option key={opt} value={opt} className="bg-background text-foreground">
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
