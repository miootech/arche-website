/**
 * arche. — zentrale Inhalts-Konfiguration
 * Production Domain: https://arche-website.pages.dev
 */

export const siteConfig = {
  brand: "arche.",
  brandPlain: "arche",
  tagline: "Moderne Websites, Webdesign & Webentwicklung.",
  description:
    "Digitalagentur aus der Rhein-Neckar-Region mit Kundenbetreuung vor Ort und remote deutschlandweit. Modernes Webdesign, performante Webentwicklung (React, Next.js), UI/UX Design und technisches SEO. Websites ab 169 €.",
  url: "https://arche-website.pages.dev",
  locale: "de_DE",
  email: "alimalik67065@gmail.com",
  instagram: "malikali065",
  instagramUrl: "https://instagram.com/malikali065",
  web3formsKey: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "",

  business: {
    ownerName: "Ali Malik",
    region: "Metropolregion Rhein-Neckar",
    city: "Ludwigshafen am Rhein",
    neighborCity: "Mannheim",
    zip: "67065",
    country: "Deutschland",
    serviceAreas: [
      "Ludwigshafen am Rhein",
      "Mannheim",
      "Metropolregion Rhein-Neckar",
      "Deutschland (Remote)",
      "Österreich & Schweiz (DACH)",
    ],
  },

  founder: {
    name: "Ali Malik",
    role: "Founder · Design & Development",
  },

  pricing: {
    singlePage: 169,
    multipage: 269,
    additionalPage: 49,
    deployment: 25,
    currency: "€",
  },

  services: [
    {
      id: "webdesign",
      name: "Webdesign & UI/UX",
      slug: "/webdesign",
      priceLabel: "ab 169 €",
      summary:
        "Individuelles Webdesign ohne Baukasten-Templates. Maßgeschneiderte Benutzeroberflächen, die Vertrauen aufbauen und Besucher in Kunden verwandeln.",
      highlight: false,
      inquiry: "webdesign",
    },
    {
      id: "webentwicklung",
      name: "Moderne Webentwicklung",
      slug: "/webentwicklung",
      priceLabel: "ab 269 €",
      summary:
        "Blitzschnelle Websites und Web Apps mit modernstem Tech-Stack (React, Next.js, TypeScript, Tailwind CSS). Höchste Performance und saubere Code-Qualität.",
      highlight: true,
      inquiry: "webentwicklung",
    },
    {
      id: "ui-ux",
      name: "UI / UX Design & Redesign",
      slug: "/ui-ux-design",
      priceLabel: "auf Anfrage",
      summary:
        "Intuitive User Experiences, Conversion-optimierte Layouts und vollständige Website-Redesigns für bestehende Marken und digitale Produkte.",
      highlight: false,
      inquiry: "ui-ux",
    },
    {
      id: "seo",
      name: "SEO & Core Web Vitals",
      slug: "/seo",
      priceLabel: "Inklusive & auf Anfrage",
      summary:
        "Technisches SEO, semantisches HTML, strukturierte Schema.org-Daten und maximale Ladezeiten-Optimierung für beste Google-Rankings.",
      highlight: false,
      inquiry: "seo",
    },
    {
      id: "digitale-produkte",
      name: "Digitale Produkte & Tools",
      slug: "/digitale-produkte",
      priceLabel: "Kostenlos & Projektbasiert",
      summary:
        "Entwicklung eigener Web Apps und digitaler Werkzeuge wie arche.links, arche.remove und arche.pdf sowie individuelle SaaS-Lösungen.",
      highlight: false,
      inquiry: "digitale-produkte",
    },
    {
      id: "single-page",
      name: "Single Page Website",
      slug: "/webdesign",
      priceLabel: "ab 169 €",
      summary:
        "Ein fokussierter, eleganter One-Pager. Ideal für Dienstleister, Selbstständige, Portfolios oder eine konkrete Produkt-Idee.",
      highlight: false,
      inquiry: "single-page",
    },
  ] as const,

  faq: [
    {
      q: "Was kostet eine professionelle Website bei arche?",
      a: "Eine maßgeschneiderte Single-Page-Website startet bereits ab 169 €. Eine Multipage-Website (Basis bis zu zwei Seiten) beginnt bei 269 €, jede weitere Unterseite ab 49 €. Größere Web Apps oder individuelle UI/UX-Konzepte kalkulieren wir transparent nach Projektumfang im kostenlosen Erstgespräch.",
    },
    {
      q: "Wie läuft ein Webdesign- und Entwicklungsprojekt ab?",
      a: "Der Prozess gliedert sich in 4 klare Phasen: 1. Kostenloses Kennenlernen & Bedarfsanalyse → 2. Konzept & Wireframing → 3. Design, Frontend-Entwicklung (Next.js/React) & SEO-Feinschliff → 4. Testing, Review & gemeinsamer Livegang inkl. Domain- & Hosting-Unterstützung.",
    },
    {
      q: "Sind die Websites für Google optimiert (SEO)?",
      a: "Ja, standardmäßig. Jede von arche entwickelte Website verfügt über semantisch einwandfreies HTML5, blitzschnelle Ladezeiten (optimiert für Google Core Web Vitals wie LCP, CLS, INP), saubere Meta-Tags, Open Graph / Social Sharing, gültige XML-Sitemaps und validierte Schema.org Structured Data.",
    },
    {
      q: "Arbeitet arche nur in Ludwigshafen und Mannheim oder auch überregional?",
      a: "arche hat seine Wurzeln in der Rhein-Neckar-Region (Ludwigshafen am Rhein und Mannheim). Wir arbeiten sowohl eng mit regionalen Unternehmen und Gründern zusammen als auch komplett remote mit Kunden in ganz Deutschland, Österreich und der Schweiz.",
    },
    {
      q: "Welche Technologien setzt arche für die Webentwicklung ein?",
      a: "Wir setzen auf modernen, zukunftssicheren State-of-the-Art-Code: React, Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion und statische Hochgeschwindigkeits-Deployments über Cloudflare Pages. Keine trägen Baukästen oder überladene Plugins.",
    },
    {
      q: "Brauche ich bereits ein fertiges Konzept oder eine Domain?",
      a: "Nein. Das unverbindliche Erstgespräch dient genau dazu, deine Idee zu strukturieren. Eine Domain wird erst beim Launch benötigt — bei der Auswahl, Registrierung und Konfiguration helfen wir dir gerne.",
    },
  ] as const,

  future: [
    { title: "Advanced Web Applications", status: "Exploring" },
    { title: "SaaS Tools & Microservices", status: "Planned" },
    { title: "Design Systems & Component Kits", status: "Planned" },
    { title: "Automatisierte SEO-Workflows", status: "Future" },
  ] as const,

  philosophy: [
    "Design soll Vertrauen schaffen und messbare Ergebnisse liefern.",
    "Sauberer Code und schnelle Ladezeiten sind kein Bonus, sondern Standard.",
    "Transparente Preise und direkter Kontakt ohne Agentur-Wasserkopf.",
    "Technologie als Hebel für den geschäftlichen Erfolg unserer Kunden.",
  ] as const,

  projects: {
    client: [
      { name: "Apex Dienstleister GmbH", url: "https://handienstleister.pages.dev/", year: "2026" },
    ],
    studio: [
      { name: "arche. links", url: "https://arche-links.pages.dev", year: "2026" },
      { name: "arche. remove", url: "https://arche-remove.pages.dev", year: "2026" },
      { name: "arche. pdf", url: "https://arche-pdf.pages.dev", year: "2026" },
    ],
  } as const,

  // Digitale Tools — Direkte Links mit beschreibenden Anchor-Kontexten
  tools: [
    {
      id: "links",
      name: "arche.links",
      headline: "Kostenlose Link-in-Bio Alternative",
      summary: "Alle deine wichtigen Links auf einer blitzschnellen, eleganten Landingpage gebündelt. Datenschutzkonform, ohne Registrierungszwang und komplett werbefrei.",
      url: "https://arche-links.pages.dev/",
      badge: "Linktree-Alternative",
      anchorText: "arche.links — kostenlose Link-in-Bio Alternative",
    },
    {
      id: "remove-bg",
      name: "arche.remove",
      headline: "Kostenloser KI Hintergrund-Entferner",
      summary: "Bildhintergründe präzise in Sekunden entfernen — direkt lokal im Browser berechnet. Maximale Privatsphäre, da keine Fotos auf fremde Server geladen werden.",
      url: "https://arche-remove.pages.dev/",
      badge: "KI Background Remover",
      anchorText: "arche.remove — kostenloser KI Hintergrund-Entferner",
    },
    {
      id: "pdf-tools",
      name: "arche.pdf",
      headline: "Kostenlose PDF-Tools",
      summary: "PDF-Dateien zusammenfügen, aufteilen, komprimieren und konvertieren — ohne Adobe-Abo und ohne Upload-Limits. Schnell, sicher und kostenlos.",
      url: "https://arche-pdf.pages.dev/",
      badge: "PDF Utility Suite",
      anchorText: "arche.pdf — kostenlose PDF-Tools",
    },
  ] as const,

} as const;

export type SiteConfig = typeof siteConfig;

