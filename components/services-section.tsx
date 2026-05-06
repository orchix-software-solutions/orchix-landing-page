"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/language-context";

// Map index → href (add a real page path once created, otherwise fall back to /contact)
const serviceLinks = [
  "/services/enterprise-applications-crm-erp",
  "/services/business-process-automation",
  "/services/saas-product-development",
  "/services/ai-intelligent-automation",
  "/services/web-app-development",
  "/services/software-maintenance-support",
];

const serviceIcons = [
  // Enterprise Applications & CRM/ERP
  <>
    <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" />
    <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
  </>,
  // Business Process Automation
  <>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
  </>,
  // SaaS
  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />,
  // AI & Intelligent Automation
  <>
    <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </>,
  // Web & App
  <>
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
    <line x1="12" y1="18" x2="12" y2="18" />
  </>,
  // Maintenance
  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
];

export default function ServicesSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const { t, isRTL } = useLanguage();

  useEffect(() => {
    const title = titleRef.current;
    const svg = svgRef.current;
    if (!title || !svg) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            svg.classList.add("animate");
            obs.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );
    obs.observe(title);

    return () => obs.disconnect();
  }, []);

  return (
    <section dir={isRTL ? "rtl" : "ltr"} className="relative z-[2] max-w-[1200px] mx-auto px-[3rem] pt-[6rem] pb-[5rem] max-[1100px]:px-6 max-[1100px]:pt-16 max-[1100px]:pb-12 max-[600px]:px-4 max-[600px]:pt-12 max-[600px]:pb-8">
      {/* Header */}
      <div className="text-center mb-14">
        <span className={`inline-block text-[0.7rem] uppercase tracking-[0.15em] font-semibold text-[#a78bfa] mb-4${isRTL ? " font-cairo" : ""}`}>
          {t.services.eyebrow}
        </span>
        <h2
          ref={titleRef}
          className={`${isRTL ? "font-cairo" : "font-syne"} font-extrabold tracking-[-0.03em] leading-[1.15] text-[#f5f2eb]`}
          style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
        >
          {t.services.heading_prefix}{" "}
          <span className="underline-wrap font-playfair italic font-normal text-[#a78bfa]">
            {t.services.heading_italic}
            <svg
              ref={svgRef}
              className="underline-svg-2"
              viewBox="0 0 220 20"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="underlineGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#7c5bf5" />
                  <stop offset="100%" stopColor="#a78bfa" />
                </linearGradient>
              </defs>
              <path
                d="M2 15 C50 2, 100 18, 148 8 C170 4, 195 12, 218 8"
                fill="none"
                stroke="url(#underlineGrad2)"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h2>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-2 gap-[1px] bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.08)] rounded-2xl overflow-hidden max-[768px]:grid-cols-1">
        {t.services.items.map((svc, idx) => (
          <Link
            key={svc.title}
            href={serviceLinks[idx]}
            className="jelly-service group/svc bg-[#0a0a0a] px-8 py-[2.2rem] flex items-start gap-[1.2rem] cursor-pointer no-underline text-[#f5f2eb]"
          >
            {/* Icon */}
            <div className="w-11 h-11 min-w-[44px] rounded-[10px] flex items-center justify-center bg-[rgba(124,91,245,0.08)] border border-[rgba(124,91,245,0.12)] transition-all duration-300 group-hover/svc:bg-[rgba(124,91,245,0.15)] group-hover/svc:border-[rgba(124,91,245,0.25)]">
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5"
                fill="none"
                stroke="#a78bfa"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                {serviceIcons[idx]}
              </svg>
            </div>

            {/* Body */}
            <div className="flex-1">
              <h3 className={`${isRTL ? "font-cairo" : "font-syne"} font-bold text-[1.1rem] tracking-[-0.01em] mb-2`}>
                {svc.title}
              </h3>
              <p className={`text-[0.85rem] leading-[1.65] text-[#8a8680] font-normal${isRTL ? " font-cairo" : ""}`}>
                {svc.desc}
              </p>
            </div>

            {/* Arrow */}
            <svg
              viewBox="0 0 24 24"
              className={`w-[18px] h-[18px] min-w-[18px] mt-[0.15rem] opacity-0 ${isRTL ? "translate-x-1" : "-translate-x-1"} translate-y-1 transition-all duration-[350ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover/svc:opacity-100 group-hover/svc:translate-x-0 group-hover/svc:translate-y-0 group-hover/svc:stroke-[#a78bfa]`}
              fill="none"
              stroke="#8a8680"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M7 17L17 7M7 7h10v10" />
            </svg>
          </Link>
        ))}
      </div>
    </section>
  );
}
