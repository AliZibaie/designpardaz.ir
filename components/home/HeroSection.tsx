'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
    ArrowRightIcon,
    ChevronDownIcon,
    ClockIcon,
    RocketLaunchIcon,
    ShieldCheckIcon,
    StarIcon,
    BoltIcon,
    PaintBrushIcon,
    ComputerDesktopIcon,
    CodeBracketIcon,
    EyeIcon,
    MagnifyingGlassIcon,
    ChatBubbleLeftRightIcon,
    CogIcon,
} from "@heroicons/react/24/outline";
import { CONTACT_PHONE } from '@/lib/constants/contact';

const companyData = {
    name: 'دیزاین پرداز',
    slogan: 'طراحی سایت، CRM، ربات و ادمین پنل',
    description: 'دیزاین پرداز با رویکرد خلاقانه و تکنولوژی‌های روز، خدمات طراحی سایت، وردپرس، CRM اختصاصی، ربات تلگرام و بله، ادمین پنل و سئو حرفه‌ای را ارائه می‌دهد.',
    services: {
        webDesign: 'طراحی سایت',
        wordpress: 'وردپرس',
        crm: 'CRM اختصاصی',
        telegramBot: 'ربات تلگرام',
        adminPanel: 'ادمین پنل',
        seoService: 'سئو حرفه‌ای',
    }
};

const particlePositions = [
    { left: '10%', top: '20%', delay: '0s' },
    { left: '80%', top: '10%', delay: '0.5s' },
    { left: '15%', top: '60%', delay: '1s' },
    { left: '90%', top: '70%', delay: '1.5s' },
    { left: '40%', top: '30%', delay: '0.3s' },
    { left: '70%', top: '50%', delay: '0.8s' },
];

const progressWidths = ['w-4/5', 'w-3/4', 'w-5/6', 'w-2/3', 'w-4/5', 'w-3/5'];

const serviceIcons = [ComputerDesktopIcon, CodeBracketIcon, CogIcon, ChatBubbleLeftRightIcon, EyeIcon, MagnifyingGlassIcon];
const serviceColors = ['text-sky-400', 'text-blue-400', 'text-indigo-400', 'text-purple-400', 'text-violet-400', 'text-emerald-400'];
const serviceBgColors = ['bg-sky-500/10', 'bg-blue-500/10', 'bg-indigo-500/10', 'bg-purple-500/10', 'bg-violet-500/10', 'bg-emerald-500/10'];

