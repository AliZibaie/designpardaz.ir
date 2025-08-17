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

const FLOATING_PARTICLES = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: `${(i * 7 + 10) % 90}%`,
    top: `${(i * 11 + 15) % 80}%`,
    animationDelay: `${i * 0.3}s`,
    animationDuration: `${4 + (i % 3)}s`
}));

export default function ArticlePage({ params }: ArticlePageProps) {
    const { slug } = use(params);

    const article = useMemo(() =>
            articles.find(a => a.slug === slug),
        [slug]
    );

    const relatedArticles = useMemo(() => {
        if (!article) return [];

        try {
            return getRelatedArticles(article, 6);
        } catch (error) {
            console.error('Error getting related articles:', error);
            return [];
        }
    }, [article]);

    const [isLiked, setIsLiked] = useState(false);
    const [isBookmarked, setIsBookmarked] = useState(false);
    const [likes, setLikes] = useState(0);
    const [views, setViews] = useState(0);
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [readingProgress, setReadingProgress] = useState(0);
    const [activeSection, setActiveSection] = useState('');
    const [showCommentForm, setShowCommentForm] = useState(false);
    const [newComment, setNewComment] = useState('');
    const [userRating, setUserRating] = useState(0);
    const [feedback, setFeedback] = useState<'helpful' | 'not-helpful' | null>(null);
    const [mounted, setMounted] = useState(false);

    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setMounted(true);
        if (article) {
            setLikes(article.likes);
            setViews(article.views);
        }
    }, [article]);

    useEffect(() => {
        if (!mounted) return;

        const handleScroll = () => {
            const scrolled = window.scrollY;
            const maxHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = maxHeight > 0 ? (scrolled / maxHeight) * 100 : 0;

            setReadingProgress(Math.min(progress, 100));
            setShowScrollTop(scrolled > 500);

            if (article?.tableOfContents) {
                const sections = article.tableOfContents.map(item => item.id);
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
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [mounted, article]);

    if (!article) {
        notFound();
    }

    const getDifficultyColor = (difficulty: string) => {
        switch (difficulty) {
            case 'مبتدی': return 'text-emerald-700 bg-emerald-50 border-emerald-200';
            case 'متوسط': return 'text-amber-700 bg-amber-50 border-amber-200';
            case 'پیشرفته': return 'text-rose-700 bg-rose-50 border-rose-200';
            default: return 'text-slate-700 bg-slate-50 border-slate-200';
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
        }
    };

    const scrollToTop = () => {
        if (mounted) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const submitComment = () => {
        if (!newComment.trim()) return;
        setNewComment('');
        setShowCommentForm(false);
    };

    if (!mounted) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    return (
        <>
            <head>
                <title>{article.seo?.metaTitle || article.title}</title>
                <meta name="description" content={article.seo?.metaDescription || article.excerpt} />
                <meta name="keywords" content={article.seo?.keywords?.join(', ') || article.tags.join(', ')} />
                <link rel="canonical" href={article.seo?.canonicalUrl || `https://designpardaz.ir/articles/${article.slug}`} />

                <meta property="og:title" content={article.title} />
                <meta property="og:description" content={article.excerpt} />
                <meta property="og:type" content="article" />
                <meta property="og:image" content={article.image.main} />
                <meta property="article:published_time" content={article.publishedAt} />
                <meta property="article:author" content={article.author.name} />
            </head>

            <div className="min-h-screen bg-slate-50">
                <div className="fixed top-0 left-0 w-full h-1 bg-slate-200 z-50">
                    <div
                        className="h-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-300"
                        style={{ width: `${readingProgress}%` }}
                    />
                </div>

                <nav className="bg-white/95 backdrop-blur-sm border-b border-slate-200 py-4 sticky top-0 z-40 shadow-sm">
                    <div className="container mx-auto px-4">
                        <div className="flex items-center gap-2 text-sm">
                            <Link href="/" className="flex items-center gap-1 text-slate-600 hover:text-blue-600 transition-colors">
                                <HomeIcon className="w-4 h-4" />
                                <span>خانه</span>
                            </Link>
                            <ChevronLeftIcon className="w-4 h-4 text-slate-400" />
                            <Link href="/articles" className="text-slate-600 hover:text-blue-600 transition-colors">
                                مقالات
                            </Link>
                            <ChevronLeftIcon className="w-4 h-4 text-slate-400" />
                            <Link
                                href={`/articles?category=${article.category.slug}`}
                                className="text-slate-600 hover:text-blue-600 transition-colors"
                            >
                                {article.category.name}
                            </Link>
                            <ChevronLeftIcon className="w-4 h-4 text-slate-400" />
                            <span className="text-slate-900 font-medium truncate max-w-md">
                                {article.title}
                            </span>
                        </div>
                    </div>
                </nav>

                <header className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
                    <div className="absolute inset-0">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-blue-500/10 to-blue-600/10"></div>
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
                                <div className="w-2 h-2 bg-blue-400/30 rounded-full blur-sm"></div>
                            </div>
                        ))}
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
                                {(() => {
                                    const IconComponent = article.category.icon as React.ComponentType<{ className?: string }>;
                                    return <IconComponent className="w-5 h-5 text-blue-400" />;
                                })()}

                                <div className={`px-4 py-2 rounded-full text-sm font-medium border ${getDifficultyColor(article.difficulty)}`}>
                                    {article.difficulty}
                                </div>

                                {article.featured && (
                                    <div className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full flex items-center gap-2">
                                        <StarIcon className="w-4 h-4" />
                                        <span className="text-sm font-medium">ویژه</span>
                                    </div>
                                )}

                                {article.trending && (
                                    <div className="px-4 py-2 bg-gradient-to-r from-slate-600 to-slate-700 text-white rounded-full flex items-center gap-2">
                                        <FireIcon className="w-4 h-4" />
                                        <span className="text-sm font-medium">ترند</span>
                                    </div>
                                )}
                            </div>

                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-8 text-white">
                                {article.title}
                            </h1>

                            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-8 max-w-3xl mx-auto">
                                {article.excerpt}
                            </p>

                            <div className="flex flex-wrap items-center justify-center gap-6 mb-8 text-slate-300">
                                <div className="flex items-center gap-3">
                                    <Image
                                        src={article.author.avatar}
                                        alt={article.author.name}
                                        width={48}
                                        height={48}
                                        className="w-12 h-12 rounded-full object-cover border-2 border-blue-400/30"
                                    />
                                    <div>
                                        <div className="font-medium text-white">{article.author.name}</div>
                                        <div className="text-sm text-slate-400">{article.author.role}</div>
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

                            <div className="flex flex-wrap items-center justify-center gap-4">
                                <button
                                    onClick={toggleLike}
                                    className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                                        isLiked
                                            ? 'bg-red-500 text-white shadow-lg'
                                            : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm'
                                    }`}
                                >
                                    {isLiked ? <HeartSolidIcon className="w-5 h-5" /> : <HeartIcon className="w-5 h-5" />}
                                    <span>{likes.toLocaleString()}</span>
                                </button>

                                <button
                                    onClick={toggleBookmark}
                                    className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                                        isBookmarked
                                            ? 'bg-blue-500 text-white shadow-lg'
                                            : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm'
                                    }`}
                                >
                                    {isBookmarked ? <BookmarkSolidIcon className="w-5 h-5" /> : <BookmarkIcon className="w-5 h-5" />}
                                    <span>ذخیره</span>
                                </button>

                                <button
                                    onClick={handleShare}
                                    className="flex items-center gap-2 px-6 py-3 bg-white/10 text-white hover:bg-white/20 rounded-xl font-medium transition-all duration-300 backdrop-blur-sm"
                                >
                                    <ShareIcon className="w-5 h-5" />
                                    <span>اشتراک</span>
                                </button>

                                <button
                                    onClick={() => mounted && window.print()}
                                    className="flex items-center gap-2 px-6 py-3 bg-white/10 text-white hover:bg-white/20 rounded-xl font-medium transition-all duration-300 backdrop-blur-sm"
                                >
                                    <PrinterIcon className="w-5 h-5" />
                                    <span>چاپ</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="container mx-auto px-4 py-12">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid lg:grid-cols-4 gap-12">
                            <aside className="lg:col-span-1 order-2 lg:order-1">
                                <div className="sticky top-24 space-y-8">
                                    <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
                                        <div className="flex items-center gap-4 mb-4">
                                            <Image
                                                src={article.author.avatar}
                                                alt={article.author.name}
                                                width={60}
                                                height={60}
                                                className="w-15 h-15 rounded-full object-cover border-2 border-blue-200"
                                            />
                                            <div>
                                                <h3 className="font-bold text-slate-900">{article.author.name}</h3>
                                                <p className="text-slate-600 text-sm">{article.author.role}</p>
                                            </div>
                                        </div>
                                        <p className="text-slate-600 text-sm">{article.author.bio}</p>
                                    </div>

                                    {article.tableOfContents && (
                                        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
                                            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                                <DocumentTextIcon className="w-5 h-5 text-blue-600" />
                                                فهرست مطالب
                                            </h3>
                                            <nav>
                                                <ul className="space-y-2">
                                                    {article.tableOfContents.map((item) => (
                                                        <li key={item.id}>
                                                            <a
                                                                href={`#${item.id}`}
                                                                className={`block py-2 px-3 rounded-lg transition-all duration-200 ${
                                                                    activeSection === item.id
                                                                        ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-500 font-medium'
                                                                        : item.level === 1
                                                                            ? 'text-slate-900 hover:bg-slate-50 font-medium'
                                                                            : 'text-slate-600 hover:bg-slate-50 mr-4'
                                                                }`}
                                                            >
                                                                {item.title}
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </nav>
                                        </div>
                                    )}

                                    <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
                                        <h3 className="font-bold text-slate-900 mb-4">آمار مقاله</h3>
                                        <div className="space-y-4">
                                            <div className="flex items-center justify-between">
                                                <span className="text-slate-600">بازدید</span>
                                                <span className="font-semibold text-slate-900">{views.toLocaleString()}</span>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <span className="text-slate-600">پسندیدن</span>
                                                <span className="font-semibold text-slate-900">{likes.toLocaleString()}</span>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <span className="text-slate-600">زمان مطالعه</span>
                                                <span className="font-semibold text-slate-900">{article.readTime} دقیقه</span>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <span className="text-slate-600">سطح</span>
                                                <span className={`px-2 py-1 rounded text-xs font-medium ${getDifficultyColor(article.difficulty)}`}>
                                                    {article.difficulty}
                                                </span>
                                            </div>
                                            {article.rating && (
                                                <div className="flex items-center justify-between">
                                                    <span className="text-slate-600">امتیاز</span>
                                                    <div className="flex items-center gap-1">
                                                        <span className="font-semibold text-slate-900">{article.rating.average}</span>
                                                        <StarIcon className="w-4 h-4 text-yellow-400 fill-current" />
                                                        <span className="text-slate-500 text-xs">({article.rating.count})</span>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </aside>

                            <article className="lg:col-span-3 order-1 lg:order-2">
                                <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
                                    <div className="aspect-video relative">
                                        <Image
                                            src={article.image.main}
                                            alt={article.image.alt}
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                    </div>

                                    <div className="p-8">
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {article.tags.map((tag) => (
                                                <Link
                                                    key={tag}
                                                    href={`/articles?tag=${tag}`}
                                                    className="inline-flex items-center gap-1 px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm hover:bg-blue-50 hover:text-blue-700 transition-colors"
                                                >
                                                    <TagIcon className="w-3 h-3" />
                                                    <span>{tag}</span>
                                                </Link>
                                            ))}
                                        </div>

                                        <div ref={contentRef} className="prose prose-lg max-w-none">
                                            <div
                                                className="text-slate-700 leading-relaxed"
                                                dangerouslySetInnerHTML={{ __html: article.content }}
                                            />
                                        </div>

                                        {article.faq && article.faq.length > 0 && (
                                            <div className="mt-12 pt-8 border-t border-slate-200">
                                                <h2 className="text-2xl font-bold text-slate-900 mb-6">سوالات متداول</h2>
                                                <div className="space-y-4">
                                                    {article.faq.map((faqItem, index) => (
                                                        <div key={index} className="bg-slate-50 rounded-lg p-6">
                                                            <h3 className="font-bold text-slate-900 mb-2">{faqItem.question}</h3>
                                                            <p className="text-slate-700">{faqItem.answer}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        <div className="mt-12 pt-8 border-t border-slate-200">
                                            <div className="mb-8">
                                                <h3 className="font-bold text-slate-900 mb-4">این مقاله چقدر مفید بود؟</h3>
                                                <div className="flex items-center gap-4">
                                                    <div className="flex gap-1">
                                                        {[1, 2, 3, 4, 5].map((star) => (
                                                            <button
                                                                key={star}
                                                                onClick={() => setUserRating(star)}
                                                                className={`w-8 h-8 rounded transition-colors ${
                                                                    star <= userRating
                                                                        ? 'text-yellow-400 hover:text-yellow-500'
                                                                        : 'text-slate-300 hover:text-yellow-400'
                                                                }`}
                                                            >
                                                                <StarIcon className={star <= userRating ? 'fill-current' : ''} />
                                                            </button>
                                                        ))}
                                                    </div>
                                                    {userRating > 0 && (
                                                        <span className="text-sm text-slate-600">
                                                            {userRating} از ۵ ستاره
                                                        </span>
                                                    )}
                                                </div>
                                            </div>

                                            <div className="mb-8">
                                                <h3 className="font-bold text-slate-900 mb-4">بازخورد شما</h3>
                                                <div className="flex gap-3">
                                                    <button
                                                        onClick={() => setFeedback('helpful')}
                                                        className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                                                            feedback === 'helpful'
                                                                ? 'bg-emerald-100 text-emerald-700 border border-emerald-300'
                                                                : 'bg-slate-100 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700'
                                                        }`}
                                                    >
                                                        <HandThumbUpIcon className="w-4 h-4" />
                                                        <span>مفید بود</span>
                                                    </button>
                                                    <button
                                                        onClick={() => setFeedback('not-helpful')}
                                                        className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                                                            feedback === 'not-helpful'
                                                                ? 'bg-red-100 text-red-700 border border-red-300'
                                                                : 'bg-slate-100 text-slate-700 hover:bg-red-50 hover:text-red-700'
                                                        }`}
                                                    >
                                                        <HandThumbDownIcon className="w-4 h-4" />
                                                        <span>مفید نبود</span>
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="mb-8">
                                                <h3 className="font-bold text-slate-900 mb-4">اشتراک‌گذاری</h3>
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
                                                        className="flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors"
                                                    >
                                                        <LinkIcon className="w-4 h-4" />
                                                        <span>کپی لینک</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-12 bg-white rounded-2xl shadow-lg border border-slate-200">
                                    <div className="p-8">
                                        <div className="flex items-center justify-between mb-8">
                                            <h2 className="text-2xl font-bold text-slate-900">
                                                نظرات (0)
                                            </h2>
                                            <button
                                                onClick={() => setShowCommentForm(!showCommentForm)}
                                                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                                            >
                                                <ChatBubbleLeftIcon className="w-4 h-4" />
                                                <span>نظر جدید</span>
                                            </button>
                                        </div>

                                        {showCommentForm && (
                                            <div className="mb-8 p-6 bg-slate-50 rounded-xl">
                                                <h3 className="font-bold text-slate-900 mb-4">نظر خود را بنویسید</h3>
                                                <textarea
                                                    value={newComment}
                                                    onChange={(e) => setNewComment(e.target.value)}
                                                    placeholder="نظر شما..."
                                                    rows={4}
                                                    className="w-full p-4 border border-slate-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                />
                                                <div className="flex justify-end gap-3 mt-4">
                                                    <button
                                                        onClick={() => setShowCommentForm(false)}
                                                        className="px-4 py-2 text-slate-600 hover:text-slate-800 transition-colors"
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

                                        <div className="text-center py-12 text-slate-500">
                                            <ChatBubbleLeftIcon className="w-16 h-16 mx-auto mb-4 opacity-30" />
                                            <p>هنوز نظری ثبت نشده است.</p>
                                            <p className="text-sm">اولین نفری باشید که نظر می‌دهد!</p>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>

                {relatedArticles.length > 0 && (
                    <section className="py-16 bg-white">
                        <div className="container mx-auto px-4">
                            <div className="max-w-6xl mx-auto">
                                <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
                                    مقالات مرتبط
                                </h2>
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {relatedArticles.map((relatedArticle) => (
                                        <Link
                                            key={relatedArticle.id}
                                            href={`/articles/${relatedArticle.slug}`}
                                            className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden hover:shadow-xl hover:border-blue-200 transition-all duration-300 group"
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
                                                <h3 className="font-bold text-slate-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                                                    {relatedArticle.title}
                                                </h3>
                                                <p className="text-slate-600 text-sm line-clamp-2 mb-4">
                                                    {relatedArticle.excerpt}
                                                </p>
                                                <div className="flex items-center justify-between text-xs text-slate-500">
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
