import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import { t } from '../../data/i18n';
import type { Lang } from '../../lib/lang';

interface MobileMenuProps {
    lang: Lang;
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
        { label: t('nav.demo', lang), href: `/${lang}/demo` },
    ];

    const menuOverlay = (
        <div className="fixed inset-0 z-[200] bg-[var(--color-bg)] flex flex-col animate-fade-in text-[var(--color-text)] overflow-y-auto">
            {/* Header */}
            <div className="h-16 border-b-2 border-[var(--color-border)] flex items-center justify-between px-4 bg-[var(--color-bg-card)] shrink-0 sticky top-0 z-10">
                <span className="text-xl font-black italic tracking-tighter flex items-center gap-2">
                    <div className="w-6 h-6 bg-lime-400 border-2 border-[var(--color-border)] shadow-[2px_2px_0px_0px_var(--color-shadow)]"></div>
                    Astro<span className="text-lime-600">POS</span>
                </span>
                <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 border-2 border-[var(--color-border)] bg-pink-400 text-black shadow-[2px_2px_0px_0px_black] active:translate-y-[1px] active:shadow-none transition-all"
                    aria-label="Close Menu"
                >
                    <X size={24} />
                </button>
            </div>

            {/* Menu Items */}
            <nav className="flex-1 p-6 flex flex-col gap-4">
                {menuItems.map((item, index) => {
                    const isActive = mounted && (window.location.pathname === item.href || (item.href !== `/${lang}/` && window.location.pathname.startsWith(item.href)));

                    return (
                        <a
                            key={index}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className={`group flex items-center justify-between p-4 text-2xl font-black border-2 border-[var(--color-border)] shadow-[4px_4px_0px_0px_var(--color-shadow)] active:translate-y-[1px] active:shadow-[2px_2px_0px_0px_var(--color-shadow)] transition-all ${isActive
                                ? 'bg-lime-400 text-black'
                                : 'bg-[var(--color-bg-card)] hover:bg-lime-300 hover:text-black'
                                }`}
                        >
                            {item.label}
                            <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                    );
                })}

                {/* Theme Actions */}
                <div className="mt-8 border-t-2 border-[var(--color-border)] pt-8">
                    <p className="font-bold mb-4 uppercase text-sm text-gray-500">Settings</p>
                    <div className="absolute bottom-0 left-0 right-0 p-8 border-t-2 border-black/10 bg-gray-50 flex items-center justify-between">
                        <div className="text-xs font-bold opacity-40 uppercase tracking-widest">AstroPOS Mobile</div>
                    </div>
                </div>
            </nav>

            {/* Footer Decoration */}
            <div className="p-4 text-center text-xs font-bold border-t-2 border-[var(--color-border)] bg-[var(--color-bg-card)] shrink-0">
                © 2026 AstroPOS
            </div>
        </div>
    );

    return (
        <div className="md:hidden">
            {/* Hamburger Button */}
            <button
                onClick={() => setIsOpen(true)}
                className="p-2 border-2 border-[var(--color-border)] bg-[var(--color-bg-card)] shadow-[2px_2px_0px_0px_var(--color-shadow)] active:translate-y-[1px] active:shadow-none transition-all text-[var(--color-text)]"
                aria-label="Open Menu"
            >
                <Menu size={24} />
            </button>

            {/* Portal to Body */}
            {isOpen && mounted && createPortal(menuOverlay, document.body)}
        </div>
    );
}
