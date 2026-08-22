import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Mail, MapPin, User } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Impressum",
  description:
    "Impressum und Anbieterkennzeichnung von arche. — Ali Malik, Ludwigshafen am Rhein.",
  robots: { index: true, follow: true },
  alternates: { canonical: `${siteConfig.url}/impressum` },
};


export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-background text-foreground pt-20">
      <div className="mx-auto w-full max-w-3xl px-5 sm:px-8 py-16 md:py-24">
        {/* Zurück Link */}
        <Link
          href="/"
          className="group inline-flex items-center gap-2 text-body text-muted-foreground hover:text-foreground transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
          <span>Zurück zur Startseite</span>
        </Link>

        {/* Header */}
        <div className="mb-12 md:mb-16">
          <span className="text-eyebrow">Legal</span>
          <h1 className="text-headline mt-4">Impressum</h1>
        </div>

        {/* Content */}
        <div className="space-y-12">
          {/* § 5 DDG */}
          <section>
            <h2 className="text-title text-foreground mb-5">
              Angaben gemäß § 5 DDG
            </h2>
            <div className="surface rounded-2xl p-6 md:p-7 space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-eyebrow mt-1 shrink-0 w-20">Inhaber</span>
                <span className="text-body text-foreground font-medium">
                  Ali Malik
                </span>
              </div>
              <div className="h-px bg-white/[0.04]" />
              <div className="flex items-start gap-3">
                <span className="text-eyebrow mt-1 shrink-0 w-20">Marke</span>
                <span className="text-body text-foreground font-medium">
                  arche.
                </span>
              </div>
              <div className="h-px bg-white/[0.04]" />
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[oklch(0.72_0.20_295)] mt-1 shrink-0" />
                <span className="text-body text-foreground">
                  Ludwigshafen am Rhein
                  <br />
                  67065
                  <br />
                  Deutschland
                </span>
              </div>
            </div>
          </section>

          {/* Kontakt */}
          <section>
            <h2 className="text-title text-foreground mb-5">Kontakt</h2>
            <div className="surface rounded-2xl p-6 md:p-7">
              <a
                href="mailto:alimalik67065@gmail.com"
                className="group flex items-center gap-3 text-body text-foreground hover:text-[oklch(0.72_0.20_295)] transition-colors"
              >
                <Mail className="w-4 h-4 text-muted-foreground group-hover:text-[oklch(0.72_0.20_295)] transition-colors" />
                <span className="font-medium">alimalik67065@gmail.com</span>
              </a>
            </div>
          </section>

          {/* Verantwortlich für den Inhalt */}
          <section>
            <h2 className="text-title text-foreground mb-5">
              Verantwortlich für den Inhalt
            </h2>
            <p className="text-body-lg text-muted-foreground leading-relaxed mb-4">
              Verantwortlich für die Inhalte dieser Website ist:
            </p>
            <div className="surface rounded-2xl p-6 md:p-7 space-y-3">
              <div className="flex items-start gap-3">
                <User className="w-4 h-4 text-[oklch(0.72_0.20_295)] mt-1 shrink-0" />
                <span className="text-body text-foreground font-medium">
                  Ali Malik
                  <br />
                  arche.
                  <br />
                  Ludwigshafen am Rhein
                  <br />
                  Deutschland
                </span>
              </div>
            </div>
          </section>

          {/* Haftung für Inhalte */}
          <section>
            <h2 className="text-title text-foreground mb-4">
              Haftung für Inhalte
            </h2>
            <div className="space-y-4 text-body text-muted-foreground leading-relaxed">
              <p>
                Die Inhalte dieser Website wurden mit Sorgfalt erstellt. Als
                Diensteanbieter bin ich für eigene Inhalte auf dieser Website nach
                den allgemeinen gesetzlichen Vorschriften verantwortlich.
              </p>
              <p>
                Ich bin jedoch nicht verpflichtet, übermittelte oder gespeicherte
                fremde Informationen allgemein zu überwachen oder nach Umständen zu
                suchen, die auf eine rechtswidrige Tätigkeit hinweisen. Gesetzliche
                Verpflichtungen zur Entfernung oder Sperrung rechtswidriger Inhalte
                bleiben davon unberührt.
              </p>
              <p>
                Sollten mir konkrete Rechtsverletzungen bekannt werden, werde ich
                die betreffenden Inhalte im Rahmen der gesetzlichen Vorgaben prüfen
                und gegebenenfalls entfernen.
              </p>
            </div>
          </section>

          {/* Haftung für externe Links */}
          <section>
            <h2 className="text-title text-foreground mb-4">
              Haftung für externe Links
            </h2>
            <div className="space-y-4 text-body text-muted-foreground leading-relaxed">
              <p>
                Diese Website kann Links zu externen Websites Dritter enthalten.
                Auf deren Inhalte und deren aktuelle Gestaltung habe ich keinen
                Einfluss.
              </p>
              <p>
                Für die Inhalte externer Websites ist grundsätzlich der jeweilige
                Betreiber verantwortlich. Eine permanente Kontrolle verlinkter
                Seiten ist ohne konkrete Anhaltspunkte für eine Rechtsverletzung
                nicht zumutbar.
              </p>
              <p>
                Sollte mir eine konkrete Rechtsverletzung bekannt werden, werde ich
                den betreffenden Link im Rahmen der gesetzlichen Möglichkeiten
                prüfen und gegebenenfalls entfernen.
              </p>
            </div>
          </section>

          {/* Urheberrecht */}
          <section>
            <h2 className="text-title text-foreground mb-4">Urheberrecht</h2>
            <div className="space-y-4 text-body text-muted-foreground leading-relaxed">
              <p>
                Die auf dieser Website veröffentlichten Inhalte und Werke, soweit sie
                von arche. bzw. dem Betreiber erstellt wurden, unterliegen dem
                deutschen Urheberrecht.
              </p>
              <p>
                Die Vervielfältigung, Bearbeitung, Verbreitung oder sonstige
                Verwertung außerhalb der gesetzlich zulässigen Grenzen bedarf der
                vorherigen Zustimmung des jeweiligen Rechteinhabers.
              </p>
              <p>Inhalte Dritter werden, soweit erforderlich, entsprechend gekennzeichnet.</p>
            </div>
          </section>

          {/* Verbraucherstreitbeilegung */}
          <section>
            <h2 className="text-title text-foreground mb-4">
              Verbraucherstreitbeilegung
            </h2>
            <div className="space-y-4 text-body text-muted-foreground leading-relaxed">
              <p>
                Ich bin nicht bereit und nicht verpflichtet, an
                Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
                teilzunehmen.
              </p>
              <p>
                Die frühere Online-Streitbeilegungsplattform der Europäischen
                Kommission ist seit dem 20. Juli 2025 eingestellt und wird daher
                hier nicht mehr verlinkt.
              </p>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-white/[0.06]">
          <p className="text-micro text-muted-foreground">
            Stand: August 2026 · Dieses Impressum wurde für den aktuellen Stand des
            Angebots erstellt. Es ersetzt keine individuelle Rechtsberatung.
          </p>
        </div>
      </div>
    </main>
  );
}
