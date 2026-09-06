import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // The site has no server-side routes or persistence. Exporting it as plain
  // files keeps the same React experience while making production deploys
  // compatible with conventional static hosting such as KingHost.
  output: 'export',
  images: {
    // Static hosts do not provide Next's on-demand /_next/image endpoint.
    unoptimized: true,
  },
};

export default nextConfig;
