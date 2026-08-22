/**
 * arche. — zentrale Inhalts-Konfiguration (v10 · Apex + Tools)
 */

export const siteConfig = {
  brand: "arche.",
  brandPlain: "arche",
  tagline: "Websites, die nicht nach Baukasten aussehen.",
  description:
    "Individuelle Websites, Frontend Development und UI/UX für kleine Unternehmen, Selbstständige und eigene Ideen. Direkt mit Ali. Websites ab 169 €.",
  url: "https://arche.studio",
  locale: "de_DE",
  email: "alimalik67065@gmail.com",
  instagram: "malikali065",
  instagramUrl: "https://instagram.com/malikali065",
  web3formsKey: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "",

  business: {
    ownerName: "Ali Malik",
    city: "Ludwigshafen am Rhein",
    zip: "67065",
    country: "Deutschland",
  },

  founder: {
    name: "Ali",
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
      id: "single-page",
      name: "Single Page",
      priceLabel: "ab 169 €",
      summary:
        "Ein fokussierter Auftritt auf einer Seite. Ideal für Personen, kleine Businesses, Services oder eine einzelne Idee.",
      highlight: false,
      inquiry: "single-page",
    },
    {
      id: "multipage",
      name: "Multipage",
      priceLabel: "ab 269 €",
      summary:
        "Mehr Raum für dein Angebot. Bis zu zwei Seiten als Basis, später problemlos erweiterbar.",
      highlight: true,
      inquiry: "multipage",
    },
    {
      id: "additional-page",
      name: "Additional Page",
      priceLabel: "+49 €",
      summary: "Eine weitere Seite auf Basis deines bestehenden Projekts.",
      highlight: false,
      inquiry: "additional-page",
    },
    {
      id: "deployment",
      name: "Deployment",
      priceLabel: "ab 25 €",
      summary:
        "Hilfe beim technischen Setup und beim Livegang. Deine Domain bleibt deine.",
      highlight: false,
      inquiry: "deployment",
    },
    {
      id: "ui-ux",
      name: "UI / UX",
      priceLabel: "auf Anfrage",
      summary:
        "Interfaces, User Flows und Design-Systeme für Projekte, die über eine klassische Website hinausgehen.",
      highlight: false,
      inquiry: "ui-ux",
    },
    {
      id: "media-design",
      name: "Media Design",
      priceLabel: "auf Anfrage",
      summary:
        "Digitale Gestaltung für Dinge, die nicht in eine Website passen — von Konzepten bis zu visuellen Assets.",
      highlight: false,
      inquiry: "media-design",
    },
  ] as const,

  faq: [
    {
      q: "Was kostet eine Website?",
      a: "Eine Single Page startet bei 169 €. Eine Multipage-Website startet bei 269 € für bis zu zwei Seiten. Weitere Seiten gibt es ab 49 €. Wenn dein Projekt besondere Anforderungen hat, besprechen wir den Umfang vorher transparent.",
    },
    {
      q: "Kann ich erstmal nur meine Idee besprechen?",
      a: "Ja — genau dafür ist das Erstgespräch da. Du musst vorher weder ein fertiges Konzept noch eine genaue Liste an Anforderungen haben. Wir schauen gemeinsam, was daraus werden kann.",
    },
    {
      q: "Brauche ich schon eine Domain?",
      a: "Nein, nicht für das Gespräch oder die Entwicklung. Für den späteren Livegang brauchst du eine Domain. Wenn du dabei Hilfe möchtest, unterstütze ich dich beim Setup — die Domain bleibt in deinem Besitz.",
    },
    {
      q: "Wie läuft ein Projekt ab?",
      a: "Erstgespräch → Konzept → Umsetzung → Review → Finalisierung → Launch. Du bekommst zwischendurch Einblick und kannst Feedback geben. Beim Deployment kann ich auf Wunsch ebenfalls unterstützen.",
    },
    {
      q: "Muss ich nach dem Erstgespräch etwas kaufen?",
      a: "Nein. Das Gespräch ist kostenlos und unverbindlich. Wenn wir merken, dass es nicht passt, ist das genauso okay.",
    },
  ] as const,

  future: [
    { title: "Advanced UI/UX", status: "Planned" },
    { title: "Web Apps", status: "Exploring" },
    { title: "Weitere Design Services", status: "Planned" },
    { title: "Größere digitale Lösungen", status: "Future" },
  ] as const,

  philosophy: [
    "Design soll etwas bewirken — nicht nur gut aussehen.",
    "Einfach wirkt oft schwerer als kompliziert.",
    "Gute Websites sollten nicht vom Budget abhängen.",
    "Technologie ist Mittel zum Zweck, nicht der Selbstzweck.",
  ] as const,

  projects: {
    client: [
      { name: "Noch keine aktiven Kunden Projekte"},
    ],
    studio: [
      { name: "arche. studio", url: "https://arche.studio", year: "2026" },
      { name: "arche. links", url: "https://arche.studio", year: "2026" },
      { name: "arche. remove", url: "https://arche.studio", year: "2026" },
    ],
  } as const,

  // Kostenlose Tools — direkter Link, keine Registrierung nötig
  // Trage hier die echten URLs deiner Tools ein
  tools: [
    {
      id: "links",
      name: "arche. Links",
      summary: "Linktree Ersatz. Alle deine Links an einem Ort — sauber, schnell, kostenlos.",
      url: "https://arche-links.pages.dev/", // ← hier echte URL eintragen
      badge: "Linktree Ersatz",
    },
    {
      id: "remove-bg",
      name: "Background Remover",
      summary: "removal.ai Ersatz. Hintergrund in Sekunden entfernen — direkt im Browser.",
      url: "https://arche-remove.pages.dev/", // ← hier echte URL eintragen
      badge: "removebg Ersatz",
    },
    {
      id: "pdf-tools",
      name: "PDF Tools",
      summary: "Adobe Acrobat Ersatz. PDFs zusammenführen, splitten, konvertieren — kostenlos.",
      url: "https://arche-pdf.pages.dev/", // ← hier echte URL eintragen
      badge: "Acrobat Ersatz",
    },
  ] as const,
} as const;

export type SiteConfig = typeof siteConfig;
