// next.config.mjs
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n.ts');  // pas pad aan als i18n.ts in src staat

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',  // alleen als je standalone nodig hebt (verwijder anders)
  // andere config...
};

export default withNextIntl(nextConfig);
