import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Remove turbopack for better static file handling
  // turbopack: {
  //   root: __dirname,
  // },

  // Ensure public directory files are copied
  output: 'export',
  trailingSlash: true,

  // Image optimization settings
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;
