import Head from 'next/head';
import LogoDesign from '@/components/services/graphic-design/LogoDesign';
import VisualIdentity from '@/components/services/graphic-design/VisualIdentity';
import CatalogDesign from '@/components/services/graphic-design/CatalogDesign';
import BannerPoster from '@/components/services/graphic-design/BannerPoster';
import BrochureDesign from '@/components/services/graphic-design/BrochureDesign';
import UIUXDesign from '@/components/services/graphic-design/UIUXDesign';
import MotionGraphics from '@/components/services/graphic-design/MotionGraphics';

export default function GraphicDesignPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "خدمات گرافیک دیزاین دیزاین پرداز",
        "description": "ارائه خدمات طراحی گرافیک حرفه‌ای شامل طراحی لوگو، هویت بصری، UI/UX، کاتالوگ و موشن گرافیک",
        "provider": {
            "@type": "Organization",
            "name": "دیزاین پرداز",
            "url": "https://designpardaz.com"
        },
        "serviceType": "Graphic Design",
        "areaServed": "ایران",
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "خدمات گرافیک دیزاین",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "طراحی لوگو"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "هویت بصری"
                    }
                }
            ]
        }
    };

    return (
        <>
            <Head>
                <title>خدمات گرافیک دیزاین | طراحی لوگو و هویت بصری | دیزاین پرداز</title>
                <meta
                    name="description"
                    content="خدمات حرفه‌ای گرافیک دیزاین شامل طراحی لوگو، هویت بصری، UI/UX، کاتالوگ، بروشور و موشن گرافیک با بهترین کیفیت و قیمت مناسب در دیزاین پرداز"
                />
                <meta
                    name="keywords"
                    content="طراحی لوگو، هویت بصری، گرافیک دیزاین، UI UX طراحی، کاتالوگ طراحی، بروشور طراحی، موشن گرافیک، دیزاین پرداز"
                />
                <meta property="og:title" content="خدمات گرافیک دیزاین حرفه‌ای | دیزاین پرداز" />
                <meta property="og:description" content="طراحی لوگو، هویت بصری، UI/UX و سایر خدمات گرافیک دیزاین با کیفیت بالا و قیمت مناسب" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="/images/graphic-design-og.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://designpardaz.com/services/graphic-design" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </Head>

            <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
                {/* Hero Section */}
                <section className="py-20 px-4 text-center bg-gradient-to-r from-slate-900 via-blue-900 to-cyan-900">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            خدمات گرافیک دیزاین
                            <span className="block text-cyan-400 mt-2">دیزاین پرداز</span>
                        </h1>
                        <p className="text-xl text-slate-200 mb-8 max-w-2xl mx-auto leading-relaxed">
                            از ایده تا اجرا، تیم متخصص دیزاین پرداز آماده ارائه بهترین خدمات گرافیک دیزاین
                            با کیفیت بین‌المللی و قیمت رقابتی است
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <div className="bg-cyan-500/20 backdrop-blur-sm px-6 py-3 rounded-full border border-cyan-400/30">
                                <span className="text-cyan-300 font-semibold">+500 پروژه موفق</span>
                            </div>
                            <div className="bg-slate-500/20 backdrop-blur-sm px-6 py-3 rounded-full border border-slate-400/30">
                                <span className="text-slate-300 font-semibold">تیم متخصص</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Navigation */}
                <nav className="py-8 px-4 bg-white shadow-sm sticky top-0 z-40">
                    <div className="max-w-6xl mx-auto">
                        <div className="flex flex-wrap justify-center gap-4">
                            {[
                                { name: 'طراحی لوگو', href: '#logo', popular: true },
                                { name: 'هویت بصری', href: '#branding', popular: true },
                                { name: 'طراحی UI/UX', href: '#ui-ux', popular: true },
                                { name: 'کاتالوگ', href: '#catalog' },
                                { name: 'بنر و پوستر', href: '#banner' },
                                { name: 'بروشور', href: '#brochure' },
                                { name: 'موشن گرافیک', href: '#motion' }
                            ].map((service) => (
                                <a
                                    key={service.name}
                                    href={service.href}
                                    className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                                        service.popular
                                            ? 'bg-cyan-500 text-white hover:bg-cyan-600 shadow-lg'
                                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                                    }`}
                                >
                                    {service.name}
                                    {service.popular && (
                                        <span className="mr-2 px-2 py-1 text-xs bg-white/20 rounded-full">
                      محبوب
                    </span>
                                    )}
                                </a>
                            ))}
                        </div>
                    </div>
                </nav>

                {/* Services Sections */}
                <main className="space-y-20">
                    <LogoDesign />
                    <VisualIdentity />
                    <UIUXDesign />
                    <CatalogDesign />
                    <BannerPoster />
                    <BrochureDesign />
                    <MotionGraphics />
                </main>

                {/* Contact CTA */}
                <section className="py-20 px-4 bg-gradient-to-r from-slate-900 to-cyan-900 text-center">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            آماده شروع پروژه خود هستید؟
                        </h2>
                        <p className="text-xl text-slate-200 mb-8">
                            همین امروز با تیم متخصص دیزاین پرداز تماس بگیرید
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-full font-semibold transition-colors duration-300">
                                مشاوره رایگان
                            </button>
                            <button className="border border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-full font-semibold transition-colors duration-300">
                                مشاهده نمونه کارها
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
