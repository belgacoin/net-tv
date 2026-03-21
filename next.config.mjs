// next.config.mjs
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n.ts');  // pas pad aan als nodig, bijv. './src/i18n.ts'

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',  // als je dit nodig hebt; verwijder anders
  // andere config...
};

export default withNextIntl(nextConfig);
