// Define supported languages config
export const languages = {
    en: { label: 'English', flag: '🇺🇸' },
    th: { label: 'ไทย', flag: '🇹🇭' },
    la: { label: 'ລາວ', flag: '🇱🇦' }
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'th';

export function getLangFromUrl(url: URL): Lang {
    const [, lang] = url.pathname.split('/');
    if (lang in languages) return lang as Lang;
    return defaultLang;
}

export function getLangFromLocalStorage(): Lang {
    if (typeof localStorage !== 'undefined') {
        const stored = localStorage.getItem('lang');
        if (stored && Object.keys(languages).includes(stored)) {
            return stored as Lang;
        }
    }
    return defaultLang;
}

export function setLang(lang: Lang) {
    if (typeof localStorage !== 'undefined') {
        localStorage.setItem('lang', lang);
    }

    const currentUrl = new URL(window.location.href);
    const hasTrailingSlash = currentUrl.pathname.endsWith('/');

    // Get current path segments
    const pathSegments = currentUrl.pathname.split('/').filter(Boolean);

    // Check if first segment is a language code
    if (pathSegments[0] && pathSegments[0] in languages) {
        // Replace the language segment
        pathSegments[0] = lang;
    } else {
        // No language in path, prepend it
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
        const doc = document.documentElement;
        const maxScrollable = Math.max(0, doc.scrollHeight - window.innerHeight);
        const ratio = maxScrollable > 0 ? window.scrollY / maxScrollable : 0;

        sessionStorage.setItem('__lang_scroll_restore__', JSON.stringify({
            toPath: targetPathWithQuery,
            y: window.scrollY,
            ratio,
            ts: Date.now()
        }));
    }

    // Navigate to new path and preserve query params/hash
    window.location.href = targetUrl;
}

export function useTranslatedPath(lang: Lang) {
    return function translatePath(path: string, l: Lang = lang) {
        return `/${l}${path.startsWith('/') ? path : '/' + path}`;
    }
}
