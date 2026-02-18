# AstroPOS Landing

Static marketing website for AstroPOS, built with Astro + React islands.

## What this project includes

- Multi-language routes: `en`, `th`, `la`
- Pricing/package lead form with WhatsApp CTA flow
- Hardware catalog and product detail pages
- Blog (Astro content collections)
- Dynamic Open Graph image route for hardware products
- Centralized SEO system (canonical, hreflang, OG/Twitter, robots, JSON-LD)

## Stack

- Astro (SSG)
- React (islands)
- Tailwind CSS v4
- Lucide React
- astro-og-canvas
- Astro sitemap integration

## Quick start

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Build production output:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Scripts

- `npm run dev` - start local dev server
- `npm run build` - generate static site in `dist/`
- `npm run preview` - preview built site

## Project structure

- `src/pages/` - route pages
- `src/layouts/Base.astro` - global layout and SEO rendering
- `src/components/sections/` - Astro sections
- `src/components/islands/` - interactive React components
- `src/data/i18n.ts` - key/value translation strings
- `src/data/localizedCopy.ts` - structured localized content
- `src/data/seo/` - centralized SEO presets and config
- `src/lib/lang.ts` - language routing helpers
- `src/lib/seo.ts` - SEO resolver and schema helpers
- `src/content/news/` - blog content
- `public/` - static assets, fonts, robots, OG images

## SEO system

SEO is centralized and managed in one place:

- `src/data/seo/site.ts` - domain, default image, locale map
- `src/data/seo/pages.ts` - per-page localized SEO defaults
- `src/lib/seo.ts` - resolves final SEO metadata for each page

`Base.astro` auto-renders:

- `title`, `description`
- `canonical`
- `alternate hreflang` + `x-default`
- Open Graph and Twitter tags
- `robots`
- default JSON-LD (`Organization`, `WebSite`)

Read full guide: `src/data/seo/README.md`

## i18n system

There are two translation layers:

- `src/data/i18n.ts` via `t(key, lang)`
- `src/data/localizedCopy.ts` via `fromLang(...)`

Read full guide for adding a new language: `src/data/i18n.README.md`

## Open Graph images

Dynamic OG route:

- `src/pages/open-graph/[...route].ts`

Used for hardware product share images. Font files are loaded from `public/fonts/`.

## Deployment

This site is fully static. Deploy `dist/` to any static host.

Recommended settings:

- Build command: `npm run build`
- Output directory: `dist`

Works well on Cloudflare Pages, Vercel, Netlify, and similar platforms.
