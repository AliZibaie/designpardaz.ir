// components/seo/ContentSeoSection.tsx
import {
    PencilSquareIcon,
    MagnifyingGlassIcon,
    ChartBarIcon,
    DocumentTextIcon,
    HashtagIcon,
    UserGroupIcon
} from '@heroicons/react/24/outline';

export default function ContentSeoSection() {
    const services = [
        {
            icon: PencilSquareIcon,
            title: 'تولید محتوای اصل',
            description: 'نوشتن مقالات تخصصی و منحصربه‌فرد برای سایت شما'
        },
        {
            icon: MagnifyingGlassIcon,
            title: 'تحقیق کلمات کلیدی',
            description: 'شناسایی و تحلیل بهترین کلمات کلیدی برای کسب‌وکار شما'
        },
        {
            icon: ChartBarIcon,
            title: 'استراتژی محتوا',
            description: 'طراحی برنامه محتوایی مطابق با اهداف بیزنسی'
        },
        {
            icon: DocumentTextIcon,
            title: 'بهینه‌سازی محتوا',
            description: 'بهبود محتواهای موجود برای رتبه‌بندی بهتر'
        },
        {
            icon: HashtagIcon,
            title: 'تگ‌گذاری هوشمند',
            description: 'استفاده صحیح از تگ‌های H1، H2، H3 و متا تگ‌ها'
        },
        {
            icon: UserGroupIcon,
            title: 'محتوای تعاملی',
            description: 'تولید محتوای جذاب برای افزایش تعامل کاربران'
        }
    ];

    const contentPricing = [
        {
            type: 'مقاله ۵۰۰ کلمه',
            price: '۱۵۰,۰۰۰',
            description: 'مقاله بهینه‌شده با کلمات کلیدی'
        },
        {
            type: 'مقاله ۱۰۰۰ کلمه',
            price: '۲۵۰,۰۰۰',
            description: 'مقاله تخصصی با تحقیق عمیق'
        },
        {
            type: 'محتوای صفحه محصول',
            price: '۲۰۰,۰۰۰',
            description: 'توضیحات کامل و بهینه محصول'
        },
        {
            type: 'بازنویسی محتوا',
            price: '۱۰۰,۰۰۰',
            description: 'بهینه‌سازی محتوای موجود'
        }
    ];

    return (
        <div className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 font-vazirmatn">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        تولید محتوای سئو
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        محتوای باکیفیت و بهینه‌شده که مخاطبان را جذب کرده و در گوگل رتبه بالا می‌گیرد
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow">
                            <service.icon className="h-10 w-10 text-blue-600 mb-4" />
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                {service.title}
                            </h3>
                            <p className="text-gray-600">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Content Pricing */}
                <div className="bg-white rounded-xl shadow-lg p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                        تعرفه تولید محتوا
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {contentPricing.map((item, index) => (
                            <div key={index} className="border border-gray-200 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                                <h4 className="font-semibold text-gray-800 mb-2">{item.type}</h4>
                                <div className="text-2xl font-bold text-blue-600 mb-3">
                                    {item.price} <span className="text-sm text-gray-500">تومان</span>
                                </div>
                                <p className="text-gray-600 text-sm">{item.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 bg-blue-50 rounded-lg p-6">
                        <h4 className="text-lg font-semibold text-gray-800 mb-4 text-center">
                            پکیج‌های ویژه محتوا
                        </h4>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white rounded-lg p-6">
                                <h5 className="font-bold text-gray-800 mb-2">پکیج ماهانه (۸ مقاله)</h5>
                                <div className="text-xl font-bold text-green-600 mb-2">۱,۶۰۰,۰۰۰ تومان</div>
                                <p className="text-gray-600 text-sm">صرفه‌جویی ۲۰٪ نسبت به خرید تکی</p>
                            </div>
                            <div className="bg-white rounded-lg p-6">
                                <h5 className="font-bold text-gray-800 mb-2">پکیج سه‌ماهه (۲۵ مقاله)</h5>
                                <div className="text-xl font-bold text-green-600 mb-2">۴,۵۰۰,۰۰۰ تومان</div>
                                <p className="text-gray-600 text-sm">صرفه‌جویی ۳۰٪ + استراتژی رایگان</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
