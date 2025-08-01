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
    DocumentTextIcon
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
            case 'مبتدی': return 'text-green-600 bg-green-50 border-green-200';
            case 'متوسط': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
            case 'پیشرفته': return 'text-red-600 bg-red-50 border-red-200';
            default: return 'text-gray-600 bg-gray-50 border-gray-200';
        }
    };

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

                <nav className="bg-white border-b border-gray-200 py-4">
                    <div className="container mx-auto px-4">
                        <div className="flex items-center gap-2 text-sm">
                            <Link href="/" className="flex items-center gap-1 text-gray-500 hover:text-blue-600 transition-colors">
                                <HomeIcon className="w-4 h-4" />
                                <span>خانه</span>
                            </Link>
                            <ChevronLeftIcon className="w-4 h-4 text-gray-400" />
                            <span className="text-gray-900 font-medium">مقالات</span>
                            {selectedCategory !== 'all' && (
                                <>
                                    <ChevronLeftIcon className="w-4 h-4 text-gray-400" />
                                    <span className="text-blue-600">
                    {categories.find(c => c.slug === selectedCategory)?.name}
                  </span>
                                </>
                            )}
                        </div>
                    </div>
                </nav>

                <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">

                    <div className="absolute inset-0">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-gradient-x"></div>
                        {[...Array(15)].map((_, i) => (
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

                            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8">
                                <BookOpenIcon className="w-5 h-5 text-yellow-400" />
                                <span className="text-sm font-medium">مرجع آموزش طراحی وب</span>
                                <div className="flex items-center gap-1">
                                    {[1,2,3,4,5].map((star) => (
                                        <StarSolidIcon key={star} className="w-4 h-4 text-yellow-400" />
                                    ))}
                                </div>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-8">
                                مقالات آموزشی
                                <span className="block text-transparent bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text">
                  دیزاین پرداز
                </span>
                            </h1>

                            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-12 max-w-3xl mx-auto">
                                آموزش‌های جامع و رایگان طراحی وب‌سایت، سئو، طراحی گرافیک و برندینگ
                                توسط تیم متخصص دیزاین پرداز
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                                {[
                                    { icon: DocumentTextIcon, number: `${articles.length}+`, label: 'مقاله آموزشی' },
                                    { icon: EyeIcon, number: '15K+', label: 'بازدید ماهانه' },
                                    { icon: HeartIcon, number: '500+', label: 'کاربر راضی' }
                                ].map((stat, index) => (
                                    <div key={index} className="text-center">
                                        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl mb-4">
                                            <stat.icon className="w-8 h-8 text-yellow-400" />
                                        </div>
                                        <div className="text-3xl font-black text-white mb-2">{stat.number}</div>
                                        <div className="text-gray-300">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-12 bg-white border-b border-gray-200 sticky top-0 z-40 backdrop-blur-sm bg-white/95">
                    <div className="container mx-auto px-4">

                        <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-8">
                            <div className="relative">
                                <MagnifyingGlassIcon className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type="text"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    placeholder="جستجو در مقالات..."
                                    className="w-full pr-12 pl-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500"
                                />
                                <button
                                    type="submit"
                                    className="absolute left-2 top-1/2 transform -translate-y-1/2 px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
                                >
                                    جستجو
                                </button>
                            </div>
                        </form>

                        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">

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
                                        {React.createElement(category.icon as React.ComponentType<{className?: string}>, { className: "w-5 h-5" })}                                        <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                      {category.count}
                    </span>
                                    </button>
                                ))}
                            </div>

                            <div className="flex items-center gap-4">

                                <div className="relative">
                                    <select
                                        value={sortBy}
                                        onChange={(e) => handleSortChange(e.target.value)}
                                        className="appearance-none bg-white border border-gray-300 rounded-xl px-4 py-3 pr-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        <option value="newest">جدیدترین</option>
                                        <option value="oldest">قدیمی‌ترین</option>
                                        <option value="popular">محبوب‌ترین</option>
                                        <option value="likes">پرطرفدارترین</option>
                                        <option value="readTime">سریع‌ترین مطالعه</option>
                                    </select>
                                    <ChevronDownIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                                </div>

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
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-colors"
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

                                        <div className="relative h-64 overflow-hidden">
                                            <Image
                                                src={article.image.main}
                                                alt={article.image.alt}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                                            />

                                            <div className="absolute top-4 right-4 flex flex-col gap-2">
                                                {article.featured && (
                                                    <div className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold rounded-full flex items-center gap-1">
                                                        <StarIcon className="w-3 h-3" />
                                                        <span>ویژه</span>
                                                    </div>
                                                )}
                                                {article.trending && (
                                                    <div className="px-3 py-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold rounded-full flex items-center gap-1">
                                                        <FireIcon className="w-3 h-3" />
                                                        <span>ترند</span>
                                                    </div>
                                                )}
                                            </div>

                                            <div className="absolute bottom-4 right-4">
                                                <div className={`px-4 py-2 bg-gradient-to-r ${article.category.color} text-white font-medium rounded-full flex items-center gap-2`}>
                                                    {React.createElement(article.category.icon as React.ComponentType<{className?: string}>, { className: "w-4 h-4" })}                                                    <span className="text-sm">{article.category.name}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="p-6">

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

                                            <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                                                <Link href={`/articles/${article.slug}`}>
                                                    {article.title}
                                                </Link>
                                            </h2>

                                            <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                                                {article.excerpt}
                                            </p>

                                            <div className="flex flex-wrap gap-2 mb-6">
                                                {article.tags.slice(0, 3).map((tag, tagIndex) => (
                                                    <span
                                                        key={tagIndex}
                                                        className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full hover:bg-blue-50 hover:text-blue-600 transition-colors cursor-pointer"
                                                    >
                            #{tag}
                          </span>
                                                ))}
                                                {article.tags.length > 3 && (
                                                    <span className="text-gray-400 text-xs">+{article.tags.length - 3}</span>
                                                )}
                                            </div>

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

                                            <div className="mt-6">
                                                <Link
                                                    href={`/articles/${article.slug}`}
                                                    className="group/btn inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
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
                                                ? 'bg-blue-600 text-white'
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

                <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 text-white">
                    <div className="container mx-auto px-4 text-center">
                        <div className="max-w-2xl mx-auto">
                            <SparklesIcon className="w-16 h-16 mx-auto mb-6 text-yellow-400" />
                            <h2 className="text-3xl font-bold mb-4">از آخرین مقالات باخبر شوید</h2>
                            <p className="text-gray-300 mb-8">هر هفته مقالات جدید و آموزش‌های کاربردی برای شما ارسال می‌کنیم</p>

                            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                                <input
                                    type="email"
                                    placeholder="ایمیل شما..."
                                    className="flex-1 px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                />
                                <button
                                    type="submit"
                                    className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold rounded-xl hover:from-yellow-300 hover:to-orange-400 transition-all"
                                >
                                    عضویت
                                </button>
                            </form>
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
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
            </div>
        }>
            <ArticlesContent />
        </Suspense>
    );
}
