/**
 * arche. — Demo-Daten
 *
 * Hinweis: Diese Datei enthielt früher Demo-Reviews für den Demo-Modus.
 * Der Demo-Modus wurde entfernt — die Website zeigt jetzt einen sauberen
 * Empty State, wenn noch keine echten Reviews vorhanden sind.
 *
 * Für lokale Entwicklung ohne Firebase:
 *   - Reviews sind leer (Empty State wird angezeigt)
 *   - Auth funktioniert nicht (Hinweis wird angezeigt)
 *
 * Für Produktion: Firebase konfigurieren (siehe .env.example)
 */

import type { Review } from "./types";

// Leeres Array — kein Demo-Content mehr
export const demoReviews: Review[] = [];
