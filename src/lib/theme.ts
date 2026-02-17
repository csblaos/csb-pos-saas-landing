export type Theme = 'light' | 'dark' | 'system';

export function getTheme(): Theme {
    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
        return localStorage.getItem('theme') as Theme;
    }
    return 'system';
}

export function setTheme(theme: Theme) {
    if (theme === 'system') {
        localStorage.removeItem('theme');
    } else {
        localStorage.setItem('theme', theme);
    }
    applyTheme();
}

export function applyTheme() {
    // 1. Get user preference (or system default)
    const storedTheme = getTheme(); // 'light' | 'dark' | 'system'

    // 2. Check system preference
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // 3. Determine if we should show dark mode
    let isDark = false;

    if (storedTheme === 'dark') {
        isDark = true;
    } else if (storedTheme === 'light') {
        isDark = false;
    } else {
        // system
        isDark = systemPrefersDark;
    }

    // 4. Apply to DOM
    if (isDark) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
}
