import { Eye, Layers, BookOpen, Smartphone } from 'lucide-react';

export default function VisualIdentity() {
    return (
        <section id="branding" className="py-20 px-4 bg-slate-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                        طراحی هویت بصری
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        هویت بصری یکپارچه و حرفه‌ای که برند شما را در ذهن مخاطبان ماندگار می‌کند.
                        از لوگو تا کاتالوگ، همه عناصر برندتان در یک هارمونی زیبا
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                    <div className="space-y-8">
                        {[
                            {
                                icon: <Eye className="w-6 h-6" />,
                                title: 'شناسایی برند',
                                desc: 'ایجاد تصویر منسجم و قابل تشخیص از برند شما'
                            },
                            {
                                icon: <Layers className="w-6 h-6" />,
                                title: 'سیستم طراحی',
                                desc: 'مجموعه کاملی از عناصر گرافیکی برای استفاده مداوم'
                            },
                            {
                                icon: <BookOpen className="w-6 h-6" />,
                                title: 'راهنمای برند',
                                desc: 'دستورالعمل کامل نحوه استفاده از عناصر هویت بصری'
                            },
                            {
                                icon: <Smartphone className="w-6 h-6" />,
                                title: 'قابل انطباق',
                                desc: 'طراحی متناسب با انواع رسانه‌ها و پلتفرم‌ها'
                            }
                        ].map((item, index) => (
                            <div key={index} className="flex gap-4">
                                <div className="w-12 h-12 bg-cyan-500 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-slate-800 mb-2">{item.title}</h3>
                                    <p className="text-slate-600">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-lg">
                        <h3 className="text-2xl font-bold text-slate-800 mb-6">پکیج هویت بصری کامل</h3>
                        <div className="space-y-4 mb-8">
                            {[
                                'طراحی لوگو اختصاصی',
                                'پالت رنگی و تایپوگرافی',
                                'کارت ویزیت و سربرگ',
                                'فولدر و پوشه اداری',
                                'الگوهای گرافیکی',
                                'موک‌آپ و پیش‌نمایش',
                                'راهنمای کاربرد برند'
                            ].map((item, index) => (
                                <div key={index} className="flex items-center">
                                    <div className="w-2 h-2 bg-cyan-500 rounded-full ml-3"></div>
                                    <span className="text-slate-700">{item}</span>
                                </div>
                            ))}
                        </div>
                        <div className="border-t pt-6">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-2xl font-bold text-cyan-600">12,000,000</span>
                                <span className="text-slate-600">تومان</span>
                            </div>
                            <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 rounded-xl font-semibold transition-colors duration-300">
                                درخواست پروژه
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
