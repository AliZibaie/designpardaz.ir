'use client';

import { CONTACT_PHONE } from '@/lib/constants/contact';

const companyData = {
    name: 'دیزاین پرداز',
    slogan: 'طراحی سایت، CRM و ربات',
    description: 'دیزاین پرداز — طراحی سایت، CRM، ربات تلگرام و بله، وردپرس و ادمین پنل اختصاصی.',
    phone: CONTACT_PHONE.tel,
    email: 'info@designpardaz.ir',
    address: 'تهران، ایران',
    stats: {
        projects: 'در حال راه‌اندازی',
        clients: 'آماده همکاری',
        experience: 'تیم خبره',
        satisfaction: 'کیفیت تضمینی'
    }
};

import {
    CheckCircleIcon,
    ClockIcon,
    EnvelopeIcon,
    HeartIcon,
    PhoneIcon,
    ShieldCheckIcon,
    StarIcon,
    RocketLaunchIcon
} from "@heroicons/react/24/outline";

export default function FinalCTASection() {
    return (
        <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-600 text-white overflow-hidden relative">

            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-black/30"></div>
                {/* Animated particles matching logo colors */}
                {[...Array(25)].map((_, i) => (
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
                        <div className={`w-2 h-2 rounded-full blur-sm ${
                            i % 3 === 0 ? 'bg-cyan-400/40' :
                                i % 3 === 1 ? 'bg-blue-400/40' : 'bg-white/30'
                        }`}></div>
                    </div>
                ))}

                {/* Geometric shapes inspired by logo */}
                <div className="absolute top-20 left-10 w-20 h-20 border-2 border-cyan-400/20 rotate-12 rounded-lg"></div>
                <div className="absolute bottom-32 right-16 w-16 h-16 bg-blue-500/10 rotate-45 rounded-lg"></div>
                <div className="absolute top-1/2 left-1/4 w-12 h-12 border border-cyan-300/30 rotate-45"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-4xl mx-auto">

                    {/* Main Headline */}
                    <div className="mb-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 backdrop-blur-sm rounded-full text-cyan-300 text-sm font-medium mb-4">
                            <RocketLaunchIcon className="w-4 h-4" />
                            <span>آماده شروع ماجراجویی دیجیتال</span>
                        </div>

                        <h2 className="text-4xl lg:text-6xl font-black mb-6 leading-tight">
                            پروژه رویایی خود را
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                                با ما محقق کنید
                            </span>
                        </h2>
                    </div>

                    <p className="text-xl lg:text-2xl text-blue-100 mb-8 leading-relaxed">
                        تیم جوان و خلاق ما آماده است تا ایده‌های شما را به
                        <strong className="text-cyan-400"> واقعیت تبدیل </strong>
                        کند.
                        <br className="hidden lg:block" />
                        با تکنولوژی‌های روز دنیا، آینده کسب‌وکارتان را بسازیم!
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                        <a
                            href={`tel:${companyData.phone}`}
                            className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-black text-lg rounded-2xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-cyan-500/25"
                        >
                            <PhoneIcon className="w-6 h-6 group-hover:animate-bounce" />
                            <span dir="ltr">{CONTACT_PHONE.displayLatin}</span>
                            <span className="text-sm font-normal text-cyan-100">مشاوره رایگان</span>
                        </a>

                        <a
                            href={`mailto:${companyData.email}`}
                            className="group inline-flex items-center gap-3 px-10 py-5 border-2 border-cyan-400 text-cyan-400 font-black text-lg rounded-2xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
                        >
                            <EnvelopeIcon className="w-6 h-6 group-hover:animate-pulse" />
                            <span>ارسال ایمیل</span>
                        </a>
                    </div>

                    {/* Trust Indicators */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        <div className="flex flex-col items-center gap-2 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                            <CheckCircleIcon className="w-8 h-8 text-green-400" />
                            <span className="text-sm text-gray-300">مشاوره رایگان</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                            <ShieldCheckIcon className="w-8 h-8 text-cyan-400" />
                            <span className="text-sm text-gray-300">کیفیت تضمینی</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                            <ClockIcon className="w-8 h-8 text-blue-400" />
                            <span className="text-sm text-gray-300">تحویل سریع</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                            <StarIcon className="w-8 h-8 text-yellow-400 fill-current" />
                            <span className="text-sm text-gray-300">خدمات نوین</span>
                        </div>
                    </div>

                    {/* Final motivational text */}
                    <div className="text-center">
                        <p className="text-lg text-blue-200 leading-relaxed">
                            🚀 آماده‌اید که پروژه‌تان را از صفر تا صد همراهی کنیم؟
                            <br className="hidden sm:block" />
                            همین الان با ما در تماس باشید!
                        </p>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(180deg); }
                }
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
}