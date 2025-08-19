import {
    CodeBracketIcon,
    PaintBrushIcon,
} from '@heroicons/react/24/outline';
import articlesData from '@/lib/data/articles-data.json';

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

// Icon mapping helper
const iconMap = {
    CodeBracketIcon,
    PaintBrushIcon,
};

// Process authors from JSON
export const authors: Author[] = articlesData.authors;

// Process categories from JSON with icon mapping
export const categories: Category[] = articlesData.categories.map(cat => ({
    ...cat,
    icon: iconMap[cat.icon as keyof typeof iconMap] || CodeBracketIcon
}));

// Process articles from JSON with author and category relations
export const articles: Article[] = articlesData.articles.map(article => {
    const author = authors.find(a => a.id === article.authorId);
    const category = categories.find(c => c.id === article.categoryId);

    if (!author || !category) {
        throw new Error(`Author or category not found for article ${article.id}`);
    }

    return {
        ...article,
        author,
        category
    };
});

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