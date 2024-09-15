import nextIntl from 'next-intl/plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io'
      }
    ]
  }
};

const withNextIntl = nextIntl('./src/app/lib/i18n.ts');

export default withNextIntl(nextConfig);
