# Content Ops README

Use this folder for repeatable publishing workflows.

## New Blog Post

1. Copy template:

```bash
cp docs/templates/blog-post-template.md src/content/news/your-slug-name.md
```

2. Follow guide:

- `docs/blog-publishing-guide.md`

## New Ads Campaign

1. Copy template:

```bash
cp docs/templates/ad-campaign-template.md docs/ads/your-campaign-name.md
```

2. Follow guide:

- `docs/ads-publishing-guide.md`

## New Sidebar Ad (Auto Display on Blog)

1. Copy template:

```bash
cp src/content/ads/_template.md src/content/ads/2026-03-your-sidebar-ad.md
```

2. Set `active: true` and `placements: [blog-sidebar]`
3. Set `tier` as `normal`, `premium`, or `platinum` for display priority
4. Set `displayMode`, `type`, `style`, and `bannerImage` for visual variant

Sample ready-to-use ad:

- `docs/ads/2026-02-facebook-messages-all-packages-trial.md`
- `docs/ads/2026-02-facebook-cafe-grand-opening.md`
- `src/content/ads/2026-03-seasonal-hot-sale.md`
- `src/content/ads/2026-03-case-study-cod-drop.md`

## Templates

- `docs/templates/blog-post-template.md`
- `docs/templates/ad-campaign-template.md`
- `src/content/ads/_template.md`
