# Config Center Guide

ใช้โฟลเดอร์ `src/config/` เป็นจุดรวมคอนฟิกหลักของโปรเจกต์

## Config map

- `src/config/app.ts`
  - site info: `name`, `domain`, `defaultImage`
  - i18n source: `defaultLang`, `languages`, `locale`
- `src/config/theme.ts`
  - theme color tokens (`accent`, `secondary`)
- `src/config/pricing.ts`
  - trial days / trial plans / yearly bonus policy / base prices
- `src/config/blog.ts`
  - blog pagination config (`postsPerPage`)
- `src/config/ads.ts`
  - blog sidebar ads config (placement, count, weights, storage key)
- `src/config/index.ts`
  - re-export รวมทั้งหมด

## Change theme

1. แก้ `src/config/theme.ts`
2. build ตรวจผล:

```bash
npm run build
```

## Change pricing/trial policy

แก้ที่ `src/config/pricing.ts`:

- `pricingConfig.trial.days`
- `pricingConfig.trial.planIds`
- `pricingConfig.yearly.payMonths`
- `pricingConfig.yearly.getMonths`
- `pricingConfig.plans.*`

## Change blog page size

แก้ที่ `src/config/blog.ts`:

- `blogConfig.postsPerPage`

## Change blog sidebar ads behavior

แก้ที่ `src/config/ads.ts`:

- `adsConfig.sidebar.listPageCount`
- `adsConfig.sidebar.detailPageCount`
- `adsConfig.sidebar.weights`
- `adsConfig.sidebar.storageKey`
