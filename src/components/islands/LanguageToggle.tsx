import { useState, useEffect, useRef } from 'react';
import { type Lang, setLang, getLangFromLocalStorage, languages } from '../../lib/lang';
import { Globe } from 'lucide-react';

export default function LanguageToggle() {
    const [currentLang, setCurrentLang] = useState<Lang>('th');
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const pathSegments = window.location.pathname.split('/');
        const langInPath = pathSegments[1] as Lang;

        if (langInPath && langInPath in languages) {
            setCurrentLang(langInPath);
        } else {
            setCurrentLang(getLangFromLocalStorage());
        }

        // Click outside listener
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleSelect = (l: Lang) => {
        setLang(l);
        setCurrentLang(l);
        setIsOpen(false);
    };

    // Preload the target language page on hover for faster navigation
    const handleHover = (lang: Lang) => {
        const pathSegments = window.location.pathname.split('/').filter(Boolean);
        if (pathSegments[0] && pathSegments[0] in languages) {
            pathSegments[0] = lang;
        } else {
            pathSegments.unshift(lang);
        }
        const targetPath = '/' + pathSegments.join('/');

        // Create a link element to preload the page
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = targetPath;
        document.head.appendChild(link);
    };

    return (
        <div className="relative z-50" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="px-3 py-2 font-bold border-2 border-[var(--color-border)] bg-[var(--color-bg-card)] text-[var(--color-text)] shadow-[2px_2px_0px_0px_var(--color-shadow)] active:translate-y-[2px] active:shadow-none transition-all flex items-center gap-2 rounded-md"
            >
                <Globe size={20} />
                <span>{languages[currentLang]?.label?.slice(0, 3).toUpperCase() || 'TH'}</span>
            </button>

            {isOpen && (
                <div className="absolute top-full right-0 mt-2 w-max min-w-[120px] flex flex-col bg-[var(--color-bg-card)] border-2 border-[var(--color-border)] shadow-[4px_4px_0px_0px_var(--color-shadow)] origin-top-right">
                    {Object.entries(languages).map(([code, config]) => (
                        <button
                            key={code}
                            onClick={() => handleSelect(code as Lang)}
                            onMouseEnter={() => handleHover(code as Lang)}
                            className="p-2 text-left hover:bg-gray-100 dark:hover:bg-gray-800 text-sm font-bold border-b border-[var(--color-border)] last:border-0 text-[var(--color-text)] flex items-center gap-2 transition-colors"
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
