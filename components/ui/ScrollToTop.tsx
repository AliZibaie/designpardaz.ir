// components/ui/ScrollToTop.tsx
'use client';

import { useState, useEffect } from 'react';
import { ArrowUpIcon } from '@heroicons/react/24/outline';

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled up to given distance
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Set the top coordinate to 0
    // make scrolling smooth
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 left-8 z-50 p-3 bg-gradient-to-r from-blue-600 to-sky-600 text-white rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 group"
                    aria-label="بازگشت به بالای صفحه"
                    title="بازگشت به بالا"
                >
                    <ArrowUpIcon className="w-5 h-5 group-hover:animate-bounce" />
                </button>
            )}
        </>
    );
}
