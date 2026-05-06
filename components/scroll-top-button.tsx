"use client";

import { useEffect, useRef, useState } from "react";

const RADIUS = 24;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export default function ScrollTopButton() {
  const [visible, setVisible] = useState(false);
  const circleRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;

      // Update SVG directly — no React re-render, no batching lag
      if (circleRef.current) {
        circleRef.current.style.strokeDashoffset = String(
          CIRCUMFERENCE - progress * CIRCUMFERENCE
        );
      }

      setVisible(scrollTop > 300);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className={`group fixed bottom-8 right-8 z-[150] w-[64px] h-[64px] flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] max-[600px]:bottom-6 max-[600px]:right-6 ${
        visible
          ? "opacity-100 visible translate-y-0"
          : "opacity-0 invisible translate-y-6"
      }`}
    >
      {/* Circular scroll-progress ring */}
      <svg
        className="absolute inset-0 w-full h-full -rotate-90"
        viewBox="0 0 64 64"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="progressGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7c5bf5" />
            <stop offset="100%" stopColor="#a78bfa" />
          </linearGradient>
        </defs>
        {/* Track */}
        <circle
          cx="32" cy="32" r={RADIUS}
          fill="none"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="1.5"
        />
        {/* Progress — updated via ref, not state */}
        <circle
          ref={circleRef}
          cx="32" cy="32" r={RADIUS}
          fill="none"
          stroke="url(#progressGrad)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={CIRCUMFERENCE}
        />
      </svg>

      {/* Inner button */}
      <span className="relative w-11 h-11 rounded-full flex items-center justify-center bg-[rgba(124,91,245,0.1)] border border-[rgba(124,91,245,0.2)] transition-all duration-300 group-hover:bg-[#7c5bf5] group-hover:border-[#7c5bf5] group-hover:shadow-[0_0_32px_rgba(124,91,245,0.6)]">
        <svg
          className="w-[16px] h-[16px] fill-none transition-all duration-300 group-hover:stroke-white group-hover:-translate-y-[2px]"
          viewBox="0 0 24 24"
          stroke="#a78bfa"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </span>
    </button>
  );
}
