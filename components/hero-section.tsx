"use client";

import React from "react";
import { useLanguage } from "@/lib/language-context";
import { useBooking } from "@/lib/booking-context";

export default function HeroSection() {
  const { t, isRTL } = useLanguage();
  const { openDialog } = useBooking();
  const h = t.hero;

  return (
    <section
      className="relative z-0 min-h-screen flex flex-col justify-center overflow-hidden"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* GIF Background — fullscreen, looping */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/Create_a_premium_1080p_202601302349.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for text readability */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(10,10,10,0.7) 0%, rgba(10,10,10,0.55) 40%, rgba(10,10,10,0.65) 70%, rgba(10,10,10,0.95) 100%)",
          }}
        />
      </div>

      {/* Grain texture overlay */}
      <div className="hero-grain absolute inset-0 z-[1] pointer-events-none" />

      {/* Hero content */}
      <div className="relative z-[2] max-w-[1400px] mx-auto w-full text-center flex flex-col items-center px-[5rem] pt-[12rem] pb-[8rem] max-[1100px]:px-6 max-[1100px]:pt-[10rem] max-[1100px]:pb-[5rem]">

        {/* Headline */}
        <h1
          className={`${isRTL ? "font-cairo" : "font-syne"} font-extrabold leading-[1.02] tracking-[-0.03em] mb-8 max-w-[1100px] text-[#f5f2eb] max-[600px]:text-[2.6rem]`}
          style={{
            fontSize: "clamp(3rem, 6.5vw, 6.5rem)",
            animation: "fadeInUp 0.8s ease 0.15s both",
          }}
        >
          {h.line1_prefix}{" "}
          <span className="font-playfair italic font-normal text-[#a78bfa]">
            {h.line1_italic}
          </span>
          <br />
          {h.line2_prefix}{" "}
          <span className="underline-wrap hero-deliver-gradient">
            {h.line2_outline}
            <svg
              className="underline-svg"
              viewBox="0 0 220 20"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="underlineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#7c5bf5" />
                  <stop offset="100%" stopColor="#a78bfa" />
                </linearGradient>
              </defs>
              <path
                d="M2 15 C50 2, 100 18, 148 8 C170 4, 195 12, 218 8"
                fill="none"
                stroke="url(#underlineGrad)"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h1>

        {/* Subheadline */}
        <p
          className={`${isRTL ? "font-cairo" : ""} leading-[1.7] text-[rgba(245,242,235,0.75)] max-w-[680px] mb-10 font-normal text-center max-[1100px]:max-w-full`}
          style={{
            fontSize: "clamp(1rem, 1.3vw, 1.2rem)",
            animation: "fadeInUp 0.8s ease 0.3s both",
          }}
        >
          {h.subtitle_before}{" "}
          <span className="hero-highlight-1">{h.highlight_1}</span>
          {h.subtitle_middle}{" "}
          <span className="hero-highlight-2">{h.highlight_2}</span>
        </p>

        {/* CTA Buttons */}
        <div
          className="flex items-center gap-5 flex-wrap justify-center mb-16"
          style={{ animation: "fadeInUp 0.8s ease 0.45s both" }}
        >
          <button
            onClick={openDialog}
            className={`${isRTL ? "font-cairo" : ""} group/btn inline-flex items-center gap-[0.6rem] px-8 py-4 bg-[#7c5bf5] text-white text-[0.9rem] font-semibold rounded-full border-0 tracking-[0.02em] transition-all duration-[350ms] ease-[cubic-bezier(0.4,0,0.2,1)] cursor-pointer shadow-[0_0_40px_rgba(124,91,245,0.25)] hover:bg-[#6a4ae0] hover:-translate-y-[2px] hover:shadow-[0_0_60px_rgba(124,91,245,0.4)]`}
          >
            {h.cta_primary}
            <svg
              className={`transition-transform duration-300 ${isRTL ? "group-hover/btn:-translate-x-[3px] rotate-180" : "group-hover/btn:translate-x-[3px]"}`}
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>

          <a
            href="/services"
            className={`${isRTL ? "font-cairo" : "font-space-grotesk"} group/sow relative inline-flex items-center px-8 py-4 bg-transparent border border-[rgba(255,255,255,0.3)] text-[#f5f2eb] text-[0.9rem] tracking-[0.02em] uppercase rounded-full font-semibold transition-all duration-300 no-underline backdrop-blur-sm hover:bg-[#f5f2eb] hover:text-[#0a0a0a] hover:border-[#f5f2eb]`}
          >
            {h.cta_secondary}
            {/* Top corner arrow */}
            <span className={`absolute ${isRTL ? "-top-[7px] -left-[7px]" : "-top-[7px] -right-[7px]"} w-[22px] h-[22px] rounded-full bg-[#f5f2eb] border-2 border-[#0a0a0a] flex items-center justify-center transition-all duration-300 group-hover/sow:bg-[#7c5bf5] group-hover/sow:border-[#7c5bf5]`}>
              <svg
                width="9"
                height="9"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0a0a0a"
                strokeWidth="2.5"
                strokeLinecap="round"
                className="transition-colors duration-300 group-hover/sow:stroke-white"
                aria-hidden="true"
              >
                <path d="M7 17L17 7M7 7h10v10" />
              </svg>
            </span>
          </a>
        </div>

        {/* Stats */}
        <div
          className="flex items-center gap-10 flex-wrap justify-center max-[600px]:gap-6"
          style={{ animation: "fadeInUp 0.8s ease 0.6s both" }}
        >
          {h.stats.map((stat, i) => (
            <React.Fragment key={stat.label}>
              {i > 0 && (
                <div
                  className="w-px h-10"
                  style={{
                    background:
                      "linear-gradient(to bottom, transparent, rgba(255,255,255,0.12), transparent)",
                  }}
                  aria-hidden="true"
                />
              )}
              <div className="flex flex-col gap-[0.15rem]">
                <span className={`${isRTL ? "font-cairo" : "font-syne"} stat-number-gradient font-extrabold text-[2rem] tracking-[-0.02em] max-[600px]:text-[1.5rem]`}>
                  {stat.number}
                </span>
                <span className={`${isRTL ? "font-cairo" : ""} text-[0.7rem] uppercase tracking-[0.12em] text-[rgba(138,134,128,0.9)] font-medium`}>
                  {stat.label}
                </span>
              </div>
            </React.Fragment>
          ))}
        </div>


      </div>

    </section>
  );
}
