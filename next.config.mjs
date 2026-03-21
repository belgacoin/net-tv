import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    outputStandalone: true,
  },
  export default {
  output: 'standalone',  // dit vervangt experimental.outputStandalone
  // andere opties hier...
};
export default withNextIntl(nextConfig);
