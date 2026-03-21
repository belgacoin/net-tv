// next.config.mjs
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n.ts'); // pas aan als file anders heet/ligt

/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'standalone', // verwijder als je het niet nodig hebt (Vercel host prima zonder)
  // andere opties als je die hebt...
};

export default withNextIntl(nextConfig);
