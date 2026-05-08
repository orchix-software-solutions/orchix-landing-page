"use client";

import { useEffect, useRef, useState } from "react";

interface Chapter {
  id: string;
  text: string;
}

export default function ChapterNav({ chapters }: { chapters: Chapter[] }) {
  const [activeId, setActiveId] = useState<string>("");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const headingEls = chapters
      .map((c) => document.getElementById(c.id))
      .filter(Boolean) as HTMLElement[];

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-80px 0px -65% 0px", threshold: 0 }
    );

    headingEls.forEach((el) => observerRef.current?.observe(el));
    return () => observerRef.current?.disconnect();
  }, [chapters]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveId(id);
    }
  };

  return (
    <nav aria-label="Chapter navigation">
      <p className="text-[0.62rem] uppercase tracking-[0.14em] font-bold text-[#a78bfa] mb-4 px-3">
        Chapters
      </p>
      <ul className="space-y-0.5">
        {chapters.map((chapter, i) => (
          <li key={chapter.id}>
            <a
              href={`#${chapter.id}`}
              onClick={(e) => handleClick(e, chapter.id)}
              className={`flex items-start gap-2.5 text-[0.74rem] leading-[1.5] py-1.5 px-3 rounded-lg transition-all duration-200 border-l-2 no-underline ${
                activeId === chapter.id
                  ? "text-[#c4b5fd] border-[#7c5bf5] bg-[rgba(124,91,245,0.08)] font-medium"
                  : "text-[#6b6760] border-transparent hover:text-[#c4bfb8] hover:border-[rgba(124,91,245,0.25)] hover:bg-[rgba(255,255,255,0.02)]"
              }`}
            >
              <span
                className={`shrink-0 text-[0.6rem] tabular-nums mt-[2px] ${
                  activeId === chapter.id ? "text-[#7c5bf5]" : "text-[#4a4845]"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>{chapter.text}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
