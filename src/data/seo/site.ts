import type { Lang } from '../../lib/lang';
import { appConfig } from '../../config/app';

const locales = Object.fromEntries(
    Object.entries(appConfig.i18n.languages).map(([lang, value]) => [lang, value.locale])
) as Record<Lang, string>;

export const seoSite = {
    name: appConfig.site.name,
    domain: appConfig.site.domain,
    defaultImage: appConfig.site.defaultImage,
    locales
} as const;
