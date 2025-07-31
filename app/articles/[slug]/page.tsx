// 'use client';
// import { notFound } from 'next/navigation';
// import Link from 'next/link';
// import Image from 'next/image';
// import {
//     CalendarDaysIcon,
//     ClockIcon,
//     EyeIcon,
//     HeartIcon,
//     ChatBubbleLeftRightIcon,
//     UserIcon,
//     TagIcon,
//     ShareIcon,
//     BookmarkIcon,
//     ArrowRightIcon,
//     ArrowLeftIcon,
//     ChartBarIcon,
//     ChevronLeftIcon,
//     HomeIcon,
//     DocumentTextIcon,
//     PrinterIcon,
//     PaperAirplaneIcon,
//     HandThumbUpIcon,
//     HandThumbDownIcon,
//     ExclamationTriangleIcon,
//     InformationCircleIcon,
//     CheckBadgeIcon,
//     StarIcon,
//     FireIcon,
//     TrophyIcon,
//     LightBulbIcon,
//     QuestionMarkCircleIcon,
//     BoltIcon,
//     SparklesIcon,
//     RocketLaunchIcon,
//     MagnifyingGlassIcon,
//     AdjustmentsHorizontalIcon,
//     FunnelIcon,
//     XMarkIcon,
//     ClipboardDocumentIcon,
//     LinkIcon,
//     EnvelopeIcon,
//     PhoneIcon,
//     DevicePhoneMobileIcon,
//     BuildingOfficeIcon,
//     ChatBubbleOvalLeftEllipsisIcon,
//     PencilSquareIcon,
//     FlagIcon,
//     ShieldCheckIcon
// } from '@heroicons/react/24/outline';
//
// import { articles, getRelatedArticles, type Article } from '@/lib/data/articles';
//
// // Generate static params for all articles
// export async function generateStaticParams() {
//     return articles.map((article) => ({
//         slug: article.slug,
//     }));
// }
//
// // Generate metadata for SEO
// export async function generateMetadata({ params }: { params: { slug: string } }) {
//     const article = articles.find(a => a.slug === params.slug);
//
//     if (!article) {
//         return {
//             title: 'مقاله یافت نشد | دیزاین پرداز',
//             description: 'متأسفانه مقاله مورد نظر پیدا نشد'
//         };
//     }
//
//     return {
//         title: article.seo.metaTitle,
//         description: article.seo.metaDescription,
//         keywords: article.seo.keywords.join(', '),
//         openGraph: {
//             title: article.seo.metaTitle,
//             description: article.seo.metaDescription,
//             type: 'article',
//             url: article.seo.canonicalUrl,
//             images: [{ url: article.seo.ogImage }],
//             publishedTime: article.publishedAt,
//             modifiedTime: article.updatedAt || article.publishedAt,
//             authors: [article.author.name],
//             section: article.category.name,
//             tags: article.tags,
//         },
//         twitter: {
//             card: 'summary_large_image',
//             title: article.seo.metaTitle,
//             description: article.seo.metaDescription,
//             images: [article.seo.ogImage],
//         },
//         alternates: {
//             canonical: article.seo.canonicalUrl
//         }
//     };
// }
//
// interface ArticlePageProps {
//     params: {
//         slug: string;
//     };
// }
//
// export default async function ArticlePage({ params }: ArticlePageProps) {
//     const { slug } = params;
//
//     // Find article by slug
//     const article = articles.find(a => a.slug === slug);
//
//     if (!article) {
//         notFound();
//     }
//
//     // Get related articles
//     const relatedArticles = getRelatedArticles(article.id, 6);
//
//     // Table of contents (mock data - در پروژه واقعی از content استخراج می‌شود)
//     const tableOfContents = [
//         { id: 'introduction', title: 'مقدمه', level: 1 },
//         { id: 'basics', title: 'مبانی طراحی وب', level: 1 },
//         { id: 'html-structure', title: 'ساختار HTML', level: 2 },
//         { id: 'css-styling', title: 'استایل‌دهی CSS', level: 2 },
//         { id: 'responsive-design', title: 'طراحی واکنش‌گرا', level: 1 },
//         { id: 'mobile-first', title: 'رویکرد Mobile First', level: 2 },
//         { id: 'breakpoints', title: 'نقاط شکست', level: 2 },
//         { id: 'best-practices', title: 'بهترین روش‌ها', level: 1 },
//         { id: 'performance', title: 'بهینه‌سازی عملکرد', level: 2 },
//         { id: 'conclusion', title: 'نتیجه‌گیری', level: 1 }
//     ];
//
//     const getDifficultyColor = (difficulty: string) => {
//         switch (difficulty) {
//             case 'مبتدی': return 'text-green-600 bg-green-50 border-green-200';
//             case 'متوسط': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
//             case 'پیشرفته': return 'text-red-600 bg-red-50 border-red-200';
//             default: return 'text-gray-600 bg-gray-50 border-gray-200';
//         }
//     };
//
//     return (
//         <>
//             <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
//
//                 {/* Breadcrumb */}
//                 <nav className="bg-white border-b border-gray-200 py-4 sticky top-0 z-40 backdrop-blur-sm bg-white/90">
//                     <div className="container mx-auto px-4">
//                         <div className="flex items-center gap-2 text-sm">
//                             <Link href="/" className="flex items-center gap-1 text-gray-500 hover:text-blue-600 transition-colors">
//                                 <HomeIcon className="w-4 h-4" />
//                                 <span>خانه</span>
//                             </Link>
//                             <ChevronLeftIcon className="w-4 h-4 text-gray-400" />
//                             <Link href="/articles" className="text-gray-500 hover:text-blue-600 transition-colors">
//                                 مقالات
//                             </Link>
//                             <ChevronLeftIcon className="w-4 h-4 text-gray-400" />
//                             <Link href={`/articles?category=${article.category.slug}`} className="text-gray-500 hover:text-blue-600 transition-colors">
//                                 {article.category.name}
//                             </Link>
//                             <ChevronLeftIcon className="w-4 h-4 text-gray-400" />
//                             <span className="text-gray-900 font-medium line-clamp-1">{article.title}</span>
//                         </div>
//                     </div>
//                 </nav>
//
//                 {/* Article Header */}
//                 <header className="py-16 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
//
//                     {/* Background Animation */}
//                     <div className="absolute inset-0">
//                         <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-gradient-x"></div>
//                         {[...Array(20)].map((_, i) => (
//                             <div
//                                 key={i}
//                                 className="absolute animate-float"
//                                 style={{
//                                     left: `${Math.random() * 100}%`,
//                                     top: `${Math.random() * 100}%`,
//                                     animationDelay: `${Math.random() * 3}s`,
//                                     animationDuration: `${3 + Math.random() * 4}s`
//                                 }}
//                             >
//                                 <div className="w-2 h-2 bg-white/20 rounded-full blur-sm"></div>
//                             </div>
//                         ))}
//                     </div>
//
//                     <div className="container mx-auto px-4 relative z-10">
//                         <div className="max-w-4xl mx-auto text-center">
//
//                             {/* Category & Badges */}
//                             <div className="flex items-center justify-center gap-3 mb-8">
//                                 <div className={`px-4 py-2 bg-gradient-to-r ${article.category.color} text-white font-medium rounded-full flex items-center gap-2`}>
//                                     <article.category.icon className="w-5 h-5" />
//                                     <span>{article.category.name}</span>
//                                 </div>
//
//                                 {article.featured && (
//                                     <div className="px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-medium rounded-full flex items-center gap-2">
//                                         <StarIcon className="w-4 h-4" />
//                                         <span>ویژه</span>
//                                     </div>
//                                 )}
//
//                                 {article.trending && (
//                                     <div className="px-4 py-2 bg-gradient-to-r from-red-500 to-pink-500 text-white font-medium rounded-full flex items-center gap-2">
//                                         <FireIcon className="w-4 h-4" />
//                                         <span>ترند</span>
//                                     </div>
//                                 )}
//
//                                 <div className={`px-4 py-2 rounded-full border-2 ${getDifficultyColor(article.difficulty)} bg-white/90`}>
//                                     <span className="font-medium">{article.difficulty}</span>
//                                 </div>
//                             </div>
//
//                             {/* Main Title */}
//                             <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-8">
//                                 {article.title}
//                             </h1>
//
//                             {/* Excerpt */}
//                             <p className="text-xl text-gray-300 leading-relaxed mb-12 max-w-3xl mx-auto">
//                                 {article.excerpt}
//                             </p>
//
//                             {/* Article Meta */}
//                             <div className="flex flex-wrap items-center justify-center gap-6 mb-8 text-gray-300">
//                                 <div className="flex items-center gap-2">
//                                     <CalendarDaysIcon className="w-5 h-5" />
//                                     <span>{article.publishedAt}</span>
//                                 </div>
//                                 <div className="flex items-center gap-2">
//                                     <ClockIcon className="w-5 h-5" />
//                                     <span>{article.readTime} دقیقه مطالعه</span>
//                                 </div>
//                                 <div className="flex items-center gap-2">
//                                     <EyeIcon className="w-5 h-5" />
//                                     <span>{article.views.toLocaleString()} بازدید</span>
//                                 </div>
//                                 <div className="flex items-center gap-2">
//                                     <UserIcon className="w-5 h-5" />
//                                     <span>{article.author.name}</span>
//                                 </div>
//                             </div>
//
//                             {/* Client Component for Interactive Parts */}
//                             <ArticleInteractions />
//                         </div>
//                     </div>
//                 </header>
//
//                 {/* Main Content */}
//                 <main className="py-16">
//                     <div className="container mx-auto px-4">
//                         <div className="flex flex-col lg:flex-row gap-12">
//
//                             {/* Sidebar */}
//                             <aside className="lg:w-80">
//                                 <div className="sticky top-24 space-y-8">
//
//                                     {/* Author Card */}
//                                     <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
//                                         <div className="p-6">
//                                             <div className="flex items-center gap-4 mb-4">
//                                                 <Image
//                                                     src={article.author.avatar}
//                                                     alt={article.author.name}
//                                                     width={60}
//                                                     height={60}
//                                                     className="w-15 h-15 rounded-full object-cover"
//                                                 />
//                                                 <div>
//                                                     <h3 className="font-bold text-gray-900 text-lg">{article.author.name}</h3>
//                                                     <p className="text-gray-600 text-sm">نویسنده</p>
//                                                 </div>
//                                             </div>
//                                             <p className="text-gray-600 text-sm mb-4">{article.author.bio}</p>
//
//                                             {/* Author Social Links */}
//                                             <div className="flex gap-3">
//                                                 {article.author.social.linkedin && (
//                                                     <a
//                                                         href={`https://linkedin.com/in/${article.author.social.linkedin}`}
//                                                         target="_blank"
//                                                         rel="noopener noreferrer"
//                                                         className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
//                                                     >
//                                                         <span className="text-sm font-bold">in</span>
//                                                     </a>
//                                                 )}
//                                                 {article.author.social.twitter && (
//                                                     <a
//                                                         href={`https://twitter.com/${article.author.social.twitter}`}
//                                                         target="_blank"
//                                                         rel="noopener noreferrer"
//                                                         className="w-8 h-8 bg-blue-400 text-white rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors"
//                                                     >
//                                                         <span className="text-sm font-bold">𝕏</span>
//                                                     </a>
//                                                 )}
//                                                 {article.author.social.instagram && (
//                                                     <a
//                                                         href={`https://instagram.com/${article.author.social.instagram}`}
//                                                         target="_blank"
//                                                         rel="noopener noreferrer"
//                                                         className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg flex items-center justify-center hover:from-purple-600 hover:to-pink-600 transition-all"
//                                                     >
//                                                         <span className="text-sm font-bold">ig</span>
//                                                     </a>
//                                                 )}
//                                             </div>
//                                         </div>
//                                     </div>
//
//                                     {/* Table of Contents */}
//                                     <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
//                                         <div className="p-6">
//                                             <div className="flex items-center gap-2 mb-6">
//                                                 <DocumentTextIcon className="w-5 h-5 text-blue-600" />
//                                                 <h3 className="font-bold text-gray-900">فهرست مطالب</h3>
//                                             </div>
//
//                                             <nav className="space-y-2">
//                                                 {tableOfContents.map((item) => (
//                                                     <a
//                                                         key={item.id}
//                                                         href={`#${item.id}`}
//                                                         className={`block py-2 px-3 text-sm rounded-lg transition-all duration-200 ${
//                                                             item.level === 1
//                                                                 ? 'font-medium text-gray-900 hover:bg-blue-50 hover:text-blue-600'
//                                                                 : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 mr-4'
//                                                         }`}
//                                                         style={{ paddingRight: `${item.level * 12}px` }}
//                                                     >
//                                                         {item.title}
//                                                     </a>
//                                                 ))}
//                                             </nav>
//                                         </div>
//                                     </div>
//
//                                     {/* Article Stats */}
//                                     <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100">
//                                         <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
//                                             <ChartBarIcon className="w-5 h-5 text-blue-600" />
//                                             آمار مقاله
//                                         </h3>
//
//                                         <div className="space-y-4">
//                                             <div className="flex justify-between items-center">
//                                                 <span className="text-gray-600 flex items-center gap-2">
//                                                     <EyeIcon className="w-4 h-4" />
//                                                     بازدید
//                                                 </span>
//                                                 <span className="font-bold text-gray-900">{article.views.toLocaleString()}</span>
//                                             </div>
//                                             <div className="flex justify-between items-center">
//                                                 <span className="text-gray-600 flex items-center gap-2">
//                                                     <HeartIcon className="w-4 h-4" />
//                                                     پسند
//                                                 </span>
//                                                 <span className="font-bold text-gray-900">{article.likes}</span>
//                                             </div>
//                                             <div className="flex justify-between items-center">
//                                                 <span className="text-gray-600 flex items-center gap-2">
//                                                     <ClockIcon className="w-4 h-4" />
//                                                     مطالعه
//                                                 </span>
//                                                 <span className="font-bold text-gray-900">{article.readTime}د</span>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </aside>
//
//                             {/* Article Content */}
//                             <div className="flex-1">
//                                 <article className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
//
//                                     {/* Featured Image */}
//                                     <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden">
//                                         <Image
//                                             src={article.image.main}
//                                             alt={article.image.alt}
//                                             width={800}
//                                             height={400}
//                                             className="w-full h-full object-cover"
//                                             priority
//                                         />
//
//                                         {/* Image Overlay with Reading Time */}
//                                         <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-xl flex items-center gap-2">
//                                             <ClockIcon className="w-4 h-4" />
//                                             <span className="text-sm font-medium">{article.readTime} دقیقه مطالعه</span>
//                                         </div>
//                                     </div>
//
//                                     {/* Article Body */}
//                                     <div className="p-8 lg:p-12">
//
//                                         {/* Last Updated */}
//                                         {article.updatedAt && (
//                                             <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-8 flex items-center gap-2">
//                                                 <InformationCircleIcon className="w-5 h-5 text-blue-600" />
//                                                 <span className="text-sm text-blue-800">
//                                                     آخرین بروزرسانی: {article.updatedAt}
//                                                 </span>
//                                             </div>
//                                         )}
//
//                                         {/* Article Content */}
//                                         <div className="prose prose-lg max-w-none">
//
//                                             <section id="introduction">
//                                                 <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
//                                                     <LightBulbIcon className="w-6 h-6 text-yellow-500" />
//                                                     مقدمه
//                                                 </h2>
//                                                 <p className="text-gray-700 leading-relaxed mb-6">
//                                                     در دنیای امروز، طراحی وب‌سایت حرفه‌ای یکی از مهم‌ترین عوامل موفقیت کسب‌وکارهای آنلاین محسوب می‌شود.
//                                                     با پیشرفت تکنولوژی و تغییر نیازهای کاربران، نحوه طراحی و توسعه وب‌سایت‌ها نیز دستخوش تحولات زیادی شده است.
//                                                 </p>
//                                                 <p className="text-gray-700 leading-relaxed mb-6">
//                                                     در این مقاله جامع، قصد داریم تا شما را با تمامی جنبه‌های طراحی وب‌سایت مدرن آشنا کنیم و راهنمایی کاملی
//                                                     برای ساخت یک وب‌سایت حرفه‌ای و کاربرپسند ارائه دهیم.
//                                                 </p>
//                                             </section>
//
//                                             <section id="basics" className="mt-12">
//                                                 <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
//                                                     <RocketLaunchIcon className="w-6 h-6 text-blue-500" />
//                                                     مبانی طراحی وب
//                                                 </h2>
//                                                 <p className="text-gray-700 leading-relaxed mb-6">
//                                                     طراحی وب موثر بر پایه اصول و قوانین خاصی بنا شده که رعایت آن‌ها منجر به ایجاد تجربه کاربری مطلوب می‌شود.
//                                                 </p>
//
//                                                 <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-2xl p-6 mb-8">
//                                                     <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
//                                                         <CheckBadgeIcon className="w-5 h-5 text-green-600" />
//                                                         نکات مهم:
//                                                     </h3>
//                                                     <ul className="space-y-2 text-gray-700">
//                                                         <li className="flex items-start gap-2">
//                                                             <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
//                                                             <span>طراحی واکنش‌گرا (Responsive) الزامی است</span>
//                                                         </li>
//                                                         <li className="flex items-start gap-2">
//                                                             <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
//                                                             <span>سرعت بارگذاری بسیار مهم است</span>
//                                                         </li>
//                                                         <li className="flex items-start gap-2">
//                                                             <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
//                                                             <span>تجربه کاربری در اولویت قرار دارد</span>
//                                                         </li>
//                                                         <li className="flex items-start gap-2">
//                                                             <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
//                                                             <span>بهینه‌سازی سئو ضروری است</span>
//                                                         </li>
//                                                     </ul>
//                                                 </div>
//
//                                                 <h3 id="html-structure" className="text-xl font-bold text-gray-900 mb-4 mt-8">ساختار HTML</h3>
//                                                 <p className="text-gray-700 leading-relaxed mb-6">
//                                                     HTML پایه و اساس هر وب‌سایت محسوب می‌شود. نوشتن کد HTML تمیز و استاندارد، اولین گام برای ساخت یک وب‌سایت حرفه‌ای است.
//                                                 </p>
//
//                                                 <h3 id="css-styling" className="text-xl font-bold text-gray-900 mb-4 mt-8">استایل‌دهی CSS</h3>
//                                                 <p className="text-gray-700 leading-relaxed mb-6">
//                                                     CSS ابزار قدرتمندی برای زیباسازی و چیدمان عناصر وب‌سایت است. استفاده صحیح از CSS منجر به ایجاد طراحی جذاب و حرفه‌ای می‌شود.
//                                                 </p>
//                                             </section>
//
//                                             <section id="responsive-design" className="mt-12">
//                                                 <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
//                                                     <DevicePhoneMobileIcon className="w-6 h-6 text-purple-500" />
//                                                     طراحی واکنش‌گرا
//                                                 </h2>
//                                                 <p className="text-gray-700 leading-relaxed mb-6">
//                                                     با توجه به اینکه بیش از ۷۰ درصد کاربران از طریق دستگاه‌های موبایل به اینترنت دسترسی دارند،
//                                                     طراحی واکنش‌گرا دیگر یک انتخاب نیست بلکه یک الزام محسوب می‌شود.
//                                                 </p>
//                                             </section>
//
//                                             <section id="conclusion" className="mt-12">
//                                                 <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
//                                                     <CheckBadgeIcon className="w-6 h-6 text-green-500" />
//                                                     نتیجه‌گیری
//                                                 </h2>
//                                                 <p className="text-gray-700 leading-relaxed mb-6">
//                                                     طراحی وب‌سایت مدرن نیازمند درنظر‌گیری عوامل مختلفی است. از طراحی واکنش‌گرا گرفته تا بهینه‌سازی سئو و تجربه کاربری.
//                                                     امیدوارم این مقاله برای شما مفید بوده باشد.
//                                                 </p>
//                                             </section>
//                                         </div>
//
//                                         {/* Tags */}
//                                         <div className="border-t border-gray-200 pt-8 mt-12">
//                                             <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
//                                                 <TagIcon className="w-5 h-5 text-blue-600" />
//                                                 برچسب‌ها
//                                             </h3>
//                                             <div className="flex flex-wrap gap-2">
//                                                 {article.tags.map(tag => (
//                                                     <Link
//                                                         key={tag}
//                                                         href={`/articles?tag=${encodeURIComponent(tag)}`}
//                                                         className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-blue-100 hover:text-blue-700 transition-colors"
//                                                     >
//                                                         #{tag}
//                                                     </Link>
//                                                 ))}
//                                             </div>
//                                         </div>
//
//                                         {/* Article Actions */}
//                                         <ArticleActions />
//                                     </div>
//                                 </article>
//
//                                 {/* Related Articles */}
//                                 {relatedArticles.length > 0 && (
//                                     <section className="mt-16">
//                                         <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
//                                             <SparklesIcon className="w-6 h-6 text-purple-500" />
//                                             مقالات مرتبط
//                                         </h2>
//                                         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//                                             {relatedArticles.map(relatedArticle => (
//                                                 <Link key={relatedArticle.id} href={`/articles/${relatedArticle.slug}`}>
//                                                     <article className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group">
//                                                         <div className="relative h-48 overflow-hidden">
//                                                             <Image
//                                                                 src={relatedArticle.image.main}
//                                                                 alt={relatedArticle.image.alt}
//                                                                 width={400}
//                                                                 height={200}
//                                                                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//                                                             />
//                                                         </div>
//                                                         <div className="p-4">
//                                                             <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
//                                                                 {relatedArticle.title}
//                                                             </h3>
//                                                             <p className="text-gray-600 text-sm line-clamp-2 mb-3">
//                                                                 {relatedArticle.excerpt}
//                                                             </p>
//                                                             <div className="flex items-center justify-between text-xs text-gray-500">
//                                                                 <span>{relatedArticle.readTime} دقیقه</span>
//                                                                 <span>{relatedArticle.publishedAt}</span>
//                                                             </div>
//                                                         </div>
//                                                     </article>
//                                                 </Link>
//                                             ))}
//                                         </div>
//                                     </section>
//                                 )}
//                             </div>
//                         </div>
//                     </div>
//                 </main>
//             </div>
//         </>
//     );
// }
//
// // Client Components for Interactive Features
// // 'use client';
//
// // import { useState } from 'react';
// // import {
// //     HeartIcon as HeartSolidIcon,
// //     BookmarkIcon as BookmarkSolidIcon,
// // } from '@heroicons/react/24/solid';
// //
// // function ArticleInteractions() {
// //     const [isLiked, setIsLiked] = useState(false);
// //     const [isBookmarked, setIsBookmarked] = useState(false);
// //     const [showShareMenu, setShowShareMenu] = useState(false);
// //
// //     const toggleLike = () => {
// //         setIsLiked(!isLiked);
// //     };
// //
// //     const toggleBookmark = () => {
// //         setIsBookmarked(!isBookmarked);
// //     };
// //
// //     const shareArticle = (platform: string) => {
// //         const url = encodeURIComponent(window.location.href);
// //         const title = encodeURIComponent(document.title);
// //
// //         const shareUrls = {
// //             twitter: `https://twitter.com/intent/tweet?text=${title}&url=${url}`,
// //             facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
// //             linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
// //             telegram: `https://t.me/share/url?url=${url}&text=${title}`,
// //             whatsapp: `https://wa.me/?text=${title} ${url}`,
// //             copy: url
// //         };
// //
// //         if (platform === 'copy') {
// //             navigator.clipboard.writeText(decodeURIComponent(url));
// //             alert('لینک کپی شد!');
// //         } else {
// //             window.open(shareUrls[platform as keyof typeof shareUrls], '_blank');
// //         }
// //
// //         setShowShareMenu(false);
// //     };
// //
// //     return (
// //         <div className="flex flex-wrap items-center justify-center gap-4">
// //             <button
// //                 onClick={toggleLike}
// //                 className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
// //                     isLiked
// //                         ? 'bg-red-500 text-white hover:bg-red-600'
// //                         : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
// //                 }`}
// //             >
// //                 {isLiked ? (
// //                     <HeartSolidIcon className="w-5 h-5" />
// //                 ) : (
// //                     <HeartIcon className="w-5 h-5" />
// //                 )}
// //                 <span>پسندیدن</span>
// //             </button>
// //
// //             <button
// //                 onClick={toggleBookmark}
// //                 className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
// //                     isBookmarked
// //                         ? 'bg-blue-500 text-white hover:bg-blue-600'
// //                         : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
// //                 }`}
// //             >
// //                 {isBookmarked ? (
// //                     <BookmarkSolidIcon className="w-5 h-5" />
// //                 ) : (
// //                     <BookmarkIcon className="w-5 h-5" />
// //                 )}
// //                 <span>ذخیره</span>
// //             </button>
// //
// //             <div className="relative">
// //                 <button
// //                     onClick={() => setShowShareMenu(!showShareMenu)}
// //                     className="flex items-center gap-2 px-6 py-3 bg-white/10 text-white hover:bg-white/20 border border-white/20 rounded-xl font-medium transition-all duration-300"
// //                 >
// //                     <ShareIcon className="w-5 h-5" />
// //                     <span>اشتراک‌گذاری</span>
// //                 </button>
// //
// //                 {showShareMenu && (
// //                     <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden z-50 min-w-48">
// //                         {[
// //                             { id: 'twitter', name: 'توییتر', color: 'hover:bg-blue-50 hover:text-blue-600' },
// //                             { id: 'facebook', name: 'فیسبوک', color: 'hover:bg-blue-50 hover:text-blue-600' },
// //                             { id: 'linkedin', name: 'لینکدین', color: 'hover:bg-blue-50 hover:text-blue-600' },
// //                             { id: 'telegram', name: 'تلگرام', color: 'hover:bg-blue-50 hover:text-blue-600' },
// //                             { id: 'whatsapp', name: 'واتساپ', color: 'hover:bg-green-50 hover:text-green-600' },
// //                             { id: 'copy', name: 'کپی لینک', color: 'hover:bg-gray-50 hover:text-gray-600' }
// //                         ].map(platform => (
// //                             <button
// //                                 key={platform.id}
// //                                 onClick={() => shareArticle(platform.id)}
// //                                 className={`w-full text-right px-4 py-3 text-gray-700 ${platform.color} transition-colors`}
// //                             >
// //                                 {platform.name}
// //                             </button>
// //                         ))}
// //                     </div>
// //                 )}
// //             </div>
// //         </div>
// //     );
// // }
// //
// // function ArticleActions() {
// //     const [showCommentForm, setShowCommentForm] = useState(false);
// //     const [newComment, setNewComment] = useState('');
// //
// //     const submitComment = () => {
// //         if (!newComment.trim()) return;
// //         // Handle comment submission
// //         setNewComment('');
// //         setShowCommentForm(false);
// //     };
// //
// //     return (
// //         <div className="border-t border-gray-200 pt-8 mt-8">
// //             <div className="flex flex-wrap gap-4 mb-8">
// //                 <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors">
// //                     <PencilSquareIcon className="w-4 h-4" />
// //                     نظر بدهید
// //                 </button>
// //                 <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors">
// //                     <PrinterIcon className="w-4 h-4" />
// //                     چاپ
// //                 </button>
// //                 <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors">
// //                     <FlagIcon className="w-4 h-4" />
// //                     گزارش
// //                 </button>
// //             </div>
// //
// //             {showCommentForm && (
// //                 <div className="bg-gray-50 rounded-xl p-6 mb-8">
// //                     <h4 className="font-bold text-gray-900 mb-4">نظر خود را بنویسید</h4>
// //                     <textarea
// //                         value={newComment}
// //                         onChange={(e) => setNewComment(e.target.value)}
// //                         placeholder="نظر شما..."
// //                         className="w-full h-32 p-4 border border-gray-300 rounded-xl resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
// //                     />
// //                     <div className="flex justify-end gap-3 mt-4">
// //                         <button
// //                             onClick={() => setShowCommentForm(false)}
// //                             className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
// //                         >
// //                             انصراف
// //                         </button>
// //                         <button
// //                             onClick={submitComment}
// //                             className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
// //                         >
// //                             ارسال نظر
// //                         </button>
// //                     </div>
// //                 </div>
// //             )}
// //         </div>
// //     );
// // }
