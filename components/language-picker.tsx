"use client";

import { useState, useRef, useEffect } from "react";
import { useLanguage, type LangCode } from "@/lib/language-context";

const languages = [
  { code: "EN", label: "English",    flag: "🇺🇸" },
  { code: "ES", label: "Español",    flag: "🇪🇸" },
  { code: "FR", label: "Français",   flag: "🇫🇷" },
  { code: "DE", label: "Deutsch",    flag: "🇩🇪" },
  { code: "PT", label: "Português",  flag: "🇧🇷" },
  { code: "AR", label: "العربية",    flag: "🇦🇪" },
  { code: "HI", label: "हिन्दी",      flag: "🇮🇳" },
  { code: "ZH", label: "中文",        flag: "🇨🇳" },
  { code: "JA", label: "日本語",      flag: "🇯🇵" },
];

export default function LanguagePicker() {
  const { lang, setLang } = useLanguage();
  const active = languages.find((l) => l.code === lang) ?? languages[0];
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const close = () => {
    setClosing(true);
    setTimeout(() => { setOpen(false); setClosing(false); }, 200);
  };

  const select = (l: typeof languages[0]) => {
    setLang(l.code as LangCode);
    close();
  };

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) close();
    };
    if (open) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  return (
    <div ref={ref} className="relative">
      {/* Trigger */}
      <button
        onClick={() => open ? close() : setOpen(true)}
        className="group flex items-center gap-[6px] px-3 py-[0.45rem] rounded-full border border-[rgba(255,255,255,0.1)] bg-transparent text-[#8a8680] hover:text-[#f5f2eb] hover:border-[rgba(255,255,255,0.2)] transition-all duration-200"
        aria-label="Select language"
      >
        {/* Globe icon */}
        <svg
          width="13" height="13" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" strokeWidth="1.8"
          strokeLinecap="round" strokeLinejoin="round"
          className="shrink-0"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
        </svg>

        <span className="text-[0.75rem] font-semibold tracking-[0.04em] font-space-grotesk">
          {active.code}
        </span>

        <svg
          width="10" height="10" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" strokeWidth="2.5"
          strokeLinecap="round" strokeLinejoin="round"
          className={`shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {/* Dropdown */}
      {open && (
        <div
          className={`absolute top-[calc(100%+10px)] right-0 w-[176px] rounded-[14px] border border-[rgba(255,255,255,0.08)] bg-[rgba(14,14,14,0.98)] backdrop-blur-[20px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden z-[300] transition-all duration-200 origin-top-right ${
            closing ? "opacity-0 scale-95" : "opacity-100 scale-100"
          }`}
          style={{ animation: closing ? "none" : "dropIn 0.2s cubic-bezier(0.34,1.56,0.64,1) both" }}
        >
          {/* Top accent */}
          <div
            className="h-[1px] w-full"
            style={{ background: "linear-gradient(90deg, transparent, rgba(124,91,245,0.5), transparent)" }}
            aria-hidden="true"
          />

          <div className="py-1">
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => select(l)}
                className={`w-full flex items-center gap-3 px-4 py-[0.55rem] text-left transition-all duration-150 group/item ${
                  active.code === l.code
                    ? "bg-[rgba(124,91,245,0.1)] text-[#f5f2eb]"
                    : "text-[#8a8680] hover:bg-[rgba(255,255,255,0.04)] hover:text-[#f5f2eb]"
                }`}
              >
                <span className="text-[1rem] leading-none shrink-0">{l.flag}</span>
                <span className="text-[0.78rem] font-medium font-space-grotesk flex-1">
                  {l.label}
                </span>
                <span className="text-[0.65rem] tracking-[0.06em] font-semibold opacity-50 font-space-grotesk">
                  {l.code}
                </span>
                {active.code === l.code && (
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none"
                    stroke="#a78bfa" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      <style>{`
        @keyframes dropIn {
          from { opacity: 0; transform: scale(0.92) translateY(-6px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </div>
  );
}
