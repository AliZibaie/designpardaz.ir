// lib/data/articles.ts
import {
    CodeBracketIcon,
    PaintBrushIcon,
    MagnifyingGlassIcon,
    DevicePhoneMobileIcon,
    CubeIcon,
    PhotoIcon,
} from '@heroicons/react/24/outline';

// Types
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

    // Relations
    author: Author;
    category: Category;
    tags: string[];

    // Media
    image: {
        main: string;
        alt: string;
        gallery?: string[];
    };

    // SEO
    seo: {
        metaTitle: string;
        metaDescription: string;
        keywords: string[];
        canonicalUrl: string;
        ogImage: string;
    };

    // Interactive
    rating?: {
        average: number;
        count: number;
    };

    // Content Structure
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

// Authors Data
export const authors: Author[] = [
    {
        id: '1',
        name: 'علی زیبایی',
        slug: 'ali-zibaei',
        avatar: '/authors/ali-zibaei.jpg',
        role: 'برنامه‌نویس فول‌استک',
        bio: 'علی زیبایی با بیش از ۸ سال تجربه در توسعه نرم‌افزار، متخصص توسعه فول‌استک با React، Node.js، Python و MongoDB است.',
        expertise: ['React.js', 'Node.js', 'Python', 'MongoDB', 'PostgreSQL', 'Docker', 'AWS', 'TypeScript', 'Next.js', 'GraphQL'],
        experience: '8+ سال',
        social: {
            instagram: 'https://instagram.com/ali.zibaei.dev',
            twitter: 'https://twitter.com/alizibaei',
            linkedin: 'https://linkedin.com/in/ali-zibaei',
            github: 'https://github.com/alizibaei',
            website: 'https://alizibaei.dev'
        },
        stats: {
            articles: 47,
            followers: 12500,
            likes: 8900
        }
    },
    {
        id: '2',
        name: 'ماهان مفوض',
        slug: 'mahan-mafavez',
        avatar: '/authors/mahan-mafavez.jpg',
        role: 'طراح UI/UX و متخصص سئو',
        bio: 'ماهان مفوض طراح حرفه‌ای رابط کاربری با تخصص در Figma، Adobe XD و تجربه کاربری است.',
        expertise: ['Figma', 'Adobe XD', 'UI/UX Design', 'WordPress', 'SEO', 'Google Analytics', 'Photoshop', 'Illustrator', 'Webflow', 'HTML/CSS'],
        experience: '6+ سال',
        social: {
            instagram: 'https://instagram.com/mahan.designer',
            twitter: 'https://twitter.com/mahanmafavez',
            linkedin: 'https://linkedin.com/in/mahan-mafavez',
            website: 'https://mahandesign.ir'
        },
        stats: {
            articles: 38,
            followers: 9800,
            likes: 7200
        }
    },
    {
        id: '3',
        name: 'محمد گرافیک',
        slug: 'mammad-graphic',
        avatar: '/authors/mammad-graphic.jpg',
        role: 'گرافیست حرفه‌ای',
        bio: 'ممد متخصص طراحی گرافیک با بیش از ۵ سال تجربه در زمینه برندینگ، طراحی لوگو، و محتوای بصری است.',
        expertise: ['Adobe Photoshop', 'Adobe Illustrator', 'After Effects', 'InDesign', 'CorelDRAW', 'Branding', 'Logo Design', 'Print Design', 'Social Media Design'],
        experience: '5+ سال',
        social: {
            instagram: 'https://instagram.com/mammad.graphic',
            linkedin: 'https://linkedin.com/in/mammad-graphic',
            website: 'https://mammadgraphic.com'
        },
        stats: {
            articles: 29,
            followers: 7500,
            likes: 5800
        }
    },
    {
        id: '4',
        name: 'پارسا رنجگر',
        slug: 'parsa-ranjgar',
        avatar: '/authors/parsa-ranjgar.jpg',
        role: 'توسعه‌دهنده بک‌اند',
        bio: 'پارسا رنجگر متخصص توسعه بک‌اند با Django و Python است. او با بیش از ۷ سال تجربه در توسعه API یکی از بهترین توسعه‌دهندگان بک‌اند ایران محسوب می‌شود.',
        expertise: ['Python', 'Django', 'Django REST Framework', 'PostgreSQL', 'Redis', 'Celery', 'Docker', 'Kubernetes', 'FastAPI', 'GraphQL'],
        experience: '7+ سال',
        social: {
            instagram: 'https://instagram.com/parsa.backend',
            twitter: 'https://twitter.com/parsaranjgar',
            linkedin: 'https://linkedin.com/in/parsa-ranjgar',
            github: 'https://github.com/parsaranjgar'
        },
        stats: {
            articles: 35,
            followers: 8900,
            likes: 6700
        }
    }
];

// Categories Data
export const categories: Category[] = [
    {
        id: '1',
        name: 'برنامه‌نویسی وب',
        slug: 'web-development',
        description: 'آموزش‌های کامل توسعه وب با جدیدترین تکنولوژی‌ها',
        icon: CodeBracketIcon,
        color: 'from-blue-500 to-purple-600',
        count: 45
    },
    {
        id: '2',
        name: 'طراحی UI/UX',
        slug: 'ui-ux-design',
        description: 'اصول و تکنیک‌های طراحی رابط و تجربه کاربری',
        icon: PaintBrushIcon,
        color: 'from-pink-500 to-rose-600',
        count: 32
    },
    {
        id: '3',
        name: 'سئو و بازاریابی',
        slug: 'seo-marketing',
        description: 'بهینه‌سازی موتورهای جستجو و بازاریابی دیجیتال',
        icon: MagnifyingGlassIcon,
        color: 'from-green-500 to-emerald-600',
        count: 28
    },
    {
        id: '4',
        name: 'گرافیک و طراحی',
        slug: 'graphic-design',
        description: 'آموزش طراحی گرافیک، برندینگ و هویت بصری',
        icon: PhotoIcon,
        color: 'from-orange-500 to-red-600',
        count: 25
    },
    {
        id: '5',
        name: 'موبایل اپ',
        slug: 'mobile-development',
        description: 'توسعه اپلیکیشن‌های موبایل Android و iOS',
        icon: DevicePhoneMobileIcon,
        color: 'from-indigo-500 to-blue-600',
        count: 18
    },
    {
        id: '6',
        name: 'بک‌اند و API',
        slug: 'backend-api',
        description: 'توسعه سرور، API و سیستم‌های بک‌اند',
        icon: CubeIcon,
        color: 'from-purple-500 to-indigo-600',
        count: 22
    }
];

