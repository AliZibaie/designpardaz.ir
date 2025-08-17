import {
    CodeBracketIcon,
    PaintBrushIcon,
} from '@heroicons/react/24/outline';

export interface Author {
    id: string;
    name: string;
    slug: string;
    avatar: string;
    role: string;
    bio: string;
    expertise: string[];
    experience: string;
    social: {
        instagram?: string;
        twitter?: string;
        linkedin?: string;
        github?: string;
        website?: string;
    };
    stats: {
        articles: number;
        followers: number;
        likes: number;
    };
}

export interface Category {
    id: string;
    name: string;
    slug: string;
    description: string;
    icon: unknown;
    color: string;
    count: number;
}

export interface Article {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    publishedAt: string;
    updatedAt?: string;
    readTime: number;
    views: number;
    likes: number;
    featured: boolean;
    trending: boolean;
    difficulty: 'مبتدی' | 'متوسط' | 'پیشرفته';
    status: 'published' | 'draft';
    author: Author;
    category: Category;
    tags: string[];
    image: {
        main: string;
        alt: string;
        gallery?: string[];
    };
    seo: {
        metaTitle: string;
        metaDescription: string;
        keywords: string[];
        canonicalUrl: string;
        ogImage: string;
    };
    rating?: {
        average: number;
        count: number;
    };
    faq?: Array<{
        question: string;
        answer: string;
    }>;
    tableOfContents?: Array<{
        id: string;
        title: string;
        level: number;
    }>;
}

export const authors: Author[] = [
    {
        id: '1',
        name: 'تست تستی',
        slug: 'test-testi',
        avatar: '/authors/test-testi.jpg',
        role: 'توسعه‌دهنده تست',
        bio: 'نویسنده تستی برای آزمایش سیستم مقالات',
        expertise: ['React.js', 'JavaScript', 'Testing'],
        experience: '5+ سال',
        social: {
            instagram: 'https://instagram.com/test.testi',
            website: 'https://testtesti.dev'
        },
        stats: {
            articles: 3,
            followers: 1000,
            likes: 500
        }
    }
];

export const categories: Category[] = [
    {
        id: '1',
        name: 'برنامه‌نویسی وب',
        slug: 'web-development',
        description: 'آموزش‌های کامل توسعه وب با جدیدترین تکنولوژی‌ها',
        icon: CodeBracketIcon,
        color: 'from-blue-500 to-purple-600',
        count: 2
    },
    {
        id: '2',
        name: 'طراحی UI/UX',
        slug: 'ui-ux-design',
        description: 'اصول و تکنیک‌های طراحی رابط و تجربه کاربری',
        icon: PaintBrushIcon,
        color: 'from-pink-500 to-rose-600',
        count: 1
    }
];

