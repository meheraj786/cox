"use client";

import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { RoadTripPackage } from "@/types/database";
import { useLanguageStore } from "@/store/useLanguageStore";

interface RoadTripPackagesProps {
  packages: RoadTripPackage[];
}

const RoadTripPackages: FC<RoadTripPackagesProps> = ({ packages }) => {
  const language = useLanguageStore((state) => state.language);
  const isBn = language === "bn";

  return (
    <section className="py-16 bg-slate-50/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold text-sky-600 uppercase tracking-wider block mb-1">
              {isBn ? "জনপ্রিয় ভ্রমণ রুটসমূহ" : "Popular Road Trips"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              {isBn
                ? "কক্সবাজারের সেরা রোডট্রিপ রুট"
                : "Best Road Trip Routes in Cox's Bazar"}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              {isBn
                ? "সবচেয়ে জনপ্রিয় আকর্ষণীয় গন্তব্যগুলোর প্যাকেজ রেট ও ভ্রমণ দূরত্ব"
                : "Curated road trips and package rates for famous destinations"}
            </p>
          </div>

          <p className="text-xs text-slate-500 font-medium">
            {isBn
              ? "লাইভ চ্যাট সাপোর্ট কল করুন: +৮৮০ ১৮০০-০০০০০০"
              : "Live support hotline: +880 1800-000000"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-48 w-full bg-slate-200 overflow-hidden">
                  <Image
                    src={pkg.image}
                    alt={pkg.title_en}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-sm">
                    {isBn ? pkg.badge_bn : pkg.badge_en}
                  </span>
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-3 text-xs text-slate-500 mb-2">
                    <span className="font-semibold text-slate-700">
                      {isBn
                        ? `দূরত্ব: ${pkg.distance_km} কিমি`
                        : `Distance: ${pkg.distance_km} km`}
                    </span>
                    <span>•</span>
                    <span>{isBn ? pkg.duration_bn : pkg.duration_en}</span>
                  </div>

                  <h3 className="font-extrabold text-slate-900 text-base leading-snug group-hover:text-sky-600 transition-colors">
                    {isBn ? pkg.title_bn : pkg.title_en}
                  </h3>

                  <p className="text-xs text-slate-500 mt-2 line-clamp-3 leading-relaxed">
                    {isBn ? pkg.description_bn : pkg.description_en}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 font-semibold block">
                      {isBn ? "প্যাকেজ শুরু" : "Starting at"}
                    </span>
                    <span className="text-base font-extrabold text-sky-900">
                      ৳ {pkg.starting_price.toLocaleString()}{" "}
                      {isBn ? "থেকে" : "onwards"}
                    </span>
                  </div>

                  <Link
                    href={`/packages/${pkg.id}`}
                    className="btn btn-sm bg-slate-100 hover:bg-sky-900 hover:text-white text-slate-700 rounded-xl font-bold px-4 border-none transition-colors"
                  >
                    {isBn ? "প্যাকেজ দেখুন" : "View Package"}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoadTripPackages;
