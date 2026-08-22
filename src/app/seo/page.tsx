import type { Metadata } from "next";
import { LandingPageTemplate } from "@/components/arche/landing-page-template";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Technisches SEO & Suchmaschinenoptimierung | Core Web Vitals",
  description:
    "Technisches SEO, maximale Google Core Web Vitals und semantisches HTML. Bessere Rankings und qualifizierte organische Sichtbarkeit für deine Website.",
  alternates: { canonical: `${siteConfig.url}/seo` },
  openGraph: {
    title: "Technisches SEO & Suchmaschinenoptimierung — arche.",
    description:
      "Nachhaltiges technisches SEO, Schema.org-Strukturierung und Core Web Vitals Optimierung für Google Top-Rankings ohne Keyword-Stuffing.",
    url: `${siteConfig.url}/seo`,
    type: "website",
    locale: "de_DE",
    siteName: siteConfig.brand,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "arche. Technisches SEO" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Technisches SEO & Core Web Vitals — arche.",
    description:
      "Suchmaschinenoptimierung mit Fokus auf Technik, Ladezeiten und strukturierte Daten.",
    images: ["/og-image.png"],
  },
};

const PAGE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Technisches SEO & Suchmaschinenoptimierung",
  provider: {
    "@type": "ProfessionalService",
    name: "arche.",
    url: siteConfig.url,
  },
  serviceType: "Suchmaschinenoptimierung",
  description:
    "Ganzheitliche technische Suchmaschinenoptimierung, Core Web Vitals Tuning, Schema.org JSON-LD Implementierung und Google Search Console Optimierung.",
  areaServed: siteConfig.business.serviceAreas.map((area) => ({
    "@type": "AdministrativeArea",
    name: area,
  })),
};

