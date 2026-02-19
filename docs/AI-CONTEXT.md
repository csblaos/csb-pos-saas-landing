# AI Context Handoff

อัปเดตล่าสุด: 2026-02-19

เอกสารนี้ทำมาเพื่อให้ AI ตัวถัดไปหรือทีมใหม่เข้ามาต่อโปรเจกต์ได้เร็ว โดยไม่ต้องไล่โค้ดทั้งระบบก่อน

## 1) โปรเจกต์นี้คืออะไร

- เว็บไซต์ Landing + Content ของ AstroPOS
- เน้น SSG (Astro) + React islands เฉพาะส่วนที่ต้อง interactive
- รองรับ 3 ภาษา: `en`, `th`, `la`
- มีระบบ Blog, Sidebar Ads, SEO กลาง, Theme config กลาง

## 2) คำสั่งพื้นฐาน

```bash
npm install
npm run dev
npm run build
npm run preview
```

ถ้าจะส่งงาน ให้รันอย่างน้อย `npm run build` ทุกครั้ง

## 3) โครงสร้างที่ต้องรู้ก่อนแก้

- `src/pages/[lang]/index.astro`: หน้า Landing หลัก
- `src/pages/[lang]/packages.astro`: หน้าราคา + เทียบแพ็กเกจ
- `src/components/islands/PricingSelect.tsx`: logic ราคา/ทดลองใช้/เปิด WhatsApp
- `src/pages/[lang]/blog/index.astro`: Blog หน้าแรก
- `src/pages/[lang]/blog/page/[page].astro`: Pagination ของ blog
- `src/pages/[lang]/blog/[slug].astro`: หน้า detail บทความ
- `src/components/sections/SidebarAdCard.astro`: ระบบโฆษณา sidebar
- `src/config/blog.ts`: จำนวนโพสต์ต่อหน้า (pagination setting)
- `src/layouts/Base.astro`: meta SEO ทั้งไซต์
- `src/lib/seo.ts` + `src/data/seo/*`: preset SEO กลาง
- `src/config/app.ts`: site/domain + language source
- `src/config/theme.ts`: theme token กลาง (เปลี่ยนสีหลักที่นี่)
- `src/config/pricing.ts`: pricing/trial policy กลาง (เปลี่ยนราคา + จำนวนวัน trial + เดือนรายปีที่นี่)
- `src/config/ads.ts`: ads behavior กลาง (count + weight + storage key)
- `src/data/i18n.ts` + `src/data/localizedCopy.ts`: ข้อความหลายภาษา

## 4) สถานะ Business Rules ปัจจุบัน

- Free trial policy: อ่านค่าจาก `src/config/pricing.ts` (`pricingConfig.trial.*`)
- Yearly bonus policy: อ่านค่าจาก `src/config/pricing.ts` (`pricingConfig.yearly.*`)
- Blog per page: อ่านค่าจาก `src/config/blog.ts` (`blogConfig.postsPerPage`)
- Blog sidebar ads count/weight/storage: อ่านค่าจาก `src/config/ads.ts` (`adsConfig.sidebar.*`)

## 5) การเพิ่มคอนเทนต์แบบเร็ว

Blog:

- เทมเพลต: `docs/templates/blog-post-template.md`
- วางไฟล์จริงที่: `src/content/news/<slug>.md`
- ฟิลด์สำคัญ: `title`, `description`, `pubDate`, `author`, `tags`, `image`

Ads sidebar:

- เทมเพลต: `src/content/ads/_template.md`
- วางไฟล์จริงที่: `src/content/ads/<slug>.md`
- ต้องตั้ง `active: true` และ `placements: [blog-sidebar]`
- ตั้ง tier ผ่าน `normal` / `premium` / `platinum`
- รองรับ `displayMode: card | image-only`

คู่มือเพิ่ม:

- `docs/blog-publishing-guide.md`
- `docs/ads-publishing-guide.md`
- `docs/README.md`

## 6) SEO ที่มีแล้ว

- มี canonical, hreflang, x-default, OG, Twitter ใน `Base.astro`
- มี sitemap ผ่าน Astro integration (`astro.config.mjs`)
- มี `public/robots.txt`
- หน้า blog detail ใช้ `ogType="article"`
- มี dynamic OG image route สำหรับ hardware (`src/pages/open-graph/[...route].ts`)

## 7) จุดที่แก้บ่อยและควรระวัง

- หน้า Landing มี animation HOW IT WORKS อยู่ใน `src/pages/[lang]/index.astro`
- อย่าเปลี่ยนชื่อฟิลด์ content collection โดยไม่อัปเดต `src/content/config.ts`
- Ads schema ใช้ `displayMode` (ไม่ใช่ `layout`)
- ถ้าแก้ระบบภาษา ให้เช็กทั้ง `i18n.ts`, `localizedCopy.ts`, `lib/lang.ts`, และ SEO locales

## 8) Technical Debt / งานที่ควรเก็บ

- มี `any` อยู่ในบางจุดของ blog components (`BlogIndexContent.astro`) ควรเปลี่ยนเป็น type จริง
- Blog post ยังไม่มี JSON-LD แบบ `BlogPosting` ต่อบทความ
- OG image ยังไม่ normalize เป็นขนาดเดียวกันทุกหน้า
- ยังไม่มี test suite อัตโนมัติ (ใช้ build check เป็นหลัก)

## 9) Workflow แนะนำเวลา AI ตัวถัดไปเข้ามา

1. รัน `npm run build` ก่อน เพื่อเช็ก baseline
2. อ่านเอกสารนี้ + `README.md` + docs ที่เกี่ยวข้อง
3. ระบุไฟล์ปลายทางให้ชัดก่อนแก้
4. แก้เฉพาะส่วนที่เกี่ยวข้องกับ task
5. รัน `npm run build` อีกครั้ง
6. สรุปผลพร้อม path ที่แก้และเหตุผล

## 10) Definition of Done (ขั้นต่ำก่อนส่ง)

- Build ผ่าน
- ไม่มี error console จาก logic ใหม่ที่เพิ่ม
- ถ้าแก้ UI: เช็ก desktop + mobile
- ถ้าแก้ blog/ads: เช็ก route ทั้ง list + detail
- ถ้าแก้ i18n/SEO: เช็กอย่างน้อย `en`, `th`, `la` อย่างละ 1 หน้า
