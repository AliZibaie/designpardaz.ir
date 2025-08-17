'use client';

import { useState, useEffect } from 'react';
import {
    ArrowRightIcon,
    ChevronDownIcon,
    PhoneIcon,
    EnvelopeIcon,
    ClockIcon,
    CheckCircleIcon,
    HeartIcon,
    ShieldCheckIcon,
    ChatBubbleLeftRightIcon,
} from '@heroicons/react/24/outline';

import HeroSection from '../components/home/HeroSection';
import ServicesSection from '../components/home/ServicesSection';
import ProcessSection from '../components/home/ProcessSection';
import WhyChooseUsSection from '../components/home/WhyChooseUsSection';

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


// FAQ Data
const faqs = [
    {
        question: 'چقدر طول می‌کشد تا سایتم آماده شود؟',
        answer: 'زمان تحویل بسته به پیچیدگی پروژه بین ۷ تا ۳۰ روز کاری متغیر است. پس از بررسی نیازهای شما، زمان دقیق اعلام می‌شود.'
    },
    {
        question: 'آیا پس از تحویل سایت پشتیبانی ارائه می‌دهید؟',
        answer: 'بله، ۶ ماه پشتیبانی رایگان و آموزش کامل کار با سایت ارائه می‌دهیم. پس از آن نیز پشتیبانی با تعرفه مناسب ادامه دارد.'
    },
    {
        question: 'هزینه طراحی سایت چقدر است؟',
        answer: 'هزینه بسته به نوع سایت، تعداد صفحات و امکانات مورد نیاز متفاوت است. برای دریافت قیمت دقیق با ما تماس بگیرید.'
    },
    {
        question: 'آیا سایت‌هایتان برای موبایل بهینه هستند؟',
        answer: 'کاملاً! تمام سایت‌هایی که طراحی می‌کنیم کاملاً ریسپانسیو بوده و روی تمام دستگاه‌ها عالی کار می‌کنند.'
    }
];



export default function LandingPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

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
                <section className="py-20 bg-gradient-to-br from-gray-900 to-slate-900 text-white" data-animate>
                    <div className="container mx-auto px-4">

                        {/* Section Header */}
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/20 text-orange-300 rounded-full text-sm font-medium mb-4">
                                <ChatBubbleLeftRightIcon className="w-4 h-4" />
                                <span>سوالات متداول</span>
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-black mb-6">
                                سوالاتی که
                                <span className="text-transparent bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text"> شما دارید</span>
                            </h2>
                            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                                پاسخ سوالات رایج درباره خدمات طراحی وب و سئو
                            </p>
                        </div>

                        {/* FAQ Items */}
                        <div className="max-w-4xl mx-auto space-y-4">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:bg-white/20 transition-all duration-300"
                                >
                                    <button
                                        className="w-full p-6 text-right flex items-center justify-between hover:bg-white/5 transition-colors"
                                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                    >
                                        <span className="text-lg font-bold">{faq.question}</span>
                                        <ChevronDownIcon
                                            className={`w-6 h-6 text-orange-400 transition-transform duration-300 ${
                                                openFaq === index ? 'rotate-180' : ''
                                            }`}
                                        />
                                    </button>

                                    {openFaq === index && (
                                        <div className="px-6 pb-6">
                                            <div className="border-t border-white/10 pt-4">
                                                <p className="text-gray-300 leading-relaxed">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Contact CTA */}
                        <div className="text-center mt-12">
                            <p className="text-gray-300 mb-6">سوال دیگری دارید؟</p>
                            <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold rounded-xl hover:from-orange-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-2xl">
                                <PhoneIcon className="w-5 h-5" />
                                تماس مستقیم با ما
                            </button>
                        </div>
                    </div>
                </section>

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
