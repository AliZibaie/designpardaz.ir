'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
    CheckCircleIcon,
    StarIcon,
    TrophyIcon,
    HeartIcon,
    LightBulbIcon,
    RocketLaunchIcon,
    ShieldCheckIcon,
    BuildingOfficeIcon,
    ClockIcon,
    PhoneIcon,
    BookOpenIcon,
    EnvelopeIcon,
    MapPinIcon,
    ChartBarIcon,
    SparklesIcon,
    FireIcon,
    EyeIcon,
    HandRaisedIcon,
    DevicePhoneMobileIcon,
    ChatBubbleLeftRightIcon,
    PlayCircleIcon,
    UserGroupIcon,
    CalendarDaysIcon,
} from '@heroicons/react/24/outline';

// Company Data
const companyData = {
    name: 'دیزاین پرداز',
    establishedYear: 1396,
    currentYear: 1402,
    foundedIn: 'تهران، ایران',
    mission: 'تبدیل ایده‌های شما به واقعیت دیجیتال',
    vision: 'پیشرو در ارائه خدمات طراحی وب و دیجیتال مارکتینگ در ایران',
    values: ['کیفیت', 'نوآوری', 'اعتماد', 'تعهد'],
    stats: {
        experience: 8,
        projects: 250,
        clients: 180,
        satisfaction: 98,
        teamMembers: 12,
        awards: 5
    }
};

// Team Members
const teamMembers = [
    {
        id: 1,
        name: 'علی احمدی',
        position: 'مدیر عامل و طراح ارشد',
        experience: '8+ سال تجربه',
        image: '/team/ceo.jpg',
        skills: ['مدیریت پروژه', 'UI/UX Design', 'استراتژی دیجیتال'],
        description: 'بنیان‌گذار دیزاین پرداز با بیش از ۸ سال تجربه در طراحی وب',
        social: {
            linkedin: '#',
            instagram: '#'
        }
    },
    {
        id: 2,
        name: 'سارا کریمی',
        position: 'متخصص سئو و بازاریابی دیجیتال',
        experience: '6+ سال تجربه',
        image: '/team/seo-manager.jpg',
        skills: ['SEO تکنیکال', 'تولید محتوا', 'Google Ads'],
        description: 'متخصص سئو با رکورد افزایش ۳۰۰% ترافیک سایت مشتریان',
        social: {
            linkedin: '#',
            instagram: '#'
        }
    },
    {
        id: 3,
        name: 'محمد رضایی',
        position: 'توسعه‌دهنده فول‌استک',
        experience: '7+ سال تجربه',
        image: '/team/developer.jpg',
        skills: ['React/Next.js', 'Node.js', 'Database Design'],
        description: 'توسعه‌دهنده باتجربه با تخصص در تکنولوژی‌های مدرن وب',
        social: {
            linkedin: '#',
            github: '#'
        }
    },
    {
        id: 4,
        name: 'مریم صادقی',
        position: 'طراح گرافیک و هویت بصری',
        experience: '5+ سال تجربه',
        image: '/team/designer.jpg',
        skills: ['طراحی لوگو', 'برندینگ', 'طراحی چاپ'],
        description: 'طراح خلاق با سابقه طراحی هویت بصری برندهای معتبر',
        social: {
            instagram: '#',
            behance: '#'
        }
    }
];

