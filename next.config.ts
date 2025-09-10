import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Remove turbopack for better static file handling
  // turbopack: {
  //   root: __dirname,
  // },

  // Comment out static export to enable server functionality for map
  // output: 'export',
  // trailingSlash: true,

  // Image optimization settings
  images: {
    unoptimized: true, // Keep this for compatibility
  },
};

export default nextConfig;
