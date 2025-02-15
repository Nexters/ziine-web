import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  env: {
    API_URL: process.env.API_URL,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: [
      'user-images.githubusercontent.com',
      'ziine.me',
      'i.namu.wiki',
      'encrypted-tbn0.gstatic.com',
      'monthlyart.com',
      'slownews.kr',
      'www.sakyejul.net',
    ],
  },
};

export default nextConfig;
