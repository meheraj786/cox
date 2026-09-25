"use client";

import { FC, useEffect, useState } from "react";
import Link from "next/link";
import Logo from "../Logo";
import { useLanguageStore } from "@/store/useLanguageStore";
import { translations } from "@/data/translations";
import { Language } from "@/types";

const Footer: FC = () => {
  const language = useLanguageStore((state) => state.language);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentLang: Language = mounted ? language : "bn";
  const t = translations[currentLang].footer;

  return (
    <footer className="bg-slate-50 border-t border-slate-200 text-slate-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-10 border-b border-slate-200">
          <div className="lg:col-span-4 space-y-4">
            <Logo />
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-sm">
              {t.desc}
            </p>
            <div className="flex items-center gap-3 pt-2 text-slate-500">
              <button
                type="button"
                aria-label="Share"
                className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:text-sky-600 hover:border-sky-500 transition-colors"
              >
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
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                  />
                </svg>
              </button>
              <button
                type="button"
                aria-label="Chat"
                className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:text-sky-600 hover:border-sky-500 transition-colors"
              >
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
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </button>
              <button
                type="button"
                aria-label="Website"
                className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:text-sky-600 hover:border-sky-500 transition-colors"
              >
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
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-bold text-slate-800 text-sm tracking-wide">
              {t.popularRoutes}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {t.routes.map((route, idx) => (
                <li key={idx}>
                  <Link
                    href={route.href}
                    className="hover:text-sky-600 transition-colors"
                  >
                    {route.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-bold text-slate-800 text-sm tracking-wide">
              {t.quickLinks}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {t.links.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="hover:text-sky-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-bold text-slate-800 text-sm tracking-wide">
              {t.contact}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-500">
              <li className="flex items-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 text-sky-600 mt-0.5 shrink-0"
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
                <span>{t.address}</span>
              </li>
              <li className="flex items-center gap-2">
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
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a
                  href="tel:+8801800000000"
                  className="hover:text-sky-600 transition-colors"
                >
                  {t.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
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
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href={`mailto:${t.email}`}
                  className="hover:text-sky-600 transition-colors"
                >
                  {t.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>{t.copyright}</p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy"
              className="hover:text-sky-600 transition-colors"
            >
              {t.privacy}
            </Link>
            <span>•</span>
            <Link
              href="/terms"
              className="hover:text-sky-600 transition-colors"
            >
              {t.terms}
            </Link>
            <span>•</span>
            <Link
              href="/refund"
              className="hover:text-sky-600 transition-colors"
            >
              {t.refund}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
