"use client";

import { useEffect, useState } from "react";
import { useBooking } from "@/lib/booking-context";

const currentMonth = new Date().toLocaleString("en-US", { month: "long" });

export default function EngagementDialog() {
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);
  const { openDialog } = useBooking();

  useEffect(() => {
    // Don't show again if dismissed this session
    if (sessionStorage.getItem("dialog-dismissed")) return;

    // Show after page-load blur animation finishes + small pause
    const timer = setTimeout(() => setVisible(true), 2800);
    return () => clearTimeout(timer);
  }, []);

  const dismiss = () => {
    setClosing(true);
    sessionStorage.setItem("dialog-dismissed", "1");
    setTimeout(() => setVisible(false), 400);
  };

  if (!visible) return null;

  return (
    /* Backdrop */
    <div
      className={`fixed inset-0 z-[9000] flex items-center justify-center px-4 transition-all duration-400 ${
        closing ? "opacity-0" : "opacity-100"
      }`}
      style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(8px)" }}
      onClick={(e) => e.target === e.currentTarget && dismiss()}
    >
      {/* Card */}
      <div
        className={`relative w-full max-w-[520px] rounded-[20px] border border-[rgba(255,255,255,0.08)] bg-[#111111] shadow-[0_40px_100px_rgba(0,0,0,0.7),0_0_0_1px_rgba(124,91,245,0.08)] overflow-hidden transition-all duration-400 ${
          closing
            ? "opacity-0 scale-95 translate-y-4"
            : "opacity-100 scale-100 translate-y-0"
        }`}
        style={{ animation: closing ? "none" : "dialogIn 0.45s cubic-bezier(0.34,1.56,0.64,1) both" }}
      >
        {/* Top accent glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[340px] h-[1px]"
          style={{ background: "linear-gradient(90deg, transparent, rgba(124,91,245,0.6), transparent)" }}
          aria-hidden="true"
        />
        <div
          className="absolute -top-12 left-1/2 -translate-x-1/2 w-[280px] h-[120px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center, rgba(124,91,245,0.12) 0%, transparent 70%)" }}
          aria-hidden="true"
        />

        {/* Close button */}
        <button
          onClick={dismiss}
          className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.08)] text-[#8a8680] hover:text-[#f5f2eb] hover:bg-[rgba(255,255,255,0.1)] transition-all duration-200"
          aria-label="Close"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <div className="px-8 pt-8 pb-7">
          {/* Urgency pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(124,91,245,0.3)] bg-[rgba(124,91,245,0.07)] mb-5">
            <span className="w-[6px] h-[6px] rounded-full bg-[#7c5bf5] animate-[blink_2s_ease-in-out_infinite]" aria-hidden="true" />
            <span className="text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-[#a78bfa]">
              Only 3 spots left for {currentMonth}
            </span>
          </div>

          {/* Headline */}
          <h2 className="font-syne font-extrabold text-[1.35rem] leading-[1.2] tracking-[-0.03em] text-[#f5f2eb] mb-2">
            Let&apos;s Build Something{" "}
            <span className="font-playfair italic font-normal text-[#a78bfa] text-[2.8rem] leading-[1]">Great</span>{" "}
            Together.
          </h2>

          <p className="text-[0.85rem] leading-[1.65] text-[#8a8680] mb-6">
            In a 30-min discovery call we&apos;ll map out your idea, timeline, and a
            clear path to launch — no fluff, no obligation.
          </p>

          {/* Value props */}
          <ul className="space-y-2 mb-7">
            {[
              "Transparent pricing — no surprises, ever",
              "Weekly progress reports you can actually read",
              "Pixel-perfect design with blazing-fast performance",
              "Deadlines matter — we ship on time, every time",
            ].map((item) => (
              <li key={item} className="flex items-start gap-[10px] text-[0.82rem] text-[#c4bfb8]">
                <svg className="shrink-0 mt-[2px]" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7c5bf5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                {item}
              </li>
            ))}
          </ul>

          {/* Founder POV */}
          <div className="flex items-start gap-3 mb-6 px-4 py-3 rounded-xl bg-[rgba(124,91,245,0.06)] border border-[rgba(124,91,245,0.12)]">
            <img
              src="/parit-bhardwaj-orchix-founder.jpg"
              alt="Parit Bhardwaj, Founder"
              className="w-10 h-10 rounded-full object-cover shrink-0 border-2 border-[rgba(124,91,245,0.4)]"
            />
            <div>
              <p className="text-[0.78rem] leading-[1.6] text-[#c4bfb8] italic">
                &ldquo;Every founder deserves a technical partner who treats their vision like their own. I personally oversee every project we take on — your success is my reputation.&rdquo;
              </p>
              <p className="mt-1.5 text-[0.7rem] font-semibold text-[#a78bfa] tracking-[0.05em]">
                Parit Bhardwaj &mdash; Founder, Orchix
              </p>
            </div>
          </div>

          {/* CTA */}
          <button
            onClick={() => { dismiss(); setTimeout(openDialog, 420); }}
            className="group/cta w-full inline-flex items-center justify-center gap-[0.5rem] px-6 py-[0.9rem] bg-[#7c5bf5] text-white text-[0.88rem] font-semibold rounded-full tracking-[0.02em] transition-all duration-300 cursor-pointer shadow-[0_0_30px_rgba(124,91,245,0.3)] hover:bg-[#6a4ae0] hover:shadow-[0_0_50px_rgba(124,91,245,0.5)] hover:-translate-y-[1px] font-space-grotesk"
          >
            Book a Free Discovery Call
            <svg className="transition-transform duration-300 group-hover/cta:translate-x-[3px]" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <style>{`
        @keyframes dialogIn {
          from { opacity: 0; transform: scale(0.92) translateY(20px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </div>
  );
}
