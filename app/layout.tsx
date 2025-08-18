import type { Metadata } from "next/types";
import { ThemeProvider } from "next-themes";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";
import Head from 'next/head';
import "./globals.css";


export const metadata: Metadata = {
    title: {
        template: "%s | دیزاین پرداز - طراحی وب حرفه‌ای و خدمات گرافیکی",
        default: "دیزاین پرداز - طراحی وب حرفه‌ای، طراحی گرافیک و برندینگ | خدمات دیجیتال کامل",
    },
    description:
        "دیزاین پرداز ارائه‌دهنده خدمات طراحی وب‌سایت حرفه‌ای، طراحی گرافیک، سئو، برندینگ و توسعه اپلیکیشن با بیش از ۸ سال تجربه. طراحی واکنش‌گرا، بهینه‌سازی سئو و پشتیبانی ۲۴/۷.",
    keywords: [
        "طراحی وب سایت",
        "طراحی گرافیک",
        "برندینگ",
        "سئو",
        "طراحی لوگو",
        "فروشگاه اینترنتی",
        "طراحی UI/UX",
        "توسعه وب",
        "دیجیتال مارکتینگ",
        "طراحی کاتالوگ",
        "طراحی بنر",
        "هویت بصری",
        "طراحی موبایل",
        "وب اپلیکیشن",
        "لندینگ پیج",
        "طراحی واکنش گرا",
        "بهینه سازی سایت",
        "طراحی حرفه ای",
        "خدمات طراحی",
        "استودیو طراحی"
    ],
    authors: [{
        name: "دیزاین پرداز",
        url: "https://designpardaz.ir"
    }],
    creator: "دیزاین پرداز - استودیو طراحی دیجیتال",
    publisher: "دیزاین پرداز",
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
        title: "دیزاین پرداز - طراحی وب حرفه‌ای، گرافیک و برندینگ",
        description: "ارائه‌دهنده خدمات کامل طراحی وب‌سایت، گرافیک، سئو و برندینگ با کیفیت بالا و قیمت مناسب. بیش از ۲۵۰ پروژه موفق و ۱۸۰ مشتری راضی.",
        url: "https://designpardaz.ir",
        siteName: "دیزاین پرداز",
        images: [
            {
                url: "/images/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "دیزاین پرداز - طراحی وب حرفه‌ای و خدمات گرافیکی",
                type: "image/jpeg",
            },
            {
                url: "/images/og-logo.png",
                width: 400,
                height: 400,
                alt: "لوگو دیزاین پرداز",
                type: "image/png",
            },
        ],
        locale: "fa_IR",
        type: "website",
        countryName: "Iran",
    },
    twitter: {
        card: "summary_large_image",
        title: "دیزاین پرداز - طراحی وب حرفه‌ای و خدمات گرافیکی",
        description: "ارائه‌دهنده خدمات کامل طراحی وب‌سایت، گرافیک، سئو و برندینگ با کیفیت بالا",
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
        google: "google-site-verification-code",
        yandex: "yandex-verification-code",
        other: {
            "msvalidate.01": "bing-verification-code",
        },
    },
    category: "design services",
    classification: "Business Services",
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
        "https://designpardaz.ir/blog/archive/2023",
        "https://designpardaz.ir/portfolio/archive",
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
        "subject": "خدمات طراحی دیجیتال",
        "rating": "general",
        "distribution": "global",
        "revisit-after": "7 days",
        "expires": "never",
        "pragma": "no-cache",
        "cache-control": "no-cache",
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

            {/* JSON-LD Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "دیزاین پرداز",
                        "alternateName": "Design Pardaz",
                        "url": "https://designpardaz.ir",
                        "logo": "https://designpardaz.ir/logo.png",
                        "description": "ارائه‌دهنده خدمات حرفه‌ای طراحی وب‌سایت، سئو، طراحی گرافیک و برندینگ با بیش از ۸ سال تجربه",
                        "foundingDate": "2017",
                        "founders": [
                            {
                                "@type": "Person",
                                "name": "تیم دیزاین پرداز"
                            }
                        ],
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "تهران",
                            "addressLocality": "تهران",
                            "addressRegion": "تهران",
                            "postalCode": "1234567890",
                            "addressCountry": "IR"
                        },
                        "contactPoint": [
                            {
                                "@type": "ContactPoint",
                                "telephone": "+98-21-3333-4444",
                                "contactType": "customer service",
                                "areaServed": "IR",
                                "availableLanguage": ["Persian", "English"],
                                "hoursAvailable": {
                                    "@type": "OpeningHoursSpecification",
                                    "dayOfWeek": ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday"],
                                    "opens": "09:00",
                                    "closes": "18:00"
                                }
                            },
                            {
                                "@type": "ContactPoint",
                                "email": "info@designpardaz.ir",
                                "contactType": "customer support"
                            }
                        ],
                        "sameAs": [
                            "https://instagram.com/designpardaz.ir",
                            "https://telegram.me/designpardaz",
                            "https://linkedin.com/company/designpardaz",
                            "https://wa.me/989123334444"
                        ],
                        "hasOfferCatalog": {
                            "@type": "OfferCatalog",
                            "name": "خدمات دیزاین پرداز",
                            "itemListElement": [
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "طراحی وب‌سایت",
                                        "description": "طراحی وب‌سایت حرفه‌ای و واکنش‌گرا"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "سئو و بهینه‌سازی",
                                        "description": "بهینه‌سازی سایت برای موتورهای جستجو"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "طراحی گرافیک",
                                        "description": "طراحی لوگو، هویت بصری و مواد گرافیکی"
                                    }
                                }
                            ]
                        },
                        "aggregateRating": {
                            "@type": "AggregateRating",
                            "ratingValue": "4.9",
                            "reviewCount": "180",
                            "bestRating": "5",
                            "worstRating": "1"
                        },
                        "review": {
                            "@type": "Review",
                            "reviewRating": {
                                "@type": "Rating",
                                "ratingValue": "5",
                                "bestRating": "5"
                            },
                            "author": {
                                "@type": "Person",
                                "name": "علی احمدی"
                            },
                            "reviewBody": "خدمات عالی و تیم حرفه‌ای. وب‌سایت ما را بهترین شکل ممکن طراحی کردند."
                        },
                        "areaServed": {
                            "@type": "Country",
                            "name": "Iran"
                        },
                        "knowsAbout": [
                            "طراحی وب",
                            "سئو",
                            "طراحی گرافیک",
                            "برندینگ",
                            "UI/UX",
                            "توسعه وب"
                        ],
                        "memberOf": {
                            "@type": "Organization",
                            "name": "اتحادیه شرکت‌های طراحی وب ایران"
                        },
                        "award": [
                            "بهترین شرکت طراحی وب ۱۴۰۲",
                            "گواهی کیفیت ISO 9001"
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
