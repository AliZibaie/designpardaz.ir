'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
    PhoneIcon,
    EnvelopeIcon,
    MapPinIcon,
    ClockIcon,
    ArrowUpIcon,
    BuildingOfficeIcon,
    TrophyIcon,
    StarIcon,
    HeartIcon,
    ShieldCheckIcon,
    CheckBadgeIcon,
    GlobeAltIcon,
    ChatBubbleLeftRightIcon,
    CodeBracketIcon,
    MagnifyingGlassIcon,
    PhotoIcon,
    PaintBrushIcon,
    ShoppingCartIcon,
    CogIcon,
    LightBulbIcon,
    RocketLaunchIcon,
    AcademicCapIcon,
    NewspaperIcon,
    InformationCircleIcon,
    BanknotesIcon,
    HandRaisedIcon,
    SparklesIcon,
    FireIcon,
    BoltIcon,
    CommandLineIcon,
    CpuChipIcon,
    CurrencyDollarIcon,
} from '@heroicons/react/24/outline';

// Company Information
const companyInfo = {
    name: 'دیزاین پرداز',
    englishName: 'Design Pardaz',
    slogan: 'طراحی وب حرفه‌ای',
    description: 'دیزاین پرداز یک تیم جوان و خلاق در زمینه طراحی وب، سئو و طراحی گرافیک است. ما با استفاده از جدیدترین تکنولوژی‌ها و بهترین شیوه‌های طراحی، کسب‌وکارها را در فضای دیجیتال موفق می‌کنیم. هدف ما ارائه خدمات باکیفیت و ایجاد تجربه‌های بصری فوق‌العاده است.',
    phone: '+98-21-3333-4444',
    phoneDisplay: '021-3333-4444',
    email: 'info@designpardaz.ir',
    address: 'تهران، ایران',
    postalCode: '1234567890',
    website: 'https://designpardaz.ir',
    establishedYear: '۱۴۰۳',
    workingHours: {
        weekdays: 'شنبه تا چهارشنبه: ۹:۰۰ - ۱۸:۰۰',
        thursday: 'پنج‌شنبه: ۹:۰۰ - ۱۴:۰۰',
        friday: 'جمعه: تعطیل'
    },
    socialMedia: {
        instagram: 'https://instagram.com/designpardaz.ir',
        telegram: 'https://telegram.me/designpardaz',
        whatsapp: 'https://wa.me/989123334444',
        linkedin: 'https://linkedin.com/company/designpardaz'
    },
    stats: {
        projects: 'جدید',
        clients: 'آماده همکاری',
        experience: 'تیم متخصص',
        satisfaction: 'کیفیت بالا'
    }
};

// Services Categories
const servicesData = [
    {
        category: 'طراحی و توسعه وب',
        icon: CodeBracketIcon,
        services: [
            { name: 'طراحی سایت شرکتی', href: '/services/web-design#corporate', popular: true },
            { name: 'فروشگاه اینترنتی', href: '/services/web-design#ecommerce', popular: true },
            { name: 'طراحی سایت شخصی', href: '/services/web-design#personal' },
            { name: 'وب اپلیکیشن', href: '/services/web-design#webapp', popular: true },
            { name: 'طراحی لندینگ پیج', href: '/services/web-design#landing' },
            { name: 'ریدیزاین سایت', href: '/services/web-design#redesign' }
        ]
    },
    {
        category: 'سئو و بهینه‌سازی',
        icon: MagnifyingGlassIcon,
        services: [
            { name: 'سئو تکنیکال', href: '/services/seo#technical', popular: true },
            { name: 'تولید محتوای سئو', href: '/services/seo#content', popular: true },
            { name: 'سئو محلی', href: '/services/seo#local' },
            { name: 'تحلیل و گزارش سئو', href: '/services/seo#analytics' },
            { name: 'بهینه‌سازی سرعت', href: '/services/seo#speed' },
            { name: 'Link Building', href: '/services/seo#linkbuilding' }
        ]
    },
    {
        category: 'طراحی گرافیک',
        icon: PhotoIcon,
        services: [
            { name: 'طراحی لوگو', href: '/services/graphic-design#logo', popular: true },
            { name: 'هویت بصری', href: '/services/graphic-design#branding', popular: true },
            { name: 'طراحی کاتالوگ', href: '/services/graphic-design#catalog' },
            { name: 'بنر و پوستر', href: '/services/graphic-design#banner' },
            { name: 'طراحی بروشور', href: '/services/graphic-design#brochure' },
            { name: 'طراحی UI/UX', href: '/services/graphic-design#ui-ux', popular: true },
            { name: 'موشن گرافیک', href: '/services/graphic-design#motion' }
        ]
    }
];