export const articles: Article[] = [
    {
        id: '1',
        title: 'آموزش React.js برای مبتدیان',
        slug: 'react-tutorial-for-beginners',
        excerpt: 'یادگیری React.js از صفر تا ساخت اولین پروژه',
        content: `
            <h2>مقدمه</h2>
            <p>React.js یکی از محبوب‌ترین کتابخانه‌های JavaScript است.</p>
            
            <h2>شروع کار</h2>
            <p>برای شروع کار با React باید ابتدا Node.js را نصب کنید.</p>
            
            <pre><code>npx create-react-app my-app</code></pre>
            
            <h2>نتیجه‌گیری</h2>
            <p>React ابزاری قدرتمند برای ساخت رابط‌های کاربری است.</p>
        `,
        publishedAt: '2024-01-15T10:00:00Z',
        readTime: 8,
        views: 2500,
        likes: 120,
        featured: true,
        trending: true,
        difficulty: 'مبتدی',
        status: 'published',
        author: authors[0],
        category: categories[0],
        tags: ['React.js', 'JavaScript', 'Frontend'],
        image: {
            main: '/articles/react-tutorial.jpg',
            alt: 'آموزش React.js'
        },
        seo: {
            metaTitle: 'آموزش React.js برای مبتدیان | راهنمای شروع',
            metaDescription: 'یادگیری React.js از صفر تا ساخت اولین پروژه برای مبتدیان',
            keywords: ['React.js', 'آموزش React', 'JavaScript'],
            canonicalUrl: 'https://designpardaz.ir/articles/react-tutorial-for-beginners',
            ogImage: '/articles/react-tutorial-og.jpg'
        }
    },
    {
        id: '2',
        title: 'معرفی Next.js و مزایای آن',
        slug: 'nextjs-introduction-benefits',
        excerpt: 'آشنایی با فریمورک Next.js و دلایل استفاده از آن',
        content: `
            <h2>Next.js چیست؟</h2>
            <p>Next.js فریمورکی بر پایه React است که امکانات بیشتری ارائه می‌دهد.</p>
            
            <h2>مزایای Next.js</h2>
            <ul>
                <li>Server Side Rendering</li>
                <li>Static Site Generation</li>
                <li>API Routes</li>
                <li>Image Optimization</li>
            </ul>
            
            <h2>نصب Next.js</h2>
            <pre><code>npx create-next-app@latest my-next-app</code></pre>
        `,
        publishedAt: '2024-01-10T14:00:00Z',
        readTime: 6,
        views: 1800,
        likes: 95,
        featured: false,
        trending: false,
        difficulty: 'متوسط',
        status: 'published',
        author: authors[0],
        category: categories[0],
        tags: ['Next.js', 'React', 'SSR'],
        image: {
            main: '/articles/nextjs-intro.jpg',
            alt: 'معرفی Next.js'
        },
        seo: {
            metaTitle: 'معرفی Next.js و مزایای آن | راهنمای کاربردی',
            metaDescription: 'آشنایی با فریمورک Next.js و دلایل استفاده از آن در پروژه‌های React',
            keywords: ['Next.js', 'React Framework', 'SSR'],
            canonicalUrl: 'https://designpardaz.ir/articles/nextjs-introduction-benefits',
            ogImage: '/articles/nextjs-intro-og.jpg'
        }
    },
    {
        id: '3',
        title: 'اصول طراحی UI/UX مدرن',
        slug: 'modern-ui-ux-design-principles',
        excerpt: 'یادگیری اصول و قوانین طراحی رابط کاربری مدرن',
        content: `
            <h2>اصول طراحی UI</h2>
            <p>طراحی رابط کاربری مؤثر نیازمند رعایت اصول خاصی است.</p>
            
            <h2>قوانین مهم</h2>
            <ul>
                <li>سادگی و وضوح</li>
                <li>سازگاری و یکنواختی</li>
                <li>قابلیت استفاده</li>
                <li>زیبایی بصری</li>
            </ul>
            
            <h2>ابزارهای طراحی</h2>
            <p>Figma، Adobe XD و Sketch از محبوب‌ترین ابزارهای طراحی UI هستند.</p>
        `,
        publishedAt: '2024-01-05T09:30:00Z',
        readTime: 10,
        views: 3200,
        likes: 180,
        featured: true,
        trending: false,
        difficulty: 'مبتدی',
        status: 'published',
        author: authors[0],
        category: categories[1],
        tags: ['UI Design', 'UX Design', 'طراحی رابط'],
        image: {
            main: '/articles/ui-ux-principles.jpg',
            alt: 'اصول طراحی UI/UX'
        },
        seo: {
            metaTitle: 'اصول طراحی UI/UX مدرن | راهنمای طراحی رابط',
            metaDescription: 'یادگیری اصول و قوانین طراحی رابط کاربری مدرن و تجربه کاربری بهتر',
            keywords: ['UI Design', 'UX Design', 'طراحی رابط کاربری'],
            canonicalUrl: 'https://designpardaz.ir/articles/modern-ui-ux-design-principles',
            ogImage: '/articles/ui-ux-principles-og.jpg'
        }
    }
];

export function getFilteredArticles(filters: {
    category?: string;
    search?: string;
    tag?: string;
    featured?: boolean;
    trending?: boolean;
    difficulty?: string;
}) {
    return articles.filter(article => {
        if (filters.category && article.category.slug !== filters.category) {
            return false;
        }

        if (filters.search) {
            const searchTerm = filters.search.toLowerCase();
            const titleMatch = article.title.toLowerCase().includes(searchTerm);
            const excerptMatch = article.excerpt.toLowerCase().includes(searchTerm);
            const tagMatch = article.tags.some(tag => tag.toLowerCase().includes(searchTerm));

            if (!titleMatch && !excerptMatch && !tagMatch) {
                return false;
            }
        }

        if (filters.tag && !article.tags.some(tag => tag.toLowerCase().includes(filters.tag!.toLowerCase()))) {
            return false;
        }

        if (filters.featured !== undefined && article.featured !== filters.featured) {
            return false;
        }

        if (filters.trending !== undefined && article.trending !== filters.trending) {
            return false;
        }

        if (filters.difficulty && article.difficulty !== filters.difficulty) {
            return false;
        }

        return true;
    });
}

export function getRelatedArticles(currentArticle: Article, limit: number = 4): Article[] {
    const related = articles
        .filter(article =>
            article.id !== currentArticle.id &&
            article.status === 'published'
        )
        .map(article => {
            let score = 0;

            if (article.category.id === currentArticle.category.id) {
                score += 3;
            }

            const commonTags = article.tags.filter(tag =>
                currentArticle.tags.includes(tag)
            ).length;
            score += commonTags * 2;

            if (article.difficulty === currentArticle.difficulty) {
                score += 1;
            }

            return { article, score };
        })
        .sort((a, b) => b.score - a.score)
        .slice(0, limit)
        .map(item => item.article);

    return related;
}

export type { Article };
