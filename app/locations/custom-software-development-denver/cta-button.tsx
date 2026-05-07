"use client";

import { useBooking } from "@/lib/booking-context";

export default function LocationCtaButton({ label }: { label: string }) {
  const { openDialog } = useBooking();
  return (
    <button
      onClick={openDialog}
      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-syne font-semibold text-[0.9rem] text-white bg-[#7c5bf5] transition-all duration-200 hover:bg-[#6b4de0] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(124,91,245,0.35)] cursor-pointer"
    >
      {label}
    </button>
  );
}
