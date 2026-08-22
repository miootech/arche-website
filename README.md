# arche. — Website & SEO Dokumentation

Offizielle Website der Digitalagentur **arche.**  
Live-Produktionsdomain: **[https://arche-website.pages.dev](https://arche-website.pages.dev)**

---

## 📑 Inhaltsverzeichnis

1. [Über das Projekt & Tech-Stack](#-über-das-projekt--tech-stack)
2. [Seiten- & Routing-Architektur](#-seiten---routing-architektur)
3. [Performance- & Core Web Vitals Architektur](#-performance---core-web-vitals-architektur)
4. [Schema.org Strukturierte Daten & FAQ-Logik](#-schemaorg-strukturierte-daten--faq-logik)
5. [Google Search Console — Schritt-für-Schritt Anleitung](#-google-search-console--schritt-für-schritt-anleitung)
   - [1. Property anlegen](#1-property-in-der-google-search-console-anlegen)
   - [2. Inhaberschaft bestätigen](#2-inhaberschaft-verifizieren)
   - [3. Sitemap einreichen](#3-sitemapxml-einreichen)
   - [4. URL-Prüfung durchführen](#4-url-prüfung-url-inspection-durchführen)
   - [5. Indexierung beantragen](#5-indexierung-beantragen)
   - [6. Indexierungsstatus überwachen](#6-indexierungsstatus-überwachen)
   - [7. Leistungsdaten analysieren](#7-leistungsdaten-analysieren)
   - [8. Indexierungsprobleme diagnostizieren & beheben](#8-indexierungsprobleme-finden--beheben)
6. [Lokale & Überregionale Positionierung](#-lokale--überregionale-positionierung)
7. [Preiskommunikation (Websites ab 169 €)](#-preiskommunikation)
8. [Entwicklung & Build-Befehle](#-entwicklung--build-befehle)

---

## 🚀 Über das Projekt & Tech-Stack

- **Framework:** Next.js 16 (App Router, Static Export nach `/out`)
- **UI & Komponenten:** React 19, Tailwind CSS v4, Lucide Icons, Radix UI
- **Motion:** Framer Motion (GPU-beschleunigt)
- **Hosting & CDN:** Cloudflare Pages (Edge Deployment)
- **Produktionsdomain:** `https://arche-website.pages.dev`

---

## 🗺 Seiten- & Routing-Architektur

Die Website konzentriert sich auf 6 primäre SEO-Landingpages und 2 rechtlich erforderliche Seiten. Es werden keine künstlichen Doorway-Seiten oder Keyword-Spam-URLs erzeugt.

| URL | Typ | H1-Hauptüberschrift | Haupt-Suchintention | Schema.org Typen |
| :--- | :--- | :--- | :--- | :--- |
| `https://arche-website.pages.dev/` | Primär | **Deine Idee. Richtig umgesetzt.** | Digitalagentur, Webdesign & Webentwicklung Rhein-Neckar | `WebSite`, `Organization`, `ProfessionalService`, `Person`, `WebApplication`, `FAQPage` |
| `https://arche-website.pages.dev/webdesign` | Primär | **Individuelles Webdesign, das Vertrauen aufbaut & Kunden gewinnt.** | Webdesign Ludwigshafen, Webdesign Mannheim, Website erstellen lassen | `Service`, `ProfessionalService`, `BreadcrumbList`, `FAQPage` |
| `https://arche-website.pages.dev/webentwicklung` | Primär | **Moderne Webentwicklung mit Next.js, React & TypeScript.** | Webentwicklung, Frontend Agentur, Next.js Agentur, React Web Apps | `Service`, `ProfessionalService`, `BreadcrumbList`, `FAQPage` |
| `https://arche-website.pages.dev/ui-ux-design` | Primär | **UI/UX Design, das Nutzer begeistert & Conversions steigert.** | UI/UX Design, Website Redesign, User Experience Optimierung | `Service`, `ProfessionalService`, `BreadcrumbList`, `FAQPage` |
| `https://arche-website.pages.dev/seo` | Primär | **Technisches SEO & Core Web Vitals für maximale Google-Sichtbarkeit.** | Technisches SEO, Core Web Vitals, Pagespeed Optimierung | `Service`, `ProfessionalService`, `BreadcrumbList`, `FAQPage` |
| `https://arche-website.pages.dev/digitale-produkte` | Primär | **Digitale Produkte, Web Apps & smarte Tools aus dem Studio.** | Digitale Produkte, Web Apps, SaaS, kostenlose Studio Tools | `CollectionPage`, `ItemList`, `WebApplication`, `FAQPage` |
| `https://arche-website.pages.dev/impressum` | Legal | **Impressum** | Rechtliche Anbieterkennzeichnung (§ 5 DDG) | `WebPage` |
| `https://arche-website.pages.dev/datenschutz` | Legal | **Datenschutzerklärung** | Datenschutz & DSGVO-Informationen | `WebPage` |

---

## ⚡ Performance- & Core Web Vitals Architektur

Statt fiktiver Scores basiert die technische Performance auf fundierten Architekturprinzipien:

1. **Statisches Prerendering:**
   - Alle 8 Routen werden beim Build vollständig in reines HTML vorkompiliert (`output: 'export'`). Der Googlebot und reale Nutzer erhalten sofort vollständigen Inhalt ohne Wartezeit auf serverseitige Render-Zyklen.
2. **LCP-Optimierung (Largest Contentful Paint):**
   - Hauptüberschriften sind direkt im statischen HTML enthalten.
   - Bildressourcen im sichtbaren Bereich (wie das Logo `arche-lockup.png`) sind mit `fetchpriority="high"` und `decoding="async"` versehen.
3. **CLS-Vermeidung (Cumulative Layout Shift):**
   - Lokale WOFF2-Schriftarten (`Inter`) werden im `<head>` vorgeladen (`preload`).
   - Bilder besitzen explizite Breiten- und Höhenattribute (`width`, `height`), um Layout-Sprünge beim Rendern zu verhindern.
4. **INP-Stabilität (Interaction to Next Paint):**
   - JavaScript-Dateien werden asynchron geladen (`async`), sodass die Haupt-Thread-Verarbeitung beim Seitenaufbau nicht blockiert wird.
   - Animationen nutzen GPU-beschleunigte CSS-Transforms (`transform`, `opacity`) über Framer Motion.
5. **Asset-Größen im Produktions-Build:**
   - CSS-Hauptbundle: ~125 KB unkomprimiert (~20 KB gzip).
   - Core JavaScript-Chunks: modulare Aufteilung, progressive Hydration.
   - Vektorgrafiken und optimierte PNGs für Logos und Icons.

---

## 🏷 Schema.org Strukturierte Daten & FAQ-Logik

1. **Globaler Entitäten-Graph (`layout.tsx`):**
   - `WebSite`: Verknüpfung von URL, Name, Publisher und Suchfunktion.
   - `Organization` / `ProfessionalService`: Gründer (*Ali Malik*), Standortdaten (Ludwigshafen am Rhein / Mannheim) und Leistungskatalog.
   - `Person`: Gründerprofil mit Rollenbeschreibung und Kontaktkanälen.
   - `WebApplication`: Maschinenlesbare Definitionen der Studio-Tools (*arche.links*, *arche.remove*, *arche.pdf*).
2. **1:1 FAQPage JSON-LD Validität:**
   - Ein `FAQPage`-Schema wird **ausschließlich** für die Fragen und Antworten generiert, die auch tatsächlich sichtbar auf der jeweiligen Seite im FAQ-Akkordeon dargestellt werden.
   - Jede Leistungsseite verfügt über themenspezifische, individuelle FAQs. Keine Duplizierung identischer FAQ-Daten.
3. **BreadcrumbList:**
   - Jede Unterseite besitzt ein gültiges `BreadcrumbList`-Schema zur Unterstützung hierarchischer Google Breadcrumb Snippets.

---

## 🔍 Google Search Console — Schritt-für-Schritt Anleitung

### 1. Property in der Google Search Console anlegen
1. Öffne die [Google Search Console](https://search.google.com/search-console).
2. Klicke oben links auf **Property hinzufügen**.
3. Wähle **URL-Präfix** und trage exakt ein:
   ```text
   https://arche-website.pages.dev
   ```
4. Klicke auf **Weiter**.

### 2. Inhaberschaft verifizieren
#### Methode A: HTML-Tag (Empfohlen)
1. Wähle unter *Andere Bestätigungsmethoden* die Option **HTML-Tag**.
2. Kopiere den Tag-Code (`<meta name="google-site-verification" content="..." />`).
3. Füge den Verification-Code in `src/app/layout.tsx` unter `metadata.verification.google` ein.
4. Führe den Build aus und deploye auf Cloudflare Pages.
5. Klicke in der Search Console auf **Bestätigen**.

### 3. Sitemap.xml einreichen
1. Navigiere im Menü zu **Sitemaps**.
2. Trage unter *Neue Sitemap hinzufügen* ein:
   ```text
   sitemap.xml
   ```
3. Klicke auf **Senden**. Google prüft die 8 kanonischen URLs.

### 4. URL-Prüfung (URL Inspection) durchführen
1. Gib in das obere Suchfeld der Search Console ein:
   ```text
   https://arche-website.pages.dev/
   ```
2. Klicke auf **Live-URL testen**, um die Crawler-Ansicht zu verifizieren (HTTP 200, mobile Optimierung, strukturierte Daten).

### 5. Indexierung beantragen
1. Klicke nach der Live-Prüfung auf **Indexierung beantragen**.
2. Wiederhole dies gezielt für die 5 Leistungsseiten (`/webdesign`, `/webentwicklung`, `/ui-ux-design`, `/seo`, `/digitale-produkte`).

### 6. Indexierungsstatus überwachen
- Unter **Seiten** im Bereich *Indexierung* siehst du nach einigen Tagen den Zuwachs indexierter Seiten.

### 7. Leistungsdaten analysieren
- Verfolge Klicks, Impressionen, CTR und durchschnittliche Suchpositionen für relevante Suchbegriffe.

### 8. Indexierungsprobleme finden & beheben
- Kontrolliere eventuelle Warnungen. Durch saubere Canonical-Tags und eine `#`-freie Sitemap sind gängige Duplikats- und Weiterleitungsfehler von vornherein ausgeschlossen.

---

## 📍 Lokale & Überregionale Positionierung

arche ist klar und authentisch positioniert:
> **„Digitalagentur aus der Rhein-Neckar-Region mit Kundenbetreuung vor Ort und remote deutschlandweit.“**

- **Regionaler Bezug:** Ludwigshafen am Rhein, Mannheim und die Metropolregion Rhein-Neckar.
- **Überregional:** Vollständig digitale und remote-fähige Zusammenarbeit für Kunden in ganz Deutschland, Österreich und der Schweiz (DACH).
- **Keine Fake-Standorte:** Keine vorgetäuschten Filialen oder Scheinoffices.

---

## 💶 Preiskommunikation

Die Preisangabe **„Websites ab 169 €“** ist eine faktisch zutreffende Einstiegsinformation:
- Single-Page-Websites starten ab 169 €.
- Multipage-Websites (bis zu 2 Seiten) beginnen bei 269 € (weitere Unterseiten ab 49 €).
- Die Preise werden transparent auf der Startseite, der Webdesign-Seite und im FAQ kommuniziert — ohne manipulatives Keyword-Stuffing.

---

## 🛠 Entwicklung & Build-Befehle

```powershell
# Lokalen Entwicklungsserver starten
npm run dev

# Produktions-Build erzeugen (statischer Export nach /out)
npm run build

# Linter ausführen
npm run lint
```
