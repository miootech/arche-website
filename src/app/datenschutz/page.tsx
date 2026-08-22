import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Mail, MapPin, Shield } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description:
    "Datenschutzerklärung von arche. — Informationen zur Verarbeitung personenbezogener Daten durch Ali Malik, Ludwigshafen.",
  robots: { index: true, follow: true },
  alternates: { canonical: `${siteConfig.url}/datenschutz` },
};


export default function DatenschutzPage() {
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
          <h1 className="text-headline mt-4">Datenschutzerklärung</h1>
          <p className="text-body-lg text-muted-foreground mt-5 max-w-2xl leading-relaxed">
            Der Schutz deiner persönlichen Daten ist mir wichtig. Nachfolgend
            informiere ich dich über die Verarbeitung personenbezogener Daten bei der
            Nutzung dieser Website.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-12">
          {/* 1. Verantwortlicher */}
          <section>
            <h2 className="text-title text-foreground mb-5">
              <span className="text-[oklch(0.72_0.20_295)] mr-3 font-mono text-micro">
                01
              </span>
              Verantwortlicher
            </h2>
            <p className="text-body text-muted-foreground leading-relaxed mb-4">
              Verantwortlich für die Verarbeitung personenbezogener Daten auf dieser
              Website ist:
            </p>
            <div className="surface rounded-2xl p-6 md:p-7 space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-eyebrow mt-1 shrink-0 w-20">Marke</span>
                <span className="text-body text-foreground font-medium">arche.</span>
              </div>
              <div className="h-px bg-white/[0.04]" />
              <div className="flex items-start gap-3">
                <span className="text-eyebrow mt-1 shrink-0 w-20">Inhaber</span>
                <span className="text-body text-foreground font-medium">
                  Ali Malik
                </span>
              </div>
              <div className="h-px bg-white/[0.04]" />
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[oklch(0.72_0.20_295)] mt-1 shrink-0" />
                <span className="text-body text-foreground">
                  Ludwigshafen
                  <br />
                  67065
                  <br />
                  Deutschland
                </span>
              </div>
              <div className="h-px bg-white/[0.04]" />
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[oklch(0.72_0.20_295)] mt-1 shrink-0" />
                <a
                  href="mailto:alimalik67065@gmail.com"
                  className="text-body text-foreground hover:text-[oklch(0.72_0.20_295)] transition-colors font-medium"
                >
                  alimalik67065@gmail.com
                </a>
              </div>
            </div>
          </section>

          {/* 2. Allgemeine Informationen */}
          <section>
            <h2 className="text-title text-foreground mb-5">
              <span className="text-[oklch(0.72_0.20_295)] mr-3 font-mono text-micro">
                02
              </span>
              Allgemeine Informationen
            </h2>
            <div className="space-y-4 text-body text-muted-foreground leading-relaxed">
              <p>Der Schutz deiner persönlichen Daten ist mir wichtig.</p>
              <p>
                Diese Datenschutzerklärung erklärt, welche personenbezogenen Daten bei
                der Nutzung dieser Website verarbeitet werden, warum dies geschieht
                und welche Rechte du dabei hast.
              </p>
              <p>
                Ich versuche dabei, nur die Daten zu verarbeiten, die für den
                jeweiligen Zweck tatsächlich erforderlich sind.
              </p>
            </div>
          </section>

          {/* 3. Hosting */}
          <section>
            <h2 className="text-title text-foreground mb-5">
              <span className="text-[oklch(0.72_0.20_295)] mr-3 font-mono text-micro">
                03
              </span>
              Hosting und Bereitstellung der Website
            </h2>
            <div className="space-y-4 text-body text-muted-foreground leading-relaxed">
              <p>
                Diese Website wird über{" "}
                <span className="text-foreground font-medium">Cloudflare Pages</span>{" "}
                bereitgestellt. Anbieter ist Cloudflare, Inc., 101 Townsend Street,
                San Francisco, CA 94107, USA.
              </p>
              <p>
                Beim Aufruf der Website können technisch erforderliche Informationen
                verarbeitet werden. Dazu können insbesondere gehören:
              </p>
              <ul className="list-none space-y-2 pl-0">
                {[
                  "IP-Adresse",
                  "Datum und Uhrzeit des Zugriffs",
                  "aufgerufene Seiten bzw. URLs",
                  "Referrer-URL",
                  "Browsertyp und Browserversion",
                  "Betriebssystem",
                  "technische Informationen zur Verbindung und Sicherheit",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className="mt-1.5 inline-block w-1 h-1 rounded-full bg-[oklch(0.62_0.24_295)] shrink-0"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>
                Die Verarbeitung dient insbesondere dazu, die Website
                bereitzustellen, ihre Stabilität sicherzustellen und sie vor
                Missbrauch und Angriffen zu schützen.
              </p>
              <p>
                Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Das berechtigte
                Interesse liegt in der sicheren und zuverlässigen Bereitstellung
                dieser Website.
              </p>
            </div>
          </section>

          {/* 4. Firebase */}
          <section>
            <h2 className="text-title text-foreground mb-5">
              <span className="text-[oklch(0.72_0.20_295)] mr-3 font-mono text-micro">
                04
              </span>
              Benutzerkonten und Reviews
            </h2>
            <div className="space-y-4 text-body text-muted-foreground leading-relaxed">
              <p>
                Für Benutzerkonten und die Review-Funktion wird{" "}
                <span className="text-foreground font-medium">Firebase</span> von
                Google eingesetzt.
              </p>
              <p>
                Dabei können insbesondere folgende Daten verarbeitet werden:
              </p>
              <ul className="list-none space-y-2 pl-0">
                {[
                  "E-Mail-Adresse",
                  "Passwort bzw. für die Authentifizierung erforderliche Zugangsdaten",
                  "Name",
                  "Bewertungstext",
                  "Sternebewertung",
                  "optional angegebener Projektname",
                  "technische Informationen zur Authentifizierung und Sicherheit",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className="mt-1.5 inline-block w-1 h-1 rounded-full bg-[oklch(0.62_0.24_295)] shrink-0"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>
                Passwörter werden nicht im Klartext durch arche. gespeichert. Die
                Authentifizierung erfolgt über die hierfür vorgesehenen Funktionen
                des eingesetzten Dienstes.
              </p>
              <p>
                Bewertungen werden vor ihrer Veröffentlichung geprüft. Eine
                veröffentlichte Bewertung kann dabei insbesondere mit dem von dir
                angegebenen Namen und Bewertungstext öffentlich auf der Website
                erscheinen.
              </p>
              <p>
                Die Verarbeitung erfolgt, soweit sie zur Bereitstellung des
                Benutzerkontos und der Review-Funktion erforderlich ist, zur
                Durchführung der von dir angeforderten Funktion. Soweit eine
                Einwilligung erforderlich ist, erfolgt die Verarbeitung auf
                Grundlage von Art. 6 Abs. 1 lit. a DSGVO.
              </p>
              <p>
                Weitere Informationen zum Datenschutz bei Firebase findest du bei
                Google:{" "}
                <a
                  href="https://firebase.google.com/support/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-[oklch(0.72_0.20_295)] transition-colors underline underline-offset-2"
                >
                  Firebase Privacy and Security
                </a>
              </p>
            </div>
          </section>

          {/* 5. Kontaktformular */}
          <section>
            <h2 className="text-title text-foreground mb-5">
              <span className="text-[oklch(0.72_0.20_295)] mr-3 font-mono text-micro">
                05
              </span>
              Kontaktformular
            </h2>
            <div className="space-y-4 text-body text-muted-foreground leading-relaxed">
              <p>
                Wenn du das Kontaktformular verwendest, werden die von dir
                eingegebenen Angaben verarbeitet. Dazu gehören insbesondere:
              </p>
              <ul className="list-none space-y-2 pl-0">
                {[
                  "Name",
                  "E-Mail-Adresse",
                  "Unternehmen, sofern angegeben",
                  "Projektart",
                  "Budget, sofern angegeben",
                  "Nachricht",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className="mt-1.5 inline-block w-1 h-1 rounded-full bg-[oklch(0.62_0.24_295)] shrink-0"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>
                Zur Übermittlung des Kontaktformulars wird{" "}
                <span className="text-foreground font-medium">Web3Forms</span>{" "}
                eingesetzt. Die übermittelten Daten werden an den Dienst übertragen
                und anschließend zur Bearbeitung deiner Anfrage an die hinterlegte
                E-Mail-Adresse weitergeleitet.
              </p>
              <p>Die Verarbeitung erfolgt zur Bearbeitung deiner Kontaktanfrage.</p>
              <p>
                Soweit die Anfrage auf den Abschluss oder die Vorbereitung eines
                Vertrags gerichtet ist, ist Art. 6 Abs. 1 lit. b DSGVO die
                entsprechende Rechtsgrundlage. In anderen Fällen erfolgt die
                Verarbeitung grundsätzlich auf Grundlage von Art. 6 Abs. 1 lit. f
                DSGVO, wobei mein berechtigtes Interesse in der Bearbeitung und
                Beantwortung deiner Anfrage liegt.
              </p>
              <p>
                Die übermittelten Daten werden nicht länger gespeichert, als es für
                die Bearbeitung deiner Anfrage erforderlich ist, sofern keine
                gesetzlichen Aufbewahrungspflichten entgegenstehen.
              </p>
            </div>
          </section>

          {/* 6. Cookies */}
          <section>
            <h2 className="text-title text-foreground mb-5">
              <span className="text-[oklch(0.72_0.20_295)] mr-3 font-mono text-micro">
                06
              </span>
              Cookies und Tracking
            </h2>
            <div className="space-y-4 text-body text-muted-foreground leading-relaxed">
              <p>
                Diese Website verwendet nach aktuellem Stand keine Cookies zu
                Werbe- oder Analysezwecken und kein klassisches Web-Analytics-Tracking.
              </p>
              <p>
                Technisch notwendige Speicher- oder Sitzungsinformationen können
                jedoch verwendet werden, wenn sie für Funktionen wie die Anmeldung
                eines Benutzerkontos erforderlich sind.
              </p>
              <p>Es werden keine personenbezogenen Daten zu Werbezwecken verkauft.</p>
              <p>
                Sollten zukünftig weitere Analyse-, Marketing- oder
                Tracking-Dienste eingesetzt werden, wird diese Datenschutzerklärung
                entsprechend angepasst und — soweit erforderlich — eine
                Einwilligung eingeholt.
              </p>
            </div>
          </section>

          {/* 7. Öffentliche Daten */}
          <section>
            <h2 className="text-title text-foreground mb-5">
              <span className="text-[oklch(0.72_0.20_295)] mr-3 font-mono text-micro">
                07
              </span>
              Welche Daten werden öffentlich?
            </h2>
            <div className="space-y-4 text-body text-muted-foreground leading-relaxed">
              <p>
                Wenn du eine Bewertung veröffentlichst, können die von dir für die
                Veröffentlichung vorgesehenen Inhalte auf der Website sichtbar
                werden. Dazu können insbesondere gehören:
              </p>
              <ul className="list-none space-y-2 pl-0">
                {[
                  "dein angegebener Name",
                  "deine Sternebewertung",
                  "dein Bewertungstext",
                  "ein optional angegebener Projektname",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className="mt-1.5 inline-block w-1 h-1 rounded-full bg-[oklch(0.62_0.24_295)] shrink-0"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>
                Deine E-Mail-Adresse wird dabei nicht als Teil der öffentlichen
                Bewertung angezeigt.
              </p>
            </div>
          </section>

          {/* 8. Deine Rechte */}
          <section>
            <h2 className="text-title text-foreground mb-5">
              <span className="text-[oklch(0.72_0.20_295)] mr-3 font-mono text-micro">
                08
              </span>
              Deine Rechte
            </h2>
            <div className="space-y-4 text-body text-muted-foreground leading-relaxed">
              <p>
                Du hast nach der DSGVO insbesondere folgende Rechte:
              </p>
              <ul className="list-none space-y-2 pl-0">
                {[
                  "Recht auf Auskunft gemäß Art. 15 DSGVO",
                  "Recht auf Berichtigung gemäß Art. 16 DSGVO",
                  "Recht auf Löschung gemäß Art. 17 DSGVO",
                  "Recht auf Einschränkung der Verarbeitung gemäß Art. 18 DSGVO",
                  "Recht auf Datenübertragbarkeit gemäß Art. 20 DSGVO",
                  "Recht auf Widerspruch gemäß Art. 21 DSGVO",
                  "Recht auf Widerruf einer erteilten Einwilligung gemäß Art. 7 Abs. 3 DSGVO",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className="mt-1.5 inline-block w-1 h-1 rounded-full bg-[oklch(0.62_0.24_295)] shrink-0"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>
                Wenn du eines dieser Rechte ausüben möchtest, kannst du dich an
                folgende Adresse wenden:
              </p>
              <div className="surface rounded-2xl p-5 md:p-6">
                <a
                  href="mailto:alimalik67065@gmail.com"
                  className="group flex items-center gap-3 text-body text-foreground hover:text-[oklch(0.72_0.20_295)] transition-colors"
                >
                  <Mail className="w-4 h-4 text-muted-foreground group-hover:text-[oklch(0.72_0.20_295)] transition-colors" />
                  <span className="font-medium">alimalik67065@gmail.com</span>
                </a>
              </div>
              <p>
                Darüber hinaus besteht das Recht, sich bei einer zuständigen
                Datenschutz-Aufsichtsbehörde zu beschweren.
              </p>
            </div>
          </section>

          {/* 9. Drittländer */}
          <section>
            <h2 className="text-title text-foreground mb-5">
              <span className="text-[oklch(0.72_0.20_295)] mr-3 font-mono text-micro">
                09
              </span>
              Datenübermittlung in Drittländer
            </h2>
            <div className="space-y-4 text-body text-muted-foreground leading-relaxed">
              <p>
                Bei einzelnen eingesetzten Dienstleistern kann eine Verarbeitung
                personenbezogener Daten außerhalb der Europäischen Union bzw. des
                Europäischen Wirtschaftsraums stattfinden.
              </p>
              <p>
                Dies kann insbesondere bei international tätigen Anbietern wie
                Cloudflare oder Google relevant sein.
              </p>
              <p>
                Für solche Übermittlungen werden — soweit erforderlich — die nach
                der DSGVO vorgesehenen geeigneten Garantien und Rechtsgrundlagen
                verwendet.
              </p>
              <p>
                Welche konkreten Garantien im Einzelfall zur Anwendung kommen,
                richtet sich nach dem jeweiligen Dienst und dessen aktueller
                Konfiguration.
              </p>
            </div>
          </section>

          {/* 10. Speicherdauer */}
          <section>
            <h2 className="text-title text-foreground mb-5">
              <span className="text-[oklch(0.72_0.20_295)] mr-3 font-mono text-micro">
                10
              </span>
              Speicherdauer
            </h2>
            <div className="space-y-4 text-body text-muted-foreground leading-relaxed">
              <p>
                Personenbezogene Daten werden grundsätzlich nur so lange
                gespeichert, wie dies für den jeweiligen Zweck erforderlich ist.
              </p>
              <p>
                Darüber hinaus können Daten gespeichert werden, wenn gesetzliche
                Aufbewahrungspflichten bestehen oder die weitere Speicherung zur
                Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen
                erforderlich ist.
              </p>
            </div>
          </section>

          {/* 11. Änderungen */}
          <section>
            <h2 className="text-title text-foreground mb-5">
              <span className="text-[oklch(0.72_0.20_295)] mr-3 font-mono text-micro">
                11
              </span>
              Änderungen dieser Datenschutzerklärung
            </h2>
            <div className="space-y-4 text-body text-muted-foreground leading-relaxed">
              <p>
                Diese Datenschutzerklärung kann angepasst werden, wenn sich die
                eingesetzten Dienste, Funktionen oder gesetzlichen Anforderungen
                ändern.
              </p>
              <p>Die jeweils aktuelle Fassung ist auf dieser Website abrufbar.</p>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-white/[0.06]">
          <p className="text-micro text-muted-foreground">
            Stand: August 2026 · Diese Datenschutzerklärung stellt keine individuelle
            Rechtsberatung dar.
          </p>
        </div>
      </div>
    </main>
  );
}
