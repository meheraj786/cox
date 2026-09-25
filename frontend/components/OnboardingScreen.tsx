"use client";

import { FC, useState, useEffect } from "react";
import Link from "next/link";
import { useLanguageStore } from "@/store/useLanguageStore";
import { translations } from "@/data/translations";
import { Language, OnboardingSlide } from "@/types";

const OnboardingScreen: FC = () => {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [mounted, setMounted] = useState<boolean>(false);
  const language = useLanguageStore((state) => state.language);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentLang: Language = mounted ? language : "bn";
  const t = translations[currentLang];
  const slides: OnboardingSlide[] = t.onboarding.slides;

  const handleNext = (): void => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = (): void => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-0 sm:p-6 lg:p-10">
      <div className="w-full sm:max-w-md lg:max-w-lg bg-white sm:rounded-3xl shadow-xl border border-slate-100 overflow-hidden flex flex-col justify-between min-h-screen sm:min-h-0 sm:py-6">
        <div>
          <div className="flex items-center justify-between px-5 pt-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-sky-50 text-sky-700 text-xs font-medium rounded-full border border-sky-100">
              <span className="w-2 h-2 rounded-full bg-sky-600"></span>
              <span>{t.onboarding.partner}</span>
            </div>

            <Link
              href="/login"
              className="text-xs font-semibold text-slate-500 hover:text-slate-800 flex items-center gap-1 transition-colors"
            >
              <span>{t.onboarding.skip}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3.5 h-3.5"
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

          <div className="text-center px-6 pt-5 pb-3">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-sky-50 shadow-inner border border-sky-100 mb-3 text-sky-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8"
              >
                <path d="M4 16c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V9l-2-6H6L4 9v7zm2-4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1.5-6l1 3H6.5l1-3h10z" />
              </svg>
            </div>

            <div className="flex items-center justify-center gap-2">
              <h1 className="text-2xl font-extrabold text-slate-800">
                {t.brandFirst} {t.brandSecond}
              </h1>
              <span className="bg-sky-100 text-sky-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                PRO
              </span>
            </div>

            <p className="text-xs text-slate-500 mt-1 max-w-xs mx-auto">
              {t.onboarding.subtitle}
            </p>

            <div className="inline-flex items-center gap-1.5 mt-2.5 px-3 py-1 bg-sky-50/80 text-sky-800 text-[11px] font-medium rounded-full border border-sky-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3.5 h-3.5 text-sky-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z"
                />
              </svg>
              <span>{t.onboarding.specialTag}</span>
            </div>
          </div>

          <div className="px-4 py-2">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-sky-200 via-sky-100 to-amber-50 h-52 sm:h-56 flex flex-col justify-between p-3 border border-sky-200/50 shadow-inner">
              <div className="absolute inset-0 opacity-20 pointer-events-none">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 400 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 120 C 150 70, 250 160, 400 110 L 400 200 L 0 200 Z"
                    fill="#38BDF8"
                  />
                  <path
                    d="M0 150 C 120 120, 280 180, 400 140 L 400 200 L 0 200 Z"
                    fill="#FDE68A"
                  />
                </svg>
              </div>

              <div className="relative z-10 flex justify-end">
                <div className="w-8 h-8 rounded-full bg-amber-200/80 shadow-md"></div>
              </div>

              <div className="relative z-10 flex items-center justify-center gap-4 py-4">
                <div className="w-14 h-10 bg-emerald-600/90 rounded-lg shadow-md flex items-center justify-center text-white text-[10px] font-bold">
                  4x4 JEEP
                </div>
                <div className="w-16 h-8 bg-white/90 rounded-lg shadow-md flex items-center justify-center text-slate-700 text-[10px] font-bold">
                  SEDAN
                </div>
                <div className="w-8 h-8 bg-sky-700 rounded-full shadow-md flex items-center justify-center text-white text-[9px] font-bold">
                  SCOOTY
                </div>
              </div>

              <div className="relative z-10 flex items-center justify-between gap-2">
                <span className="text-[11px] font-medium bg-white/90 backdrop-blur px-2.5 py-1 rounded-full text-slate-700 shadow-sm">
                  🌴 {t.onboarding.roadBadge}
                </span>
                <span className="text-[11px] font-medium bg-white/90 backdrop-blur px-2.5 py-1 rounded-full text-sky-800 shadow-sm flex items-center gap-1">
                  🛡️ {t.onboarding.touristFriendly}
                </span>
              </div>
            </div>
          </div>

          <div className="px-5 pt-3">
            <div className="bg-slate-50/80 rounded-2xl p-4 border border-slate-100 shadow-sm relative">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-xs">
                  🚗
                </span>
                <span className="text-xs font-bold text-sky-900">
                  {slides[activeSlide].badge}
                </span>
              </div>

              <h3 className="font-bold text-slate-800 text-base leading-snug">
                {slides[activeSlide].title}
              </h3>

              <p className="text-xs text-slate-500 mt-1 leading-relaxed min-h-[36px]">
                {slides[activeSlide].desc}
              </p>

              <div className="flex items-center justify-between pt-3 mt-1 border-t border-slate-200/60">
                <div className="flex items-center gap-1.5">
                  {slides.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveSlide(idx)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        activeSlide === idx
                          ? "w-6 bg-sky-800"
                          : "w-2 bg-slate-300"
                      }`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="w-7 h-7 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-100"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3.5 h-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="w-7 h-7 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-100"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3.5 h-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-5 pt-4 pb-6 sm:pb-2">
          <div className="flex items-center justify-center gap-3 text-[11px] text-slate-500 font-medium pb-4">
            <span className="flex items-center gap-1">
              🛡️ {t.onboarding.licensed}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              ⚡ {t.onboarding.instantBooking}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              📍 {t.onboarding.marineDrive}
            </span>
          </div>

          <Link
            href="/login"
            className="w-full h-12 bg-gradient-to-r from-sky-900 to-sky-500 hover:from-sky-950 hover:to-sky-600 text-white rounded-2xl flex items-center justify-center gap-2 font-bold text-sm shadow-md shadow-sky-600/20 active:scale-[0.99] transition-all"
          >
            <span>{t.onboarding.getStarted}</span>
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
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>

          <p className="text-center text-xs text-slate-500 mt-3">
            {t.onboarding.hasAccount}{" "}
            <Link
              href="/login"
              className="text-sky-800 font-bold hover:underline"
            >
              {t.onboarding.loginLink}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OnboardingScreen;
