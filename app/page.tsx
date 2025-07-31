'use client';

import { useState, useEffect, useRef } from 'react';
import {
    ArrowRightIcon,
    ChevronDownIcon,
    PhoneIcon,
    EnvelopeIcon,
    ClockIcon,
    StarIcon,
    CheckCircleIcon,
    PlayCircleIcon,
    CodeBracketIcon,
    MagnifyingGlassIcon,
    PhotoIcon,
    ComputerDesktopIcon,
    ShoppingCartIcon,
    RocketLaunchIcon,
    TrophyIcon,
    HeartIcon,
    ShieldCheckIcon,
    CurrencyDollarIcon,
    ChatBubbleLeftRightIcon,
    UserGroupIcon,
    SparklesIcon,
    FireIcon,
    CogIcon,
    ChartBarIcon,
    CalendarDaysIcon
} from '@heroicons/react/24/outline';

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

// Services Data
const services = [
    {
        id: 1,
        title: 'طراحی سایت',
        description: 'طراحی وب‌سایت حرفه‌ای و ریسپانسیو با جدیدترین تکنولوژی‌ها',
        icon: ComputerDesktopIcon,
        price: 'از ۵ میلیون تومان',
        features: ['طراحی ریسپانسیو', 'بهینه‌سازی سرعت', 'پنل مدیریت', 'پشتیبانی ۶ ماهه'],
        gradient: 'from-blue-600 to-purple-600',
        popular: false
    },
    {
        id: 2,
        title: 'سئو و بهینه‌سازی',
        description: 'بهینه‌سازی کامل سایت برای موتورهای جستجو و افزایش ترافیک',
        icon: MagnifyingGlassIcon,
        price: 'از ۳ میلیون تومان',
        features: ['سئو تکنیکال', 'تولید محتوا', 'گزارش‌گیری', 'پیگیری رتبه'],
        gradient: 'from-green-600 to-blue-600',
        popular: true
    },
    {
        id: 3,
        title: 'طراحی گرافیک',
        description: 'طراحی لوگو، هویت بصری و تمام نیازهای گرافیکی شما',
        icon: PhotoIcon,
        price: 'از ۱.۵ میلیون تومان',
        features: ['طراحی لوگو', 'هویت بصری', 'بنر و پوستر', 'کاتالوگ'],
        gradient: 'from-pink-600 to-red-600',
        popular: false
    },
    {
        id: 4,
        title: 'فروشگاه اینترنتی',
        description: 'ساخت فروشگاه آنلاین پیشرفته با درگاه پرداخت معتبر',
        icon: ShoppingCartIcon,
        price: 'از ۸ میلیون تومان',
        features: ['درگاه پرداخت', 'مدیریت انبار', 'پنل فروشنده', 'اپلیکیشن موبایل'],
        gradient: 'from-orange-600 to-yellow-600',
        popular: false
    }
];

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

// Process Steps
const processSteps = [
    {
        step: 1,
        title: 'مشاوره و بررسی',
        description: 'تحلیل نیازهای شما و ارائه راهکار مناسب',
        icon: ChatBubbleLeftRightIcon,
        duration: '۱ روز'
    },
    {
        step: 2,
        title: 'طراحی و توسعه',
        description: 'شروع طراحی و کدنویسی بر اساس استانداردهای روز',
        icon: CodeBracketIcon,
        duration: '۷-۲۱ روز'
    },
    {
        step: 3,
        title: 'تست و بهینه‌سازی',
        description: 'تست کامل و بهینه‌سازی برای بهترین عملکرد',
        icon: CogIcon,
        duration: '۲-۳ روز'
    },
    {
        step: 4,
        title: 'تحویل و پشتیبانی',
        description: 'تحویل پروژه و شروع پشتیبانی ۶ ماهه رایگان',
        icon: TrophyIcon,
        duration: '۱ روز'
    }
];

