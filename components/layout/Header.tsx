'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
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
    CodeBracketIcon,
    DevicePhoneMobileIcon,
    ComputerDesktopIcon,
    ShoppingCartIcon,
    ChatBubbleLeftRightIcon,
    ClockIcon,
    UserGroupIcon,
    StarIcon,
    CheckBadgeIcon,
    ArrowRightIcon,
    MoonIcon,
    SunIcon,
    GlobeAltIcon,
    BuildingOfficeIcon,
    AcademicCapIcon,
    DocumentTextIcon,
    HomeIcon,
    InformationCircleIcon,
    NewspaperIcon,
    ChartBarIcon,
    CogIcon,
    ShieldCheckIcon,
    TrophyIcon,
    HeartIcon,
    LightBulbIcon,
    RocketLaunchIcon,
    EyeIcon,
    CursorArrowRaysIcon,
    SparklesIcon
} from '@heroicons/react/24/outline';

// SEO Optimized Service Categories
const servicesMenuData = [
    {
        category: 'طراحی و توسعه وب',
        categorySlug: 'web-design',
        categoryIcon: CodeBracketIcon,
        categoryDescription: 'خدمات کامل طراحی و توسعه وب‌سایت حرفه‌ای',
        services: [
            {
                title: 'طراحی سایت شرکتی',
                href: '/services/web-design/corporate',
                description: 'طراحی وب‌سایت حرفه‌ای برای شرکت‌ها و کسب‌وکارها',
                icon: BuildingOfficeIcon,
                featured: true,
                price: 'از ۵ میلیون تومان',
                isNew: false
            },
            {
                title: 'طراحی فروشگاه اینترنتی',
                href: '/services/web-design/ecommerce',
                description: 'فروشگاه آنلاین با امکانات کامل درگاه پرداخت',
                icon: ShoppingCartIcon,
                featured: true,
                price: 'از ۸ میلیون تومان',
                isNew: false
            },
            {
                title: 'طراحی سایت شخصی',
                href: '/services/web-design/personal',
                description: 'وب‌سایت شخصی و پورتفولیو حرفه‌ای',
                icon: UserGroupIcon,
                featured: false,
                price: 'از ۲ میلیون تومان',
                isNew: false
            },
            {
                title: 'طراحی وب اپلیکیشن',
                href: '/services/web-design/webapp',
                description: 'توسعه اپلیکیشن وب پیشرفته و تعاملی',
                icon: DevicePhoneMobileIcon,
                featured: true,
                price: 'از ۱۲ میلیون تومان',
                isNew: true
            }
        ]
    },
    {
        category: 'سئو و بهینه‌سازی',
        categorySlug: 'seo',
        categoryIcon: MagnifyingGlassIcon,
        categoryDescription: 'خدمات تخصصی سئو و بهینه‌سازی موتورهای جستجو',
        services: [
            {
                title: 'سئو تکنیکال',
                href: '/services/seo/technical',
                description: 'بهینه‌سازی فنی وب‌سایت برای موتورهای جستجو',
                icon: CogIcon,
                featured: true,
                price: 'از ۳ میلیون تومان',
                isNew: false
            },
            {
                title: 'تولید محتوای سئو',
                href: '/services/seo/content',
                description: 'تولید محتوای بهینه‌شده برای کلمات کلیدی',
                icon: DocumentTextIcon,
                featured: true,
                price: 'از ۱.۵ میلیون تومان',
                isNew: false
            },
            {
                title: 'سئو محلی',
                href: '/services/seo/local',
                description: 'بهینه‌سازی برای جستجوهای محلی و منطقه‌ای',
                icon: MapPinIcon,
                featured: false,
                price: 'از ۲ میلیون تومان',
                isNew: false
            },
            {
                title: 'تحلیل و گزارش سئو',
                href: '/services/seo/analytics',
                description: 'تحلیل عملکرد و گزارش‌گیری تخصصی سئو',
                icon: ChartBarIcon,
                featured: true,
                price: 'از ۱ میلیون تومان',
                isNew: true
            }
        ]
    },
    {
        category: 'طراحی گرافیک',
        categorySlug: 'graphic-design',
        categoryIcon: PhotoIcon,
        categoryDescription: 'خدمات کامل طراحی گرافیک و هویت بصری',
        services: [
            {
                title: 'طراحی لوگو و هویت بصری',
                href: '/services/graphic-design/logo-identity',
                description: 'طراحی لوگو حرفه‌ای و پکیج هویت بصری کامل',
                icon: StarIcon,
                featured: true,
                price: 'از ۱.۵ میلیون تومان',
                isNew: false
            },
            {
                title: 'طراحی کاتالوگ و بروشور',
                href: '/services/graphic-design/catalog-brochure',
                description: 'طراحی مواد تبلیغاتی چاپی حرفه‌ای',
                icon: DocumentTextIcon,
                featured: false,
                price: 'از ۸۰۰ هزار تومان',
                isNew: false
            },
            {
                title: 'طراحی بنر و پوستر',
                href: '/services/graphic-design/banner-poster',
                description: 'طراحی بنرهای تبلیغاتی و پوسترهای حرفه‌ای',
                icon: PhotoIcon,
                featured: false,
                price: 'از ۵۰۰ هزار تومان',
                isNew: false
            },
            {
                title: 'طراحی UI/UX',
                href: '/services/graphic-design/ui-ux',
                description: 'طراحی رابط کاربری و تجربه کاربری',
                icon: PaintBrushIcon,
                featured: true,
                price: 'از ۴ میلیون تومان',
                isNew: true
            }
        ]
    }
];

