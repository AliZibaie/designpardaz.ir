'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import {
    Bars3Icon,
    XMarkIcon,
    ChevronDownIcon,
    PhoneIcon,
    EnvelopeIcon,
    MapPinIcon,
    PaintBrushIcon,
    MagnifyingGlassIcon,
    PhotoIcon,
    ComputerDesktopIcon,
    ShoppingCartIcon,
    ChatBubbleLeftRightIcon,
    ClockIcon,
    UserGroupIcon,
    CheckBadgeIcon,
    ArrowRightIcon,
    BuildingOfficeIcon,
    DocumentTextIcon,
    HomeIcon,
    InformationCircleIcon,
    NewspaperIcon,
    CogIcon,
    ShieldCheckIcon,
    HeartIcon,
    LightBulbIcon,
    RocketLaunchIcon,
    SparklesIcon
} from '@heroicons/react/24/outline';

// Service Categories - همون محتوای قبلی
const servicesMenuData = [
    {
        category: 'طراحی وب‌سایت',
        categorySlug: 'web-design',
        categoryIcon: ComputerDesktopIcon,
        categoryDescription: 'طراحی و توسعه وب‌سایت حرفه‌ای',
        services: [
            {
                title: 'طراحی سایت شرکتی',
                href: '/services/web-design/corporate',
                description: 'طراحی وب‌سایت حرفه‌ای برای شرکت‌ها',
                icon: BuildingOfficeIcon,
                featured: true,
                price: 'از ۵ میلیون تومان'
            },
            {
                title: 'طراحی فروشگاه اینترنتی',
                href: '/services/web-design/ecommerce',
                description: 'فروشگاه آنلاین با درگاه پرداخت',
                icon: ShoppingCartIcon,
                featured: true,
                price: 'از ۸ میلیون تومان'
            },
            {
                title: 'طراحی سایت شخصی',
                href: '/services/web-design/personal',
                description: 'پورتفولیو و وب‌سایت شخصی',
                icon: UserGroupIcon,
                featured: false,
                price: 'از ۲ میلیون تومان'
            }
        ]
    },
    {
        category: 'سئو و بهینه‌سازی',
        categorySlug: 'seo',
        categoryIcon: MagnifyingGlassIcon,
        categoryDescription: 'بهینه‌سازی موتورهای جستجو',
        services: [
            {
                title: 'سئو تکنیکال',
                href: '/services/seo/technical',
                description: 'بهینه‌سازی فنی وب‌سایت',
                icon: CogIcon,
                featured: true,
                price: 'از ۳ میلیون تومان'
            },
            {
                title: 'تولید محتوای سئو',
                href: '/services/seo/content',
                description: 'محتوای بهینه‌شده',
                icon: DocumentTextIcon,
                featured: true,
                price: 'از ۱.۵ میلیون تومان'
            },
            {
                title: 'سئو محلی',
                href: '/services/seo/local',
                description: 'بهینه‌سازی جستجوهای محلی',
                icon: MapPinIcon,
                featured: false,
                price: 'از ۲ میلیون تومان'
            }
        ]
    },
    {
        category: 'طراحی گرافیک',
        categorySlug: 'graphic',
        categoryIcon: PhotoIcon,
        categoryDescription: 'طراحی گرافیک و هویت بصری',
        services: [
            {
                title: 'طراحی لوگو',
                href: '/services/graphic/logo',
                description: 'طراحی لوگو و هویت بصری',
                icon: SparklesIcon,
                featured: true,
                price: 'از ۱.۵ میلیون تومان'
            },
            {
                title: 'طراحی بروشور',
                href: '/services/graphic/brochure',
                description: 'کاتالوگ و بروشور حرفه‌ای',
                icon: DocumentTextIcon,
                featured: false,
                price: 'از ۸۰۰ هزار تومان'
            },
            {
                title: 'طراحی UI/UX',
                href: '/services/graphic/ui-ux',
                description: 'رابط و تجربه کاربری',
                icon: PaintBrushIcon,
                featured: true,
                price: 'از ۴ میلیون تومان'
            }
        ]
    }
];

