import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Remove "experimental.appDir" — no longer needed in modern Next.js
  reactStrictMode: true,
  swcMinify: true,
};

export default nextConfig;
