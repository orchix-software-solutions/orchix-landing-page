"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import LanguagePicker from "@/components/language-picker";
import { useLanguage } from "@/lib/language-context";
import { useBooking } from "@/lib/booking-context";

const serviceNavItems = [
  {
    title: "Enterprise Applications & CRM/ERP",
    desc: "Custom CRMs, ERPs & business management systems",
    href: "/services/enterprise-applications-crm-erp",
    icon: <><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" /><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" /></>,
  },
  {
    title: "Business Process Automation",
    desc: "Automate workflows, connect systems & save hours",
    href: "/services/business-process-automation",
    icon: <><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" /></>,
  },
  {
    title: "SaaS Product Development",
    desc: "MVP to scale — revenue-generating SaaS platforms",
    href: "/services/saas-product-development",
    icon: <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />,
  },
  {
    title: "AI & Intelligent Automation",
    desc: "AI agents, MCP servers & workflow automation",
    href: "/services/ai-intelligent-automation",
    icon: <><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></>,
  },
  {
    title: "Web & App Development",
    desc: "Scalable web and mobile apps, pixel-perfect",
    href: "/services/web-app-development",
    icon: <><rect x="5" y="2" width="14" height="20" rx="2" /><line x1="12" y1="18" x2="12" y2="18" /></>,
  },
  {
    title: "Software Maintenance & Support",
    desc: "Long-term partnership, security & scalability",
    href: "/services/software-maintenance-support",
    icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
  },
];

const industryHrefs = [
  "/industries/fintech",
  "/industries",
  "/industries",
  "/industries",
  "/industries",
  "/industries",
  "/industries",
  "/industries",
  "/industries",
  "/industries",
];

const industryIcons = [
  <path key="fintech" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />,
  <path key="health" d="M22 12h-4l-3 9L9 3l-3 9H2" />,
  <>
    <rect key="ecom-r" x="2" y="7" width="20" height="14" rx="2" />
    <path key="ecom-p" d="M16 7V5a4 4 0 00-8 0v2" />
  </>,
  <>
    <path key="re-p" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
    <polyline key="re-pl" points="9 22 9 12 15 12 15 22" />
  </>,
  <>
    <path key="ed-p1" d="M4 19.5A2.5 2.5 0 016.5 17H20" />
    <path key="ed-p2" d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
  </>,
  <>
    <rect key="log-r" x="1" y="3" width="15" height="13" rx="2" />
    <path key="log-p" d="M16 8h5a2 2 0 012 2v8a2 2 0 01-2 2H7a2 2 0 01-2-2v-3" />
  </>,
  <>
    <circle key="mfg-c" cx="12" cy="12" r="3" />
    <path key="mfg-p" d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
  </>,
  <>
    <path key="hr-p" d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
    <circle key="hr-c" cx="9" cy="7" r="4" />
    <path key="hr-p2" d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
  </>,
  <path key="legal" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
  <>
    <path key="travel-p" d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.4-.1.9.3 1.1L11 12l-2 3H6l-1 1 3 2 2 3 1-1v-3l3-2 3.7 7.3c.2.4.7.5 1.1.3l.5-.3c.4-.2.6-.6.5-1.1z" />
  </>,
];