// Company Information - دقیقاً همان
const companyInfo = {
    name: 'دیزاین پرداز',
    slogan: 'طراحی وب حرفه‌ای',
    phone: '+98-21-3333-4444',
    email: 'info@designpardaz.ir',
    address: 'تهران، ایران',
    workingHours: 'شنبه تا چهارشنبه ۹-۱۸، پنج‌شنبه ۹-۱۴',
    establishedYear: '۱۴۰۳'
};

// Navigation Menu Items - دقیقاً همان
const navigationItems = [
    {
        title: 'صفحه اصلی',
        href: '/',
        icon: HomeIcon,
        description: 'صفحه اصلی دیزاین پرداز',
        isHome: true
    },
    {
        title: 'درباره ما',
        href: '/about',
        icon: InformationCircleIcon,
        description: 'درباره تیم و تاریخچه دیزاین پرداز'
    },
    {
        title: 'مقالات',
        href: '/articles',
        icon: NewspaperIcon,
        description: 'مقالات آموزشی طراحی وب و سئو'
    },
    {
        title: 'تماس با ما',
        href: '/contact',
        icon: ChatBubbleLeftRightIcon,
        description: 'راه‌های ارتباط با دیزاین پرداز'
    }
];

interface HeaderProps {
    className?: string;
}

