import React, { useState } from 'react';
import { Copy, Check, Facebook, Twitter, MessageCircle } from 'lucide-react';

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
            color: 'hover:text-blue-600'
        },
        {
            name: 'Line',
            icon: MessageCircle, // Lucide doesn't have Line icon, reusing MessageCircle or customized
            href: `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(url)}`,
            color: 'hover:text-green-500'
        },
        {
            name: 'Twitter', // X
            icon: Twitter,
            href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
            color: 'hover:text-black'
        }
    ];

    return (
        <div className="flex flex-col gap-4 p-6 bg-gray-50 border-2 border-dashed border-black/20 rounded-lg mt-8">
            <h3 className="font-bold uppercase text-sm text-gray-500">{translations.share}</h3>

            <div className="flex items-center gap-4 flex-wrap">
                {/* Copy Link Button */}
                <button
                    onClick={handleCopy}
                    className="flex items-center gap-2 px-4 py-2 bg-white border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-y-[1px] active:shadow-none transition-all font-bold text-sm hover:bg-gray-50 min-w-[140px] justify-center"
                >
                    {copied ? <Check size={16} className="text-lime-600" /> : <Copy size={16} />}
                    {copied ? translations.copied : translations.copy}
                </button>

                <div className="w-px h-8 bg-black/10 mx-2"></div>

                {/* Social Icons */}
                <div className="flex gap-4">
                    {shareLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`p-2 bg-white border-2 border-transparent hover:border-black rounded-full transition-all ${link.color}`}
                            aria-label={`Share on ${link.name}`}
                        >
                            <link.icon size={20} />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
