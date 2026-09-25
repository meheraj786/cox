import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { LanguageState, Language } from "@/types";

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      language: "bn",
      setLanguage: (lang: Language) => set({ language: lang }),
      toggleLanguage: () =>
        set((state) => ({ language: state.language === "bn" ? "en" : "bn" })),
    }),
    {
      name: "cox-rental-lang",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
