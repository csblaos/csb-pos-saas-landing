import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import { t } from '../../data/i18n';
import type { Lang } from '../../lib/lang';
import LanguageToggle from './LanguageToggle';

interface MobileMenuProps {
    lang: Lang;
}

function normalizePath(path: string) {
    if (!path) return '/';
    const normalized = path.replace(/\/+$/, '');
    return normalized || '/';
}

function isPathActive(currentPath: string, targetPath: string, exact = false) {
    const current = normalizePath(currentPath);
    const target = normalizePath(targetPath);

    if (exact) return current === target;
    return current === target || current.startsWith(`${target}/`);
}

export default function MobileMenu({ lang }: MobileMenuProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const menuItems = [
        { label: t('nav.home', lang), href: `/${lang}/` },
        { label: t('nav.packages', lang), href: `/${lang}/packages` },
        { label: t('nav.hardware', lang), href: `/${lang}/hardware` },
        { label: t('nav.solutions', lang), href: `/${lang}/solutions` },
        { label: t('nav.blog', lang), href: `/${lang}/blog` },
    ];

    const menuOverlay = (
        <div className="fixed inset-0 z-[200] bg-[var(--color-bg)] flex flex-col animate-fade-in text-[var(--color-text)] overflow-y-auto">
            {/* Header */}
            <div className="h-16 border-b-2 border-[var(--color-border)] flex items-center justify-between px-4 bg-[var(--color-bg-card)] shrink-0 sticky top-0 z-10">
                <span className="text-2xl font-black italic tracking-tighter flex items-center gap-2">
                    <div className="w-8 h-8 bg-lime-400 border-2 border-[var(--color-border)] shadow-[2px_2px_0px_0px_var(--color-shadow)]"></div>
                    Astro<span className="text-lime-600">POS</span>
                </span>
                <div className="flex items-center gap-3">
                    <LanguageToggle />
                    <button
                        onClick={() => setIsOpen(false)}
                        className="p-2 border-1 border-[var(--color-border)] bg-white text-black shadow-[2px_2px_0px_0px_black] active:translate-y-[1px] active:shadow-none transition-all"
                        aria-label="Close Menu"
                    >
                        <X size={20} />
                    </button>
                </div>
            </div>

            {/* Menu Items */}
            <nav className="flex-1 p-6 flex flex-col gap-4">
                <div className="flex flex-col gap-3">
                    {menuItems.map((item, index) => {
                        const isHome = normalizePath(item.href) === `/${lang}`;
                        const isActive = mounted && isPathActive(window.location.pathname, item.href, isHome);

                        return (
                            <a
                                key={index}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className={`group flex items-center justify-between p-3 text-lg font-semibold border-1 border-[var(--color-border)] shadow-[2px_2px_0px_0px_var(--color-shadow)] active:translate-y-[1px] active:shadow-[2px_2px_0px_0px_var(--color-shadow)] transition-all ${isActive
                                    ? 'bg-lime-400 text-black'
                                    : 'bg-[var(--color-bg-card)] hover:bg-lime-300 hover:text-black'
                                    }`}
                            >
                                {item.label}
                                <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                        );
                    })}
                </div>

                {/* Primary CTA: Demo */}
                <div className="mt-4 pt-4 border-t-2 border-black/5">
                    <a
                        href={`/${lang}/demo`}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center justify-center gap-3 p-3 text-lg font-semibold bg-white text-black border-1 border-black shadow-[2px_2px_0px_0px_black] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] active:scale-[0.98] transition-all uppercase tracking-tight"
                    >
                        ▶ {t('nav.demo', lang)}
                    </a>
                </div>
            </nav>

            {/* Footer Decoration */}
            <div className="p-4 text-center text-xs font-semibold border-t-2 border-[var(--color-border)] bg-[var(--color-bg-card)] shrink-0">
                © 2026 AstroPOS
            </div>
        </div>
    );

    return (
        <div className="md:hidden">
            {/* Hamburger Button */}
            <button
                onClick={() => setIsOpen(true)}
                className="p-2 border-1 border-[var(--color-border)] bg-[var(--color-bg-card)] shadow-[2px_2px_0px_0px_var(--color-shadow)] active:translate-y-[1px] active:shadow-none transition-all text-[var(--color-text)]"
                aria-label="Open Menu"
            >
                <Menu size={20} />
            </button>

            {/* Portal to Body */}
            {isOpen && mounted && createPortal(menuOverlay, document.body)}
        </div>
    );
}
