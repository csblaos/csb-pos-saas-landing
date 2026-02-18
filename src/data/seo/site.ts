import type { Lang } from '../../lib/lang';

export const seoSite = {
    name: 'AstroPOS',
    domain: 'https://www.codesabai.com',
    defaultImage: '/images/og/home.png',
    locales: {
        en: 'en_US',
        th: 'th_TH',
        la: 'lo_LA'
    } as Record<Lang, string>
} as const;
