import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static Export — erzeugt statische HTML-Dateien in /out
  // Cloudflare Pages hostet nur statische Dateien, kein Node.js Server
  output: "export",

  // Bilder nicht optimieren (braucht sonst einen Server)
  images: {
    unoptimized: true,
  },

  // TypeScript-Fehler blockieren nicht den Build
  typescript: {
    ignoreBuildErrors: true,
  },

  reactStrictMode: false,

  // Next.js Dev-Indikator deaktivieren
  devIndicators: false,
};

export default nextConfig;
