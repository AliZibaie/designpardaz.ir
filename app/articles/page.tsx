'use client';

import { useState, useEffect, useMemo, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import {
    MagnifyingGlassIcon,
    AdjustmentsHorizontalIcon,
    CalendarDaysIcon,
    ClockIcon,
    EyeIcon,
    HeartIcon,
    ChatBubbleLeftRightIcon,
    UserIcon,
    TagIcon,
    ShieldCheckIcon,
    StarIcon,
    FireIcon,
    TrophyIcon,
    BookOpenIcon,
    DocumentTextIcon,
    FunnelIcon,
    ArrowRightIcon,
    ArrowLeftIcon,
    ChevronRightIcon,
    ChevronLeftIcon,
    ShareIcon,
    BookmarkIcon,
    CheckBadgeIcon,
    SparklesIcon,
    BoltIcon,
    LightBulbIcon,
    RocketLaunchIcon,
    ChartBarIcon,
    HomeIcon
} from '@heroicons/react/24/outline';
import {
    HeartIcon as HeartSolidIcon,
    BookmarkIcon as BookmarkSolidIcon,
    StarIcon as StarSolidIcon
} from '@heroicons/react/24/solid';

import {
    articles,
    articleCategories,
    getArticles,
    getFeaturedArticles,
    getTrendingArticles,
    type Article
} from '@/lib/data/articles';

interface ArticlesPageProps {
    searchParams?: {
        category?: string;
        tag?: string;
        search?: string;
        page?: string;
        sort?: 'latest' | 'popular' | 'trending';
    };
}

export default function ArticlesPage({ searchParams }: ArticlesPageProps) {
    const router = useRouter();
    const currentSearchParams = useSearchParams();

    // State Management
    const [searchQuery, setSearchQuery] = useState(searchParams?.search || '');
    const [selectedCategory, setSelectedCategory] = useState(searchParams?.category || '');
    const [selectedSort, setSelectedSort] = useState<'latest' | 'popular' | 'trending'>(
        searchParams?.sort as any || 'latest'
    );
    const [currentPage, setCurrentPage] = useState(Number(searchParams?.page) || 1);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [likedArticles, setLikedArticles] = useState<Set<string>>(new Set());
    const [bookmarkedArticles, setBookmarkedArticles] = useState<Set<string>>(new Set());
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

    // Data fetching
    const articlesData = useMemo(() => {
        return getArticles({
            category: selectedCategory,
            search: searchQuery,
            page: currentPage,
            limit: 12,
            sort: selectedSort
        });
    }, [selectedCategory, searchQuery, currentPage, selectedSort]);

    const featuredArticles = useMemo(() => getFeaturedArticles(), []);
    const trendingArticles = useMemo(() => getTrendingArticles(), []);

    // URL management
    const updateURL = useCallback((params: Record<string, string | undefined>) => {
        const url = new URLSearchParams(currentSearchParams.toString());

        Object.entries(params).forEach(([key, value]) => {
            if (value) {
                url.set(key, value);
            } else {
                url.delete(key);
            }
        });

        router.push(`/articles?${url.toString()}`);
    }, [currentSearchParams, router]);

    // Handlers
    const handleSearch = (query: string) => {
        setSearchQuery(query);
        setCurrentPage(1);
        updateURL({ search: query || undefined, page: undefined });
    };

    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category);
        setCurrentPage(1);
        updateURL({ category: category || undefined, page: undefined });
    };

    const handleSortChange = (sort: 'latest' | 'popular' | 'trending') => {
        setSelectedSort(sort);
        setCurrentPage(1);
        updateURL({ sort, page: undefined });
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        updateURL({ page: page.toString() });
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const toggleLike = (articleId: string) => {
        setLikedArticles(prev => {
            const newSet = new Set(prev);
            if (newSet.has(articleId)) {
                newSet.delete(articleId);
            } else {
                newSet.add(articleId);
            }
            return newSet;
        });
    };

    const toggleBookmark = (articleId: string) => {
        setBookmarkedArticles(prev => {
            const newSet = new Set(prev);
            if (newSet.has(articleId)) {
                newSet.delete(articleId);
            } else {
                newSet.add(articleId);
            }
            return newSet;
        });
    };

    // Get difficulty color
    const getDifficultyColor = (difficulty: string) => {
        switch (difficulty) {
            case 'مبتدی': return 'text-green-600 bg-green-50 border-green-200';
            case 'متوسط': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
            case 'پیشرفته': return 'text-red-600 bg-red-50 border-red-200';
            default: return 'text-gray-600 bg-gray-50 border-gray-200';
        }
    };

    return (
        <>
            {/* SEO Meta Tags */}
            <head>
                <title>مقالات آموزشی طراحی وب و سئو | دیزاین پرداز</title>
                <meta
                    name="description"
                    content="بهترین مقالات آموزشی طراحی وب، سئو، UI/UX، برنامه‌نویسی و بازاریابی دیجیتال. محتوای تخصصی و به‌روز برای توسعه‌دهندگان و طراحان."
                />
                <meta
                    name="keywords"
                    content="مقالات طراحی وب, آموزش سئو, UI/UX, برنامه‌نویسی, React, JavaScript, بازاریابی دیجیتال, فروشگاه اینترنتی"
                />
                <link rel="canonical" href="https://designpardaz.ir/articles" />

                {/* Open Graph */}
                <meta property="og:title" content="مقالات آموزشی طراحی وب و سئو | دیزاین پرداز" />
                <meta property="og:description" content="بهترین مقالات آموزشی طراحی وب، سئو و برنامه‌نویسی" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://designpardaz.ir/articles" />
                <meta property="og:image" content="https://designpardaz.ir/og-articles.jpg" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="مقالات آموزشی دیزاین پرداز" />
                <meta name="twitter:description" content="محتوای تخصصی طراحی وب، سئو و توسعه" />

                {/* Structured Data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Blog",
                        "name": "وبلاگ دیزاین پرداز",
                        "description": "مقالات آموزشی طراحی وب، سئو و برنامه‌نویسی",
                        "url": "https://designpardaz.ir/articles",
                        "author": {
                            "@type": "Organization",
                            "name": "دیزاین پرداز"
                        },
                        "publisher": {
                            "@type": "Organization",
                            "name": "دیزاین پرداز",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://designpardaz.ir/logo.png"
                            }
                        }
                    })}
                </script>
            </head>

            <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">

                {/* Breadcrumb */}
                <nav className="bg-white border-b border-gray-200 py-4">
                    <div className="container mx-auto px-4">
                        <div className="flex items-center gap-2 text-sm">
                            <Link href="/" className="flex items-center gap-1 text-gray-500 hover:text-blue-600 transition-colors">
                                <HomeIcon className="w-4 h-4" />
                                <span>خانه</span>
                            </Link>
                            <ChevronLeftIcon className="w-4 h-4 text-gray-400" />
                            <span className="font-medium text-gray-900">مقالات</span>
                            {selectedCategory && (
                                <>
                                    <ChevronLeftIcon className="w-4 h-4 text-gray-400" />
                                    <span className="text-blue-600">
                                        {articleCategories.find(cat => cat.slug === selectedCategory)?.name}
                                    </span>
                                </>
                            )}
                        </div>
                    </div>
                </nav>

                {/* Hero Section */}
                <section className="py-16 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">

                    {/* Background Animation */}
                    <div className="absolute inset-0">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-gradient-x"></div>
                        {[...Array(30)].map((_, i) => (
                            <div
                                key={i}
                                className="absolute animate-float"
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                    animationDelay: `${Math.random() * 3}s`,
                                    animationDuration: `${3 + Math.random() * 4}s`
                                }}
                            >
                                <div className="w-2 h-2 bg-white/20 rounded-full blur-sm"></div>
                            </div>
                        ))}
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-4xl mx-auto text-center">

                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium mb-8">
                                <BookOpenIcon className="w-5 h-5" />
                                <span>مرکز آموزش</span>
                            </div>

                            {/* Main Headline */}
                            <h1 className="text-4xl lg:text-6xl font-black leading-tight mb-8">
                                مقالات
                                <span className="text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text"> آموزشی </span>
                                حرفه‌ای
                            </h1>

                            <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-3xl mx-auto">
                                بهترین محتوای آموزشی
                                <strong className="text-blue-400"> طراحی وب</strong>،
                                <strong className="text-purple-400"> سئو</strong>،
                                <strong className="text-pink-400"> برنامه‌نویسی </strong>
                                و بازاریابی دیجیتال
                            </p>

                            {/* Stats */}
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                                {[
                                    { label: 'مقاله منتشر شده', value: articles.length.toString(), icon: DocumentTextIcon },
                                    { label: 'دسته‌بندی', value: articleCategories.length.toString(), icon: TagIcon },
                                    { label: 'نویسنده متخصص', value: '12', icon: UserIcon },
                                    { label: 'ساعت محتوا', value: '400+', icon: ClockIcon }
                                ].map((stat, index) => (
                                    <div key={index} className="text-center">
                                        <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                                            <stat.icon className="w-6 h-6 text-white" />
                                        </div>
                                        <div className="text-2xl lg:text-3xl font-black text-white mb-2">{stat.value}</div>
                                        <div className="text-sm text-gray-400">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Search & Filter Bar */}
                <section className="py-8 bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">

                            {/* Search Box */}
                            <div className="relative flex-1 max-w-2xl">
                                <MagnifyingGlassIcon className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => handleSearch(e.target.value)}
                                    placeholder="جستجو در مقالات..."
                                    className="w-full pr-12 pl-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-lg"
                                />
                            </div>

                            {/* Filters */}
                            <div className="flex items-center gap-4">

                                {/* Category Filter */}
                                <select
                                    value={selectedCategory}
                                    onChange={(e) => handleCategoryChange(e.target.value)}
                                    className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                >
                                    <option value="">همه دسته‌ها</option>
                                    {articleCategories.map(cat => (
                                        <option key={cat.id} value={cat.slug}>
                                            {cat.name} ({cat.count})
                                        </option>
                                    ))}
                                </select>

                                {/* Sort Options */}
                                <select
                                    value={selectedSort}
                                    onChange={(e) => handleSortChange(e.target.value as any)}
                                    className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                >
                                    <option value="latest">جدیدترین</option>
                                    <option value="popular">محبوب‌ترین</option>
                                    <option value="trending">پرطرفدار</option>
                                </select>

                                {/* View Mode Toggle */}
                                <div className="flex bg-gray-100 rounded-xl p-1">
                                    <button
                                        onClick={() => setViewMode('grid')}
                                        className={`p-2 rounded-lg transition-all duration-300 ${
                                            viewMode === 'grid'
                                                ? 'bg-white shadow-sm text-blue-600'
                                                : 'text-gray-600 hover:text-gray-900'
                                        }`}
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm2 2v8h10V6H5z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                    <button
                                        onClick={() => setViewMode('list')}
                                        className={`p-2 rounded-lg transition-all duration-300 ${
                                            viewMode === 'list'
                                                ? 'bg-white shadow-sm text-blue-600'
                                                : 'text-gray-600 hover:text-gray-900'
                                        }`}
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M3 4a1 1 0 000 2h14a1 1 0 100-2H3zm0 4a1 1 0 000 2h14a1 1 0 100-2H3zm0 4a1 1 0 000 2h14a1 1 0 100-2H3z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Categories Quick Access */}
                <section className="py-8 bg-gradient-to-r from-blue-50 to-purple-50">
                    <div className="container mx-auto px-4">
                        <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
                            <button
                                onClick={() => handleCategoryChange('')}
                                className={`flex items-center gap-2 px-6 py-3 rounded-full whitespace-nowrap transition-all duration-300 ${
                                    !selectedCategory
                                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                                        : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                                }`}
                            >
                                <ChartBarIcon className="w-4 h-4" />
                                <span className="font-medium">همه مقالات</span>
                                <span className="text-xs opacity-75">({articles.length})</span>
                            </button>

                            {articleCategories.map(category => (
                                <button
                                    key={category.id}
                                    onClick={() => handleCategoryChange(category.slug)}
                                    className={`flex items-center gap-2 px-6 py-3 rounded-full whitespace-nowrap transition-all duration-300 ${
                                        selectedCategory === category.slug
                                            ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                                            : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                                    }`}
                                >
                                    <category.icon className="w-4 h-4" />
                                    <span className="font-medium">{category.name}</span>
                                    <span className="text-xs opacity-75">({category.count})</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Featured Articles */}
                {!searchQuery && !selectedCategory && featuredArticles.length > 0 && (
                    <section className="py-16 bg-white">
                        <div className="container mx-auto px-4">

                            {/* Section Header */}
                            <div className="flex items-center justify-between mb-12">
                                <div>
                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center">
                                            <StarIcon className="w-5 h-5 text-white" />
                                        </div>
                                        <h2 className="text-3xl lg:text-4xl font-black text-gray-900">
                                            مقالات
                                            <span className="text-transparent bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text"> ویژه</span>
                                        </h2>
                                    </div>
                                    <p className="text-gray-600">بهترین و محبوب‌ترین مقالات انتخاب شده توسط تیم ما</p>
                                </div>

                                <div className="hidden lg:flex items-center gap-2">
                                    <SparklesIcon className="w-5 h-5 text-yellow-500" />
                                    <span className="text-sm text-gray-500">انتخاب ویژه ادیتور</span>
                                </div>
                            </div>

                            {/* Featured Articles Grid */}
                            <div className="grid lg:grid-cols-3 gap-8">
                                {featuredArticles.slice(0, 3).map((article, index) => (
                                    <article
                                        key={article.id}
                                        className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2"
                                    >
                                        {/* Article Image */}
                                        <div className="relative overflow-hidden">
                                            <Image
                                                src={article.image.main}
                                                alt={article.image.alt}
                                                width={400}
                                                height={250}
                                                className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                                            />

                                            {/* Overlay Badges */}
                                            <div className="absolute top-4 right-4 flex gap-2">
                                                <div className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold rounded-full flex items-center gap-1">
                                                    <StarIcon className="w-3 h-3" />
                                                    <span>ویژه</span>
                                                </div>
                                                {article.trending && (
                                                    <div className="px-3 py-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold rounded-full flex items-center gap-1">
                                                        <FireIcon className="w-3 h-3" />
                                                        <span>ترند</span>
                                                    </div>
                                                )}
                                            </div>

                                            {/* Category */}
                                            <div className="absolute bottom-4 right-4">
                                                <div className={`px-3 py-1 bg-gradient-to-r ${article.category.color} text-white text-xs font-medium rounded-full flex items-center gap-1`}>
                                                    <article.category.icon className="w-3 h-3" />
                                                    <span>{article.category.name}</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Article Content */}
                                        <div className="p-8">

                                            {/* Article Meta */}
                                            <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                                                <div className="flex items-center gap-1">
                                                    <CalendarDaysIcon className="w-4 h-4" />
                                                    <span>{article.publishedAt}</span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <ClockIcon className="w-4 h-4" />
                                                    <span>{article.readTime} دقیقه</span>
                                                </div>
                                                <div className={`px-2 py-1 rounded-full text-xs border ${getDifficultyColor(article.difficulty)}`}>
                                                    {article.difficulty}
                                                </div>
                                            </div>

                                            {/* Title */}
                                            <Link href={`/articles/${article.slug}`}>
                                                <h3 className="text-xl font-bold text-gray-900 mb-4 line-clamp-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                                                    {article.title}
                                                </h3>
                                            </Link>

                                            {/* Excerpt */}
                                            <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                                                {article.excerpt}
                                            </p>

                                            {/* Author & Stats */}
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-3">
                                                    <Image
                                                        src={article.author.avatar}
                                                        alt={article.author.name}
                                                        width={40}
                                                        height={40}
                                                        className="w-10 h-10 rounded-full object-cover"
                                                    />
                                                    <div>
                                                        <div className="font-medium text-gray-900 text-sm">{article.author.name}</div>
                                                        <div className="text-xs text-gray-500">نویسنده</div>
                                                    </div>
                                                </div>

                                                <div className="flex items-center gap-4 text-sm text-gray-500">
                                                    <div className="flex items-center gap-1">
                                                        <EyeIcon className="w-4 h-4" />
                                                        <span>{article.views.toLocaleString()}</span>
                                                    </div>
                                                    <button
                                                        onClick={() => toggleLike(article.id)}
                                                        className="flex items-center gap-1 hover:text-red-500 transition-colors"
                                                    >
                                                        {likedArticles.has(article.id) ? (
                                                            <HeartSolidIcon className="w-4 h-4 text-red-500" />
                                                        ) : (
                                                            <HeartIcon className="w-4 h-4" />
                                                        )}
                                                        <span>{article.likes}</span>
                                                    </button>
                                                </div>
                                            </div>

                                            {/* Tags */}
                                            <div className="flex flex-wrap gap-2 mt-6">
                                                {article.tags.slice(0, 3).map((tag, tagIndex) => (
                                                    <button
                                                        key={tagIndex}
                                                        className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full hover:bg-blue-100 hover:text-blue-600 transition-colors"
                                                    >
                                                        #{tag}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* Main Articles Grid */}
                <section className="py-16">
                    <div className="container mx-auto px-4">

                        {/* Results Header */}
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                                    {searchQuery ? `نتایج جستجو برای "${searchQuery}"` :
                                        selectedCategory ? `مقالات ${articleCategories.find(cat => cat.slug === selectedCategory)?.name}` :
                                            'همه مقالات'}
                                </h2>
                                <p className="text-gray-600">
                                    {articlesData.total} مقاله یافت شد
                                    {currentPage > 1 && ` - صفحه ${currentPage}`}
                                </p>
                            </div>

                            {/* Active Filters */}
                            {(searchQuery || selectedCategory) && (
                                <div className="flex items-center gap-2">
                                    <span className="text-sm text-gray-500">فیلترهای فعال:</span>
                                    {searchQuery && (
                                        <button
                                            onClick={() => handleSearch('')}
                                            className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full flex items-center gap-1 hover:bg-blue-200 transition-colors"
                                        >
                                            <span>{searchQuery}</span>
                                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                    )}
                                    {selectedCategory && (
                                        <button
                                            onClick={() => handleCategoryChange('')}
                                            className="px-3 py-1 bg-purple-100 text-purple-600 text-sm rounded-full flex items-center gap-1 hover:bg-purple-200 transition-colors"
                                        >
                                            <span>{articleCategories.find(cat => cat.slug === selectedCategory)?.name}</span>
                                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                    )}
                                </div>
                            )}
                        </div>

                        {/* Articles Grid/List */}
                        {articlesData.articles.length > 0 ? (
                            <div className={`${
                                viewMode === 'grid'
                                    ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-8'
                                    : 'space-y-8'
                            }`}>
                                {articlesData.articles.map((article) => (
                                    <ArticleCard
                                        key={article.id}
                                        article={article}
                                        viewMode={viewMode}
                                        likedArticles={likedArticles}
                                        bookmarkedArticles={bookmarkedArticles}
                                        onToggleLike={toggleLike}
                                        onToggleBookmark={toggleBookmark}
                                        getDifficultyColor={getDifficultyColor}
                                    />
                                ))}
                            </div>
                        ) : (
                            // Empty State
                            <div className="text-center py-16">
                                <div className="w-24 h-24 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-6">
                                    <MagnifyingGlassIcon className="w-12 h-12 text-gray-400" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">مقاله‌ای یافت نشد</h3>
                                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                                    متأسفانه مقاله‌ای با این جستجو پیدا نشد. لطفاً کلمات کلیدی دیگری امتحان کنید.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <button
                                        onClick={() => {
                                            handleSearch('');
                                            handleCategoryChange('');
                                        }}
                                        className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                                    >
                                        مشاهده همه مقالات
                                    </button>
                                    <Link
                                        href="/contact"
                                        className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-xl hover:bg-gray-50 transition-colors"
                                    >
                                        درخواست موضوع جدید
                                    </Link>
                                </div>
                            </div>
                        )}

                        {/* Pagination */}
                        {articlesData.totalPages > 1 && (
                            <div className="mt-16">
                                <Pagination
                                    currentPage={currentPage}
                                    totalPages={articlesData.totalPages}
                                    hasNext={articlesData.hasNext}
                                    hasPrev={articlesData.hasPrev}
                                    onPageChange={handlePageChange}
                                />
                            </div>
                        )}
                    </div>
                </section>

                {/* Newsletter Signup */}
                <section className="py-16 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="w-16 h-16 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-8">
                                <RocketLaunchIcon className="w-8 h-8 text-white" />
                            </div>

                            <h2 className="text-3xl lg:text-4xl font-black mb-6">
                                از جدیدترین مقالات
                                <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text"> باخبر شوید</span>
                            </h2>

                            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                                هر هفته بهترین مقالات آموزشی را مستقیماً در ایمیل خود دریافت کنید
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-8">
                                <input
                                    type="email"
                                    placeholder="ایمیل شما..."
                                    className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                />
                                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
                                    عضویت رایگان
                                </button>
                            </div>

                            <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
                                <div className="flex items-center gap-1">
                                    <CheckBadgeIcon className="w-4 h-4 text-green-400" />
                                    <span>رایگان و بدون اسپم</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <ShieldCheckIcon className="w-4 h-4 text-blue-400" />
                                    <span>لغو آسان</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* Custom Styles */}
            <style jsx>{`
                @keyframes gradient-x {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
                
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    33% { transform: translateY(-10px) rotate(5deg); }
                    66% { transform: translateY(5px) rotate(-5deg); }
                }
                
                .animate-gradient-x {
                    background-size: 400% 400%;
                    animation: gradient-x 15s ease infinite;
                }
                
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
                
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                
                .line-clamp-2 {
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
                
                .line-clamp-3 {
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
            `}</style>
        </>
    );
}

// Article Card Component
interface ArticleCardProps {
    article: Article;
    viewMode: 'grid' | 'list';
    likedArticles: Set<string>;
    bookmarkedArticles: Set<string>;
    onToggleLike: (id: string) => void;
    onToggleBookmark: (id: string) => void;
    getDifficultyColor: (difficulty: string) => string;
}

function ArticleCard({
                         article,
                         viewMode,
                         likedArticles,
                         bookmarkedArticles,
                         onToggleLike,
                         onToggleBookmark,
                         getDifficultyColor
                     }: ArticleCardProps) {
    if (viewMode === 'list') {
        return (
            <article className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200">
                <div className="flex flex-col lg:flex-row">
                    {/* Image */}
                    <div className="lg:w-80 h-48 lg:h-auto relative overflow-hidden">
                        <Image
                            src={article.image.main}
                            alt={article.image.alt}
                            width={320}
                            height={200}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />

                        {/* Badges */}
                        <div className="absolute top-4 right-4 flex gap-2">
                            {article.featured && (
                                <div className="px-2 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold rounded-full">
                                    ویژه
                                </div>
                            )}
                            {article.trending && (
                                <div className="px-2 py-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold rounded-full">
                                    ترند
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-6 lg:p-8">
                        {/* Meta */}
                        <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                            <div className={`px-2 py-1 bg-gradient-to-r ${article.category.color} text-white text-xs font-medium rounded-full flex items-center gap-1`}>
                                <article.category.icon className="w-3 h-3" />
                                <span>{article.category.name}</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <CalendarDaysIcon className="w-4 h-4" />
                                <span>{article.publishedAt}</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <ClockIcon className="w-4 h-4" />
                                <span>{article.readTime} دقیقه</span>
                            </div>
                            <div className={`px-2 py-1 rounded-full text-xs border ${getDifficultyColor(article.difficulty)}`}>
                                {article.difficulty}
                            </div>
                        </div>

                        {/* Title */}
                        <Link href={`/articles/${article.slug}`}>
                            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                                {article.title}
                            </h3>
                        </Link>

                        {/* Excerpt */}
                        <p className="text-gray-600 mb-6 line-clamp-2 leading-relaxed">
                            {article.excerpt}
                        </p>

                        {/* Author & Actions */}
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <Image
                                    src={article.author.avatar}
                                    alt={article.author.name}
                                    width={40}
                                    height={40}
                                    className="w-10 h-10 rounded-full object-cover"
                                />
                                <div>
                                    <div className="font-medium text-gray-900 text-sm">{article.author.name}</div>
                                    <div className="text-xs text-gray-500">نویسنده</div>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-4 text-sm text-gray-500">
                                    <div className="flex items-center gap-1">
                                        <EyeIcon className="w-4 h-4" />
                                        <span>{article.views.toLocaleString()}</span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => onToggleLike(article.id)}
                                        className="p-2 hover:bg-red-50 rounded-lg transition-colors group/btn"
                                    >
                                        {likedArticles.has(article.id) ? (
                                            <HeartSolidIcon className="w-5 h-5 text-red-500" />
                                        ) : (
                                            <HeartIcon className="w-5 h-5 text-gray-400 group-hover/btn:text-red-500" />
                                        )}
                                    </button>

                                    <button
                                        onClick={() => onToggleBookmark(article.id)}
                                        className="p-2 hover:bg-blue-50 rounded-lg transition-colors group/btn"
                                    >
                                        {bookmarkedArticles.has(article.id) ? (
                                            <BookmarkSolidIcon className="w-5 h-5 text-blue-500" />
                                        ) : (
                                            <BookmarkIcon className="w-5 h-5 text-gray-400 group-hover/btn:text-blue-500" />
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        );
    }

    // Grid View
    return (
        <article className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-blue-200 transform hover:-translate-y-1">
            {/* Image */}
            <div className="relative overflow-hidden h-48">
                <Image
                    src={article.image.main}
                    alt={article.image.alt}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Badges */}
                <div className="absolute top-4 right-4 flex gap-2">
                    {article.featured && (
                        <div className="px-2 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold rounded-full flex items-center gap-1">
                            <StarIcon className="w-3 h-3" />
                            <span>ویژه</span>
                        </div>
                    )}
                    {article.trending && (
                        <div className="px-2 py-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold rounded-full flex items-center gap-1">
                            <FireIcon className="w-3 h-3" />
                            <span>ترند</span>
                        </div>
                    )}
                </div>

                {/* Actions */}
                <div className="absolute top-4 left-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <button
                        onClick={() => onToggleLike(article.id)}
                        className="p-2 bg-black/20 backdrop-blur-sm rounded-full hover:bg-red-500 transition-colors"
                    >
                        <HeartIcon className="w-4 h-4 text-white" />
                    </button>
                    <button
                        onClick={() => onToggleBookmark(article.id)}
                        className="p-2 bg-black/20 backdrop-blur-sm rounded-full hover:bg-blue-500 transition-colors"
                    >
                        <BookmarkIcon className="w-4 h-4 text-white" />
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                {/* Meta */}
                <div className="flex items-center gap-3 mb-4 text-sm text-gray-500">
                    <div className={`px-2 py-1 bg-gradient-to-r ${article.category.color} text-white text-xs font-medium rounded-full flex items-center gap-1`}>
                        <article.category.icon className="w-3 h-3" />
                        <span>{article.category.name}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <ClockIcon className="w-3 h-3" />
                        <span>{article.readTime}د</span>
                    </div>
                    <div className={`px-2 py-1 rounded-full text-xs border ${getDifficultyColor(article.difficulty)}`}>
                        {article.difficulty}
                    </div>
                </div>

                {/* Title */}
                <Link href={`/articles/${article.slug}`}>
                    <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                        {article.title}
                    </h3>
                </Link>

                {/* Excerpt */}
                <p className="text-gray-600 mb-4 line-clamp-3 text-sm leading-relaxed">
                    {article.excerpt}
                </p>

                {/* Stats */}
                <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                            <EyeIcon className="w-4 h-4" />
                            <span>{article.views.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <HeartIcon className="w-4 h-4" />
                            <span>{article.likes}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <ChatBubbleLeftRightIcon className="w-4 h-4" />
                            <span>{article.comments}</span>
                        </div>
                    </div>
                    <div className="text-xs text-gray-400">
                        {article.publishedAt}
                    </div>
                </div>

                {/* Author */}
                <div className="flex items-center gap-3">
                    <Image
                        src={article.author.avatar}
                        alt={article.author.name}
                        width={32}
                        height={32}
                        className="w-8 h-8 rounded-full object-cover"
                    />
                    <div>
                        <div className="font-medium text-gray-900 text-sm">{article.author.name}</div>
                        <div className="text-xs text-gray-500">نویسنده</div>
                    </div>
                </div>
            </div>
        </article>
    );
}

// Pagination Component
interface PaginationProps {
    currentPage: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
    onPageChange: (page: number) => void;
}

function Pagination({ currentPage, totalPages, hasNext, hasPrev, onPageChange }: PaginationProps) {
    const getVisiblePages = () => {
        const pages = [];
        const start = Math.max(1, currentPage - 2);
        const end = Math.min(totalPages, currentPage + 2);

        for (let i = start; i <= end; i++) {
            pages.push(i);
        }

        return pages;
    };

    return (
        <nav className="flex items-center justify-center gap-2" aria-label="Pagination">

            {/* Previous */}
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={!hasPrev}
                className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 ${
                    hasPrev
                        ? 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 hover:border-gray-400'
                        : 'text-gray-400 bg-gray-100 cursor-not-allowed'
                }`}
            >
                <ArrowRightIcon className="w-4 h-4" />
                <span>قبلی</span>
            </button>

            {/* Page Numbers */}
            <div className="flex items-center gap-1">
                {currentPage > 3 && (
                    <>
                        <button
                            onClick={() => onPageChange(1)}
                            className="w-10 h-10 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition-all duration-300"
                        >
                            1
                        </button>
                        {currentPage > 4 && (
                            <span className="px-2 text-gray-400">...</span>
                        )}
                    </>
                )}

                {getVisiblePages().map(page => (
                    <button
                        key={page}
                        onClick={() => onPageChange(page)}
                        className={`w-10 h-10 text-sm font-medium rounded-xl transition-all duration-300 ${
                            page === currentPage
                                ? 'text-white bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg'
                                : 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50'
                        }`}
                    >
                        {page}
                    </button>
                ))}

                {currentPage < totalPages - 2 && (
                    <>
                        {currentPage < totalPages - 3 && (
                            <span className="px-2 text-gray-400">...</span>
                        )}
                        <button
                            onClick={() => onPageChange(totalPages)}
                            className="w-10 h-10 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition-all duration-300"
                        >
                            {totalPages}
                        </button>
                    </>
                )}
            </div>

            {/* Next */}
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={!hasNext}
                className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 ${
                    hasNext
                        ? 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 hover:border-gray-400'
                        : 'text-gray-400 bg-gray-100 cursor-not-allowed'
                }`}
            >
                <span>بعدی</span>
                <ArrowLeftIcon className="w-4 h-4" />
            </button>
        </nav>
    );
}