export default function LandingPage() {
    const [ setIsVisible] = useState({});
    const [ setActiveService] = useState(0);
    const [openFaq, setOpenFaq] = useState(null);

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

    // Auto-rotate services
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveService(prev => (prev + 1) % services.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            {/* SEO Meta Tags */}
            <head>
                <title>دیزاین پرداز - طراحی وب حرفه‌ای و سئو | بهترین شرکت طراحی سایت</title>
                <meta name="description" content="دیزاین پرداز با ۸ سال تجربه، متخصص طراحی وب، سئو و طراحی گرافیک. ✅ قیمت مناسب ✅ کیفیت بالا ✅ پشتیبانی ۲۴/۷" />
                <meta name="keywords" content="طراحی سایت, طراحی وب, سئو, بهینه سازی سایت, طراحی گرافیک, فروشگاه اینترنتی" />
                <meta property="og:title" content="دیزاین پرداز - بهترین شرکت طراحی سایت و سئو" />
                <meta property="og:description" content="۲۵۰+ پروژه موفق، ۱۸۰+ مشتری راضی. طراحی سایت حرفه‌ای از ۵ میلیون تومان" />
                <meta property="og:image" content="/images/og-image.jpg" />
                <link rel="canonical" href="https://designpardaz.ir" />

                {/* Structured Data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "دیزاین پرداز",
                        "description": companyData.description,
                        "url": "https://designpardaz.ir",
                        "telephone": companyData.phone,
                        "email": companyData.email,
                        "address": {
                            "@type": "PostalAddress",
                            "addressCountry": "IR",
                            "addressLocality": "Tehran"
                        },
                        "hasOfferCatalog": {
                            "@type": "OfferCatalog",
                            "name": "خدمات طراحی وب",
                            "itemListElement": services.map(service => ({
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": service.title,
                                    "description": service.description
                                }
                            }))
                        }
                    })}
                </script>
            </head>

            <div className="min-h-screen bg-white">

                {/* Hero Section */}
                <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">

                    {/* Background Animation */}
                    <div className="absolute inset-0">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-gradient-x"></div>
                        <div className="absolute inset-0">
                            {[...Array(50)].map((_, i) => (
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
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">

                            {/* Content */}
                            <div className="text-center lg:text-right space-y-8">
                                <div className="space-y-4">
                                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/20 text-orange-300 rounded-full text-sm font-medium">
                                        <FireIcon className="w-4 h-4" />
                                        <span>۱ نمره در ایران</span>
                                        <StarIcon className="w-4 h-4 fill-current" />
                                    </div>

                                    <h1 className="text-4xl lg:text-6xl font-black text-white leading-tight">
                                        طراحی وب
                                        <span className="block text-transparent bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text">
                                            حرفه‌ای
                                        </span>
                                        که فروش می‌کند
                                    </h1>

                                    <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                                        با <strong className="text-orange-400">۸ سال تجربه</strong> و
                                        <strong className="text-pink-400"> ۲۵۰+ پروژه موفق</strong>،
                                        سایتی بسازید که مشتریان را جذب کرده و فروش شما را
                                        <strong className="text-purple-400"> ۳ برابر</strong> افزایش دهد.
                                    </p>
                                </div>

                                {/* Stats */}
                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                                    {Object.entries(companyData.stats).map(([key, value], index) => {
                                        const statConfig = {
                                            projects: { label: 'پروژه موفق', icon: TrophyIcon, color: 'text-yellow-400' },
                                            clients: { label: 'مشتری راضی', icon: HeartIcon, color: 'text-red-400' },
                                            experience: { label: 'سال تجربه', icon: CheckCircleIcon, color: 'text-green-400' },
                                            satisfaction: { label: 'رضایت', icon: StarIcon, color: 'text-purple-400' }
                                        };
                                        const config = statConfig[key];
                                        const IconComponent = config.icon;

                                        return (
                                            <div key={index} className="text-center">
                                                <div className={`${config.color} mb-2`}>
                                                    <IconComponent className="w-8 h-8 mx-auto mb-1" />
                                                </div>
                                                <div className="text-2xl lg:text-3xl font-bold text-white mb-1">{value}</div>
                                                <div className="text-sm text-gray-400">{config.label}</div>
                                            </div>
                                        );
                                    })}
                                </div>

                                {/* CTA Buttons */}
                                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                    <button className="group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold rounded-xl hover:from-orange-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-2xl">
                                        <span className="flex items-center gap-2">
                                            <RocketLaunchIcon className="w-5 h-5 group-hover:animate-bounce" />
                                            شروع پروژه رایگان
                                            <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </span>
                                        <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-pink-600 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity -z-10"></div>
                                    </button>

                                    <button className="group px-8 py-4 border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                                        <span className="flex items-center gap-2">
                                            <PlayCircleIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                            نمونه کارها
                                        </span>
                                    </button>
                                </div>

                                {/* Trust Indicators */}
                                <div className="flex items-center justify-center lg:justify-start gap-6 text-sm text-gray-400">
                                    <div className="flex items-center gap-1">
                                        <ShieldCheckIcon className="w-4 h-4 text-green-400" />
                                        <span>گارانتی کیفیت</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <ClockIcon className="w-4 h-4 text-blue-400" />
                                        <span>پشتیبانی ۲۴/۷</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <CurrencyDollarIcon className="w-4 h-4 text-yellow-400" />
                                        <span>قیمت مناسب</span>
                                    </div>
                                </div>
                            </div>

                            {/* Hero Visual */}
                            <div className="relative">
                                <div className="relative mx-auto max-w-lg">
                                    {/* Main Device */}
                                    <div className="relative transform rotate-3 hover:rotate-0 transition-transform duration-700">
                                        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 shadow-2xl border border-gray-700">
                                            <div className="bg-gradient-to-br from-orange-400 via-pink-400 to-purple-400 rounded-2xl p-6 text-white">
                                                <div className="space-y-4">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                                                            <RocketLaunchIcon className="w-6 h-6" />
                                                        </div>
                                                        <div>
                                                            <h3 className="font-bold">دیزاین پرداز</h3>
                                                            <p className="text-sm opacity-90">طراحی وب حرفه‌ای</p>
                                                        </div>
                                                    </div>

                                                    <div className="space-y-3">
                                                        <div className="bg-white/10 rounded-lg p-3">
                                                            <div className="flex items-center justify-between">
                                                                <span className="text-sm">میزان فروش</span>
                                                                <span className="text-green-300">+۲۴۵%</span>
                                                            </div>
                                                            <div className="mt-2 bg-white/20 rounded-full h-2">
                                                                <div className="bg-green-400 h-2 rounded-full w-3/4 animate-pulse"></div>
                                                            </div>
                                                        </div>

                                                        <div className="bg-white/10 rounded-lg p-3">
                                                            <div className="flex items-center justify-between">
                                                                <span className="text-sm">بازدیدکنندگان</span>
                                                                <span className="text-blue-300">+۱۸۹%</span>
                                                            </div>
                                                            <div className="mt-2 bg-white/20 rounded-full h-2">
                                                                <div className="bg-blue-400 h-2 rounded-full w-4/5 animate-pulse"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Floating Elements */}
                                    <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl flex items-center justify-center shadow-lg animate-bounce">
                                        <StarIcon className="w-8 h-8 text-white fill-current" />
                                    </div>

                                    <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-green-400 to-blue-400 rounded-2xl flex items-center justify-center shadow-lg animate-bounce" style={{animationDelay: '1s'}}>
                                        <CheckCircleIcon className="w-8 h-8 text-white" />
                                    </div>

                                    <div className="absolute top-1/2 -left-8 w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-400 rounded-xl flex items-center justify-center shadow-lg animate-pulse">
                                        <HeartIcon className="w-6 h-6 text-white fill-current" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Scroll Indicator */}
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                        <ChevronDownIcon className="w-6 h-6 text-white/60" />
                    </div>
                </section>

                {/* Services Section */}
                <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-white" data-animate>
                    <div className="container mx-auto px-4">

                        {/* Section Header */}
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-4">
                                <SparklesIcon className="w-4 h-4" />
                                <span>خدمات ما</span>
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
                                خدماتی که
                                <span className="text-transparent bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text"> کسب‌وکار </span>
                                شما را متحول می‌کند
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                از طراحی وب گرفته تا سئو و بازاریابی دیجیتال، تمام نیازهای آنلاین کسب‌وکار شما را پوشش می‌دهیم
                            </p>
                        </div>

                        {/* Services Grid */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {services.map((service, index) => (
                                <div
                                    key={service.id}
                                    className={`group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 hover:border-transparent ${
                                        service.popular ? 'border-orange-200 ring-4 ring-orange-100' : 'border-gray-100'
                                    }`}
                                    onMouseEnter={() => setActiveService(index)}
                                >
                                    {/* Popular Badge */}
                                    {service.popular && (
                                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                            <div className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                                                محبوب‌ترین
                                            </div>
                                        </div>
                                    )}

                                    {/* Service Icon */}
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                        <service.icon className="w-8 h-8 text-white" />
                                    </div>

                                    {/* Service Content */}
                                    <div className="space-y-4">
                                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-pink-500 group-hover:bg-clip-text transition-all duration-300">
                                            {service.title}
                                        </h3>

                                        <p className="text-gray-600 leading-relaxed">
                                            {service.description}
                                        </p>

                                        <div className="text-2xl font-black text-orange-500">
                                            {service.price}
                                        </div>

                                        {/* Features List */}
                                        <ul className="space-y-2">
                                            {service.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                                                    <CheckCircleIcon className="w-4 h-4 text-green-500" />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        {/* CTA Button */}
                                        <button className={`w-full py-3 rounded-xl font-bold transition-all duration-300 ${
                                            service.popular
                                                ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white hover:from-orange-600 hover:to-pink-600 shadow-lg hover:shadow-xl'
                                                : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                                        }`}>
                                            شروع پروژه
                                        </button>
                                    </div>

                                    {/* Hover Effect Background */}
                                    <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300`}></div>
                                </div>
                            ))}
                        </div>

                        {/* Bottom CTA */}
                        <div className="text-center mt-12">
                            <p className="text-gray-600 mb-6">نمی‌دانید کدام سرویس برای شما مناسب است؟</p>
                            <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold rounded-xl hover:from-orange-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                                <ChatBubbleLeftRightIcon className="w-5 h-5" />
                                مشاوره رایگان دریافت کنید
                            </button>
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <section className="py-20 bg-gradient-to-br from-slate-900 to-gray-900 text-white" data-animate>
                    <div className="container mx-auto px-4">

                        {/* Section Header */}
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/20 text-orange-300 rounded-full text-sm font-medium mb-4">
                                <CogIcon className="w-4 h-4" />
                                <span>فرآیند کار</span>
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-black mb-6">
                                چگونه پروژه شما را
                                <span className="text-transparent bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text"> اجرا می‌کنیم؟</span>
                            </h2>
                            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                                در ۴ مرحله ساده، پروژه شما را از ایده تا اجرا و تحویل همراهی می‌کنیم
                            </p>
                        </div>

                        {/* Process Steps */}
                        <div className="relative">
                            {/* Connection Line */}
                            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 transform -translate-y-1/2"></div>

                            <div className="grid lg:grid-cols-4 gap-8">
                                {processSteps.map((step, index) => (
                                    <div key={step.step} className="relative">

                                        {/* Step Card */}
                                        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-2 border border-white/10">

                                            {/* Step Number */}
                                            <div className="relative mx-auto w-16 h-16 bg-gradient-to-r from-orange-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                                                <span className="text-2xl font-black text-white">{step.step}</span>
                                                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-pink-600 rounded-2xl blur-lg opacity-50"></div>
                                            </div>

                                            {/* Step Icon */}
                                            <div className="w-12 h-12 mx-auto mb-4">
                                                <step.icon className="w-full h-full text-orange-400" />
                                            </div>

                                            {/* Step Content */}
                                            <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                            <p className="text-gray-300 text-sm leading-relaxed mb-4">{step.description}</p>

                                            {/* Duration */}
                                            <div className="inline-flex items-center gap-1 px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-xs font-medium">
                                                <ClockIcon className="w-3 h-3" />
                                                <span>{step.duration}</span>
                                            </div>
                                        </div>

                                        {/* Arrow (Desktop) */}
                                        {index < processSteps.length - 1 && (
                                            <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                                                <ArrowRightIcon className="w-8 h-8 text-orange-400" />
                                            </div>
                                        )}

                                        {/* Arrow (Mobile) */}
                                        {index < processSteps.length - 1 && (
                                            <div className="lg:hidden flex justify-center my-4">
                                                <ChevronDownIcon className="w-6 h-6 text-orange-400" />
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Bottom CTA */}
                        <div className="text-center mt-16">
                            <p className="text-gray-300 mb-6">آماده شروع هستید؟</p>
                            <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold rounded-xl hover:from-orange-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-2xl">
                                <CalendarDaysIcon className="w-5 h-5" />
                                همین الان شروع کنید
                            </button>
                        </div>
                    </div>
                </section>

                {/* Why Choose Us Section */}
                <section className="py-20 bg-gradient-to-br from-orange-50 via-white to-pink-50" data-animate>
                    <div className="container mx-auto px-4">

                        {/* Section Header */}
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-100 to-pink-100 text-orange-600 rounded-full text-sm font-medium mb-4">
                                <TrophyIcon className="w-4 h-4" />
                                <span>مزیت‌های ما</span>
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
                                چرا
                                <span className="text-transparent bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text"> دیزاین پرداز </span>
                                انتخاب کنید؟
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                با ۸ سال تجربه و صدها پروژه موفق، ما بهترین کیفیت را با مناسب‌ترین قیمت ارائه می‌دهیم
                            </p>
                        </div>

                        {/* Features Grid */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: RocketLaunchIcon,
                                    title: 'سرعت بالا',
                                    description: 'تحویل پروژه در کمترین زمان ممکن با بالاترین کیفیت',
                                    gradient: 'from-blue-500 to-purple-500'
                                },
                                {
                                    icon: ShieldCheckIcon,
                                    title: 'گارانتی کیفیت',
                                    description: '۶ ماه گارانتی و پشتیبانی رایگان برای تمام پروژه‌ها',
                                    gradient: 'from-green-500 to-blue-500'
                                },
                                {
                                    icon: CurrencyDollarIcon,
                                    title: 'قیمت منصفانه',
                                    description: 'بهترین قیمت در بازار با امکان پرداخت اقساطی',
                                    gradient: 'from-yellow-500 to-orange-500'
                                },
                                {
                                    icon: UserGroupIcon,
                                    title: 'تیم متخصص',
                                    description: 'تیمی از بهترین متخصصان طراحی وب و سئو',
                                    gradient: 'from-pink-500 to-red-500'
                                },
                                {
                                    icon: ChatBubbleLeftRightIcon,
                                    title: 'پشتیبانی ۲۴/۷',
                                    description: 'پشتیبانی شبانه‌روزی حتی در تعطیلات',
                                    gradient: 'from-purple-500 to-pink-500'
                                },
                                {
                                    icon: ChartBarIcon,
                                    title: 'نتایج اثبات شده',
                                    description: 'افزایش ۳ برابری فروش و ترافیک مشتریان ما',
                                    gradient: 'from-indigo-500 to-purple-500'
                                }
                            ].map((feature, index) => (
                                <div
                                    key={index}
                                    className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-gray-100 hover:border-transparent"
                                >
                                    {/* Feature Icon */}
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                        <feature.icon className="w-8 h-8 text-white" />
                                    </div>

                                    {/* Feature Content */}
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-pink-500 group-hover:bg-clip-text transition-all duration-300">
                                        {feature.title}
                                    </h3>

                                    <p className="text-gray-600 leading-relaxed">
                                        {feature.description}
                                    </p>

                                    {/* Hover Effect Background */}
                                    <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300`}></div>
                                </div>
                            ))}
                        </div>

                        {/* Stats Section */}
                        <div className="mt-20 bg-gradient-to-r from-orange-500 to-pink-500 rounded-3xl p-8 lg:p-12 text-white">
                            <div className="grid md:grid-cols-4 gap-8 text-center">
                                <div>
                                    <div className="text-4xl lg:text-5xl font-black mb-2">۲۵۰+</div>
                                    <div className="text-orange-100">پروژه موفق</div>
                                </div>
                                <div>
                                    <div className="text-4xl lg:text-5xl font-black mb-2">۱۸۰+</div>
                                    <div className="text-orange-100">مشتری راضی</div>
                                </div>
                                <div>
                                    <div className="text-4xl lg:text-5xl font-black mb-2">۹۸%</div>
                                    <div className="text-orange-100">میزان رضایت</div>
                                </div>
                                <div>
                                    <div className="text-4xl lg:text-5xl font-black mb-2">۸+</div>
                                    <div className="text-orange-100">سال تجربه</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

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
