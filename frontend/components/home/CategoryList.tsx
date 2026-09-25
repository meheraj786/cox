"use client";

import { FC } from "react";
import Link from "next/link";
import { VehicleCategory } from "@/types/database";
import { useLanguageStore } from "@/store/useLanguageStore";

interface CategoryListProps {
  categories: VehicleCategory[];
  onSelectCategory?: (categoryId: string) => void;
}

const CategoryList: FC<CategoryListProps> = ({
  categories,
  onSelectCategory,
}) => {
  const language = useLanguageStore((state) => state.language);
  const isBn = language === "bn";

  return (
    <section className="py-12 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold text-sky-600 uppercase tracking-wider block mb-1">
              {isBn ? "ক্যাটাগরি ক্লাস্টার রেন্টাল" : "Vehicle Categories"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              {isBn ? "যানবাহনের ধরন নির্বাচন করুন" : "Select Vehicle Category"}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              {isBn
                ? "আপনার পরিবার বা বন্ধুদের নিয়ে ভ্রমণের জন্য সেরা মানানসই বাহন বেছে নিন"
                : "Choose the best ride for your family or friends"}
            </p>
          </div>

          <Link
            href="/cars"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-sky-700 hover:text-sky-900 group"
          >
            <span>{isBn ? "সব ক্যাটাগরি দেখুন" : "View All Categories"}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((category) => (
            <div
              key={category.id}
              onClick={() => onSelectCategory && onSelectCategory(category.id)}
              className="group p-4 rounded-2xl bg-white border border-slate-200/90 hover:border-sky-500 hover:shadow-xl hover:shadow-sky-500/10 cursor-pointer transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center group-hover:bg-sky-900 group-hover:text-white transition-colors duration-300 mb-3 shadow-inner">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.8"
                      d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                    />
                  </svg>
                </div>

                <h3 className="font-bold text-slate-800 text-sm sm:text-base group-hover:text-sky-700 transition-colors">
                  {isBn ? category.name_bn : category.name_en}
                </h3>
                <p className="text-xs text-slate-500 mt-1 line-clamp-1">
                  {isBn ? category.description_bn : category.description_en}
                </p>
              </div>

              <div className="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-600">
                <span>
                  {isBn ? category.sub_text_bn : category.sub_text_en}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryList;
