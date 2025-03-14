import type { NextConfig } from 'next';

const SETTINGS_URL = process.env.SETTINGS_URL || 'http://localhost:3002';

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/dashboard/settings',
        destination: `${SETTINGS_URL}/dashboard/settings`,
      },
    ];
  },
  sassOptions: {
    silenceDeprecations: ['legacy-js-api'],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

export default nextConfig;
