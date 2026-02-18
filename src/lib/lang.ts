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

    // Get current path segments
    const pathSegments = window.location.pathname.split('/').filter(Boolean);

    // Check if first segment is a language code
    if (pathSegments[0] && pathSegments[0] in languages) {
        // Replace the language segment
        pathSegments[0] = lang;
    } else {
        // No language in path, prepend it
        pathSegments.unshift(lang);
    }

    // Construct new path
    const newPath = '/' + pathSegments.join('/');

    // Navigate to new path (only preserve hash, not query params)
    window.location.href = newPath + window.location.hash;
}

export function useTranslatedPath(lang: Lang) {
    return function translatePath(path: string, l: Lang = lang) {
        return `/${l}${path.startsWith('/') ? path : '/' + path}`;
    }
}
