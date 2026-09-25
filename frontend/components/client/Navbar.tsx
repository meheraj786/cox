"use client";

import { FC, useEffect, useState } from "react";
import Link from "next/link";
import Logo from "../Logo";
import { useLanguageStore } from "@/store/useLanguageStore";
import { translations } from "@/data/translations";
import { Language } from "@/types";

const Navbar: FC = () => {
  const { language, setLanguage } = useLanguageStore();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentLang: Language = mounted ? language : "bn";
  const t = translations[currentLang];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="navbar min-h-[68px] p-0 justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="dropdown lg:hidden">
              <label
                tabIndex={0}
                className="btn btn-ghost btn-circle btn-sm text-slate-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow-xl bg-base-100 rounded-2xl w-64 border border-slate-100 text-slate-700 space-y-1 font-medium"
              >
                <li>
                  <div className="flex items-center gap-2 p-2 bg-sky-50 rounded-xl text-sky-700 text-xs mb-2">
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
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span>{t.location}</span>
                  </div>
                </li>
                <li>
                  <Link href="/">{t.nav.home}</Link>
                </li>
                <li>
                  <Link href="/cars">{t.nav.findCar}</Link>
                </li>
                <li>
                  <Link href="/packages">{t.nav.packages}</Link>
                </li>
                <li>
                  <Link href="/vendor">{t.nav.vendor}</Link>
                </li>
                <li>
                  <Link href="/help">{t.nav.help}</Link>
                </li>
                <li className="pt-2">
                  <div className="flex items-center justify-between p-2 bg-slate-100 rounded-lg">
                    <span className="text-xs font-semibold">Language</span>
                    <div className="join">
                      <button
                        type="button"
                        onClick={() => setLanguage("bn")}
                        className={`join-item btn btn-xs ${currentLang === "bn" ? "btn-neutral" : "btn-ghost"}`}
                      >
                        বাংলা
                      </button>
                      <button
                        type="button"
                        onClick={() => setLanguage("en")}
                        className={`join-item btn btn-xs ${currentLang === "en" ? "btn-neutral" : "btn-ghost"}`}
                      >
                        EN
                      </button>
                    </div>
                  </div>
                </li>
                <li className="pt-1">
                  <Link
                    href="/login"
                    className="btn btn-sm bg-sky-900 hover:bg-sky-950 text-white rounded-lg w-full border-none"
                  >
                    {t.nav.auth}
                  </Link>
                </li>
              </ul>
            </div>

            <Logo />

            <div className="hidden xl:flex items-center gap-1.5 px-3 py-1.5 bg-slate-100/80 hover:bg-slate-100 rounded-full text-xs font-medium text-slate-600 cursor-pointer border border-slate-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3.5 h-3.5 text-sky-600 shrink-0"
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>{t.location}</span>
            </div>
          </div>

          <div className="hidden md:flex items-center flex-1 max-w-xs lg:max-w-sm mx-4">
            <div className="relative w-full">
              <input
                type="text"
                placeholder={t.searchPlaceholder}
                className="input input-sm h-10 w-full pl-9 pr-4 rounded-full bg-slate-100/90 focus:bg-white text-xs border border-transparent focus:border-sky-500 text-slate-800"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 absolute left-3 top-3 text-slate-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <nav className="hidden lg:flex items-center gap-4 text-sm font-medium text-slate-600">
              <Link
                href="/help"
                className="badge bg-sky-50 text-sky-700 border border-sky-200 hover:bg-sky-100 py-3 px-3 rounded-full text-xs font-semibold"
              >
                {t.nav.help}
              </Link>
              <Link
                href="/cars"
                className="hover:text-sky-600 transition-colors"
              >
                {t.nav.findCar}
              </Link>
              <Link
                href="/packages"
                className="hover:text-sky-600 transition-colors"
              >
                {t.nav.packages}
              </Link>
              <Link
                href="/vendor"
                className="hover:text-sky-600 transition-colors"
              >
                {t.nav.vendor}
              </Link>
            </nav>

            <div className="hidden sm:flex items-center bg-slate-100 p-0.5 rounded-full border border-slate-200">
              <button
                type="button"
                onClick={() => setLanguage("bn")}
                className={`px-2.5 py-1 text-xs font-semibold rounded-full transition-all ${
                  currentLang === "bn"
                    ? "bg-white text-sky-950 shadow-sm"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                বাংলা
              </button>
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={`px-2.5 py-1 text-xs font-semibold rounded-full transition-all ${
                  currentLang === "en"
                    ? "bg-white text-sky-950 shadow-sm"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                EN
              </button>
            </div>

            <Link
              href="/login"
              className="btn btn-sm h-10 px-4 bg-sky-900 hover:bg-sky-950 text-white rounded-full font-medium text-xs sm:text-sm border-none shadow-sm"
            >
              {t.nav.auth}
            </Link>

            <div className="dropdown dropdown-end">
              <label
                tabIndex={0}
                className="btn btn-ghost btn-circle avatar btn-sm"
              >
                <div className="w-8 h-8 rounded-full ring-2 ring-slate-200 overflow-hidden bg-slate-100 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-slate-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.8"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow-xl menu menu-sm dropdown-content bg-base-100 rounded-box w-48 border border-slate-100 text-slate-700"
              >
                <li>
                  <Link href="/profile">{t.nav.profile}</Link>
                </li>
                <li>
                  <Link href="/bookings">{t.nav.bookings}</Link>
                </li>
                <li>
                  <Link href="/settings">{t.nav.settings}</Link>
                </li>
                <li>
                  <button type="button" className="text-error">
                    {t.nav.logout}
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
