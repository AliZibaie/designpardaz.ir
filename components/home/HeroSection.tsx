'use client';
import React, { useState, useEffect } from 'react';
import {
    ArrowRightIcon,
    ChevronDownIcon,
    ClockIcon,
    PlayCircleIcon,
    RocketLaunchIcon,
    ShieldCheckIcon,
    StarIcon,
    BoltIcon,
    PaintBrushIcon,
    ComputerDesktopIcon,
    CodeBracketIcon,
    EyeIcon,
    LightBulbIcon,
    MagnifyingGlassIcon
} from "@heroicons/react/24/outline";

const companyData = {
    name: 'دیزاین پرداز',
    slogan: 'طراحی بصری و برنامه‌نویسی نوین',
    description: 'دیزاین پرداز با رویکرد خلاقانه و تکنولوژی‌های روز، خدمات طراحی گرافیک، طراحی سایت، طراحی رابط کاربری، برنامه‌نویسی انواع سامانه‌های وب و سئو حرفه‌ای را ارائه می‌دهد. ما با تیمی جوان و متخصص، کسب‌وکارها را در دنیای دیجیتال متحول می‌کنیم.',
    phone: '021-3333-4444',
    email: 'info@designpardaz.ir',
    address: 'تهران، ایران',
    services: {
        webDesign: 'طراحی سایت',
        graphicDesign: 'طراحی گرافیک',
        uiDesign: 'طراحی رابط کاربری',
        programming: 'برنامه‌نویسی',
        seoService: 'خدمات سئو'
    }
};

// Pre-defined positions to avoid hydration mismatch
const particlePositions = [
    { left: '10%', top: '20%', delay: '0s' },
    { left: '80%', top: '10%', delay: '0.5s' },
    { left: '15%', top: '60%', delay: '1s' },
    { left: '90%', top: '70%', delay: '1.5s' },
    { left: '40%', top: '30%', delay: '0.3s' },
    { left: '70%', top: '50%', delay: '0.8s' },
    { left: '25%', top: '80%', delay: '1.2s' },
    { left: '60%', top: '15%', delay: '0.6s' },
    { left: '85%', top: '40%', delay: '1.8s' },
    { left: '5%', top: '45%', delay: '0.9s' }
];

// Pre-defined progress widths
const progressWidths = ['w-3/4', 'w-4/5', 'w-2/3', 'w-5/6', 'w-3/5'];