// Quick Links
const quickLinks = [
    { name: 'درباره ما', href: '/about', icon: InformationCircleIcon },
    { name: 'نمونه کارها', href: '/portfolio', icon: TrophyIcon },
    { name: 'مقالات آموزشی', href: '/blog', icon: NewspaperIcon },
    { name: 'تماس با ما', href: '/contact', icon: ChatBubbleLeftRightIcon },
    { name: 'درخواست پروژه', href: '/request-project', icon: HandRaisedIcon },
    { name: 'مشاوره رایگان', href: '/consultation', icon: LightBulbIcon },
    { name: 'قیمت خدمات', href: '/pricing', icon: BanknotesIcon },
    { name: 'پشتیبانی', href: '/support', icon: HeartIcon }
];

// Resources Links
const resourcesLinks = [
    { name: 'راهنمای سئو', href: '/guides/seo', icon: AcademicCapIcon },
    { name: 'آموزش طراحی وب', href: '/guides/web-design', icon: CodeBracketIcon },
    { name: 'ابزارهای طراحی', href: '/tools', icon: CogIcon },
    { name: 'چک‌لیست سئو', href: '/seo-checklist', icon: CheckBadgeIcon },
    { name: 'کدهای رنگ', href: '/color-codes', icon: PaintBrushIcon },
    { name: 'فونت‌های فارسی', href: '/persian-fonts', icon: CommandLineIcon },
    { name: 'آیکن‌های رایگان', href: '/free-icons', icon: SparklesIcon },
    { name: 'الهام طراحی', href: '/design-inspiration', icon: FireIcon }
];

// Industries We Serve
const industries = [
    { name: 'پزشکی و سلامت', href: '/industries/medical', icon: HeartIcon },
    { name: 'آموزش و دانشگاه', href: '/industries/education', icon: AcademicCapIcon },
    { name: 'املاک و مستغلات', href: '/industries/real-estate', icon: BuildingOfficeIcon },
    { name: 'رستوران و کافه', href: '/industries/restaurant', icon: BuildingOfficeIcon },
    { name: 'فروشگاهی و تجاری', href: '/industries/retail', icon: ShoppingCartIcon },
    { name: 'خدمات مالی', href: '/industries/finance', icon: CurrencyDollarIcon },
    { name: 'فناوری اطلاعات', href: '/industries/technology', icon: CpuChipIcon },
    { name: 'گردشگری و هتل', href: '/industries/tourism', icon: GlobeAltIcon }
];

// Trust Badges
const trustBadges = [
    { name: 'تیم متخصص', image: '/images/badges/team.png' },
    { name: 'کیفیت بالا', image: '/images/badges/quality.png' },
    { name: 'خدمات مطمئن', image: '/images/badges/security.png' },
    { name: 'پشتیبانی ۲۴/۷', image: '/images/badges/support.png' }
];

// Payment Methods
const paymentMethods = [
    { name: 'درگاه بانک ملی', image: '/images/payment/melli.png' },
    { name: 'درگاه پارسیان', image: '/images/payment/parsian.png' },
    { name: 'درگاه زرین‌پال', image: '/images/payment/zarinpal.png' },
    { name: 'درگاه پی‌پال', image: '/images/payment/paypal.png' }
];

