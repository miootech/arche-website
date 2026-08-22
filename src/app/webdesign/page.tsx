import type { Metadata } from "next";
import { LandingPageTemplate } from "@/components/arche/landing-page-template";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Webdesign Ludwigshafen & Mannheim | Individuelle Websites",
  description:
    "Professionelles Webdesign ohne Baukasten-Templates. Maßgeschneiderte Websites für Unternehmen & Selbstständige in Ludwigshafen, Mannheim & deutschlandweit. Websites ab 169 €.",
  alternates: { canonical: `${siteConfig.url}/webdesign` },
  openGraph: {
    title: "Webdesign Ludwigshafen & Mannheim — arche.",
    description:
      "Individuelle Websites, die nicht nach Baukasten aussehen. Maßgeschneidertes Webdesign für Unternehmen und Selbstständige aus der Rhein-Neckar-Region & ganz Deutschland.",
    url: `${siteConfig.url}/webdesign`,
    type: "website",
    locale: "de_DE",
    siteName: siteConfig.brand,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "arche. Webdesign" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Webdesign Ludwigshafen & Mannheim — arche.",
    description:
      "Professionelles Webdesign für Selbstständige und Unternehmen. Rhein-Neckar & Remote.",
    images: ["/og-image.png"],
  },
};

const PAGE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Webdesign & Website-Erstellung",
  provider: {
    "@type": "ProfessionalService",
    name: "arche.",
    url: siteConfig.url,
  },
  serviceType: "Webdesign",
  description:
    "Individuelles Webdesign, responsive Gestaltung und maßgeschneiderte Website-Entwicklung für Unternehmen und Selbstständige.",
  areaServed: siteConfig.business.serviceAreas.map((area) => ({
    "@type": "AdministrativeArea",
    name: area,
  })),
  offers: {
    "@type": "Offer",
    price: "169",
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
  },
};