// Timeline Events
const timeline = [
    {
        year: 1396,
        title: 'تأسیس دیزاین پرداز',
        description: 'شروع فعالیت با تیم ۲ نفره و تمرکز بر طراحی وب',
        icon: RocketLaunchIcon,
        color: 'from-blue-500 to-purple-500'
    },
    {
        year: 1397,
        title: 'گسترش خدمات',
        description: 'اضافه شدن خدمات سئو و بازاریابی دیجیتال',
        icon: ChartBarIcon,
        color: 'from-green-500 to-blue-500'
    },
    {
        year: 1398,
        title: 'رسیدن به ۵۰ پروژه',
        description: 'تکمیل ۵۰ پروژه موفق و کسب اعتماد مشتریان',
        icon: TrophyIcon,
        color: 'from-yellow-500 to-orange-500'
    },
    {
        year: 1399,
        title: 'تشکیل تیم حرفه‌ای',
        description: 'گسترش تیم به ۸ نفر و تخصصی شدن بیشتر',
        icon: UserGroupIcon,
        color: 'from-pink-500 to-red-500'
    },
    {
        year: 1400,
        title: 'عبور از ۱۰۰ پروژه',
        description: 'دستیابی به ۱۰۰ پروژه موفق و رضایت ۹۸% مشتریان',
        icon: FireIcon,
        color: 'from-orange-500 to-red-500'
    },
    {
        year: 1401,
        title: 'توسعه خدمات اپلیکیشن',
        description: 'شروع توسعه اپلیکیشن‌های موبایل و وب‌اپ',
        icon: DevicePhoneMobileIcon,
        color: 'from-purple-500 to-pink-500'
    },
    {
        year: 1402,
        title: 'رهبری در صنعت',
        description: 'تبدیل شدن به یکی از پیشروان طراحی وب در ایران',
        icon: SparklesIcon,
        color: 'from-indigo-500 to-purple-500'
    }
];

// Values
const companyValues = [
    {
        icon: ShieldCheckIcon,
        title: 'کیفیت بالا',
        description: 'تعهد به ارائه بالاترین کیفیت در تمام پروژه‌ها',
        color: 'from-green-500 to-blue-500'
    },
    {
        icon: LightBulbIcon,
        title: 'نوآوری',
        description: 'استفاده از جدیدترین تکنولوژی‌ها و روش‌های نوین',
        color: 'from-yellow-500 to-orange-500'
    },
    {
        icon: HeartIcon,
        title: 'اعتماد',
        description: 'ساخت روابط طولانی‌مدت بر پایه اعتماد متقابل',
        color: 'from-pink-500 to-red-500'
    },
    {
        icon: HandRaisedIcon,
        title: 'تعهد',
        description: 'پایبندی کامل به قول‌ها و مهلت‌های تعیین شده',
        color: 'from-purple-500 to-pink-500'
    }
];

// Certifications & Awards
const achievements = [
    {
        title: 'گواهینامه Google Partner',
        year: '1401',
        icon: TrophyIcon,
        description: 'پارتنر رسمی گوگل در ایران'
    },
    {
        title: 'برترین شرکت طراحی وب',
        year: '1400',
        icon: StarIcon,
        description: 'انتخاب بهترین شرکت سال'
    },
    {
        title: 'گواهینامه ISO 9001',
        year: '1399',
        icon: ShieldCheckIcon,
        description: 'کیفیت مدیریت خدمات'
    },
    {
        title: 'جایزه نوآوری دیجیتال',
        year: '1398',
        icon: LightBulbIcon,
        description: 'پروژه نوآورانه سال'
    }
];

