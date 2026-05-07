"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const GA_ID = "G-BVWY5HX3RK";

export default function AnalyticsTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window.gtag === "function") {
      window.gtag("config", GA_ID, { page_path: pathname });
    }
  }, [pathname]);

  return null;
}
