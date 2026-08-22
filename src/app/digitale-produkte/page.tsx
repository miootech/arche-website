import type { Metadata } from "next";
import { LandingPageTemplate } from "@/components/arche/landing-page-template";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Digitale Produkte, Web Apps & kostenlose Tools | arche.",
  description:
    "Eigene Web Apps, browserbasierte Werkzeuge und maßgeschneiderte SaaS-Lösungen von arche. Entdecke unsere kostenlosen Tools und digitale Produkte für moderne Workflows.",
  alternates: { canonical: `${siteConfig.url}/digitale-produkte` },
  openGraph: {
    title: "Digitale Produkte & Web Apps — arche.",
    description:
      "Eigene Web Apps, browserbasierte Werkzeuge und maßgeschneiderte SaaS-Lösungen von arche. Entdecke unsere kostenlosen Tools und digitale Produkte für moderne Workflows.",
    url: `${siteConfig.url}/digitale-produkte`,
    type: "website",
    locale: "de_DE",
    siteName: siteConfig.brand,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "arche. Digitale Produkte" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digitale Produkte & Web Apps — arche.",
    description:
      "Eigene Web Apps, browserbasierte Werkzeuge und maßgeschneiderte SaaS-Lösungen von arche. Entdecke unsere kostenlosen Tools und digitale Produkte für moderne Workflows.",
    images: ["/og-image.png"],
  },
};


const PAGE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Digitale Produkte & Web Apps von arche.",
  url: `${siteConfig.url}/digitale-produkte`,
  description:
    "Übersicht über maßgeschneiderte digitale Produkte, Web Apps und browserbasierte Werkzeuge von arche.",
  mainEntity: {
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "WebApplication",
          name: "arche.links",
          url: "https://arche-links.pages.dev/",
          description: "Kostenlose Link-in-Bio Alternative für alle Links an einem Ort.",
          applicationCategory: "UtilityApplication",
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "WebApplication",
          name: "arche.remove",
          url: "https://arche-remove.pages.dev/",
          description: "Kostenloser KI Hintergrund Entferner direkt im Browser.",
          applicationCategory: "DesignApplication",
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "WebApplication",
          name: "arche.pdf",
          url: "https://arche-pdf.pages.dev/",
          description: "Kostenlose PDF Tools zum Zusammenführen, Teilen und Konvertieren.",
          applicationCategory: "BusinessApplication",
        },
      },
    ],
  },
};

