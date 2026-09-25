"use client";

import { FC } from "react";
import { useLanguageStore } from "@/store/useLanguageStore";

const WhyChooseUs: FC = () => {
  const language = useLanguageStore((state) => state.language);
  const isBn = language === "bn";

  const reasons = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-sky-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      title_bn: "ভেরিফায়েড ভেন্ডর ও ড্রাইভার",
      title_en: "Verified Vendors & Drivers",
      desc_bn:
        "কক্সবাজারের প্রতিটি রেজিস্টার্ড পার্টনার ও অভিজ্ঞ ড্রাইভার পুলিশ ভেরিফিকেশন ও ড্রাইভিং লাইসেন্স সম্পন্ন।",
      desc_en:
        "Every registered partner and experienced driver has completed police and license verification.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-sky-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title_bn: "কোনো লুকানো চার্জ নেই",
      title_en: "No Hidden Costs",
      desc_bn:
        "১০০% স্বচ্ছ প্রাইসিং পলিসি। কোনো অনাকাঙ্ক্ষিত অতিরিক্ত ফি বা হিডেন চার্জ নেই।",
      desc_en:
        "100% transparent pricing policy. No surprises or arbitrary extra fees.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-sky-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title_bn: "ইনস্ট্যান্ট বুকিং ও রিফান্ড",
      title_en: "Instant Booking & Refund",
      desc_bn:
        "মুহূর্তেই কনফার্মেশন স্লিপ পাবেন। পরিকল্পনা পরিবর্তন হলে ট্রিপের ২৪ ঘণ্টা পূর্ব পর্যন্ত ১০০% ফ্রি রিফান্ড।",
      desc_en:
        "Instant digital confirmation slip. Full 100% refund up to 24 hours before trip.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-sky-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
      title_bn: "২৪/৭ অন-রোড সাপোর্ট",
      title_en: "24/7 On-Road Support",
      desc_bn:
        "মেরিন ড্রাইভ বা প্রত্যন্ত সৈকতে যেকোনো মেকানিক্যাল বা ইমার্জেন্সি প্রয়োজনে সবসময় আমাদের মোবাইল রেসকিউ টিম প্রস্তুত।",
      desc_en:
        "Our on-ground mobile rescue team is ready 24/7 along Marine Drive for mechanical assistance.",
    },
  ];

  return (
    <section className="py-16 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-bold text-sky-600 uppercase tracking-wider block mb-1">
            {isBn ? "নিরাপত্তা ও বিশ্বস্ততা" : "Trust & Safety"}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            {isBn ? "কেন ‘কক্স রেন্টাল’ বেছে নেবেন?" : "Why Choose Cox Rental?"}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-2">
            {isBn
              ? "আমরা কক্সবাজারে নিরাপদ ও স্বচ্ছ যানবাহন সেবার প্রতিশ্রুতি দিচ্ছি, যেন আপনার সমুদ্রভ্রমণ হয় নিখুঁত ও আনন্দময়।"
              : "Our commitment is transparent and safe vehicle rentals, making your beach voyage flawless."}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-slate-50/70 border border-slate-100 hover:bg-white hover:border-sky-300 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-white shadow-md border border-slate-100 flex items-center justify-center mb-4">
                {reason.icon}
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">
                {isBn ? reason.title_bn : reason.title_en}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                {isBn ? reason.desc_bn : reason.desc_en}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
