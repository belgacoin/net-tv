import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    outputStandalone: true,
  },
  output: "export", // ensures compatibility with dynamic routes in Vercel
  generateBuildId: async () => {
    return 'custom-build-id' // Example: ensure unique builds
  }
};

export default withNextIntl(nextConfig);