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
      className="fixed top-0 left-0 w-full z-[200] bg-accent flex items-center px-4 py-[0.55rem] text-[0.8rem] font-semibold tracking-[0.02em] text-white animate-fade-in-down max-sm:text-[0.65rem] max-sm:py-1.5 max-sm:px-3 max-[400px]:text-[0.6rem]"
    >
      {/* Text — takes all available space */}
      <span className={`flex-1 text-center ${isRTL ? "font-cairo" : ""}`}>
        {t.announcement.text}
      </span>

      {/* Arrow + X pinned to the right, never overlapping */}
      <div className="flex items-center gap-2 shrink-0 ml-2">
        <svg
          className={`opacity-80 ${isRTL ? "rotate-180" : ""}`}
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
        <button
          onClick={(e) => { e.stopPropagation(); onDismiss(); }}
          aria-label="Dismiss announcement"
          className="flex items-center justify-center w-5 h-5 rounded-full opacity-70 hover:opacity-100 transition-opacity focus:outline-none"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