export default function SeoPage() {
  return (
    <LandingPageTemplate
      slug="/seo"
      serviceName="SEO"
      eyebrow="Suchmaschinenoptimierung · Core Web Vitals · Google Search Console"
      h1="Technisches SEO & Core Web Vitals für maximale Google-Sichtbarkeit."
      lead="Was nützt das schönste Webdesign, wenn Google die Seite nicht versteht? arche optimiert Websites nach den neuesten Google-Richtlinien für maximale Crawlability, perfekte Ladezeiten und nachhaltige Sichtbarkeit für relevante Suchbegriffe."
      priceHint="In Webprojekten enthalten · Individuelle SEO-Audits auf Anfrage"
      badges={[
        "Fokus auf Google Core Web Vitals",
        "Gültige Schema.org JSON-LD Daten",
        "Semantisches HTML5",
        "Google Search Console Vorbereitung",
      ]}

      featuresTitle="Die Säulen unseres technischen SEO-Ansatzes"
      featuresSubtitle="Keine faulen Tricks, kein Keyword-Stuffing — sondern fundierte Technik und relevante Inhalte."
      features={[
        {
          iconKey: "gauge",
          title: "Core Web Vitals Optimierung",
          description:
            "Wir optimieren Largest Contentful Paint (LCP), Cumulative Layout Shift (CLS) und Interaction to Next Paint (INP) für maximale Pagespeed-Scores.",
        },
        {
          iconKey: "fileCode",
          title: "Semantisches HTML & Überschriften",
          description:
            "Klare H1-H3 Hierarchien, strukturierte Listen und aussagekräftige Tags helfen Google-Bots, die Relevanz deiner Inhalte sofort zu erfassen.",
        },
        {
          iconKey: "globe",
          title: "Strukturierte Daten (Schema.org)",
          description:
            "Mit validierten JSON-LD Markup-Daten für Organisation, Services, FAQs und Produkte heben sich deine Suchergebnisse in den Google SERPs hervor.",
        },
        {
          iconKey: "search",
          title: "Crawlability & Indexability",
          description:
            "Fehlerfreie XML-Sitemaps, saubere robots.txt-Konfigurationen und kanonische URLs (rel=canonical) verhindern Duplicate Content und Indexierungsfehler.",
        },
        {
          iconKey: "share",
          title: "Open Graph & Social Snippets",
          description:
            "Perfekt dimensionierte Vorschaukarten für WhatsApp, LinkedIn, Twitter/X und Facebook sorgen für professionelle Klickraten beim Teilen deiner Links.",
        },
        {
          iconKey: "lineChart",
          title: "Google Search Console Vorbereitung",
          description:
            "Wir bereiten deine Website so vor, dass Sitemaps, URL-Prüfungen und Indexierungsanträge in der Google Search Console reibungslos durchlaufen.",
        },
      ]}
      processTitle="Unser SEO-Ablauf"
      processSubtitle="Schritt für Schritt zur organischen Sichtbarkeit."
      processSteps={[
        {
          step: "01",
          title: "Audit & Status-Quo",
          description:
            "Prüfung bestehender URLs, Indexierungsstatus, Ladezeiten und technischer Hürden.",
          duration: "1–2 Tage",
        },
        {
          step: "02",
          title: "Struktur & Keywords",
          description:
            "Definition logischer URL-Strukturen und zielgruppengerechter Suchintentionen.",
          duration: "2 Tage",
        },
        {
          step: "03",
          title: "Technische Umsetzung",
          description:
            "Einbau von Schema.org, Meta-Tags, Bild-Optimierung, Sitemaps und Code-Splitting.",
          duration: "3–4 Tage",
        },
        {
          step: "04",
          title: "Search Console & Monitoring",
          description:
            "Sitemap-Einreichung, Indexierungsantrag und Monitoring der Impressionen.",
          duration: "Laufend",
        },
      ]}
      techTitle="SEO-Tools & Messstandards"
      techSubtitle="Wie wir SEO-Erfolge objektiv messen."
      techStack={[
        { name: "Google PageSpeed Insights", category: "Audit", note: "Mobile & Desktop 90+ Benchmark" },
        { name: "Google Search Console", category: "Monitoring", note: "Indexierung & Suchanfragen-Tracking" },
        { name: "Schema.org Validator", category: "Testing", note: "100% fehlerfreie Rich Result Daten" },
        { name: "Sitemap Protocol XML", category: "Indexing", note: "Automatisch generierte sitemap.xml" },
      ]}
      faq={[
        {
          q: "Garantiert arche Platz 1 bei Google?",
          a: "Nein — und vor jedem, der das verspricht, sollte man sich hüten. Der Google-Algorithmus berücksichtigt hunderte Faktoren. arche garantiert jedoch die technisch bestmögliche Grundlage: fehlerfreien Code, Top-Ladezeiten, strukturierte Daten und saubere Semantik, die Google für Spitzenplatzierungen voraussetzt.",
        },
        {
          q: "Wie schnell sind erste SEO-Ergebnisse sichtbar?",
          a: "Nach der Einreichung der Sitemap in der Google Search Console vergehen meist einige Tage bis Wochen für die vollständige Indexierung. Sichtbare Ranking- und Impression-Zuwächse stellen sich erfahrungsgemäß innerhalb der ersten 30 bis 90 Tage ein.",
        },
        {
          q: "Ist SEO bei jeder von arche erstellten Website dabei?",
          a: "Ja. Technisches Basis-SEO (Meta-Tags, sitemap.xml, robots.txt, Canonical Tags, semantisches HTML und Performance-Optimierung) ist fester Bestandteil jedes Website-Projekts.",
        },
        {
          q: "Was bedeutet Core Web Vitals Optimierung?",
          a: "Die Google Core Web Vitals messen reale Nutzererfahrungen: Wie schnell baut sich der Hauptinhalt auf (LCP), wie stabil bleibt das Layout ohne Ruckeln (CLS) und wie schnell reagiert die Seite auf Klicks (INP). Wir optimieren jeden dieser Werte gezielt.",
        },
      ]}
      schemaJsonLd={PAGE_SCHEMA}
    />
  );
}