// Articles Data
export const articles: Article[] = [
    // علی زیبایی Articles
    {
        id: '1',
        title: 'راهنمای کامل یادگیری React.js از صفر تا صد',
        slug: 'complete-reactjs-guide-zero-to-hero',
        excerpt: 'یادگیری کامل React.js از مفاهیم پایه تا پیشرفته‌ترین تکنیک‌ها. در این مقاله جامع، همه چیزی که برای تسلط بر React نیاز دارید را خواهید آموخت.',
        content: `
      <h2>مقدمه‌ای بر React.js</h2>
      <p>React.js یکی از محبوب‌ترین و قدرتمندترین کتابخانه‌های JavaScript برای ساخت رابط‌های کاربری است که توسط Facebook توسعه یافته است.</p>

      <h2>مزایای استفاده از React</h2>
      <ul>
        <li><strong>Virtual DOM:</strong> عملکرد بالا با استفاده از Virtual DOM</li>
        <li><strong>Component-Based:</strong> قابلیت استفاده مجدد کامپوننت‌ها</li>
        <li><strong>Unidirectional Data Flow:</strong> مدیریت آسان state</li>
        <li><strong>Rich Ecosystem:</strong> اکوسیستم غنی و community فعال</li>
      </ul>

      <h2>نصب و راه‌اندازی</h2>
      <pre><code>npx create-react-app my-react-app
cd my-react-app
npm start</code></pre>

      <h2>اولین کامپوننت</h2>
      <pre><code>function Welcome(props) {
  return &lt;h1&gt;Hello, {props.name}!&lt;/h1&gt;;
}</code></pre>

      <h2>نتیجه‌گیری</h2>
      <p>React.js ابزاری قدرتمند برای ساخت رابط‌های کاربری مدرن است. با تمرین مداوم می‌توانید اپلیکیشن‌های فوق‌العاده‌ای بسازید.</p>
    `,
        publishedAt: '2024-01-15T10:00:00Z',
        updatedAt: '2024-01-20T15:30:00Z',
        readTime: 12,
        views: 15420,
        likes: 892,
        featured: true,
        trending: true,
        difficulty: 'متوسط',
        status: 'published',
        author: authors[0],
        category: categories[0],
        tags: ['React.js', 'JavaScript', 'Frontend', 'Hooks', 'Components', 'Virtual DOM', 'SPA'],
        image: {
            main: '/articles/react-complete-guide.jpg',
            alt: 'راهنمای کامل React.js',
            gallery: ['/articles/react-1.jpg', '/articles/react-2.jpg', '/articles/react-3.jpg']
        },
        seo: {
            metaTitle: 'راهنمای کامل یادگیری React.js از صفر تا صد | آموزش جامع ری‌اکت',
            metaDescription: 'یادگیری کامل React.js از مفاهیم پایه تا پیشرفته. آموزش Hooks، State Management، Router و بهینه‌سازی عملکرد.',
            keywords: ['React.js', 'آموزش React', 'Hooks', 'JavaScript', 'Frontend', 'Component', 'State Management'],
            canonicalUrl: 'https://designpardaz.ir/articles/complete-reactjs-guide-zero-to-hero',
            ogImage: '/articles/react-complete-guide-og.jpg'
        },
        rating: {
            average: 4.8,
            count: 156
        },
        faq: [
            {
                question: 'آیا React.js رایگان است؟',
                answer: 'بله، React.js کاملاً رایگان و متن‌باز است. این کتابخانه توسط Facebook توسعه یافته و تحت مجوز MIT منتشر شده است.'
            },
            {
                question: 'چقدر طول می‌کشد تا React را یاد بگیرم؟',
                answer: 'با تمرین روزانه ۲-۳ ساعت، در عرض ۳-۶ ماه می‌توانید به سطح قابل قبولی از React برسید.'
            }
        ],
        tableOfContents: [
            { id: 'intro', title: 'مقدمه‌ای بر React.js', level: 1 },
            { id: 'advantages', title: 'مزایای استفاده از React', level: 1 },
            { id: 'setup', title: 'نصب و راه‌اندازی', level: 1 },
            { id: 'first-component', title: 'اولین کامپوننت', level: 1 }
        ]
    },

    {
        id: '2',
        title: 'آموزش جامع Next.js 14 - فریمورک React برای تولید',
        slug: 'nextjs-14-complete-tutorial-production-ready',
        excerpt: 'Next.js 14 با App Router، Server Components و بهینه‌سازی‌های جدید. همه چیز درباره مدرن‌ترین فریمورک React برای ساخت اپلیکیشن‌های تولیدی.',
        content: `
      <h2>معرفی Next.js 14</h2>
      <p>Next.js 14 آخرین نسخه از قدرتمندترین فریمورک React است که توسط Vercel توسعه یافته است.</p>

      <h2>ویژگی‌های جدید Next.js 14</h2>
      <ul>
        <li><strong>App Router:</strong> سیستم مسیریابی جدید و قدرتمند</li>
        <li><strong>Server Components:</strong> رندر کردن در سمت سرور</li>
        <li><strong>Turbopack:</strong> bundler فوق‌سریع (Preview)</li>
        <li><strong>Improved Performance:</strong> بهبود ۵۳٪ سرعت cold start</li>
      </ul>

      <h2>نصب و راه‌اندازی</h2>
      <pre><code>npx create-next-app@latest my-next-app
cd my-next-app
npm run dev</code></pre>

      <h2>ساختار App Router</h2>
      <pre><code>app/
├── globals.css
├── layout.tsx
├── page.tsx
└── about/
    └── page.tsx</code></pre>

      <h2>نتیجه‌گیری</h2>
      <p>Next.js 14 فریمورکی کامل و production-ready برای ساخت اپلیکیشن‌های React است.</p>
    `,
        publishedAt: '2024-01-10T14:00:00Z',
        readTime: 15,
        views: 12350,
        likes: 743,
        featured: true,
        trending: false,
        difficulty: 'پیشرفته',
        status: 'published',
        author: authors[0],
        category: categories[0],
        tags: ['Next.js', 'React', 'SSR', 'App Router', 'Server Components', 'Full-Stack'],
        image: {
            main: '/articles/nextjs-14-guide.jpg',
            alt: 'آموزش جامع Next.js 14'
        },
        seo: {
            metaTitle: 'آموزش جامع Next.js 14 - App Router و Server Components | راهنمای کامل',
            metaDescription: 'یادگیری Next.js 14 با تمام ویژگی‌های جدید شامل App Router، Server Components، Server Actions و بهینه‌سازی‌های عملکرد.',
            keywords: ['Next.js 14', 'App Router', 'Server Components', 'React Framework', 'SSR', 'Full-Stack'],
            canonicalUrl: 'https://designpardaz.ir/articles/nextjs-14-complete-tutorial-production-ready',
            ogImage: '/articles/nextjs-14-guide-og.jpg'
        }
    },

    {
        id: '3',
        title: 'ساخت API قدرتمند با Node.js و Express',
        slug: 'nodejs-express-api-development-guide',
        excerpt: 'آموزش کامل ساخت RESTful API با Node.js، Express، MongoDB و JWT Authentication. از پایه تا دیپلوی کردن در production.',
        content: `
      <h2>مقدمه</h2>
      <p>Node.js و Express بهترین ترکیب برای ساخت API های سریع و مقیاس‌پذیر هستند.</p>

      <h2>نصب و راه‌اندازی</h2>
      <pre><code>npm init -y
npm install express mongoose dotenv bcryptjs jsonwebtoken
npm install -D nodemon</code></pre>

      <h2>ساختار پروژه</h2>
      <pre><code>project/
├── models/
├── routes/
├── middleware/
├── controllers/
└── app.js</code></pre>

      <h2>ایجاد سرور اصلی</h2>
      <pre><code>const express = require('express');
const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log('Server running on port 3000');
});</code></pre>

      <h2>نتیجه‌گیری</h2>
      <p>با Node.js و Express می‌توانید API های حرفه‌ای و مقیاس‌پذیر بسازید.</p>
    `,
        publishedAt: '2024-01-08T09:30:00Z',
        readTime: 18,
        views: 9875,
        likes: 567,
        featured: false,
        trending: true,
        difficulty: 'متوسط',
        status: 'published',
        author: authors[0],
        category: categories[5],
        tags: ['Node.js', 'Express', 'API', 'MongoDB', 'JWT', 'Authentication', 'Backend'],
        image: {
            main: '/articles/nodejs-express-api.jpg',
            alt: 'ساخت API با Node.js و Express'
        },
        seo: {
            metaTitle: 'آموزش ساخت API قدرتمند با Node.js و Express | راهنمای کامل',
            metaDescription: 'یادگیری ساخت RESTful API با Node.js، Express، MongoDB و JWT Authentication. از پایه تا دیپلوی در production.',
            keywords: ['Node.js', 'Express', 'API Development', 'MongoDB', 'JWT', 'Backend Development'],
            canonicalUrl: 'https://designpardaz.ir/articles/nodejs-express-api-development-guide',
            ogImage: '/articles/nodejs-express-api-og.jpg'
        }
    },

    {
        id: '4',
        title: 'TypeScript برای React Developer ها - راهنمای عملی',
        slug: 'typescript-react-developers-practical-guide',
        excerpt: 'یادگیری TypeScript مخصوص React Developer ها. از مفاهیم پایه تا پیشرفته، Type Safety، Generic ها و بهترین practices.',
        content: `
      <h2>چرا TypeScript؟</h2>
      <p>TypeScript جاوااسکریپت را با قابلیت Type Safety تقویت می‌کند و خطاها را در زمان compile شناسایی می‌کند.</p>

      <h2>نصب و تنظیمات</h2>
      <pre><code>npx create-react-app my-app --template typescript
# یا
npm install -D typescript @types/react @types/react-dom</code></pre>

      <h2>مفاهیم پایه</h2>
      <pre><code>// Types
let name: string = "علی";
let age: number = 25;
let isActive: boolean = true;

// Interface
interface User {
  id: number;
  name: string;
  email?: string; // optional
}</code></pre>

      <h2>TypeScript با React</h2>
      <pre><code>interface Props {
  title: string;
  count: number;
  onIncrement: () => void;
}

const Counter: React.FC<Props> = ({ title, count, onIncrement }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>Count: {count}</p>
      <button onClick={onIncrement}>Increment</button>
    </div>
  );
};</code></pre>

      <h2>Hooks با TypeScript</h2>
      <pre><code>const [user, setUser] = useState<User | null>(null);
const [loading, setLoading] = useState<boolean>(false);

const inputRef = useRef<HTMLInputElement>(null);</code></pre>

      <h2>نتیجه‌گیری</h2>
      <p>TypeScript کیفیت کد و تجربه توسعه را به طرز چشمگیری بهبود می‌دهد.</p>
    `,
        publishedAt: '2024-01-05T16:45:00Z',
        readTime: 14,
        views: 8945,
        likes: 456,
        featured: false,
        trending: false,
        difficulty: 'متوسط',
        status: 'published',
        author: authors[0],
        category: categories[0],
        tags: ['TypeScript', 'React', 'Type Safety', 'JavaScript', 'Frontend'],
        image: {
            main: '/articles/typescript-react-guide.jpg',
            alt: 'TypeScript برای React'
        },
        seo: {
            metaTitle: 'آموزش TypeScript برای React Developer ها | راهنمای عملی و کاربردی',
            metaDescription: 'یادگیری TypeScript مخصوص React Developer ها. از مفاهیم پایه تا پیشرفته، Type Safety، Generic ها و بهترین practices.',
            keywords: ['TypeScript', 'React TypeScript', 'Type Safety', 'JavaScript', 'Frontend Development'],
            canonicalUrl: 'https://designpardaz.ir/articles/typescript-react-developers-practical-guide',
            ogImage: '/articles/typescript-react-guide-og.jpg'
        }
    },

    {
        id: '5',
        title: 'State Management در React با Zustand',
        slug: 'react-state-management-zustand-guide',
        excerpt: 'آموزش مدیریت state در React با Zustand - جایگزین سبک و قدرتمند Redux. شامل مثال‌های عملی و بهترین practices.',
        content: `
      <h2>معرفی Zustand</h2>
      <p>Zustand یک کتابخانه سبک و ساده برای مدیریت state در React است که جایگزین عالی Redux محسوب می‌شود.</p>

      <h2>مزایای Zustand</h2>
      <ul>
        <li><strong>سادگی:</strong> API ساده و minimalist</li>
        <li><strong>سبکی:</strong> تنها 2.2kb حجم</li>
        <li><strong>TypeScript:</strong> پشتیبانی کامل از TypeScript</li>
        <li><strong>بدون Boilerplate:</strong> کمترین کد اضافی</li>
      </ul>

      <h2>نصب</h2>
      <pre><code>npm install zustand</code></pre>

      <h2>ایجاد Store</h2>
      <pre><code>import { create } from 'zustand'

interface CounterState {
  count: number
  increment: () => void
  decrement: () => void
  reset: () => void
}

const useCounterStore = create<CounterState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}))</code></pre>

      <h2>استفاده در Component</h2>
      <pre><code>const Counter = () => {
  const { count, increment, decrement, reset } = useCounterStore()

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}</code></pre>

      <h2>Persist Store</h2>
      <pre><code>import { persist, createJSONStorage } from 'zustand/middleware'

const useUserStore = create(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      logout: () => set({ user: null }),
    }),
    {
      name: 'user-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
)</code></pre>

      <h2>نتیجه‌گیری</h2>
      <p>Zustand راه‌حل ساده و قدرتمندی برای مدیریت state در اپلیکیشن‌های React است.</p>
    `,
        publishedAt: '2024-01-03T12:20:00Z',
        readTime: 11,
        views: 7234,
        likes: 389,
        featured: false,
        trending: true,
        difficulty: 'متوسط',
        status: 'published',
        author: authors[0],
        category: categories[0],
        tags: ['React', 'State Management', 'Zustand', 'Redux Alternative', 'JavaScript'],
        image: {
            main: '/articles/react-zustand-guide.jpg',
            alt: 'State Management با Zustand'
        },
        seo: {
            metaTitle: 'آموزش State Management در React با Zustand | جایگزین Redux',
            metaDescription: 'یادگیری مدیریت state در React با Zustand - جایگزین سبک و قدرتمند Redux. شامل مثال‌های عملی و بهترین practices.',
            keywords: ['Zustand', 'React State Management', 'Redux Alternative', 'State Management', 'React Hooks'],
            canonicalUrl: 'https://designpardaz.ir/articles/react-state-management-zustand-guide',
            ogImage: '/articles/react-zustand-guide-og.jpg'
        }
    },

    // ماهان مفوض Articles
    {
        id: '6',
        title: 'اصول طراحی UI/UX در سال 2024 - راهنمای عملی',
        slug: 'ui-ux-design-principles-2024-practical-guide',
        excerpt: 'بهترین اصول و تکنیک‌های طراحی رابط و تجربه کاربری در سال 2024. از Design System تا Accessibility و همه چیز بین این دو.',
        content: `
      <h2>مقدمه‌ای بر UI/UX Design</h2>
      <p>طراحی رابط کاربری (UI) و تجربه کاربری (UX) دو بخش جدایی‌ناپذیر از فرآیند طراحی محصولات دیجیتال هستند.</p>

      <h2>اصول بنیادی UI Design</h2>
      <ul>
        <li><strong>Consistency:</strong> حفظ سازگاری در تمام بخش‌های طراحی</li>
        <li><strong>Hierarchy:</strong> ایجاد ترتیب بصری مناسب</li>
        <li><strong>Contrast:</strong> استفاده از تضاد برای تأکید</li>
        <li><strong>Alignment:</strong> چیدمان منظم عناصر</li>
      </ul>

      <h2>Design System</h2>
      <pre><code>// رنگ‌های اصلی
$primary: #3b82f6;
$secondary: #64748b;
$success: #10b981;
$warning: #f59e0b;</code></pre>

      <h2>Mobile-First Design</h2>
      <p>طراحی با اولویت موبایل و بهبود تدریجی برای صفحات بزرگ‌تر.</p>

      <h2>نتیجه‌گیری</h2>
      <p>طراحی UI/UX موفق نیازمند ترکیب اصول کلاسیک با ترندهای جدید و تمرکز بر تجربه کاربری است.</p>
    `,
        publishedAt: '2024-01-12T09:00:00Z',
        readTime: 18,
        views: 18750,
        likes: 1024,
        featured: true,
        trending: true,
        difficulty: 'متوسط',
        status: 'published',
        author: authors[1],
        category: categories[1],
        tags: ['UI Design', 'UX Design', 'Figma', 'Design System', 'Accessibility', 'Mobile First'],
        image: {
            main: '/articles/ui-ux-principles-2024.jpg',
            alt: 'اصول طراحی UI/UX در سال 2024'
        },
        seo: {
            metaTitle: 'اصول طراحی UI/UX در سال 2024 | راهنمای عملی و کامل',
            metaDescription: 'یادگیری بهترین اصول و تکنیک‌های طراحی رابط و تجربه کاربری در 2024. Design System، Accessibility، Mobile First و ترندهای جدید.',
            keywords: ['UI Design', 'UX Design', 'طراحی رابط کاربری', 'تجربه کاربری', 'Figma', 'Design System'],
            canonicalUrl: 'https://designpardaz.ir/articles/ui-ux-design-principles-2024-practical-guide',
            ogImage: '/articles/ui-ux-principles-2024-og.jpg'
        },
        rating: {
            average: 4.9,
            count: 203
        }
    },

    {
        id: '7',
        title: 'راهنمای کامل سئو در سال 2024 - از مبتدی تا حرفه‌ای',
        slug: 'complete-seo-guide-2024-beginner-to-expert',
        excerpt: 'همه چیز درباره سئو در سال 2024: از مفاهیم پایه تا تکنیک‌های پیشرفته. آموزش Technical SEO، Content Strategy، Core Web Vitals و الگوریتم‌های جدید گوگل.',
        content: `
      <h2>مقدمه‌ای بر سئو در سال 2024</h2>
      <p>بهینه‌سازی موتورهای جستجو (SEO) در سال 2024 با تغییرات گسترده‌ای همراه بوده است.</p>

      <h2>تغییرات مهم در سئو 2024</h2>
      <ul>
        <li><strong>AI Integration:</strong> ادغام هوش مصنوعی در الگوریتم‌ها</li>
        <li><strong>E-E-A-T:</strong> اضافه شدن Experience به E-A-T</li>
        <li><strong>Core Web Vitals 2.0:</strong> معیارهای جدید سرعت</li>
        <li><strong>Helpful Content Update:</strong> تأکید بر محتوای مفید</li>
      </ul>

      <h2>Technical SEO</h2>
      <pre><code>// بهینه‌سازی Core Web Vitals
&lt;link rel="preload" href="hero-image.jpg" as="image"&gt;
&lt;img src="hero-image.jpg" loading="eager" fetchpriority="high"&gt;</code></pre>

      <h2>Content Strategy</h2>
      <p>تولید محتوای مفید، اصیل و پاسخ‌دهنده به نیازهای کاربران.</p>

      <h2>نتیجه‌گیری</h2>
      <p>سئو در سال 2024 ترکیبی از دانش فنی، تولید محتوای باکیفیت، و درک عمیق از نیازهای کاربران است.</p>
    `,
        publishedAt: '2024-01-08T11:30:00Z',
        updatedAt: '2024-01-15T16:45:00Z',
        readTime: 22,
        views: 25680,
        likes: 1456,
        featured: true,
        trending: true,
        difficulty: 'پیشرفته',
        status: 'published',
        author: authors[1],
        category: categories[2],
        tags: ['SEO', 'Google', 'Technical SEO', 'Content Strategy', 'Core Web Vitals', 'Local SEO'],
        image: {
            main: '/articles/seo-guide-2024.jpg',
            alt: 'راهنمای کامل سئو در سال 2024'
        },
        seo: {
            metaTitle: 'راهنمای کامل سئو 2024 | 47 تکنیک پیشرفته و کاربردی',
            metaDescription: 'یادگیری کامل سئو در سال 2024 شامل Technical SEO، Content Strategy، Core Web Vitals و تکنیک‌های پیشرفته.',
            keywords: ['سئو 2024', 'Technical SEO', 'Google SEO', 'بهینه سازی سایت', 'Core Web Vitals', 'محتوای سئو'],
            canonicalUrl: 'https://designpardaz.ir/articles/complete-seo-guide-2024-beginner-to-expert',
            ogImage: '/articles/seo-guide-2024-og.jpg'
        },
        rating: {
            average: 4.7,
            count: 312
        },
        faq: [
            {
                question: 'سئو چقدر طول می‌کشد تا نتیجه بدهد؟',
                answer: 'معمولاً 3-6 ماه طول می‌کشد تا نتایج قابل توجه سئو مشاهده شود.'
            },
            {
                question: 'آیا سئو رایگان است؟',
                answer: 'سئو به خودی خود رایگان است، اما نیاز به زمان، تخصص و گاهی ابزارهای پولی دارد.'
            }
        ]
    },

    {
        id: '8',
        title: 'طراحی وب‌سایت با WordPress - گام به گام',
        slug: 'wordpress-website-design-step-by-step',
        excerpt: 'آموزش کامل طراحی وب‌سایت حرفه‌ای با WordPress. از انتخاب هاست تا سفارشی‌سازی تم و بهینه‌سازی سئو.',
        content: `
      <h2>مقدمه</h2>
      <p>WordPress محبوب‌ترین سیستم مدیریت محتوا در جهان است که بیش از 40% وب‌سایت‌های دنیا را قدرت می‌دهد.</p>

      <h2>مراحل ساخت وب‌سایت</h2>
      <ol>
        <li>انتخاب دامنه و هاست</li>
        <li>نصب WordPress</li>
        <li>انتخاب و نصب تم</li>
        <li>نصب پلاگین‌های ضروری</li>
        <li>ایجاد صفحات اصلی</li>
        <li>بهینه‌سازی سئو</li>
      </ol>

      <h2>پلاگین‌های پیشنهادی</h2>
      <ul>
        <li><strong>Yoast SEO:</strong> بهینه‌سازی سئو</li>
        <li><strong>Elementor:</strong> صفحه‌ساز قدرتمند</li>
        <li><strong>WP Rocket:</strong> بهینه‌سازی سرعت</li>
        <li><strong>Wordfence:</strong> امنیت وب‌سایت</li>
      </ul>

      <h2>سفارشی‌سازی تم</h2>
      <pre><code>// functions.php
function my_theme_setup() {
    add_theme_support('post-thumbnails');
    add_theme_support('custom-logo');
}
add_action('after_setup_theme', 'my_theme_setup');</code></pre>

      <h2>نتیجه‌گیری</h2>
      <p>با WordPress می‌توانید وب‌سایت‌های حرفه‌ای و زیبا بسازید بدون نیاز به دانش برنامه‌نویسی.</p>
    `,
        publishedAt: '2024-01-06T14:20:00Z',
        readTime: 16,
        views: 14250,
        likes: 789,
        featured: false,
        trending: true,
        difficulty: 'مبتدی',
        status: 'published',
        author: authors[1],
        category: categories[0],
        tags: ['WordPress', 'Web Design', 'CMS', 'Theme', 'Plugin', 'SEO'],
        image: {
            main: '/articles/wordpress-design-guide.jpg',
            alt: 'طراحی وب‌سایت با WordPress'
        },
        seo: {
            metaTitle: 'آموزش طراحی وب‌سایت با WordPress | راهنمای گام به گام',
            metaDescription: 'یادگیری کامل طراحی وب‌سایت حرفه‌ای با WordPress. از انتخاب هاست تا سفارشی‌سازی تم و بهینه‌سازی سئو.',
            keywords: ['WordPress', 'طراحی وب سایت', 'CMS', 'تم وردپرس', 'پلاگین', 'سئو'],
            canonicalUrl: 'https://designpardaz.ir/articles/wordpress-website-design-step-by-step',
            ogImage: '/articles/wordpress-design-guide-og.jpg'
        }
    },

    {
        id: '9',
        title: 'تسلط بر Figma - ابزار طراحی حرفه‌ای',
        slug: 'figma-mastery-professional-design-tool',
        excerpt: 'راهنمای جامع یادگیری Figma از صفر تا صد. طراحی رابط کاربری، پروتوتایپ، Design System و همکاری تیمی.',
        content: `
      <h2>معرفی Figma</h2>
      <p>Figma محبوب‌ترین ابزار طراحی رابط کاربری است که به صورت آنلاین کار می‌کند و امکان همکاری real-time را فراهم می‌کند.</p>

      <h2>مزایای Figma</h2>
      <ul>
        <li><strong>Cloud-based:</strong> دسترسی از هر مکان</li>
        <li><strong>Real-time Collaboration:</strong> همکاری همزمان</li>
        <li><strong>Free Plan:</strong> امکانات رایگان قدرتمند</li>
        <li><strong>Cross-platform:</strong> کار روی تمام سیستم‌عامل‌ها</li>
      </ul>

      <h2>ابزارهای اصلی</h2>
      <ul>
        <li><strong>Frame (F):</strong> ایجاد صفحه یا کامپوننت</li>
        <li><strong>Rectangle (R):</strong> رسم مستطیل</li>
        <li><strong>Text (T):</strong> اضافه کردن متن</li>
        <li><strong>Pen (P):</strong> رسم شکل‌های پیچیده</li>
      </ul>

      <h2>کار با Components</h2>
      <pre><code>// ایجاد Component
1. انتخاب عنصر
2. Ctrl + Alt + K (Windows) یا Cmd + Option + K (Mac)
3. تغییر نام Component
4. استفاده در صفحات مختلف</code></pre>

      <h2>Auto Layout</h2>
      <p>Auto Layout امکان ایجاد طراحی‌های responsive و منعطف را فراهم می‌کند.</p>

      <h2>Prototyping</h2>
      <p>ایجاد نمونه‌های تعاملی برای تست تجربه کاربری.</p>

      <h2>نتیجه‌گیری</h2>
      <p>Figma ابزاری قدرتمند و کامل برای طراحی رابط کاربری است که یادگیری آن برای هر طراحی ضروری است.</p>
    `,
        publishedAt: '2024-01-04T12:15:00Z',
        readTime: 20,
        views: 11890,
        likes: 678,
        featured: false,
        trending: false,
        difficulty: 'متوسط',
        status: 'published',
        author: authors[1],
        category: categories[1],
        tags: ['Figma', 'UI Design', 'Prototype', 'Design System', 'Collaboration', 'Auto Layout'],
        image: {
            main: '/articles/figma-mastery-guide.jpg',
            alt: 'تسلط بر Figma'
        },
        seo: {
            metaTitle: 'آموزش کامل Figma | تسلط بر ابزار طراحی حرفه‌ای',
            metaDescription: 'راهنمای جامع یادگیری Figma از صفر تا صد. طراحی رابط کاربری، پروتوتایپ، Design System و همکاری تیمی.',
            keywords: ['Figma', 'آموزش Figma', 'طراحی رابط کاربری', 'پروتوتایپ', 'Design System'],
            canonicalUrl: 'https://designpardaz.ir/articles/figma-mastery-professional-design-tool',
            ogImage: '/articles/figma-mastery-guide-og.jpg'
        }
    },

    {
        id: '10',
        title: 'بهینه‌سازی Core Web Vitals - سرعت وب‌سایت',
        slug: 'core-web-vitals-optimization-website-speed',
        excerpt: 'راهنمای کامل بهینه‌سازی Core Web Vitals برای بهبود سرعت وب‌سایت و رتبه بهتر در گوگل. LCP، FID، CLS و همه معیارها.',
        content: `
      <h2>معرفی Core Web Vitals</h2>
      <p>Core Web Vitals معیارهای مهم گوگل برای سنجش تجربه کاربری و سرعت وب‌سایت هستند که تأثیر مستقیم بر رنکینگ دارند.</p>

      <h2>سه معیار اصلی</h2>
      <ul>
        <li><strong>LCP (Largest Contentful Paint):</strong> سرعت بارگذاری محتوای اصلی</li>
        <li><strong>FID (First Input Delay):</strong> زمان واکنش به اولین تعامل</li>
        <li><strong>CLS (Cumulative Layout Shift):</strong> پایداری بصری صفحه</li>
      </ul>

      <h2>بهینه‌سازی LCP</h2>
      <pre><code>// Preload کردن منابع مهم
&lt;link rel="preload" href="hero-image.jpg" as="image"&gt;
&lt;link rel="preload" href="main.css" as="style"&gt;

// استفاده از CDN
&lt;img src="https://cdn.example.com/image.jpg" 
     loading="eager" 
     fetchpriority="high"&gt;</code></pre>

      <h2>بهبود FID</h2>
      <pre><code>// Code Splitting
const LazyComponent = lazy(() => import('./LazyComponent'));

// Web Workers برای کارهای سنگین
const worker = new Worker('heavy-task.js');
worker.postMessage(data);</code></pre>

      <h2>کاهش CLS</h2>
      <pre><code>// تعیین اندازه تصاویر
&lt;img src="image.jpg" 
     width="400" 
     height="300" 
     style="aspect-ratio: 4/3;"&gt;

// Reserve کردن فضا برای تبلیغات
.ad-container {
  min-height: 250px;
  background: #f0f0f0;
}</code></pre>

      <h2>ابزارهای اندازه‌گیری</h2>
      <ul>
        <li><strong>PageSpeed Insights:</strong> تست آنلاین گوگل</li>
        <li><strong>Chrome DevTools:</strong> Lighthouse</li>
        <li><strong>GTmetrix:</strong> تست جامع عملکرد</li>
        <li><strong>WebPageTest:</strong> تست دقیق سرعت</li>
      </ul>

      <h2>نتیجه‌گیری</h2>
      <p>بهینه‌سازی Core Web Vitals نه تنها رتبه سئو را بهبود می‌دهد بلکه تجربه کاربری را نیز افزایش می‌دهد.</p>
    `,
        publishedAt: '2024-01-02T15:30:00Z',
        readTime: 13,
        views: 9876,
        likes: 543,
        featured: false,
        trending: true,
        difficulty: 'پیشرفته',
        status: 'published',
        author: authors[1],
        category: categories[2],
        tags: ['Core Web Vitals', 'Page Speed', 'SEO', 'Performance', 'Google', 'Website Optimization'],
        image: {
            main: '/articles/core-web-vitals-guide.jpg',
            alt: 'بهینه‌سازی Core Web Vitals'
        },
        seo: {
            metaTitle: 'بهینه‌سازی Core Web Vitals | راهنمای کامل سرعت وب‌سایت',
            metaDescription: 'آموزش کامل بهینه‌سازی Core Web Vitals برای بهبود سرعت وب‌سایت و رتبه بهتر در گوگل. LCP، FID، CLS و همه معیارها.',
            keywords: ['Core Web Vitals', 'سرعت وب سایت', 'بهینه سازی', 'LCP', 'FID', 'CLS', 'PageSpeed'],
            canonicalUrl: 'https://designpardaz.ir/articles/core-web-vitals-optimization-website-speed',
            ogImage: '/articles/core-web-vitals-guide-og.jpg'
        }
    },

    // محمد گرافیک Articles
    {
        id: '11',
        title: 'راهنمای جامع Adobe Photoshop 2024 - از مبتدی تا حرفه‌ای',
        slug: 'complete-adobe-photoshop-2024-guide-beginner-to-pro',
        excerpt: 'یادگیری کامل Adobe Photoshop 2024 با ویژگی‌های جدید AI، ابزارهای پیشرفته، تکنیک‌های حرفه‌ای و پروژه‌های عملی برای طراحان گرافیک.',
        content: `
      <h2>معرفی Adobe Photoshop 2024</h2>
      <p>Adobe Photoshop 2024 با معرفی قابلیت‌های هوش مصنوعی انقلابی، ابزارهای جدید و بهبود عملکرد، استاندارد جدیدی در ویرایش عکس و طراحی گرافیک تعریف کرده است.</p>

      <h2>ویژگی‌های جدید Photoshop 2024</h2>
      <ul>
        <li><strong>Generative AI Fill:</strong> پر کردن هوشمند با هوش مصنوعی</li>
        <li><strong>Enhanced Remove Tool:</strong> حذف بهتر اشیاء</li>
        <li><strong>Neural Filters 2.0:</strong> فیلترهای مبتنی بر AI</li>
        <li><strong>Improved Sky Replacement:</strong> جایگزینی آسمان بهبودیافته</li>
      </ul>

      <h2>محیط کاری Photoshop</h2>
      <ul>
        <li><strong>Tools Panel:</strong> جعبه ابزارها</li>
        <li><strong>Layers Panel:</strong> مدیریت لایه‌ها</li>
        <li><strong>Properties Panel:</strong> تنظیمات ابزار</li>
        <li><strong>History Panel:</strong> تاریخچه تغییرات</li>
      </ul>

      <h2>ابزارهای Selection</h2>
      <pre><code>// کلیدهای میانبر مهم
M: Marquee Tools
L: Lasso Tools  
W: Magic Wand / Quick Selection
Ctrl + A: انتخاب همه
Ctrl + D: لغو انتخاب</code></pre>

      <h2>کار با Layers</h2>
      <p>Layers قلب Photoshop هستند و امکان ویرایش غیرمخرب را فراهم می‌کنند.</p>

      <h2>نتیجه‌گیری</h2>
      <p>Adobe Photoshop 2024 ابزاری قدرتمند و جامع برای طراحی گرافیک و ویرایش عکس است.</p>
    `,
        publishedAt: '2024-01-05T13:00:00Z',
        readTime: 25,
        views: 19450,
        likes: 967,
        featured: false,
        trending: true,
        difficulty: 'متوسط',
        status: 'published',
        author: authors[2],
        category: categories[3],
        tags: ['Adobe Photoshop', 'Graphic Design', 'Photo Editing', 'AI Features', 'Digital Art'],
        image: {
            main: '/articles/photoshop-2024-guide.jpg',
            alt: 'راهنمای جامع Adobe Photoshop 2024'
        },
        seo: {
            metaTitle: 'راهنمای جامع Adobe Photoshop 2024 | آموزش کامل فتوشاپ',
            metaDescription: 'یادگیری کامل Adobe Photoshop 2024 با ویژگی‌های جدید AI، ابزارهای پیشرفته و تکنیک‌های حرفه‌ای. از مبتدی تا حرفه‌ای.',
            keywords: ['Adobe Photoshop 2024', 'آموزش فتوشاپ', 'طراحی گرافیک', 'ویرایش عکس', 'AI فتوشاپ'],
            canonicalUrl: 'https://designpardaz.ir/articles/complete-adobe-photoshop-2024-guide-beginner-to-pro',
            ogImage: '/articles/photoshop-2024-guide-og.jpg'
        }
    },

    {
        id: '12',
        title: 'آموزش Adobe Illustrator - طراحی وکتور حرفه‌ای',
        slug: 'adobe-illustrator-vector-design-tutorial',
        excerpt: 'یادگیری کامل Adobe Illustrator برای طراحی لوگو، آیکون، ایلوستریشن و گرافیک وکتور. از ابزارهای پایه تا تکنیک‌های پیشرفته.',
        content: `
      <h2>معرفی Adobe Illustrator</h2>
      <p>Adobe Illustrator استاندارد صنعت برای طراحی گرافیک وکتور است که امکان ایجاد طراحی‌های قابل تغییر اندازه بدون از دست دادن کیفیت را فراهم می‌کند.</p>

      <h2>مزایای طراحی وکتور</h2>
      <ul>
        <li><strong>Scalability:</strong> قابلیت تغییر اندازه بدون از دست دادن کیفیت</li>
        <li><strong>Small File Size:</strong> اندازه فایل کوچک</li>
        <li><strong>Editability:</strong> قابلیت ویرایش آسان</li>
        <li><strong>Print Quality:</strong> کیفیت چاپ عالی</li>
      </ul>

      <h2>ابزارهای اصلی</h2>
      <ul>
        <li><strong>Selection Tool (V):</strong> انتخاب و جابجایی</li>
        <li><strong>Pen Tool (P):</strong> رسم مسیرهای دقیق</li>
        <li><strong>Shape Tools:</strong> اشکال هندسی</li>
        <li><strong>Type Tool (T):</strong> کار با متن</li>
      </ul>

      <h2>کار با Pen Tool</h2>
      <pre><code>// تکنیک‌های Pen Tool
1. کلیک برای نقاط مستقیم
2. کشیدن برای نقاط منحنی
3. Alt + کلیک برای تغییر جهت
4. Space برای جابجایی موقت</code></pre>

      <h2>طراحی لوگو</h2>
      <ol>
        <li>تحقیق و ایده‌پردازی</li>
        <li>اسکچ دستی</li>
        <li>طراحی در Illustrator</li>
        <li>انتخاب رنگ‌ها</li>
        <li>Typography</li>
        <li>تست در اندازه‌های مختلف</li>
      </ol>

      <h2>نتیجه‌گیری</h2>
      <p>Adobe Illustrator ابزار ضروری هر طراح گرافیک است که تسلط بر آن دروازه ورود به دنیای طراحی حرفه‌ای محسوب می‌شود.</p>
    `,
        publishedAt: '2024-01-03T10:30:00Z',
        readTime: 19,
        views: 13678,
        likes: 743,
        featured: false,
        trending: false,
        difficulty: 'متوسط',
        status: 'published',
        author: authors[2],
        category: categories[3],
        tags: ['Adobe Illustrator', 'Vector Design', 'Logo Design', 'Icon Design', 'Illustration'],
        image: {
            main: '/articles/illustrator-vector-design.jpg',
            alt: 'آموزش Adobe Illustrator'
        },
        seo: {
            metaTitle: 'آموزش Adobe Illustrator | طراحی وکتور و لوگوی حرفه‌ای',
            metaDescription: 'یادگیری کامل Adobe Illustrator برای طراحی لوگو، آیکون، ایلوستریشن و گرافیک وکتور. از ابزارهای پایه تا تکنیک‌های پیشرفته.',
            keywords: ['Adobe Illustrator', 'طراحی وکتور', 'طراحی لوگو', 'آیکون', 'ایلوستریشن'],
            canonicalUrl: 'https://designpardaz.ir/articles/adobe-illustrator-vector-design-tutorial',
            ogImage: '/articles/illustrator-vector-design-og.jpg'
        }
    },

    {
        id: '13',
        title: 'اصول طراحی لوگو - از ایده تا اجرا',
        slug: 'logo-design-principles-idea-to-execution',
        excerpt: 'راهنمای کامل طراحی لوگو حرفه‌ای. از تحقیق و ایده‌پردازی تا اجرای نهایی و تحویل فایل‌های مختلف به کارفرما.',
        content: `
      <h2>اهمیت لوگو در برندینگ</h2>
      <p>لوگو اولین و مهم‌ترین نقطه تماس بین برند و مخاطب است که هویت بصری کسب‌وکار را تعریف می‌کند.</p>

      <h2>انواع لوگو</h2>
      <ul>
        <li><strong>Wordmark:</strong> لوگوی متنی (مثل Google)</li>
        <li><strong>Lettermark:</strong> لوگوی حروفی (مثل IBM)</li>
        <li><strong>Symbol/Icon:</strong> نماد (مثل Apple)</li>
        <li><strong>Combination:</strong> ترکیبی (مثل Pepsi)</li>
        <li><strong>Emblem:</strong> نشان (مثل Starbucks)</li>
      </ul>

      <h2>فرآیند طراحی لوگو</h2>
      <ol>
        <li><strong>Brief و تحقیق:</strong> درک کسب‌وکار و مخاطب</li>
        <li><strong>رقیب‌شناسی:</strong> بررسی رقبا</li>
        <li><strong>Mood Board:</strong> جمع‌آوری الهام</li>
        <li><strong>اسکچ:</strong> طراحی دستی اولیه</li>
        <li><strong>طراحی دیجیتال:</strong> اجرا در نرم‌افزار</li>
        <li><strong>ارزیابی و بازنگری:</strong> بهبود طراحی</li>
        <li><strong>ارائه نهایی:</strong> تحویل به کارفرما</li>
      </ol>

      <h2>اصول طراحی لوگوی موفق</h2>
      <ul>
        <li><strong>Simple:</strong> سادگی و وضوح</li>
        <li><strong>Memorable:</strong> به یادماندنی</li>
        <li><strong>Timeless:</strong> ماندگار در زمان</li>
        <li><strong>Versatile:</strong> کاربرد در محیط‌های مختلف</li>
        <li><strong>Appropriate:</strong> متناسب با کسب‌وکار</li>
      </ul>

      <h2>انتخاب رنگ</h2>
      <pre><code>// روانشناسی رنگ‌ها
قرمز: انرژی، هیجان، قدرت
آبی: اعتماد، آرامش، حرفه‌ای بودن  
سبز: طبیعت، رشد، سلامتی
زرد: شادی، خلاقیت، انرژی
نارنجی: گرما، دوستانه، جوانی
بنفش: لوکس، خلاقیت، رؤیایی</code></pre>

      <h2>نتیجه‌گیری</h2>
      <p>طراحی لوگوی موفق نیازمند درک عمیق از برند، مخاطب و اصول طراحی است. صبر و دقت در فرآیند طراحی کلید موفقیت است.</p>
    `,
        publishedAt: '2024-01-02T15:45:00Z',
        readTime: 17,
        views: 16240,
        likes: 892,
        featured: true,
        trending: false,
        difficulty: 'متوسط',
        status: 'published',
        author: authors[2],
        category: categories[3],
        tags: ['Logo Design', 'Branding', 'Visual Identity', 'Adobe Illustrator', 'Typography', 'Color Theory'],
        image: {
            main: '/articles/logo-design-principles.jpg',
            alt: 'اصول طراحی لوگو'
        },
        seo: {
            metaTitle: 'اصول طراحی لوگو حرفه‌ای | راهنمای کامل از ایده تا اجرا',
            metaDescription: 'یادگیری کامل طراحی لوگو حرفه‌ای. از تحقیق و ایده‌پردازی تا اجرای نهایی و تحویل فایل‌های مختلف به کارفرما.',
            keywords: ['طراحی لوگو', 'برندینگ', 'هویت بصری', 'لوگو حرفه ای', 'طراحی گرافیک'],
            canonicalUrl: 'https://designpardaz.ir/articles/logo-design-principles-idea-to-execution',
            ogImage: '/articles/logo-design-principles-og.jpg'
        }
    },

    {
        id: '14',
        title: 'طراحی پوستر تبلیغاتی - تکنیک‌های حرفه‌ای',
        slug: 'advertising-poster-design-professional-techniques',
        excerpt: 'آموزش طراحی پوستر تبلیغاتی جذاب و مؤثر. از اصول composition تا typography، color theory و تکنیک‌های چشم‌نواز.',
        content: `
      <h2>اهمیت پوستر در تبلیغات</h2>
      <p>پوستر یکی از قدرتمندترین ابزارهای ارتباط بصری است که در مدت کوتاه باید پیام را به مخاطب منتقل کند.</p>

      <h2>انواع پوستر</h2>
      <ul>
        <li><strong>تجاری:</strong> تبلیغ محصولات و خدمات</li>
        <li><strong>فرهنگی:</strong> رویدادها و نمایش‌ها</li>
        <li><strong>آموزشی:</strong> انتقال اطلاعات</li>
        <li><strong>اجتماعی:</strong> آگاهی‌رسانی</li>
      </ul>

      <h2>اصول Composition</h2>
      <ul>
        <li><strong>Rule of Thirds:</strong> قانون یک‌سوم</li>
        <li><strong>Focal Point:</strong> نقطه کانونی</li>
        <li><strong>Visual Hierarchy:</strong> سلسله‌مراتب بصری</li>
        <li><strong>Balance:</strong> تعادل عناصر</li>
        <li><strong>Rhythm:</strong> ریتم و تکرار</li>
      </ul>

      <h2>کار با Typography</h2>
      <pre><code>// سلسله‌مراتب متنی
Headline: 48-72pt - توجه‌جلب اصلی
Subheading: 24-36pt - توضیح مکمل  
Body Text: 12-18pt - جزئیات
Call to Action: 18-24pt - فراخوان عمل</code></pre>

      <h2>نتیجه‌گیری</h2>
      <p>طراحی پوستر موفق ترکیبی از خلاقیت، دانش فنی و درک مخاطب است. تمرین مداوم و مطالعه کارهای برتر کلید پیشرفت است.</p>
    `,
        publishedAt: '2024-01-01T08:20:00Z',
        readTime: 21,
        views: 12560,
        likes: 654,
        featured: false,
        trending: true,
        difficulty: 'متوسط',
        status: 'published',
        author: authors[2],
        category: categories[3],
        tags: ['Poster Design', 'Graphic Design', 'Typography', 'Color Theory', 'Composition', 'Print Design'],
        image: {
            main: '/articles/poster-design-techniques.jpg',
            alt: 'طراحی پوستر تبلیغاتی'
        },
        seo: {
            metaTitle: 'آموزش طراحی پوستر تبلیغاتی | تکنیک‌های حرفه‌ای و کاربردی',
            metaDescription: 'یادگیری طراحی پوستر تبلیغاتی جذاب و مؤثر. از اصول composition تا typography، color theory و تکنیک‌های چشم‌نواز.',
            keywords: ['طراحی پوستر', 'پوستر تبلیغاتی', 'گرافیک دیزاین', 'تایپوگرافی', 'کامپوزیشن'],
            canonicalUrl: 'https://designpardaz.ir/articles/advertising-poster-design-professional-techniques',
            ogImage: '/articles/poster-design-techniques-og.jpg'
        }
    },

    {
        id: '15',
        title: 'راهنمای کامل After Effects - انیمیشن و موشن گرافیک',
        slug: 'complete-after-effects-animation-motion-graphics',
        excerpt: 'یادگیری Adobe After Effects از مبتدی تا حرفه‌ای. انیمیشن، موشن گرافیک، visual effects و تکنیک‌های پیشرفته.',
        content: `
      <h2>معرفی Adobe After Effects</h2>
      <p>Adobe After Effects استاندارد صنعت برای ایجاد انیمیشن، موشن گرافیک و جلوه‌های بصری است که در فیلم‌سازی و تبلیغات کاربرد گسترده دارد.</p>

      <h2>مفاهیم پایه</h2>
      <ul>
        <li><strong>Composition:</strong> محیط اصلی کار</li>
        <li><strong>Timeline:</strong> زمان‌بندی انیمیشن</li>
        <li><strong>Layers:</strong> لایه‌های مختلف محتوا</li>
        <li><strong>Keyframes:</strong> نقاط کلیدی انیمیشن</li>
      </ul>

      <h2>انیمیشن Properties</h2>
      <pre><code>// پراپرتی‌های قابل انیمیت
Position: جابجایی
Scale: تغییر اندازه  
Rotation: چرخش
Opacity: شفافیت
Anchor Point: نقطه محوری</code></pre>

      <h2>Easing و Timing</h2>
      <pre><code>// انواع Easing
Linear: حرکت یکنواخت
Ease In: شروع آهسته
Ease Out: پایان آهسته  
Ease In Out: شروع و پایان آهسته</code></pre>

      <h2>موشن گرافیک</h2>
      <ul>
        <li>Text Animation براساس کاراکتر</li>
        <li>Shape Layers و انیمیشن آن‌ها</li>
        <li>Mask Animation</li>
        <li>Stroke و Fill Effects</li>
      </ul>

      <h2>نتیجه‌گیری</h2>
      <p>After Effects ابزاری قدرتمند برای خلق انیمیشن‌های جذاب و حرفه‌ای است که با تمرین می‌توان در آن تسلط یافت.</p>
    `,
        publishedAt: '2023-12-30T14:10:00Z',
        readTime: 23,
        views: 8765,
        likes: 432,
        featured: false,
        trending: false,
        difficulty: 'پیشرفته',
        status: 'published',
        author: authors[2],
        category: categories[3],
        tags: ['After Effects', 'Animation', 'Motion Graphics', 'Visual Effects', 'Adobe', 'Video'],
        image: {
            main: '/articles/after-effects-guide.jpg',
            alt: 'راهنمای After Effects'
        },
        seo: {
            metaTitle: 'آموزش کامل After Effects | انیمیشن و موشن گرافیک حرفه‌ای',
            metaDescription: 'یادگیری Adobe After Effects از مبتدی تا حرفه‌ای. انیمیشن، موشن گرافیک، visual effects و تکنیک‌های پیشرفته.',
            keywords: ['After Effects', 'انیمیشن', 'موشن گرافیک', 'Adobe After Effects', 'Visual Effects'],
            canonicalUrl: 'https://designpardaz.ir/articles/complete-after-effects-animation-motion-graphics',
            ogImage: '/articles/after-effects-guide-og.jpg'
        }
    },

    // پارسا رنجگر Articles
    {
        id: '16',
        title: 'آموزش جامع Django 5.0 - ساخت وب اپلیکیشن حرفه‌ای',
        slug: 'complete-django-5-web-development-tutorial',
        excerpt: 'یادگیری کامل Django 5.0 از نصب تا دیپلوی. ساخت پروژه‌های واقعی، API Development، Authentication، Database و بهترین practice های Django.',
        content: `
      <h2>معرفی Django 5.0</h2>
      <p>Django 5.0 جدیدترین نسخه از محبوب‌ترین فریمورک Python برای توسعه وب است که با بهبود عملکرد، امنیت بیشتر و ویژگی‌های جدید همراه شده است.</p>

      <h2>ویژگی‌های جدید Django 5.0</h2>
      <ul>
        <li><strong>Improved Performance:</strong> بهبود 25% سرعت</li>
        <li><strong>Enhanced Security:</strong> امنیت بیشتر</li>
        <li><strong>Better ORM:</strong> بهبود Object Relational Mapping</li>
        <li><strong>New Admin Features:</strong> ویژگی‌های جدید پنل ادمین</li>
      </ul>

      <h2>نصب و راه‌اندازی</h2>
      <pre><code># ایجاد محیط مجازی
python -m venv django_env
source django_env/bin/activate

# نصب Django 5.0
pip install Django==5.0

# ایجاد پروژه
django-admin startproject myproject
cd myproject

# اجرای سرور
python manage.py runserver</code></pre>

      <h2>ساختار پروژه</h2>
      <pre><code>myproject/
├── manage.py
├── myproject/
│   ├── settings.py
│   ├── urls.py
│   ├── wsgi.py
│   └── asgi.py
└── myapp/
    ├── models.py
    ├── views.py
    ├── urls.py
    └── admin.py</code></pre>

      <h2>Models و Database</h2>
      <pre><code>from django.db import models

class Post(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.title</code></pre>

      <h2>نتیجه‌گیری</h2>
      <p>Django 5.0 فریمورکی قدرتمند و کامل برای توسعه وب اپلیکیشن‌های مدرن است که یادگیری آن برای هر توسعه‌دهنده Python ضروری است.</p>
    `,
        publishedAt: '2024-01-14T11:00:00Z',
        readTime: 28,
        views: 21340,
        likes: 1123,
        featured: true,
        trending: true,
        difficulty: 'پیشرفته',
        status: 'published',
        author: authors[3],
        category: categories[5],
        tags: ['Django', 'Python', 'Web Development', 'Backend', 'ORM', 'Database', 'API'],
        image: {
            main: '/articles/django-5-tutorial.jpg',
            alt: 'آموزش جامع Django 5.0'
        },
        seo: {
            metaTitle: 'آموزش کامل Django 5.0 | ساخت وب اپلیکیشن حرفه‌ای با پایتون',
            metaDescription: 'یادگیری کامل Django 5.0 از نصب تا دیپلوی. ساخت پروژه‌های واقعی، API Development، Authentication و بهترین practices.',
            keywords: ['Django 5.0', 'آموزش Django', 'Python Web Framework', 'Backend Development', 'ORM', 'Database'],
            canonicalUrl: 'https://designpardaz.ir/articles/complete-django-5-web-development-tutorial',
            ogImage: '/articles/django-5-tutorial-og.jpg'
        }
    },

    {
        id: '17',
        title: 'Django REST Framework - ساخت API قدرتمند',
        slug: 'django-rest-framework-powerful-api-development',
        excerpt: 'آموزش کامل Django REST Framework برای ساخت API های RESTful. Authentication، Serialization، ViewSets، Permissions و بهترین practices.',
        content: `
      <h2>معرفی Django REST Framework</h2>
      <p>Django REST Framework (DRF) قدرتمندترین ابزار برای ساخت Web API های RESTful با Django است که توسط شرکت‌های بزرگ دنیا استفاده می‌شود.</p>

      <h2>نصب و راه‌اندازی</h2>
      <pre><code>pip install djangorestframework
pip install django-cors-headers

# settings.py
INSTALLED_APPS = [
    'rest_framework',
    'corsheaders',
]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
]</code></pre>

      <h2>Serializers</h2>
      <pre><code>from rest_framework import serializers
from .models import Post

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ['id', 'title', 'content', 'created_at']
        
    def validate_title(self, value):
        if len(value) < 5:
            raise serializers.ValidationError("Title too short")
        return value</code></pre>

      <h2>ViewSets</h2>
      <pre><code>from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        return Post.objects.filter(author=self.request.user)</code></pre>

      <h2>نتیجه‌گیری</h2>
      <p>Django REST Framework ابزاری قدرتمند برای ساخت API های مدرن و مقیاس‌پذیر است که یادگیری آن برای توسعه‌دهندگان بک‌اند ضروری است.</p>
    `,
        publishedAt: '2024-01-11T14:30:00Z',
        readTime: 24,
        views: 18760,
        likes: 934,
        featured: false,
        trending: true,
        difficulty: 'پیشرفته',
        status: 'published',
        author: authors[3],
        category: categories[5],
        tags: ['Django REST Framework', 'API Development', 'RESTful API', 'Authentication', 'Serialization', 'Backend'],
        image: {
            main: '/articles/django-rest-framework.jpg',
            alt: 'Django REST Framework'
        },
        seo: {
            metaTitle: 'آموزش Django REST Framework | ساخت API قدرتمند و حرفه‌ای',
            metaDescription: 'یادگیری کامل Django REST Framework برای ساخت API های RESTful. Authentication، Serialization، ViewSets و بهترین practices.',
            keywords: ['Django REST Framework', 'DRF', 'API Development', 'RESTful API', 'Backend Development', 'Python'],
            canonicalUrl: 'https://designpardaz.ir/articles/django-rest-framework-powerful-api-development',
            ogImage: '/articles/django-rest-framework-og.jpg'
        }
    },

    {
        id: '18',
        title: 'FastAPI - سریع‌ترین فریمورک Python برای API',
        slug: 'fastapi-fastest-python-framework-api-development',
        excerpt: 'آموزش FastAPI مدرن‌ترین فریمورک Python برای ساخت API. Type Hints، Automatic Documentation، Async Support و عملکرد فوق‌العاده.',
        content: `
      <h2>معرفی FastAPI</h2>
      <p>FastAPI فریمورک مدرن و پرسرعت Python برای ساخت API است که با استفاده از Type Hints و async/await بهترین عملکرد را ارائه می‌دهد.</p>

      <h2>مزایای FastAPI</h2>
      <ul>
        <li><strong>High Performance:</strong> سریع‌ترین فریمورک Python</li>
        <li><strong>Type Hints:</strong> پشتیبانی کامل از Type Hints</li>
        <li><strong>Auto Documentation:</strong> تولید خودکار مستندات</li>
        <li><strong>Async Support:</strong> پشتیبانی کامل از async/await</li>
      </ul>

      <h2>نصب و راه‌اندازی</h2>
      <pre><code>pip install fastapi uvicorn[standard]

# اجرای سرور
uvicorn main:app --reload</code></pre>

      <h2>اولین API</h2>
      <pre><code>from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Item(BaseModel):
    name: str
    price: float
    is_offer: bool = False

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.post("/items/")
def create_item(item: Item):
    return {"item": item}</code></pre>

      <h2>نتیجه‌گیری</h2>
      <p>FastAPI آینده توسعه API در Python است که با ترکیب سرعت، سادگی و قابلیت‌های مدرن، انتخاب بسیاری از توسعه‌دهندگان شده است.</p>
    `,
        publishedAt: '2024-01-09T16:15:00Z',
        readTime: 20,
        views: 15420,
        likes: 823,
        featured: false,
        trending: false,
        difficulty: 'متوسط',
        status: 'published',
        author: authors[3],
        category: categories[5],
        tags: ['FastAPI', 'Python', 'API Development', 'Async', 'Type Hints', 'High Performance'],
        image: {
            main: '/articles/fastapi-python-framework.jpg',
            alt: 'FastAPI فریمورک Python'
        },
        seo: {
            metaTitle: 'آموزش FastAPI | سریع‌ترین فریمورک Python برای توسعه API',
            metaDescription: 'یادگیری FastAPI مدرن‌ترین فریمورک Python برای ساخت API. Type Hints، Automatic Documentation، Async Support و عملکرد بالا.',
            keywords: ['FastAPI', 'Python Framework', 'API Development', 'Async Python', 'Type Hints', 'High Performance API'],
            canonicalUrl: 'https://designpardaz.ir/articles/fastapi-fastest-python-framework-api-development',
            ogImage: '/articles/fastapi-python-framework-og.jpg'
        }
    },

    {
        id: '19',
        title: 'Microservices Architecture با Python و FastAPI',
        slug: 'microservices-architecture-python-fastapi',
        excerpt: 'آموزش کامل طراحی و پیاده‌سازی Microservices با Python و FastAPI. Service Discovery، API Gateway، Message Queue و Container Orchestration.',
        content: `
    <h2>معرفی Microservices</h2>
    <p>Microservices الگوی معماری است که اپلیکیشن را به سرویس‌های کوچک و مستقل تقسیم می‌کند که هر کدام مسئولیت خاص خود را دارند.</p>

    <h2>مزایای Microservices</h2>
    <ul>
      <li><strong>Scalability:</strong> مقیاس‌پذیری مستقل هر سرویس</li>
      <li><strong>Technology Diversity:</strong> استفاده از تکنولوژی‌های مختلف</li>
      <li><strong>Fault Isolation:</strong> جداسازی خرابی‌ها</li>
      <li><strong>Team Independence:</strong> استقلال تیم‌های توسعه</li>
    </ul>

    <h2>ساخت سرویس با FastAPI</h2>
    <pre><code>from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import uvicorn

app = FastAPI(title="User Service", version="1.0.0")

class User(BaseModel):
    id: int
    name: str
    email: str

users_db = []

@app.post("/users/", response_model=User)
async def create_user(user: User):
    users_db.append(user)
    return user

@app.get("/users/{user_id}", response_model=User)
async def get_user(user_id: int):
    for user in users_db:
        if user.id == user_id:
            return user
    raise HTTPException(status_code=404, detail="User not found")

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8001)</code></pre>

    <h2>Service Discovery</h2>
    <pre><code># service_registry.py
import redis
import json

class ServiceRegistry:
    def __init__(self):
        self.redis_client = redis.Redis(host='localhost', port=6379, db=0)
    
    def register_service(self, service_name: str, host: str, port: int):
        service_info = {
            'host': host,
            'port': port,
            'health_check': f"http://{host}:{port}/health"
        }
        self.redis_client.set(f"service:{service_name}", json.dumps(service_info))
    
    def discover_service(self, service_name: str):
        service_data = self.redis_client.get(f"service:{service_name}")
        if service_data:
            return json.loads(service_data)
        return None</code></pre>

    <h2>API Gateway</h2>
    <pre><code># api_gateway.py
from fastapi import FastAPI, Request
import httpx
import asyncio

app = FastAPI(title="API Gateway")

SERVICES = {
    "user": "http://localhost:8001",
    "order": "http://localhost:8002",
    "product": "http://localhost:8003"
}

@app.api_route("/api/{service_name}/{path:path}", methods=["GET", "POST", "PUT", "DELETE"])
async def gateway(service_name: str, path: str, request: Request):
    if service_name not in SERVICES:
        return {"error": "Service not found"}
    
    service_url = f"{SERVICES[service_name]}/{path}"
    
    async with httpx.AsyncClient() as client:
        response = await client.request(
            method=request.method,
            url=service_url,
            params=request.query_params,
            json=await request.json() if request.method in ["POST", "PUT"] else None
        )
        return response.json()</code></pre>

    <h2>Message Queue با Celery</h2>
    <pre><code># tasks.py
from celery import Celery

app = Celery('microservices', broker='redis://localhost:6379')

@app.task
def send_email(user_email: str, subject: str, message: str):
    # ارسال ایمیل
    print(f"Sending email to {user_email}: {subject}")
    return {"status": "sent", "email": user_email}

@app.task
def process_order(order_id: int):
    # پردازش سفارش
    print(f"Processing order {order_id}")
    return {"status": "processed", "order_id": order_id}</code></pre>

    <h2>Docker Compose Setup</h2>
    <pre><code># docker-compose.yml
version: '3.8'

services:
  redis:
    image: redis:alpine
    ports:
      - "6379:6379"

  user-service:
    build: ./user-service
    ports:
      - "8001:8001"
    depends_on:
      - redis

  order-service:
    build: ./order-service
    ports:
      - "8002:8002"
    depends_on:
      - redis

  api-gateway:
    build: ./api-gateway
    ports:
      - "8000:8000"
    depends_on:
      - user-service
      - order-service</code></pre>

    <h2>نتیجه‌گیری</h2>
    <p>Microservices با FastAPI راه‌حل مناسبی برای ساخت سیستم‌های مقیاس‌پذیر و قابل نگهداری است که امکان توسعه مستقل سرویس‌ها را فراهم می‌کند.</p>
  `,
        publishedAt: '2024-01-02T08:45:00Z',
        readTime: 28,
        views: 13450,
        likes: 756,
        featured: true,
        trending: false,
        difficulty: 'پیشرفته',
        status: 'published',
        author: authors[3],
        category: categories[5],
        tags: ['Microservices', 'FastAPI', 'Python', 'API Gateway', 'Docker', 'Redis', 'Architecture'],
        image: {
            main: '/articles/microservices-fastapi.jpg',
            alt: 'Microservices با FastAPI'
        },
        seo: {
            metaTitle: 'آموزش Microservices Architecture با Python و FastAPI | راهنمای کامل',
            metaDescription: 'یادگیری کامل طراحی و پیاده‌سازی Microservices با Python و FastAPI. Service Discovery، API Gateway و Container Orchestration.',
            keywords: ['Microservices', 'FastAPI', 'Python', 'API Gateway', 'Service Discovery', 'Distributed Systems'],
            canonicalUrl: 'https://designpardaz.ir/articles/microservices-architecture-python-fastapi',
            ogImage: '/articles/microservices-fastapi-og.jpg'
        },
        rating: {
            average: 4.6,
            count: 89
        },
        faq: [
            {
                question: 'Microservices برای چه نوع پروژه‌هایی مناسب است؟',
                answer: 'Microservices برای پروژه‌های بزرگ و پیچیده با تیم‌های متعدد، نیاز به مقیاس‌پذیری بالا و تکنولوژی‌های متنوع مناسب است.'
            },
            {
                question: 'آیا FastAPI برای تولید مناسب است؟',
                answer: 'بله، FastAPI عملکرد بسیار خوبی دارد و توسط شرکت‌های بزرگی مثل Uber و Netflix استفاده می‌شود.'
            }
        ],
        tableOfContents: [
            { id: 'intro', title: 'معرفی Microservices', level: 1 },
            { id: 'advantages', title: 'مزایای Microservices', level: 1 },
            { id: 'fastapi-service', title: 'ساخت سرویس با FastAPI', level: 1 },
            { id: 'service-discovery', title: 'Service Discovery', level: 1 },
            { id: 'api-gateway', title: 'API Gateway', level: 1 },
            { id: 'message-queue', title: 'Message Queue', level: 1 }
        ]
    },

{
    id: '20',
        title: 'مدیریت Database با PostgreSQL و SQLAlchemy',
    slug: 'postgresql-sqlalchemy-database-management',
    excerpt: 'آموزش کامل کار با PostgreSQL و SQLAlchemy در Python. ORM، Migration، Query Optimization و بهترین practices برای پروژه‌های تولیدی.',
    content: `
      <h2>معرفی PostgreSQL</h2>
      <p>PostgreSQL یکی از قدرتمندترین و محبوب‌ترین پایگاه‌داده‌های رابطه‌ای متن‌باز است که پشتیبانی عالی از JSON، Full-text search و Advanced indexing دارد.</p>

      <h2>نصب و راه‌اندازی</h2>
      <pre><code>pip install psycopg2-binary sqlalchemy alembic

# اتصال به دیتابیس
from sqlalchemy import create_engine
engine = create_engine('postgresql://user:password@localhost/dbname')</code></pre>

      <h2>تعریف Models</h2>
      <pre><code>from sqlalchemy import Column, Integer, String, DateTime
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class User(Base):
    __tablename__ = 'users'
    
    id = Column(Integer, primary_key=True)
    username = Column(String(50), unique=True)
    email = Column(String(100), unique=True)
    created_at = Column(DateTime, default=datetime.utcnow)</code></pre>

      <h2>Query Optimization</h2>
      <pre><code># استفاده از Index
class User(Base):
    __tablename__ = 'users'
    
    email = Column(String(100), index=True)
    
# Eager Loading
users = session.query(User).options(joinedload(User.posts)).all()</code></pre>

      <h2>نتیجه‌گیری</h2>
      <p>PostgreSQL با SQLAlchemy ترکیب قدرتمندی برای مدیریت داده‌های پیچیده و مقیاس‌پذیر است.</p>
    `,
    publishedAt: '2024-01-04T13:20:00Z',
    readTime: 22,
    views: 11250,
    likes: 634,
    featured: false,
    trending: true,
    difficulty: 'پیشرفته',
    status: 'published',
    author: authors[3],
    category: categories[5],
    tags: ['PostgreSQL', 'SQLAlchemy', 'Database', 'ORM', 'Python', 'SQL'],
    image: {
    main: '/articles/postgresql-sqlalchemy.jpg',
        alt: 'PostgreSQL و SQLAlchemy'
},
    seo: {
        metaTitle: 'آموزش PostgreSQL و SQLAlchemy | مدیریت Database حرفه‌ای',
            metaDescription: 'یادگیری کامل کار با PostgreSQL و SQLAlchemy در Python. ORM، Migration، Query Optimization و بهترین practices.',
            keywords: ['PostgreSQL', 'SQLAlchemy', 'Database Management', 'ORM', 'Python Database', 'SQL'],
            canonicalUrl: 'https://designpardaz.ir/articles/postgresql-sqlalchemy-database-management',
            ogImage: '/articles/postgresql-sqlalchemy-og.jpg'
    }
},

// Additional Mixed Articles
{
    id: '21',
        title: 'React Native - توسعه اپ موبایل با JavaScript',
    slug: 'react-native-mobile-app-development-javascript',
    excerpt: 'آموزش کامل React Native برای ساخت اپلیکیشن موبایل cross-platform. Navigation، State Management، Native Modules و دیپلوی در App Store و Google Play.',
    content: `
      <h2>معرفی React Native</h2>
      <p>React Native فریمورک Facebook برای ساخت اپلیکیشن‌های موبایل native با JavaScript و React است که امکان توسعه همزمان برای iOS و Android را فراهم می‌کند.</p>

      <h2>مزایای React Native</h2>
      <ul>
        <li><strong>Cross-Platform:</strong> یک کد برای دو پلتفرم</li>
        <li><strong>Native Performance:</strong> عملکرد نزدیک به Native</li>
        <li><strong>Hot Reload:</strong> بازنگری سریع کد</li>
        <li><strong>Large Community:</strong> جامعه بزرگ و فعال</li>
      </ul>

      <h2>راه‌اندازی پروژه</h2>
      <pre><code>npx react-native init MyApp
cd MyApp

# اجرای روی iOS
npx react-native run-ios

# اجرای روی Android  
npx react-native run-android</code></pre>

      <h2>کامپوننت‌های اصلی</h2>
      <pre><code>import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const MyComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>سلام React Native!</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>کلیک کن</Text>
      </TouchableOpacity>
    </View>
  );
};</code></pre>

      <h2>Navigation</h2>
      <pre><code>npm install @react-navigation/native @react-navigation/stack

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}</code></pre>

      <h2>نتیجه‌گیری</h2>
      <p>React Native راه‌حل عالی برای توسعه سریع و مقرون‌به‌صرفه اپلیکیشن‌های موبایل است که عملکرد خوب و تجربه کاربری مناسب ارائه می‌دهد.</p>
    `,
    publishedAt: '2024-01-01T10:15:00Z',
    readTime: 26,
    views: 17890,
    likes: 923,
    featured: true,
    trending: false,
    difficulty: 'پیشرفته',
    status: 'published',
    author: authors[0],
    category: categories[4],
    tags: ['React Native', 'Mobile Development', 'JavaScript', 'Cross-Platform', 'iOS', 'Android'],
    image: {
    main: '/articles/react-native-mobile.jpg',
        alt: 'React Native توسعه موبایل'
},
    seo: {
        metaTitle: 'آموزش React Native | توسعه اپ موبایل با JavaScript',
            metaDescription: 'یادگیری کامل React Native برای ساخت اپلیکیشن موبایل cross-platform. Navigation، State Management و دیپلوی در استورها.',
            keywords: ['React Native', 'Mobile Development', 'Cross-Platform', 'JavaScript', 'iOS', 'Android App'],
            canonicalUrl: 'https://designpardaz.ir/articles/react-native-mobile-app-development-javascript',
            ogImage: '/articles/react-native-mobile-og.jpg'
    }
},

{
    id: '22',
        title: 'Flutter vs React Native - مقایسه کامل فریمورک‌های موبایل',
    slug: 'flutter-vs-react-native-complete-mobile-framework-comparison',
    excerpt: 'مقایسه جامع Flutter و React Native از نظر عملکرد، سادگی یادگیری، اکوسیستم، پشتیبانی و هزینه توسعه. راهنمای انتخاب بهترین فریمورک.',
    content: `
      <h2>مقدمه</h2>
      <p>Flutter و React Native دو فریمورک محبوب برای توسعه اپلیکیشن‌های موبایل cross-platform هستند که هر کدام مزایا و معایب خاص خود را دارند.</p>

      <h2>مقایسه عملکرد</h2>
      <table>
        <tr>
          <th>معیار</th>
          <th>Flutter</th>
          <th>React Native</th>
        </tr>
        <tr>
          <td>سرعت اجرا</td>
          <td>عالی (Dart VM)</td>
          <td>خوب (JavaScript Bridge)</td>
        </tr>
        <tr>
          <td>سرعت توسعه</td>
          <td>سریع</td>
          <td>خیلی سریع</td>
        </tr>
        <tr>
          <td>اندازه APK</td>
          <td>بزرگ‌تر</td>
          <td>کوچک‌تر</td>
        </tr>
      </table>

      <h2>یادگیری و توسعه</h2>
      <ul>
        <li><strong>Flutter:</strong> نیاز به یادگیری Dart، Widget-based architecture</li>
        <li><strong>React Native:</strong> آشنایی با React و JavaScript کافی است</li>
      </ul>

      <h2>اکوسیستم و پشتیبانی</h2>
      <pre><code>// Flutter Package
dependencies:
  flutter:
    sdk: flutter
  http: ^0.13.5
  provider: ^6.0.5

// React Native Package
npm install @react-navigation/native
npm install react-native-vector-icons</code></pre>

      <h2>چه موقع کدام را انتخاب کنیم؟</h2>
      <ul>
        <li><strong>Flutter:</strong> عملکرد بالا، UI سفارشی، پروژه‌های بلندمدت</li>
        <li><strong>React Native:</strong> سرعت توسعه، تیم React، بودجه محدود</li>
      </ul>

      <h2>نتیجه‌گیری</h2>
      <p>انتخاب بین Flutter و React Native بستگی به نیازهای پروژه، مهارت تیم و اولویت‌های کسب‌وکار دارد.</p>
    `,
    publishedAt: '2023-12-28T14:00:00Z',
    readTime: 18,
    views: 22340,
    likes: 1205,
    featured: false,
    trending: true,
    difficulty: 'مبتدی',
    status: 'published',
    author: authors[0],
    category: categories[4],
    tags: ['Flutter', 'React Native', 'Mobile Development', 'Comparison', 'Framework', 'Cross-Platform'],
    image: {
    main: '/articles/flutter-vs-react-native.jpg',
        alt: 'Flutter vs React Native'
},
    seo: {
        metaTitle: 'Flutter vs React Native | مقایسه کامل و راهنمای انتخاب',
            metaDescription: 'مقایسه جامع Flutter و React Native از نظر عملکرد، یادگیری، اکوسیستم و هزینه. راهنمای انتخاب بهترین فریمورک موبایل.',
            keywords: ['Flutter vs React Native', 'مقایسه فریمورک موبایل', 'Cross-Platform', 'Mobile Framework', 'Flutter', 'React Native'],
            canonicalUrl: 'https://designpardaz.ir/articles/flutter-vs-react-native-complete-mobile-framework-comparison',
            ogImage: '/articles/flutter-vs-react-native-og.jpg'
    }
},

{
    id: '23',
        title: 'آموزش Tailwind CSS - یوتیلیتی فرست CSS Framework',
    slug: 'tailwind-css-utility-first-framework-tutorial',
    excerpt: 'راهنمای کامل Tailwind CSS از نصب تا تسلط. Utility Classes، Responsive Design، Dark Mode، Custom Configuration و بهینه‌سازی عملکرد.',
    content: `
      <h2>معرفی Tailwind CSS</h2>
      <p>Tailwind CSS فریمورک CSS مبتنی بر utility-first است که به جای کامپوننت‌های از پیش طراحی شده، کلاس‌های کاربردی ارائه می‌دهد.</p>

      <h2>مزایای Tailwind</h2>
      <ul>
        <li><strong>Utility-First:</strong> کنترل کامل بر طراحی</li>
        <li><strong>Responsive:</strong> طراحی واکنش‌گرا آسان</li>
        <li><strong>Customizable:</strong> قابلیت شخصی‌سازی بالا</li>
        <li><strong>Performance:</strong> تولید CSS بهینه</li>
      </ul>

      <h2>نصب و راه‌اندازی</h2>
      <pre><code>npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'brand': '#3b82f6',
      }
    },
  },
  plugins: [],
}</code></pre>

      <h2>کلاس‌های پرکاربرد</h2>
      <pre><code>// Layout
flex, grid, block, inline, hidden

// Spacing  
p-4, m-2, px-6, py-3, space-x-4

// Typography
text-lg, font-bold, text-center, text-blue-500

// Colors
bg-red-500, text-white, border-gray-300

// Responsive
sm:text-sm, md:flex, lg:grid-cols-3</code></pre>

      <h2>Responsive Design</h2>
      <pre><code>&lt;div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"&gt;
  &lt;div class="bg-white p-6 rounded-lg shadow-md"&gt;
    &lt;h3 class="text-xl font-semibold mb-2"&gt;کارت 1&lt;/h3&gt;
    &lt;p class="text-gray-600"&gt;محتوای کارت...&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>

      <h2>Dark Mode</h2>
      <pre><code>// tailwind.config.js
module.exports = {
  darkMode: 'class',
  // ...
}

// HTML
&lt;div class="bg-white dark:bg-gray-800 text-black dark:text-white"&gt;
  محتوا
&lt;/div&gt;</code></pre>

      <h2>نتیجه‌گیری</h2>
      <p>Tailwind CSS رویکرد جدیدی به CSS است که سرعت توسعه را افزایش داده و کنترل کاملی بر طراحی ارائه می‌دهد.</p>
    `,
    publishedAt: '2023-12-25T16:30:00Z',
    readTime: 16,
    views: 19750,
    likes: 1087,
    featured: false,
    trending: false,
    difficulty: 'مبتدی',
    status: 'published',
    author: authors[1],
    category: categories[0],
    tags: ['Tailwind CSS', 'CSS Framework', 'Utility-First', 'Responsive Design', 'Dark Mode', 'Frontend'],
    image: {
    main: '/articles/tailwind-css-tutorial.jpg',
        alt: 'آموزش Tailwind CSS'
},
    seo: {
        metaTitle: 'آموزش کامل Tailwind CSS | فریمورک Utility-First',
            metaDescription: 'راهنمای جامع Tailwind CSS از نصب تا تسلط. Utility Classes، Responsive Design، Dark Mode و بهینه‌سازی عملکرد.',
            keywords: ['Tailwind CSS', 'CSS Framework', 'Utility-First CSS', 'Responsive Design', 'Frontend Development'],
            canonicalUrl: 'https://designpardaz.ir/articles/tailwind-css-utility-first-framework-tutorial',
            ogImage: '/articles/tailwind-css-tutorial-og.jpg'
    }
},

{
    id: '24',
        title: 'GraphQL با Apollo Client - مدیریت Data Fetching مدرن',
    slug: 'graphql-apollo-client-modern-data-fetching',
    excerpt: 'آموزش کامل GraphQL و Apollo Client برای React. Query، Mutation، Subscription، Caching، Error Handling و بهترین practices.',
    content: `
      <h2>معرفی GraphQL</h2>
      <p>GraphQL زبان query و runtime برای API است که امکان دریافت دقیق داده‌های مورد نیاز را فراهم می‌کند و جایگزین مناسبی برای REST API محسوب می‌شود.</p>

      <h2>مزایای GraphQL</h2>
      <ul>
        <li><strong>Single Endpoint:</strong> یک endpoint برای همه عملیات</li>
        <li><strong>Precise Data:</strong> دریافت دقیق داده‌های مورد نیاز</li>
        <li><strong>Strong Type System:</strong> سیستم تایپ قوی</li>
        <li><strong>Real-time:</strong> پشتیبانی از Subscription</li>
      </ul>

      <h2>نصب Apollo Client</h2>
      <pre><code>npm install @apollo/client graphql

// index.js
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api.example.com/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
    &lt;ApolloProvider client={client}&gt;
      &lt;MyApp /&gt;
    &lt;/ApolloProvider&gt;
  );
}</code></pre>

      <h2>Query کردن داده‌ها</h2>
      <pre><code>import { useQuery, gql } from '@apollo/client';

const GET_USERS = gql\`
  query GetUsers {
    users {
      id
      name
      email
      posts {
        title
        content
      }
    }
  }
\`;

function Users() {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return &lt;p&gt;Loading...&lt;/p&gt;;
  if (error) return &lt;p&gt;Error: {error.message}&lt;/p&gt;;

  return (
    &lt;div&gt;
      {data.users.map(user =&gt; (
        &lt;div key={user.id}&gt;
          &lt;h3&gt;{user.name}&lt;/h3&gt;
          &lt;p&gt;{user.email}&lt;/p&gt;
        &lt;/div&gt;
      ))}
    &lt;/div&gt;
  );
}</code></pre>

      <h2>Mutation برای تغییر داده</h2>
      <pre><code>import { useMutation, gql } from '@apollo/client';

const CREATE_USER = gql\`
  mutation CreateUser($name: String!, $email: String!) {
    createUser(name: $name, email: $email) {
      id
      name
      email
    }
  }
\`;

function CreateUser() {
  const [createUser, { loading, error }] = useMutation(CREATE_USER);

  const handleSubmit = (e) =&gt; {
    e.preventDefault();
    createUser({
      variables: {
        name: e.target.name.value,
        email: e.target.email.value
      }
    });
  };

  return (
    &lt;form onSubmit={handleSubmit}&gt;
      &lt;input name="name" placeholder="نام" /&gt;
      &lt;input name="email" placeholder="ایمیل" /&gt;
      &lt;button type="submit" disabled={loading}&gt;
        {loading ? 'در حال ایجاد...' : 'ایجاد کاربر'}
      &lt;/button&gt;
    &lt;/form&gt;
  );
}</code></pre>

      <h2>نتیجه‌گیری</h2>
      <p>GraphQL با Apollo Client ترکیب قدرتمندی برای مدیریت داده‌ها در اپلیکیشن‌های مدرن است که انعطاف‌پذیری و عملکرد بالایی ارائه می‌دهد.</p>
    `,
    publishedAt: '2023-12-22T11:45:00Z',
    readTime: 20,
    views: 14560,
    likes: 789,
    featured: false,
    trending: true,
    difficulty: 'پیشرفته',
    status: 'published',
    author: authors[0],
    category: categories[0],
    tags: ['GraphQL', 'Apollo Client', 'Data Fetching', 'React', 'API', 'Query', 'Mutation'],
    image: {
    main: '/articles/graphql-apollo-client.jpg',
        alt: 'GraphQL و Apollo Client'
},
    seo: {
        metaTitle: 'آموزش GraphQL و Apollo Client | مدیریت Data Fetching مدرن',
            metaDescription: 'یادگیری کامل GraphQL و Apollo Client برای React. Query، Mutation، Subscription، Caching و بهترین practices.',
            keywords: ['GraphQL', 'Apollo Client', 'Data Fetching', 'React GraphQL', 'API', 'Modern Frontend'],
            canonicalUrl: 'https://designpardaz.ir/articles/graphql-apollo-client-modern-data-fetching',
            ogImage: '/articles/graphql-apollo-client-og.jpg'
    }
},

{
    id: '25',
        title: 'کار با MongoDB و Mongoose در Node.js',
    slug: 'mongodb-mongoose-nodejs-database-tutorial',
    excerpt: 'راهنمای کامل کار با MongoDB و Mongoose در Node.js. Schema Design، CRUD Operations، Population، Aggregation و بهینه‌سازی کوئری‌ها.',
    content: `
      <h2>معرفی MongoDB</h2>
      <p>MongoDB پایگاه داده NoSQL محبوب است که داده‌ها را به صورت Document (JSON-like) ذخیره می‌کند و انعطاف‌پذیری بالایی برای ساختارهای مختلف داده ارائه می‌دهد.</p>

      <h2>نصب و راه‌اندازی</h2>
      <pre><code>npm install mongoose

// اتصال به دیتابیس
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/myapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB');
});</code></pre>

      <h2>تعریف Schema و Model</h2>
      <pre><code>const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  age: {
    type: Number,
    min: 0,
    max: 120
  },
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post'
  }]
}, {
  timestamps: true
});

const User = mongoose.model('User', userSchema);</code></pre>

      <h2>CRUD Operations</h2>
      <pre><code>// Create
const newUser = new User({
  name: 'علی احمدی',
  email: 'ali@example.com',
  age: 25
});
await newUser.save();

// Read
const users = await User.find({ age: { $gte: 18 } });
const user = await User.findById(userId);

// Update
await User.findByIdAndUpdate(userId, { age: 26 }, { new: true });

// Delete
await User.findByIdAndDelete(userId);</code></pre>

      <h2>Population</h2>
      <pre><code>// Populate کردن رابطه‌ها
const user = await User.findById(userId).populate('posts');

// Nested populate
const user = await User.findById(userId)
  .populate({
    path: 'posts',
    populate: {
      path: 'comments',
      model: 'Comment'
    }
  });</code></pre>

      <h2>Aggregation Pipeline</h2>
      <pre><code>// آمار کاربران بر اساس سن
const ageStats = await User.aggregate([
  {
    $group: {
      _id: null,
      avgAge: { $avg: '$age' },
      minAge: { $min: '$age' },
      maxAge: { $max: '$age' },
      totalUsers: { $sum: 1 }
    }
  }
]);

// گروه‌بندی بر اساس شهر
const usersByCity = await User.aggregate([
  {
    $group: {
      _id: '$city',
      count: { $sum: 1 },
      users: { $push: '$name' }
    }
  },
  { $sort: { count: -1 } }
]);</code></pre>

      <h2>نتیجه‌گیری</h2>
      <p>MongoDB با Mongoose ترکیب قدرتمندی برای مدیریت داده‌های غیرساختاریافته است که انعطاف‌پذیری بالا و عملکرد مناسب ارائه می‌دهد.</p>
    `,
    publishedAt: '2023-12-20T13:10:00Z',
    readTime: 24,
    views: 16890,
    likes: 945,
    featured: false,
    trending: false,
    difficulty: 'متوسط',
    status: 'published',
    author: authors[3],
    category: categories[5],
    tags: ['MongoDB', 'Mongoose', 'Node.js', 'NoSQL', 'Database', 'CRUD', 'Aggregation'],
    image: {
    main: '/articles/mongodb-mongoose-nodejs.jpg',
        alt: 'MongoDB و Mongoose'
},
    seo: {
        metaTitle: 'آموزش MongoDB و Mongoose در Node.js | راهنمای کامل',
            metaDescription: 'یادگیری کامل کار با MongoDB و Mongoose در Node.js. Schema Design، CRUD Operations، Population و بهینه‌سازی کوئری‌ها.',
            keywords: ['MongoDB', 'Mongoose', 'Node.js', 'NoSQL Database', 'CRUD Operations', 'Schema Design'],
            canonicalUrl: 'https://designpardaz.ir/articles/mongodb-mongoose-nodejs-database-tutorial',
            ogImage: '/articles/mongodb-mongoose-nodejs-og.jpg'
    }
}
];

