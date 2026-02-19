import { appConfig } from '../config/app';

// Define supported languages config
export const languages = appConfig.i18n.languages;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = appConfig.i18n.defaultLang;

export function getLangFromUrl(url: URL): Lang {
    const [, lang] = url.pathname.split('/');
    if (lang in languages) return lang as Lang;
    return defaultLang;
}

export function getLangFromLocalStorage(): Lang {
    if (typeof localStorage !== 'undefined') {
        try {
            const stored = localStorage.getItem('lang');
            if (stored && Object.keys(languages).includes(stored)) {
                return stored as Lang;
            }
        } catch {
            // Storage can be unavailable in strict privacy modes.
        }
    }
    return defaultLang;
}

export function setLang(lang: Lang) {
    if (typeof localStorage !== 'undefined') {
        try {
            localStorage.setItem('lang', lang);
        } catch {
            // Continue navigation even if storage is blocked.
        }
    }

    const currentUrl = new URL(window.location.href);
    const hasTrailingSlash = currentUrl.pathname.endsWith('/');

    // Keep any non-language prefix segment (for deployments under subpaths)
    // and replace the existing language segment wherever it appears.
    const pathSegments = currentUrl.pathname.split('/').filter(Boolean);
    const langIndex = pathSegments.findIndex((segment) => segment in languages);

    if (langIndex >= 0) {
        pathSegments[langIndex] = lang;
    } else {
        pathSegments.unshift(lang);
    }

    // Construct new path
    let newPath = '/' + pathSegments.join('/');
    if (hasTrailingSlash && !newPath.endsWith('/')) {
        newPath += '/';
    }

    const targetPathWithQuery = newPath + currentUrl.search;
    const targetUrl = targetPathWithQuery + currentUrl.hash;

    if (typeof sessionStorage !== 'undefined') {
        try {
            const doc = document.documentElement;
            const maxScrollable = Math.max(0, doc.scrollHeight - window.innerHeight);
            const ratio = maxScrollable > 0 ? window.scrollY / maxScrollable : 0;

            sessionStorage.setItem('__lang_scroll_restore__', JSON.stringify({
                toPath: targetPathWithQuery,
                y: window.scrollY,
                ratio,
                ts: Date.now()
            }));
        } catch {
            // Ignore if sessionStorage is blocked.
        }
    }

    // Navigate to new path and preserve query params/hash
    window.location.assign(targetUrl);
}

export function useTranslatedPath(lang: Lang) {
    return function translatePath(path: string, l: Lang = lang) {
        return `/${l}${path.startsWith('/') ? path : '/' + path}`;
    }
}
