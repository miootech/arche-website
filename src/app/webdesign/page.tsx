import type { Metadata } from "next";
import { SeoPageTemplate } from "@/components/sections/seo-page-template";

export const metadata: Metadata = {
  title: "Webdesign Ludwigshafen & Mannheim | Moderne Websites ab 169 €",
  description:
    "Professionelles Webdesign aus Ludwigshafen am Rhein und Mannheim. Individuelle Websites für kleine Unternehmen und Selbstständige. Modern, schnell, ohne Baukasten. Ab 169 €.",
  alternates: { canonical: "https://arche-website.pages.dev/webdesign" },
  openGraph: {
    title: "Webdesign Ludwigshafen & Mannheim | arche.",
    description:
      "Individuelle Websites aus der Rhein-Neckar Region. Modern, schnell, ohne Baukasten. Ab 169 €.",
    url: "https://arche-website.pages.dev/webdesign",
    type: "website",
    locale: "de_DE",
  },
};

export default function WebdesignPage() {
  return (
    <SeoPageTemplate
      eyebrow="Webdesign · Ludwigshafen & Mannheim"
      title="Webdesign"
      description=""
      heroHeadline="Webdesign, das nicht nach Baukasten aussieht."
      heroSub="Individuelle Websites für kleine Unternehmen, Selbstständige und Menschen mit einer Idee. Direkt aus Ludwigshafen am Rhein — modern, schnell und ohne Kompromisse. Ab 169 €."
      bullets={[
        "Individuelles Design — kein Template",
        "Responsive auf allen Geräten",
        "Schnelle Ladezeiten ab Tag 1",
        "SEO-Grundstruktur inklusive",
        "Lokal aus Ludwigshafen & Mannheim",
        "Direkter Kontakt zum Designer",
      ]}
      sections={[
        {
          heading: "Warum individuelles Webdesign?",
          body: "Eine Website ist oft der erste Eindruck, den jemand von deinem Unternehmen bekommt. Standard-Templates sehen oft genau so aus — Standard. Ich baue Websites, die zu dir passen: in der Struktur, im Stil und in der Wirkung. Kein Baukasten, keine Kompromisse, sondern eine Website, die wirklich deine ist.",
        },
        {
          heading: "Webdesign in Ludwigshafen und Mannheim",
          body: "Ich bin lokal in Ludwigshafen am Rhein verwurzelt und arbeite mit Unternehmen aus der gesamten Rhein-Neckar-Region — von Mannheim über Heidelberg bis hin zu Kunden in ganz Deutschland. Persönliche Beratung und kurze Wege inklusive.",
        },
        {
          heading: "Was eine gute Website leisten muss",
          body: "Eine gute Website lädt schnell, sieht auf jedem Gerät gut aus und führt Besucher:innen klar zu den wichtigsten Informationen. Sie ist barrierearm, SEO-freundlich und technisch sauber umgesetzt. All das ist für mich Standard — nicht Optional.",
        },
        {
          heading: "Preise und Ablauf",
          body: "Eine Single Page startet bei 169 €. Eine Multipage-Website (bis zu zwei Seiten) startet bei 269 €. Ablauf: Erstgespräch → Konzept → Umsetzung → Review → Launch. Kostenlos und unverbindlich.",
        },
      ]}
      faqItems={[
        {
          q: "Wie lange dauert ein Webdesign-Projekt?",
          a: "Je nach Umfang 3–7 Tage für die Umsetzung. Das Erstgespräch dauert 30 Minuten und ist kostenlos.",
        },
        {
          q: "Brauche ich eine Domain?",
          a: "Für den Livegang ja. Wenn du noch keine hast, unterstütze ich dich beim Setup. Die Domain bleibt in deinem Besitz.",
        },
        {
          q: "Kann ich meine bestehende Website weiterverwenden?",
          a: "In vielen Fällen ja. Wir schauen gemeinsam, was sich lohnt zu behalten und was neu gemacht werden sollte.",
        },
      ]}
      inquiry="webdesign"
    />
  );
}
