import type { Metadata } from "next/types";
import { ThemeProvider } from "next-themes";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";
import Head from 'next/head';
import "./globals.css";


export const metadata: Metadata = {
    title: {
        template: "%s | طراح سایت حرفه‌ای - دیزاین پرداز | سئو و گرافیک",
        default: "طراح سایت حرفه‌ای | خدمات سئو و طراحی گرافیک - دیزاین پرداز | بهترین طراح وب‌سایت ایران",
    },
    description: "طراح سایت حرفه‌ای دیزاین پرداز - خدمات کامل طراحی وب‌سایت، سئو حرفه‌ای و طراحی گرافیک. بهترین طراح وب ایران با ۸ سال تجربه. طراحی سایت + سئو + گرافیک در یک پکیج. مشاوره رایگان ☎️ 09123334444",
    keywords: [
        // Primary Keywords - High Volume
        "طراح سایت",
        "طراح وب سایت",
        "طراح وب",
        "سئو",
        "سئو سایت",
        "بهینه سازی سایت",
        "طراحی گرافیک",
        "گرافیست",
        "طراح گرافیک",

        // Long-tail Keywords - طراح سایت
        "بهترین طراح سایت تهران",
        "طراح سایت حرفه ای",
        "طراح سایت ارزان",
        "طراح سایت شرکتی",
        "طراح سایت فروشگاهی",
        "طراح سایت در تهران",
        "طراح سایت با تجربه",
        "طراح سایت واکنش گرا",
        "طراح وب سایت مدرن",
        "طراح سایت wordpress",

        // Long-tail Keywords - سئو
        "خدمات سئو",
        "سئو تضمینی",
        "سئو سایت تهران",
        "سئو حرفه ای",
        "بهینه سازی موتور جستجو",
        "سئو گوگل",
        "سئو وب سایت",
        "کنسولت سئو",
        "متخصص سئو",
        "سئو لوکال",
        "آموزش سئو",
        "تحلیل سئو",
        "بک لینک",
        "کلید واژه سئو",

        // Long-tail Keywords - گرافیک
        "طراحی لوگو",
        "طراحی هویت بصری",
        "طراح گرافیک تهران",
        "طراحی بنر",
        "طراحی کاتالوگ",
        "طراحی بروشور",
        "طراحی کارت ویزیت",
        "طراحی پوستر",
        "طراحی فلایر",
        "موشن گرافیک",
        "طراحی UI UX",
        "طراحی رابط کاربری",

        // Commercial Intent Keywords
        "قیمت طراحی سایت",
        "هزینه طراح سایت",
        "سفارش طراحی سایت",
        "استخدام طراح سایت",
        "شرکت طراحی سایت",
        "نمونه کار طراح سایت",

        // Semantic & Related Keywords
        "توسعه دهنده وب",
        "برنامه نویس سایت",
        "فرانت اند دولوپر",
        "بک اند دولوپر",
        "طراحی ریسپانسیو",
        "UX دیزاینر",
        "UI دیزاینر",
        "وب دیزاینر",

        // Location-based Keywords
        "طراح سایت تهران",
        "طراح سایت اصفهان",
        "طراح سایت مشهد",
        "طراح سایت شیراز",
        "طراح سایت کرج",
        "طراح سایت ایران",

        // Industry-specific Keywords
        "طراح سایت پزشکی",
        "طراح سایت املاک",
        "طراح سایت رستوران",
        "طراح سایت آموزشی",
        "طراح سایت خبری",
        "طراح سایت فروشگاهی",

        // Questions & Voice Search
        "چطور سایت طراحی کنم",
        "بهترین طراح سایت کیه",
        "چقدر طول میکشه سایت طراحی شه",
        "چجوری سئو کنم",
        "چطور گوگل رتبه بگیرم"
    ],
    authors: [{
        name: "دیزاین پرداز - تیم طراحی جوان",
        url: "https://designpardaz.ir"
    }],
    creator: "دیزاین پرداز - استودیو طراحی دیجیتال نوین",
    publisher: "تیم طراحی جوان دیزاین پرداز",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL("https://designpardaz.ir"),
    alternates: {
        canonical: "/",
        languages: {
            "fa-IR": "/",
            "en-US": "/en",
        },
    },
    openGraph: {
        title: "دیزاین پرداز - طراحی وب مدرن، گرافیک حرفه‌ای و برندینگ خلاقانه",
        description: "تیم جوان و خلاق دیزاین پرداز ارائه‌دهنده خدمات کامل طراحی وب‌سایت مدرن، گرافیک نوآورانه، سئو پیشرفته و برندینگ حرفه‌ای. ما با استفاده از جدیدترین تکنولوژی‌ها برند شما را در دنیای دیجیتال متمایز می‌کنیم.",
        url: "https://designpardaz.ir",
        siteName: "دیزاین پرداز - استودیو طراحی نوین",
        images: [
            {
                url: "/images/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "دیزاین پرداز - تیم جوان طراحی وب و گرافیک",
                type: "image/jpeg",
            },
            {
                url: "/images/og-logo.png",
                width: 400,
                height: 400,
                alt: "لوگو دیزاین پرداز - استودیو طراحی مدرن",
                type: "image/png",
            },
        ],
        locale: "fa_IR",
        type: "website",
        countryName: "Iran",
    },
    twitter: {
        card: "summary_large_image",
        title: "دیزاین پرداز - طراحی وب مدرن و خدمات گرافیکی نوآورانه",
        description: "تیم جوان و خلاق ارائه‌دهنده خدمات کامل طراحی وب‌سایت، گرافیک، سئو و برندینگ با کیفیت بالا و ایده‌های نوین",
        images: ["/images/twitter-image.jpg"],
        creator: "@designpardaz",
        site: "@designpardaz",
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    verification: {
        google: "google-site-verification=gh2SqMVJ5_-TLEXGXZCxjG71SvyIIsvrdeBwAl5meuc",
        yandex: "yandex-verification-code",
        other: {
            "msvalidate.01": "bing-verification-code",
        },
    },
    category: "creative design services",
    classification: "Digital Creative Services",
    referrer: "origin-when-cross-origin",
    colorScheme: "light dark",
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "#ffffff" },
        { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
    ],
    viewport: {
        width: "device-width",
        initialScale: 1,
        maximumScale: 5,
        userScalable: true,
        viewportFit: "cover",
    },
    manifest: "/manifest.json",
    icons: {
        icon: [
            { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
            { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
            { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
            { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
        ],
        shortcut: "/favicon.ico",
        apple: [
            { url: "/apple-touch-icon-57x57.png", sizes: "57x57", type: "image/png" },
            { url: "/apple-touch-icon-60x60.png", sizes: "60x60", type: "image/png" },
            { url: "/apple-touch-icon-72x72.png", sizes: "72x72", type: "image/png" },
            { url: "/apple-touch-icon-76x76.png", sizes: "76x76", type: "image/png" },
            { url: "/apple-touch-icon-114x114.png", sizes: "114x114", type: "image/png" },
            { url: "/apple-touch-icon-120x120.png", sizes: "120x120", type: "image/png" },
            { url: "/apple-touch-icon-144x144.png", sizes: "144x144", type: "image/png" },
            { url: "/apple-touch-icon-152x152.png", sizes: "152x152", type: "image/png" },
            { url: "/apple-touch-icon-180x180.png", sizes: "180x180", type: "image/png" },
        ],
        other: [
            { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#3b82f6" },
            { rel: "icon", url: "/favicon.svg", type: "image/svg+xml" },
        ],
    },
    appleWebApp: {
        title: "دیزاین پرداز",
        statusBarStyle: "black-translucent",
        capable: true,
        startupImage: [
            {
                url: "/apple-startup-640x1136.png",
                media: "(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)",
            },
            {
                url: "/apple-startup-750x1334.png",
                media: "(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)",
            },
        ],
    },
    appLinks: {
        ios: {
            url: "https://apps.apple.com/app/designpardaz",
            app_store_id: "designpardaz-app-id",
        },
        android: {
            package: "ir.designpardaz.app",
            url: "https://play.google.com/store/apps/details?id=ir.designpardaz.app",
        },
        web: {
            url: "https://designpardaz.ir",
            should_fallback: true,
        },
    },
    archives: [
        "https://designpardaz.ir/blog/archive/2025",
        "https://designpardaz.ir/portfolio/new",
    ],
    assets: ["https://designpardaz.ir/assets"],
    bookmarks: ["https://designpardaz.ir/favorites"],
    other: {
        "mobile-web-app-capable": "yes",
        "apple-mobile-web-app-capable": "yes",
        "apple-mobile-web-app-status-bar-style": "black-translucent",
        "theme-color": "#3b82f6",
        "msapplication-TileColor": "#3b82f6",
        "msapplication-TileImage": "/mstile-144x144.png",
        "msapplication-config": "/browserconfig.xml",
        "application-name": "دیزاین پرداز",
        "apple-mobile-web-app-title": "دیزاین پرداز",
        "format-detection": "telephone=no",
        "HandheldFriendly": "true",
        "MobileOptimized": "320",
        "subject": "خدمات طراحی دیجیتال نوآورانه",
        "rating": "general",
        "distribution": "global",
        "revisit-after": "3 days",
        "expires": "never",
        "pragma": "no-cache",
        "cache-control": "no-cache",
        "geo.region": "IR",
        "geo.country": "Iran",
        "ICBM": "35.6892,51.3890",
        "DC.title": "دیزاین پرداز - استودیو طراحی دیجیتال",
        "DC.creator": "تیم طراحی جوان دیزاین پرداز",
        "DC.subject": "طراحی وب، گرافیک، برندینگ",
        "DC.description": "خدمات طراحی دیجیتال نوآورانه توسط تیم جوان و خلاق",
        "DC.publisher": "دیزاین پرداز",
        "DC.language": "fa",
        "DC.coverage": "Iran",
        "article:author": "https://designpardaz.ir/about",
        "article:publisher": "https://designpardaz.ir"
    },
};
export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="fa" dir="rtl" suppressHydrationWarning>
        <Head>
            {/* DNS Prefetch & Preconnect for Performance */}
            <link rel="dns-prefetch" href="//fonts.googleapis.com" />
            <link rel="dns-prefetch" href="//designpardaz.ir" />
            <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link rel="preconnect" href="https://designpardaz.ir" crossOrigin="anonymous" />

            {/* Resource Hints for Critical Assets */}
            <link rel="preload" href="/images/hero-bg.jpg" as="image" type="image/jpeg" />
            <link rel="preload" href="/logo.png" as="image" type="image/png" />
            <link rel="preload" href="/images/og-image.jpg" as="image" type="image/jpeg" />

            {/* Security Headers */}
            <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
            <meta httpEquiv="X-Frame-Options" content="DENY" />
            <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
            <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />

            {/* Mobile Optimization */}
            <meta name="mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
            <meta name="apple-mobile-web-app-title" content="دیزاین پرداز" />

            {/* Theme & Colors */}
            <meta name="theme-color" content="#3b82f6" media="(prefers-color-scheme: light)" />
            <meta name="theme-color" content="#1e40af" media="(prefers-color-scheme: dark)" />
            <meta name="msapplication-TileColor" content="#3b82f6" />
            <meta name="msapplication-config" content="/browserconfig.xml" />

            {/* SEO Meta Tags */}
            <meta name="language" content="Persian" />
            <meta name="geo.region" content="IR-07" />
            <meta name="geo.placename" content="Tehran" />
            <meta name="geo.position" content="35.6892;51.3890" />
            <meta name="ICBM" content="35.6892, 51.3890" />

            {/* Dublin Core Metadata */}
            <meta name="DC.title" content="دیزاین پرداز - طراحی وب حرفه‌ای" />
            <meta name="DC.creator" content="دیزاین پرداز" />
            <meta name="DC.subject" content="طراحی وب، سئو، طراحی گرافیک" />
            <meta name="DC.description" content="ارائه‌دهنده خدمات حرفه‌ای طراحی وب، سئو و گرافیک" />
            <meta name="DC.publisher" content="دیزاین پرداز" />
            <meta name="DC.contributor" content="تیم دیزاین پرداز" />
            <meta name="DC.date" content="2024" />
            <meta name="DC.type" content="website" />
            <meta name="DC.format" content="text/html" />
            <meta name="DC.identifier" content="https://designpardaz.ir" />
            <meta name="DC.language" content="fa" />
            <meta name="DC.coverage" content="Iran" />
            <meta name="DC.rights" content="© 2024 دیزاین پرداز" />
            <meta name="google-site-verification" content="gh2SqMVJ5_-TLEXGXZCxjG71SvyIIsvrdeBwAl5meuc" />
            {/* Advanced targeting meta tags */}
            <meta name="subject" content="طراح سایت حرفه‌ای، خدمات سئو و طراحی گرافیک" />
            <meta name="abstract" content="دیزاین پرداز - بهترین طراح سایت، متخصص سئو و طراح گرافیک ایران" />
            <meta name="topic" content="طراحی وب سایت، بهینه سازی سایت، طراحی گرافیک" />
            <meta name="summary" content="خدمات کامل طراحی دیجیتال توسط بهترین طراح سایت ایران" />
            <meta name="Classification" content="Web Design, SEO, Graphic Design Services" />
            <meta name="designer" content="تیم طراحان دیزاین پرداز" />
            <meta name="copyright" content="دیزاین پرداز - تمامی حقوق محفوظ است" />
            <meta name="reply-to" content="info@designpardaz.ir" />
            <meta name="owner" content="دیزاین پرداز" />
            <meta name="rating" content="general" />
            <meta name="revisit-after" content="1 days" />

            {/* Local business targeting */}
            <meta name="geo.region" content="IR-07" />
            <meta name="geo.placename" content="Tehran" />
            <meta name="ICBM" content="35.6892, 51.3890" />
            <meta name="geo.position" content="35.6892;51.3890" />
            <meta name="zipcode" content="1234567890" />
            <meta name="city" content="Tehran" />
            <meta name="country" content="Iran" />

            {/* Social media optimization */}
            <meta property="business:contact_data:locality" content="Tehran" />
            <meta property="business:contact_data:region" content="Tehran" />
            <meta property="business:contact_data:country_name" content="Iran" />
            {/* JSON-LD Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ProfessionalService",
                        "name": "دیزاین پرداز - طراح سایت و متخصص سئو",
                        "alternateName": ["طراح سایت دیزاین پرداز", "متخصص سئو دیزاین پرداز"],
                        "description": "بهترین طراح سایت ایران - خدمات طراحی وب‌سایت حرفه‌ای، سئو تضمینی و طراحی گرافیک",
                        "url": "https://designpardaz.ir",
                        "image": "https://designpardaz.ir/images/services-hero.jpg",
                        "priceRange": "$$",
                        "telephone": "+98-912-333-4444",
                        "email": "info@designpardaz.ir",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "خیابان ولیعصر",
                            "addressLocality": "تهران",
                            "addressRegion": "تهران",
                            "postalCode": "1234567890",
                            "addressCountry": "IR"
                        },
                        "areaServed": [
                            {
                                "@type": "Country",
                                "name": "Iran"
                            },
                            {
                                "@type": "City",
                                "name": "Tehran"
                            },
                            {
                                "@type": "City",
                                "name": "Isfahan"
                            },
                            {
                                "@type": "City",
                                "name": "Mashhad"
                            }
                        ],
                        "serviceType": [
                            "طراح سایت حرفه‌ای",
                            "خدمات سئو تضمینی",
                            "طراحی گرافیک حرفه‌ای",
                            "طراحی UI/UX",
                            "توسعه وب‌سایت",
                            "بهینه‌سازی موتورهای جستجو"
                        ],
                        "hasOfferCatalog": {
                            "@type": "OfferCatalog",
                            "name": "خدمات کامل دیجیتال",
                            "itemListElement": [
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "طراحی سایت حرفه‌ای",
                                        "description": "طراحی وب‌سایت مدرن و واکنش‌گرا توسط بهترین طراح سایت ایران"
                                    },
                                    "price": "5000000",
                                    "priceCurrency": "IRR"
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "خدمات سئو تضمینی",
                                        "description": "بهینه‌سازی سایت برای گوگل و افزایش ترافیک ارگانیک"
                                    },
                                    "price": "3000000",
                                    "priceCurrency": "IRR"
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "طراحی گرافیک و لوگو",
                                        "description": "طراحی هویت بصری، لوگو و مواد تبلیغاتی"
                                    },
                                    "price": "2000000",
                                    "priceCurrency": "IRR"
                                }
                            ]
                        },
                        "aggregateRating": {
                            "@type": "AggregateRating",
                            "ratingValue": "4.9",
                            "reviewCount": "312",
                            "bestRating": "5"
                        },
                        "review": [
                            {
                                "@type": "Review",
                                "author": {
                                    "@type": "Person",
                                    "name": "محمد احمدی"
                                },
                                "reviewRating": {
                                    "@type": "Rating",
                                    "ratingValue": "5"
                                },
                                "reviewBody": "بهترین طراح سایت که تا حالا باهاش کار کردم. سایتم رو عالی طراحی کرد و سئوش هم فوق العاده بود."
                            },
                            {
                                "@type": "Review",
                                "author": {
                                    "@type": "Person",
                                    "name": "سارا رضایی"
                                },
                                "reviewRating": {
                                    "@type": "Rating",
                                    "ratingValue": "5"
                                },
                                "reviewBody": "خدمات سئو دیزاین پرداز واقعاً تضمینی بود. سایتم تو گوگل رتبه یک شد."
                            }
                        ]
                    })
                }}
            />

            {/* Person Schema for Personal Branding */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Person",
                        "name": "تیم طراحان دیزاین پرداز",
                        "alternateName": "بهترین طراح سایت ایران",
                        "description": "طراح سایت حرفه‌ای، متخصص سئو و طراح گرافیک با بیش از ۸ سال تجربه",
                        "image": "https://designpardaz.ir/images/team-photo.jpg",
                        "url": "https://designpardaz.ir",
                        "sameAs": [
                            "https://instagram.com/designpardaz.ir",
                            "https://linkedin.com/company/designpardaz"
                        ],
                        "jobTitle": "طراح سایت و متخصص سئو",
                        "worksFor": {
                            "@type": "Organization",
                            "name": "دیزاین پرداز"
                        },
                        "knowsAbout": [
                            "طراحی وب‌سایت",
                            "سئو و بهینه‌سازی",
                            "طراحی گرافیک",
                            "UI/UX Design",
                            "WordPress",
                            "HTML/CSS",
                            "JavaScript"
                        ],
                        "hasOccupation": {
                            "@type": "Occupation",
                            "name": "طراح سایت حرفه‌ای",
                            "occupationLocation": {
                                "@type": "Country",
                                "name": "Iran"
                            }
                        }
                    })
                }}
            />

            {/* Enhanced FAQ Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "بهترین طراح سایت کیست؟",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "دیزاین پرداز با ۸ سال تجربه و بیش از ۵۰۰ پروژه موفق، یکی از بهترین طراحان سایت ایران محسوب می‌شود."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "چطور سایتم رو سئو کنم؟",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "سئو سایت شامل بهینه‌سازی کلیدواژه‌ها، محتوا، سرعت سایت و لینک‌سازی است. تیم متخصص دیزاین پرداز این خدمات را به صورت حرفه‌ای ارائه می‌دهد."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "هزینه طراحی لوگو چقدر است؟",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "هزینه طراحی لوگو بسته به پیچیدگی طرح از ۵۰۰ هزار تا ۳ میلیون تومان متغیر است. برای مشاوره رایگان تماس بگیرید."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "چقدر طول می‌کشد تا سایت در گوگل رتبه بگیرد؟",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "معمولاً ۳ تا ۶ ماه طول می‌کشد تا سایت در گوگل رتبه‌های بالایی کسب کند. این زمان بسته به رقابت کلیدواژه متفاوت است."
                                }
                            }
                        ]
                    })
                }}
            />

            {/* Website Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebSite",
                        "name": "دیزاین پرداز",
                        "alternateName": "Design Pardaz",
                        "url": "https://designpardaz.ir",
                        "potentialAction": {
                            "@type": "SearchAction",
                            "target": "https://designpardaz.ir/search?q={search_term_string}",
                            "query-input": "required name=search_term_string"
                        },
                        "sameAs": [
                            "https://instagram.com/designpardaz.ir",
                            "https://telegram.me/designpardaz",
                            "https://linkedin.com/company/designpardaz"
                        ],
                        "publisher": {
                            "@type": "Organization",
                            "name": "دیزاین پرداز",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://designpardaz.ir/logo.png",
                                "width": 300,
                                "height": 300
                            }
                        }
                    })
                }}
            />

            {/* BreadcrumbList Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            {
                                "@type": "ListItem",
                                "position": 1,
                                "name": "خانه",
                                "item": "https://designpardaz.ir"
                            }
                        ]
                    })
                }}
            />
            <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
            <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
            <link rel="shortcut icon" href="/favicon.ico" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <meta name="apple-mobile-web-app-title" content="designpardaz" />
            <link rel="manifest" href="/site.webmanifest" />
        </Head>
        <body className={`antialiased Vazirmatn min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300`} suppressHydrationWarning>
        <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={true}
            disableTransitionOnChange={false}
            storageKey="designpardaz-theme"
        >
            {/* Skip to main content for accessibility */}
            <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg focus:font-medium focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
                پرش به محتوای اصلی
            </a>

            {/* Header */}
            <Header />

            {/* Main Content */}
            <main
                id="main-content"
                className="flex-1 relative"
                role="main"
                aria-label="محتوای اصلی صفحه"
            >
                {children}
            </main>

            {/* Scroll to Top Component */}
            <ScrollToTop />

            {/* Footer */}
            <Footer />

            {/* Loading indicator for client-side navigation */}
            <div id="loading-indicator" className="hidden fixed top-0 left-0 right-0 z-[200] h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 animate-pulse" />

            {/* Offline indicator */}
            <div id="offline-indicator" className="hidden fixed bottom-4 right-4 z-[100] px-4 py-2 bg-red-500 text-white rounded-lg shadow-lg text-sm font-medium">
                اتصال اینترنت قطع شده است
            </div>

            {/* Cookie consent (if needed) */}
            <div id="cookie-consent" className="hidden fixed bottom-0 left-0 right-0 z-[100] bg-gray-900 text-white p-4 shadow-2xl">
                <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-sm">
                        این وب‌سایت از کوکی‌ها برای بهبود تجربه کاربری استفاده می‌کند.
                        <a href="/privacy-policy" className="text-blue-400 hover:text-blue-300 mr-1">
                            اطلاعات بیشتر
                        </a>
                    </p>
                    <div className="flex items-center gap-3">
                        <button
                            id="accept-cookies"
                            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors"
                        >
                            قبول همه
                        </button>
                        <button
                            id="reject-cookies"
                            className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg text-sm font-medium transition-colors"
                        >
                            رد کردن
                        </button>
                    </div>
                </div>
            </div>
        </ThemeProvider>

        {/* Analytics Scripts */}
        <script
            dangerouslySetInnerHTML={{
                __html: `
                            // Google Analytics 4
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', 'GA_MEASUREMENT_ID', {
                                page_title: document.title,
                                page_location: window.location.href,
                                content_group1: 'Design Services'
                            });

                            // Performance monitoring
                            window.addEventListener('load', function() {
                                // Core Web Vitals
                                new PerformanceObserver((entryList) => {
                                    for (const entry of entryList.getEntries()) {
                                        if (entry.name === 'first-contentful-paint') {
                                            gtag('event', 'timing_complete', {
                                                name: 'FCP',
                                                value: Math.round(entry.startTime)
                                            });
                                        }
                                    }
                                }).observe({entryTypes: ['paint']});

                                // Largest Contentful Paint
                                new PerformanceObserver((entryList) => {
                                    const entries = entryList.getEntries();
                                    const lastEntry = entries[entries.length - 1];
                                    gtag('event', 'timing_complete', {
                                        name: 'LCP',
                                        value: Math.round(lastEntry.startTime)
                                    });
                                }).observe({entryTypes: ['largest-contentful-paint']});

                                // Cumulative Layout Shift
                                let clsValue = 0;
                                new PerformanceObserver((entryList) => {
                                    for (const entry of entryList.getEntries()) {
                                        if (!entry.hadRecentInput) {
                                            clsValue += entry.value;
                                        }
                                    }
                                    gtag('event', 'timing_complete', {
                                        name: 'CLS',
                                        value: Math.round(clsValue * 1000)
                                    });
                                }).observe({entryTypes: ['layout-shift']});
                            });

                            // Service Worker Registration
                            if ('serviceWorker' in navigator) {
                                window.addEventListener('load', function() {
                                    navigator.serviceWorker.register('/sw.js')
                                        .then(function(registration) {
                                            console.log('SW registered: ', registration);
                                        })
                                        .catch(function(registrationError) {
                                            console.log('SW registration failed: ', registrationError);
                                        });
                                });
                            }

                            // Online/Offline Detection
                            window.addEventListener('online', function() {
                                document.getElementById('offline-indicator').classList.add('hidden');
                            });

                            window.addEventListener('offline', function() {
                                document.getElementById('offline-indicator').classList.remove('hidden');
                            });

                            // Loading indicator for navigation
                            let loadingTimeout;
                            document.addEventListener('click', function(e) {
                                if (e.target.tagName === 'A' && e.target.href && !e.target.href.startsWith('#') && !e.target.target) {
                                    loadingTimeout = setTimeout(function() {
                                        document.getElementById('loading-indicator').classList.remove('hidden');
                                    }, 200);
                                }
                            });

                            window.addEventListener('beforeunload', function() {
                                clearTimeout(loadingTimeout);
                            });

                            window.addEventListener('load', function() {
                                clearTimeout(loadingTimeout);
                                document.getElementById('loading-indicator').classList.add('hidden');
                            });
                        `
            }}
        />
        </body>
        </html>
    );
}
