import { useState, useEffect } from 'react';
import { type Lang, setLang, getLangFromLocalStorage, languages } from '../../lib/lang';

export default function LanguageToggle() {
    const [currentLang, setCurrentLang] = useState<Lang>('th');
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // With path-based routing, we can get the lang from the URL accurately in the strict sense?
        // Actually, `window.location.pathname` is better
        const pathSegments = window.location.pathname.split('/');
        const langInPath = pathSegments[1] as Lang; // /en/...

        if (langInPath && langInPath in languages) {
            setCurrentLang(langInPath);
        } else {
            // Fallback for verification
            setCurrentLang(getLangFromLocalStorage());
        }
    }, []);

    const handleSelect = (l: Lang) => {
        // setLang now handles the redirect to new path
        setLang(l);
        setCurrentLang(l);
        setIsOpen(false);
    };

    return (
        <div className="relative z-50">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="px-3 py-2 font-bold border-2 border-[var(--color-border)] bg-[var(--color-bg-card)] text-[var(--color-text)] shadow-[2px_2px_0px_0px_var(--color-shadow)] active:translate-y-[2px] active:shadow-none transition-all flex items-center gap-2 rounded-md"
            >
                <span>{languages[currentLang]?.flag || languages['th'].flag} {languages[currentLang]?.label?.slice(0, 3).toUpperCase() || 'TH'}</span>
            </button>

            {isOpen && (
                <div className="absolute top-full right-0 mt-2 w-32 flex flex-col bg-[var(--color-bg-card)] border-2 border-[var(--color-border)] shadow-[4px_4px_0px_0px_var(--color-shadow)]">
                    {Object.entries(languages).map(([code, config]) => (
                        <button
                            key={code}
                            onClick={() => handleSelect(code as Lang)}
                            className="p-2 text-left hover:bg-gray-100 dark:hover:bg-gray-800 text-sm font-bold border-b border-[var(--color-border)] last:border-0 text-[var(--color-text)] flex items-center gap-2"
                        >
                            <span>{config.flag}</span>
                            <span>{config.label}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
