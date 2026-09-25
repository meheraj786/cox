"use client";

import { FC, useState } from "react";
import Image from "next/image";
import { useLanguageStore } from "@/store/useLanguageStore";
import { Language } from "@/types";

interface HeroSectionProps {
  onSearch?: (searchParams: {
    category: string;
    location: string;
    date: string;
    duration: string;
  }) => void;
}

const HeroSection: FC<HeroSectionProps> = ({ onSearch }) => {
  const language = useLanguageStore((state) => state.language);
  const isBn = language === "bn";

  const [activeTab, setActiveTab] = useState<string>("all");
  const [pickupLocation, setPickupLocation] = useState<string>("kolatoli");
  const [pickupDate, setPickupDate] = useState<string>("");
  const [duration, setDuration] = useState<string>("full_day");

  const filterTabs = [
    { id: "all", label_bn: "সব গাড়ি", label_en: "All Vehicles", icon: "🚘" },
    { id: "car", label_bn: "কার ও সেডান", label_en: "Car & Sedan", icon: "🚗" },
    {
      id: "jeep",
      label_bn: "চান্দের গাড়ি (খোলা জিপ)",
      label_en: "Chander Gari (Jeep)",
      icon: "🚙",
    },
    {
      id: "bike",
      label_bn: "স্কুট ও বাইক",
      label_en: "Scooty & Bike",
      icon: "🛵",
    },
    {
      id: "microbus",
      label_bn: "মাইক্রোবাস / হাইয়েস",
      label_en: "Microbus / HiAce",
      icon: "🚐",
    },
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch({
        category: activeTab,
        location: pickupLocation,
        date: pickupDate,
        duration: duration,
      });
    }
  };

  return (
    <section className="relative bg-gradient-to-b from-sky-50/70 via-white to-white pt-6 pb-12 overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pb-8">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100/70 text-sky-800 text-xs font-semibold border border-sky-200/60">
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
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>
                {isBn
                  ? "কক্সবাজারের ১ নম্বর বিশ্বস্ত ভেরিফাইড রেন্টাল সার্ভিস"
                  : "Cox's Bazar's #1 Verified Rental Platform"}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
              {isBn ? "কক্সবাজারের সেরা " : "The Best Rental for "}
              <span className="text-sky-600 underline decoration-sky-300 decoration-wavy underline-offset-8">
                {isBn ? "গাড়ি, বাইক ও চান্দের গাড়ি" : "Cars, Bikes & Jeeps"}
              </span>{" "}
              {isBn ? "ভাড়া" : "in Cox's Bazar"}
            </h1>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
              {isBn
                ? "মেরিন ড্রাইভ, ইনানী বা হিমছড়ি—আপনার ভ্রমণের প্রতিটি মুহূর্ত নির্ভরযোগ্য বাহন, স্বচ্ছ রেট ও অভিজ্ঞ লোকাল চালক। মুহূর্তেই বুকিং কনফার্ম করুন।"
                : "Marine Drive, Inani or Himchari—enjoy every moment with reliable vehicles, transparent fares and experienced local drivers. Confirm booking instantly."}
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-2 text-xs sm:text-sm text-slate-700 font-medium">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
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
                      strokeWidth="2.5"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-slate-900">
                    {isBn ? "১০০% ভেরিফায়েড" : "100% Verified"}
                  </p>
                  <p className="text-[11px] text-slate-500">
                    {isBn ? "অভিজ্ঞ চালক ও গাড়ি" : "Drivers & Vehicles"}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
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
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-slate-900">
                    {isBn ? "১০+ রুট পিকআপ" : "10+ Pickup Points"}
                  </p>
                  <p className="text-[11px] text-slate-500">
                    {isBn
                      ? "কলাতলী, সুগন্ধা ও বিচ জোন"
                      : "Kolatoli, Sugandha, Beach"}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-slate-900">
                    {isBn ? "৪.৯ / ৫.০ রেটিং" : "4.9 / 5.0 Rating"}
                  </p>
                  <p className="text-[11px] text-slate-500">
                    {isBn
                      ? "১২,০০০+ সন্তুষ্ট পর্যটক"
                      : "12,000+ Happy Tourists"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group">
              <div className="relative h-64 sm:h-80 w-full">
                <Image
                  src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1000&q=80"
                  alt="Marine Drive Car Rental"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              </div>

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                <div>
                  <span className="badge badge-sm bg-sky-500 text-white border-none font-medium mb-1">
                    {isBn ? "জনপ্রিয় প্রিমিয়াম" : "Popular Premium"}
                  </span>
                  <p className="text-base font-bold leading-tight">
                    {isBn
                      ? "মেরিন ড্রাইভ স্পেশাল সেডান"
                      : "Marine Drive Special Sedan"}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] uppercase text-slate-300 block">
                    {isBn ? "শুরু মাত্র" : "Starts at"}
                  </span>
                  <span className="text-lg font-extrabold text-amber-300">
                    ৳ ৮০০
                    <span className="text-xs font-normal text-white">
                      /ঘণ্টা
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 bg-white rounded-3xl shadow-xl border border-slate-200/80 p-4 sm:p-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4 overflow-x-auto gap-2 scrollbar-none">
            <div className="flex items-center gap-1 sm:gap-2">
              {filterTabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                    activeTab === tab.id
                      ? "bg-sky-900 text-white shadow-sm"
                      : "bg-slate-100/70 text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  <span>{tab.icon}</span>
                  <span>{isBn ? tab.label_bn : tab.label_en}</span>
                </button>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-3 text-xs text-slate-500 font-medium whitespace-nowrap pl-4">
              <span className="hover:text-sky-600 cursor-pointer">
                {isBn ? "ঘণ্টা অনুযায়ী" : "By Hour"}
              </span>
              <span>•</span>
              <span className="hover:text-sky-600 cursor-pointer">
                {isBn ? "দিনে বা প্যাকেজে" : "Daily / Packages"}
              </span>
            </div>
          </div>

          <form
            onSubmit={handleSearchSubmit}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 items-center"
          >
            <div className="lg:col-span-4 bg-slate-50 rounded-2xl p-2.5 border border-slate-200/80 hover:border-sky-500 transition-colors">
              <label className="text-[11px] font-semibold text-slate-500 block mb-1">
                {isBn ? "পিকআপ পয়েন্ট" : "Pickup Point"}
              </label>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 text-sky-600 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                </svg>
                <select
                  value={pickupLocation}
                  onChange={(e) => setPickupLocation(e.target.value)}
                  className="bg-transparent text-xs sm:text-sm font-bold text-slate-800 w-full focus:outline-none cursor-pointer"
                >
                  <option value="kolatoli">
                    {isBn
                      ? "কলাতলী মোড় ও ডলফিন চত্বর"
                      : "Kolatoli & Dolphin More"}
                  </option>
                  <option value="sugandha">
                    {isBn
                      ? "সুগন্ধা পয়েন্ট ও বিচ জোন"
                      : "Sugandha Point Beach Zone"}
                  </option>
                  <option value="laboni">
                    {isBn
                      ? "লাবণী পয়েন্ট ও হোটেল জোন"
                      : "Laboni Point & Hotel Zone"}
                  </option>
                  <option value="inani">
                    {isBn ? "ইনানী বিচ পয়েন্ট" : "Inani Beach Point"}
                  </option>
                </select>
              </div>
            </div>

            <div className="lg:col-span-3 bg-slate-50 rounded-2xl p-2.5 border border-slate-200/80 hover:border-sky-500 transition-colors">
              <label className="text-[11px] font-semibold text-slate-500 block mb-1">
                {isBn ? "ভ্রমণের তারিখ ও সময়" : "Date & Time"}
              </label>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 text-sky-600 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <input
                  type="date"
                  value={pickupDate}
                  onChange={(e) => setPickupDate(e.target.value)}
                  className="bg-transparent text-xs sm:text-sm font-bold text-slate-800 w-full focus:outline-none cursor-pointer"
                />
              </div>
            </div>

            <div className="lg:col-span-3 bg-slate-50 rounded-2xl p-2.5 border border-slate-200/80 hover:border-sky-500 transition-colors">
              <label className="text-[11px] font-semibold text-slate-500 block mb-1">
                {isBn ? "প্যাকেজ সময়কাল / সিট" : "Duration / Seats"}
              </label>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 text-sky-600 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <select
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  className="bg-transparent text-xs sm:text-sm font-bold text-slate-800 w-full focus:outline-none cursor-pointer"
                >
                  <option value="full_day">
                    {isBn ? "ফুল ডে (৮-১০ ঘণ্টা)" : "Full Day (8-10 Hours)"}
                  </option>
                  <option value="half_day">
                    {isBn ? "হাফ ডে (৪-৫ ঘণ্টা)" : "Half Day (4-5 Hours)"}
                  </option>
                  <option value="2_hours">
                    {isBn ? "২ ঘণ্টা (কুইক ড্রাইভ)" : "2 Hours (Quick Drive)"}
                  </option>
                  <option value="custom">
                    {isBn ? "কাস্টম প্যাকেজ" : "Custom Package"}
                  </option>
                </select>
              </div>
            </div>

            <div className="lg:col-span-2">
              <button
                type="submit"
                className="w-full h-14 bg-sky-900 hover:bg-sky-950 text-white rounded-2xl flex items-center justify-center gap-2 font-bold text-sm shadow-md active:scale-95 transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <span>{isBn ? "গাড়ি খুঁজুন" : "Search Cars"}</span>
              </button>
            </div>
          </form>

          <div className="flex flex-wrap items-center gap-2 pt-3 mt-1 text-[11px] text-slate-500">
            <span className="font-semibold text-slate-600">
              {isBn ? "জনপ্রিয় সার্চ:" : "Popular Searches:"}
            </span>
            <span className="px-2.5 py-0.5 bg-slate-100 rounded-full cursor-pointer hover:bg-slate-200">
              {isBn ? "মেরিন ড্রাইভ চান্দের গাড়ি" : "Marine Drive Jeep"}
            </span>
            <span className="px-2.5 py-0.5 bg-slate-100 rounded-full cursor-pointer hover:bg-slate-200">
              {isBn ? "ইনানী ওপেন ছাদ গাড়ি" : "Inani Open Roof"}
            </span>
            <span className="px-2.5 py-0.5 bg-slate-100 rounded-full cursor-pointer hover:bg-slate-200">
              {isBn ? "স্কুটি সেলফ-ড্রাইভ" : "Scooty Self-Drive"}
            </span>
            <span className="px-2.5 py-0.5 bg-slate-100 rounded-full cursor-pointer hover:bg-slate-200">
              {isBn
                ? "হিমছড়ি ও প্যারাগ্লাইডিং ট্যুর"
                : "Himchari Paragliding Tour"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
