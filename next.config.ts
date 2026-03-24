import type { NextConfig } from "next";

const repo = "My-Portfolio"; // 👈 change this

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;