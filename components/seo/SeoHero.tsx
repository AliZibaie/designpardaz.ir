// components/seo/SeoHero.tsx
import { ChartBarIcon, MagnifyingGlassIcon, RocketLaunchIcon, UserGroupIcon } from '@heroicons/react/24/outline';

export default function SeoHero() {
    return (
        <section className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-20">
            <div className="container mx-auto px-4 font-vazirmatn">
                <div className="text-center max-w-4xl mx-auto">
                    <div className="flex justify-center mb-6">
                        <div className="bg-blue-500 p-4 rounded-2xl">
                            <MagnifyingGlassIcon className="h-12 w-12 text-white" />
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        خدمات <span className="text-blue-400">سئو حرفه‌ای</span> دیزاین پرداز
                    </h1>

                    <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                        تیمی جوان و متخصص در حوزه بهینه‌سازی موتور جستجو، آماده همکاری با شما برای رسیدن به صفحه اول گوگل
                    </p>

                    <div className="grid md:grid-cols-3 gap-8 mt-12">
                        <div className="text-center">
                            <UserGroupIcon className="h-8 w-8 text-blue-400 mx-auto mb-3" />
                            <div className="text-2xl font-bold text-white">تیم جوان</div>
                            <div className="text-gray-300">متخصص و خلاق</div>
                        </div>
                        <div className="text-center">
                            <ChartBarIcon className="h-8 w-8 text-blue-400 mx-auto mb-3" />
                            <div className="text-2xl font-bold text-white">روش‌های نوین</div>
                            <div className="text-gray-300">تکنیک‌های به‌روز</div>
                        </div>
                        <div className="text-center">
                            <RocketLaunchIcon className="h-8 w-8 text-blue-400 mx-auto mb-3" />
                            <div className="text-2xl font-bold text-white">قیمت مناسب</div>
                            <div className="text-gray-300">کیفیت بالا</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
