import { Book, Image, Layout, FileText } from 'lucide-react';

export default function CatalogDesign() {
    return (
        <section id="catalog" className="py-20 px-4 bg-slate-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                        طراحی کاتالوگ
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        کاتالوگ‌های جذاب و حرفه‌ای که محصولات و خدمات شما را به بهترین شکل معرفی می‌کنند
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="grid sm:grid-cols-2 gap-6">
                        {[
                            {
                                icon: <Book className="w-8 h-8" />,
                                title: 'کاتالوگ محصولات',
                                desc: 'معرفی کامل محصولات با تصاویر و مشخصات',
                                price: '5,000,000'
                            },
                            {
                                icon: <Image className="w-8 h-8" />,
                                title: 'کاتالوگ خدمات',
                                desc: 'ارائه خدمات به صورت بصری و جذاب',
                                price: '4,500,000'
                            },
                            {
                                icon: <Layout className="w-8 h-8" />,
                                title: 'کاتالوگ شرکتی',
                                desc: 'معرفی کامل شرکت و فعالیت‌ها',
                                price: '6,000,000'
                            },
                            {
                                icon: <FileText className="w-8 h-8" />,
                                title: 'کاتالوگ دیجیتال',
                                desc: 'نسخه تعاملی برای وب و موبایل',
                                price: '8,000,000'
                            }
                        ].map((type, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center text-white mb-4">
                                    {type.icon}
                                </div>
                                <h3 className="text-lg font-semibold text-slate-800 mb-2">{type.title}</h3>
                                <p className="text-slate-600 mb-4 text-sm">{type.desc}</p>
                                <div className="flex items-center justify-between">
                                    <span className="text-cyan-600 font-bold">{type.price} تومان</span>
                                    <button className="text-cyan-600 hover:text-cyan-700 font-semibold text-sm">
                                        سفارش
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="space-y-8">
                        <h3 className="text-3xl font-bold text-slate-800">
                            چرا کاتالوگ مهم است؟
                        </h3>
                        <div className="space-y-6">
                            {[
                                'افزایش فروش تا 40% با ارائه بصری مناسب',
                                'ایجاد اعتماد و اعتبار نزد مشتریان',
                                'امکان معرفی کامل محصولات و خدمات',
                                'ابزار قدرتمند برای بازاریابی و فروش'
                            ].map((benefit, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <div className="w-2 h-2 bg-white rounded-full"></div>
                                    </div>
                                    <p className="text-slate-700">{benefit}</p>
                                </div>
                            ))}
                        </div>
                        <div className="bg-cyan-50 p-6 rounded-xl border border-cyan-200">
                            <h4 className="font-semibold text-slate-800 mb-2">تحویل کاتالوگ شامل:</h4>
                            <ul className="text-sm text-slate-600 space-y-1">
                                <li>• فایل‌های آماده چاپ با کیفیت 300 DPI</li>
                                <li>• نسخه دیجیتال برای وب و شبکه‌های اجتماعی</li>
                                <li>• فایل‌های قابل ویرایش (در صورت درخواست)</li>
                                <li>• راهنمای چاپ و مشخصات فنی</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
