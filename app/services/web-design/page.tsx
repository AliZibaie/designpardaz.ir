// app/services/web-design/page.tsx
import { Metadata } from 'next'
import Hero from '@/components/services/web-design/Hero'
import CorporateDesign from '@/components/services/web-design/CorporateDesign'
import EcommerceDesign from '@/components/services/web-design/EcommerceDesign'
import PersonalDesign from '@/components/services/web-design/PersonalDesign'
import WebAppDesign from '@/components/services/web-design/WebAppDesign'
import LandingPageDesign from '@/components/services/web-design/LandingPageDesign'
import RedesignServices from '@/components/services/web-design/RedesignServices'

export const metadata: Metadata = {
    title: 'طراحی سایت حرفه ای | دیزاین پرداز - تیم جوان و خلاق',
    description: 'خدمات طراحی سایت شرکتی، فروشگاه اینترنتی، وب اپلیکیشن و لندینگ پیج توسط تیم جوان دیزاین پرداز. قیمت مناسب، کیفیت بالا و طراحی مدرن.',
    keywords: [
        'طراحی سایت',
        'طراحی سایت شرکتی',
        'فروشگاه اینترنتی',
        'وب اپلیکیشن',
        'لندینگ پیج',
        'ریدیزاین سایت',
        'دیزاین پرداز',
        'طراحی وب سایت ایران',
        'تیم طراحی جوان'
    ],
    openGraph: {
        title: 'طراحی سایت حرفه ای | دیزاین پرداز',
        description: 'خدمات طراحی سایت با کیفیت بالا توسط تیم جوان و خلاق دیزاین پرداز',
        type: 'website',
        locale: 'fa_IR',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'طراحی سایت حرفه ای | دیزاین پرداز',
        description: 'خدمات طراحی سایت با کیفیت بالا توسط تیم جوان و خلاق دیزاین پرداز',
    },
    alternates: {
        canonical: '/services/web-design',
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
    },
}

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'خدمات طراحی سایت دیزاین پرداز',
    description: 'طراحی سایت شرکتی، فروشگاه اینترنتی، وب اپلیکیشن و لندینگ پیج',
    provider: {
        '@type': 'Organization',
        name: 'دیزاین پرداز',
        url: 'https://designpardaz.com',
    },
    serviceType: 'Web Design Services',
    areaServed: 'IR',
    hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'خدمات طراحی وب',
        itemListElement: [
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'طراحی سایت شرکتی',
                    description: 'طراحی سایت حرفه ای برای شرکت ها و کسب و کارها'
                }
            },
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'فروشگاه اینترنتی',
                    description: 'طراحی و توسعه فروشگاه آنلاین'
                }
            }
        ]
    }
}

export default function WebDesignPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <main className="min-h-screen bg-gray-50">
                <Hero />
                <div id="corporate">
                    <CorporateDesign />
                </div>
                <div id="ecommerce">
                    <EcommerceDesign />
                </div>
                <div id="personal">
                    <PersonalDesign />
                </div>
                <div id="webapp">
                    <WebAppDesign />
                </div>
                <div id="landing">
                    <LandingPageDesign />
                </div>
                <div id="redesign">
                    <RedesignServices />
                </div>
            </main>
        </>
    )
}