export default function Navbar({ showAnnouncementBar = true }: { showAnnouncementBar?: boolean }) {
  const { t, isRTL } = useLanguage();
  const { openDialog } = useBooking();
  const n = t.nav;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  // Prevent body scroll when mobile menu is open (including iOS)
  useEffect(() => {
    if (mobileOpen) {
      const scrollY = window.scrollY;
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
    } else {
      const top = document.body.style.top;
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      if (top) window.scrollTo(0, -parseInt(top, 10));
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
    };
  }, [mobileOpen]);

  return (
    <>
    <nav
      className={`fixed left-0 w-full z-[100] px-[3rem] py-5 flex items-center justify-between backdrop-blur-[20px] bg-[rgba(10,10,10,0.6)] border-b border-[rgba(255,255,255,0.08)] transition-all duration-400 max-[1100px]:px-6 max-[1100px]:py-4 ${showAnnouncementBar ? "top-9 max-sm:top-[2.75rem]" : "top-0"}`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image
          src="/logo.png"
          alt="OrchiX Software Solutions"
          width={140}
          height={40}
          className="object-contain brightness-110"
          style={{ height: "40px", width: "auto" }}
          priority
        />
      </Link>

      {/* Nav Links */}
      <ul className={`flex items-center gap-10 list-none max-[600px]:hidden ${isRTL ? "font-cairo" : ""}`}>
        {/* Services Dropdown */}
        <li className="relative group">
          <a
            href="#"
            className="text-[#8a8680] text-[0.875rem] no-underline tracking-[0.03em] font-medium uppercase transition-colors duration-300 hover:text-[#f5f2eb] inline-flex items-center gap-[0.35rem]"
          >
            {n.services}
            <svg
              className="w-3 h-3 stroke-current fill-none stroke-2 transition-transform duration-300 group-hover:rotate-180"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </a>

          {/* Invisible bridge */}
          <div className="absolute top-full left-[-2rem] right-[-2rem] h-8 hidden group-hover:block" />

          {/* Services Mega Menu */}
          <div className={`absolute top-[calc(100%+1rem)] ${isRTL ? "right-0" : "left-[-1rem]"} translate-y-[10px] w-[680px] bg-[rgba(18,18,18,0.98)] backdrop-blur-[30px] border border-[rgba(255,255,255,0.08)] rounded-2xl opacity-0 invisible pointer-events-none transition-all duration-[350ms] ease-[cubic-bezier(0.4,0,0.2,1)] z-[200] shadow-[0_25px_60px_rgba(0,0,0,0.5),0_0_1px_rgba(255,255,255,0.05)] overflow-hidden group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:pointer-events-auto max-[1100px]:w-[580px] max-[768px]:w-[90vw]`}>
            {/* Top accent */}
            <div className="h-[1px] w-full" style={{ background: "linear-gradient(90deg, transparent, rgba(124,91,245,0.5), transparent)" }} />
            <div className="grid grid-cols-2 gap-[1px] bg-[rgba(255,255,255,0.06)]">
              {serviceNavItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="bg-[rgba(10,10,10,0.9)] p-[1.2rem] flex items-start gap-3 cursor-pointer transition-all duration-300 no-underline hover:bg-[rgba(124,91,245,0.06)] group/item"
                >
                  <div className="w-9 h-9 min-w-[36px] rounded-lg flex items-center justify-center bg-[rgba(124,91,245,0.08)] border border-[rgba(124,91,245,0.12)] transition-all duration-300 group-hover/item:bg-[rgba(124,91,245,0.15)] group-hover/item:border-[rgba(124,91,245,0.25)]">
                    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      {item.icon}
                    </svg>
                  </div>
                  <div>
                    <h4 className={`${isRTL ? "font-cairo" : "font-syne"} font-bold text-[0.8rem] text-[#f5f2eb] mb-1 tracking-[-0.01em]`}>
                      {item.title}
                    </h4>
                    <p className="text-[0.7rem] leading-[1.5] text-[#8a8680]">
                      {item.desc}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </li>

        {/* Industries Dropdown */}
        <li className="relative group">
          <a
            href="#"
            className="text-[#8a8680] text-[0.875rem] no-underline tracking-[0.03em] font-medium uppercase transition-colors duration-300 hover:text-[#f5f2eb] inline-flex items-center gap-[0.35rem]"
          >
            {n.industries}
            <svg
              className="w-3 h-3 stroke-current fill-none stroke-2 transition-transform duration-300 group-hover:rotate-180"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </a>

          {/* Invisible bridge */}
          <div className="absolute top-full left-[-2rem] right-[-2rem] h-8 hidden group-hover:block" />

          {/* Industries Mega Menu — same style as services */}
          <div className={`absolute top-[calc(100%+1rem)] ${isRTL ? "right-1/2 translate-x-1/2" : "left-1/2 -translate-x-1/2"} translate-y-[10px] w-[680px] bg-[rgba(18,18,18,0.98)] backdrop-blur-[30px] border border-[rgba(255,255,255,0.08)] rounded-2xl opacity-0 invisible pointer-events-none transition-all duration-[350ms] ease-[cubic-bezier(0.4,0,0.2,1)] z-[200] shadow-[0_25px_60px_rgba(0,0,0,0.5),0_0_1px_rgba(255,255,255,0.05)] overflow-hidden group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:pointer-events-auto max-[1100px]:w-[580px] max-[768px]:w-[90vw]`}>
            {/* Top accent */}
            <div className="h-[1px] w-full" style={{ background: "linear-gradient(90deg, transparent, rgba(124,91,245,0.5), transparent)" }} />
            <div className="grid grid-cols-2 gap-[1px] bg-[rgba(255,255,255,0.06)]">
              {n.industries_items.map((item, idx) => (
                <Link
                  key={item.title}
                  href={industryHrefs[idx] ?? "/industries"}
                  className="bg-[rgba(10,10,10,0.9)] p-[1.2rem] flex items-start gap-3 cursor-pointer transition-all duration-300 no-underline hover:bg-[rgba(124,91,245,0.06)] group/item"
                >
                  <div className="w-9 h-9 min-w-[36px] rounded-lg flex items-center justify-center bg-[rgba(124,91,245,0.08)] border border-[rgba(124,91,245,0.12)] transition-all duration-300 group-hover/item:bg-[rgba(124,91,245,0.15)] group-hover/item:border-[rgba(124,91,245,0.25)]">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-4 h-4"
                      fill="none"
                      stroke="#a78bfa"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      {industryIcons[idx]}
                    </svg>
                  </div>
                  <div>
                    <h4 className={`${isRTL ? "font-cairo" : "font-syne"} font-bold text-[0.8rem] text-[#f5f2eb] mb-1 tracking-[-0.01em]`}>
                      {item.title}
                    </h4>
                    <p className={`${isRTL ? "font-cairo" : ""} text-[0.7rem] leading-[1.5] text-[#8a8680] font-normal`}>
                      {item.desc}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </li>

        <li>
          <Link href="/about" className="text-[#8a8680] text-[0.875rem] no-underline tracking-[0.03em] font-medium uppercase transition-colors duration-300 hover:text-[#f5f2eb]">
            {n.about}
          </Link>
        </li>
        <li>
          <Link href="/contact" className="text-[#8a8680] text-[0.875rem] no-underline tracking-[0.03em] font-medium uppercase transition-colors duration-300 hover:text-[#f5f2eb]">
            Contact
          </Link>
        </li>
        <li>
          <Link href="/blogs" className="text-[#8a8680] text-[0.875rem] no-underline tracking-[0.03em] font-medium uppercase transition-colors duration-300 hover:text-[#f5f2eb]">
            {n.blog}
          </Link>
        </li>
      </ul>

      {/* Right side — language + CTA + Hamburger */}
      <div className="flex items-center gap-3">
        <LanguagePicker />

        {/* CTA Button — desktop only */}
        <button
          onClick={openDialog}
          className={`${isRTL ? "font-cairo" : ""} group/cta px-[1.6rem] py-[0.7rem] bg-transparent border border-[rgba(255,255,255,0.2)] text-[#f5f2eb] text-[0.8rem] tracking-[0.08em] uppercase rounded-full font-semibold transition-all duration-300 cursor-pointer hidden md:inline-flex items-center gap-2 hover:bg-[#f5f2eb] hover:text-[#0a0a0a] hover:border-[#f5f2eb]`}
        >
          {n.cta}
          <svg
            className={`transition-transform duration-300 ${isRTL ? "group-hover/cta:-translate-x-1 rotate-180" : "group-hover/cta:translate-x-1"}`}
            width="14"
            height="14"
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

        {/* Hamburger — mobile only */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="hidden max-[600px]:flex flex-col items-center justify-center w-10 h-10 rounded-lg border border-[rgba(255,255,255,0.12)] bg-[rgba(124,91,245,0.08)] transition-all duration-300 hover:bg-[rgba(124,91,245,0.15)] hover:border-[rgba(124,91,245,0.3)] focus:outline-none"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <span className={`block w-5 h-[2px] bg-[#a78bfa] rounded-full transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[5px]" : ""}`} />
          <span className={`block w-3.5 h-[2px] bg-[#a78bfa] rounded-full transition-all duration-300 mt-[4px] ${mobileOpen ? "opacity-0 scale-0" : "opacity-100"}`} />
          <span className={`block w-5 h-[2px] bg-[#a78bfa] rounded-full transition-all duration-300 mt-[4px] ${mobileOpen ? "-rotate-45 -translate-y-[9px]" : ""}`} />
        </button>
      </div>

    </nav>

    {/* Mobile overlay + panel — portalled to document.body to escape nav stacking context */}
    {mounted && createPortal(
      <>
        {/* Backdrop */}
        <div
          className={`fixed inset-0 z-[150] bg-[rgba(0,0,0,0.6)] backdrop-blur-sm transition-opacity duration-300 sm:hidden ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
          onClick={() => setMobileOpen(false)}
        />

        {/* Panel */}
        <div
          className={`fixed top-0 ${isRTL ? "left-0" : "right-0"} z-[151] h-full w-[80vw] max-w-[320px] bg-[rgba(12,12,12,0.98)] backdrop-blur-[30px] border-l border-[rgba(255,255,255,0.08)] shadow-[-10px_0_40px_rgba(0,0,0,0.5)] transition-transform duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] sm:hidden ${mobileOpen ? "translate-x-0" : (isRTL ? "-translate-x-full" : "translate-x-full")}`}
          dir={isRTL ? "rtl" : "ltr"}
        >
          {/* Purple accent line at top */}
          <div className="h-[2px] w-full" style={{ background: "linear-gradient(90deg, #7c5bf5, #a78bfa, #7c5bf5)" }} />

          {/* Close + branding */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-[rgba(255,255,255,0.06)]">
            <span className={`text-[0.7rem] uppercase tracking-[0.15em] text-[#8a8680] font-semibold ${isRTL ? "font-cairo" : ""}`}>Menu</span>
            <button
              onClick={() => setMobileOpen(false)}
              className="w-8 h-8 rounded-lg flex items-center justify-center border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.04)] hover:bg-[rgba(124,91,245,0.12)] transition-all duration-200"
              aria-label="Close menu"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12" /></svg>
            </button>
          </div>

          {/* Mobile nav items */}
          <div className="overflow-y-auto overscroll-contain h-[calc(100%-8rem)] px-5 py-4 space-y-1">
            {/* Services accordion */}
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className={`w-full flex items-center justify-between py-3 px-3 rounded-xl text-[0.85rem] font-semibold uppercase tracking-[0.05em] transition-all duration-200 ${servicesOpen ? "text-[#a78bfa] bg-[rgba(124,91,245,0.08)]" : "text-[#f5f2eb] hover:bg-[rgba(255,255,255,0.04)]"} ${isRTL ? "font-cairo" : ""}`}
            >
              {n.services}
              <svg className={`w-4 h-4 stroke-current transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round"><path d="M6 9l6 6 6-6" /></svg>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${servicesOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}>
              <div className="pl-3 pr-1 py-1 space-y-0.5">
                {serviceNavItems.map((item) => (
                  <Link key={item.title} href={item.href} className="flex items-center gap-2.5 py-2.5 px-3 rounded-lg text-[0.75rem] text-[#8a8680] hover:text-[#f5f2eb] hover:bg-[rgba(124,91,245,0.06)] transition-all duration-200 no-underline" onClick={() => setMobileOpen(false)}>
                    <div className="w-7 h-7 min-w-[28px] rounded-md flex items-center justify-center bg-[rgba(124,91,245,0.1)] border border-[rgba(124,91,245,0.15)]">
                      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">{item.icon}</svg>
                    </div>
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* Industries accordion */}
            <button
              onClick={() => setIndustriesOpen(!industriesOpen)}
              className={`w-full flex items-center justify-between py-3 px-3 rounded-xl text-[0.85rem] font-semibold uppercase tracking-[0.05em] transition-all duration-200 ${industriesOpen ? "text-[#a78bfa] bg-[rgba(124,91,245,0.08)]" : "text-[#f5f2eb] hover:bg-[rgba(255,255,255,0.04)]"} ${isRTL ? "font-cairo" : ""}`}
            >
              {n.industries}
              <svg className={`w-4 h-4 stroke-current transition-transform duration-300 ${industriesOpen ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round"><path d="M6 9l6 6 6-6" /></svg>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${industriesOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}>
              <div className="pl-3 pr-1 py-1 space-y-0.5">
                {n.industries_items.map((item, idx) => (
                  <Link key={item.title} href={industryHrefs[idx] ?? "/industries"} className="flex items-center gap-2.5 py-2.5 px-3 rounded-lg text-[0.75rem] text-[#8a8680] hover:text-[#f5f2eb] hover:bg-[rgba(124,91,245,0.06)] transition-all duration-200 no-underline" onClick={() => setMobileOpen(false)}>
                    <div className="w-7 h-7 min-w-[28px] rounded-md flex items-center justify-center bg-[rgba(124,91,245,0.1)] border border-[rgba(124,91,245,0.15)]">
                      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">{industryIcons[idx]}</svg>
                    </div>
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* Simple links */}
            <Link href="/about" className={`block py-3 px-3 rounded-xl text-[0.85rem] font-semibold uppercase tracking-[0.05em] text-[#f5f2eb] hover:bg-[rgba(255,255,255,0.04)] transition-all duration-200 no-underline ${isRTL ? "font-cairo" : ""}`} onClick={() => setMobileOpen(false)}>
              {n.about}
            </Link>
            <Link href="/contact" className={`block py-3 px-3 rounded-xl text-[0.85rem] font-semibold uppercase tracking-[0.05em] text-[#f5f2eb] hover:bg-[rgba(255,255,255,0.04)] transition-all duration-200 no-underline ${isRTL ? "font-cairo" : ""}`} onClick={() => setMobileOpen(false)}>
              Contact
            </Link>
            <Link href="/blogs" className={`block py-3 px-3 rounded-xl text-[0.85rem] font-semibold uppercase tracking-[0.05em] text-[#f5f2eb] hover:bg-[rgba(255,255,255,0.04)] transition-all duration-200 no-underline ${isRTL ? "font-cairo" : ""}`} onClick={() => setMobileOpen(false)}>
              {n.blog}
            </Link>

            {/* Let's Talk CTA */}
            <div className="pt-3 pb-1">
              <button
                className={`${isRTL ? "font-cairo" : ""} w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-[#7c5bf5] text-white text-[0.85rem] font-semibold tracking-[0.06em] uppercase cursor-pointer transition-all duration-300 hover:bg-[#6b4ce0] shadow-[0_4px_20px_rgba(124,91,245,0.35)]`}
                onClick={() => { setMobileOpen(false); setTimeout(openDialog, 350); }}
              >
                {n.cta}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>

          {/* Mobile CTA at bottom */}
          <div className="absolute bottom-0 left-0 right-0 px-5 py-4 border-t border-[rgba(255,255,255,0.06)] bg-[rgba(12,12,12,0.95)]">
            <button
              className={`${isRTL ? "font-cairo" : ""} w-full flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#7c5bf5] text-white text-[0.8rem] font-semibold tracking-[0.05em] uppercase cursor-pointer transition-all duration-300 hover:bg-[#6b4ce0] shadow-[0_4px_20px_rgba(124,91,245,0.3)]`}
              onClick={() => { setMobileOpen(false); setTimeout(openDialog, 350); }}
            >
              {n.cta}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
      </>,
      document.body
    )}
    </>
  );
}