export default function HeroSection() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-sky-900 to-slate-800">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center lg:text-right space-y-8">
                        <h1 className="text-4xl lg:text-6xl font-black text-white leading-tight">
                            طراحی سایت حرفه‌ای
                            <span className="block text-sky-200">CRM و ربات تلگرام</span>
                        </h1>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-sky-900 to-slate-800">
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

            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 to-blue-600/10 animate-gradient"></div>
                {particlePositions.map((particle, i) => (
                    <div
                        key={i}
                        className="absolute animate-float"
                        style={{ left: particle.left, top: particle.top, animationDelay: particle.delay }}
                    >
                        <div className="w-2 h-2 rounded-full bg-sky-400/40 blur-sm"></div>
                    </div>
                ))}
            </div>

            <div className="container mx-auto px-4 relative z-10 pt-24 pb-16">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="text-center lg:text-right space-y-8">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-500/20 text-sky-300 rounded-full text-sm backdrop-blur-sm border border-sky-400/30">
                                <StarIcon className="w-4 h-4 fill-current text-yellow-400" />
                                <span>طراحی سایت + CRM + ربات + ادمین پنل</span>
                            </div>

                            <h1 className="text-4xl lg:text-6xl font-black text-white leading-tight">
                                طراحی سایت
                                <span className="block text-sky-200">CRM، ربات و ادمین پنل</span>
                                <span className="block bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent text-3xl lg:text-5xl mt-2">
                                    {companyData.name}
                                </span>
                            </h1>

                            <p className="text-xl text-gray-200 leading-relaxed max-w-2xl">
                                {companyData.description}
                                <strong className="text-sky-300"> طراحی سایت وردپرس</strong>،
                                <strong className="text-blue-300"> سیستم CRM اختصاصی</strong>،
                                <strong className="text-indigo-300"> ربات تلگرام و بله</strong> و
                                <strong className="text-emerald-300"> ادمین پنل حرفه‌ای </strong>
                                — همه در یک تیم متخصص.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                            {Object.entries(companyData.services).map(([key, value], index) => {
                                const IconComponent = serviceIcons[index];
                                return (
                                    <div key={key} className="text-center group cursor-default">
                                        <div className={`${serviceBgColors[index]} ${serviceColors[index]} mb-2 p-3 rounded-xl group-hover:scale-105 transition-all duration-300 backdrop-blur-sm border border-white/10`}>
                                            <IconComponent className="w-5 h-5 mx-auto" />
                                        </div>
                                        <div className="text-xs sm:text-sm text-gray-200 leading-tight">{value}</div>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link
                                href="/contact"
                                className="group px-6 py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold rounded-xl hover:from-sky-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-xl animate-glow text-center"
                            >
                                <span className="flex items-center justify-center gap-2">
                                    <RocketLaunchIcon className="w-5 h-5" />
                                    مشاوره رایگان
                                    <ArrowRightIcon className="w-4 h-4" />
                                </span>
                            </Link>

                            <Link
                                href={`tel:${CONTACT_PHONE.tel}`}
                                className="group px-6 py-3 border-2 border-sky-400/30 text-white font-bold rounded-xl hover:bg-sky-500/10 transition-all duration-300 text-center"
                            >
                                <span className="flex items-center justify-center gap-2" dir="ltr">
                                    {CONTACT_PHONE.displayLatin}
                                </span>
                            </Link>
                        </div>

                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-sm text-gray-300">
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

                    <div className="relative hidden lg:block">
                        <div className="relative mx-auto max-w-lg">
                            <div className="relative transform hover:rotate-0 transition-transform duration-500">
                                <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 rounded-2xl p-6 shadow-2xl border border-sky-400/20 backdrop-blur-sm">
                                    <div className="bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl p-5 text-white">
                                        <div className="space-y-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                                                    <PaintBrushIcon className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <h3 className="font-bold">{companyData.name}</h3>
                                                    <p className="text-sm opacity-90">{companyData.slogan}</p>
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                {Object.values(companyData.services).map((service, index) => (
                                                    <div key={index} className="bg-white/10 rounded-lg p-2.5 backdrop-blur-sm">
                                                        <div className="flex items-center justify-between">
                                                            <span className="text-sm">{service}</span>
                                                            <span className="text-green-200 font-bold text-xs px-2 py-0.5 bg-green-500/30 rounded">فعال</span>
                                                        </div>
                                                        <div className="mt-1.5 bg-white/20 rounded h-1">
                                                            <div className={`bg-green-400 h-1 rounded transition-all duration-1000 ${progressWidths[index]}`}></div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-sky-400 to-blue-500 rounded-xl flex items-center justify-center shadow-lg animate-float">
                                <ComputerDesktopIcon className="w-6 h-6 text-white" />
                            </div>
                            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg animate-float" style={{animationDelay: '1s'}}>
                                <CogIcon className="w-6 h-6 text-white" />
                            </div>
                            <div className="absolute top-1/2 -left-6 w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg animate-float" style={{animationDelay: '0.5s'}}>
                                <ChatBubbleLeftRightIcon className="w-5 h-5 text-white" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="flex flex-col items-center gap-2">
                    <div className="text-xs text-sky-300/60">ادامه مطالب</div>
                    <ChevronDownIcon className="w-6 h-6 text-sky-300/60" />
                </div>
            </div>
        </section>
    );
}
