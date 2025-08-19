// app/services/seo/page.tsx
import { Metadata } from 'next';
import TechnicalSeoSection from '@/components/services/seo/TechnicalSeoSection';
import ContentSeoSection from '@/components/services/seo/ContentSeoSection';
import LocalSeoSection from '@/components/services/seo/LocalSeoSection';
import AnalyticsSection from '@/components/services/seo/AnalyticsSection';
import SpeedOptimizationSection from '@/components/services/seo/SpeedOptimizationSection';
import LinkBuildingSection from '@/components/services/seo/LinkBuildingSection';
import SeoHero from '@/components/services/seo/SeoHero';

export const metadata: Metadata = {
    title: 'خدمات سئو حرفه‌ای | دیزاین پرداز - بهینه‌سازی موتور جستجو',
    description: 'خدمات سئو تخصصی شامل سئو تکنیکال، تولید محتوا، سئو محلی، تحلیل و گزارش، بهینه‌سازی سرعت و Link Building توسط تیم جوان و متخصص دیزاین پرداز',
    keywords: 'سئو, بهینه سازی سایت, سئو تکنیکال, تولید محتوا, سئو محلی, رتبه بندی گوگل, طراحی سایت, قیمت سئو',
    openGraph: {
        title: 'خدمات سئو حرفه‌ای | دیزاین پرداز',
        description: 'خدمات کامل سئو با قیمت مناسب برای رسیدن به صفحه اول گوگل',
        type: 'website',
        locale: 'fa_IR',
        siteName: 'دیزاین پرداز'
    },
    twitter: {
        card: 'summary_large_image',
        title: 'خدمات سئو حرفه‌ای | دیزاین پرداز',
        description: 'خدمات کامل سئو با قیمت مناسب برای رسیدن به صفحه اول گوگل'
    },
    alternates: {
        canonical: 'https://designpardaz.ir/services/seo'
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    }
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "خدمات سئو دیزاین پرداز",
    "description": "خدمات سئو تخصصی شامل سئو تکنیکال، تولید محتوا، سئو محلی و بهینه‌سازی سرعت",
    "provider": {
        "@type": "Organization",
        "name": "دیزاین پرداز",
        "logo": "https://designpardaz.ir/logo.png"
    },
    "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "priceCurrency": "IRR"
    },
    "serviceType": "SEO Services"
};

export default function SeoServicesPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <main className="min-h-screen bg-gray-50">
                <SeoHero />

                <div className="space-y-20">
                    <section id="technical">
                        <TechnicalSeoSection />
                    </section>

                    <section id="content">
                        <ContentSeoSection />
                    </section>

                    <section id="local">
                        <LocalSeoSection />
                    </section>

                    <section id="analytics">
                        <AnalyticsSection />
                    </section>

                    <section id="speed">
                        <SpeedOptimizationSection />
                    </section>

                    <section id="linkbuilding">
                        <LinkBuildingSection />
                    </section>
                </div>
            </main>
        </>
    );
}
