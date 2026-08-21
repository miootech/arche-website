# arche. — Apex + Tools Update

## Geänderte Dateien (überschreiben):

- `src/lib/site-config.ts` — HAN → Apex Dienstleister GmbH, projects Array aktualisiert, neues `tools` Array (3 Tools)
- `src/components/sections/work.tsx` — Apex statt HAN, iframe statt Bild (Live-Vorschau)
- `src/components/arche/app.tsx` — ToolsSection eingebunden (zwischen Services und CTA Banner)

## Neue Datei:

- `src/components/sections/tools.tsx` — Neue "Kostenlose Tools" Sektion mit 3 Cards

## Was neu ist

### 1. Apex Dienstleister GmbH (statt HAN)
- Case Study zeigt jetzt Apex Dienstleister GmbH
- Statt Before/After Bild: **Live iframe** der echten Website (https://handienstleister.pages.dev/)
- Loading State mit Spinner
- Error Fallback mit "In neuem Tab öffnen" Link
- "Live" Badge oben links (grün, pulsierend)
- "Echtes Projekt" Badge oben rechts (lila)
- "Vollbild" Button unten rechts (öffnet in neuem Tab)
- Sandbox iframe (sicher): allow-scripts allow-same-origin allow-forms allow-popups

### 2. Kostenlose Tools Sektion
- Position: zwischen Services und CTA Banner
- 3 Cards in Grid (2 Mobile, 3 Desktop)
- Pro Card: Icon, Badge (z.B. "Linktree Ersatz"), Name, Beschreibung, "Kostenlos · Keine Anmeldung" Hint, ↗ Icon
- Hover: Lift, lila Gradient, Icon wird lila
- Footer-Hinweis: "Alle Tools laufen direkt im Browser"

### 3. Tools konfigurieren (site-config.ts)
Trage in `src/lib/site-config.ts` die echten URLs deiner Tools ein:

```ts
tools: [
  { id: "links", name: "arche. Links", url: "https://links.arche.studio", ... },
  { id: "remove-bg", name: "Background Remover", url: "https://bg.arche.studio", ... },
  { id: "pdf-tools", name: "PDF Tools", url: "https://pdf.arche.studio", ... },
]
```

Aktuell sind Platzhalter-URLs eingetragen — ersetze sie durch deine echten Tool-URLs.

## Drag & Drop Merge

1. ZIP entpacken
2. Im File Explorer: alle Ordner (src/) in dein bestehendes Projekt ziehen
3. Bestehende Dateien überschreiben lassen
4. Server neu starten: `bun run dev`
