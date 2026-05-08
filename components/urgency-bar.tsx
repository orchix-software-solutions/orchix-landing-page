"use client";

import { useLanguage } from "@/lib/language-context";

interface UrgencyBarProps {
  onDismiss: () => void;
}

export default function UrgencyBar({ onDismiss }: UrgencyBarProps) {
  const { t, isRTL } = useLanguage();

  return (
    <div
      data-urgency-bar
      dir={isRTL ? "rtl" : "ltr"}
      className="fixed top-0 left-0 w-full z-[200] bg-accent flex items-center justify-center gap-3 px-10 py-[0.55rem] text-[0.8rem] font-semibold tracking-[0.02em] text-white animate-fade-in-down group max-sm:text-[0.65rem] max-sm:gap-1.5 max-sm:py-1.5 max-sm:px-8 max-[400px]:text-[0.6rem]"
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

      {/* Dismiss button */}
      <button
        onClick={(e) => { e.stopPropagation(); onDismiss(); }}
        aria-label="Dismiss announcement"
        className={`absolute ${isRTL ? "left-3" : "right-3"} flex items-center justify-center w-5 h-5 rounded-full opacity-70 hover:opacity-100 transition-opacity focus:outline-none`}
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}
