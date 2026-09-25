"use client";

import { FC, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Vehicle } from "@/types/database";
import { useLanguageStore } from "@/store/useLanguageStore";

interface PopularVehiclesProps {
  vehicles: Vehicle[];
}

const PopularVehicles: FC<PopularVehiclesProps> = ({ vehicles }) => {
  const language = useLanguageStore((state) => state.language);
  const isBn = language === "bn";

  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filters = [
    { id: "all", label_bn: "সবগুলো", label_en: "All" },
    { id: "deals", label_bn: "সেরা অফার", label_en: "Best Deals" },
    { id: "driver", label_bn: "ড্রাইভারসহ", label_en: "With Driver" },
    { id: "self", label_bn: "সেলফ ড্রাইভ", label_en: "Self Drive" },
    {
      id: "special",
      label_bn: "মেরিন ড্রাইভ স্পেশাল",
      label_en: "Marine Special",
    },
  ];

  const filteredVehicles = vehicles.filter((v) => {
    if (activeFilter === "driver") return !v.is_self_drive;
    if (activeFilter === "self") return v.is_self_drive;
    return true;
  });

  return (
    <section className="py-14 bg-slate-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-sky-600 uppercase tracking-wider mb-1">
              <span>⭐</span>
              <span>{isBn ? "রেটেড গাড়ি ও ভেহিকেল" : "Top Rated Fleet"}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              {isBn
                ? "কক্সবাজারের জনপ্রিয় ও শীর্ষ রেটেড গাড়ি"
                : "Popular & Top Rated Vehicles in Cox's Bazar"}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              {isBn
                ? "সবচেয়ে বেশি বুক করা ও পর্যটকদের সেরা রিভিউ পাওয়া যানবাহন"
                : "Most booked vehicles with verified reviews from tourists"}
            </p>
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                  activeFilter === filter.id
                    ? "bg-sky-900 text-white shadow-sm"
                    : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100"
                }`}
              >
                {isBn ? filter.label_bn : filter.label_en}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredVehicles.map((vehicle) => {
            const hourlyPrice = vehicle.pricing.find(
              (p) => p.pricing_type === "hourly",
            )?.price;
            const dailyPrice = vehicle.pricing.find(
              (p) => p.pricing_type === "daily",
            )?.price;

            return (
              <div
                key={vehicle.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                    <Image
                      src={vehicle.images[0]}
                      alt={vehicle.title_en}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {vehicle.badge_bn && (
                      <span className="absolute top-3 left-3 bg-white/95 backdrop-blur text-sky-800 text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm flex items-center gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-3 h-3 text-sky-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2.5"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>
                          {isBn ? vehicle.badge_bn : vehicle.badge_en}
                        </span>
                      </span>
                    )}

                    <span className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur text-amber-300 text-[11px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-3 h-3 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span>
                        {vehicle.rating_avg} ({vehicle.total_reviews})
                      </span>
                    </span>
                  </div>

                  <div className="p-4">
                    <p className="text-[11px] text-slate-400 font-medium mb-1">
                      {vehicle.vendor?.business_name}
                    </p>
                    <h3 className="font-bold text-slate-900 text-base leading-snug group-hover:text-sky-600 transition-colors">
                      {isBn ? vehicle.title_bn : vehicle.title_en}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-1">
                      {isBn ? vehicle.description_bn : vehicle.description_en}
                    </p>

                    <div className="flex flex-wrap items-center gap-1.5 mt-3 pt-3 border-t border-slate-100">
                      {vehicle.features.slice(0, 3).map((feat, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md font-medium"
                        >
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-4 pt-0">
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] text-slate-400 font-semibold">
                        {isBn ? "ভাড়া শুরু" : "Starts from"}
                      </p>
                      <p className="text-base font-extrabold text-slate-900">
                        ৳ {hourlyPrice?.toLocaleString()}
                        <span className="text-xs font-normal text-slate-500">
                          /{isBn ? "ঘণ্টা" : "hr"}
                        </span>
                      </p>
                      {dailyPrice && (
                        <p className="text-[10px] text-slate-400">
                          ৳ {dailyPrice.toLocaleString()}/
                          {isBn ? "সারাদিন" : "day"}
                        </p>
                      )}
                    </div>

                    <Link
                      href={`/vehicles/${vehicle.id}`}
                      className="btn btn-sm bg-sky-900 hover:bg-sky-950 text-white rounded-xl font-bold px-4 border-none shadow-sm"
                    >
                      {isBn ? "বুক করুন" : "Book Now"}
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/cars"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-slate-50 text-slate-700 text-xs sm:text-sm font-bold border border-slate-200 shadow-sm transition-all"
          >
            <span>
              {isBn
                ? "আরও ৬০০+ গাড়ি ও রেট একসাথে দেখুন"
                : "Explore 600+ More Vehicles & Rates"}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-sky-600"
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
    </section>
  );
};

export default PopularVehicles;