// Helper Functions
export const getFeaturedArticles = (): Article[] => {
    return articles.filter(article => article.featured);
};

export const getTrendingArticles = (): Article[] => {
    return articles.filter(article => article.trending);
};

export const getArticlesByCategory = (categorySlug: string): Article[] => {
    return articles.filter(article => article.category.slug === categorySlug);
};

export const getArticlesByAuthor = (authorSlug: string): Article[] => {
    return articles.filter(article => article.author.slug === authorSlug);
};

export const getArticleBySlug = (slug: string): Article | undefined => {
    return articles.find(article => article.slug === slug);
};

export const getPopularArticles = (): Article[] => {
    return articles.sort((a, b) => b.views - a.views).slice(0, 10);
};

export const getRecentArticles = (limit: number = 5): Article[] => {
    return articles
        .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
        .slice(0, limit);
};

export const searchArticles = (query: string): Article[] => {
    const lowercaseQuery = query.toLowerCase();
    return articles.filter(article =>
        article.title.toLowerCase().includes(lowercaseQuery) ||
        article.excerpt.toLowerCase().includes(lowercaseQuery) ||
        article.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
    );
};

export const getRelatedArticles = (currentArticle: Article, limit: number = 3): Article[] => {
    return articles
        .filter(article =>
            article.id !== currentArticle.id &&
            (article.category.id === currentArticle.category.id ||
                article.tags.some(tag => currentArticle.tags.includes(tag)))
        )
        .sort((a, b) => b.views - a.views)
        .slice(0, limit);
};
export interface ArticleFilters {
    category?: string;
    author?: string;
    difficulty?: 'مبتدی' | 'متوسط' | 'پیشرفته';
    featured?: boolean;
    trending?: boolean;
    tags?: string[];
    search?: string;
    dateFrom?: string;
    dateTo?: string;
    minViews?: number;
    maxViews?: number;
    minReadTime?: number;
    maxReadTime?: number;
}