export default function AboutUsPage() {
    const [activeTab, setActiveTab] = useState('story');
    const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());


    // Intersection Observer for animations
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisibleElements(prev => new Set([...prev, entry.target.id]));
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
            {/* SEO Meta Tags */}
            <head>
                <title>درباره ما - دیزاین پرداز | داستان ۸ سال موفقیت در طراحی وب</title>
                <meta name="description" content="آشنایی با تیم دیزاین پرداز، ۸ سال تجربه، ۲۵۰+ پروژه موفق و ۱۸۰+ مشتری راضی. داستان موفقیت ما در طراحی وب و سئو" />
                <meta name="keywords" content="درباره دیزاین پرداز, تیم طراحی وب, تاریخچه شرکت, متخصصان سئو, طراحان حرفه ای" />
                <meta property="og:title" content="درباره دیزاین پرداز - ۸ سال تجربه در طراحی وب" />
                <meta property="og:description" content="تیم حرفه‌ای دیزاین پرداز با ۲۵۰+ پروژه موفق و رضایت ۹۸% مشتریان" />
                <link rel="canonical" href="https://designpardaz.ir/about" />

                {/* Structured Data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "AboutPage",
                        "mainEntity": {
                            "@type": "Organization",
                            "name": "دیزاین پرداز",
                            "foundingDate": "2017",
                            "description": "شرکت طراحی وب و سئو با ۸ سال تجربه",
                            "numberOfEmployees": companyData.stats.teamMembers,
                            "awards": achievements.map(award => award.title)
                        }
                    })}
                </script>
            </head>

            <div className="min-h-screen bg-white">

                {/* Hero Section */}
                <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">

                    {/* Background Animation */}
                    <div className="absolute inset-0">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-gradient-x"></div>
                        {[...Array(40)].map((_, i) => (
                            <div
                                key={i}
                                className="absolute animate-float"
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                    animationDelay: `${Math.random() * 3}s`,
                                    animationDuration: `${3 + Math.random() * 4}s`
                                }}
                            >
                                <div className="w-2 h-2 bg-white/20 rounded-full blur-sm"></div>
                            </div>
                        ))}
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-4xl mx-auto text-center">

                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500/20 text-orange-300 rounded-full text-sm font-medium mb-8">
                                <BuildingOfficeIcon className="w-5 h-5" />
                                <span>درباره دیزاین پرداز</span>
                            </div>

                            {/* Main Headline */}
                            <h1 className="text-4xl lg:text-6xl font-black text-white leading-tight mb-8">
                                داستان
                                <span className="text-transparent bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text"> ۸ سال </span>
                                موفقیت در
                                <span className="block text-transparent bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text">
                                    طراحی وب
                                </span>
                            </h1>

                            <p className="text-xl text-gray-300 leading-relaxed mb-12 max-w-3xl mx-auto">
                                از سال ۱۳۹۶ با هدف
                                <strong className="text-orange-400"> تبدیل ایده‌ها به واقعیت دیجیتال </strong>
                                شروع کردیم. امروز با
                                <strong className="text-pink-400"> ۲۵۰+ پروژه موفق </strong>
                                و
                                <strong className="text-purple-400"> ۱۸۰+ مشتری راضی</strong>،
                                یکی از پیشروان صنعت طراحی وب در ایران هستیم.
                            </p>

                            {/* Key Stats */}
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                                {[
                                    { label: 'سال تجربه', value: companyData.stats.experience + '+', icon: ClockIcon, color: 'text-blue-400' },
                                    { label: 'پروژه موفق', value: companyData.stats.projects + '+', icon: TrophyIcon, color: 'text-yellow-400' },
                                    { label: 'مشتری راضی', value: companyData.stats.clients + '+', icon: HeartIcon, color: 'text-red-400' },
                                    { label: 'رضایت مشتریان', value: companyData.stats.satisfaction + '%', icon: StarIcon, color: 'text-purple-400' }
                                ].map((stat, index) => (
                                    <div key={index} className="text-center">
                                        <div className={`${stat.color} mb-3`}>
                                            <stat.icon className="w-8 h-8 mx-auto mb-2" />
                                        </div>
                                        <div className="text-3xl lg:text-4xl font-black text-white mb-2">{stat.value}</div>
                                        <div className="text-sm text-gray-400">{stat.label}</div>
                                    </div>
                                ))}
                            </div>

                            {/* CTA */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold rounded-xl hover:from-orange-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-2xl">
                                    <span className="flex items-center gap-2">
                                        <ChatBubbleLeftRightIcon className="w-5 h-5 group-hover:animate-bounce" />
                                        با ما همکاری کنید
                                    </span>
                                </button>

                                <button className="group px-8 py-4 border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                                    <span className="flex items-center gap-2">
                                        <PlayCircleIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                        نمونه کارها
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Tab Navigation */}
                <section className="py-8 bg-white border-b border-gray-200 sticky top-0 z-40">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap justify-center gap-4">
                            {[
                                { id: 'story', label: 'داستان ما', icon: BookOpenIcon },
                                { id: 'team', label: 'تیم ما', icon: UserGroupIcon },
                                { id: 'values', label: 'ارزش‌ها', icon: HeartIcon },
                                { id: 'timeline', label: 'مسیر موفقیت', icon: ChartBarIcon },
                                { id: 'achievements', label: 'افتخارات', icon: TrophyIcon }
                            ].map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`group flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
                                        activeTab === tab.id
                                            ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg'
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                                >
                                    <tab.icon className="w-5 h-5" />
                                    <span>{tab.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Story Section */}
                {activeTab === 'story' && (
                    <section className="py-20 bg-gradient-to-br from-gray-50 to-white" data-animate>
                        <div className="container mx-auto px-4">
                            <div className="grid lg:grid-cols-2 gap-16 items-center">

                                {/* Content */}
                                <div className="space-y-8">
                                    <div>
                                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-6">
                                            <RocketLaunchIcon className="w-4 h-4" />
                                            <span>شروع ماجرا</span>
                                        </div>

                                        <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
                                            از
                                            <span className="text-transparent bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text"> رویا </span>
                                            تا واقعیت
                                        </h2>

                                        <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                                            <p>
                                                در سال ۱۳۹۶، زمانی که بازار طراحی وب ایران هنوز در مراحل ابتدایی خود بود،
                                                <strong className="text-orange-600"> دیزاین پرداز </strong>
                                                با هدف ارائه خدمات با کیفیت جهانی و قیمت مناسب برای کسب‌وکارهای ایرانی تأسیس شد.
                                            </p>

                                            <p>
                                                ما درک کردیم که بسیاری از کسب‌وکارها نیاز به حضور قدرتمند در فضای دیجیتال دارند، اما
                                                با مشکلاتی مانند کیفیت پایین، قیمت‌های نامناسب یا عدم پشتیبانی مواجه می‌شوند.
                                            </p>

                                            <p>
                                                امروز پس از
                                                <strong className="text-pink-600"> ۸ سال فعالیت مستمر</strong>،
                                                با افتخار می‌توانیم بگوییم که به یکی از
                                                <strong className="text-purple-600"> معتبرترین برندهای حوزه طراحی وب </strong>
                                                در ایران تبدیل شده‌ایم.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Mission & Vision */}
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="bg-gradient-to-br from-orange-50 to-pink-50 rounded-2xl p-6 border border-orange-100">
                                            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                                                <EyeIcon className="w-6 h-6 text-white" />
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">چشم‌انداز ما</h3>
                                            <p className="text-gray-700">{companyData.vision}</p>
                                        </div>

                                        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border border-purple-100">
                                            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-4">
                                                <RocketLaunchIcon className="w-6 h-6 text-white" />
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">ماموریت ما</h3>
                                            <p className="text-gray-700">{companyData.mission}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Visual Content */}
                                <div className="relative">
                                    <div className="relative mx-auto max-w-lg">

                                        {/* Main Card */}
                                        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 shadow-2xl border border-gray-700 transform rotate-3 hover:rotate-0 transition-transform duration-700">
                                            <div className="space-y-6">

                                                {/* Company Logo Area */}
                                                <div className="text-center">
                                                    <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                                        <span className="text-2xl font-black text-white">DP</span>
                                                    </div>
                                                    <h3 className="text-xl font-bold text-white">دیزاین پرداز</h3>
                                                    <p className="text-gray-400 text-sm">از ۱۳۹۶ تا الان</p>
                                                </div>

                                                {/* Progress Indicators */}
                                                <div className="space-y-4">
                                                    <div>
                                                        <div className="flex justify-between text-sm text-gray-300 mb-2">
                                                            <span>تجربه و دانش</span>
                                                            <span>۹۵%</span>
                                                        </div>
                                                        <div className="bg-gray-700 rounded-full h-2">
                                                            <div className="bg-gradient-to-r from-green-400 to-blue-400 h-2 rounded-full w-[95%] animate-pulse"></div>
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <div className="flex justify-between text-sm text-gray-300 mb-2">
                                                            <span>رضایت مشتریان</span>
                                                            <span>۹۸%</span>
                                                        </div>
                                                        <div className="bg-gray-700 rounded-full h-2">
                                                            <div className="bg-gradient-to-r from-orange-400 to-red-400 h-2 rounded-full w-[98%] animate-pulse"></div>
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <div className="flex justify-between text-sm text-gray-300 mb-2">
                                                            <span>کیفیت پروژه‌ها</span>
                                                            <span>۱۰۰%</span>
                                                        </div>
                                                        <div className="bg-gray-700 rounded-full h-2">
                                                            <div className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full w-full animate-pulse"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Floating Elements */}
                                        <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl flex items-center justify-center shadow-lg animate-bounce">
                                            <CalendarDaysIcon className="w-8 h-8 text-white" />
                                        </div>

                                        <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-green-400 to-blue-400 rounded-2xl flex items-center justify-center shadow-lg animate-bounce" style={{animationDelay: '1s'}}>
                                            <TrophyIcon className="w-8 h-8 text-white" />
                                        </div>

                                        <div className="absolute top-1/3 -left-8 w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-400 rounded-xl flex items-center justify-center shadow-lg animate-pulse">
                                            <StarIcon className="w-6 h-6 text-white fill-current" />
                                        </div>

                                        <div className="absolute bottom-1/3 -right-8 w-12 h-12 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-xl flex items-center justify-center shadow-lg animate-pulse" style={{animationDelay: '2s'}}>
                                            <HeartIcon className="w-6 h-6 text-white fill-current" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* Team Section */}
                {activeTab === 'team' && (
                    <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100" data-animate>
                        <div className="container mx-auto px-4">

                            {/* Section Header */}
                            <div className="text-center mb-16">
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-medium mb-6">
                                    <UserGroupIcon className="w-4 h-4" />
                                    <span>تیم ما</span>
                                </div>

                                <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
                                    متخصصان
                                    <span className="text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text"> حرفه‌ای </span>
                                    دیزاین پرداز
                                </h2>

                                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                    تیمی از متخصصان با سالها تجربه که با شور و اشتیاق پروژه‌های شما را به بهترین شکل اجرا می‌کنند
                                </p>
                            </div>

                            {/* Team Grid */}
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                                {teamMembers.map((member) => (
                                    <div
                                        key={member.id}
                                        className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
                                    >
                                        {/* Member Image */}
                                        <div className="relative overflow-hidden">
                                            <div className="aspect-square bg-gradient-to-br from-purple-400 via-pink-400 to-red-400 flex items-center justify-center">
                                                <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
                                                    <UserGroupIcon className="w-12 h-12 text-white" />
                                                </div>
                                            </div>
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        </div>

                                        {/* Member Info */}
                                        <div className="p-6">
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                                            <p className="text-purple-600 font-medium mb-3">{member.position}</p>
                                            <p className="text-gray-600 text-sm mb-4">{member.description}</p>

                                            {/* Skills */}
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {member.skills.slice(0, 2).map((skill, idx) => (
                                                    <span key={idx} className="px-3 py-1 bg-purple-100 text-purple-600 text-xs font-medium rounded-full">
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* Experience */}
                                            <div className="flex items-center gap-2 text-sm text-gray-500">
                                                <ClockIcon className="w-4 h-4" />
                                                <span>{member.experience}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Team Stats */}
                            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 lg:p-12 text-white">
                                <div className="grid md:grid-cols-3 gap-8 text-center">
                                    <div>
                                        <div className="text-4xl lg:text-5xl font-black mb-2">۱۲+</div>
                                        <div className="text-purple-100">عضو تیم</div>
                                    </div>
                                    <div>
                                        <div className="text-4xl lg:text-5xl font-black mb-2">۵۰+</div>
                                        <div className="text-purple-100">سال تجربه مجموع</div>
                                    </div>
                                    <div>
                                        <div className="text-4xl lg:text-5xl font-black mb-2">۲۰+</div>
                                        <div className="text-purple-100">گواهینامه تخصصی</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* Values Section */}
                {activeTab === 'values' && (
                    <section className="py-20 bg-gradient-to-br from-orange-50 via-white to-pink-50" data-animate>
                        <div className="container mx-auto px-4">

                            {/* Section Header */}
                            <div className="text-center mb-16">
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-6">
                                    <HeartIcon className="w-4 h-4" />
                                    <span>ارزش‌های ما</span>
                                </div>

                                <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
                                    اصولی که
                                    <span className="text-transparent bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text"> پایه کار </span>
                                    ما هستند
                                </h2>

                                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                    این ارزش‌ها در تمام فعالیت‌ها و تصمیم‌گیری‌های ما نقش اساسی دارند
                                </p>
                            </div>

                            {/* Values Grid */}
                            <div className="grid md:grid-cols-2 gap-8 mb-16">
                                {companyValues.map((value, index) => (
                                    <div
                                        key={index}
                                        className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-gray-100 hover:border-transparent"
                                    >
                                        {/* Value Icon */}
                                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${value.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                            <value.icon className="w-8 h-8 text-white" />
                                        </div>

                                        {/* Value Content */}
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-pink-500 group-hover:bg-clip-text transition-all duration-300">
                                            {value.title}
                                        </h3>

                                        <p className="text-gray-600 leading-relaxed text-lg">
                                            {value.description}
                                        </p>

                                        {/* Hover Effect Background */}
                                        <div className={`absolute inset-0 bg-gradient-to-r ${value.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300`}></div>
                                    </div>
                                ))}
                            </div>

                            {/* Why These Values Matter */}
                            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 lg:p-12 text-white">
                                <div className="grid lg:grid-cols-2 gap-12 items-center">
                                    <div>
                                        <h3 className="text-3xl font-bold mb-6">
                                            چرا این ارزش‌ها
                                            <span className="text-transparent bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text">مهم هستند؟</span>
                                        </h3>

                                        <div className="space-y-4 text-gray-300">
                                            <p>
                                                در دنیای امروز که رقابت شدید است، تنها راه تمایز،
                                                <strong className="text-orange-400"> پایبندی به اصول و ارزش‌های محکم </strong>
                                                است.
                                            </p>

                                            <p>
                                                ما معتقدیم که موفقیت واقعی زمانی حاصل می‌شود که در کنار کیفیت بالای کار،
                                                <strong className="text-pink-400"> روابط انسانی سالم و اعتماد متقابل </strong>
                                                نیز وجود داشته باشد.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        {[
                                            { label: 'پروژه‌های تحویلی به موقع', value: '۱۰۰%' },
                                            { label: 'مشتریان بازگشتی', value: '۸۵%' },
                                            { label: 'رضایت از کیفیت', value: '۹۸%' },
                                            { label: 'پیشنهاد به دیگران', value: '۹۲%' }
                                        ].map((stat, index) => (
                                            <div key={index} className="text-center">
                                                <div className="text-3xl font-black text-orange-400 mb-1">{stat.value}</div>
                                                <div className="text-sm text-gray-400">{stat.label}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* Timeline Section */}
                {activeTab === 'timeline' && (
                    <section className="py-20 bg-gradient-to-br from-slate-900 to-gray-900 text-white" data-animate>
                        <div className="container mx-auto px-4">

                            {/* Section Header */}
                            <div className="text-center mb-16">
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/20 text-orange-300 rounded-full text-sm font-medium mb-6">
                                    <ChartBarIcon className="w-4 h-4" />
                                    <span>مسیر موفقیت</span>
                                </div>

                                <h2 className="text-4xl lg:text-5xl font-black mb-6">
                                    ۸ سال
                                    <span className="text-transparent bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text"> رشد مستمر</span>
                                </h2>

                                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                                    نگاهی به مهم‌ترین نقاط عطف و دستاوردهای ما در این سال‌ها
                                </p>
                            </div>

                            {/* Timeline */}
                            <div className="relative max-w-6xl mx-auto">

                                {/* Center Line */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-orange-500 via-pink-500 to-purple-500 hidden lg:block"></div>

                                {/* Timeline Items */}
                                <div className="space-y-12">
                                    {timeline.map((item, index) => (
                                        <div
                                            key={index}
                                            className={`relative flex items-center ${
                                                index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                                            }`}
                                        >
                                            {/* Content */}
                                            <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:text-left' : 'lg:text-right'}`}>
                                                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-2">

                                                    {/* Year Badge */}
                                                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/20 text-orange-300 rounded-full text-sm font-bold mb-4">
                                                        <CalendarDaysIcon className="w-4 h-4" />
                                                        <span>{item.year}</span>
                                                    </div>

                                                    <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                                                    <p className="text-gray-300 leading-relaxed">{item.description}</p>
                                                </div>
                                            </div>

                                            {/* Center Icon */}
                                            <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-2xl bg-gradient-to-r from-orange-500 to-pink-500 items-center justify-center shadow-2xl z-10">
                                                <item.icon className="w-8 h-8 text-white" />
                                            </div>

                                            {/* Mobile Icon */}
                                            <div className="lg:hidden w-12 h-12 rounded-xl bg-gradient-to-r from-orange-500 to-pink-500 flex items-center justify-center mb-4">
                                                <item.icon className="w-6 h-6 text-white" />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Future Vision */}
                            <div className="mt-20 text-center">
                                <div className="bg-gradient-to-r from-orange-500/20 to-pink-500/20 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-orange-500/30">
                                    <h3 className="text-3xl font-bold mb-6">
                                        نگاه به
                                        <span className="text-transparent bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text">آینده</span>
                                    </h3>

                                    <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                                        هدف ما این است که تا سال ۱۴۰۵ به بزرگ‌ترین و معتبرترین برند طراحی وب در ایران تبدیل شویم
                                        و خدمات خود را به سطح بین‌المللی برسانیم.
                                    </p>

                                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                                        <div className="text-center">
                                            <div className="text-3xl font-black text-orange-400 mb-2">۵۰۰+</div>
                                            <div className="text-gray-400 text-sm">پروژه تا ۱۴۰۵</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-3xl font-black text-pink-400 mb-2">۲۰+</div>
                                            <div className="text-gray-400 text-sm">عضو تیم</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-3xl font-black text-purple-400 mb-2">۱۰+</div>
                                            <div className="text-gray-400 text-sm">خدمت جدید</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-3xl font-black text-blue-400 mb-2">۱۰۰%</div>
                                            <div className="text-gray-400 text-sm">رضایت مشتری</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* Achievements Section */}
                {activeTab === 'achievements' && (
                    <section className="py-20 bg-gradient-to-br from-yellow-50 via-white to-orange-50" data-animate>
                        <div className="container mx-auto px-4">

                            {/* Section Header */}
                            <div className="text-center mb-16">
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 text-yellow-600 rounded-full text-sm font-medium mb-6">
                                    <TrophyIcon className="w-4 h-4" />
                                    <span>افتخارات ما</span>
                                </div>

                                <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
                                    جوایز و
                                    <span className="text-transparent bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text"> گواهینامه‌های </span>
                                    ما
                                </h2>

                                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                    دستاوردها و تأییدیه‌هایی که نشان‌دهنده کیفیت و اعتبار خدمات ما هستند
                                </p>
                            </div>

                            {/* Achievements Grid */}
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                                {achievements.map((achievement, index) => (
                                    <div
                                        key={index}
                                        className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-gray-100 hover:border-yellow-200"
                                    >
                                        {/* Achievement Icon */}
                                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                            <achievement.icon className="w-8 h-8 text-white" />
                                        </div>

                                        {/* Achievement Content */}
                                        <div className="space-y-4">
                                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-100 text-yellow-600 rounded-full text-sm font-bold">
                                                <span>{achievement.year}</span>
                                            </div>

                                            <h3 className="text-lg font-bold text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-yellow-500 group-hover:to-orange-500 group-hover:bg-clip-text transition-all duration-300">
                                                {achievement.title}
                                            </h3>

                                            <p className="text-gray-600 text-sm leading-relaxed">
                                                {achievement.description}
                                            </p>
                                        </div>

                                        {/* Hover Effect Background */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-500 opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300"></div>
                                    </div>
                                ))}
                            </div>

                            {/* Recognition Section */}
                            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-3xl p-8 lg:p-12 text-white">
                                <div className="grid lg:grid-cols-2 gap-12 items-center">
                                    <div>
                                        <h3 className="text-3xl font-bold mb-6">
                                            شناخته شده توسط
                                            <span className="text-yellow-200">بهترین‌ها</span>
                                        </h3>

                                        <div className="space-y-4 text-yellow-100">
                                            <p>
                                                دیزاین پرداز به عنوان یکی از
                                                <strong className="text-white"> معتبرترین برندهای طراحی وب </strong>
                                                در ایران شناخته می‌شود.
                                            </p>

                                            <p>
                                                عضویت در انجمن‌های تخصصی و دریافت گواهینامه‌های بین‌المللی،
                                                <strong className="text-white"> کیفیت و حرفه‌ای بودن </strong>
                                                خدمات ما را تضمین می‌کند.
                                            </p>
                                        </div>

                                        <div className="flex flex-wrap gap-4 mt-8">
                                            <div className="flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-sm">
                                                <CheckCircleIcon className="w-4 h-4" />
                                                <span>Google Partner</span>
                                            </div>
                                            <div className="flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-sm">
                                                <CheckCircleIcon className="w-4 h-4" />
                                                <span>ISO 9001</span>
                                            </div>
                                            <div className="flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-sm">
                                                <CheckCircleIcon className="w-4 h-4" />
                                                <span>عضو انجمن وب</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="text-center">
                                            <div className="text-4xl font-black mb-2">۵+</div>
                                            <div className="text-yellow-100">جایزه ملی</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-4xl font-black mb-2">۱۵+</div>
                                            <div className="text-yellow-100">گواهینامه</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-4xl font-black mb-2">۳+</div>
                                            <div className="text-yellow-100">شراکت رسمی</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-4xl font-black mb-2">۱۰۰%</div>
                                            <div className="text-yellow-100">استاندارد کیفیت</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* Contact CTA Section */}
                <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden relative">

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

                            <h2 className="text-4xl lg:text-6xl font-black mb-6 leading-tight">
                                با تیم
                                <span className="text-transparent bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text">دیزاین پرداز</span>
                                همکاری کنید
                            </h2>

                            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
                                آماده شروع بهترین پروژه خودتان هستید؟
                                <br className="hidden lg:block" />
                                همین الان با ما تماس بگیرید و مشاوره رایگان دریافت کنید!
                            </p>

                            {/* Contact Info */}
                            <div className="grid md:grid-cols-3 gap-8 mb-12">
                                <a
                                    href="tel:021-3333-4444"
                                    className="group flex items-center gap-4 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                                >
                                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center">
                                        <PhoneIcon className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="text-right">
                                        <div className="text-sm text-gray-400">تماس مستقیم</div>
                                        <div className="font-bold">۰۲۱-۳۳۳۳-۴۴۴۴</div>
                                    </div>
                                </a>

                                <a
                                    href="mailto:info@designpardaz.ir"
                                    className="group flex items-center gap-4 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                                >
                                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                                        <EnvelopeIcon className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="text-right">
                                        <div className="text-sm text-gray-400">ایمیل</div>
                                        <div className="font-bold">info@designpardaz.ir</div>
                                    </div>
                                </a>

                                <div className="group flex items-center gap-4 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                                        <MapPinIcon className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="text-right">
                                        <div className="text-sm text-gray-400">آدرس</div>
                                        <div className="font-bold">تهران، ایران</div>
                                    </div>
                                </div>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                <button className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-black text-lg rounded-2xl hover:from-orange-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-2xl">
                                    <ChatBubbleLeftRightIcon className="w-6 h-6 group-hover:animate-bounce" />
                                    <span>مشاوره رایگان</span>
                                </button>

                                <Link
                                    href="/portfolio"
                                    className="group inline-flex items-center gap-3 px-10 py-5 border-2 border-white text-white font-black text-lg rounded-2xl hover:bg-white hover:text-slate-900 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
                                >
                                    <EyeIcon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                                    <span>نمونه کارها</span>
                                </Link>
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
