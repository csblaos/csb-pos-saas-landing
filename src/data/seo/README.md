# SEO Center

This folder is the single source of truth for page-level SEO defaults.

## Files

- `site.ts`
  - Global SEO settings: domain, default image, locale map.
- `pages.ts`
  - Localized SEO presets by page key (`home`, `packages`, `hardware`, etc.).
- `../../lib/seo.ts`
  - Runtime resolver used by `Base.astro` to build canonical, hreflang, OG, Twitter, and robots meta.

## How it works

1. A page passes `seoKey` to `Base`.
2. `Base` calls `resolveSeo(...)`.
3. `resolveSeo` merges:
   - page preset from `pages.ts`
   - optional per-page overrides (`title`, `description`, `image`, `noindex`, `ogType`)
4. `Base` renders all SEO tags automatically.

## Usage

Basic page (use defaults from `pages.ts`):

```astro
<Base seoKey="packages">
```

Dynamic page with overrides:

```astro
<Base
  seoKey="blog"
  title={postTitle}
  description={postDescription}
  image={postImage}
  ogType="article"
>
```

Noindex page:

```astro
<Base seoKey="demo" noindex={true}>
```

## Add a new page preset

1. Add a new key to `SeoPageKey` in `pages.ts`.
2. Add `en`, `th`, and `la` entries for that key.
3. Use that key in the page:

```astro
<Base seoKey="yourNewKey">
```

## Notes

- Keep image paths as public-root paths (for example: `/images/og/home.png`).
- Keep `site.ts` domain in sync with production domain.
- If no `seoKey` is passed, resolver falls back to `home` preset.
