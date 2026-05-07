"use client";

import { useBooking } from "@/lib/booking-context";

const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/orchix-software-solutions",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "https://x.com/orchixsoftwares",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/orchix-software-solutions",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/orchixsoftwaresolutions",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

const NAV_LINKS = [
  { label: "Services", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "About", href: "#" },
  { label: "Contact", href: "#" },
];

export default function Footer() {
  const { openDialog } = useBooking();
  return (
    <footer className="relative z-[2] mt-10">
      {/* Top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[1px] pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent, rgba(124,91,245,0.4), transparent)" }}
        aria-hidden="true"
      />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[120px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at top, rgba(124,91,245,0.07) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      {/* CTA band */}
      <div className="max-w-[1200px] mx-auto px-[3rem] pt-20 pb-10 max-[1100px]:px-6 max-[600px]:px-4 max-[600px]:pt-14">
        <div className="relative rounded-[24px] border border-[rgba(124,91,245,0.2)] bg-[rgba(124,91,245,0.05)] px-12 py-12 text-center overflow-hidden max-[600px]:px-6 max-[600px]:py-10">
          {/* Card inner glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(124,91,245,0.12) 0%, transparent 65%)" }}
            aria-hidden="true"
          />
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[1px] pointer-events-none"
            style={{ background: "linear-gradient(90deg, transparent, rgba(124,91,245,0.6), transparent)" }}
            aria-hidden="true"
          />

          <span className="inline-block text-[0.68rem] uppercase tracking-[0.15em] font-semibold text-[#a78bfa] mb-4">
            Let&apos;s Work Together
          </span>
          <h2
            className="relative z-[1] font-syne font-extrabold tracking-[-0.03em] leading-[1.15] text-[#f5f2eb] mb-4"
            style={{ fontSize: "clamp(1.7rem, 3.5vw, 2.8rem)" }}
          >
            Ready to build something{" "}
            <span className="font-playfair italic font-normal text-[#a78bfa]">remarkable?</span>
          </h2>
          <p className="relative z-[1] text-[0.87rem] text-[#8a8680] max-w-[420px] mx-auto leading-[1.75] mb-8">
            We have 3 spots open for April. Book a free discovery call and
            let&apos;s map out your idea together.
          </p>
          <div className="relative z-[1] flex items-center justify-center gap-3 flex-wrap">
            <button
              onClick={openDialog}
              className="group/cta inline-flex items-center gap-2 px-7 py-[0.9rem] bg-[#7c5bf5] text-white text-[0.88rem] font-semibold rounded-full tracking-[0.02em] transition-all duration-300 shadow-[0_0_30px_rgba(124,91,245,0.35)] hover:bg-[#6a4ae0] hover:shadow-[0_0_55px_rgba(124,91,245,0.55)] hover:-translate-y-[2px] font-space-grotesk cursor-pointer border-none"
            >
              Book a Free Discovery Call
              <svg className="transition-transform duration-300 group-hover/cta:translate-x-[3px]" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex items-center justify-between gap-6 flex-wrap max-[640px]:flex-col max-[640px]:items-center max-[640px]:text-center">

          {/* Brand */}
          <div>
            <img src="/logo.png" alt="OrchiX" className="h-8 w-auto" />
          </div>

          {/* Nav links */}
          <nav className="flex items-center gap-6 flex-wrap justify-center">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[0.78rem] text-[#8a8680] hover:text-[#f5f2eb] transition-colors duration-200 no-underline"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-2">
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="w-9 h-9 rounded-full flex items-center justify-center border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] text-[#8a8680] hover:text-[#a78bfa] hover:border-[rgba(124,91,245,0.35)] hover:bg-[rgba(124,91,245,0.08)] transition-all duration-250"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 h-px bg-[rgba(255,255,255,0.05)]" />

        {/* Copyright */}
        <div className="mt-6 flex flex-col items-center gap-1">
          <p className="text-center text-[0.7rem] text-[#8a8680]">
            © {new Date().getFullYear()} OrchiX. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
