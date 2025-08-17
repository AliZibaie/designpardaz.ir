'use client';

import { useState, useEffect } from 'react';
import {
    PhoneIcon,
    EnvelopeIcon,
    ClockIcon,
    CheckCircleIcon,
    HeartIcon,
    ShieldCheckIcon,
} from '@heroicons/react/24/outline';

import HeroSection from '../components/home/HeroSection';
import ServicesSection from '../components/home/ServicesSection';
import ProcessSection from '../components/home/ProcessSection';
import WhyChooseUsSection from '../components/home/WhyChooseUsSection';
import FAQSection from '../components/home/FAQSection';

// Company Data for SEO
const companyData = {
    name: 'دیزاین پرداز',
    slogan: 'طراحی وب حرفه‌ای',
    description: 'دیزاین پرداز با بیش از ۸ سال تجربه، رهبر طراحی وب و سئو در ایران. ما کسب‌وکارها را در فضای دیجیتال پیروز می‌کنیم.',
    phone: '021-3333-4444',
    email: 'info@designpardaz.ir',
    address: 'تهران، ایران',
    stats: {
        projects: '250+',
        clients: '180+',
        experience: '8+',
        satisfaction: '98%'
    }
};





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
                <section className="py-20 bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 text-white overflow-hidden relative">

                    {/* Background Effects */}
                    <div className="absolute inset-0">
                        <div className="absolute inset-0 bg-black/20"></div>
                        {[...Array(30)].map((_, i) => (
                            <div
                                key={i}
                                className="absolute animate-float"
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                    animationDelay: `${Math.random() * 5}s`,
                                    animationDuration: `${4 + Math.random() * 4}s`
                                }}
                            >
                                <div className="w-2 h-2 bg-white/30 rounded-full blur-sm"></div>
                            </div>
                        ))}
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="text-center max-w-4xl mx-auto">

                            {/* Main Headline */}
                            <h2 className="text-4xl lg:text-6xl font-black mb-6 leading-tight">
                                آماده شروع
                                <span className="block text-yellow-300">بهترین پروژه خودتان</span>
                                هستید؟
                            </h2>

                            <p className="text-xl lg:text-2xl text-orange-100 mb-8 leading-relaxed">
                                همین الان با ما تماس بگیرید و
                                <strong className="text-yellow-300"> مشاوره رایگان </strong>
                                دریافت کنید.
                                <br className="hidden lg:block" />
                                پروژه شما را به بهترین شکل ممکن اجرا می‌کنیم!
                            </p>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                                <a
                                    href={`tel:${companyData.phone}`}
                                    className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-orange-600 font-black text-lg rounded-2xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl"
                                >
                                    <PhoneIcon className="w-6 h-6 group-hover:animate-bounce" />
                                    <span>۰۲۱-۳۳۳۳-۴۴۴۴</span>
                                    <span className="text-sm font-normal text-gray-500">تماس آنی</span>
                                </a>

                                <a
                                    href={`mailto:${companyData.email}`}
                                    className="group inline-flex items-center gap-3 px-10 py-5 border-2 border-white text-white font-black text-lg rounded-2xl hover:bg-white hover:text-orange-600 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
                                >
                                    <EnvelopeIcon className="w-6 h-6 group-hover:animate-pulse" />
                                    <span>ارسال ایمیل</span>
                                </a>
                            </div>

                            {/* Trust Indicators */}
                            <div className="flex flex-wrap justify-center items-center gap-8 text-orange-100">
                                <div className="flex items-center gap-2">
                                    <CheckCircleIcon className="w-5 h-5 text-green-300" />
                                    <span>مشاوره رایگان</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <ShieldCheckIcon className="w-5 h-5 text-blue-300" />
                                    <span>گارانتی کیفیت</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <ClockIcon className="w-5 h-5 text-yellow-300" />
                                    <span>پاسخگویی فوری</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <HeartIcon className="w-5 h-5 text-pink-300 fill-current" />
                                    <span>رضایت ۱۰۰%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
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
