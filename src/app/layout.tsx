import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { siteConfig } from "@/lib/site-config";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = siteConfig.url;
const SITE_NAME = siteConfig.brand;
const SITE_TITLE = "arche. — Webdesign, Webentwicklung & Digitale Produkte | Ludwigshafen & Mannheim";
const SITE_DESCRIPTION =
  "arche ist dein Studio für modernes Webdesign, maßgeschneiderte Webentwicklung (React, Next.js), UI/UX Design und technisches SEO. Für Unternehmen & Selbstständige in Ludwigshafen, Mannheim und ganz Deutschland.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | arche. — Webdesign & Webentwicklung",
  },
  description: SITE_DESCRIPTION,
  authors: [{ name: "Ali Malik", url: SITE_URL }],
  creator: "Ali Malik",
  publisher: "arche.",
  applicationName: "arche.",
  category: "technology",
  // Google Search Console Verifizierung hier sauber eingebunden:
  verification: {
    google: "GKF68M3dwQHT6O94KVs_RwY2jcvNjgKZRuVbXdylG54",
  },
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
    title: "arche. — Webdesign, Webentwicklung & Digitale Produkte",
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "arche. — Digital Studio für Webdesign und Webentwicklung aus der Rhein-Neckar Region",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "arche. — Webdesign & moderne Webentwicklung",
    description: SITE_DESCRIPTION,
    images: ["/og-image.png"],
  },
  icons: {
    icon: [{ url: "/arche-visual.png", type: "image/png" }],
    apple: [{ url: "/arche-visual.png" }],
    shortcut: ["/arche-visual.png"],
  },
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
  // Unified Schema.org Graph
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "arche.",
        alternateName: ["arche", "arche Digital Studio", "arche Webdesign"],
        description: SITE_DESCRIPTION,
        inLanguage: "de-DE",
        publisher: {
          "@id": `${SITE_URL}/#organization`,
        },
      },
      {
        "@type": ["Organization", "ProfessionalService"],
        "@id": `${SITE_URL}/#organization`,
        name: "arche.",
        alternateName: "arche Digital Studio",
        url: SITE_URL,
        logo: `${SITE_URL}/arche-lockup.png`,
        image: `${SITE_URL}/og-image.png`,
        description: SITE_DESCRIPTION,
        founder: {
          "@id": `${SITE_URL}/#founder`,
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Ludwigshafen am Rhein",
          postalCode: "67065",
          addressRegion: "Rheinland-Pfalz",
          addressCountry: "DE",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 49.4815,
          longitude: 8.446,
        },
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
            "@type": "AdministrativeArea",
            name: "Metropolregion Rhein-Neckar",
          },
          {
            "@type": "Country",
            name: "Germany",
          },
          {
            "@type": "Country",
            name: "Austria",
          },
          {
            "@type": "Country",
            name: "Switzerland",
          },
        ],
        knowsLanguage: ["de", "en"],
        serviceType: [
          "Webdesign",
          "Webentwicklung",
          "Frontend Development",
          "UI/UX Design",
          "Suchmaschinenoptimierung (SEO)",
          "Web Application Development",
          "Website Redesign",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "arche. Webdesign & Development Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Webdesign & UI/UX",
                description: "Individuelles, modernes Webdesign für maximale Conversion und Markenidentität.",
                url: `${SITE_URL}/webdesign`,
              },
              priceCurrency: "EUR",
              price: "169",
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Moderne Webentwicklung",
                description: "Hochperformante Frontend-Entwicklung und Web Apps mit React, Next.js und TypeScript.",
                url: `${SITE_URL}/webentwicklung`,
              },
              priceCurrency: "EUR",
              price: "269",
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "UI/UX Design & Redesign",
                description: "Nutzerzentrierte Schnittstellen, Prototyping und Design-Systeme.",
                url: `${SITE_URL}/ui-ux-design`,
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "SEO & Core Web Vitals",
                description: "Technisches SEO, Ladezeiten-Optimierung und semantische Strukturierung.",
                url: `${SITE_URL}/seo`,
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Digitale Produkte & Web Apps",
                description: "Entwicklung maßgeschneiderter Webanwendungen, SaaS-Tools und Utilities.",
                url: `${SITE_URL}/digitale-produkte`,
              },
            },
          ],
        },
        sameAs: ["https://instagram.com/malikali065"],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer service",
          email: siteConfig.email,
          availableLanguage: ["German", "English"],
        },
      },
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#founder`,
        name: "Ali Malik",
        jobTitle: "Founder · Design & Development",
        worksFor: {
          "@id": `${SITE_URL}/#organization`,
        },
        url: SITE_URL,
        email: siteConfig.email,
        sameAs: ["https://instagram.com/malikali065"],
      },
      {
        "@type": "WebApplication",
        "@id": "https://arche-links.pages.dev/#app",
        name: "arche.links",
        url: "https://arche-links.pages.dev/",
        applicationCategory: "UtilityApplication",
        operatingSystem: "All",
        description: "Kostenlose, datenschutzkonforme Link-in-Bio Alternative für alle Links an einem Ort.",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "EUR",
        },
        author: {
          "@id": `${SITE_URL}/#organization`,
        },
      },
      {
        "@type": "WebApplication",
        "@id": "https://arche-remove.pages.dev/#app",
        name: "arche.remove",
        url: "https://arche-remove.pages.dev/",
        applicationCategory: "DesignApplication",
        operatingSystem: "All",
        description: "Kostenloser KI-gestützter Hintergrund-Entferner direkt im Browser ohne Server-Upload.",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "EUR",
        },
        author: {
          "@id": `${SITE_URL}/#organization`,
        },
      },
      {
        "@type": "WebApplication",
        "@id": "https://arche-pdf.pages.dev/#app",
        name: "arche.pdf",
        url: "https://arche-pdf.pages.dev/",
        applicationCategory: "BusinessApplication",
        operatingSystem: "All",
        description: "Kostenlose browserbasierte PDF-Tools zum Zusammenführen, Teilen und Konvertieren.",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "EUR",
        },
        author: {
          "@id": `${SITE_URL}/#organization`,
        },
      },
    ],
  };

  return (
    <html lang="de" className="dark" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaGraph),
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