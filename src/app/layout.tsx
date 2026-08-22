import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://arche.studio";
const SITE_NAME = "arche.";
const SITE_TITLE = "arche. — Websites auf Anfrage";
const SITE_DESCRIPTION =
  "Individuelle Websites, Frontend Development und UI/UX für kleine Unternehmen, Selbstständige und eigene Ideen. Direkt mit Ali Malik in Ludwigshafen. Websites ab 169 €. Unverbindliches Erstgespräch.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s — arche.",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Webdesign Ludwigshafen",
    "Website erstellen lassen Ludwigshafen",
    "Webdesign Mannheim",
    "Webdesign Rhein-Neckar",
    "Frontend Developer Ludwigshafen",
    "Website für kleine Unternehmen",
    "Günstige Website erstellen lassen",
    "Individuelle Website",
    "Landingpage erstellen lassen",
    "Single Page Website",
    "Multipage Website",
    "UI/UX Design Deutschland",
    "Creative Studio Ludwigshafen",
    "Digital Studio",
    "Webdesign Selbstständige",
    "Webdesign Deutschland",
    "arche",
    "arche studio",
    "Ali Malik Webdesign",
  ],
  authors: [{ name: "Ali Malik", url: SITE_URL }],
  creator: "Ali Malik",
  publisher: "arche.",
  applicationName: "arche.",
  category: "technology",
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "arche. — Websites aus Ludwigshafen, die nicht nach Baukasten aussehen.",
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "arche. — Independent Digital Studio aus Ludwigshafen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "arche. — Websites auf Anfrage",
    description: SITE_DESCRIPTION,
    images: ["/og-image.png"],
  },
  icons: {
    icon: [{ url: "/arche-visual.png", type: "image/png" }],
    apple: [{ url: "/arche-visual.png" }],
    shortcut: ["/arche-visual.png"],
  },
  manifest: undefined,
  other: {
    "geo.region": "DE-RP",
    "geo.placename": "Ludwigshafen am Rhein",
    "geo.position": "49.4815;8.4460",
    "ICBM": "49.4815, 8.4460",
    "language": "German",
    "author": "Ali Malik",
  },
};

export const viewport = {
  themeColor: "#0a0a0c",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover" as const,
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="dark" suppressHydrationWarning>
      <head>
        {/* JSON-LD: ProfessionalService / Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "arche.",
              alternateName: "arche Studio",
              description: SITE_DESCRIPTION,
              url: SITE_URL,
              logo: `${SITE_URL}/arche-lockup.png`,
              image: `${SITE_URL}/og-image.png`,
              founder: {
                "@type": "Person",
                name: "Ali Malik",
              },
              founderName: "Ali Malik",
              areaServed: [
                {
                  "@type": "City",
                  name: "Ludwigshafen am Rhein",
                },
                {
                  "@type": "City",
                  name: "Mannheim",
                },
                {
                  "@type": "Region",
                  name: "Rhein-Neckar",
                },
                {
                  "@type": "Country",
                  name: "Germany",
                },
              ],
              knowsLanguage: ["de", "en"],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Ludwigshafen am Rhein",
                postalCode: "67065",
                addressCountry: "DE",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 49.4815,
                longitude: 8.4460,
              },
              serviceType: [
                "Webdesign",
                "Frontend Development",
                "UI/UX Design",
                "Landingpage Erstellung",
                "Website Entwicklung",
                "Media Design",
                "Website Overhaul",
                "Redesign",
              ],
              offers: {
                "@type": "AggregateOffer",
                priceCurrency: "EUR",
                lowPrice: "169",
                highPrice: "269",
                offerCount: "6",
              },
              sameAs: ["https://instagram.com/malikali065"],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                email: "alimalik67065@gmail.com",
                availableLanguage: ["German", "English"],
              },
            }),
          }}
        />
        {/* JSON-LD: WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "arche.",
              url: SITE_URL,
              inLanguage: "de-DE",
              publisher: {
                "@type": "Organization",
                name: "arche.",
              },
            }),
          }}
        />
        {/* JSON-LD: Person (Founder) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Ali Malik",
              jobTitle: "Founder · Design & Development",
              worksFor: {
                "@type": "Organization",
                name: "arche.",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Ludwigshafen am Rhein",
                postalCode: "67065",
                addressCountry: "DE",
              },
              email: "alimalik67065@gmail.com",
              url: SITE_URL,
              sameAs: ["https://instagram.com/malikali065"],
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} antialiased bg-background text-foreground font-sans`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
