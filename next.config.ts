import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",           // Static export for cPanel deployment
  trailingSlash: true,        // Needed for static hosting compatibility
  images: {
    unoptimized: true,        // Required for static export (no Image Optimization API)
  },
  // NOTE: experimental features from scaffolding removed — not needed for static export
};

export default nextConfig;