// Social Media Links
const socialLinks = [
    {
        name: 'اینستاگرام',
        href: 'https://instagram.com/designpardaz.ir',
        icon: (props: React.SVGProps<SVGSVGElement>) => (
            <svg viewBox="0 0 24 24" fill="currentColor" className={props.className}>
                <path d="M12.017 0C8.396 0 7.929.013 6.71.072 5.493.131 4.677.333 3.982.63a5.988 5.988 0 0 0-2.169 1.408A5.988 5.988 0 0 0 .407 4.217c-.297.695-.499 1.511-.558 2.728C-.072 8.164-.059 8.631-.059 12.252c0 3.621-.013 4.088.072 5.307.059 1.217.261 2.033.558 2.728.305.852.708 1.582 1.408 2.169a5.988 5.988 0 0 0 2.169 1.408c.695.297 1.511.499 2.728.558 1.219.059 1.686.072 5.307.072 3.621 0 4.088.013 5.307-.072 1.217-.059 2.033-.261 2.728-.558a5.988 5.988 0 0 0 2.169-1.408 5.988 5.988 0 0 0 1.408-2.169c.297-.695.499-1.511.558-2.728.059-1.219.072-1.686.072-5.307 0-3.621.013-4.088-.072-5.307-.059-1.217-.261-2.033-.558-2.728a5.988 5.988 0 0 0-1.408-2.169A5.988 5.988 0 0 0 19.728.63C19.033.333 18.217.131 16.998.072 15.779.013 15.312 0 11.691 0h.326zM10.943 2.179c.329-.002.695-.002 1.074-.002 3.556 0 3.98.013 5.384.072 1.3.059 2.006.274 2.477.456.622.242 1.066.531 1.532.997.466.466.755.91.997 1.532.182.471.397 1.177.456 2.477.059 1.404.072 1.828.072 5.384 0 3.556-.013 3.98-.072 5.384-.059 1.3-.274 2.006-.456 2.477a4.133 4.133 0 0 1-.997 1.532 4.133 4.133 0 0 1-1.532.997c-.471.182-1.177.397-2.477.456-1.404.059-1.828.072-5.384.072-3.556 0-3.98-.013-5.384-.072-1.3-.059-2.006-.274-2.477-.456a4.133 4.133 0 0 1-1.532-.997 4.133 4.133 0 0 1-.997-1.532c-.182-.471-.397-1.177-.456-2.477-.059-1.404-.072-1.828-.072-5.384 0-3.556.013-3.98.072-5.384.059-1.3.274-2.006.456-2.477.242-.622.531-1.066.997-1.532a4.133 4.133 0 0 1 1.532-.997c.471-.182 1.177-.397 2.477-.456 1.228-.056 1.705-.07 4.31-.07l.054.002zm.266 1.267c-.329.002-.622.002-.954.002-3.556 0-3.98.013-5.384.072-1.3.059-2.006.274-2.477.456-.622.242-1.066.531-1.532.997a4.133 4.133 0 0 0-.997 1.532c-.182.471-.397 1.177-.456 2.477-.059 1.404-.072 1.828-.072 5.384 0 3.556.013 3.98.072 5.384.059 1.3.274 2.006.456 2.477.242.622.531 1.066.997 1.532.466.466.91.755 1.532.997.471.182 1.177.397 2.477.456 1.404.059 1.828.072 5.384.072 3.556 0 3.98-.013 5.384-.072 1.3-.059 2.006-.274 2.477-.456.622-.242 1.066-.531 1.532-.997a4.133 4.133 0 0 0 .997-1.532c.182-.471.397-1.177.456-2.477.059-1.404.072-1.828.072-5.384 0-3.556-.013-3.98-.072-5.384-.059-1.3-.274-2.006-.456-2.477a4.133 4.133 0 0 0-.997-1.532 4.133 4.133 0 0 0-1.532-.997c-.471-.182-1.177-.397-2.477-.456-1.404-.059-1.828-.072-5.384-.072zm-.081 1.802a3.81 3.81 0 1 1 0 7.62 3.81 3.81 0 0 1 0-7.62zm0 6.281a2.471 2.471 0 1 0 0-4.942 2.471 2.471 0 0 0 0 4.942zm4.846-6.406a.89.89 0 1 1-1.78 0 .89.89 0 0 1 1.78 0z"/>
            </svg>
        ),
        color: 'hover:text-pink-500'
    },
    {
        name: 'تلگرام',
        href: 'https://telegram.me/designpardaz',
        icon: (props: React.SVGProps<SVGSVGElement>) => (
            <svg viewBox="0 0 24 24" fill="currentColor" className={props.className}>
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
            </svg>
        ),
        color: 'hover:text-cyan-400'
    },
    {
        name: 'واتساپ',
        href: 'https://wa.me/989123334444',
        icon: (props: React.SVGProps<SVGSVGElement>) => (
            <svg viewBox="0 0 24 24" fill="currentColor" className={props.className}>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
        ),
        color: 'hover:text-green-500'
    },
    {
        name: 'لینکدین',
        href: 'https://linkedin.com/company/designpardaz',
        icon: (props: React.SVGProps<SVGSVGElement>) => (
            <svg viewBox="0 0 24 24" fill="currentColor" className={props.className}>
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
        ),
        color: 'hover:text-cyan-500'
    }
];