export const getFilteredArticles = (filters: ArticleFilters = {}): Article[] => {
    let filteredArticles = [...articles];

    // فیلتر بر اساس دسته‌بندی
    if (filters.category) {
        filteredArticles = filteredArticles.filter(article =>
            article.category.slug === filters.category || article.category.name === filters.category
        );
    }

    // فیلتر بر اساس نویسنده
    if (filters.author) {
        filteredArticles = filteredArticles.filter(article =>
            article.author.slug === filters.author || article.author.name === filters.author
        );
    }

    // فیلتر بر اساس سطح دشواری
    if (filters.difficulty) {
        filteredArticles = filteredArticles.filter(article =>
            article.difficulty === filters.difficulty
        );
    }

    // فیلتر مقالات ویژه
    if (filters.featured !== undefined) {
        filteredArticles = filteredArticles.filter(article =>
            article.featured === filters.featured
        );
    }

    // فیلتر مقالات ترند
    if (filters.trending !== undefined) {
        filteredArticles = filteredArticles.filter(article =>
            article.trending === filters.trending
        );
    }

    // فیلتر بر اساس تگ‌ها
    if (filters.tags && filters.tags.length > 0) {
        filteredArticles = filteredArticles.filter(article =>
            filters.tags!.some(tag =>
                article.tags.some(articleTag =>
                    articleTag.toLowerCase().includes(tag.toLowerCase())
                )
            )
        );
    }

    // فیلتر جستجو در عنوان، خلاصه و تگ‌ها
    if (filters.search) {
        const searchTerm = filters.search.toLowerCase();
        filteredArticles = filteredArticles.filter(article =>
            article.title.toLowerCase().includes(searchTerm) ||
            article.excerpt.toLowerCase().includes(searchTerm) ||
            article.content.toLowerCase().includes(searchTerm) ||
            article.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
            article.author.name.toLowerCase().includes(searchTerm)
        );
    }

    // فیلتر بر اساس تاریخ انتشار
    if (filters.dateFrom) {
        const fromDate = new Date(filters.dateFrom);
        filteredArticles = filteredArticles.filter(article =>
            new Date(article.publishedAt) >= fromDate
        );
    }

    if (filters.dateTo) {
        const toDate = new Date(filters.dateTo);
        filteredArticles = filteredArticles.filter(article =>
            new Date(article.publishedAt) <= toDate
        );
    }

    // فیلتر بر اساس تعداد بازدید
    if (filters.minViews !== undefined) {
        filteredArticles = filteredArticles.filter(article =>
            article.views >= filters.minViews!
        );
    }

    if (filters.maxViews !== undefined) {
        filteredArticles = filteredArticles.filter(article =>
            article.views <= filters.maxViews!
        );
    }

    // فیلتر بر اساس زمان مطالعه
    if (filters.minReadTime !== undefined) {
        filteredArticles = filteredArticles.filter(article =>
            article.readTime >= filters.minReadTime!
        );
    }

    if (filters.maxReadTime !== undefined) {
        filteredArticles = filteredArticles.filter(article =>
            article.readTime <= filters.maxReadTime!
        );
    }

    return filteredArticles;
};