export default function HeroSection() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-sky-900 to-slate-800">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="text-center lg:text-right space-y-8">
                            <div className="space-y-6">
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-500/20 text-sky-300 rounded-full text-sm backdrop-blur-sm border border-sky-400/30">
                                    <LightBulbIcon className="w-4 h-4" />
                                    <span>ایده‌های خلاقانه</span>
                                    <StarIcon className="w-4 h-4 fill-current text-yellow-400" />
                                </div>
                                <h1 className="text-4xl lg:text-6xl font-black text-white leading-tight">
                                    طراحی بصری
                                    <span className="block text-sky-200">و برنامه‌نویسی</span>
                                    <span className="block bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
                                        نسل جدید
                                    </span>
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-sky-900 to-slate-800">
            {/* CSS Animations */}
            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-15px); }
                }
                @keyframes glow {
                    0%, 100% { box-shadow: 0 0 20px rgba(14, 165, 233, 0.3); }
                    50% { box-shadow: 0 0 30px rgba(14, 165, 233, 0.5); }
                }
                @keyframes gradient {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
                .animate-float { animation: float 4s ease-in-out infinite; }
                .animate-glow { animation: glow 2s ease-in-out infinite; }
                .animate-gradient {
                    background-size: 200% 200%;
                    animation: gradient 8s ease infinite;
                }
            `}</style>

            {/* Background with Fixed Particles */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 to-blue-600/10 animate-gradient"></div>
                {particlePositions.map((particle, i) => (
                    <div
                        key={i}
                        className="absolute animate-float"
                        style={{
                            left: particle.left,
                            top: particle.top,
                            animationDelay: particle.delay
                        }}
                    >
                        <div className="w-2 h-2 rounded-full bg-sky-400/40 blur-sm"></div>
                    </div>
                ))}
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div className="text-center lg:text-right space-y-8">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-500/20 text-sky-300 rounded-full text-sm backdrop-blur-sm border border-sky-400/30">
                                <LightBulbIcon className="w-4 h-4" />
                                <span>ایده‌های خلاقانه</span>
                                <StarIcon className="w-4 h-4 fill-current text-yellow-400" />
                            </div>

                            <h1 className="text-4xl lg:text-6xl font-black text-white leading-tight">
                                طراحی بصری
                                <span className="block text-sky-200">و برنامه‌نویسی</span>
                                <span className="block bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
                                    نسل جدید
                                </span>
                            </h1>

                            <p className="text-xl text-gray-200 leading-relaxed max-w-2xl">
                                ما با تیمی جوان و خلاق در
                                <strong className="text-sky-300"> طراحی گرافیک</strong>،
                                <strong className="text-blue-300"> طراحی سایت</strong>،
                                <strong className="text-indigo-300"> برنامه‌نویسی</strong> و
                                <strong className="text-emerald-300"> سئو حرفه‌ای </strong>
                                خدمات نوآورانه ارائه می‌دهیم.
                            </p>
                        </div>

                        {/* Services Grid */}
                        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
                            {Object.entries(companyData.services).map(([key, value], index) => {
                                const icons = [ComputerDesktopIcon, PaintBrushIcon, EyeIcon, CodeBracketIcon, MagnifyingGlassIcon];
                                const colors = ['text-sky-400', 'text-blue-400', 'text-indigo-400', 'text-purple-400', 'text-emerald-400'];
                                const bgColors = ['bg-sky-500/10', 'bg-blue-500/10', 'bg-indigo-500/10', 'bg-purple-500/10', 'bg-emerald-500/10'];

                                const IconComponent = icons[index];

                                return (
                                    <div key={index} className="text-center group cursor-pointer">
                                        <div className={`${bgColors[index]} ${colors[index]} mb-2 p-3 rounded-xl group-hover:scale-110 transition-all duration-300 backdrop-blur-sm border border-white/10`}>
                                            <IconComponent className="w-6 h-6 mx-auto" />
                                        </div>
                                        <div className="text-sm text-gray-200 leading-tight">{value}</div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <button className="group px-6 py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold rounded-lg hover:from-sky-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-xl animate-glow">
                                <span className="flex items-center gap-2">
                                    <RocketLaunchIcon className="w-5 h-5" />
                                    مشاوره رایگان
                                    <ArrowRightIcon className="w-4 h-4" />
                                </span>
                            </button>

                            <button className="group px-6 py-3 border-2 border-sky-400/30 text-white font-bold rounded-lg hover:bg-sky-500/10 transition-all duration-300">
                                <span className="flex items-center gap-2">
                                    <PlayCircleIcon className="w-5 h-5" />
                                    نمونه کارها
                                </span>
                            </button>
                        </div>

                        {/* Trust Indicators */}
                        <div className="flex items-center justify-center lg:justify-start gap-6 text-sm text-gray-300">
                            <div className="flex items-center gap-2">
                                <ShieldCheckIcon className="w-4 h-4 text-sky-300" />
                                <span>ضمانت کیفیت</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <ClockIcon className="w-4 h-4 text-blue-300" />
                                <span>پشتیبانی مداوم</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <BoltIcon className="w-4 h-4 text-indigo-300" />
                                <span>تحویل سریع</span>
                            </div>
                        </div>
                    </div>

                    {/* Hero Visual */}
                    <div className="relative">
                        <div className="relative mx-auto max-w-lg">
                            <div className="relative transform hover:rotate-0 transition-transform duration-500 group">
                                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 shadow-2xl border border-sky-400/20">
                                    <div className="bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl p-4 text-white">
                                        <div className="space-y-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                                                    <PaintBrushIcon className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <h3 className="font-bold">دیزاین پرداز</h3>
                                                    <p className="text-sm opacity-90">طراحی بصری نوین</p>
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                {Object.values(companyData.services).map((service, index) => (
                                                    <div key={index} className="bg-white/10 rounded-lg p-2 backdrop-blur-sm">
                                                        <div className="flex items-center justify-between">
                                                            <span className="text-sm">{service}</span>
                                                            <span className="text-green-200 font-bold text-xs px-2 py-1 bg-green-500/30 rounded">فعال</span>
                                                        </div>
                                                        <div className="mt-1 bg-white/20 rounded h-1">
                                                            <div className={`bg-green-400 h-1 rounded ${progressWidths[index]}`}></div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Icons */}
                            <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-sky-400 to-blue-500 rounded-xl flex items-center justify-center shadow-lg animate-float">
                                <PaintBrushIcon className="w-6 h-6 text-white" />
                            </div>
                            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg animate-float" style={{animationDelay: '1s'}}>
                                <CodeBracketIcon className="w-6 h-6 text-white" />
                            </div>
                            <div className="absolute top-1/2 -left-6 w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg animate-float" style={{animationDelay: '0.5s'}}>
                                <ComputerDesktopIcon className="w-5 h-5 text-white" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="flex flex-col items-center gap-2">
                    <div className="text-xs text-sky-300/60">ادامه مطالب</div>
                    <ChevronDownIcon className="w-6 h-6 text-sky-300/60" />
                </div>
            </div>
        </section>
    );
}