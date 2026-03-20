# NetTV - Streaming TV Affiliate Platform

<p align="center">
  <img src="public/images/nettv-logo.svg" alt="NetTV Logo" width="200"/>
</p>

<p align="center">
  <strong>A modern, multilingual streaming TV affiliate website built with Next.js 16</strong>
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#installation">Installation</a> •
  <a href="#deployment">Deployment</a> •
  <a href="#affiliate-integration">Affiliate Integration</a>
</p>

---

## 🚀 Features

- **🌍 Multilingual Support** - Full i18n with English, Dutch, and Spanish locales
- **🎨 Modern UI/UX** - Clean, responsive design with Tailwind CSS v4
- **🌓 Dark/Light Mode** - Automatic theme switching with next-themes
- **⚡ Next.js 16** - Latest App Router with server components
- **📱 Fully Responsive** - Optimized for all devices
- **🔍 SEO Optimized** - Meta tags, Open Graph, structured data
- **♿ Accessibility** - WCAG 2.1 AA compliant
- **🎯 Affiliate Ready** - Pre-configured for affiliate link integration
- **📊 Analytics Ready** - Google Analytics 4 support
- **🖼️ Optimized Images** - Next.js Image component with WebP support

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| [Next.js](https://nextjs.org/) | 16.x | React framework with App Router |
| [React](https://react.dev/) | 19.x | UI library |
| [TypeScript](https://www.typescriptlang.org/) | 5.x | Type safety |
| [Tailwind CSS](https://tailwindcss.com/) | 4.x | Utility-first CSS |
| [next-intl](https://next-intl-docs.vercel.app/) | 3.x | Internationalization |
| [next-themes](https://github.com/pacocoursey/next-themes) | 0.x | Theme management |
| [Lucide React](https://lucide.dev/) | Latest | Icon library |

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 18.17.0 or later (recommended: 20.x LTS)
- **npm** 9.x or later, or **yarn** 1.22.x or later, or **pnpm** 8.x or later

Verify your installation:

```bash
node --version  # Should be v18.17.0 or higher
npm --version   # Should be 9.x or higher
```

---

## 📦 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/nettv.git
cd nettv
```

### 2. Install Dependencies

Using npm:
```bash
npm install
```

Using yarn:
```bash
yarn install
```

Using pnpm:
```bash
pnpm install
```

### 3. Configure Environment Variables

Copy the example environment file and configure your settings:

```bash
cp .env.local.example .env.local
```

Edit `.env.local` with your configuration:

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://your-domain.com

# Analytics (Optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Affiliate Configuration (Add your IDs)
# NEXT_PUBLIC_AFFILIATE_ID=your_affiliate_id
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🌐 Language Testing Guide

This project supports three languages with automatic locale detection:

### Available Locales

| Locale | Language | URL Path |
|--------|----------|----------|
| `en` | English (Default) | `/` or `/en/` |
| `nl` | Dutch | `/nl/` |
| `es` | Spanish | `/es/` |

### Testing Different Languages

#### Method 1: URL Navigation

Simply navigate to the locale-specific URLs:

```
http://localhost:3000/        # English (default)
http://localhost:3000/en/     # English
http://localhost:3000/nl/     # Dutch
http://localhost:3000/es/     # Spanish
```

#### Method 2: Language Switcher

Use the language switcher in the header/footer to switch between languages. The switcher:
- Detects current locale
- Updates URL path
- Persists language preference
- Updates all translated content

#### Method 3: Browser Language Detection

The site automatically detects the user's browser language on first visit:
- Dutch browsers → `/nl/`
- Spanish browsers → `/es/`
- All others → `/en/` (default)

### Adding New Languages

To add a new language (e.g., French):

1. **Create message file:**
   ```bash
   mkdir -p messages
   touch messages/fr.json
   ```

2. **Copy and translate content from `messages/en.json`**

3. **Update configuration in `src/i18n/config.ts`:**
   ```typescript
   export const locales = ['en', 'nl', 'es', 'fr'] as const;
   ```

4. **Add locale metadata in `src/i18n/routing.ts`**

5. **Update middleware matcher in `src/middleware.ts`**

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

#### Option 1: Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel --prod
   ```

#### Option 2: Git Integration

1. Push your code to GitHub/GitLab/Bitbucket
2. Import project in [Vercel Dashboard](https://vercel.com/dashboard)
3. Configure build settings:
   - **Framework Preset:** Next.js
   - **Build Command:** `next build`
   - **Output Directory:** `.next`
4. Add environment variables from `.env.local`
5. Deploy!

#### Hobby Tier Configuration

For Vercel Hobby (free) tier:

```json
// vercel.json
{
  "functions": {
    "src/app/**/*.tsx": {
      "maxDuration": 10
    }
  }
}
```

### Custom Domain Setup

1. Go to Vercel Dashboard → Your Project → Settings → Domains
2. Add your custom domain
3. Configure DNS records as instructed
4. Enable HTTPS (automatic on Vercel)

### Environment Variables on Vercel

Add these in Vercel Dashboard → Settings → Environment Variables:

| Variable | Value | Environment |
|----------|-------|-------------|
| `NEXT_PUBLIC_SITE_URL` | `https://your-domain.com` | Production |
| `NEXT_PUBLIC_GA_ID` | `G-XXXXXXXXXX` | Production |

---

## 💰 Affiliate Integration Guide

This project is pre-configured for easy affiliate link integration.

### Adding Affiliate Links

#### Method 1: Direct Link Replacement

Update streaming service data in `src/data/streaming-services.ts`:

```typescript
export const streamingServices = [
  {
    id: 'netflix',
    name: 'Netflix',
    affiliateUrl: 'https://www.netflix.com/your-affiliate-code',
    // ... other properties
  },
];
```

#### Method 2: Environment-Based URLs

For dynamic affiliate URLs, use environment variables:

```env
# .env.local
NEXT_PUBLIC_NETFLIX_AFFILIATE=https://www.netflix.com/your-code
NEXT_PUBLIC_DISNEY_AFFILIATE=https://www.disneyplus.com/your-code
```

Then in your components:

```typescript
const affiliateUrl = process.env.NEXT_PUBLIC_NETFLIX_AFFILIATE;
```

#### Method 3: Affiliate Network Integration

For networks like Impact, CJ Affiliate, or Awin:

1. Install the affiliate network's SDK (if available)
2. Create a utility function in `src/lib/affiliate.ts`:

```typescript
export function generateAffiliateUrl(
  serviceId: string,
  baseUrl: string
): string {
  const affiliateId = process.env.NEXT_PUBLIC_AFFILIATE_ID;
  return `${baseUrl}?ref=${affiliateId}&sub=${serviceId}`;
}
```

### Tracking Conversions

Add conversion tracking in `src/lib/analytics.ts`:

```typescript
export function trackAffiliateClick(serviceId: string) {
  // Google Analytics event
  gtag('event', 'affiliate_click', {
    service_id: serviceId,
    value: 1,
  });
  
  // Affiliate network tracking
  // Add your tracking code here
}
```

### Best Practices

1. **Disclose affiliate relationships** - Add disclosure in footer
2. **Use `rel="nofollow sponsored"`** on affiliate links
3. **Test all links** before going live
4. **Monitor performance** with analytics

---

## 📁 File Structure

```
nettv/
├── .next/                    # Next.js build output (auto-generated)
├── messages/                 # Translation files
│   ├── en.json              # English translations
│   ├── nl.json              # Dutch translations
│   └── es.json              # Spanish translations
├── public/                   # Static assets
│   ├── images/              # Image assets
│   │   ├── streaming-services/  # Service logos
│   │   └── hero/            # Hero images
│   └── favicon.ico
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── [locale]/        # Localized routes
│   │   │   ├── layout.tsx   # Root layout with providers
│   │   │   ├── page.tsx     # Home page
│   │   │   ├── about/
│   │   │   │   └── page.tsx
│   │   │   ├── compare/
│   │   │   │   └── page.tsx
│   │   │   ├── contact/
│   │   │   │   └── page.tsx
│   │   │   ├── guides/
│   │   │   │   └── page.tsx
│   │   │   └── services/
│   │   │       └── page.tsx
│   │   ├── api/             # API routes
│   │   ├── globals.css      # Global styles
│   │   └── sitemap.ts       # Dynamic sitemap
│   ├── components/          # React components
│   │   ├── ui/              # UI components (buttons, cards, etc.)
│   │   ├── layout/          # Layout components (header, footer)
│   │   ├── sections/        # Page sections (hero, features)
│   │   └── providers/       # Context providers
│   ├── data/                # Static data
│   │   ├── streaming-services.ts
│   │   └── navigation.ts
│   ├── hooks/               # Custom React hooks
│   ├── i18n/                # Internationalization config
│   │   ├── config.ts
│   │   └── routing.ts
│   ├── lib/                 # Utility functions
│   │   └── utils.ts
│   ├── types/               # TypeScript types
│   │   └── index.ts
│   └── middleware.ts        # Next.js middleware for i18n
├── .env.local               # Environment variables (git-ignored)
├── .env.local.example       # Environment template
├── .gitignore               # Git ignore rules
├── CHANGELOG.md             # Version history
├── CONTRIBUTING.md          # Contribution guidelines
├── LICENSE                  # MIT License
├── next.config.ts           # Next.js configuration
├── package.json             # Dependencies
├── postcss.config.mjs       # PostCSS configuration
├── README.md                # This file
├── tailwind.config.ts       # Tailwind CSS configuration
└── tsconfig.json            # TypeScript configuration
```

---

## 🔧 Environment Variables

### Required Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `NEXT_PUBLIC_SITE_URL` | Production site URL | `https://nettv.com` |

### Optional Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 ID | `G-XXXXXXXXXX` |
| `NEXT_PUBLIC_AFFILIATE_ID` | Default affiliate ID | `aff_12345` |

### Development Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `NEXT_TELEMETRY_DISABLED` | Disable Next.js telemetry | `1` |

---

## 🔍 SEO Features

This project includes comprehensive SEO optimization:

### Implemented Features

- ✅ Dynamic meta tags for each page
- ✅ Open Graph tags for social sharing
- ✅ Twitter Card support
- ✅ Structured data (JSON-LD)
- ✅ Canonical URLs
- ✅ XML sitemap generation
- ✅ robots.txt configuration
- ✅ Hreflang tags for multilingual content
- ✅ Semantic HTML structure

### SEO Configuration

Update default SEO settings in `src/app/[locale]/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: {
    default: 'NetTV - Compare Streaming Services',
    template: '%s | NetTV',
  },
  description: 'Compare streaming TV services and find the best option...',
  // ... more settings
};
```

---

## ⚡ Performance Optimizations

### Built-in Optimizations

- **Image Optimization** - Next.js Image component with automatic WebP conversion
- **Font Optimization** - next/font for optimized font loading
- **Code Splitting** - Automatic route-based code splitting
- **Prefetching** - Automatic link prefetching
- **Static Generation** - Static pages where possible
- **CDN Ready** - Optimized for edge deployment

### Performance Targets

| Metric | Target |
|--------|--------|
| First Contentful Paint | < 1.5s |
| Largest Contentful Paint | < 2.5s |
| Time to Interactive | < 3.5s |
| Cumulative Layout Shift | < 0.1 |

### Lighthouse Score Goals

- Performance: 90+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

---

## 🧪 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with Turbopack |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Fix ESLint errors |
| `npm run type-check` | Run TypeScript compiler |
| `npm run analyze` | Analyze bundle size |

---

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

### Quick Start for Contributors

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see [LICENSE](LICENSE) for details.

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS
- [Vercel](https://vercel.com/) for hosting and deployment
- [Lucide](https://lucide.dev/) for the beautiful icons

---

## 📞 Support

For support, email support@nettv.com or join our Discord community.

---

<p align="center">
  Built with ❤️ using Next.js 16
</p>
