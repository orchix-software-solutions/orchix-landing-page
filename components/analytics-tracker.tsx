"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, Suspense } from "react";

const GA_ID = "G-BVWY5HX3RK";

function Tracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = pathname + (searchParams.toString() ? `?${searchParams.toString()}` : "");
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("config", GA_ID, { page_path: url });
    }
  }, [pathname, searchParams]);

  return null;
}

// Suspense required because useSearchParams() suspends in App Router
export default function AnalyticsTracker() {
  return (
    <Suspense fallback={null}>
      <Tracker />
    </Suspense>
  );
}