export default function WebdesignPage() {
  return (
    <LandingPageTemplate
      slug="/webdesign"
      serviceName="Webdesign"
      eyebrow="Webdesign Ludwigshafen · Mannheim · Deutschland"
      h1="Individuelles Webdesign, das Vertrauen aufbaut & Kunden gewinnt."
      lead="arche gestaltet maßgeschneiderte Websites für Selbstständige, Dienstleister und moderne Unternehmen. Kein 08/15-Baukasten, kein veraltetes Theme — sondern ein digitaler Auftritt, der zu deiner Marke passt und auf allen Endgeräten überzeugt."
      priceHint="Single Page ab 169 € · Multipage ab 269 €"
      badges={[
        "100% Individuelles Design",
        "Mobile-First & Responsive",
        "Blitzschnelle Ladezeiten",
        "Persönlicher 1:1 Kontakt",
      ]}
      featuresTitle="Warum professionelles Webdesign den Unterschied macht"
      featuresSubtitle="Ein starker erster Eindruck entscheidet in Millisekunden über Vertrauen und Anfrage."
      features={[
        {
          iconKey: "palette",
          title: "Kein Baukasten-Einheitsbrei",
          description:
            "Jede Website wird von Grund auf für dein Angebot konzipiert. Klare Typografie, harmonische Farbwelten und hochwertige Ästhetik statt austauschbarer Templates.",
        },
        {
          iconKey: "smartphone",
          title: "Perfekt auf allen Bildschirmen",
          description:
            "Über 65% deiner Besucher nutzen das Smartphone. Unsere Websites sind mobil optimiert, touch-freundlich und auf Desktop wie Mobile gleichermaßen elegant.",
        },
        {
          iconKey: "zap",
          title: "Maximale Performance & Speed",
          description:
            "Keine überladenen Pagebuilder, die die Ladezeit ruinieren. Schlanker, moderner Code sorgt für minimale Absprungraten und beste Core Web Vitals.",
        },
        {
          iconKey: "trendingUp",
          title: "Conversion & Nutzerführung",
          description:
            "Klare Call-to-Actions, verständliche Leistungsstrukturen und barrierefreie Nutzerführung, die Besucher zielgerichtet zur Kontaktaufnahme leiten.",
        },
        {
          iconKey: "shieldCheck",
          title: "Rechtssicher & DSGVO-konform",
          description:
            "Saubere Integration von Impressum, Datenschutzerklärung und datenschutzfreundlichen Tools ohne Tracking-Cookies oder Datenweitergabe.",
        },
        {
          iconKey: "sparkles",
          title: "SEO-Fundament inklusive",
          description:
            "Semantisches HTML5, strukturierte Überschriften (H1-H3), Open Graph Tags und saubere Metadaten für beste Google-Indexierung ab Tag 1.",
        },
      ]}
      processTitle="Der Weg zu deiner neuen Website"
      processSubtitle="Einfach, strukturiert und ohne zeitraubendes Agentur-Theater."
      processSteps={[
        {
          step: "01",
          title: "Kennenlernen",
          description:
            "Wir besprechen deine Ziele, Zielgruppe und Wünsche. Kostenlos und unverbindlich per Video oder Telefon.",
          duration: "30 Min.",
        },
        {
          step: "02",
          title: "Konzept & Design",
          description:
            "Wir definieren Struktur, Inhalte und visuellen Stil deines neuen Webauftritts.",
          duration: "1–3 Tage",
        },
        {
          step: "03",
          title: "Umsetzung",
          description:
            "Programmierung der Seite mit sauberem Code, Responsiveness und allen Animationen.",
          duration: "3–7 Tage",
        },
        {
          step: "04",
          title: "Livegang",
          description:
            "Domain-Setup, finales Testing und Veröffentlichung im weltweiten Web.",
          duration: "1 Tag",
        },
      ]}
      techTitle="Qualitätsstandards im Webdesign"
      techSubtitle="Technologien, die deine Website zukunftssicher und schnell machen."
      techStack={[
        { name: "Next.js & React", category: "Framework", note: "Modernste Frontend-Architektur" },
        { name: "Tailwind CSS", category: "Styling", note: "Ultraschlankes CSS ohne Ballast" },
        { name: "Framer Motion", category: "Animationen", note: "Butterweiche 60fps Micro-Interactions" },
        { name: "Cloudflare Edge", category: "Hosting", note: "Globale CDN-Auslieferung in Millisekunden" },
        { name: "Core Web Vitals Optimierung", category: "Performance", note: "Optimiert auf minimale Ladezeiten & LCP/CLS" },
        { name: "Schema.org JSON-LD", category: "SEO", note: "Maschinenlesbare strukturierte Daten" },

      ]}
      faq={[
        {
          q: "Was kostet ein individuelles Webdesign bei arche?",
          a: "Eine maßgeschneiderte Single-Page-Website startet ab 169 €. Ein Multipage-Paket mit bis zu zwei Inhaltsseiten beginnt bei 269 €, zusätzliche Seiten gibt es ab 49 €. Alle Preise sind transparent kalkuliert, ohne versteckte laufende Agenturgebühren.",
        },
        {
          q: "Wie lange dauert die Erstellung einer Website?",
          a: "Ein One-Pager ist in der Regel innerhalb von 5 bis 7 Werktagen einsatzbereit. Größere Multipage-Websites dauern zwischen 1 und 2 Wochen, je nachdem, wie schnell Inhalte und Feedback vorliegen.",
        },
        {
          q: "Muss ich aus Ludwigshafen oder Mannheim kommen, um mit arche zu arbeiten?",
          a: "Nein. arche hat seinen Sitz in der Metropolregion Rhein-Neckar (Ludwigshafen am Rhein / Mannheim), arbeitet aber mit Kunden in ganz Deutschland, Österreich und der Schweiz vollständig remote über Videocalls und digitale Abstimmungen zusammen.",
        },
        {
          q: "Kann ich die Website später erweitern lassen?",
          a: "Absolut. Durch den sauberen, modularen Code kann deine Website jederzeit um Unterseiten, Blog, Buchungssysteme oder Web App Features erweitert werden.",
        },
        {
          q: "Was unterscheidet arche von klassischen Webdesign-Agenturen?",
          a: "Du arbeitest direkt mit mir (Ali Malik), dem Entwickler und Designer deines Projekts. Keine zeitraubenden Meetings mit Account Managern, keine überteuerten Agentur-Stundensätze und keine Abhängigkeit von starren WordPress-Templates.",
        },
      ]}
      schemaJsonLd={PAGE_SCHEMA}
    />
  );
}
