'use client';

import { useState, useEffect, useRef, useMemo, use } from 'react';

import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import {
    HeartIcon,
    EyeIcon,
    ShareIcon,
    BookmarkIcon,
    PrinterIcon,
    ClockIcon,
    CalendarDaysIcon,
    TagIcon,
    HomeIcon,
    ChevronLeftIcon,
    DocumentTextIcon,
    StarIcon,
    ChatBubbleLeftIcon,
    LinkIcon,
    ArrowUpIcon,
    FireIcon,
    HandThumbUpIcon,
    HandThumbDownIcon,
    PaperAirplaneIcon
} from '@heroicons/react/24/outline';
import {
    HeartIcon as HeartSolidIcon,
    BookmarkIcon as BookmarkSolidIcon,
} from '@heroicons/react/24/solid';

import { articles, getRelatedArticles, type Article } from '@/lib/data/articles';

interface ArticlePageProps {
    params: Promise<{
        slug: string;
    }>;
}

// Static animation data to prevent hydration mismatch
const FLOATING_PARTICLES = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: `${(i * 7 + 10) % 90}%`,
    top: `${(i * 11 + 15) % 80}%`,
    animationDelay: `${i * 0.3}s`,
    animationDuration: `${4 + (i % 3)}s`
}));

export default function ArticlePage({ params }: ArticlePageProps) {
    const { slug } = use(params);

    // Find article by slug
    const article = useMemo(() =>
            articles.find(a => a.slug === slug),
        [slug]
    );


    // Related articles
    const relatedArticles = useMemo(() => {
        if (!article) return [];

        try {
            return getRelatedArticles(article, 6);
        } catch (error) {
            console.error('Error getting related articles:', error);
            return [];
        }
    }, [article]);
    // State management
    const [isLiked, setIsLiked] = useState(false);
    const [isBookmarked, setIsBookmarked] = useState(false);
    const [likes, setLikes] = useState(0);
    const [views, setViews] = useState(0);
    const [showShareMenu, setShowShareMenu] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [readingProgress, setReadingProgress] = useState(0);
    const [activeSection, setActiveSection] = useState('');
    const [showCommentForm, setShowCommentForm] = useState(false);
    const [newComment, setNewComment] = useState('');
    const [userRating, setUserRating] = useState(0);
    const [feedback, setFeedback] = useState<'helpful' | 'not-helpful' | null>(null);
    const [mounted, setMounted] = useState(false);

    const contentRef = useRef<HTMLDivElement>(null);

    // Mock table of contents
    const tableOfContents = [
        { id: 'introduction', title: 'مقدمه', level: 1 },
        { id: 'basics', title: 'مبانی اصلی', level: 1 },
        { id: 'implementation', title: 'پیاده‌سازی', level: 2 },
        { id: 'examples', title: 'مثال‌های کاربردی', level: 2 },
        { id: 'best-practices', title: 'بهترین روش‌ها', level: 1 },
        { id: 'performance', title: 'بهینه‌سازی', level: 2 },
        { id: 'security', title: 'امنیت', level: 2 },
        { id: 'conclusion', title: 'نتیجه‌گیری', level: 1 }
    ];

    // Mock comments
    const [comments] = useState([
        {
            id: '1',
            author: 'محمد احمدی',
            avatar: '/avatars/user1.jpg',
            content: 'مقاله بسیار مفیدی بود. خیلی کمک کرد.',
            publishedAt: '۱۴۰۳/۰۸/۲۰',
            likes: 12,
            replies: []
        },
        {
            id: '2',
            author: 'سارا کریمی',
            avatar: '/avatars/user2.jpg',
            content: 'آیا می‌تونید راجع به بخش پیاده‌سازی بیشتر توضیح بدید؟',
            publishedAt: '۱۴۰۳/۰۸/۲۱',
            likes: 8,
            replies: [
                {
                    id: '2-1',
                    author: article?.author.name || 'نویسنده',
                    avatar: article?.author.avatar || '/avatars/author.jpg',
                    content: 'حتماً. در مقاله بعدی به طور کامل پوشش می‌دم',
                    publishedAt: '۱۴۰۳/۰۸/۲۲',
                    likes: 3,
                    isAuthor: true
                }
            ]
        }
    ]);

    // Initialize data when component mounts
    useEffect(() => {
        setMounted(true);
        if (article) {
            setLikes(article.likes);
            setViews(article.views);
        }
    }, [article]);

    // Handle scroll effects
    useEffect(() => {
        if (!mounted) return;

        const handleScroll = () => {
            const scrolled = window.scrollY;
            const maxHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = maxHeight > 0 ? (scrolled / maxHeight) * 100 : 0;

            setReadingProgress(Math.min(progress, 100));
            setShowScrollTop(scrolled > 500);

            // Update active section
            const sections = tableOfContents.map(item => item.id);
            const currentSection = sections.find(sectionId => {
                const element = document.getElementById(sectionId);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });

            if (currentSection) {
                setActiveSection(currentSection);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [mounted]);

    // Return 404 if article not found
    if (!article) {
        notFound();
    }

    // Utility functions
    const getDifficultyColor = (difficulty: string) => {
        switch (difficulty) {
            case 'مبتدی': return 'text-green-600 bg-green-50 border-green-200';
            case 'متوسط': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
            case 'پیشرفته': return 'text-red-600 bg-red-50 border-red-200';
            default: return 'text-gray-600 bg-gray-50 border-gray-200';
        }
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return new Intl.DateTimeFormat('fa-IR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }).format(date);
    };

    // Event handlers
    const toggleLike = () => {
        setIsLiked(!isLiked);
        setLikes(prev => isLiked ? prev - 1 : prev + 1);
    };

    const toggleBookmark = () => {
        setIsBookmarked(!isBookmarked);
    };

    const handleShare = async () => {
        if (navigator.share && mounted) {
            try {
                await navigator.share({
                    title: article.title,
                    text: article.excerpt,
                    url: window.location.href
                });
            } catch (err) {
                console.log('خطا در اشتراک‌گذاری:', err);
            }
        } else if (mounted) {
            await navigator.clipboard.writeText(window.location.href);
            // Show toast notification
        }
    };

    const scrollToTop = () => {
        if (mounted) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const submitComment = () => {
        if (!newComment.trim()) return;
        // Comment submission logic here
        setNewComment('');
        setShowCommentForm(false);
    };

    if (!mounted) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    return (
        <>
            {/* SEO Meta Tags */}
            <head>
                <title>{article.seo?.metaTitle || article.title}</title>
                <meta name="description" content={article.seo?.metaDescription || article.excerpt} />
                <meta name="keywords" content={article.seo?.keywords?.join(', ') || article.tags.join(', ')} />
                <link rel="canonical" href={article.seo?.canonicalUrl || `https://designpardaz.ir/articles/${article.slug}`} />

                {/* Open Graph */}
                <meta property="og:title" content={article.title} />
                <meta property="og:description" content={article.excerpt} />
                <meta property="og:type" content="article" />
                <meta property="og:image" content={article.image.main} />
                <meta property="article:published_time" content={article.publishedAt} />
                <meta property="article:author" content={article.author.name} />
            </head>

            <div className="min-h-screen bg-white">
                {/* Reading Progress Bar */}
                <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
                    <div
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300"
                        style={{ width: `${readingProgress}%` }}
                    />
                </div>

                {/* Breadcrumb Navigation */}
                <nav className="bg-white border-b border-gray-200 py-4 sticky top-0 z-40 backdrop-blur-sm bg-white/95">
                    <div className="container mx-auto px-4">
                        <div className="flex items-center gap-2 text-sm">
                            <Link href="/" className="flex items-center gap-1 text-gray-500 hover:text-blue-600 transition-colors">
                                <HomeIcon className="w-4 h-4" />
                                <span>خانه</span>
                            </Link>
                            <ChevronLeftIcon className="w-4 h-4 text-gray-400" />
                            <Link href="/articles" className="text-gray-500 hover:text-blue-600 transition-colors">
                                مقالات
                            </Link>
                            <ChevronLeftIcon className="w-4 h-4 text-gray-400" />
                            <Link
                                href={`/articles?category=${article.category.slug}`}
                                className="text-gray-500 hover:text-blue-600 transition-colors"
                            >
                                {article.category.name}
                            </Link>
                            <ChevronLeftIcon className="w-4 h-4 text-gray-400" />
                            <span className="text-gray-900 font-medium truncate max-w-md">
                                {article.title}
                            </span>
                        </div>
                    </div>
                </nav>

                {/* Article Header */}
                <header className="py-16 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
                    {/* Static Background Animation */}
                    <div className="absolute inset-0">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
                        {FLOATING_PARTICLES.map((particle) => (
                            <div
                                key={particle.id}
                                className="absolute animate-float"
                                style={{
                                    left: particle.left,
                                    top: particle.top,
                                    animationDelay: particle.animationDelay,
                                    animationDuration: particle.animationDuration
                                }}
                            >
                                <div className="w-2 h-2 bg-white/20 rounded-full blur-sm"></div>
                            </div>
                        ))}
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-4xl mx-auto text-center">
                            {/* Article Badges */}
                            <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
                                {(() => {
                                    const IconComponent = article.category.icon as React.ComponentType<{ className?: string }>;
                                    return <IconComponent className="w-5 h-5" />;
                                })()}

                                <div className={`px-4 py-2 rounded-full text-sm font-medium border ${getDifficultyColor(article.difficulty)}`}>
                                    {article.difficulty}
                                </div>

                                {article.featured && (
                                    <div className="px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full flex items-center gap-2">
                                        <StarIcon className="w-4 h-4" />
                                        <span className="text-sm font-medium">ویژه</span>
                                    </div>
                                )}

                                {article.trending && (
                                    <div className="px-4 py-2 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full flex items-center gap-2">
                                        <FireIcon className="w-4 h-4" />
                                        <span className="text-sm font-medium">ترند</span>
                                    </div>
                                )}
                            </div>

                            {/* Article Title */}
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-8">
                                {article.title}
                            </h1>

                            {/* Article Excerpt */}
                            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8 max-w-3xl mx-auto">
                                {article.excerpt}
                            </p>

                            {/* Article Meta */}
                            <div className="flex flex-wrap items-center justify-center gap-6 mb-8 text-gray-300">
                                <div className="flex items-center gap-3">
                                    <Image
                                        src={article.author.avatar}
                                        alt={article.author.name}
                                        width={48}
                                        height={48}
                                        className="w-12 h-12 rounded-full object-cover border-2 border-white/20"
                                    />
                                    <div>
                                        <div className="font-medium text-white">{article.author.name}</div>
                                        <div className="text-sm text-gray-400">{article.author.role || 'نویسنده'}</div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-1">
                                    <CalendarDaysIcon className="w-5 h-5" />
                                    <span>{formatDate(article.publishedAt)}</span>
                                </div>

                                <div className="flex items-center gap-1">
                                    <ClockIcon className="w-5 h-5" />
                                    <span>{article.readTime} دقیقه مطالعه</span>
                                </div>

                                <div className="flex items-center gap-1">
                                    <EyeIcon className="w-5 h-5" />
                                    <span>{views.toLocaleString()} بازدید</span>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-wrap items-center justify-center gap-4">
                                <button
                                    onClick={toggleLike}
                                    className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                                        isLiked
                                            ? 'bg-red-500 text-white'
                                            : 'bg-white/10 text-white hover:bg-white/20'
                                    }`}
                                >
                                    {isLiked ? <HeartSolidIcon className="w-5 h-5" /> : <HeartIcon className="w-5 h-5" />}
                                    <span>{likes.toLocaleString()}</span>
                                </button>

                                <button
                                    onClick={toggleBookmark}
                                    className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                                        isBookmarked
                                            ? 'bg-blue-500 text-white'
                                            : 'bg-white/10 text-white hover:bg-white/20'
                                    }`}
                                >
                                    {isBookmarked ? <BookmarkSolidIcon className="w-5 h-5" /> : <BookmarkIcon className="w-5 h-5" />}
                                    <span>ذخیره</span>
                                </button>

                                <button
                                    onClick={handleShare}
                                    className="flex items-center gap-2 px-6 py-3 bg-white/10 text-white hover:bg-white/20 rounded-xl font-medium transition-all duration-300"
                                >
                                    <ShareIcon className="w-5 h-5" />
                                    <span>اشتراک</span>
                                </button>

                                <button
                                    onClick={() => mounted && window.print()}
                                    className="flex items-center gap-2 px-6 py-3 bg-white/10 text-white hover:bg-white/20 rounded-xl font-medium transition-all duration-300"
                                >
                                    <PrinterIcon className="w-5 h-5" />
                                    <span>چاپ</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Main Content */}
                <div className="container mx-auto px-4 py-12">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid lg:grid-cols-4 gap-12">
                            {/* Table of Contents - Sidebar */}
                            <aside className="lg:col-span-1 order-2 lg:order-1">
                                <div className="sticky top-24 space-y-8">
                                    {/* Author Card */}
                                    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                                        <div className="flex items-center gap-4 mb-4">
                                            <Image
                                                src={article.author.avatar}
                                                alt={article.author.name}
                                                width={60}
                                                height={60}
                                                className="w-15 h-15 rounded-full object-cover"
                                            />
                                            <div>
                                                <h3 className="font-bold text-gray-900">{article.author.name}</h3>
                                                <p className="text-gray-600 text-sm">{article.author.role || 'نویسنده'}</p>
                                            </div>
                                        </div>
                                        {article.author.bio && (
                                            <p className="text-gray-600 text-sm">{article.author.bio}</p>
                                        )}
                                    </div>

                                    {/* Table of Contents */}
                                    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                                        <div className="flex items-center gap-2 mb-4">
                                            <DocumentTextIcon className="w-5 h-5 text-blue-600" />
                                            <h3 className="font-bold text-gray-900">فهرست مطالب</h3>
                                        </div>
                                        <nav className="space-y-2">
                                            {tableOfContents.map((item) => (
                                                <a
                                                    key={item.id}
                                                    href={`#${item.id}`}
                                                    className={`block py-2 px-3 text-sm rounded-lg transition-colors ${
                                                        item.level === 1
                                                            ? 'font-medium text-gray-900 hover:bg-blue-50 hover:text-blue-600'
                                                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 mr-4'
                                                    } ${
                                                        activeSection === item.id
                                                            ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600'
                                                            : ''
                                                    }`}
                                                >
                                                    {item.title}
                                                </a>
                                            ))}
                                        </nav>
                                    </div>

                                    {/* Article Stats */}
                                    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                                        <h3 className="font-bold text-gray-900 mb-4">آمار مقاله</h3>
                                        <div className="space-y-3">
                                            <div className="flex items-center justify-between">
                                                <span className="text-gray-600">بازدید</span>
                                                <span className="font-medium">{views.toLocaleString()}</span>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <span className="text-gray-600">پسندیدن</span>
                                                <span className="font-medium">{likes.toLocaleString()}</span>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <span className="text-gray-600">زمان مطالعه</span>
                                                <span className="font-medium">{article.readTime} دقیقه</span>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <span className="text-gray-600">سطح</span>
                                                <span className={`px-2 py-1 rounded text-xs font-medium ${getDifficultyColor(article.difficulty)}`}>
                                                    {article.difficulty}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </aside>

                            {/* Main Article Content */}
                            <article className="lg:col-span-3 order-1 lg:order-2">
                                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                                    {/* Article Image */}
                                    <div className="aspect-video relative">
                                        <Image
                                            src={article.image.main}
                                            alt={article.image.alt}
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                    </div>

                                    {/* Article Content */}
                                    <div className="p-8">
                                        {/* Article Tags */}
                                        <div className="flex flex-wrap gap-2 mb-8">
                                            {article.tags.map((tag) => (
                                                <Link
                                                    key={tag}
                                                    href={`/articles?tag=${encodeURIComponent(tag)}`}
                                                    className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-blue-50 hover:text-blue-600 transition-colors"
                                                >
                                                    <TagIcon className="w-3 h-3" />
                                                    <span>{tag}</span>
                                                </Link>
                                            ))}
                                        </div>

                                        {/* Main Content */}
                                        <div
                                            ref={contentRef}
                                            className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-pre:bg-gray-900 prose-pre:text-gray-100"
                                            dangerouslySetInnerHTML={{ __html: article.content }}
                                        />

                                        {/* Article Footer */}
                                        <div className="mt-12 pt-8 border-t border-gray-200">
                                            {/* Rating */}
                                            <div className="mb-8">
                                                <h3 className="font-bold text-gray-900 mb-4">این مقاله را چگونه ارزیابی می‌کنید؟</h3>
                                                <div className="flex items-center gap-2">
                                                    {[1, 2, 3, 4, 5].map((star) => (
                                                        <button
                                                            key={star}
                                                            onClick={() => setUserRating(star)}
                                                            className={`p-1 rounded ${
                                                                star <= userRating
                                                                    ? 'text-yellow-400'
                                                                    : 'text-gray-300 hover:text-yellow-400'
                                                            } transition-colors`}
                                                        >
                                                            <StarIcon className="w-6 h-6 fill-current" />
                                                        </button>
                                                    ))}
                                                    <span className="mr-3 text-gray-600">
                                                        {userRating > 0 ? `${userRating} از 5` : 'امتیاز دهید'}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Feedback */}
                                            <div className="mb-8">
                                                <h3 className="font-bold text-gray-900 mb-4">آیا این مقاله مفید بود؟</h3>
                                                <div className="flex gap-4">
                                                    <button
                                                        onClick={() => setFeedback('helpful')}
                                                        className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
                                                            feedback === 'helpful'
                                                                ? 'bg-green-500 text-white'
                                                                : 'bg-gray-100 text-gray-700 hover:bg-green-50 hover:text-green-600'
                                                        }`}
                                                    >
                                                        <HandThumbUpIcon className="w-5 h-5" />
                                                        <span>مفید بود</span>
                                                    </button>
                                                    <button
                                                        onClick={() => setFeedback('not-helpful')}
                                                        className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
                                                            feedback === 'not-helpful'
                                                                ? 'bg-red-500 text-white'
                                                                : 'bg-gray-100 text-gray-700 hover:bg-red-50 hover:text-red-600'
                                                        }`}
                                                    >
                                                        <HandThumbDownIcon className="w-5 h-5" />
                                                        <span>مفید نبود</span>
                                                    </button>
                                                </div>
                                            </div>

                                            {/* Share Section */}
                                            <div className="mb-8">
                                                <h3 className="font-bold text-gray-900 mb-4">اشتراک‌گذاری</h3>
                                                <div className="flex items-center gap-4">
                                                    <button
                                                        onClick={handleShare}
                                                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                                                    >
                                                        <ShareIcon className="w-4 h-4" />
                                                        <span>اشتراک‌گذاری</span>
                                                    </button>
                                                    <button
                                                        onClick={() => mounted && navigator.clipboard.writeText(window.location.href)}
                                                        className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                                                    >
                                                        <LinkIcon className="w-4 h-4" />
                                                        <span>کپی لینک</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Comments Section */}
                                <div className="mt-12 bg-white rounded-2xl shadow-lg border border-gray-100">
                                    <div className="p-8">
                                        <div className="flex items-center justify-between mb-8">
                                            <h2 className="text-2xl font-bold text-gray-900">
                                                نظرات ({comments.length})
                                            </h2>
                                            <button
                                                onClick={() => setShowCommentForm(!showCommentForm)}
                                                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                                            >
                                                <ChatBubbleLeftIcon className="w-4 h-4" />
                                                <span>نظر جدید</span>
                                            </button>
                                        </div>

                                        {/* Comment Form */}
                                        {showCommentForm && (
                                            <div className="mb-8 p-6 bg-gray-50 rounded-xl">
                                                <h3 className="font-bold text-gray-900 mb-4">نظر خود را بنویسید</h3>
                                                <textarea
                                                    value={newComment}
                                                    onChange={(e) => setNewComment(e.target.value)}
                                                    placeholder="نظر شما..."
                                                    rows={4}
                                                    className="w-full p-4 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                />
                                                <div className="flex justify-end gap-3 mt-4">
                                                    <button
                                                        onClick={() => setShowCommentForm(false)}
                                                        className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                                                    >
                                                        انصراف
                                                    </button>
                                                    <button
                                                        onClick={submitComment}
                                                        className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                                                    >
                                                        <PaperAirplaneIcon className="w-4 h-4" />
                                                        <span>ارسال نظر</span>
                                                    </button>
                                                </div>
                                            </div>
                                        )}

                                        {/* Comments List */}
                                        <div className="space-y-6">
                                            {comments.map((comment) => (
                                                <div key={comment.id} className="border-b border-gray-100 pb-6 last:border-b-0">
                                                    <div className="flex items-start gap-4">
                                                        <Image
                                                            src={comment.avatar}
                                                            alt={comment.author}
                                                            width={40}
                                                            height={40}
                                                            className="w-10 h-10 rounded-full object-cover"
                                                        />
                                                        <div className="flex-1">
                                                            <div className="flex items-center gap-2 mb-2">
                                                                <h4 className="font-medium text-gray-900">{comment.author}</h4>
                                                                <span className="text-sm text-gray-500">{comment.publishedAt}</span>
                                                            </div>
                                                            <p className="text-gray-700 leading-relaxed mb-3">{comment.content}</p>
                                                            <div className="flex items-center gap-4">
                                                                <button className="flex items-center gap-1 text-gray-500 hover:text-blue-600 transition-colors">
                                                                    <HandThumbUpIcon className="w-4 h-4" />
                                                                    <span>{comment.likes}</span>
                                                                </button>
                                                                <button className="text-gray-500 hover:text-blue-600 transition-colors">
                                                                    پاسخ
                                                                </button>
                                                            </div>

                                                            {/* Replies */}
                                                            {comment.replies && comment.replies.length > 0 && (
                                                                <div className="mt-4 mr-6 space-y-4">
                                                                    {comment.replies.map((reply) => (
                                                                        <div key={reply.id} className="flex items-start gap-3">
                                                                            <Image
                                                                                src={reply.avatar}
                                                                                alt={reply.author}
                                                                                width={32}
                                                                                height={32}
                                                                                className="w-8 h-8 rounded-full object-cover"
                                                                            />
                                                                            <div className="flex-1">
                                                                                <div className="flex items-center gap-2 mb-1">
                                                                                    <h5 className="font-medium text-gray-900">{reply.author}</h5>
                                                                                    {reply.isAuthor && (
                                                                                        <span className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded-full">نویسنده</span>
                                                                                    )}
                                                                                    <span className="text-xs text-gray-500">{reply.publishedAt}</span>
                                                                                </div>
                                                                                <p className="text-gray-700 text-sm">{reply.content}</p>
                                                                            </div>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>

                {/* Related Articles */}
                {relatedArticles.length > 0 && (
                    <section className="py-16 bg-gray-50">
                        <div className="container mx-auto px-4">
                            <div className="max-w-6xl mx-auto">
                                <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                                    مقالات مرتبط
                                </h2>
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {relatedArticles.map((relatedArticle) => (
                                        <Link
                                            key={relatedArticle.id}
                                            href={`/articles/${relatedArticle.slug}`}
                                            className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow group"
                                        >
                                            <div className="aspect-video relative">
                                                <Image
                                                    src={relatedArticle.image.main}
                                                    alt={relatedArticle.image.alt}
                                                    fill
                                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                                />
                                            </div>
                                            <div className="p-6">
                                                <div className="flex items-center gap-2 mb-3">
                                                    <div className={`px-2 py-1 bg-gradient-to-r ${relatedArticle.category.color} text-white rounded text-xs font-medium`}>
                                                        {relatedArticle.category.name}
                                                    </div>
                                                    <div className={`px-2 py-1 rounded text-xs font-medium ${getDifficultyColor(relatedArticle.difficulty)}`}>
                                                        {relatedArticle.difficulty}
                                                    </div>
                                                </div>
                                                <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                                                    {relatedArticle.title}
                                                </h3>
                                                <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                                                    {relatedArticle.excerpt}
                                                </p>
                                                <div className="flex items-center justify-between text-xs text-gray-500">
                                                    <div className="flex items-center gap-4">
                                                        <span className="flex items-center gap-1">
                                                            <ClockIcon className="w-3 h-3" />
                                                            {relatedArticle.readTime}م
                                                        </span>
                                                        <span className="flex items-center gap-1">
                                                            <EyeIcon className="w-3 h-3" />
                                                            {relatedArticle.views.toLocaleString()}
                                                        </span>
                                                    </div>
                                                    <span>{formatDate(relatedArticle.publishedAt)}</span>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* Scroll to Top Button */}
                {showScrollTop && (
                    <button
                        onClick={scrollToTop}
                        className="fixed bottom-8 left-8 w-12 h-12 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 z-40 flex items-center justify-center"
                    >
                        <ArrowUpIcon className="w-5 h-5" />
                    </button>
                )}
            </div>
        </>
    );
}
