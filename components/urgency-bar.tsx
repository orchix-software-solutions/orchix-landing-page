"use client";

import { useLanguage } from "@/lib/language-context";

export default function UrgencyBar() {
  const { t, isRTL } = useLanguage();

  return (
    <div
      dir={isRTL ? "rtl" : "ltr"}
      className="fixed top-0 left-0 w-full z-[200] bg-accent flex items-center justify-center gap-3 px-4 py-[0.55rem] text-[0.8rem] font-semibold tracking-[0.02em] text-white animate-fade-in-down group max-sm:text-[0.65rem] max-sm:gap-1.5 max-sm:py-1.5 max-sm:px-3 max-[400px]:text-[0.6rem]"
    >
      <span className={`relative z-[1] ${isRTL ? "font-cairo" : ""}`}>
        {t.announcement.text}
      </span>
      <svg
        className={`shrink-0 opacity-80 group-hover:opacity-100 transition-opacity ${isRTL ? "rotate-180" : ""}`}
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        aria-hidden="true"
      >
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </div>
  );
}
