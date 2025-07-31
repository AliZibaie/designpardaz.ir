// data/articles.ts
import {
    ComputerDesktopIcon,
    MagnifyingGlassIcon,
    PaintBrushIcon,
    DevicePhoneMobileIcon,
    ShoppingCartIcon,
    CodeBracketIcon,
    RocketLaunchIcon,
    LightBulbIcon,
    CogIcon,
    ChartBarIcon,
    ShieldCheckIcon,
    GlobeAltIcon,
    BoltIcon,
    StarIcon,
    FireIcon,
    TrophyIcon,
    AcademicCapIcon,
    DocumentTextIcon,
    PhotoIcon,
    VideoCameraIcon,
    MegaphoneIcon,
    WrenchScrewdriverIcon,
    BuildingOfficeIcon,
    UserGroupIcon,
    CurrencyDollarIcon,
    CalendarDaysIcon,
    ClockIcon,
    EyeIcon,
    HandRaisedIcon,
    HeartIcon,
    ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';

export interface Article {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    content?: string; // برای صفحه جزئیات
    category: {
        id: string;
        name: string;
        slug: string;
        color: string;
        icon: any;
    };
    tags: string[];
    author: {
        name: string;
        bio: string;
        avatar: string;
        social: {
            linkedin?: string;
            twitter?: string;
            instagram?: string;
        };
    };
    publishedAt: string;
    updatedAt?: string;
    readTime: number; // دقیقه
    views: number;
    likes: number;
    comments: number;
    featured: boolean;
    trending: boolean;
    seo: {
        metaTitle: string;
        metaDescription: string;
        keywords: string[];
        canonicalUrl: string;
        ogImage: string;
        structuredData?: any;
    };
    image: {
        main: string;
        alt: string;
        thumbnail: string;
    };
    difficulty: 'مبتدی' | 'متوسط' | 'پیشرفته';
    language: 'fa' | 'en';
    status: 'published' | 'draft' | 'archived';
}

export const articleCategories = [
    {
        id: 'web-design',
        name: 'طراحی وب',
        slug: 'web-design',
        description: 'مقالات آموزشی طراحی و توسعه وب‌سایت',
        color: 'from-blue-500 to-purple-500',
        icon: ComputerDesktopIcon,
        count: 28
    },
    {
        id: 'seo',
        name: 'سئو و بهینه‌سازی',
        slug: 'seo',
        description: 'راهنمای کامل بهینه‌سازی موتورهای جستجو',
        color: 'from-green-500 to-blue-500',
        icon: MagnifyingGlassIcon,
        count: 35
    },
    {
        id: 'ui-ux',
        name: 'طراحی UI/UX',
        slug: 'ui-ux',
        description: 'اصول و تکنیک‌های طراحی تجربه کاربری',
        color: 'from-pink-500 to-red-500',
        icon: PaintBrushIcon,
        count: 22
    },
    {
        id: 'mobile-development',
        name: 'توسعه موبایل',
        slug: 'mobile-development',
        description: 'آموزش ساخت اپلیکیشن موبایل',
        color: 'from-purple-500 to-pink-500',
        icon: DevicePhoneMobileIcon,
        count: 15
    },
    {
        id: 'e-commerce',
        name: 'فروشگاه اینترنتی',
        slug: 'e-commerce',
        description: 'راهنمای کامل راه‌اندازی فروشگاه آنلاین',
        color: 'from-orange-500 to-red-500',
        icon: ShoppingCartIcon,
        count: 19
    },
    {
        id: 'programming',
        name: 'برنامه‌نویسی',
        slug: 'programming',
        description: 'آموزش زبان‌های برنامه‌نویسی مختلف',
        color: 'from-indigo-500 to-blue-500',
        icon: CodeBracketIcon,
        count: 31
    },
    {
        id: 'digital-marketing',
        name: 'بازاریابی دیجیتال',
        slug: 'digital-marketing',
        description: 'استراتژی‌های بازاریابی آنلاین',
        color: 'from-yellow-500 to-orange-500',
        icon: MegaphoneIcon,
        count: 26
    },
    {
        id: 'business',
        name: 'کسب‌وکار',
        slug: 'business',
        description: 'مشاوره و راهنمایی کسب‌وکار آنلاین',
        color: 'from-teal-500 to-green-500',
        icon: BuildingOfficeIcon,
        count: 18
    }
];

export const articles: Article[] = [
    {
        id: '1',
        title: 'راهنمای کامل طراحی وب‌سایت حرفه‌ای در سال ۱۴۰۳',
        slug: 'complete-website-design-guide-2024',
        excerpt: 'همه چیزی که برای طراحی یک وب‌سایت مدرن و حرفه‌ای نیاز دارید. از ابتدا تا انتها با جزئیات کامل.',
        category: articleCategories[0],
        tags: ['طراحی وب', 'HTML', 'CSS', 'JavaScript', 'React', 'ریسپانسیو'],
        author: {
            name: 'علی احمدی',
            bio: 'متخصص طراحی وب با بیش از ۸ سال تجربه',
            avatar: '/authors/ali-ahmadi.jpg',
            social: {
                linkedin: 'ali-ahmadi-webdesigner',
                instagram: '@ali_web_designer'
            }
        },
        publishedAt: '۱۴۰۳/۰۸/۱۵',
        updatedAt: '۱۴۰۳/۰۹/۰۱',
        readTime: 15,
        views: 12500,
        likes: 240,
        comments: 35,
        featured: true,
        trending: true,
        seo: {
            metaTitle: 'راهنمای کامل طراحی وب‌سایت حرفه‌ای ۲۰۲۴ | دیزاین پرداز',
            metaDescription: 'آموزش گام به گام طراحی وب‌سایت حرفه‌ای از صفر تا صد. تکنیک‌های مدرن، ابزارها و بهترین practices برای سال ۲۰۲۴.',
            keywords: ['طراحی وب‌سایت', 'آموزش طراحی وب', 'وب‌سایت حرفه‌ای', 'HTML CSS', 'طراحی ریسپانسیو'],
            canonicalUrl: 'https://designpardaz.ir/articles/complete-website-design-guide-2024',
            ogImage: '/articles/website-design-guide-2024.jpg'
        },
        image: {
            main: '/articles/website-design-guide-2024.jpg',
            alt: 'راهنمای کامل طراحی وب‌سایت حرفه‌ای',
            thumbnail: '/articles/thumbs/website-design-guide-2024.jpg'
        },
        difficulty: 'متوسط',
        language: 'fa',
        status: 'published'
    },
    {
        id: '2',
        title: 'تکنیک‌های پیشرفته سئو برای افزایش ترافیک ارگانیک',
        slug: 'advanced-seo-techniques-organic-traffic',
        excerpt: 'استراتژی‌های حرفه‌ای سئو که ترافیک وب‌سایت شما را تا ۳۰۰% افزایش می‌دهد. تکنیک‌های تست شده و اثبات شده.',
        category: articleCategories[1],
        tags: ['سئو', 'ترافیک ارگانیک', 'گوگل', 'کلمات کلیدی', 'بک‌لینک', 'محتوا'],
        author: {
            name: 'سارا رضایی',
            bio: 'متخصص سئو و بازاریابی دیجیتال',
            avatar: '/authors/sara-rezaei.jpg',
            social: {
                linkedin: 'sara-rezaei-seo',
                twitter: '@sara_seo_expert'
            }
        },
        publishedAt: '۱۴۰۳/۰۸/۱۰',
        readTime: 20,
        views: 18200,
        likes: 310,
        comments: 42,
        featured: true,
        trending: true,
        seo: {
            metaTitle: 'تکنیک‌های پیشرفته سئو ۲۰۲۴ | افزایش ۳۰۰% ترافیک ارگانیک',
            metaDescription: 'راهکارهای حرفه‌ای سئو برای افزایش رتبه گوگل و ترافیک ارگانیک. استراتژی‌های تست شده و قابل اجرا.',
            keywords: ['سئو پیشرفته', 'افزایش ترافیک', 'سئو ۲۰۲۴', 'تکنیک‌های سئو', 'ترافیک ارگانیک'],
            canonicalUrl: 'https://designpardaz.ir/articles/advanced-seo-techniques-organic-traffic',
            ogImage: '/articles/advanced-seo-techniques.jpg'
        },
        image: {
            main: '/articles/advanced-seo-techniques.jpg',
            alt: 'تکنیک‌های پیشرفته سئو برای افزایش ترافیک',
            thumbnail: '/articles/thumbs/advanced-seo-techniques.jpg'
        },
        difficulty: 'پیشرفته',
        language: 'fa',
        status: 'published'
    },
    {
        id: '3',
        title: 'اصول طراحی UI/UX: از ایده تا محصول نهایی',
        slug: 'ui-ux-design-principles-complete-guide',
        excerpt: 'راهنمای جامع طراحی تجربه کاربری و رابط کاربری. اصول، ابزارها و فرآیند کامل از ایده تا محصول نهایی.',
        category: articleCategories[2],
        tags: ['UI/UX', 'طراحی رابط', 'تجربه کاربری', 'Figma', 'Adobe XD', 'Prototyping'],
        author: {
            name: 'رضا کریمی',
            bio: 'طراح UI/UX با تجربه در شرکت‌های بین‌المللی',
            avatar: '/authors/reza-karimi.jpg',
            social: {
                linkedin: 'reza-karimi-ux',
                instagram: '@reza_ux_designer'
            }
        },
        publishedAt: '۱۴۰۳/۰۸/۰۵',
        readTime: 25,
        views: 9800,
        likes: 180,
        comments: 28,
        featured: false,
        trending: true,
        seo: {
            metaTitle: 'راهنمای کامل طراحی UI/UX | اصول و تکنیک‌های حرفه‌ای',
            metaDescription: 'آموزش جامع طراحی UI/UX از مبتدی تا حرفه‌ای. اصول، ابزارها و فرآیند کامل طراحی تجربه کاربری.',
            keywords: ['طراحی UI/UX', 'تجربه کاربری', 'رابط کاربری', 'آموزش UI/UX', 'طراحی اپلیکیشن'],
            canonicalUrl: 'https://designpardaz.ir/articles/ui-ux-design-principles-complete-guide',
            ogImage: '/articles/ui-ux-design-principles.jpg'
        },
        image: {
            main: '/articles/ui-ux-design-principles.jpg',
            alt: 'اصول طراحی UI/UX و تجربه کاربری',
            thumbnail: '/articles/thumbs/ui-ux-design-principles.jpg'
        },
        difficulty: 'متوسط',
        language: 'fa',
        status: 'published'
    },
    {
        id: '4',
        title: 'راه‌اندازی فروشگاه اینترنتی: از ایده تا فروش اول',
        slug: 'ecommerce-store-setup-complete-guide',
        excerpt: 'گام به گام نحوه راه‌اندازی فروشگاه اینترنتی موفق. از انتخاب پلتفرم تا دریافت اولین سفارش.',
        category: articleCategories[4],
        tags: ['فروشگاه اینترنتی', 'ووکامرس', 'شاپیفای', 'درگاه پرداخت', 'بازاریابی', 'فروش آنلاین'],
        author: {
            name: 'مینا صادقی',
            bio: 'مشاور کسب‌وکار آنلاین و متخصص ای‌کامرس',
            avatar: '/authors/mina-sadeghi.jpg',
            social: {
                linkedin: 'mina-sadeghi-ecommerce',
                instagram: '@mina_ecommerce'
            }
        },
        publishedAt: '۱۴۰۳/۰۷/۲۸',
        readTime: 18,
        views: 15600,
        likes: 290,
        comments: 55,
        featured: false,
        trending: false,
        seo: {
            metaTitle: 'راه‌اندازی فروشگاه اینترنتی ۲۰۲۴ | راهنمای کامل از صفر تا صد',
            metaDescription: 'آموزش گام به گام راه‌اندازی فروشگاه اینترنتی حرفه‌ای. انتخاب پلتفرم، طراحی، بازاریابی و دریافت اولین فروش.',
            keywords: ['فروشگاه اینترنتی', 'راه‌اندازی ایکامرس', 'فروش آنلاین', 'ووکامرس', 'درگاه پرداخت'],
            canonicalUrl: 'https://designpardaz.ir/articles/ecommerce-store-setup-complete-guide',
            ogImage: '/articles/ecommerce-store-setup.jpg'
        },
        image: {
            main: '/articles/ecommerce-store-setup.jpg',
            alt: 'راه‌اندازی فروشگاه اینترنتی حرفه‌ای',
            thumbnail: '/articles/thumbs/ecommerce-store-setup.jpg'
        },
        difficulty: 'متوسط',
        language: 'fa',
        status: 'published'
    },
    {
        id: '5',
        title: 'آموزش React.js از صفر: پروژه‌محور و عملی',
        slug: 'reactjs-tutorial-project-based-learning',
        excerpt: 'یادگیری کامل React.js با ساخت پروژه‌های واقعی. از مفاهیم پایه تا تکنیک‌های پیشرفته.',
        category: articleCategories[5],
        tags: ['React.js', 'JavaScript', 'Frontend', 'آموزش برنامه‌نویسی', 'پروژه‌محور', 'Next.js'],
        author: {
            name: 'امیر حسینی',
            bio: 'توسعه‌دهنده Frontend و مدرس برنامه‌نویسی',
            avatar: '/authors/amir-hosseini.jpg',
            social: {
                linkedin: 'amir-hosseini-dev',
                twitter: '@amir_react_dev'
            }
        },
        publishedAt: '۱۴۰۳/۰۷/۲۰',
        readTime: 30,
        views: 22100,
        likes: 420,
        comments: 78,
        featured: true,
        trending: false,
        seo: {
            metaTitle: 'آموزش کامل React.js ۲۰۲۴ | پروژه‌محور و عملی',
            metaDescription: 'یادگیری React.js از صفر تا حرفه‌ای با ساخت پروژه‌های واقعی. آموزش گام به گام و پروژه‌محور.',
            keywords: ['آموزش React', 'React.js فارسی', 'یادگیری React', 'آموزش جاوا اسکریپت', 'فرانت‌اند'],
            canonicalUrl: 'https://designpardaz.ir/articles/reactjs-tutorial-project-based-learning',
            ogImage: '/articles/reactjs-tutorial.jpg'
        },
        image: {
            main: '/articles/reactjs-tutorial.jpg',
            alt: 'آموزش React.js پروژه‌محور',
            thumbnail: '/articles/thumbs/reactjs-tutorial.jpg'
        },
        difficulty: 'پیشرفته',
        language: 'fa',
        status: 'published'
    },
    {
        id: '6',
        title: 'استراتژی‌های بازاریابی دیجیتال برای کسب‌وکارهای کوچک',
        slug: 'digital-marketing-strategies-small-business',
        excerpt: 'راهکارهای عملی و کم‌هزینه بازاریابی دیجیتال برای کسب‌وکارهای نوپا و کوچک. با بودجه محدود نتیجه بگیرید.',
        category: articleCategories[6],
        tags: ['بازاریابی دیجیتال', 'کسب‌وکار کوچک', 'شبکه‌های اجتماعی', 'تبلیغات', 'برندسازی', 'محتوا'],
        author: {
            name: 'فاطمه محمدی',
            bio: 'متخصص بازاریابی دیجیتال و مشاور استراتژی',
            avatar: '/authors/fateme-mohammadi.jpg',
            social: {
                linkedin: 'fateme-mohammadi-marketing',
                instagram: '@fateme_marketing'
            }
        },
        publishedAt: '۱۴۰۳/۰۷/۱۵',
        readTime: 12,
        views: 8900,
        likes: 165,
        comments: 32,
        featured: false,
        trending: false,
        seo: {
            metaTitle: 'استراتژی بازاریابی دیجیتال برای کسب‌وکارهای کوچک | ۲۰۲۴',
            metaDescription: 'راهکارهای عملی و کم‌هزینه بازاریابی آنلاین برای کسب‌وکارهای نوپا. استراتژی‌های تست شده و قابل اجرا.',
            keywords: ['بازاریابی دیجیتال', 'کسب‌وکار کوچک', 'بازاریابی آنلاین', 'تبلیغات اینترنتی', 'شبکه‌های اجتماعی'],
            canonicalUrl: 'https://designpardaz.ir/articles/digital-marketing-strategies-small-business',
            ogImage: '/articles/digital-marketing-small-business.jpg'
        },
        image: {
            main: '/articles/digital-marketing-small-business.jpg',
            alt: 'استراتژی‌های بازاریابی دیجیتال برای کسب‌وکارهای کوچک',
            thumbnail: '/articles/thumbs/digital-marketing-small-business.jpg'
        },
        difficulty: 'مبتدی',
        language: 'fa',
        status: 'published'
    }
];

// برای pagination و filtering
export const getArticles = (params?: {
    category?: string;
    tag?: string;
    search?: string;
    page?: number;
    limit?: number;
    sort?: 'latest' | 'popular' | 'trending';
}) => {
    let filteredArticles = articles.filter(article => article.status === 'published');

    if (params?.category) {
        filteredArticles = filteredArticles.filter(article =>
            article.category.slug === params.category
        );
    }

    if (params?.tag) {
        filteredArticles = filteredArticles.filter(article =>
            article.tags.some(tag =>
                tag.toLowerCase().includes(params.tag!.toLowerCase())
            )
        );
    }

    if (params?.search) {
        const searchTerm = params.search.toLowerCase();
        filteredArticles = filteredArticles.filter(article =>
            article.title.toLowerCase().includes(searchTerm) ||
            article.excerpt.toLowerCase().includes(searchTerm) ||
            article.tags.some(tag => tag.toLowerCase().includes(searchTerm))
        );
    }

    // Sorting
    if (params?.sort === 'popular') {
        filteredArticles.sort((a, b) => b.views - a.views);
    } else if (params?.sort === 'trending') {
        filteredArticles.sort((a, b) => {
            if (a.trending && !b.trending) return -1;
            if (!a.trending && b.trending) return 1;
            return b.likes - a.likes;
        });
    } else {
        // Default: latest
        filteredArticles.sort((a, b) =>
            new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
        );
    }

    // Pagination
    const page = params?.page || 1;
    const limit = params?.limit || 12;
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;

    return {
        articles: filteredArticles.slice(startIndex, endIndex),
        total: filteredArticles.length,
        page,
        totalPages: Math.ceil(filteredArticles.length / limit),
        hasNext: endIndex < filteredArticles.length,
        hasPrev: page > 1
    };
};

export const getFeaturedArticles = () =>
    articles.filter(article => article.featured && article.status === 'published');

export const getTrendingArticles = () =>
    articles.filter(article => article.trending && article.status === 'published');

export const getRelatedArticles = (articleId: string, limit: number = 3) => {
    const currentArticle = articles.find(article => article.id === articleId);
    if (!currentArticle) return [];

    return articles
        .filter(article =>
            article.id !== articleId &&
            article.status === 'published' &&
            (article.category.id === currentArticle.category.id ||
                article.tags.some(tag => currentArticle.tags.includes(tag)))
        )
        .sort((a, b) => b.views - a.views)
        .slice(0, limit);
};
