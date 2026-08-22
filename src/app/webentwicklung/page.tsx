import type { Metadata } from "next";
import { LandingPageTemplate } from "@/components/arche/landing-page-template";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Webentwicklung & Frontend Webagentur | React & Next.js",
  description:
    "Moderne Webentwicklung & Frontend-Entwicklung mit React, Next.js und TypeScript. Blitzschnelle Web Apps und performante Websites aus Ludwigshafen, Mannheim & Remote.",
  alternates: { canonical: `${siteConfig.url}/webentwicklung` },
  openGraph: {
    title: "Moderne Webentwicklung mit Next.js & React — arche.",
    description:
      "Frontend-Entwicklung und Web Apps ohne Ballast. High-End Code-Qualität, kompromisslose Ladezeiten und zukunftssichere Architekturen.",
    url: `${siteConfig.url}/webentwicklung`,
    type: "website",
    locale: "de_DE",
    siteName: siteConfig.brand,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "arche. Webentwicklung" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Webentwicklung & Webagentur — arche.",
    description:
      "Next.js, React, TypeScript Webentwicklung für anspruchsvolle Projekte.",
    images: ["/og-image.png"],
  },
};

const PAGE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Webentwicklung & Frontend Engineering",
  provider: {
    "@type": "ProfessionalService",
    name: "arche.",
    url: siteConfig.url,
  },
  serviceType: "Webentwicklung",
  description:
    "Maßgeschneiderte Frontend-Entwicklung, Web-App-Entwicklung und API-Integrationen mit React, Next.js, TypeScript und Tailwind CSS.",
  areaServed: (siteConfig.business.serviceAreas || []).map((area) => ({
    "@type": "AdministrativeArea",
    name: area,
  })),

  offers: {
    "@type": "Offer",
    price: "269",
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
  },
};

