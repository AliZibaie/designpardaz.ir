'use client';

import { ChatBubbleLeftRightIcon, ChevronDownIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

// Updated FAQ Data with realistic information
const faqs = [
    {
        question: 'چقدر طول می‌کشد تا سایتم آماده شود؟',
        answer: 'زمان تحویل بسته به پیچیدگی پروژه بین ۵ تا ۲۱ روز کاری متغیر است. ما همواره سعی می‌کنیم در کمترین زمان ممکن، بهترین کیفیت را ارائه دهیم.'
    },
    {
        question: 'آیا پس از تحویل سایت پشتیبانی ارائه می‌دهید؟',
        answer: 'بله، ۳ ماه پشتیبانی رایگان و آموزش کامل کار با سایت ارائه می‌دهیم. همچنین در طول این مدت تمام بروزرسانی‌های لازم انجام می‌شود.'
    },
    {
        question: 'هزینه طراحی سایت چقدر است؟',
        answer: 'هزینه بر اساس نیازهای شما و پیچیدگی پروژه محاسبه می‌شود. ما قیمت‌گذاری منصفانه و رقابتی داریم. برای مشاوره رایگان با ما در تماس باشید.'
    },
    {
        question: 'آیا سایت‌هایتان برای موبایل بهینه هستند؟',
        answer: 'کاملاً! تمام سایت‌هایی که طراحی می‌کنیم با تکنولوژی‌های مدرن و responsive design ساخته شده و روی تمام دستگاه‌ها بهینه کار می‌کنند.'
    },
    {
        question: 'چه تضمینی برای کیفیت کار ارائه می‌دهید؟',
        answer: 'ما متعهد به ارائه کار با بالاترین کیفیت هستیم. در صورت عدم رضایت شما، تا رسیدن به نتیجه مطلوب روی پروژه کار خواهیم کرد.'
    }
];

export default function FAQSection() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white" data-animate>
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium mb-4">
                        <ChatBubbleLeftRightIcon className="w-4 h-4" />
                        <span>سوالات متداول</span>
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-black mb-6">
                        سوالاتی که
                        <span className="text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text"> شما دارید</span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        پاسخ سوالات رایج درباره خدمات طراحی وب و توسعه دیجیتال
                    </p>
                </div>

                {/* FAQ Items */}
                <div className="max-w-4xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:bg-white/15 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10"
                        >
                            <button
                                className="w-full p-6 text-right flex items-center justify-between hover:bg-white/5 transition-colors"
                                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                            >
                                <span className="text-lg font-bold">{faq.question}</span>
                                <ChevronDownIcon
                                    className={`w-6 h-6 text-blue-400 transition-transform duration-300 ${
                                        openFaq === index ? 'rotate-180' : ''
                                    }`}
                                />
                            </button>

                            {openFaq === index && (
                                <div className="px-6 pb-6">
                                    <div className="border-t border-white/10 pt-4">
                                        <p className="text-gray-300 leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Contact CTA */}
                <div className="text-center mt-12">
                    <p className="text-gray-300 mb-6">سوال دیگری دارید؟</p>
                    <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25">
                        <PhoneIcon className="w-5 h-5" />
                        مشاوره رایگان دریافت کنید
                    </button>
                </div>
            </div>
        </section>
    );
}