interface FooterProps {
    className?: string;
}

export default function Footer({ className = '' }: FooterProps) {
    const [showScrollTop, setShowScrollTop] = useState(false);
    const currentYear = new Date().getFullYear();
    const currentPersianYear = currentYear - 621;

    // Scroll to top detection
    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 400);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            {/* SEO Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": companyInfo.name,
                        "alternateName": companyInfo.englishName,
                        "description": companyInfo.description,
                        "url": companyInfo.website,
                        "logo": `${companyInfo.website}/logo.png`,
                        "foundingDate": "2024",
                        "address": {
                            "@type": "PostalAddress",
                            "addressCountry": "IR",
                            "addressLocality": "Tehran",
                            "postalCode": companyInfo.postalCode
                        },
                        "contactPoint": [
                            {
                                "@type": "ContactPoint",
                                "telephone": companyInfo.phone,
                                "contactType": "customer service",
                                "availableLanguage": ["Persian", "English"],
                                "hoursAvailable": {
                                    "@type": "OpeningHoursSpecification",
                                    "dayOfWeek": ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday"],
                                    "opens": "09:00",
                                    "closes": "18:00"
                                }
                            }
                        ],
                        "sameAs": [
                            companyInfo.socialMedia.instagram,
                            companyInfo.socialMedia.telegram,
                            companyInfo.socialMedia.linkedin,
                            companyInfo.socialMedia.whatsapp
                        ],
                        "hasOfferCatalog": {
                            "@type": "OfferCatalog",
                            "name": "خدمات دیزاین پرداز",
                            "itemListElement": servicesData.flatMap(category =>
                                category.services.map(service => ({
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": service.name,
                                        "url": `${companyInfo.website}${service.href}`
                                    }
                                }))
                            )
                        }
                    })
                }}
            />

            <footer
                className={`
                    relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900
                    text-white ${className}
                `}
                role="contentinfo"
                aria-label="اطلاعات سایت و لینک‌های مفید"
                itemScope
                itemType="https://schema.org/Organization"
            >
                {/* Background Elements */}
                <div className="absolute inset-0">
                    {/* Gradient Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/10 via-teal-500/5 to-cyan-700/10" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(34,211,238,0.1),transparent)]" />

                    {/* Grid Pattern */}
                    <div className="absolute inset-0 opacity-5">
                        <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.1)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-40 right-20 w-48 h-48 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                </div>

                <div className="relative z-10">
                    {/* Newsletter Section */}
                    <div className="border-b border-gray-800">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                            <div className="bg-gradient-to-r from-cyan-600 to-teal-600 rounded-2xl p-8 lg:p-12">
                                <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                                    <div className="text-center lg:text-right">
                                        <h3 className="text-2xl lg:text-3xl font-bold mb-3">
                                            از آخرین اخبار و آموزش‌ها باخبر شوید
                                        </h3>
                                        <p className="text-cyan-100 text-lg">
                                            عضویت در خبرنامه دیزاین پرداز و دریافت مطالب ارزشمند طراحی وب و سئو
                                        </p>
                                    </div>
                                    <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto lg:min-w-[400px]">
                                        <input
                                            type="email"
                                            placeholder="آدرس ایمیل شما..."
                                            className="flex-1 px-6 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-cyan-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                                            dir="ltr"
                                        />
                                        <button className="px-8 py-4 bg-white text-cyan-600 rounded-xl font-bold hover:bg-cyan-50 transition-all duration-300 hover:scale-105 whitespace-nowrap">
                                            عضویت در خبرنامه
                                        </button>
                                    </div>
                                </div>
                                <div className="mt-6 flex items-center justify-center lg:justify-start gap-6 text-sm text-cyan-100">
                                    <div className="flex items-center gap-2">
                                        <CheckBadgeIcon className="w-4 h-4 text-green-300" />
                                        <span>بدون اسپم</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <ShieldCheckIcon className="w-4 h-4 text-green-300" />
                                        <span>حفظ حریم خصوصی</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <SparklesIcon className="w-4 h-4 text-yellow-300" />
                                        <span>محتوای ارزشمند</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Footer Content */}
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8 lg:gap-12">

                            {/* Company Information */}
                            <div className="xl:col-span-2 space-y-8">
                                {/* Brand */}
                                <Link
                                    href="/public"
                                    className="inline-flex items-center gap-4 group"
                                    itemProp="url"
                                >
                                    <div className="relative">
                                        <Image
                                            src="/logo.png"
                                            alt={`لوگو ${companyInfo.name}`}
                                            width={64}
                                            height={64}
                                            className="brightness-110 group-hover:scale-110 transition-transform duration-300"
                                            itemProp="logo"
                                        />
                                        <div className="absolute -top-2 -right-2 w-4 h-4 bg-cyan-400 rounded-full animate-pulse"></div>
                                    </div>
                                    <div>
                                        <h2
                                            className="text-2xl lg:text-3xl font-black bg-gradient-to-r from-white via-gray-100 to-cyan-400 bg-clip-text text-transparent"
                                            itemProp="name"
                                        >
                                            {companyInfo.name}
                                        </h2>
                                        <p
                                            className="text-gray-300 font-medium"
                                            itemProp="slogan"
                                        >
                                            {companyInfo.slogan}
                                        </p>
                                        <div className="flex items-center gap-1 mt-1">
                                            {[1,2,3,4,5].map((star) => (
                                                <StarIcon key={star} className="w-4 h-4 text-cyan-400 fill-current" />
                                            ))}
                                            <span className="text-xs text-gray-400 mr-2">تیم جدید و خلاق</span>
                                        </div>
                                    </div>
                                </Link>

                                {/* Description */}
                                <p
                                    className="text-gray-300 leading-relaxed text-sm lg:text-base"
                                    itemProp="description"
                                >
                                    {companyInfo.description}
                                </p>

                                {/* Company Stats */}
                                <div className="grid grid-cols-2 gap-4">
                                    {Object.entries(companyInfo.stats).map(([key, value], index) => {
                                        const statConfig = {
                                            projects: { label: 'پروژه‌های نو', icon: TrophyIcon, color: 'text-cyan-400' },
                                            clients: { label: 'آماده همکاری', icon: HeartIcon, color: 'text-teal-400' },
                                            experience: { label: 'تیم متخصص', icon: CheckBadgeIcon, color: 'text-green-400' },
                                            satisfaction: { label: 'کیفیت بالا', icon: StarIcon, color: 'text-yellow-400' }
                                        };

                                        const config = statConfig[key as keyof typeof statConfig];
                                        const IconComponent = config.icon;

                                        return (
                                            <div
                                                key={index}
                                                className="text-center p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 cursor-default group"
                                            >
                                                <div className="flex items-center justify-center mb-2">
                                                    <IconComponent className={`w-5 h-5 ${config.color} group-hover:scale-110 transition-transform`} />
                                                </div>
                                                <div className={`text-lg font-bold ${config.color}`}>{value}</div>
                                                <div className="text-xs text-gray-400 font-medium">{config.label}</div>
                                            </div>
                                        );
                                    })}
                                </div>

                                {/* Trust Badges */}
                                <div>
                                    <h3 className="text-sm font-semibold text-gray-300 mb-4 flex items-center gap-2">
                                        <ShieldCheckIcon className="w-4 h-4 text-green-400" />
                                        مزایای همکاری با ما
                                    </h3>
                                    <div className="grid grid-cols-4 gap-3">
                                        {trustBadges.map((badge, index) => (
                                            <div
                                                key={index}
                                                className="bg-white/90 p-3 rounded-xl hover:bg-white transition-all duration-300 cursor-help group aspect-square flex items-center justify-center"
                                                title={badge.name}
                                            >
                                                <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-teal-500 rounded group-hover:scale-110 transition-transform"></div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Payment Methods */}
                                <div>
                                    <h3 className="text-sm font-semibold text-gray-300 mb-4 flex items-center gap-2">
                                        <CurrencyDollarIcon className="w-4 h-4 text-green-400" />
                                        روش‌های پرداخت
                                    </h3>
                                    <div className="grid grid-cols-4 gap-3">
                                        {paymentMethods.map((method, index) => (
                                            <div
                                                key={index}
                                                className="bg-white/90 p-3 rounded-xl hover:bg-white transition-all duration-300 cursor-help group aspect-square flex items-center justify-center"
                                                title={method.name}
                                            >
                                                <div className="w-8 h-8 bg-gradient-to-br from-slate-400 to-gray-500 rounded group-hover:scale-110 transition-transform"></div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Services Menu */}
                            <div className="space-y-6">
                                <h3 className="text-lg font-bold text-cyan-400 flex items-center gap-2">
                                    <RocketLaunchIcon className="w-5 h-5" />
                                    خدمات ما
                                </h3>

                                {servicesData.map((category, categoryIndex) => (
                                    <div key={categoryIndex} className="space-y-3">
                                        {/* Category Header */}
                                        <div className="flex items-center gap-2 text-sm font-semibold text-gray-300 border-b border-gray-700 pb-2">
                                            <category.icon className="w-4 h-4 text-teal-400" />
                                            <span>{category.category}</span>
                                        </div>

                                        {/* Services List */}
                                        <ul className="space-y-2">
                                            {category.services.map((service, serviceIndex) => (
                                                <li key={serviceIndex}>
                                                    <Link
                                                        href={service.href}
                                                        className="group flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-all duration-300 text-sm py-1 hover:pr-2"
                                                    >
                                                        <span className="w-1 h-1 bg-teal-400 rounded-full group-hover:w-2 group-hover:h-2 transition-all"></span>
                                                        <span>{service.name}</span>
                                                        {service.popular && (
                                                            <span className="px-2 py-0.5 bg-cyan-400 text-slate-900 text-xs rounded-full font-medium">
                                                                محبوب
                                                            </span>
                                                        )}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>

                            {/* Quick Links & Resources */}
                            <div className="space-y-6">
                                {/* Quick Links */}
                                <div>
                                    <h3 className="text-lg font-bold text-cyan-400 flex items-center gap-2 mb-4">
                                        <BoltIcon className="w-5 h-5" />
                                        دسترسی سریع
                                    </h3>
                                    <ul className="space-y-2">
                                        {quickLinks.map((link, index) => (
                                            <li key={index}>
                                                <Link
                                                    href={link.href}
                                                    className="group flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-all duration-300 text-sm py-1 hover:pr-2"
                                                >
                                                    <link.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                                    <span>{link.name}</span>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Resources */}
                                <div>
                                    <h3 className="text-lg font-bold text-cyan-400 flex items-center gap-2 mb-4">
                                        <AcademicCapIcon className="w-5 h-5" />
                                        منابع آموزشی
                                    </h3>
                                    <ul className="space-y-2">
                                        {resourcesLinks.slice(0, 6).map((resource, index) => (
                                            <li key={index}>
                                                <Link
                                                    href={resource.href}
                                                    className="group flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-all duration-300 text-sm py-1 hover:pr-2"
                                                >
                                                    <resource.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                                    <span>{resource.name}</span>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Industries */}
                                <div>
                                    <h3 className="text-lg font-bold text-cyan-400 flex items-center gap-2 mb-4">
                                        <BuildingOfficeIcon className="w-5 h-5" />
                                        صنایع تحت پوشش
                                    </h3>
                                    <ul className="space-y-2">
                                        {industries.slice(0, 6).map((industry, index) => (
                                            <li key={index}>
                                                <Link
                                                    href={industry.href}
                                                    className="group flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-all duration-300 text-sm py-1 hover:pr-2"
                                                >
                                                    <industry.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                                    <span>{industry.name}</span>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Contact Information */}
                            <div className="space-y-6">
                                {/* Contact Details */}
                                <div>
                                    <h3 className="text-lg font-bold text-cyan-400 flex items-center gap-2 mb-4">
                                        <ChatBubbleLeftRightIcon className="w-5 h-5" />
                                        تماس با ما
                                    </h3>

                                    <div className="space-y-4">
                                        {/* Phone */}
                                        <a
                                            href={`tel:${companyInfo.phone}`}
                                            className="group flex items-start gap-3 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-[1.02]"
                                            itemProp="telephone"
                                        >
                                            <div className="p-2 bg-green-500/20 text-green-400 rounded-lg group-hover:bg-green-500 group-hover:text-white transition-colors">
                                                <PhoneIcon className="w-4 h-4" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="text-sm font-semibold text-white">تماس مستقیم</div>
                                                <div className="text-gray-300 text-sm" dir="ltr">{companyInfo.phoneDisplay}</div>
                                                <div className="text-xs text-gray-400">پاسخگویی ۲۴/۷</div>
                                            </div>
                                        </a>

                                        {/* Email */}
                                        <a
                                            href={`mailto:${companyInfo.email}`}
                                            className="group flex items-start gap-3 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-[1.02]"
                                            itemProp="email"
                                        >
                                            <div className="p-2 bg-cyan-500/20 text-cyan-400 rounded-lg group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                                                <EnvelopeIcon className="w-4 h-4" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="text-sm font-semibold text-white">ایمیل</div>
                                                <div className="text-gray-300 text-sm break-all">{companyInfo.email}</div>
                                                <div className="text-xs text-gray-400">پاسخ تا ۲ ساعت</div>
                                            </div>
                                        </a>

                                        {/* Address */}
                                        <div
                                            className="flex items-start gap-3 p-4 bg-white/5 rounded-xl"
                                            itemProp="address"
                                            itemScope
                                            itemType="https://schema.org/PostalAddress"
                                        >
                                            <div className="p-2 bg-purple-500/20 text-purple-400 rounded-lg">
                                                <MapPinIcon className="w-4 h-4" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="text-sm font-semibold text-white">آدرس</div>
                                                <div className="text-gray-300 text-sm" itemProp="addressLocality">
                                                    {companyInfo.address}
                                                </div>
                                                <div className="text-xs text-gray-400">خدمات سراسری</div>
                                            </div>
                                        </div>

                                        {/* Working Hours */}
                                        <div className="flex items-start gap-3 p-4 bg-white/5 rounded-xl">
                                            <div className="p-2 bg-orange-500/20 text-orange-400 rounded-lg">
                                                <ClockIcon className="w-4 h-4" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="text-sm font-semibold text-white">ساعات کاری</div>
                                                <div className="text-gray-300 text-xs space-y-1">
                                                    <div>{companyInfo.workingHours.weekdays}</div>
                                                    <div>{companyInfo.workingHours.thursday}</div>
                                                    <div className="text-red-400">{companyInfo.workingHours.friday}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Social Media */}
                                <div>
                                    <h3 className="text-sm font-semibold text-gray-300 mb-4 flex items-center gap-2">
                                        <GlobeAltIcon className="w-4 h-4" />
                                        شبکه‌های اجتماعی
                                    </h3>
                                    <div className="flex items-center gap-3">
                                        {socialLinks.map((social, index) => (
                                            <a
                                                key={index}
                                                href={social.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`
                                                    group p-3 bg-white/5 hover:bg-white/10 rounded-xl transition-all duration-300 
                                                    hover:scale-110 text-gray-400 ${social.color}
                                                `}
                                                title={`دنبال کردن در ${social.name}`}
                                                aria-label={`لینک ${social.name}`}
                                            >
                                                <social.icon className="w-5 h-5 group-hover:animate-pulse" />
                                            </a>
                                        ))}
                                    </div>
                                    <p className="text-xs text-gray-400 mt-3">
                                        ما را در شبکه‌های اجتماعی دنبال کنید و از آخرین اخبار باخبر شوید
                                    </p>
                                </div>

                                {/* CTA */}
                                <div className="p-6 bg-gradient-to-br from-cyan-600/20 to-teal-600/20 rounded-xl border border-cyan-500/20">
                                    <h4 className="text-lg font-bold text-white mb-2">پروژه جدید دارید؟</h4>
                                    <p className="text-sm text-gray-300 mb-4">
                                        همین الان با ما تماس بگیرید و مشاوره رایگان دریافت کنید
                                    </p>
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-600 to-teal-600 text-white rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 text-sm font-medium w-full justify-center"
                                    >
                                        <ChatBubbleLeftRightIcon className="w-4 h-4" />
                                        <span>شروع پروژه</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Footer */}
                    <div className="border-t border-gray-800">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                                {/* Copyright */}
                                <div className="text-center lg:text-right">
                                    <p className="text-gray-400 text-sm">
                                        © {currentPersianYear} {companyInfo.name}. تمامی حقوق محفوظ است.
                                    </p>
                                    <p className="text-gray-500 text-xs mt-1">
                                        طراحی و توسعه با ❤️ توسط تیم دیزاین پرداز
                                    </p>
                                </div>

                                {/* Back to Top */}
                                {showScrollTop && (
                                    <button
                                        onClick={scrollToTop}
                                        className="fixed bottom-8 left-8 z-50 p-3 bg-gradient-to-r from-cyan-600 to-teal-600 text-white rounded-full shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                                        aria-label="بازگشت به بالای صفحه"
                                        title="بازگشت به بالا"
                                    >
                                        <ArrowUpIcon className="w-5 h-5" />
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}