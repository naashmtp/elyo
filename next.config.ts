import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,

  // Allow dev server access from external IP
  allowedDevOrigins: ['62.72.16.150'],

  // Suppress hydration warnings from browser extensions
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

export default nextConfig;
