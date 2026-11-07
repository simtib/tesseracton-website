import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    // Only local assets are allowed; add explicit remotePatterns when needed.
    remotePatterns: [],
  },
};

export default nextConfig;
