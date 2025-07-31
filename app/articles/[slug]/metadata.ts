import {
    articles,
    getRelatedArticles,
    type Article
} from '@/lib/data/articles';

export async function generateStaticParams() {
    return articles.map((article) => ({
        slug: article.slug,
    }));
}

// 🔥 این تابع رو هم اضافه کن
export async function generateMetadata({ params }: { params: { slug: string } }) {
    const article = articles.find(a => a.slug === params.slug);

    if (!article) {
        return {
            title: 'مقاله یافت نشد | دیزاین پرداز',
            description: 'متأسفانه مقاله مورد نظر پیدا نشد'
        };
    }

    return {
        title: article.seo.metaTitle,
        description: article.seo.metaDescription,
        keywords: article.seo.keywords.join(', '),
        canonical: article.seo.canonicalUrl,
        openGraph: {
            title: article.seo.metaTitle,
            description: article.seo.metaDescription,
            type: 'article',
            url: article.seo.canonicalUrl,
            images: [{ url: article.seo.ogImage }],
        }
    };
}{ params }: { params: { slug: string } }) {
    const article = articles.find(a => a.slug === params.slug);

    if (!article) {
        return {
            title: 'مقاله یافت نشد | دیزاین پرداز',
            description: 'متأسفانه مقاله مورد نظر پیدا نشد'
        };
    }

    return {
        title: article.seo.metaTitle,
        description: article.seo.metaDescription,
        keywords: article.seo.keywords.join(', '),
        canonical: article.seo.canonicalUrl,
        openGraph: {
            title: article.seo.metaTitle,
            description: article.seo.metaDescription,
            type: 'article',
            url: article.seo.canonicalUrl,
            images: [{ url: article.seo.ogImage }],
        }
    };
}