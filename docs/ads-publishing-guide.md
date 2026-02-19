# Ads Publishing Guide

This is the easiest workflow to create and launch a new ad campaign with consistent quality.

Important:

- `docs/ads/*.md` = campaign planning documents (internal use)
- `src/content/ads/*.md` = ads that auto-render on website sidebar

## 1) Copy the ads template

Run:

```bash
cp docs/templates/ad-campaign-template.md docs/ads/your-campaign-name.md
```

Example:

```bash
cp docs/templates/ad-campaign-template.md docs/ads/2026-02-starter-trial-leads.md
```

## 2) Fill required campaign fields

Required:

- campaign name
- objective
- audience
- budget
- date range
- destination URL

Recommended:

- 2 primary text variations
- 2 headline variations
- clear offer with deadline

## 3) Prepare creatives

Minimum set:

- 1 square image (1:1)
- 1 vertical creative (4:5 or 9:16)

Checklist:

- text readable on mobile
- product value visible in first 1-2 seconds (for video)
- CTA appears clearly

## 4) Add UTM tracking

Use a consistent format, for example:

- `utm_source=facebook`
- `utm_medium=paid-social`
- `utm_campaign=starter-trial-feb`
- `utm_content=creative-a`

## 5) Launch and evaluate

Launch with a small test budget first, then review:

- CTR
- cost per lead/message
- landing conversion

Decision rule:

- keep top 20% creative
- pause weak creative fast
- reallocate budget weekly

## 6) Auto display ad on blog sidebar

If you want an ad to auto show in blog sidebar:

1. Copy template:

```bash
cp src/content/ads/_template.md src/content/ads/2026-03-your-sidebar-ad.md
```

2. Edit frontmatter fields:

- `pubDate`
- `active` (`true` to show)
- `tier` (`normal` / `premium` / `platinum`)
- `displayMode` (`card` / `image-only`)
- `type` (`promo` / `feature` / `demo` / `seasonal` / `case-study`)
- `style` (`neo-dark` / `neo-light` / `neo-gradient` / `neo-blue`)
- `placements` (must include `blog-sidebar`)
- `ctaUrl` (supports `{lang}` placeholder)
- `bannerImage` (for banner image card, example: `/images/og/og-packages.png`)
- `content.en/th/la`

For image-only external banner:

- set `displayMode: image-only`
- set `bannerImage`
- set full external URL in `ctaUrl` (example `https://yourpartner.com/...`)

In image-only mode, sidebar shows only image. Clicking image opens the target link.

3. Build and verify:

```bash
npm run build
```

The system auto-randomizes ads on each refresh from active `blog-sidebar` ads using weighted priority:

- `normal`: weight 1
- `premium`: weight 3
- `platinum`: weight 6

So higher tiers appear more often while still rotating.
