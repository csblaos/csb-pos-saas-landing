import React, { useState } from 'react';
import { Copy, Check, Facebook, MessageCircle } from 'lucide-react';

interface ProductShareProps {
    url: string;
    title: string;
    translations: {
        share: string;
        copy: string;
        copied: string;
    };
}

export default function ProductShare({ url, title, translations }: ProductShareProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(url);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy!', err);
        }
    };

    const shareLinks = [
        {
            name: 'Facebook',
            icon: Facebook,
            href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
            className: 'bg-[#1877F2] text-white border-[#0F4DA8] hover:bg-[#1366D6]'
        },
        {
            name: 'Line',
            icon: MessageCircle, // Lucide doesn't have Line icon, reusing MessageCircle or customized
            href: `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(url)}`,
            className: 'bg-[#06C755] text-white border-[#059444] hover:bg-[#05B14C]'
        },
        {
            name: 'WhatsApp',
            icon: MessageCircle,
            href: `https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`,
            className: 'bg-[#25D366] text-white border-[#1EAE56] hover:bg-[#22BF5D]'
        }
    ];

    return (
        <div className="mt-8 p-6 bg-[var(--color-bg-card)] border-1 border-[var(--color-border)] shadow-[2px_2px_0px_0px_var(--color-shadow)]">
            <h3 className="font-black uppercase text-sm text-[var(--color-text)] tracking-wide mb-4">{translations.share}</h3>

            <div className="grid sm:grid-cols-[auto_1fr] gap-3 items-stretch">
                <button
                    onClick={handleCopy}
                    className="flex items-center justify-center gap-2 px-5 py-3 bg-white text-black border-1 border-black shadow-[2px_2px_0px_0px_black] hover:translate-x-[2px] hover:translate-y-[2px] transition-all font-black text-sm uppercase min-w-[170px]"
                >
                    {copied ? <Check size={16} className="text-lime-600" /> : <Copy size={16} />}
                    {copied ? translations.copied : translations.copy}
                </button>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {shareLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center justify-center gap-2 px-4 py-3 border-1 shadow-[2px_2px_0px_0px_black] hover:translate-x-[2px] hover:translate-y-[2px] transition-all font-black text-sm uppercase ${link.className}`}
                            aria-label={`Share on ${link.name}`}
                        >
                            <link.icon size={16} />
                            <span>{link.name}</span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
