"use client";

import { useEffect, useRef, useState } from "react";

export default function PageLoadHandler() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const el = overlayRef.current;
    if (!el) return;

    // Two rAF ticks ensure the browser has painted the initial blurred frame
    // before we start the transition out.
    const id = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        el.style.opacity = "0";
        el.style.backdropFilter = "blur(0px)";
        (el.style as CSSStyleDeclaration & { webkitBackdropFilter: string }).webkitBackdropFilter = "blur(0px)";
      });
    });

    // Remove the DOM node after the transition finishes (950 ms)
    const timer = setTimeout(() => setGone(true), 1000);

    return () => {
      cancelAnimationFrame(id);
      clearTimeout(timer);
    };
  }, []);

  if (gone) return null;

  return (
    <div
      ref={overlayRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 10000,
        background: "rgba(10, 10, 10, 0.75)",
        backdropFilter: "blur(22px)",
        WebkitBackdropFilter: "blur(22px)",
        pointerEvents: "none",
        transition:
          "opacity 0.85s cubic-bezier(0.4, 0, 0.2, 1), backdrop-filter 0.85s cubic-bezier(0.4, 0, 0.2, 1), -webkit-backdrop-filter 0.85s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    />
  );
}
