"use client";

import { FC } from "react";
import Link from "next/link";
import { useLanguageStore } from "@/store/useLanguageStore";

const VendorBanner: FC = () => {
  const language = useLanguageStore((state) => state.language);
  const isBn = language === "bn";

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-r from-sky-950 via-sky-900 to-sky-800 text-white p-8 sm:p-12 overflow-hidden shadow-2xl">
          <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-10 pointer-events-none hidden md:block">
            <svg viewBox="0 0 400 400" className="w-full h-full" fill="none">
              <circle
                cx="200"
                cy="200"
                r="150"
                stroke="white"
                strokeWidth="20"
              />
              <circle
                cx="200"
                cy="200"
                r="100"
                stroke="white"
                strokeWidth="15"
              />
            </svg>
          </div>

          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur rounded-full text-xs font-semibold text-sky-200">
              {isBn
                ? "ভেন্ডর ও গাড়ি মালিকদের জন্য"
                : "For Vendors & Vehicle Owners"}
            </span>

            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              {isBn
                ? "আপনার গাড়ি বা স্কুটি রেন্টাল ব্যবসা বাড়াতে চান?"
                : "Want to Grow Your Vehicle Rental Business?"}
            </h2>

            <p className="text-xs sm:text-sm text-sky-100 leading-relaxed max-w-xl">
              {isBn
                ? "কক্স রেন্টাল পার্টনার হিসেবে যুক্ত হয়ে প্রতিদিন হাজার পর্যটকের কাছে আপনার গাড়ি সরাসরি রেন্ট দিন। কোনো অগ্রিম ফি ছাড়া জয়েন করুন।"
                : "Partner with Cox Rental to list and rent your cars directly to thousands of visiting tourists daily without any upfront registration fees."}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/vendor/register"
                className="btn btn-md bg-white hover:bg-slate-100 text-sky-950 font-extrabold rounded-2xl border-none shadow-md px-6 text-xs sm:text-sm"
              >
                {isBn ? "ভেন্ডর হিসেবে রেজিস্টার করুন" : "Register as a Vendor"}
              </Link>

              <Link
                href="/terms/vendor"
                className="text-xs sm:text-sm font-semibold text-white/90 hover:text-white flex items-center gap-1.5 underline decoration-sky-400 underline-offset-4"
              >
                <span>
                  {isBn ? "শর্তাবলী ও কমিশন জানুন" : "Learn Terms & Commission"}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VendorBanner;
