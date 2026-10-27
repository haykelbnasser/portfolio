import type { NextConfig } from "next";

// When deployed on GitHub Pages as https://<user>.github.io/<repo>/,
// basePath and assetPrefix need to match the repo name.
const isGithubActions = process.env.GITHUB_ACTIONS || false;
const repo = "portfolio";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGithubActions ? `/${repo}` : "",
  assetPrefix: isGithubActions ? `/${repo}/` : undefined,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
