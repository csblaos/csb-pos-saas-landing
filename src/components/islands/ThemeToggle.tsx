import { useState, useEffect, useRef } from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';
import { type Theme, setTheme, getTheme } from '../../lib/theme';

export default function ThemeToggle() {
    const [theme, setCurrentTheme] = useState<Theme>('system');
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setCurrentTheme(getTheme());

        // Listen for storage changes in other tabs
        const handleStorage = () => setCurrentTheme(getTheme());
        window.addEventListener('storage', handleStorage);

        // Click outside listener
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            window.removeEventListener('storage', handleStorage);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleSelect = (t: Theme) => {
        setTheme(t);
        setCurrentTheme(t);
        setIsOpen(false);
    };

    const getIcon = () => {
        if (theme === 'light') return <Sun size={20} />;
        if (theme === 'dark') return <Moon size={20} />;
        return <Monitor size={20} />;
    };

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 border-2 border-[var(--color-border)] bg-[var(--color-bg-card)] shadow-[2px_2px_0px_0px_var(--color-shadow)] active:translate-y-[2px] active:shadow-none transition-all flex items-center justify-center rounded-md text-[var(--color-text)]"
                aria-label="Toggle Theme"
            >
                {getIcon()}
            </button>

            {isOpen && (
                <div className="absolute top-full right-0 mt-2 w-max min-w-[120px] flex flex-col bg-[var(--color-bg-card)] border-2 border-[var(--color-border)] shadow-[4px_4px_0px_0px_var(--color-shadow)] z-50 origin-top-right">
                    <button onClick={() => handleSelect('light')} className="p-2 flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-800 text-sm font-bold text-[var(--color-text)]">
                        <Sun size={16} /> Light
                    </button>
                    <button onClick={() => handleSelect('dark')} className="p-2 flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-800 text-sm font-bold text-[var(--color-text)]">
                        <Moon size={16} /> Dark
                    </button>
                    <button onClick={() => handleSelect('system')} className="p-2 flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-800 text-sm font-bold text-[var(--color-text)]">
                        <Monitor size={16} /> System
                    </button>
                </div>
            )}
        </div>
    );
}
