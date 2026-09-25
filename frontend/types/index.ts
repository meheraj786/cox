export type Language = "bn" | "en";

export interface RouteLink {
  label: string;
  href: string;
}

export interface OnboardingSlide {
  badge: string;
  title: string;
  desc: string;
}

export interface TranslationSchema {
  brandFirst: string;
  brandSecond: string;
  location: string;
  searchPlaceholder: string;
  nav: {
    home: string;
    help: string;
    findCar: string;
    packages: string;
    vendor: string;
    auth: string;
    profile: string;
    bookings: string;
    settings: string;
    logout: string;
  };
  onboarding: {
    partner: string;
    skip: string;
    subtitle: string;
    specialTag: string;
    roadBadge: string;
    touristFriendly: string;
    slides: OnboardingSlide[];
    licensed: string;
    instantBooking: string;
    marineDrive: string;
    getStarted: string;
    hasAccount: string;
    loginLink: string;
  };
  auth: {
    tagline: string;
    loginTab: string;
    registerTab: string;
    phoneOrEmail: string;
    phonePlaceholder: string;
    name: string;
    namePlaceholder: string;
    password: string;
    rememberMe: string;
    forgotPass: string;
    loginBtn: string;
    registerBtn: string;
    orLoginWith: string;
    google: string;
    facebook: string;
    noAccount: string;
    registerNow: string;
    haveAccount: string;
    securityBadge: string;
  };
  footer: {
    desc: string;
    popularRoutes: string;
    quickLinks: string;
    contact: string;
    routes: RouteLink[];
    links: RouteLink[];
    address: string;
    phone: string;
    email: string;
    copyright: string;
    privacy: string;
    terms: string;
    refund: string;
  };
}

export interface LanguageState {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}