export default function Header({ className = '' }: HeaderProps) {
    // State Management - دقیقاً همان
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false); // اضافه شد برای hydration

    // Refs - دقیقاً همان
    const headerRef = useRef<HTMLElement>(null);
    const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const mobileMenuRef = useRef<HTMLDivElement>(null);

    // Hooks
    const pathname = usePathname();

    // حل مشکل hydration
    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Scroll Detection - دقیقاً همان
    const handleScroll = useCallback(() => {
        const currentScrollY = window.scrollY;
        setIsScrolled(currentScrollY > 10);
    }, []);

    // Initialize scroll listener
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    // Handle services menu with delay - دقیقاً همان
    const handleServicesMouseEnter = useCallback(() => {
        if (servicesTimeoutRef.current) {
            clearTimeout(servicesTimeoutRef.current);
        }
        setIsServicesOpen(true);
    }, []);

    const handleServicesMouseLeave = useCallback(() => {
        servicesTimeoutRef.current = setTimeout(() => {
            setIsServicesOpen(false);
        }, 300);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
        setIsServicesOpen(false);
    }, [pathname]);

    // Handle outside click for mobile menu - اصلاح شد
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
                setIsMobileMenuOpen(false);
            }
        };

        if (isMobileMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    // Check if current path is active - دقیقاً همان
    const isActiveLink = (href: string): boolean => {
        if (href === '/') {
            return pathname === '/';
        }
        return pathname.startsWith(href);
    };

    // Loading state برای جلوگیری از hydration mismatch
    if (!isMounted) {
        return (
            <header className="sticky top-0 left-0 right-0 z-50 bg-gradient-to-r from-slate-800 via-gray-900 to-slate-800">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between py-3">
                        <div className="animate-pulse bg-gray-700 h-12 w-48 rounded"></div>
                        <div className="animate-pulse bg-gray-700 h-10 w-10 rounded lg:hidden"></div>
                    </div>
                </div>
            </header>
        );
    }

    return (
        <>
            {/* Structured Data for SEO - دقیقاً همان */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": companyInfo.name,
                        "url": "https://designpardaz.ir",
                        "logo": "https://designpardaz.ir/logo.png",
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "telephone": companyInfo.phone,
                            "contactType": "customer service",
                            "availableLanguage": "Persian"
                        },
                        "address": {
                            "@type": "PostalAddress",
                            "addressCountry": "IR",
                            "addressLocality": "Tehran"
                        }
                    })
                }}
            />

            <header
                ref={headerRef}
                className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${className}`}
                role="banner"
                aria-label="سایت اصلی ناوبری"
            >
                {/* Top Dark Bar - دقیقاً همان محتوا */}
                <div className="hidden lg:block bg-gradient-to-r from-slate-900 via-gray-900 to-slate-900 text-white border-b border-cyan-500/20">
                    <div className="container mx-auto px-4">
                        <div className="flex justify-between items-center py-2 text-sm">
                            {/* Contact Information */}
                            <div className="flex items-center gap-8">
                                <a
                                    href={`tel:${companyInfo.phone}`}
                                    className="flex items-center gap-2 hover:text-cyan-400 transition-all duration-300 group"
                                    aria-label={`تماس با ${companyInfo.name}`}
                                >
                                    <PhoneIcon className="w-4 h-4 group-hover:animate-pulse" />
                                    <span dir="ltr" className="font-mono">021-3333-4444</span>
                                    <span className="hidden xl:inline-block text-xs opacity-70">تماس رایگان</span>
                                </a>

                                <a
                                    href={`mailto:${companyInfo.email}`}
                                    className="flex items-center gap-2 hover:text-cyan-400 transition-all duration-300 group"
                                    aria-label={`ایمیل به ${companyInfo.name}`}
                                >
                                    <EnvelopeIcon className="w-4 h-4 group-hover:animate-bounce" />
                                    <span>{companyInfo.email}</span>
                                    <span className="hidden xl:inline-block text-xs opacity-70">پشتیبانی ۲۴/۷</span>
                                </a>

                                <div className="flex items-center gap-2">
                                    <MapPinIcon className="w-4 h-4 text-cyan-400" />
                                    <span className="opacity-70">خدمات سراسری ایران</span>
                                </div>
                            </div>

                            {/* Working Hours & Company Info */}
                            <div className="flex items-center gap-8 text-xs">
                                <div className="flex items-center gap-2">
                                    <ClockIcon className="w-4 h-4 text-emerald-400" />
                                    <span className="opacity-70">{companyInfo.workingHours}</span>
                                </div>

                                <div className="flex items-center gap-6">
                                    <div className="flex items-center gap-1">
                                        <SparklesIcon className="w-4 h-4 text-cyan-400" />
                                        <span className="font-bold text-cyan-400">تیم جوان</span>
                                        <span className="opacity-70">و خلاق</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <HeartIcon className="w-4 h-4 text-rose-400" />
                                        <span className="font-bold text-rose-400">کیفیت</span>
                                        <span className="opacity-70">اولویت ماست</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Navigation - همان محتوا، فقط کلاس‌ها بهتر شدن */}
                <nav className={`
                    bg-gradient-to-r from-slate-800 via-gray-900 to-slate-800
                    transition-all duration-500 ease-in-out
                    ${isScrolled ? 'shadow-2xl backdrop-blur-md bg-opacity-95' : ''}
                    relative overflow-visible
                `}>
                    {/* Animated Background Pattern - دقیقاً همان */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 via-teal-600/20 to-cyan-600/20 animate-gradient-x"></div>
                        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <defs>
                                <pattern id="nav-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                    <circle cx="10" cy="10" r="0.5" fill="currentColor" className="text-white animate-pulse" opacity="0.3"/>
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#nav-pattern)" />
                        </svg>
                    </div>

                    {/* Floating Particles Animation - دقیقاً همان */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        {[...Array(8)].map((_, i) => (
                            <div
                                key={i}
                                className={`absolute w-1 h-1 bg-cyan-400 rounded-full opacity-20 animate-float`}
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    animationDelay: `${i * 0.5}s`,
                                    animationDuration: `${3 + Math.random() * 2}s`
                                }}
                            />
                        ))}
                    </div>

                    <div className="container mx-auto px-4 relative z-10 overflow-visible">
                        <div className="flex items-center justify-between py-3">

                            {/* Brand Logo - دقیقاً همان محتوا */}
                            <Link
                                href="/"
                                className="flex items-center gap-4 group hover:scale-105 transition-all duration-300"
                                itemScope
                                itemType="https://schema.org/Organization"
                            >
                                <div className="relative">
                                    <div className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:rotate-6 transition-transform duration-300 overflow-hidden">
                                        <Image
                                            src="/logo.png"
                                            alt={`${companyInfo.name} Logo`}
                                            width={48}
                                            height={48}
                                            className="object-contain"
                                            priority
                                        />
                                    </div>
                                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full animate-pulse"></div>
                                </div>
                                <div className="hidden sm:block">
                                    <h1 className="text-xl font-black text-white group-hover:text-cyan-300 transition-colors" itemProp="name">
                                        {companyInfo.name}
                                    </h1>
                                    <p className="text-xs text-gray-300 group-hover:text-cyan-200 transition-colors" itemProp="description">
                                        {companyInfo.slogan}
                                    </p>
                                </div>

                                {/* New Team Badge */}
                                <div className="hidden lg:flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1">
                                    <SparklesIcon className="w-3 h-3 text-cyan-400" />
                                    <span className="text-xs text-white font-bold">تیم جدید</span>
                                </div>
                            </Link>

                            {/* Desktop Navigation - دقیقاً همان */}
                            <div className="hidden lg:flex items-center gap-8">

                                {/* Home Link */}
                                <Link
                                    href="/"
                                    className={`nav-link group flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                                        isActiveLink('/')
                                            ? 'bg-cyan-600 text-white shadow-lg'
                                            : 'text-gray-200 hover:text-white hover:bg-white/10'
                                    }`}
                                    aria-current={isActiveLink('/') ? 'page' : undefined}
                                >
                                    <HomeIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                    <span className="font-medium">صفحه اصلی</span>
                                    {isActiveLink('/') && <CheckBadgeIcon className="w-4 h-4 text-cyan-200" />}
                                </Link>

                                {/* Services Dropdown - دقیقاً همان */}
                                <div
                                    className="relative"
                                    onMouseEnter={handleServicesMouseEnter}
                                    onMouseLeave={handleServicesMouseLeave}
                                >
                                    <button
                                        className="nav-link group flex items-center gap-2 px-4 py-2 rounded-lg text-gray-200 hover:text-white hover:bg-white/10 transition-all duration-300"
                                        aria-expanded={isServicesOpen}
                                        aria-haspopup="true"
                                    >
                                        <CogIcon className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
                                        <span className="font-medium">خدمات ما</span>
                                        <ChevronDownIcon className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                                    </button>

                                    {/* Services Mega Menu - دقیقاً همان */}
                                    {isServicesOpen && (
                                        <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 w-[800px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50 animate-fadeIn">
                                            <div className="p-6">
                                                <div className="grid grid-cols-3 gap-6">
                                                    {servicesMenuData.map((category, categoryIndex) => (
                                                        <div key={categoryIndex} className="space-y-3">
                                                            <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-cyan-50 to-teal-50 rounded-xl">
                                                                <div className="p-2 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-lg">
                                                                    <category.categoryIcon className="w-5 h-5 text-white" />
                                                                </div>
                                                                <div>
                                                                    <h3 className="font-bold text-gray-800">{category.category}</h3>
                                                                    <p className="text-xs text-gray-600">{category.categoryDescription}</p>
                                                                </div>
                                                            </div>
                                                            <div className="space-y-1">
                                                                {category.services.map((service, serviceIndex) => (
                                                                    <Link
                                                                        key={serviceIndex}
                                                                        href={service.href}
                                                                        className="block p-3 rounded-xl hover:bg-gray-50 transition-all duration-300 group"
                                                                    >
                                                                        <div className="flex items-start gap-3">
                                                                            <service.icon className="w-5 h-5 text-cyan-600 mt-0.5 group-hover:scale-110 transition-transform" />
                                                                            <div className="flex-1">
                                                                                <div className="flex items-center gap-2 mb-1">
                                                                                    <h4 className="font-medium text-gray-800 group-hover:text-cyan-600 transition-colors">{service.title}</h4>
                                                                                    {service.featured && (
                                                                                        <span className="px-2 py-0.5 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs rounded-full animate-pulse">
                                                                                            جدید
                                                                                        </span>
                                                                                    )}
                                                                                </div>
                                                                                <p className="text-xs text-gray-600 mb-1">{service.description}</p>
                                                                                <p className="text-xs font-bold text-cyan-600">{service.price}</p>
                                                                            </div>
                                                                        </div>
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>

                                                <div className="mt-6 pt-6 border-t border-gray-200">
                                                    <div className="flex items-center justify-between">
                                                        <div className="flex items-center gap-4">
                                                            <div className="flex items-center gap-2">
                                                                <ShieldCheckIcon className="w-5 h-5 text-green-500" />
                                                                <span className="text-sm font-medium text-gray-700">تضمین کیفیت ۱۰۰%</span>
                                                            </div>
                                                            <div className="flex items-center gap-2">
                                                                <RocketLaunchIcon className="w-5 h-5 text-blue-500" />
                                                                <span className="text-sm font-medium text-gray-700">تحویل سریع</span>
                                                            </div>
                                                            <div className="flex items-center gap-2">
                                                                <LightBulbIcon className="w-5 h-5 text-yellow-500" />
                                                                <span className="text-sm font-medium text-gray-700">ایده‌های خلاقانه</span>
                                                            </div>
                                                        </div>
                                                        <Link
                                                            href="/services"
                                                            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300"
                                                        >
                                                            <span>مشاهده همه خدمات</span>
                                                            <ArrowRightIcon className="w-4 h-4" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Other Navigation Items - دقیقاً همان */}
                                {navigationItems.slice(1).map((item, index) => (
                                    <Link
                                        key={index}
                                        href={item.href}
                                        className={`nav-link group flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                                            isActiveLink(item.href)
                                                ? 'bg-cyan-600 text-white shadow-lg'
                                                : 'text-gray-200 hover:text-white hover:bg-white/10'
                                        }`}
                                        aria-current={isActiveLink(item.href) ? 'page' : undefined}
                                    >
                                        <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                        <span className="font-medium">{item.title}</span>
                                        {isActiveLink(item.href) && <CheckBadgeIcon className="w-4 h-4 text-cyan-200" />}
                                    </Link>
                                ))}
                            </div>

                            {/* Right Side Actions - دقیقاً همان */}
                            <div className="flex items-center gap-4">
                                <Link
                                    href="/contact"
                                    className="hidden md:flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl font-bold hover:shadow-xl hover:scale-105 transition-all duration-300"
                                >
                                    <ChatBubbleLeftRightIcon className="w-5 h-5" />
                                    <span>مشاوره رایگان</span>
                                </Link>

                                <Link
                                    href="tel:02133334444"
                                    className="hidden sm:flex md:hidden items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
                                >
                                    <PhoneIcon className="w-4 h-4" />
                                    <span>تماس</span>
                                </Link>

                                <button
                                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                    className="lg:hidden p-3 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-110"
                                    aria-label="باز کردن منوی موبایل"
                                >
                                    {isMobileMenuOpen ? (
                                        <XMarkIcon className="w-6 h-6 text-white" />
                                    ) : (
                                        <Bars3Icon className="w-6 h-6 text-white" />
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Mobile Menu Overlay - اصلاح شده برای responsive */}
                {isMobileMenuOpen && (
                    <>
                        <div
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />
                        <div
                            ref={mobileMenuRef}
                            className="fixed top-0 right-0 h-full w-full max-w-sm bg-white shadow-2xl z-50 overflow-y-auto lg:hidden"
                        >
                            {/* Mobile Menu Header - دقیقاً همان */}
                            <div className="p-4 bg-gradient-to-r from-cyan-600 to-teal-600 text-white">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <Image
                                            src="/logo.png"
                                            alt="Logo"
                                            width={40}
                                            height={40}
                                            className="rounded-lg"
                                        />
                                        <div>
                                            <h2 className="font-bold">{companyInfo.name}</h2>
                                            <p className="text-cyan-100 text-sm">{companyInfo.slogan}</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                                    >
                                        <XMarkIcon className="w-6 h-6 text-white" />
                                    </button>
                                </div>
                            </div>

                            {/* Quick Contact - دقیقاً همان */}
                            <div className="p-4 bg-gray-50">
                                <div className="grid grid-cols-2 gap-3">
                                    <a
                                        href={`tel:${companyInfo.phone}`}
                                        className="flex items-center justify-center gap-2 p-3 bg-emerald-500 text-white rounded-lg font-medium hover:bg-emerald-600 transition-colors"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        <PhoneIcon className="w-4 h-4" />
                                        <span>تماس</span>
                                    </a>
                                    <a
                                        href={`mailto:${companyInfo.email}`}
                                        className="flex items-center justify-center gap-2 p-3 bg-cyan-500 text-white rounded-lg font-medium hover:bg-cyan-600 transition-colors"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        <EnvelopeIcon className="w-4 h-4" />
                                        <span>ایمیل</span>
                                    </a>
                                </div>
                            </div>

                            {/* Navigation Items - دقیقاً همان */}
                            <div className="p-4">
                                <div className="space-y-2">
                                    {navigationItems.map((item, index) => (
                                        <Link
                                            key={index}
                                            href={item.href}
                                            className={`flex items-center gap-3 p-4 rounded-xl transition-all duration-300 ${
                                                isActiveLink(item.href)
                                                    ? 'bg-cyan-50 text-cyan-600 border-r-4 border-cyan-500'
                                                    : 'text-gray-700 hover:bg-gray-50'
                                            }`}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            <item.icon className="w-5 h-5" />
                                            <span className="font-medium">{item.title}</span>
                                            {isActiveLink(item.href) && (
                                                <CheckBadgeIcon className="w-5 h-5 text-cyan-500 mr-auto" />
                                            )}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Services in Mobile - دقیقاً همان */}
                            <div className="border-t border-gray-200">
                                <div className="p-4">
                                    <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                                        <CogIcon className="w-5 h-5 text-cyan-600" />
                                        خدمات ما
                                    </h3>
                                    <div className="space-y-4">
                                        {servicesMenuData.map((category, categoryIndex) => (
                                            <div key={categoryIndex}>
                                                <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                                                    <category.categoryIcon className="w-4 h-4 text-cyan-600" />
                                                    <span>{category.category}</span>
                                                </h4>
                                                <div className="space-y-1 pr-6">
                                                    {category.services.map((service, serviceIndex) => (
                                                        <Link
                                                            key={serviceIndex}
                                                            href={service.href}
                                                            className="flex items-center gap-3 p-3 text-gray-600 hover:text-cyan-600 hover:bg-cyan-50 rounded-lg transition-all duration-300"
                                                            onClick={() => setIsMobileMenuOpen(false)}
                                                        >
                                                            <service.icon className="w-4 h-4" />
                                                            <span className="text-sm">{service.title}</span>
                                                            {service.featured && (
                                                                <span className="px-2 py-0.5 bg-gradient-to-r from-cyan-500 to-teal-500 text-white text-xs rounded-full mr-auto">
                                                                    جدید
                                                                </span>
                                                            )}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Mobile CTA - دقیقاً همان */}
                            <div className="p-4 bg-gray-50 border-t border-gray-200">
                                <Link
                                    href="/contact"
                                    className="block w-full p-4 text-center bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-xl font-bold hover:shadow-lg transition-all duration-300"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    درخواست مشاوره رایگان
                                </Link>
                                <p className="text-center text-xs text-gray-500 mt-3">
                                    تیم جوان و خلاق • آماده همکاری با شما
                                </p>
                            </div>
                        </div>
                    </>
                )}
            </header>

            {/* Styles - فقط اصلاحات مهم */}
            <style jsx>{`
                @keyframes gradient-x {
                    0%, 100% { transform: translateX(0%); }
                    50% { transform: translateX(100%); }
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-gradient-x { animation: gradient-x 15s ease infinite; }
                .animate-float { animation: float 3s ease-in-out infinite; }
                .animate-fadeIn { animation: fadeIn 0.2s ease-out; }
            `}</style>
        </>
    );
}
