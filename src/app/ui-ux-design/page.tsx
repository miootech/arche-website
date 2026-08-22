import type { Metadata } from "next";
import { LandingPageTemplate } from "@/components/arche/landing-page-template";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "UI/UX Design & Website Redesign | User Experience",
  description:
    "Individuelles UI/UX Design und Website Redesign. Nutzerzentrierte Interfaces, intuitive User Flows und moderne Design-Systeme für Websites und Web Apps.",
  alternates: { canonical: `${siteConfig.url}/ui-ux-design` },
  openGraph: {
    title: "UI/UX Design & Website Redesign — arche.",
    description:
      "Nutzerzentrierte Interfaces und modernes Interface-Design für Webanwendungen und Websites. Ästhetik trifft auf maximale Usability.",
    url: `${siteConfig.url}/ui-ux-design`,
    type: "website",
    locale: "de_DE",
    siteName: siteConfig.brand,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "arche. UI/UX Design" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "UI/UX Design & Redesign — arche.",
    description:
      "Design-Systeme, Interfaces & Website Redesigns für ambitionierte Marken.",
    images: ["/og-image.png"],
  },
};

const PAGE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "UI/UX Design & Website Redesign",
  provider: {
    "@type": "ProfessionalService",
    name: "arche.",
    url: siteConfig.url,
  },
  serviceType: "UI/UX Design",
  description:
    "Nutzerzentriertes Interface-Design, Wireframing, Prototyping und vollständige Website-Redesigns für Unternehmen und digitale Produkte.",
  areaServed: siteConfig.business.serviceAreas.map((area) => ({
    "@type": "AdministrativeArea",
    name: area,
  })),
};

export default function UiUxDesignPage() {
  return (
    <LandingPageTemplate
      slug="/ui-ux-design"
      serviceName="UI/UX Design"
      eyebrow="User Interface · User Experience · Design-Systeme"
      h1="UI/UX Design, das Nutzer begeistert & Conversions steigert."
      lead="Gutes Design ist kein Selbstzweck — es löst Probleme und führt Besucher intuitiv zum Ziel. arche gestaltet klare, visuell überzeugende User Interfaces und durchdachte User Journeys für Websites, digitale Portale und Web Apps."
      priceHint="Individuelle Projektkalkulation · Transparent & Fair"
      badges={[
        "Fokus auf Usability & Conversion",
        "Design-Systeme & UI-Kits",
        "Moderne Dark & Light Aesthetics",
        "Website Redesign Spezialist",
      ]}
      featuresTitle="Was exzellentes UI/UX Design auszeichnet"
      featuresSubtitle="Die perfekte Schnittstelle zwischen Markenidentität, Ästhetik und Verkaufspsychologie."
      features={[
        {
          iconKey: "layout",
          title: "Intuitive User Journeys",
          description:
            "Wir strukturieren Inhalte so, dass Nutzer ohne Nachdenken finden, was sie suchen. Kurze Wege und minimale kognitive Belastung erhöhen die Abschlussrate.",
        },
        {
          iconKey: "mousePointerClick",
          title: "Conversion-Optimierte Call-to-Actions",
          description:
            "Strategisch platzierte Buttons, visuelle Hierarchien und klare Handlungsaufforderungen leiten Interessenten gezielt in deinen Anfrage-Trichter.",
        },
        {
          iconKey: "refreshCw",
          title: "Komplettes Website Redesign",
          description:
            "Deine bestehende Website wirkt altbacken oder bringt keine Anfragen? Wir transformieren deinen verstaubten Auftritt in ein modernes Flaggschiff.",
        },
        {
          iconKey: "component",
          title: "Wiederverwendbare Design-Systeme",
          description:
            "Einheitliche Farbpaletten, Typografie-Skalen, Icons und UI-Komponenten sorgen für ein konsistentes Markenerlebnis über alle Touchpoints hinweg.",
        },
        {
          iconKey: "eye",
          title: "Accessibility & Barrierefreiheit",
          description:
            "Ausreichende Kontraste, klare Schriftgrößen und semantische Strukturierung stellen sicher, dass alle Nutzer dein Angebot problemlos bedienen können.",
        },
        {
          iconKey: "sliders",
          title: "Micro-Interactions & Feedback",
          description:
            "Subtile Hover-Effekte, geschmeidige Übergänge und visuelle Bestätigungen vermitteln Wertigkeit und Qualität in jedem Interaktionsschritt.",
        },
      ]}
      processTitle="Der Design-Prozess"
      processSubtitle="Vom ersten Konzept zum fertigen interaktiven Interface."
      processSteps={[
        {
          step: "01",
          title: "User Flow & Research",
          description:
            "Analyse der Zielgruppe, Wettbewerber und Festlegung der zentralen Nutzerpfade.",
          duration: "1–2 Tage",
        },
        {
          step: "02",
          title: "Wireframing & Layout",
          description:
            "Erstellung der strukturellen Layouts ohne Ablenkung durch Farben oder Dekoration.",
          duration: "2–3 Tage",
        },
        {
          step: "03",
          title: "Visual Design & UI",
          description:
            "Ausarbeitung des High-Fidelity UI-Designs mit Typografie, Farben und Animationen.",
          duration: "3–5 Tage",
        },
        {
          step: "04",
          title: "Frontend-Übergabe",
          description:
            "Direkte pixelgenaue Umsetzung im Code — ohne Design-Verluste durch Drittagenturen.",
          duration: "Laufend",
        },
      ]}
      techTitle="Design & Prototyping Standards"
      techSubtitle="Werkzeuge und Methoden für höchste Design-Präzision."
      techStack={[
        { name: "Figma & Design Tokens", category: "Prototyping", note: "Vollständige Komponenten-Bibliotheken" },
        { name: "Tailwind UI Guidelines", category: "Layout", note: "Pixelgenaue Responsiveness" },
        { name: "WCAG 2.1 AA Standards", category: "Accessibility", note: "Barrierefreie Farbkontraste" },
        { name: "Micro-Interaction Models", category: "UX", note: "Subtile Motion-Choreografie" },
      ]}
      faq={[
        {
          q: "Wann lohnt sich ein Website Redesign?",
          a: "Ein Redesign ist sinnvoll, wenn deine aktuelle Website veraltet wirkt, auf Smartphones schlecht lesbar ist, die Ladezeiten zu lang sind oder Besucher abspringen, ohne eine Anfrage zu senden. Ein gezieltes Redesign bringt oft sofortige Conversion-Steigerungen.",
        },
        {
          q: "Erhalte ich auch das fertige Design als Figma-Datei?",
          a: "Ja, auf Wunsch stellen wir alle erstellten Figma-Komponenten, Farbpaletten und Design-Tokens transparent zur Verfügung.",
        },
        {
          q: "Kann arche das Design auch direkt selbst programmieren?",
          a: "Ja, genau darin liegt unsere größte Stärke! Weil wir Design und Frontend-Entwicklung in einer Hand vereinen, geht bei der Umsetzung kein einziges Detail verloren.",
        },
        {
          q: "Wie lange dauert ein UI/UX Design-Projekt?",
          a: "Kleinere Websites und Landingpages konzipieren wir innerhalb weniger Tage. Umfassendere Webanwendungen oder App-Redesigns dauern in der Regel 2 bis 3 Wochen.",
        },
      ]}
      schemaJsonLd={PAGE_SCHEMA}
    />
  );
}