// Company Information
const companyInfo = {
    name: 'دیزاین پرداز',
    englishName: 'Design Pardaz',
    slogan: 'طراحی وب حرفه‌ای',
    phone: '+98-21-3333-4444',
    phoneDisplay: '021-3333-4444',
    email: 'info@designpardaz.ir',
    address: 'تهران، ایران',
    workingHours: 'شنبه تا چهارشنبه ۹-۱۸، پنج‌شنبه ۹-۱۴',
    establishedYear: '۱۳۹۶',
    projectsCount: '+۲۵۰',
    clientsCount: '+۱۸۰',
    experienceYears: '+۸',
    website: 'https://designpardaz.ir'
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
        href: '/blog',
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
    const [activeServiceCategory, setActiveServiceCategory] = useState(0);
    const [isTopBarVisible, setIsTopBarVisible] = useState(true);
    const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up');
    const [lastScrollY, setLastScrollY] = useState(0);
    const [mounted, setMounted] = useState(false);

    // Refs
    const headerRef = useRef<HTMLElement>(null);
    const servicesTimeoutRef = useRef<NodeJS.Timeout>();
    const mobileMenuRef = useRef<HTMLDivElement>(null);

    // Hooks
    const pathname = usePathname();
    const { theme, setTheme } = useTheme();

    // Mount effect
    useEffect(() => {
        setMounted(true);
    }, []);

    // Enhanced Scroll Detection
    const handleScroll = useCallback(() => {
        const currentScrollY = window.scrollY;

        setIsScrolled(currentScrollY > 10);

        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            setScrollDirection('down');
            setIsTopBarVisible(false);
        } else {
            setScrollDirection('up');
            setIsTopBarVisible(true);
        }

        setLastScrollY(currentScrollY);
    }, [lastScrollY]);

    // Initialize scroll listener
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    // Services menu handlers
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

    // Keyboard navigation
    const handleKeyDown = useCallback((event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            setIsMobileMenuOpen(false);
            setIsServicesOpen(false);
        }
    }, []);

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [handleKeyDown]);

    // Check if current path is active
    const isActiveLink = (href: string): boolean => {
        if (href === '/') {
            return pathname === '/';
        }
        return pathname.startsWith(href);
    };

    // Toggle theme
    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    if (!mounted) {
        return null;
    }

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
                        "url": companyInfo.website,
                        "logo": `${companyInfo.website}/logo.png`,
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "telephone": companyInfo.phone,
                            "contactType": "customer service",
                            "availableLanguage": "Persian",
                            "hoursAvailable": {
                                "@type": "OpeningHoursSpecification",
                                "dayOfWeek": ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday"],
                                "opens": "09:00",
                                "closes": "18:00"
                            }
                        },
                        "address": {
                            "@type": "PostalAddress",
                            "addressCountry": "IR",
                            "addressLocality": "Tehran",
                            "addressRegion": "Tehran"
                        },
                        "foundingDate": "2017",
                        "numberOfEmployees": "15-25",
                        "slogan": companyInfo.slogan
                    })
                }}
            />

            <header
                ref={headerRef}
                className={`
                    fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out
                    ${isScrolled
                    ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-2xl border-b border-gray-200/20 dark:border-gray-700/20'
                    : 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm'
                }
                    ${scrollDirection === 'down' && isScrolled ? '-translate-y-full' : 'translate-y-0'}
                    ${className}
                `}
                role="banner"
                aria-label="سایت اصلی ناوبری"
            >
                {/* Top Contact Bar */}
                <div
                    className={`
                        hidden lg:block bg-gradient-to-r from-sky-500 via-blue-600 to-blue-700 
                        text-white transition-all duration-500 ease-in-out
                        ${isTopBarVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}
                    `}
                    itemScope
                    itemType="https://schema.org/Organization"
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center py-3 text-sm font-medium">
                            {/* Contact Information */}
                            <div className="flex items-center gap-8">
                                <a
                                    href={`tel:${companyInfo.phone}`}
                                    className="flex items-center gap-2 hover:text-yellow-300 transition-all duration-300 hover:scale-105 group"
                                    itemProp="telephone"
                                    aria-label={`تماس با ${companyInfo.name}`}
                                >
                                    <PhoneIcon className="w-4 h-4 group-hover:animate-pulse" />
                                    <span dir="ltr" className="font-mono">{companyInfo.phoneDisplay}</span>
                                    <span className="hidden xl:inline-block text-xs opacity-80">تماس رایگان</span>
                                </a>

                                <a
                                    href={`mailto:${companyInfo.email}`}
                                    className="flex items-center gap-2 hover:text-yellow-300 transition-all duration-300 hover:scale-105 group"
                                    itemProp="email"
                                    aria-label={`ایمیل به ${companyInfo.name}`}
                                >
                                    <EnvelopeIcon className="w-4 h-4 group-hover:animate-bounce" />
                                    <span>{companyInfo.email}</span>
                                    <span className="hidden xl:inline-block text-xs opacity-80">پشتیبانی ۲۴/۷</span>
                                </a>

                                <div
                                    className="flex items-center gap-2"
                                    itemProp="address"
                                    itemScope
                                    itemType="https://schema.org/PostalAddress"
                                >
                                    <MapPinIcon className="w-4 h-4" />
                                    <span itemProp="addressLocality">{companyInfo.address}</span>
                                    <span className="hidden xl:inline-block text-xs opacity-80">خدمات سراسری</span>
                                </div>
                            </div>

                            {/* Company Stats */}
                            <div className="flex items-center gap-6">
                                <div className="flex items-center gap-2 text-xs">
                                    <ClockIcon className="w-4 h-4" />
                                    <span>{companyInfo.workingHours}</span>
                                </div>

                                <div className="flex items-center gap-4 text-xs">
                                    <div className="flex items-center gap-1">
                                        <TrophyIcon className="w-4 h-4 text-yellow-300" />
                                        <span>{companyInfo.projectsCount} پروژه</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <HeartIcon className="w-4 h-4 text-red-300" />
                                        <span>{companyInfo.clientsCount} مشتری</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <StarIcon className="w-4 h-4 text-yellow-300" />
                                        <span>{companyInfo.experienceYears} سال تجربه</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Navigation */}
                <nav
                    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"
                    role="navigation"
                    aria-label="اصلی ناوبری منو"
                >
                    <div className="flex items-center justify-between h-16 lg:h-20">
                        {/* Enhanced Brand */}
                        <Link
                            href="/public"
                            className="flex items-center gap-3 group"
                            itemScope
                            itemType="https://schema.org/Organization"
                            aria-label={`${companyInfo.name} - ${companyInfo.slogan}`}
                        >
                            <div className="relative">
                                <Image
                                    src="/logo.png"
                                    alt={`لوگو ${companyInfo.name} - ${companyInfo.slogan}`}
                                    width={52}
                                    height={52}
                                    className="w-12 h-12 lg:w-13 lg:h-13 group-hover:scale-110 transition-transform duration-300"
                                    priority
                                    itemProp="logo"
                                />
                                <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse hidden lg:block"></div>
                            </div>

                            <div className="flex flex-col">
                                <span
                                    className="text-xl lg:text-2xl font-black tracking-tight text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                                    itemProp="name"
                                >
                                    {companyInfo.name}
                                </span>
                                <span
                                    className="text-xs text-gray-500 dark:text-gray-400 font-normal hidden lg:block transition-colors duration-300 group-hover:text-blue-500"
                                    itemProp="slogan"
                                >
                                    {companyInfo.slogan}
                                </span>
                                <div className="hidden lg:flex items-center gap-1 mt-0.5">
                                    <div className="flex items-center">
                                        {[1,2,3,4,5].map((star) => (
                                            <StarIcon key={star} className="w-3 h-3 text-yellow-400 fill-current" />
                                        ))}
                                    </div>
                                    <span className="text-xs text-gray-400 dark:text-gray-500 mr-1">۴.۹ از ۵</span>
                                </div>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-1 xl:gap-2">
                            {/* Home Link */}
                            <Link
                                href="/public"
                                className={`
                                    flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 group
                                    ${isActiveLink('/')
                                    ? 'bg-blue-600 text-white shadow-lg'
                                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400'
                                }
                                `}
                                aria-current={isActiveLink('/') ? 'page' : undefined}
                            >
                                <HomeIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                <span>صفحه اصلی</span>
                                {isActiveLink('/') && <CheckBadgeIcon className="w-4 h-4 text-yellow-300" />}
                            </Link>

                            {/* Services Mega Menu */}
                            <div
                                className="relative"
                                onMouseEnter={handleServicesMouseEnter}
                                onMouseLeave={handleServicesMouseLeave}
                            >
                                <button
                                    className={`
                                        flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 group
                                        ${pathname.startsWith('/services')
                                        ? 'bg-blue-600 text-white shadow-lg'
                                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400'
                                    }
                                    `}
                                    aria-expanded={isServicesOpen}
                                    aria-haspopup="true"
                                    aria-label="منوی خدمات"
                                >
                                    <CogIcon className="w-5 h-5 group-hover:rotate-180 transition-transform duration-300" />
                                    <span>خدمات ما</span>
                                    <ChevronDownIcon className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                                    {pathname.startsWith('/services') && <CheckBadgeIcon className="w-4 h-4 text-yellow-300" />}
                                </button>

                                {/* Mega Menu Dropdown */}
                                {isServicesOpen && (
                                    <div className="absolute top-full right-0 mt-2 w-screen max-w-6xl bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-800 overflow-hidden z-50">
                                        {/* Menu Header */}
                                        <div className="bg-gradient-to-r from-blue-600 to-sky-600 text-white p-6">
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <h3 className="text-xl font-bold flex items-center gap-2">
                                                        <RocketLaunchIcon className="w-6 h-6" />
                                                        خدمات حرفه‌ای دیزاین پرداز
                                                    </h3>
                                                    <p className="text-sm opacity-90 mt-1">با بیش از ۸ سال تجربه در خدمت شما</p>
                                                </div>
                                                <div className="flex items-center gap-4 text-sm">
                                                    <div className="text-center">
                                                        <div className="font-bold text-lg">۲۵۰+</div>
                                                        <div className="opacity-80">پروژه موفق</div>
                                                    </div>
                                                    <div className="text-center">
                                                        <div className="font-bold text-lg">۱۸۰+</div>
                                                        <div className="opacity-80">مشتری راضی</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="p-6">
                                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                                {servicesMenuData.map((category, categoryIndex) => (
                                                    <div key={categoryIndex} className="space-y-4">
                                                        {/* Category Header */}
                                                        <div className="flex items-center gap-3 pb-3 border-b border-gray-200 dark:border-gray-700">
                                                            <div className="p-2 bg-gradient-to-br from-blue-600 to-sky-600 text-white rounded-lg">
                                                                <category.categoryIcon className="w-5 h-5" />
                                                            </div>
                                                            <div>
                                                                <h4 className="font-bold text-gray-900 dark:text-white">{category.category}</h4>
                                                                <p className="text-xs text-gray-500 dark:text-gray-400">{category.categoryDescription}</p>
                                                            </div>
                                                        </div>

                                                        {/* Services List */}
                                                        <div className="space-y-2">
                                                            {category.services.map((service, serviceIndex) => (
                                                                <Link
                                                                    key={serviceIndex}
                                                                    href={service.href}
                                                                    className="group block p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-[1.02]"
                                                                >
                                                                    <div className="flex items-start gap-3">
                                                                        <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                                                            <service.icon className="w-4 h-4" />
                                                                        </div>
                                                                        <div className="flex-1 min-w-0">
                                                                            <div className="flex items-center gap-2">
                                                                                <h5 className="font-semibold text-gray-900 dark:text-white text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400">
                                                                                    {service.title}
                                                                                </h5>
                                                                                {service.featured && (
                                                                                    <span className="px-2 py-0.5 bg-yellow-400 text-gray-900 text-xs rounded-full font-medium">
                                                                                        پیشنهاد ویژه
                                                                                    </span>
                                                                                )}
                                                                                {service.isNew && (
                                                                                    <span className="px-2 py-0.5 bg-green-500 text-white text-xs rounded-full font-medium">
                                                                                        جدید
                                                                                    </span>
                                                                                )}
                                                                            </div>
                                                                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">
                                                                                {service.description}
                                                                            </p>
                                                                            <div className="flex items-center justify-between mt-2">
                                                                                <span className="text-xs font-medium text-blue-600 dark:text-blue-400">
                                                                                    {service.price}
                                                                                </span>
                                                                                <ArrowRightIcon className="w-3 h-3 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </Link>
                                                            ))}
                                                        </div>

                                                        {/* Category CTA */}
                                                        <Link
                                                            href={`/services/${category.categorySlug}`}
                                                            className="block w-full p-3 mt-4 text-center bg-gradient-to-r from-blue-600 to-sky-600 text-white rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
                                                        >
                                                            <span className="text-sm font-medium">مشاهده همه خدمات {category.category}</span>
                                                        </Link>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Menu Footer */}
                                            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-4">
                                                        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                                                            <ShieldCheckIcon className="w-4 h-4 text-green-500" />
                                                            <span>گارانتی کیفیت</span>
                                                        </div>
                                                        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                                                            <LightBulbIcon className="w-4 h-4 text-yellow-500" />
                                                            <span>مشاوره رایگان</span>
                                                        </div>
                                                        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                                                            <ChatBubbleLeftRightIcon className="w-4 h-4 text-blue-500" />
                                                            <span>پشتیبانی ۲۴/۷</span>
                                                        </div>
                                                    </div>
                                                    <Link
                                                        href="/contact"
                                                        className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-sky-600 text-white rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 text-sm font-medium"
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
                                    className={`
                                        flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 group
                                        ${isActiveLink(item.href)
                                        ? 'bg-blue-600 text-white shadow-lg'
                                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400'
                                    }
                                    `}
                                    aria-current={isActiveLink(item.href) ? 'page' : undefined}
                                    title={item.description}
                                >
                                    <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                    <span>{item.title}</span>
                                    {isActiveLink(item.href) && <CheckBadgeIcon className="w-4 h-4 text-yellow-300" />}
                                </Link>
                            ))}
                        </div>

                        {/* Right Side Actions */}
                        <div className="flex items-center gap-3">
                            {/* Theme Toggle */}
                            <button
                                onClick={toggleTheme}
                                className="hidden sm:flex items-center justify-center w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
                                aria-label={theme === 'dark' ? 'تغییر به حالت روشن' : 'تغییر به حالت تاریک'}
                                title={theme === 'dark' ? 'حالت روشن' : 'حالت تاریک'}
                            >
                                {theme === 'dark' ? (
                                    <SunIcon className="w-5 h-5 text-yellow-500" />
                                ) : (
                                    <MoonIcon className="w-5 h-5 text-gray-600" />
                                )}
                            </button>

                            {/* Language Toggle */}
                            <button
                                className="hidden sm:flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                                title="تغییر زبان"
                            >
                                <GlobeAltIcon className="w-4 h-4" />
                                <span>FA</span>
                            </button>

                            {/* CTA Button */}
                            <Link
                                href="/contact"
                                className="hidden sm:flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-sky-600 text-white rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 text-sm font-medium"
                            >
                                <ChatBubbleLeftRightIcon className="w-4 h-4" />
                                <span>مشاوره رایگان</span>
                            </Link>

                            {/* Mobile Menu Toggle */}
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="lg:hidden p-2.5 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                                aria-label={isMobileMenuOpen ? 'بستن منو' : 'باز کردن منو'}
                                aria-expanded={isMobileMenuOpen}
                            >
                                {isMobileMenuOpen ? (
                                    <XMarkIcon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                                ) : (
                                    <Bars3Icon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                                )}
                            </button>
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
                            className="fixed top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-2xl z-50 lg:hidden max-h-[80vh] overflow-y-auto"
                        >
                            {/* Mobile Header */}
                            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <Image
                                            src="/logo.png"
                                            alt={`لوگو ${companyInfo.name}`}
                                            width={40}
                                            height={40}
                                            className="w-10 h-10"
                                        />
                                        <div>
                                            <h3 className="font-bold text-gray-900 dark:text-white">{companyInfo.name}</h3>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">{companyInfo.slogan}</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={toggleTheme}
                                        className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                                        aria-label={theme === 'dark' ? 'تغییر به حالت روشن' : 'تغییر به حالت تاریک'}
                                    >
                                        {theme === 'dark' ? (
                                            <SunIcon className="w-5 h-5 text-yellow-500" />
                                        ) : (
                                            <MoonIcon className="w-5 h-5 text-gray-600" />
                                        )}
                                    </button>
                                </div>
                            </div>

                            {/* Quick Contact */}
                            <div className="p-4 bg-gray-50 dark:bg-gray-800/50">
                                <div className="grid grid-cols-2 gap-3">
                                    <a
                                        href={`tel:${companyInfo.phone}`}
                                        className="flex items-center justify-center gap-2 p-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
                                    >
                                        <PhoneIcon className="w-4 h-4" />
                                        <span className="text-sm font-medium">تماس</span>
                                    </a>
                                    <a
                                        href={`mailto:${companyInfo.email}`}
                                        className="flex items-center justify-center gap-2 p-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors"
                                    >
                                        <EnvelopeIcon className="w-4 h-4" />
                                        <span className="text-sm font-medium">ایمیل</span>
                                    </a>
                                </div>
                            </div>

                            {/* Navigation Items */}
                            <div className="p-4 space-y-2">
                                {/* Home */}
                                <Link
                                    href="/public"
                                    className={`
                                        flex items-center gap-3 p-4 rounded-xl transition-all duration-300
                                        ${isActiveLink('/')
                                        ? 'bg-blue-600 text-white'
                                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                                    }
                                    `}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <HomeIcon className="w-5 h-5" />
                                    <span className="font-medium">صفحه اصلی</span>
                                    {isActiveLink('/') && <CheckBadgeIcon className="w-4 h-4 text-yellow-300 mr-auto" />}
                                </Link>

                                {/* Services */}
                                <div className="space-y-2">
                                    <button
                                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                                        className="flex items-center justify-between w-full p-4 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-colors"
                                    >
                                        <div className="flex items-center gap-3">
                                            <CogIcon className="w-5 h-5" />
                                            <span className="font-medium">خدمات ما</span>
                                        </div>
                                        <ChevronDownIcon className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                                    </button>

                                    {isServicesOpen && (
                                        <div className="mr-4 space-y-1">
                                            {servicesMenuData.map((category, categoryIndex) => (
                                                <div key={categoryIndex} className="space-y-1">
                                                    <div className="flex items-center gap-2 p-3 text-sm font-medium text-gray-600 dark:text-gray-400">
                                                        <category.categoryIcon className="w-4 h-4" />
                                                        <span>{category.category}</span>
                                                    </div>
                                                    {category.services.map((service, serviceIndex) => (
                                                        <Link
                                                            key={serviceIndex}
                                                            href={service.href}
                                                            className="flex items-center gap-3 p-3 mr-4 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                                                            onClick={() => setIsMobileMenuOpen(false)}
                                                        >
                                                            <service.icon className="w-4 h-4" />
                                                            <span>{service.title}</span>
                                                            {service.isNew && (
                                                                <span className="px-2 py-0.5 bg-green-500 text-white text-xs rounded-full">
                                                                    جدید
                                                                </span>
                                                            )}
                                                        </Link>
                                                    ))}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Other Navigation Items */}
                                {navigationItems.slice(1).map((item, index) => (
                                    <Link
                                        key={index}
                                        href={item.href}
                                        className={`
                                            flex items-center gap-3 p-4 rounded-xl transition-all duration-300
                                            ${isActiveLink(item.href)
                                            ? 'bg-blue-600 text-white'
                                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                                        }
                                        `}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        <item.icon className="w-5 h-5" />
                                        <span className="font-medium">{item.title}</span>
                                        {isActiveLink(item.href) && <CheckBadgeIcon className="w-4 h-4 text-yellow-300 mr-auto" />}
                                    </Link>
                                ))}
                            </div>

                            {/* Mobile CTA */}
                            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                                <Link
                                    href="/contact"
                                    className="flex items-center justify-center gap-2 w-full p-4 bg-gradient-to-r from-blue-600 to-sky-600 text-white rounded-xl hover:shadow-lg transition-all duration-300 font-medium"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <ChatBubbleLeftRightIcon className="w-5 h-5" />
                                    <span>درخواست مشاوره رایگان</span>
                                </Link>
                                <div className="text-center text-sm text-gray-500 dark:text-gray-400 mt-3">
                                    {companyInfo.experienceYears} سال تجربه • {companyInfo.projectsCount} پروژه موفق
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </header>

            {/* Header Spacer */}
            <div
                className={`
                    transition-all duration-500 ease-in-out
                    ${isTopBarVisible ? 'h-[60px] lg:h-[92px]' : 'h-16 lg:h-20'}
                `}
            />
        </>
    );
}