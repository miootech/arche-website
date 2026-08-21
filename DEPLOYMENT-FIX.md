# arche. — Deployment Fix (404 auf Cloudflare Pages)

## Das Problem

Die Website zeigte 404 auf Cloudflare Pages, weil:
1. `next.config.ts` hatte `output: "standalone"` → erzeugt Node.js Server (Cloudflare kann nur statische Dateien)
2. `package.json` build-script kopierte nach `.next/standalone/` (existiert nicht bei statischem Export)
3. `src/app/api/route.ts` ist inkompatibel mit statischem Export → Build schlägt fehl

## Die Lösung — 4 Schritte

### Schritt 1: Dateien ersetzen

Kopiere diese Dateien aus dem ZIP in dein Projekt (überschreiben):
- `next.config.ts` → Root-Verzeichnis
- `package.json` → Root-Verzeichnis
- `.nvmrc` → Root-Verzeichnis (stellt Node.js 20 für Cloudflare sicher)

### Schritt 2: API-Ordner LÖSCHEN

**WICHTIG:** Lösche den Ordner `src/app/api/` komplett.

Die Datei `src/app/api/route.ts` ist eine Server-API-Route, die mit statischem Export nicht funktioniert und den Build abbricht.

```
Löschen: src/app/api/route.ts
Löschen: src/app/api/ (ganzer Ordner)
```

### Schritt 3: Dependencies neu installieren

```bash
# Im Projekt-Ordner
rm -rf node_modules
rm bun.lock   # oder package-lock.json

# Neu installieren
bun install
# oder: npm install
```

### Schritt 4: Cloudflare Pages Einstellungen

In Cloudflare Pages → dein Projekt → Settings:

**Build & Development Settings:**
| Feld | Wert |
|------|------|
| Framework preset | `None` |
| Build command | `npx next build` |
| Build output directory | `out` |
| Root directory | `/` (leer lassen) |

**Environment Variables** (Settings → Environment Variables):
```
NEXT_PUBLIC_FIREBASE_API_KEY = dein-wert
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN = dein-wert
NEXT_PUBLIC_FIREBASE_PROJECT_ID = dein-wert
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET = dein-wert
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID = dein-wert
NEXT_PUBLIC_FIREBASE_APP_ID = dein-wert
NEXT_PUBLIC_WEB3FORMS_KEY = dein-wert
NODE_VERSION = 20
```

WICHTIG: Alle Variablen für "Production" environment setzen.

### Schritt 5: Redeploy

In Cloudflare Pages → Deployments → "Retry deployment" oder neuen Push auf GitHub machen.

## Lokal testen vor dem Deploy

```bash
# Build testen
npx next build

# Prüfen ob out/ Ordner erstellt wurde
ls out/
# Sollte enthalten: index.html, impressum/index.html, datenschutz/index.html, 404.html, sitemap.xml, robots.txt

# Lokalen Static Server starten zum Testen
npx serve out
```

Wenn `npx serve out` funktioniert und die Website lädt, wird sie auch auf Cloudflare Pages funktionieren.

## Was sich geändert hat

### next.config.ts
- `output: "standalone"` → `output: "export"` (statische HTML-Dateien)
- `images: { unoptimized: true }` hinzugefügt (braucht sonst Server)
- `eslint: { ignoreDuringBuilds: true }` hinzugefügt (Lint-Fehler blockieren nicht)

### package.json
- Build-Script vereinfacht: `"next build"` (kein cp-Kram mehr)
- Unnötige Dependencies entfernt (Prisma, next-auth, next-intl, etc.)
- Start-Script angepasst

### .nvmrc
- Neue Datei: stellt Node.js 20 für Cloudflare Pages sicher

### src/app/api/ (LÖSCHEN)
- API-Routen sind inkompatibel mit `output: "export"`
- Muss gelöscht werden, sonst Build-Fehler

## Häufige Probleme

**"Build failed" auf Cloudflare:**
- Prüfe ob `src/app/api/` wirklich gelöscht wurde
- Prüfe ob `NODE_VERSION=20` in Environment Variables steht

**"Page not found" trotz erfolgreichem Build:**
- Prüfe ob Build output directory `out` ist (nicht `.next`)
- Prüfe ob `out/index.html` existiert (lokal mit `npx next build` testen)

**Bilder laden nicht:**
- `images: { unoptimized: true }` muss in next.config.ts stehen

**Firebase funktioniert nicht:**
- Prüfe ob alle NEXT_PUBLIC_FIREBASE_* Variablen in Cloudflare gesetzt sind
- Prüfe ob die Domain in Firebase Console → Auth → Authorized domains steht

**Kontaktformular sendet nicht:**
- Prüfe ob NEXT_PUBLIC_WEB3FORMS_KEY gesetzt ist