export default function WebentwicklungPage() {
  return (
    <LandingPageTemplate
      slug="/webentwicklung"
      serviceName="Webentwicklung"
      eyebrow="Frontend Entwicklung · Web Apps · Modern Tech"
      h1="Moderne Webentwicklung mit Next.js, React & TypeScript."
      lead="arche entwickelt hochperformante Websites und interaktive Webanwendungen auf Enterprise-Niveau. Durch moderne Komponenten-Architekturen, kompromisslose Ladezeit-Optimierung und typsicheren Code schaffen wir digitale Lösungen, die technisch wie visuell Maßstäbe setzen."
      priceHint="Multipage ab 269 € · Web Apps auf Anfrage"
      badges={[
        "React & Next.js App Router",
        "100% TypeScript Typsicherheit",
        "Kein träger Baukasten-Code",
        "Edge-Hosting auf Cloudflare",
      ]}
      featuresTitle="Warum moderne Webentwicklung einen echten Vorsprung liefert"
      featuresSubtitle="Wir ersetzen veraltete PHP-Monolithen und langsame Pagebuilder durch schlanke, zukunftssichere Architekturen."
      features={[
        {
          iconKey: "code",
          title: "Typsicherer, sauberer Code",
          description:
            "Durch TypeScript und standardisierte Komponenten bleibt dein Projekt auch nach Jahren wartbar, erweiterbar und frei von typischen Laufzeitfehlern.",
        },
        {
          iconKey: "rocket",
          title: "Sub-Second Ladezeiten",
          description:
            "Statische HTML-Vorab-Generierung (SSG) und schlanke Bundles sorgen für Ladezeiten unter 0.5 Sekunden. Google belohnt das mit Top-Rankings.",
        },
        {
          iconKey: "layers",
          title: "Skalierbare Komponenten-Bibliothek",
          description:
            "Design-Tokens und modulare React-Komponenten ermöglichen es, neue Features und Unterseiten in Rekordzeit und mit konsistentem Look auszurollen.",
        },
        {
          iconKey: "cpu",
          title: "Web App & API-Funktionalität",
          description:
            "Von interaktiven Rechnern und Filter-Systemen über Authentication bis zu individuellen SaaS-Dashboards — wir entwickeln Web Apps, die begeistern.",
        },
        {
          iconKey: "terminal",
          title: "Automatisierte CI/CD Deployments",
          description:
            "Automatisierte Builds und Edge-Deployments via GitHub und Cloudflare Pages stellen sicher, dass Änderungen fehlerfrei und sofort weltweit live sind.",
        },
        {
          iconKey: "shieldAlert",
          title: "Sicherheit & Ausfallsicherheit",
          description:
            "Keine angreifbaren WordPress-Plugins oder veraltete Server-Skripte. Statischer Export bedeutet maximale Sicherheit gegen Hacks und DDoS.",
        },
      ]}
      processTitle="Unser Entwicklungsprozess"
      processSubtitle="Präzise Ingenieurskunst trifft auf agilen Workflow."
      processSteps={[
        {
          step: "01",
          title: "Architektur-Planung",
          description:
            "Anforderungsanalyse, Datenstrukturen und Auswahl der optimalen Technologien für dein Projekt.",
          duration: "1–2 Tage",
        },
        {
          step: "02",
          title: "Component Building",
          description:
            "Entwicklung der UI-Komponenten in React & Tailwind CSS mit strikter Typprüfung.",
          duration: "3–5 Tage",
        },
        {
          step: "03",
          title: "Optimierung & Testing",
          description:
            "Lighthouse-Audits, Cross-Browser-Testing, Responsive Checks und Performance-Tuning.",
          duration: "2 Tage",
        },
        {
          step: "04",
          title: "Edge Deployment",
          description:
            "Livegang über Cloudflare Edge-Netzwerk mit globaler CDN-Verteilung und SSL-Verschlüsselung.",
          duration: "1 Tag",
        },
      ]}
      techTitle="Der Tech-Stack bei arche."
      techSubtitle="State-of-the-Art Webtechnologien für höchste Ansprüche."
      techStack={[
        { name: "Next.js 16 App Router", category: "Framework", note: "Server & Static Hybrid Rendering" },
        { name: "React 19", category: "UI Library", note: "Deklaratives Komponenten-Modell" },
        { name: "TypeScript 5", category: "Language", note: "Strikte Typsicherheit & Wartbarkeit" },
        { name: "Tailwind CSS v4", category: "Styling", note: "Zero-Runtime Utility-First CSS" },
        { name: "Cloudflare Pages", category: "Infrastructure", note: "Edge Hosting mit 99.99% Uptime" },
        { name: "Framer Motion", category: "Motion", note: "GPU-beschleunigte UI-Interaktionen" },
      ]}
      faq={[
        {
          q: "Warum entwickelt arche nicht mit WordPress oder Wix?",
          a: "Klassische Baukästen und WordPress-Themes leiden häufig unter überladenem Code, trägen Ladezeiten, Sicherheitslücken durch veraltete Plugins und starren Design-Grenzen. Next.js und React ermöglichen 10-fach schnellere Ladezeiten, höchste Sicherheit und 100% maßgeschneiderte Benutzererlebnisse.",
        },
        {
          q: "Kann arche auch komplexe Web Apps oder SaaS-Tools programmieren?",
          a: "Ja. Neben klassischen Websites entwickeln wir interaktive Webanwendungen, Client-Side Werkzeuge (wie unsere kostenlosen Tools arche.links, arche.remove und arche.pdf) sowie individuelle Kundenportale und Dashboards.",
        },
        {
          q: "Wer hostet meine Website nach der Fertigstellung?",
          a: "Wir empfehlen modernes Edge-Hosting über Cloudflare Pages. Das ist extrem sicher, weltweit blitzschnell und in den meisten Fällen sogar dauerhaft kostenlos für normale Website-Traffic-Mengen. Deine Domain bleibt dabei immer zu 100% in deinem Besitz.",
        },
        {
          q: "Kann ich Änderungen an der Website später selbst vornehmen?",
          a: "Je nach Anforderung können wir Headless CMS-Systeme oder datengetriebene Konfigurationen einbinden, sodass du Texte, Bilder und Produkte ohne Programmierkenntnisse aktualisieren kannst.",
        },
        {
          q: "Wie unterscheidet sich arche von einer klassischen Webagentur?",
          a: "Du hast direkten Entwicklerkontakt zu Ali Malik ohne Umwege über Projektmanager oder Junior-Entwickler. Das garantiert schnelle Iterationen, ehrliche technische Beratung und unschlagbare Preis-Leistung.",
        },
      ]}
      schemaJsonLd={PAGE_SCHEMA}
    />
  );
}
