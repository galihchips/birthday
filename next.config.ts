import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/birthday", // Change to your repo name
  images: {
    unoptimized: true, // Required for GitHub Pages
  },
};

export default nextConfig;
