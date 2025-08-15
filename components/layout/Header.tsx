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

// Service Categories
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

const headerStyle = {
    height: 'auto',
    minHeight: '60px'
};

// Company Information - با داده‌های واقعی
const companyInfo = {
    name: 'دیزاین پرداز',
    slogan: 'طراحی وب حرفه‌ای',
    phone: '+98-21-3333-4444',
    email: 'info@designpardaz.ir',
    address: 'تهران، ایران',
    workingHours: 'شنبه تا چهارشنبه ۹-۱۸، پنج‌شنبه ۹-۱۴',
    establishedYear: '۱۴۰۳' // سال تاسیس واقعی
};

// Navigation Menu Items
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
    // State Management
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);

    // Refs
    const headerRef = useRef<HTMLElement>(null);
    const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const mobileMenuRef = useRef<HTMLDivElement>(null);

    // Hooks
    const pathname = usePathname();

    // Scroll Detection
    const handleScroll = useCallback(() => {
        const currentScrollY = window.scrollY;
        setIsScrolled(currentScrollY > 10);
    }, []);

    // Initialize scroll listener
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    // Handle services menu with delay
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

    // Handle outside click for mobile menu
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

    // Check if current path is active
    const isActiveLink = (href: string): boolean => {
        if (href === '/') {
            return pathname === '/';
        }
        return pathname.startsWith(href);
    };

    return (
        <>
            {/* Structured Data for SEO */}
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
                style={headerStyle}
                className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${className}`}
                role="banner"
                aria-label="سایت اصلی ناوبری"
            >
                {/* Top Dark Bar */}
                <div className="bg-gradient-to-r from-slate-900 via-gray-900 to-slate-900 text-white border-b border-cyan-500/20">
                    <div className="container mx-auto px-4">
                        <div className="flex justify-between items-center py-2 text-sm">

                            {/* Contact Information */}
                            <div className="hidden lg:flex items-center gap-8">
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
                            <div className="hidden lg:flex items-center gap-8 text-xs">
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

                {/* Main Navigation with Logo Colors */}
                <nav className={`
                    bg-gradient-to-r from-slate-800 via-gray-900 to-slate-800
                    transition-all duration-500 ease-in-out
                    ${isScrolled ? 'shadow-2xl backdrop-blur-md bg-opacity-95' : ''}
                    relative overflow-visible
                `}>

                    {/* Animated Background Pattern */}
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

                    {/* Floating Particles Animation */}
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
                        <div className="flex items-center justify-between py-2">

                            {/* Brand Logo */}
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

                            {/* Desktop Navigation */}
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

                                {/* Services Dropdown */}
                                <div
                                    className="relative static lg:relative"
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

                                    {/* Mega Menu */}
                                    {isServicesOpen && (
                                        <div className="absolute top-full mt-2 w-screen max-w-6xl bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden z-[100]" style={{left: '50%', transform: 'translateX(-50%)'}}>
                                            {/* Menu Header */}
                                            <div className="bg-gradient-to-r from-cyan-600 to-teal-600 text-white p-6">
                                                <div className="flex items-center gap-3 mb-3">
                                                    <RocketLaunchIcon className="w-6 h-6" />
                                                    <h3 className="text-lg font-bold">خدمات حرفه‌ای {companyInfo.name}</h3>
                                                </div>
                                                <p className="text-cyan-100 text-sm">
                                                    تیم جوان و خلاق ما آماده ارائه بهترین خدمات طراحی وب
                                                </p>
                                            </div>

                                            {/* Services Grid */}
                                            <div className="p-8">
                                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                                    {servicesMenuData.map((category, categoryIndex) => (
                                                        <div key={categoryIndex} className="space-y-4">
                                                            {/* Category Header */}
                                                            <div className="flex items-center gap-3 mb-4">
                                                                <div className="p-2 bg-gradient-to-br from-cyan-500 to-teal-600 text-white rounded-lg">
                                                                    <category.categoryIcon className="w-5 h-5" />
                                                                </div>
                                                                <div>
                                                                    <h4 className="font-bold text-gray-900">{category.category}</h4>
                                                                    <p className="text-xs text-gray-500">{category.categoryDescription}</p>
                                                                </div>
                                                            </div>

                                                            {/* Services List */}
                                                            <div className="space-y-2">
                                                                {category.services.map((service, serviceIndex) => (
                                                                    <Link
                                                                        key={serviceIndex}
                                                                        href={service.href}
                                                                        className="group block p-3 rounded-xl hover:bg-gray-50 transition-all duration-300 hover:scale-[1.02]"
                                                                    >
                                                                        <div className="flex items-start gap-3">
                                                                            <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                                                                                <service.icon className="w-4 h-4" />
                                                                            </div>
                                                                            <div className="flex-1 min-w-0">
                                                                                <div className="flex items-center gap-2">
                                                                                    <h5 className="font-semibold text-gray-900 text-sm group-hover:text-cyan-600">
                                                                                        {service.title}
                                                                                    </h5>
                                                                                    {service.featured && (
                                                                                        <span className="px-2 py-0.5 bg-gradient-to-r from-cyan-500 to-teal-500 text-white text-xs rounded-full">
                                                                                            پیشنهاد ویژه
                                                                                        </span>
                                                                                    )}
                                                                                </div>
                                                                                <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                                                                                    {service.description}
                                                                                </p>
                                                                                <div className="flex items-center justify-between mt-2">
                                                                                    <span className="text-xs font-medium text-cyan-600">
                                                                                        {service.price}
                                                                                    </span>
                                                                                    <ArrowRightIcon className="w-3 h-3 text-gray-400 group-hover:text-cyan-500 transition-colors" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </Link>
                                                                ))}
                                                            </div>

                                                            {/* Category CTA */}
                                                            <Link
                                                                href={`/services/${category.categorySlug}`}
                                                                className="block w-full p-3 mt-4 text-center bg-gradient-to-r from-cyan-600 to-teal-600 text-white rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
                                                            >
                                                                <span className="text-sm font-medium">مشاهده همه خدمات {category.category}</span>
                                                            </Link>
                                                        </div>
                                                    ))}
                                                </div>

                                                {/* Menu Footer */}
                                                <div className="mt-8 pt-6 border-t border-gray-200">
                                                    <div className="flex items-center justify-between">
                                                        <div className="flex items-center gap-4">
                                                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                                                <ShieldCheckIcon className="w-4 h-4 text-emerald-500" />
                                                                <span>گارانتی کیفیت</span>
                                                            </div>
                                                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                                                <LightBulbIcon className="w-4 h-4 text-amber-500" />
                                                                <span>مشاوره رایگان</span>
                                                            </div>
                                                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                                                <ChatBubbleLeftRightIcon className="w-4 h-4 text-cyan-500" />
                                                                <span>پشتیبانی ۲۴/۷</span>
                                                            </div>
                                                        </div>
                                                        <Link
                                                            href="/contact"
                                                            className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-6 py-2 rounded-lg font-bold hover:shadow-lg transition-all duration-300"
                                                        >
                                                            درخواست مشاوره رایگان
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Other Navigation Items */}
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
                                        title={item.description}
                                    >
                                        <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                        <span className="font-medium">{item.title}</span>
                                        {isActiveLink(item.href) && <CheckBadgeIcon className="w-4 h-4 text-cyan-200" />}
                                    </Link>
                                ))}
                            </div>

                            {/* Right Side Actions */}
                            <div className="flex items-center gap-3">
                                {/* CTA Button */}
                                <Link
                                    href="/contact"
                                    className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-6 py-3 rounded-xl font-bold hover:shadow-xl transition-all duration-300 hover:scale-105"
                                >
                                    <ChatBubbleLeftRightIcon className="w-4 h-4" />
                                    <span>مشاوره رایگان</span>
                                </Link>

                                {/* Mobile Menu Toggle */}
                                <button
                                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                    className="lg:hidden p-2.5 rounded-xl bg-white/10 hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                    aria-label={isMobileMenuOpen ? 'بستن منو' : 'باز کردن منو'}
                                    aria-expanded={isMobileMenuOpen}
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

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <div
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />

                        {/* Mobile Menu Content */}
                        <div
                            ref={mobileMenuRef}
                            className="fixed top-full left-0 right-0 bg-white shadow-2xl z-50 lg:hidden max-h-[80vh] overflow-y-auto"
                        >
                            {/* Mobile Header */}
                            <div className="p-6 bg-gradient-to-r from-cyan-600 to-teal-600 text-white">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center overflow-hidden">
                                        <Image
                                            src="/logo.png"
                                            alt={`${companyInfo.name} Logo`}
                                            width={48}
                                            height={48}
                                            className="object-contain"
                                        />
                                    </div>
                                    <div>
                                        <h2 className="text-lg font-bold">{companyInfo.name}</h2>
                                        <p className="text-cyan-100 text-sm">{companyInfo.slogan}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Quick Contact */}
                            <div className="p-4 bg-gray-50">
                                <div className="grid grid-cols-2 gap-3">
                                    <a
                                        href={`tel:${companyInfo.phone}`}
                                        className="flex items-center gap-2 p-3 bg-emerald-500 text-white rounded-lg font-medium text-sm hover:bg-emerald-600 transition-colors"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        <PhoneIcon className="w-4 h-4" />
                                        <span>تماس</span>
                                    </a>
                                    <a
                                        href={`mailto:${companyInfo.email}`}
                                        className="flex items-center gap-2 p-3 bg-cyan-500 text-white rounded-lg font-medium text-sm hover:bg-cyan-600 transition-colors"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        <EnvelopeIcon className="w-4 h-4" />
                                        <span>ایمیل</span>
                                    </a>
                                </div>
                            </div>

                            {/* Navigation Items */}
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
                                            {isActiveLink(item.href) && <CheckBadgeIcon className="w-5 h-5 text-cyan-500 mr-auto" />}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Services in Mobile */}
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
                                                    {category.category}
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

                            {/* Mobile CTA */}
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

            <style jsx>{`
                body {
                    padding-top: 0;
                    margin-top: 0;
                }

                @keyframes gradient-x {
                    0%, 100% {
                        transform: translateX(0%);
                    }
                    50% {
                        transform: translateX(100%);
                    }
                }

                @keyframes float {
                    0%, 100% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-10px);
                    }
                }

                .animate-gradient-x {
                    animation: gradient-x 15s ease infinite;
                }

                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
            `}</style>
        </>
    );
}
