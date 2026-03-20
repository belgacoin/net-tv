# SEO Configuration for NetTV Compare

This directory contains comprehensive SEO components and configuration for the Next.js 16 Streaming TV Affiliate Website.

## Files Overview

### 1. `lib/seo.ts`
Core SEO utilities and helpers including:
- Locale configuration (en, nl, es)
- Site configuration
- H1-H3 headings per language and page
- Metadata templates per locale
- `generateMetadata()` - Main metadata generation function
- `generateOpenGraph()` - Open Graph tag generation
- `generateTwitterCard()` - Twitter Card generation
- `generateHreflangLinks()` - hreflang link generation
- `getHeadings()` - Get heading content for pages
- `generateBreadcrumbData()` - Breadcrumb structured data
- `generateFAQData()` - FAQ structured data

### 2. `lib/metadata.ts`
Default metadata configuration including:
- Viewport configuration
- Title templates per locale
- Description templates per locale
- Keywords per locale
- `generateBaseMetadata()` - Base metadata generator
- `generatePageMetadata()` - Page-specific metadata
- `generateBlogPostMetadata()` - Blog post metadata
- `generateNewsArticleMetadata()` - News article metadata
- `generateComparisonMetadata()` - Comparison page metadata
- `generateHardwareMetadata()` - Hardware page metadata

### 3. `components/JsonLd.tsx`
JSON-LD structured data components:
- `WebsiteStructuredData` - Website schema
- `OrganizationStructuredData` - Organization schema
- `ComparisonTableStructuredData` - Product comparison schema
- `ProductStructuredData` - Individual product schema
- `ArticleStructuredData` - Article schema
- `BlogPostingStructuredData` - Blog post schema
- `NewsArticleStructuredData` - News article schema
- `BreadcrumbListStructuredData` - Breadcrumb schema
- `FAQPageStructuredData` - FAQ schema
- `HowToStructuredData` - How-to guide schema
- `ReviewStructuredData` - Review schema
- `SoftwareApplicationStructuredData` - App schema
- `AggregateRatingStructuredData` - Rating schema

### 4. `components/OpenGraph.tsx`
Open Graph and meta tag components:
- `OpenGraphTags` - Open Graph meta tags
- `TwitterCardTags` - Twitter Card meta tags
- `CanonicalAndAlternateLinks` - Canonical and hreflang links
- `MetaTags` - Combined meta tags
- `PageHead` - Complete head component

### 5. `app/sitemap.ts`
Dynamic sitemap generation:
- Static pages (home, compare, hardware, blog, news, about, contact, affiliate-disclosure)
- Comparison pages
- Hardware pages
- Blog posts (fetched from CMS)
- News articles (fetched from CMS)
- Multi-locale support
- Proper priority and changefreq

### 6. `app/robots.ts`
Robots.txt configuration:
- User-agent specific rules
- Crawl-delay for major bots
- Allow/Disallow paths
- Sitemap references
- Environment-specific configurations

### 7. `app/[locale]/layout.tsx`
Locale layout with SEO implementation:
- Metadata generation
- JSON-LD structured data injection
- Preconnect and DNS prefetch
- Accessibility features
- next-intl integration

### 8. `app/[locale]/page.tsx`
Home page example with full SEO:
- Metadata generation
- Multiple JSON-LD components
- Semantic HTML with proper headings
- Accessible markup
- Comparison table with structured data

## Usage Examples

### Basic Page Metadata

```tsx
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';

export async function generateMetadata({ params: { locale } }) {
  return generateSEOMetadata(locale, 'compare', undefined, '/compare');
}
```

### Blog Post Metadata

```tsx
import { generateBlogPostMetadata } from '@/lib/seo';

export async function generateMetadata({ params: { locale, slug } }) {
  const post = await getBlogPost(slug, locale);
  return generateBlogPostMetadata(locale, post);
}
```

### Using JSON-LD Components

```tsx
import { 
  ComparisonTableStructuredData,
  FAQPageStructuredData 
} from '@/components/JsonLd';

export default function Page() {
  return (
    <>
      <ComparisonTableStructuredData
        name="Streaming Services"
        description="Compare top streaming services"
        items={comparisonItems}
        locale={locale}
      />
      <FAQPageStructuredData faqs={faqs} />
      {/* Page content */}
    </>
  );
}
```

### Using Headings

```tsx
import { getHeadings } from '@/lib/seo';

export default function Page({ params: { locale } }) {
  const headings = getHeadings(locale, 'home');
  
  return (
    <>
      <h1>{headings.h1}</h1>
      <h2>{headings.h2}</h2>
      {headings.h3?.map((h3, i) => <h3 key={i}>{h3}</h3>)}
    </>
  );
}
```

## Environment Variables

Add these to your `.env.local`:

```env
# Site Verification
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your_google_code
NEXT_PUBLIC_BING_VERIFICATION=your_bing_code
NEXT_PUBLIC_YANDEX_VERIFICATION=your_yandex_code
NEXT_PUBLIC_FACEBOOK_DOMAIN_VERIFICATION=your_facebook_code
NEXT_PUBLIC_PINTEREST_VERIFICATION=your_pinterest_code

# Site URL
NEXT_PUBLIC_SITE_URL=https://nettv-compare.com
```

## Supported Locales

- `en` - English (default)
- `nl` - Dutch
- `es` - Spanish

## SEO Checklist

- [x] Meta titles and descriptions per locale
- [x] Open Graph tags (og:title, og:description, og:image, og:url, og:locale)
- [x] Twitter Card tags
- [x] hreflang links for all locales
- [x] Canonical URLs
- [x] JSON-LD structured data
- [x] Sitemap generation
- [x] Robots.txt configuration
- [x] H1-H3 headings per language
- [x] Alt texts in correct language
- [x] Semantic HTML
- [x] Accessibility features

## Best Practices

1. **Always use the generateMetadata function** for page metadata
2. **Include JSON-LD components** for rich snippets in search results
3. **Use getHeadings()** for consistent H1-H3 structure
4. **Add alt texts** to all images with proper localization
5. **Test with Google Rich Results Test** after implementation
6. **Submit sitemaps** to Google Search Console and Bing Webmaster Tools
