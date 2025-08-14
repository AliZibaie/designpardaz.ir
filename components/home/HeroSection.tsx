import React from 'react';
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

export default function HeroSection() {
    return (
        <>
            {/* Advanced SEO Head Section - Professional Grade */}
            <head>
                {/* Primary Title Tags - Optimized for Persian Search */}
                <title>دیزاین پرداز | طراحی گرافیک، طراحی سایت، برنامه‌نویسی و سئو حرفه‌ای در تهران ایران</title>

                {/* Meta Description - Enhanced for CTR */}
                <meta name="description" content="دیزاین پرداز تهران | بهترین خدمات طراحی گرافیک مدرن، طراحی سایت واکنش‌گرا، طراحی UI/UX، برنامه‌نویسی وب و سئو تضمینی. ✅ مشاوره رایگان ✅ ضمانت کیفیت ✅ تحویل سریع ☎️ 021-3333-4444" />

                {/* Enhanced Keywords - Long-tail & Local SEO */}
                <meta name="keywords" content="دیزاین پرداز، طراحی گرافیک تهران، طراحی سایت حرفه‌ای، طراحی بصری خلاقانه، طراحی رابط کاربری UI UX، برنامه نویسی سایت، برنامه نویسی سامانه، توسعه وب مدرن، سئو سایت تهران، سئو حرفه‌ای، بهینه سازی سایت، طراحی وب مدرن، فرانت اند، بک اند، طراحی لوگو حرفه‌ای، طراحی بنر تبلیغاتی، طراحی کاتالوگ، طراحی اپلیکیشن موبایل، سئو محلی تهران، طراحی فروشگاه اینترنتی، طراحی سامانه مدیریت، طراحی وب سایت ارزان، شرکت طراحی سایت تهران، آژانس دیجیتال مارکتینگ تهران" />

                {/* Advanced Meta Tags */}
                <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
                <meta name="author" content="دیزاین پرداز - Design Pardaz" />
                <meta name="publisher" content="دیزاین پرداز" />
                <meta name="copyright" content="© 2025 دیزاین پرداز. تمامی حقوق محفوظ است." />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
                <meta httpEquiv="Content-Language" content="fa-IR" />
                <meta name="language" content="Persian" />
                <meta name="geo.region" content="IR-07" />
                <meta name="geo.placename" content="Tehran, Iran" />
                <meta name="geo.position" content="35.6892;51.3890" />
                <meta name="ICBM" content="35.6892, 51.3890" />

                {/* Business Information */}
                <meta name="contact" content="info@designpardaz.ir" />
                <meta name="reply-to" content="info@designpardaz.ir" />
                <meta name="owner" content="دیزاین پرداز" />
                <meta name="url" content="https://designpardaz.ir" />
                <meta name="identifier-URL" content="https://designpardaz.ir" />
                <meta name="category" content="Web Design, Graphic Design, Programming, SEO Services" />
                <meta name="coverage" content="Tehran, Iran" />
                <meta name="distribution" content="Global" />
                <meta name="rating" content="General" />
                <meta name="revisit-after" content="1 days" />

                {/* Enhanced Open Graph Meta Tags */}
                <meta property="og:title" content="دیزاین پرداز - طراحی گرافیک، سایت، برنامه‌نویسی و سئو حرفه‌ای در تهران" />
                <meta property="og:description" content="بهترین خدمات طراحی گرافیک، طراحی سایت واکنش‌گرا، UI/UX، برنامه‌نویسی وب و سئو تضمینی با کیفیت برتر در تهران" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://designpardaz.ir" />
                <meta property="og:site_name" content="دیزاین پرداز | Design Pardaz" />
                <meta property="og:locale" content="fa_IR" />
                <meta property="og:locale:alternate" content="en_US" />
                <meta property="og:image" content="https://designpardaz.ir/images/og-image.jpg" />
                <meta property="og:image:alt" content="دیزاین پرداز - خدمات طراحی و برنامه‌نویسی حرفه‌ای" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="business:contact_data:street_address" content="تهران، ایران" />
                <meta property="business:contact_data:locality" content="Tehran" />
                <meta property="business:contact_data:region" content="Tehran Province" />
                <meta property="business:contact_data:postal_code" content="1111111111" />
                <meta property="business:contact_data:country_name" content="Iran" />

                {/* Enhanced Twitter Card Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@designpardaz" />
                <meta name="twitter:creator" content="@designpardaz" />
                <meta name="twitter:title" content="دیزاین پرداز - طراحی گرافیک، سایت، برنامه‌نویسی و سئو حرفه‌ای" />
                <meta name="twitter:description" content="بهترین خدمات طراحی و توسعه وب در تهران با کیفیت برتر و قیمت مناسب" />
                <meta name="twitter:image" content="https://designpardaz.ir/images/twitter-image.jpg" />
                <meta name="twitter:image:alt" content="دیزاین پرداز - خدمات حرفه‌ای طراحی و برنامه‌نویسی" />

                {/* Advanced Technical SEO */}
                <link rel="canonical" href="https://designpardaz.ir" />
                <link rel="alternate" hrefLang="fa" href="https://designpardaz.ir" />
                <link rel="alternate" hrefLang="fa-ir" href="https://designpardaz.ir" />
                <link rel="alternate" hrefLang="x-default" href="https://designpardaz.ir" />
                <meta name="theme-color" content="#1e293b" />
                <meta name="msapplication-TileColor" content="#1e293b" />
                <meta name="msapplication-navbutton-color" content="#1e293b" />
                <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

                {/* DNS Prefetch for Performance */}
                <link rel="dns-prefetch" href="//fonts.googleapis.com" />
                <link rel="dns-prefetch" href="//cdnjs.cloudflare.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

                {/* Enhanced Local Business Schema - Professional Grade */}
                <script type="application/ld+json">
                    {`
                {
                  "@context": "https://schema.org",
                  "@type": ["LocalBusiness", "ProfessionalService", "Organization"],
                  "@id": "https://designpardaz.ir/#organization",
                  "name": "دیزاین پرداز",
                  "alternateName": "Design Pardaz",
                  "description": "شرکت دیزاین پرداز ارائه‌دهنده خدمات حرفه‌ای طراحی گرافیک، طراحی سایت، برنامه‌نویسی وب، طراحی UI/UX و سئو در تهران",
                  "url": "https://designpardaz.ir",
                  "logo": "https://designpardaz.ir/images/logo.png",
                  "image": [
                    "https://designpardaz.ir/images/hero-image.jpg",
                    "https://designpardaz.ir/images/portfolio-1.jpg",
                    "https://designpardaz.ir/images/portfolio-2.jpg"
                  ],
                  "telephone": "021-3333-4444",
                  "email": "info@designpardaz.ir",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "خیابان اصلی، پلاک 123",
                    "addressLocality": "تهران",
                    "addressRegion": "تهران",
                    "postalCode": "1111111111",
                    "addressCountry": "IR"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 35.6892,
                    "longitude": 51.3890
                  },
                  "areaServed": [
                    {
                      "@type": "City",
                      "name": "تهران"
                    },
                    {
                      "@type": "Country", 
                      "name": "ایران"
                    }
                  ],
                  "serviceArea": {
                    "@type": "GeoCircle",
                    "geoMidpoint": {
                      "@type": "GeoCoordinates",
                      "latitude": 35.6892,
                      "longitude": 51.3890
                    },
                    "geoRadius": "50000"
                  },
                  "priceRange": "$$",
                  "currenciesAccepted": "IRR",
                  "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
                  "openingHours": "Mo-Th 09:00-18:00, Sa 09:00-15:00",
                  "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "خدمات دیزاین پرداز",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "طراحی گرافیک حرفه‌ای",
                          "description": "طراحی لوگو، بنر، کاتالوگ و محتوای بصری"
                        }
                      },
                      {
                        "@type": "Offer", 
                        "itemOffered": {
                          "@type": "Service",
                          "name": "طراحی سایت واکنش‌گرا",
                          "description": "طراحی و توسعه وب‌سایت‌های مدرن و واکنش‌گرا"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service", 
                          "name": "برنامه‌نویسی سامانه‌های وب",
                          "description": "توسعه اپلیکیشن‌های وب و سامانه‌های مدیریت"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "طراحی رابط کاربری UI/UX", 
                          "description": "طراحی تجربه و رابط کاربری بهینه"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "خدمات سئو و بهینه‌سازی",
                          "description": "بهینه‌سازی سایت برای موتورهای جستجو"
                        }
                      }
                    ]
                  },
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.8",
                    "reviewCount": "127",
                    "bestRating": "5",
                    "worstRating": "1"
                  },
                  "founder": {
                    "@type": "Person",
                    "name": "محمد رضا محمدی"
                  },
                  "foundingDate": "2020-03-15",
                  "slogan": "طراحی بصری و برنامه‌نویسی نوین",
                  "knowsAbout": [
                    "طراحی گرافیک",
                    "طراحی وب سایت", 
                    "برنامه نویسی",
                    "UI/UX Design",
                    "سئو و بهینه سازی",
                    "دیجیتال مارکتینگ"
                  ],
                  "memberOf": {
                    "@type": "Organization",
                    "name": "اتحادیه طراحان گرافیک ایران"
                  },
                  "sameAs": [
                    "https://www.instagram.com/designpardaz",
                    "https://www.linkedin.com/company/designpardaz", 
                    "https://t.me/designpardaz"
                  ]
                }
                `}
                </script>

                {/* Website Schema */}
                <script type="application/ld+json">
                    {`
                {
                  "@context": "https://schema.org",
                  "@type": "WebSite",
                  "@id": "https://designpardaz.ir/#website",
                  "url": "https://designpardaz.ir",
                  "name": "دیزاین پرداز",
                  "description": "بهترین خدمات طراحی گرافیک، طراحی سایت، برنامه‌نویسی و سئو در تهران",
                  "publisher": {
                    "@id": "https://designpardaz.ir/#organization"
                  },
                  "potentialAction": [
                    {
                      "@type": "SearchAction",
                      "target": {
                        "@type": "EntryPoint",
                        "urlTemplate": "https://designpardaz.ir/search?q={search_term_string}"
                      },
                      "query-input": "required name=search_term_string"
                    }
                  ],
                  "inLanguage": "fa-IR"
                }
                `}
                </script>

                {/* FAQ Schema for SEO */}
                <script type="application/ld+json">
                    {`
                {
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  "mainEntity": [
                    {
                      "@type": "Question", 
                      "name": "خدمات دیزاین پرداز چیست؟",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "دیزاین پرداز خدمات طراحی گرافیک، طراحی سایت، برنامه‌نویسی سامانه، طراحی UI/UX و سئو حرفه‌ای را در تهران ارائه می‌دهد."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "آیا دیزاین پرداز مشاوره رایگان ارائه می‌دهد؟", 
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "بله، ما مشاوره رایگان برای تمامی پروژه‌های طراحی و برنامه‌نویسی ارائه می‌دهیم."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "مدت زمان تحویل پروژه چقدر است؟",
                      "acceptedAnswer": {
                        "@type": "Answer", 
                        "text": "مدت زمان تحویل بسته به نوع پروژه متفاوت است. معمولاً طراحی گرافیک 3-7 روز و طراحی سایت 2-4 هفته زمان نیاز دارد."
                      }
                    }
                  ]
                }
                `}
                </script>

                {/* Service Schema */}
                <script type="application/ld+json">
                    {`
                {
                  "@context": "https://schema.org",
                  "@type": "Service",
                  "name": "خدمات طراحی و برنامه‌نویسی دیزاین پرداز",
                  "description": "ارائه خدمات کامل طراحی گرافیک، طراحی سایت، برنامه‌نویسی و سئو",
                  "provider": {
                    "@id": "https://designpardaz.ir/#organization"
                  },
                  "areaServed": "تهران، ایران",
                  "availableChannel": {
                    "@type": "ServiceChannel", 
                    "serviceUrl": "https://designpardaz.ir",
                    "serviceName": "خدمات آنلاین",
                    "servicePhone": "021-3333-4444"
                  }
                }
                `}
                </script>
            </head>

            <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800">

                {/* Custom Styles */}
                <style jsx>{`
                    @keyframes gradient-x {
                        0%, 100% {
                            transform: translateX(0%) translateY(0%);
                        }
                        50% {
                            transform: translateX(100%) translateY(100%);
                        }
                    }

                    @keyframes float {
                        0%, 100% {
                            transform: translateY(0px) rotate(0deg);
                        }
                        50% {
                            transform: translateY(-20px) rotate(5deg);
                        }
                    }

                    @keyframes pulse-glow {
                        0%, 100% {
                            box-shadow: 0 0 25px rgba(56, 189, 248, 0.4), 0 0 50px rgba(14, 165, 233, 0.2);
                        }
                        50% {
                            box-shadow: 0 0 35px rgba(56, 189, 248, 0.6), 0 0 70px rgba(14, 165, 233, 0.3);
                        }
                    }

                    @keyframes shimmer {
                        0% {
                            background-position: -200% center;
                        }
                        100% {
                            background-position: 200% center;
                        }
                    }

                    .animate-gradient-x {
                        animation: gradient-x 20s ease infinite;
                    }

                    .animate-float {
                        animation: float 6s ease-in-out infinite;
                    }

                    .animate-pulse-glow {
                        animation: pulse-glow 3s ease-in-out infinite;
                    }

                    .animate-shimmer {
                        background: linear-gradient(90deg, transparent, rgba(56, 189, 248, 0.4), transparent);
                        background-size: 200% 100%;
                        animation: shimmer 3s infinite;
                    }

                    .text-brand-primary {
                        color: #38bdf8;
                    }

                    .text-brand-secondary {
                        color: #0ea5e9;
                    }

                    .text-brand-accent {
                        color: #7c3aed;
                    }

                    .bg-brand-primary {
                        background-color: #38bdf8;
                    }

                    .bg-brand-secondary {
                        background-color: #0ea5e9;
                    }
                `}</style>

                {/* Background Animation */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-sky-400/10 via-blue-500/15 to-indigo-600/10 animate-gradient-x"></div>
                    <div className="absolute inset-0">
                        {[...Array(50)].map((_, i) => (
                            <div
                                key={i}
                                className="absolute animate-float"
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                    animationDelay: `${Math.random() * 4}s`,
                                    animationDuration: `${4 + Math.random() * 6}s`
                                }}
                            >
                                <div className={`w-2 h-2 rounded-full blur-sm ${
                                    i % 3 === 0 ? 'bg-sky-400/40' :
                                        i % 3 === 1 ? 'bg-blue-500/30' : 'bg-indigo-400/35'
                                }`}></div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">

                        {/* Content */}
                        <div className="text-center lg:text-right space-y-8">
                            <div className="space-y-6">
                                <div className="inline-flex items-center gap-2 px-5 py-3 bg-sky-500/20 text-sky-300 rounded-full text-sm font-medium backdrop-blur-sm border border-sky-400/30 animate-shimmer">
                                    <LightBulbIcon className="w-4 h-4" />
                                    <span>ایده‌های خلاقانه</span>
                                    <StarIcon className="w-4 h-4 fill-current text-yellow-400" />
                                </div>

                                <h1 className="text-4xl lg:text-6xl font-black text-white leading-tight">
                                    طراحی بصری
                                    <span className="block text-sky-200 font-black">
                                        و برنامه‌نویسی
                                    </span>
                                    <span className="block text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-sky-500 bg-clip-text">
                                        نسل جدید
                                    </span>
                                </h1>

                                <p className="text-xl text-gray-200 leading-relaxed max-w-2xl">
                                    ما با تیمی جوان و خلاق در
                                    <strong className="text-sky-300"> طراحی گرافیک</strong>،
                                    <strong className="text-blue-300"> طراحی سایت</strong>،
                                    <strong className="text-indigo-300"> برنامه‌نویسی</strong> و
                                    <strong className="text-emerald-300"> سئو حرفه‌ای</strong>
                                    خدمات
                                    <strong className="text-violet-300"> نوآورانه</strong> و
                                    <strong className="text-pink-300"> مدرن</strong> ارائه می‌دهیم.
                                </p>
                            </div>

                            {/* Services Grid */}
                            <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
                                {Object.entries(companyData.services).map(([key, value], index) => {
                                    const serviceConfig = {
                                        webDesign: { icon: ComputerDesktopIcon, color: 'text-sky-400', bgColor: 'bg-sky-500/10' },
                                        graphicDesign: { icon: PaintBrushIcon, color: 'text-blue-400', bgColor: 'bg-blue-500/10' },
                                        uiDesign: { icon: EyeIcon, color: 'text-indigo-400', bgColor: 'bg-indigo-500/10' },
                                        programming: { icon: CodeBracketIcon, color: 'text-purple-400', bgColor: 'bg-purple-500/10' },
                                        seoService: { icon: MagnifyingGlassIcon, color: 'text-emerald-400', bgColor: 'bg-emerald-500/10' }
                                    };
                                    const config = serviceConfig[key as keyof typeof serviceConfig];
                                    const IconComponent = config.icon;

                                    return (
                                        <div key={index} className="text-center group cursor-pointer">
                                            <div className={`${config.bgColor} ${config.color} mb-3 p-4 rounded-2xl group-hover:scale-110 transition-all duration-300 backdrop-blur-sm border border-white/10 group-hover:border-white/20`}>
                                                <IconComponent className="w-8 h-8 mx-auto" />
                                            </div>
                                            <div className="text-sm text-gray-200 leading-tight font-medium group-hover:text-white transition-colors duration-300">{value}</div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <button className="group relative px-8 py-4 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold rounded-xl hover:from-sky-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-2xl animate-pulse-glow">
                                    <span className="flex items-center gap-2">
                                        <RocketLaunchIcon className="w-5 h-5 group-hover:animate-bounce" />
                                        مشاوره رایگان
                                        <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-sky-600 to-blue-700 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity -z-10"></div>
                                </button>

                                <button className="group px-8 py-4 border-2 border-sky-400/30 text-white font-bold rounded-xl hover:bg-sky-500/10 hover:border-sky-400/50 transition-all duration-300 backdrop-blur-sm">
                                    <span className="flex items-center gap-2">
                                        <PlayCircleIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                        نمونه کارها
                                    </span>
                                </button>
                            </div>

                            {/* Trust Indicators */}
                            <div className="flex items-center justify-center lg:justify-start gap-6 text-sm text-gray-300">
                                <div className="flex items-center gap-2 group">
                                    <ShieldCheckIcon className="w-4 h-4 text-sky-300 group-hover:text-sky-200 transition-colors" />
                                    <span className="group-hover:text-gray-200 transition-colors">ضمانت کیفیت</span>
                                </div>
                                <div className="flex items-center gap-2 group">
                                    <ClockIcon className="w-4 h-4 text-blue-300 group-hover:text-blue-200 transition-colors" />
                                    <span className="group-hover:text-gray-200 transition-colors">پشتیبانی مداوم</span>
                                </div>
                                <div className="flex items-center gap-2 group">
                                    <BoltIcon className="w-4 h-4 text-indigo-300 group-hover:text-indigo-200 transition-colors" />
                                    <span className="group-hover:text-gray-200 transition-colors">تحویل سریع</span>
                                </div>
                            </div>
                        </div>

                        {/* Hero Visual - SEO Optimized Display */}
                        <div className="relative" role="img" aria-label="نمایش تعاملی خدمات دیزاین پرداز - طراحی گرافیک، طراحی سایت، برنامه نویسی و سئو">
                            <div className="relative mx-auto max-w-lg">
                                {/* Main Device - Company Portfolio Showcase */}
                                <div className="relative transform rotate-3 hover:rotate-0 transition-transform duration-700 group"
                                     itemScope itemType="https://schema.org/SoftwareApplication"
                                     aria-label="پنل کنترل خدمات دیزاین پرداز">

                                    <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 shadow-2xl border border-sky-400/20 group-hover:border-sky-400/40 transition-all duration-500">
                                        <div className="bg-gradient-to-br from-sky-500 via-blue-500 to-indigo-600 rounded-2xl p-6 text-white relative overflow-hidden">
                                            {/* Background pattern */}
                                            <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-white/5"></div>

                                            <div className="space-y-4 relative z-10">
                                                {/* Company Header with SEO */}
                                                <div className="flex items-center gap-3" itemScope itemType="https://schema.org/Organization">
                                                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/10"
                                                         aria-label="لوگو دیزاین پرداز">
                                                        <PaintBrushIcon className="w-6 h-6" />
                                                    </div>
                                                    <div>
                                                        <h3 className="font-bold text-lg" itemProp="name">دیزاین پرداز</h3>
                                                        <p className="text-sm opacity-90" itemProp="description">طراحی بصری نوین</p>
                                                    </div>
                                                </div>

                                                {/* Services Status Display with SEO */}
                                                <div className="space-y-3" role="region" aria-label="وضعیت خدمات فعال دیزاین پرداز">
                                                    {/* Web Design Service - SEO Enhanced */}
                                                    <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm border border-white/10 hover:bg-white/15 transition-all duration-300"
                                                         itemScope itemType="https://schema.org/Service">
                                                        <div className="flex items-center justify-between">
                                                            <span className="text-sm flex items-center gap-2" itemProp="name">
                                                                <ComputerDesktopIcon className="w-4 h-4" aria-hidden="true" />
                                                                <span itemProp="description">طراحی سایت حرفه‌ای</span>
                                                            </span>
                                                            <span className="text-green-200 font-bold text-xs px-2 py-1 bg-green-500/30 rounded-full border border-green-400/20"
                                                                  role="status" aria-label="خدمات طراحی سایت فعال">فعال</span>
                                                        </div>
                                                        <div className="mt-2 bg-white/20 rounded-full h-2" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} aria-label="پیشرفت پروژه های طراحی سایت">
                                                            <div className="bg-green-400 h-2 rounded-full w-full animate-pulse shadow-sm"></div>
                                                        </div>
                                                        <meta itemProp="serviceType" content="طراحی وب سایت واکنش‌گرا" />
                                                        <meta itemProp="provider" content="دیزاین پرداز" />
                                                        <meta itemProp="areaServed" content="تهران، ایران" />
                                                        <meta itemProp="category" content="طراحی وب" />
                                                    </div>

                                                    {/* Programming Service - SEO Enhanced */}
                                                    <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm border border-white/10 hover:bg-white/15 transition-all duration-300"
                                                         itemScope itemType="https://schema.org/Service">
                                                        <div className="flex items-center justify-between">
                                                            <span className="text-sm flex items-center gap-2" itemProp="name">
                                                                <CodeBracketIcon className="w-4 h-4" aria-hidden="true" />
                                                                <span itemProp="description">برنامه‌نویسی</span>
                                                            </span>
                                                            <span className="text-blue-200 font-bold text-xs px-2 py-1 bg-blue-500/30 rounded-full border border-blue-400/20"
                                                                  role="status" aria-label="خدمات برنامه نویسی فعال">فعال</span>
                                                        </div>
                                                        <div className="mt-2 bg-white/20 rounded-full h-2" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} aria-label="پیشرفت پروژه های برنامه نویسی">
                                                            <div className="bg-blue-400 h-2 rounded-full w-4/5 animate-pulse shadow-sm"></div>
                                                        </div>
                                                        <meta itemProp="serviceType" content="برنامه نویسی وب و اپلیکیشن" />
                                                        <meta itemProp="category" content="توسعه نرم افزار" />
                                                        <meta itemProp="provider" content="دیزاین پرداز" />
                                                        <meta itemProp="areaServed" content="تهران، ایران" />
                                                    </div>

                                                    {/* Graphic Design Service - SEO Enhanced */}
                                                    <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm border border-white/10 hover:bg-white/15 transition-all duration-300"
                                                         itemScope itemType="https://schema.org/Service">
                                                        <div className="flex items-center justify-between">
                                                            <span className="text-sm flex items-center gap-2" itemProp="name">
                                                                <PaintBrushIcon className="w-4 h-4" aria-hidden="true" />
                                                                <span itemProp="description">طراحی گرافیک مدرن</span>
                                                            </span>
                                                            <span className="text-purple-200 font-bold text-xs px-2 py-1 bg-purple-500/30 rounded-full border border-purple-400/20"
                                                                  role="status" aria-label="خدمات طراحی گرافیک فعال">فعال</span>
                                                        </div>
                                                        <div className="mt-2 bg-white/20 rounded-full h-2" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} aria-label="پیشرفت پروژه های طراحی گرافیک">
                                                            <div className="bg-purple-400 h-2 rounded-full w-3/4 animate-pulse shadow-sm"></div>
                                                        </div>
                                                        <meta itemProp="serviceType" content="طراحی گرافیکی و هویت بصری" />
                                                        <meta itemProp="category" content="طراحی بصری" />
                                                        <meta itemProp="provider" content="دیزاین پرداز" />
                                                        <meta itemProp="areaServed" content="تهران، ایران" />
                                                    </div>

                                                    {/* UI/UX Design Service - SEO Enhanced */}
                                                    <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm border border-white/10 hover:bg-white/15 transition-all duration-300"
                                                         itemScope itemType="https://schema.org/Service">
                                                        <div className="flex items-center justify-between">
                                                            <span className="text-sm flex items-center gap-2" itemProp="name">
                                                                <EyeIcon className="w-4 h-4" aria-hidden="true" />
                                                                <span itemProp="description">طراحی رابط کاربری</span>
                                                            </span>
                                                            <span className="text-sky-200 font-bold text-xs px-2 py-1 bg-sky-500/30 rounded-full border border-sky-400/20"
                                                                  role="status" aria-label="خدمات طراحی رابط کاربری فعال">فعال</span>
                                                        </div>
                                                        <div className="mt-2 bg-white/20 rounded-full h-2" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} aria-label="پیشرفت پروژه های طراحی UI/UX">
                                                            <div className="bg-sky-400 h-2 rounded-full w-[90%] animate-pulse shadow-sm"></div>
                                                        </div>
                                                        <meta itemProp="serviceType" content="طراحی رابط کاربری UI/UX" />
                                                        <meta itemProp="category" content="تجربه کاربری" />
                                                        <meta itemProp="provider" content="دیزاین پرداز" />
                                                        <meta itemProp="areaServed" content="تهران، ایران" />
                                                    </div>

                                                    {/* SEO Service - NEW ADDITION */}
                                                    <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm border border-white/10 hover:bg-white/15 transition-all duration-300"
                                                         itemScope itemType="https://schema.org/Service">
                                                        <div className="flex items-center justify-between">
                                                            <span className="text-sm flex items-center gap-2" itemProp="name">
                                                                <MagnifyingGlassIcon className="w-4 h-4" aria-hidden="true" />
                                                                <span itemProp="description">خدمات سئو حرفه‌ای</span>
                                                            </span>
                                                            <span className="text-emerald-200 font-bold text-xs px-2 py-1 bg-emerald-500/30 rounded-full border border-emerald-400/20"
                                                                  role="status" aria-label="خدمات سئو و بهینه سازی فعال">فعال</span>
                                                        </div>
                                                        <div className="mt-2 bg-white/20 rounded-full h-2" role="progressbar" aria-valuenow={95} aria-valuemin={0} aria-valuemax={100} aria-label="پیشرفت پروژه های سئو و بهینه سازی">
                                                            <div className="bg-emerald-400 h-2 rounded-full w-[95%] animate-pulse shadow-sm"></div>
                                                        </div>
                                                        <meta itemProp="serviceType" content="سئو و بهینه‌سازی موتورهای جستجو" />
                                                        <meta itemProp="category" content="دیجیتال مارکتینگ" />
                                                        <meta itemProp="provider" content="دیزاین پرداز" />
                                                        <meta itemProp="areaServed" content="تهران، ایران" />
                                                        <meta itemProp="offers" content="سئو محلی، سئو فنی، تولید محتوا، لینک‌سازی" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating Service Icons with SEO */}
                                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-sky-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg animate-bounce border border-white/10"
                                     role="img" aria-label="آیکن طراحی گرافیک">
                                    <PaintBrushIcon className="w-8 h-8 text-white" />
                                </div>

                                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg animate-bounce border border-white/10"
                                     style={{animationDelay: '1s'}}
                                     role="img" aria-label="آیکن برنامه نویسی">
                                    <CodeBracketIcon className="w-8 h-8 text-white" />
                                </div>

                                <div className="absolute top-1/2 -left-8 w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg animate-pulse"
                                     role="img" aria-label="آیکن طراحی سایت">
                                    <ComputerDesktopIcon className="w-6 h-6 text-white" />
                                </div>

                                <div className="absolute top-1/4 -right-6 w-10 h-10 bg-gradient-to-r from-purple-500 to-sky-500 rounded-lg flex items-center justify-center shadow-lg animate-bounce border border-white/10"
                                     style={{animationDelay: '2s'}}
                                     role="img" aria-label="آیکن ایده های خلاقانه">
                                    <LightBulbIcon className="w-5 h-5 text-white" />
                                </div>

                                <div className="absolute bottom-1/4 right-8 w-8 h-8 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg animate-bounce"
                                     style={{animationDelay: '0.5s'}}
                                     role="img" aria-label="آیکن طراحی رابط کاربری">
                                    <EyeIcon className="w-4 h-4 text-white" />
                                </div>

                                {/* NEW: SEO Service Floating Icon */}
                                <div className="absolute top-3/4 -right-4 w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center shadow-lg animate-bounce border border-white/10"
                                     style={{animationDelay: '1.5s'}}
                                     role="img" aria-label="آیکن خدمات سئو">
                                    <MagnifyingGlassIcon className="w-5 h-5 text-white" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <div className="flex flex-col items-center gap-2">
                        <div className="text-xs text-sky-300/60 font-medium">ادامه مطالب</div>
                        <ChevronDownIcon className="w-6 h-6 text-sky-300/60" />
                    </div>
                </div>
            </section>
        </>
    );
}