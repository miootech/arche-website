import type { Metadata } from "next";
import { ArcheApp } from "@/components/arche/app";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "arche. — Webdesign, Webentwicklung & Digitale Produkte | Ludwigshafen & Mannheim",
  description:
    "Moderne Websites, High-End Webentwicklung (React, Next.js), UI/UX Design und technisches SEO aus Ludwigshafen am Rhein und Mannheim. Für Unternehmen & Selbstständige. Websites ab 169 €.",
  alternates: { canonical: `${siteConfig.url}/` },
  openGraph: {
    title: "arche. — Webdesign & moderne Webentwicklung | Ludwigshafen & Mannheim",
    description:
      "Individuelle Websites und Webentwicklung aus der Rhein-Neckar Region. Schnell, modern, ohne Baukasten. Websites ab 169 €.",
    url: `${siteConfig.url}/`,
    type: "website",
    locale: "de_DE",
    siteName: siteConfig.brand,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "arche. — Webdesign & Webentwicklung aus Ludwigshafen & Mannheim",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "arche. — Webdesign & moderne Webentwicklung",
    description:
      "Webdesign, Frontend-Entwicklung und UI/UX aus Ludwigshafen & Mannheim. Direkt mit Ali Malik.",
    images: ["/og-image.png"],
  },
};

export default function Home() {
  return <ArcheApp />;
}

