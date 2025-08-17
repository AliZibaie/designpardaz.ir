'use client';

import { useState, useEffect } from 'react';

import HeroSection from '../components/home/HeroSection';
import ServicesSection from '../components/home/ServicesSection';
import ProcessSection from '../components/home/ProcessSection';
import WhyChooseUsSection from '../components/home/WhyChooseUsSection';
import FAQSection from '../components/home/FAQSection';
import FinalCTASection from '../components/home/FinalCTASection';






export default function LandingPage() {

    const [visibleElements, setIsVisible] = useState<Set<string>>(new Set());

    // Intersection Observer for animations
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(prev => ({
                            ...prev,
                            [entry.target.id]: true
                        }));
                    }
                });
            },
            { threshold: 0.1 }
        );

        const elements = document.querySelectorAll('[data-animate]');
        elements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <>

            <div className="min-h-screen bg-white">

                {/* Hero Section */}
                <HeroSection />
                {/* Services Section */}
                <ServicesSection />
                {/* Process Section */}
                <ProcessSection />
                {/* Why Choose Us Section */}
                <WhyChooseUsSection />
                {/* FAQ Section */}
                <FAQSection />
                {/* Final CTA Section */}
                <FinalCTASection />
            </div>

            {/* Custom Styles */}
            <style jsx>{`
                @keyframes gradient-x {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
                
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    33% { transform: translateY(-10px) rotate(5deg); }
                    66% { transform: translateY(5px) rotate(-5deg); }
                }
                
                .animate-gradient-x {
                    background-size: 400% 400%;
                    animation: gradient-x 15s ease infinite;
                }
                
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
            `}</style>
        </>
    );
}
