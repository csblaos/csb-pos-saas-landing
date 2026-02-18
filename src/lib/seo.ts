import { seoPages, type SeoPageKey } from '../data/seo/pages';
import { seoSite } from '../data/seo/site';
import { defaultLang, languages, type Lang } from './lang';

type OgType = 'website' | 'article';

export interface ResolveSeoInput {
    lang: Lang;
    pathname: string;
    pageKey?: SeoPageKey;
    title?: string;
    description?: string;
    image?: string;
    noindex?: boolean;
    ogType?: OgType;
}

export interface ResolvedSeo {
    title: string;
    description: string;
    image: string;
    canonical: string;
    alternates: Array<{ hreflang: string; href: string }>;
    xDefault: string;
    robots: string;
    locale: string;
    siteName: string;
    ogType: OgType;
}

function normalizePathname(pathname: string): string {
    if (!pathname) return '/';
    const hasTrailingSlash = pathname.endsWith('/');
    const clean = pathname.replace(/\/+/g, '/').replace(/\/+$/, '');
    if (!clean) return '/';
    return hasTrailingSlash ? `${clean}/` : clean;
}

function absoluteUrl(pathname: string): string {
    return new URL(pathname, seoSite.domain).toString();
}

function withLangPath(pathname: string, lang: Lang): string {
    const safePath = normalizePathname(pathname);
    const hasTrailingSlash = safePath.endsWith('/');
    const segments = safePath.split('/').filter(Boolean);

    if (segments[0] && segments[0] in languages) {
        segments[0] = lang;
    } else {
        segments.unshift(lang);
    }

    let output = `/${segments.join('/')}`;
    if (hasTrailingSlash && !output.endsWith('/')) output += '/';
    return output;
}

export function resolveSeo(input: ResolveSeoInput): ResolvedSeo {
    const pagePreset = input.pageKey ? seoPages[input.pageKey][input.lang] : undefined;
    const fallback = seoPages.home[input.lang];
    const canonicalPath = normalizePathname(input.pathname);
    const langKeys = Object.keys(languages) as Lang[];

    const title = input.title ?? pagePreset?.title ?? fallback.title;
    const description = input.description ?? pagePreset?.description ?? fallback.description;
    const image = input.image ?? pagePreset?.image ?? seoSite.defaultImage;

    const alternates = langKeys.map((langKey) => ({
        hreflang: langKey,
        href: absoluteUrl(withLangPath(canonicalPath, langKey))
    }));

    return {
        title,
        description,
        image,
        canonical: absoluteUrl(canonicalPath),
        alternates,
        xDefault: absoluteUrl(withLangPath(canonicalPath, defaultLang)),
        robots: input.noindex ? 'noindex, nofollow' : 'index, follow',
        locale: seoSite.locales[input.lang] ?? seoSite.locales[defaultLang],
        siteName: seoSite.name,
        ogType: input.ogType ?? 'website'
    };
}

export function buildDefaultSchemas(lang: Lang) {
    return [
        {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: seoSite.name,
            url: seoSite.domain
        },
        {
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: seoSite.name,
            url: seoSite.domain,
            inLanguage: lang
        }
    ];
}
