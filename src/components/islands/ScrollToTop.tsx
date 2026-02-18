import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    // Toggle visibility based on scroll position
    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Scroll to top smooth
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <button
            onClick={scrollToTop}
            className={`
        fixed bottom-8 right-8 z-50 p-3
        bg-brand-primary text-black border-2 border-black
        shadow-[4px_4px_0px_0px_black]
        hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_black]
        active:translate-y-0 active:shadow-[2px_2px_0px_0px_black]
        transition-all duration-300
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}
      `}
            aria-label="Scroll to top"
        >
            <ArrowUp size={24} strokeWidth={3} />
        </button>
    );
}