export default function DigitaleProduktePage() {
  return (
    <LandingPageTemplate
      slug="/digitale-produkte"
      serviceName="Digitale Produkte"
      eyebrow="Web Apps · SaaS · Freie Browser-Tools"
      h1="Digitale Produkte, Web Apps & smarte Tools aus dem Studio."
      lead="arche baut nicht nur Websites für Kunden, sondern entwickelt eigene nützliche digitale Produkte und Webanwendungen. Schnell, datenschutzkonform und direkt im Browser lauffähig — ohne Login-Zwang und ohne versteckte Gebühren."
      priceHint="Eigene Tools kostenlos · Individuelle Web-App-Entwicklung auf Anfrage"
      badges={[
        "Kostenlose Studio-Tools",
        "Keine Registrierung erforderlich",
        "Lokale Browser-Berechnung",
        "Individuelle SaaS & Web Apps",
      ]}

      featuresTitle="Unsere 3 kostenlosen Studio-Werkzeuge"
      featuresSubtitle="Direkt nutzen ohne Account — gebaut mit denselben Qualitätsansprüchen wie unsere Kundenprojekte."
      features={[
        {
          iconKey: "link",
          title: "arche.links — Kostenlose Link-in-Bio Alternative",
          description:
            "Bündle alle deine Social-Media-Links, Portfolios und Kontaktkanäle auf einer minimalistischen, schnellen Profil-Landingpage. Schlanker und datenschutzfreundlicher als Linktree.",
        },
        {
          iconKey: "scissors",
          title: "arche.remove — Kostenloser KI Hintergrund Entferner",
          description:
            "Entferne Hintergründe aus Fotos und Grafiken in Sekundenschnelle. Die KI-Berechnung erfolgt direkt lokal im Browser — deine sensiblen Bilder verlassen niemals dein Gerät.",
        },
        {
          iconKey: "fileText",
          title: "arche.pdf — Kostenlose browserbasierte PDF-Tools",
          description:
            "PDF-Dokumente mühelos zusammenführen, aufteilen, komprimieren und konvertieren. Ohne teures Adobe-Abonnement, ohne Wartezeiten und ohne Dateigrößen-Limits.",
        },
        {
          iconKey: "boxes",
          title: "Individuelle SaaS & Micro-Tools",
          description:
            "Du hast eine eigene Produkt- oder Software-Idee? Wir entwickeln dein Minimal Viable Product (MVP) oder deine spezialisierte Webanwendung von der Konzeption bis zum Launch.",
        },
        {
          iconKey: "shieldCheck",
          title: "Privacy by Design",
          description:
            "Alle unsere Tools setzen auf maximale Datensparsamkeit und dezentrale Verarbeitung. Keine Tracking-Pixel, keine Werbung, keine Datenweitergabe.",
        },
        {
          iconKey: "sparkles",
          title: "Moderne Web-Standards",
          description:
            "Entwickelt mit WebAssembly, Canvas-APIs und React für reaktionsschnelle Benutzeroberflächen direkt im Client.",
        },
      ]}
      processTitle="Wie wir digitale Produkte entwickeln"
      processSubtitle="Vom echten Problem zur eleganten Webanwendung."
      processSteps={[
        {
          step: "01",
          title: "Problem-Validierung",
          description:
            "Identifikation von Reibungspunkten im Alltag und Definition schlanker Lösungsansätze.",
          duration: "Phase 1",
        },
        {
          step: "02",
          title: "UI/UX & Prototyping",
          description:
            "Fokussierte Benutzeroberflächen mit maximaler Einfachheit und intuitiver Bedienung.",
          duration: "Phase 2",
        },
        {
          step: "03",
          title: "Frontend & Logic",
          description:
            "Implementierung modernster Browser-APIs, lokaler Berechnungen und reaktiver UI-Zustände.",
          duration: "Phase 3",
        },
        {
          step: "04",
          title: "Deployment & Maintenance",
          description:
            "Globales Edge-Hosting, kontinuierliche Performance-Checks und fortlaufende Feature-Updates.",
          duration: "Laufend",
        },
      ]}
      techTitle="Technologien hinter unseren Web Apps"
      techSubtitle="Leistungsfähige APIs für Desktop & Mobile."
      techStack={[
        { name: "WebAssembly (WASM)", category: "Execution", note: "Native Rechenpower im Webbrowser" },
        { name: "Client-Side Processing", category: "Privacy", note: "0% Server-Uploads sensibler Daten" },
        { name: "Next.js & React 19", category: "App Engine", note: "Nahtlose Zustandsverwaltung" },
        { name: "Service Workers & PWA", category: "Offline", note: "Zuverlässige Offline-Funktionalität" },
      ]}
      faq={[
        {
          q: "Sind die Tools arche.links, arche.remove und arche.pdf wirklich dauerhaft kostenlos?",
          a: "Ja, alle drei Studio-Tools sind vollkommen kostenlos, werbefrei und ohne Registrierung nutzbar. Sie dienen als praktischer Nutzen für die Community und als Showcase für unsere Entwicklungsqualität.",
        },
        {
          q: "Wie unterscheidet sich arche.remove von removal.ai oder remove.bg?",
          a: "Während herkömmliche Dienste deine Bilder auf externe Server hochladen und nach wenigen Downloads Geld verlangen, läuft arche.remove komplett lokal in deinem Webbrowser. Das garantiert maximale Privatsphäre und unbegrenzte Nutzung.",
        },
        {
          q: "Kann arche für mein Unternehmen eine maßgeschneiderte Web App bauen?",
          a: "Ja! Wenn du ein internes Tool, einen Konfigurator, ein Buchungsportal oder eine SaaS-Lösung benötigst, entwickeln wir die Anwendung maßgeschneidert nach deinen Anforderungen.",
        },
      ]}
      schemaJsonLd={PAGE_SCHEMA}
    />
  );
}
