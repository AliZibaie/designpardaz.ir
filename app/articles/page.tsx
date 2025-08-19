'use client';

import React, { useState, useEffect, useMemo, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import {
    MagnifyingGlassIcon,
    CalendarDaysIcon,
    ClockIcon,
    EyeIcon,
    HeartIcon,
    ArrowRightIcon,
    ChevronDownIcon,
    XMarkIcon,
    StarIcon,
    FireIcon,
    BookOpenIcon,
    SparklesIcon,
    HomeIcon,
    ChevronLeftIcon,
    DocumentTextIcon,
    UserGroupIcon,
    CheckBadgeIcon
} from '@heroicons/react/24/outline';
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid';

import { articles, categories, getFilteredArticles} from '@/lib/data/articles';

function ArticlesContent() {
    const searchParams = useSearchParams();
    const router = useRouter();

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [sortBy, setSortBy] = useState('newest');
    const [currentPage, setCurrentPage] = useState(1);

    const articlesPerPage = 6;

    useEffect(() => {
        const category = searchParams.get('category') || 'all';
        const search = searchParams.get('search') || '';
        const page = parseInt(searchParams.get('page') || '1');

        setSelectedCategory(category);
        setSearchTerm(search);
        setCurrentPage(page);
    }, [searchParams]);

    const filteredAndSortedArticles = useMemo(() => {
        const filtered = getFilteredArticles({
            category: selectedCategory === 'all' ? undefined : selectedCategory,
            search: searchTerm
        });

        switch (sortBy) {
            case 'newest':
                filtered.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
                break;
            case 'oldest':
                filtered.sort((a, b) => new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime());
                break;
            case 'popular':
                filtered.sort((a, b) => b.views - a.views);
                break;
            case 'likes':
                filtered.sort((a, b) => b.likes - a.likes);
                break;
            case 'readTime':
                filtered.sort((a, b) => a.readTime - b.readTime);
                break;
        }

        return filtered;
    }, [selectedCategory, searchTerm, sortBy]);

    const totalPages = Math.ceil(filteredAndSortedArticles.length / articlesPerPage);
    const currentArticles = filteredAndSortedArticles.slice(
        (currentPage - 1) * articlesPerPage,
        currentPage * articlesPerPage
    );

    const updateURL = (updates: { category?: string; search?: string; page?: number }) => {
        const params = new URLSearchParams(searchParams.toString());

        if (updates.category !== undefined) {
            if (updates.category === 'all') {
                params.delete('category');
            } else {
                params.set('category', updates.category);
            }
        }

        if (updates.search !== undefined) {
            if (updates.search === '') {
                params.delete('search');
            } else {
                params.set('search', updates.search);
            }
        }

        if (updates.page !== undefined) {
            if (updates.page === 1) {
                params.delete('page');
            } else {
                params.set('page', updates.page.toString());
            }
        }

        const newURL = params.toString() ? `?${params.toString()}` : '/articles';
        router.push(newURL);
    };

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        updateURL({ search: searchTerm, page: 1 });
    };

    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category);
        updateURL({ category, page: 1 });
    };

    const handleSortChange = (sort: string) => {
        setSortBy(sort);
        setCurrentPage(1);
    };

    const clearFilters = () => {
        setSearchTerm('');
        setSelectedCategory('all');
        setSortBy('newest');
        setCurrentPage(1);
        router.push('/articles');
    };

    const getDifficultyColor = (difficulty: string) => {
        switch (difficulty) {
            case 'مبتدی': return 'text-emerald-600 bg-emerald-50 border-emerald-200';
            case 'متوسط': return 'text-amber-600 bg-amber-50 border-amber-200';
            case 'پیشرفته': return 'text-rose-600 bg-rose-50 border-rose-200';
            default: return 'text-slate-600 bg-slate-50 border-slate-200';
        }
    };

    const totalViews = articles.reduce((sum, article) => sum + article.views, 0);
    const totalLikes = articles.reduce((sum, article) => sum + article.likes, 0);

    return (
        <>
            <Head>
                <title>{selectedCategory !== 'all'
                    ? `مقالات ${categories.find(c => c.slug === selectedCategory)?.name} | دیزاین پرداز`
                    : 'مقالات آموزشی طراحی وب، سئو و گرافیک | دیزاین پرداز'
                }</title>
                <meta
                    name="description"
                    content={selectedCategory !== 'all'
                        ? `آموزش‌های تخصصی ${categories.find(c => c.slug === selectedCategory)?.name} - مقالات کاربردی و به‌روز دیزاین پرداز`
                        : 'مجموعه کامل مقالات آموزشی طراحی وب‌سایت، سئو، طراحی گرافیک و برندینگ. آموزش‌های رایگان و حرفه‌ای از تیم متخصص دیزاین پرداز.'
                    }
                />
                <meta
                    name="keywords"
                    content="مقالات طراحی وب، آموزش سئو، طراحی گرافیک، برندینگ، آموزش طراحی سایت، UI/UX، React، JavaScript، Next.js، مقالات دیزاین پرداز"
                />
                <link rel="canonical" href={`https://designpardaz.ir/articles${selectedCategory !== 'all' ? `?category=${selectedCategory}` : ''}`} />

                <meta property="og:title" content="مقالات آموزشی طراحی وب و گرافیک | دیزاین پرداز" />
                <meta property="og:description" content="مجموعه کامل مقالات آموزشی طراحی وب‌سایت، سئو، طراحی گرافیک و برندینگ" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://designpardaz.ir/articles" />
                <meta property="og:image" content="https://designpardaz.ir/images/og-articles.jpg" />
                <meta property="og:locale" content="fa_IR" />
                <meta property="og:site_name" content="دیزاین پرداز" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="مقالات آموزشی طراحی وب | دیزاین پرداز" />
                <meta name="twitter:description" content="آموزش‌های رایگان طراحی وب، سئو و گرافیک" />
                <meta name="twitter:image" content="https://designpardaz.ir/images/twitter-articles.jpg" />

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "CollectionPage",
                            "name": "مقالات آموزشی دیزاین پرداز",
                            "description": "مجموعه کامل مقالات آموزشی طراحی وب، سئو و گرافیک",
                            "url": "https://designpardaz.ir/articles",
                            "publisher": {
                                "@type": "Organization",
                                "name": "دیزاین پرداز",
                                "url": "https://designpardaz.ir",
                                "logo": {
                                    "@type": "ImageObject",
                                    "url": "https://designpardaz.ir/logo.png",
                                    "width": 200,
                                    "height": 60
                                },
                                "sameAs": [
                                    "https://instagram.com/designpardaz",
                                    "https://t.me/designpardaz"
                                ]
                            },
                            "mainEntity": {
                                "@type": "ItemList",
                                "numberOfItems": filteredAndSortedArticles.length,
                                "itemListElement": filteredAndSortedArticles.slice(0, 12).map((article, index) => ({
                                    "@type": "Article",
                                    "position": index + 1,
                                    "headline": article.title,
                                    "description": article.excerpt,
                                    "url": `https://designpardaz.ir/articles/${article.slug}`,
                                    "datePublished": article.publishedAt,
                                    "dateModified": article.updatedAt || article.publishedAt,
                                    "author": {
                                        "@type": "Person",
                                        "name": article.author.name,
                                        "image": article.author.avatar
                                    },
                                    "image": {
                                        "@type": "ImageObject",
                                        "url": article.image.main,
                                        "alt": article.image.alt
                                    },
                                    "publisher": {
                                        "@type": "Organization",
                                        "name": "دیزاین پرداز"
                                    },
                                    "articleSection": article.category.name,
                                    "keywords": article.tags.join(', '),
                                    "wordCount": article.readTime * 200,
                                    "timeRequired": `PT${article.readTime}M`
                                }))
                            },
                            "breadcrumb": {
                                "@type": "BreadcrumbList",
                                "itemListElement": [
                                    {
                                        "@type": "ListItem",
                                        "position": 1,
                                        "name": "خانه",
                                        "item": "https://designpardaz.ir"
                                    },
                                    {
                                        "@type": "ListItem",
                                        "position": 2,
                                        "name": "مقالات",
                                        "item": "https://designpardaz.ir/articles"
                                    }
                                ]
                            }
                        })
                    }}
                />
            </Head>

            <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
                {/* Breadcrumb Navigation */}
                {/*<nav className="bg-white border-b border-gray-200 py-4">*/}
                {/*    <div className="container mx-auto px-4">*/}
                {/*        <div className="flex items-center gap-2 text-sm">*/}
                {/*            <Link href="/" className="flex items-center gap-1 text-gray-500 hover:text-cyan-600 transition-colors">*/}
                {/*                <HomeIcon className="w-4 h-4" />*/}
                {/*                <span>خانه</span>*/}
                {/*            </Link>*/}
                {/*            <ChevronLeftIcon className="w-4 h-4 text-gray-400" />*/}
                {/*            <span className="text-gray-900 font-medium">مقالات</span>*/}
                {/*            {selectedCategory !== 'all' && (*/}
                {/*                <>*/}
                {/*                    <ChevronLeftIcon className="w-4 h-4 text-gray-400" />*/}
                {/*                    <span className="text-cyan-600">*/}
                {/*                        {categories.find(c => c.slug === selectedCategory)?.name}*/}
                {/*                    </span>*/}
                {/*                </>*/}
                {/*            )}*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</nav>*/}

                {/* Hero Section */}
                <section className="py-20 bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900 text-white relative overflow-hidden">
                    {/* Animated Background */}
                    <div className="absolute inset-0">
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-slate-500/20 animate-gradient-x"></div>
                        {[...Array(20)].map((_, i) => (
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
                                <div className="w-2 h-2 bg-cyan-400/30 rounded-full blur-sm"></div>
                            </div>
                        ))}
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-4xl mx-auto text-center">
                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8">
                                <BookOpenIcon className="w-5 h-5 text-cyan-400" />
                                <span className="text-sm font-medium">مرجع آموزش طراحی وب</span>
                                <div className="flex items-center gap-1">
                                    {[1,2,3,4,5].map((star) => (
                                        <StarSolidIcon key={star} className="w-4 h-4 text-cyan-400" />
                                    ))}
                                </div>
                            </div>

                            {/* Main Title */}
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-8">
                                مقالات آموزشی
                                <span className="block text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-slate-400 bg-clip-text">
                                    دیزاین پرداز
                                </span>
                            </h1>

                            {/* Subtitle */}
                            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-12 max-w-3xl mx-auto">
                                آموزش‌های جامع و رایگان طراحی وب‌سایت، سئو، طراحی گرافیک و برندینگ
                                توسط تیم متخصص دیزاین پرداز
                            </p>

                            {/* Stats */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                                {[
                                    { icon: DocumentTextIcon, number: `${articles.length}`, label: 'مقاله آموزشی' },
                                    { icon: EyeIcon, number: `${Math.floor(totalViews / 1000)}K+`, label: 'بازدید کل' },
                                    { icon: UserGroupIcon, number: `${Math.floor(totalLikes / 10)}+`, label: 'کاربر فعال' }
                                ].map((stat, index) => (
                                    <div key={index} className="text-center">
                                        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl mb-4">
                                            <stat.icon className="w-8 h-8 text-cyan-400" />
                                        </div>
                                        <div className="text-3xl font-black text-white mb-2">{stat.number}</div>
                                        <div className="text-gray-300">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Filters Section */}
                <section className="py-12 bg-white border-b border-gray-200 sticky top-0 z-40 backdrop-blur-sm bg-white/95">
                    <div className="container mx-auto px-4">
                        {/* Search Form */}
                        <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-8">
                            <div className="relative">
                                <MagnifyingGlassIcon className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type="text"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    placeholder="جستجو در مقالات..."
                                    className="w-full pr-12 pl-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-gray-900 placeholder-gray-500"
                                />
                                <button
                                    type="submit"
                                    className="absolute left-2 top-1/2 transform -translate-y-1/2 px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all shadow-lg"
                                >
                                    جستجو
                                </button>
                            </div>
                        </form>

                        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                            {/* Category Filters */}
                            <div className="flex flex-wrap items-center gap-3">
                                {categories.map((category) => (
                                    <button
                                        key={category.slug}
                                        onClick={() => handleCategoryChange(category.slug)}
                                        className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                                            selectedCategory === category.slug
                                                ? `bg-gradient-to-r ${category.color} text-white shadow-lg transform scale-105`
                                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        }`}
                                    >
                                        {React.createElement(category.icon as React.ComponentType<{className?: string}>, { className: "w-5 h-5" })}
                                        <span>{category.name}</span>
                                        <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                                            {category.count}
                                        </span>
                                    </button>
                                ))}
                            </div>

                            <div className="flex items-center gap-4">
                                {/* Sort Dropdown */}
                                <div className="relative">
                                    <select
                                        value={sortBy}
                                        onChange={(e) => handleSortChange(e.target.value)}
                                        className="appearance-none bg-white border border-gray-300 rounded-xl px-4 py-3 pr-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                    >
                                        <option value="newest">جدیدترین</option>
                                        <option value="oldest">قدیمی‌ترین</option>
                                        <option value="popular">محبوب‌ترین</option>
                                        <option value="likes">پرطرفدارترین</option>
                                        <option value="readTime">سریع‌ترین مطالعه</option>
                                    </select>
                                    <ChevronDownIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                                </div>

                                {/* Clear Filters */}
                                {(selectedCategory !== 'all' || searchTerm || sortBy !== 'newest') && (
                                    <button
                                        onClick={clearFilters}
                                        className="flex items-center gap-2 px-4 py-3 text-red-600 hover:bg-red-50 rounded-xl transition-colors"
                                    >
                                        <XMarkIcon className="w-5 h-5" />
                                        <span>پاک کردن فیلترها</span>
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* Results Counter */}
                        <div className="mt-6 text-center text-gray-600">
                            {filteredAndSortedArticles.length === 0 ? (
                                <span>مقاله‌ای یافت نشد</span>
                            ) : (
                                <span>
                                    {filteredAndSortedArticles.length} مقاله یافت شد
                                    {searchTerm && ` برای "${searchTerm}"`}
                                    {selectedCategory !== 'all' && ` در دسته "${categories.find(c => c.slug === selectedCategory)?.name}"`}
                                </span>
                            )}
                        </div>
                    </div>
                </section>

                {/* Articles Grid */}
                <main className="py-16">
                    <div className="container mx-auto px-4">
                        {filteredAndSortedArticles.length === 0 ? (
                            <div className="text-center py-20">
                                <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full flex items-center justify-center mb-8">
                                    <MagnifyingGlassIcon className="w-12 h-12 text-gray-400" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">مقاله‌ای یافت نشد</h2>
                                <p className="text-gray-600 mb-8">متأسفانه مقاله‌ای با این مشخصات پیدا نکردیم.</p>
                                <button
                                    onClick={clearFilters}
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all shadow-lg"
                                >
                                    <XMarkIcon className="w-5 h-5" />
                                    <span>پاک کردن فیلترها</span>
                                </button>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                                {currentArticles.map((article) => (
                                    <article
                                        key={article.id}
                                        className="group bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                                    >
                                        {/* Article Image */}
                                        <div className="relative h-64 overflow-hidden">
                                            <Image
                                                src={article.image.main}
                                                alt={article.image.alt}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                                            />

                                            {/* Badges */}
                                            <div className="absolute top-4 right-4 flex flex-col gap-2">
                                                {article.featured && (
                                                    <div className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-bold rounded-full flex items-center gap-1">
                                                        <StarIcon className="w-3 h-3" />
                                                        <span>ویژه</span>
                                                    </div>
                                                )}
                                                {article.trending && (
                                                    <div className="px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold rounded-full flex items-center gap-1">
                                                        <FireIcon className="w-3 h-3" />
                                                        <span>ترند</span>
                                                    </div>
                                                )}
                                            </div>

                                            {/* Category Badge */}
                                            <div className="absolute bottom-4 right-4">
                                                <div className={`px-4 py-2 bg-gradient-to-r ${article.category.color} text-white font-medium rounded-full flex items-center gap-2`}>
                                                    {React.createElement(article.category.icon as React.ComponentType<{className?: string}>, { className: "w-4 h-4" })}
                                                    <span className="text-sm">{article.category.name}</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Article Content */}
                                        <div className="p-6">
                                            {/* Meta Info */}
                                            <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                                                <div className="flex items-center gap-4">
                                                    <div className="flex items-center gap-1">
                                                        <CalendarDaysIcon className="w-4 h-4" />
                                                        <span>{article.publishedAt}</span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <ClockIcon className="w-4 h-4" />
                                                        <span>{article.readTime} دقیقه</span>
                                                    </div>
                                                </div>
                                                <div className={`px-3 py-1 rounded-full text-xs font-medium border ${getDifficultyColor(article.difficulty)}`}>
                                                    {article.difficulty}
                                                </div>
                                            </div>

                                            {/* Title */}
                                            <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-cyan-600 transition-colors">
                                                <Link href={`/articles/${article.slug}`}>
                                                    {article.title}
                                                </Link>
                                            </h2>

                                            {/* Excerpt */}
                                            <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                                                {article.excerpt}
                                            </p>

                                            {/* Tags */}
                                            <div className="flex flex-wrap gap-2 mb-6">
                                                {article.tags.slice(0, 3).map((tag, tagIndex) => (
                                                    <span
                                                        key={tagIndex}
                                                        className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full hover:bg-cyan-50 hover:text-cyan-600 transition-colors cursor-pointer"
                                                    >
                                                        #{tag}
                                                    </span>
                                                ))}
                                                {article.tags.length > 3 && (
                                                    <span className="text-gray-400 text-xs">+{article.tags.length - 3}</span>
                                                )}
                                            </div>

                                            {/* Author & Stats */}
                                            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                                <div className="flex items-center gap-3">
                                                    <Image
                                                        src={article.author.avatar}
                                                        alt={article.author.name}
                                                        width={32}
                                                        height={32}
                                                        className="w-8 h-8 rounded-full object-cover"
                                                    />
                                                    <span className="text-sm text-gray-700 font-medium">{article.author.name}</span>
                                                </div>

                                                <div className="flex items-center gap-4 text-sm text-gray-500">
                                                    <div className="flex items-center gap-1">
                                                        <EyeIcon className="w-4 h-4" />
                                                        <span>{article.views.toLocaleString()}</span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <HeartIcon className="w-4 h-4" />
                                                        <span>{article.likes}</span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Read More Link */}
                                            <div className="mt-6">
                                                <Link
                                                    href={`/articles/${article.slug}`}
                                                    className="group/btn inline-flex items-center gap-2 text-cyan-600 hover:text-cyan-700 font-medium transition-colors"
                                                >
                                                    <span>ادامه مطالعه</span>
                                                    <ArrowRightIcon className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                                </Link>
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        )}

                        {/* Pagination */}
                        {totalPages > 1 && (
                            <div className="flex items-center justify-center gap-2">
                                <button
                                    onClick={() => {
                                        if (currentPage > 1) {
                                            setCurrentPage(currentPage - 1);
                                            updateURL({ page: currentPage - 1 });
                                        }
                                    }}
                                    disabled={currentPage === 1}
                                    className="px-4 py-2 text-gray-500 border border-gray-300 rounded-xl hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                >
                                    قبلی
                                </button>

                                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                    <button
                                        key={page}
                                        onClick={() => {
                                            setCurrentPage(page);
                                            updateURL({ page });
                                        }}
                                        className={`px-4 py-2 rounded-xl transition-colors ${
                                            currentPage === page
                                                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                                                : 'text-gray-700 border border-gray-300 hover:bg-gray-50'
                                        }`}
                                    >
                                        {page}
                                    </button>
                                ))}

                                <button
                                    onClick={() => {
                                        if (currentPage < totalPages) {
                                            setCurrentPage(currentPage + 1);
                                            updateURL({ page: currentPage + 1 });
                                        }
                                    }}
                                    disabled={currentPage === totalPages}
                                    className="px-4 py-2 text-gray-500 border border-gray-300 rounded-xl hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                >
                                    بعدی
                                </button>
                            </div>
                        )}
                    </div>
                </main>

                {/* Newsletter Section */}
                <section className="py-20 bg-gradient-to-br from-slate-900 via-cyan-900 to-blue-900 text-white relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0">
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-slate-500/10"></div>
                        {[...Array(12)].map((_, i) => (
                            <div
                                key={i}
                                className="absolute animate-pulse"
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                    animationDelay: `${Math.random() * 2}s`,
                                    animationDuration: `${2 + Math.random() * 3}s`
                                }}
                            >
                                <div className="w-1 h-1 bg-cyan-400/30 rounded-full"></div>
                            </div>
                        ))}
                    </div>

                    <div className="container mx-auto px-4 text-center relative z-10">
                        <div className="max-w-2xl mx-auto">
                            {/* Icon */}
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-2xl mb-6">
                                <SparklesIcon className="w-8 h-8 text-cyan-400" />
                            </div>

                            {/* Title */}
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                از آخرین مقالات باخبر شوید
                            </h2>

                            {/* Description */}
                            <p className="text-gray-300 mb-8 text-lg">
                                هر هفته مقالات جدید و آموزش‌های کاربردی برای شما ارسال می‌کنیم
                            </p>

                            {/* Newsletter Form */}
                            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
                                <input
                                    type="email"
                                    placeholder="ایمیل شما..."
                                    className="flex-1 px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent backdrop-blur-sm"
                                />
                                <button
                                    type="submit"
                                    className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl"
                                >
                                    عضویت
                                </button>
                            </form>

                            {/* Trust Indicators */}
                            <div className="flex items-center justify-center gap-6 text-sm text-gray-400">
                                <div className="flex items-center gap-2">
                                    <CheckBadgeIcon className="w-5 h-5 text-cyan-400" />
                                    <span>رایگان</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckBadgeIcon className="w-5 h-5 text-cyan-400" />
                                    <span>بدون اسپم</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckBadgeIcon className="w-5 h-5 text-cyan-400" />
                                    <span>لغو آسان</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            </div>
        </>
    );
}

export default function ArticlesPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-gray-100">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-4 border-cyan-500 border-t-transparent mx-auto mb-4"></div>
                    <p className="text-gray-600">در حال بارگذاری مقالات...</p>
                </div>
            </div>
        }>
            <ArticlesContent />
        </Suspense>
    );
}