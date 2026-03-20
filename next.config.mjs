import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export configuration
  output: 'export',
  distDir: 'dist',
  
  // Image optimization for static export
  images: {
    unoptimized: true,
  },

  // Internationalization settings
  i18n: {
    locales: ['en', 'nl', 'es'],
    defaultLocale: 'en',
    localeDetection: true,
  },

  // Trailing slashes for better SEO
  trailingSlash: true,

  // Experimental features for Next.js 16
  experimental: {
    // Enable optimized package imports
    optimizePackageImports: ['next-intl', 'next-themes'],
  },

  // Headers for security and performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
};

export default withNextIntl(nextConfig);
