import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  devIndicators: false,
  experimental: {
    serverActions: {
      allowedOrigins: ["192.168.2.121:3000", "localhost:3000"],
    },
  },
};

export default nextConfig;