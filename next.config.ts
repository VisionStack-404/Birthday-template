import type { NextConfig } from "next";



const isGitHubPages = process.env.GITHUB_ACTIONS === "true" && process.env.VERCEL !== "1";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  output: isGitHubPages ? "export" : undefined,
  images: {
    unoptimized: true,
  },
  basePath: isGitHubPages ? "/Birthday" : "",
  assetPrefix: isGitHubPages ? "/Birthday/" : "",
  allowedDevOrigins: [
    "10.165.23.136",
    "10.165.23.136:3000",
    "172.26.64.1",
    "172.26.64.1:3000",
    "localhost",
    "localhost:3000",
  ],
};

export default nextConfig;
