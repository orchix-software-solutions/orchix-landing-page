"use client";

import { useBooking } from "@/lib/booking-context";

export default function CtaButton({ label = "Book a Free Call" }: { label?: string }) {
  const { openDialog } = useBooking();
  return (
    <button
      onClick={openDialog}
      className="group/cta inline-flex items-center gap-2 px-7 py-[0.9rem] bg-[#7c5bf5] text-white text-[0.88rem] font-semibold rounded-full tracking-[0.02em] transition-all duration-300 no-underline shadow-[0_0_30px_rgba(124,91,245,0.35)] hover:bg-[#6a4ae0] hover:shadow-[0_0_55px_rgba(124,91,245,0.55)] hover:-translate-y-[2px] cursor-pointer border-none"
    >
      {label}
      <svg
        className="transition-transform duration-300 group-hover/cta:translate-x-[3px]"
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
  );
}
