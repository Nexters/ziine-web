import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  env: {
    API_URL: process.env.API_URL,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: ['user-images.githubusercontent.com'],
  },
};

export default nextConfig;
