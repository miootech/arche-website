import type { Metadata } from "next";
import { ArcheApp } from "@/components/arche/app";

export const metadata: Metadata = {
  title: "arche. — Websites auf Anfrage",
  description:
    "Individuelle Websites, Frontend Development und UI/UX für kleine Unternehmen, Selbstständige und eigene Ideen. Direkt mit Ali Malik in Ludwigshafen. Websites ab 169 €. Unverbindliches Erstgespräch.",
  alternates: { canonical: "https://arche.studio" },
  openGraph: {
    title: "arche. — Websites aus Ludwigshafen, die nicht nach Baukasten aussehen.",
    description:
      "Webdesign, Frontend und UI/UX aus Ludwigshafen am Rhein. Direkt mit Ali Malik. Websites ab 169 €. Unverbindliches Erstgespräch.",
    url: "https://arche.studio",
    type: "website",
    locale: "de_DE",
    siteName: "arche.",
    images: [
      {
        url: "/arche-lockup.png",
        width: 1200,
        height: 630,
        alt: "arche. — Independent Digital Studio aus Ludwigshafen",
      },
    ],
  },
};

export default function Home() {
  return <ArcheApp />;
}
