// Define supported languages config
export const languages = {
    en: { label: 'English', flag: '🇺🇸' },
    th: { label: 'ไทย', flag: '🇹🇭' },
    la: { label: 'ລາວ', flag: '🇱🇦' }
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'th';

export function getLangFromUrl(url: URL): Lang {
    const langParam = url.searchParams.get('lang');
    if (langParam && Object.keys(languages).includes(langParam)) {
        return langParam as Lang;
    }
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
    // Reload with new query param
    const url = new URL(window.location.href);
    url.searchParams.set('lang', lang);
    window.location.href = url.toString();
}
