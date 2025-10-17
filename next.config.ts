import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    appDir: true,   // force App Router
  },
  // don’t set basePath or trailingSlash here unless you mean to
};

export default nextConfig;