// مثال‌های استفاده از getFilteredArticles:

// گرفتن مقالات React
export const getReactArticles = (): Article[] => {
    return getFilteredArticles({
        tags: ['React.js', 'React'],
        category: 'web-development'
    });
};

// گرفتن مقالات ویژه و ترند
export const getFeaturedTrendingArticles = (): Article[] => {
    return getFilteredArticles({
        featured: true,
        trending: true
    });
};

// گرفتن مقالات سطح مبتدی
export const getBeginnerArticles = (): Article[] => {
    return getFilteredArticles({
        difficulty: 'مبتدی'
    });
};

// گرفتن مقالات محبوب (بالای ۱۰۰۰۰ بازدید)
export const getPopularFilteredArticles = (): Article[] => {
    return getFilteredArticles({
        minViews: 10000
    });
};

// گرفتن مقالات مطالعه سریع (کمتر از ۱۵ دقیقه)
export const getQuickReadArticles = (): Article[] => {
    return getFilteredArticles({
        maxReadTime: 15
    });
};

// جستجوی پیشرفته
export const advancedSearch = (
    searchTerm: string,
    categorySlug?: string,
    difficulty?: 'مبتدی' | 'متوسط' | 'پیشرفته'
): Article[] => {
    return getFilteredArticles({
        search: searchTerm,
        category: categorySlug,
        difficulty: difficulty
    });
};
// Export all
export { articles as default };
