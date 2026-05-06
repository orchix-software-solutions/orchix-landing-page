"use client";

import { useState, useEffect, useRef } from "react";

const MAX_LIKES = 50;

export default function LikeButton({ slug }: { slug: string }) {
  const [count, setCount] = useState(0);
  const [userLikes, setUserLikes] = useState(0);
  const [burst, setBurst] = useState(false);
  const burstTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("orchix-blog-likes") || "{}");
    const storedUser = JSON.parse(localStorage.getItem("orchix-blog-user-likes") || "{}");
    setCount(stored[slug] || 0);
    setUserLikes(storedUser[slug] || 0);
  }, [slug]);

  const handleClick = () => {
    if (userLikes >= MAX_LIKES) return;

    const newCount = count + 1;
    const newUserLikes = userLikes + 1;
    setCount(newCount);
    setUserLikes(newUserLikes);
    setBurst(true);

    if (burstTimer.current) clearTimeout(burstTimer.current);
    burstTimer.current = setTimeout(() => setBurst(false), 300);

    const stored = JSON.parse(localStorage.getItem("orchix-blog-likes") || "{}");
    const storedUser = JSON.parse(localStorage.getItem("orchix-blog-user-likes") || "{}");
    stored[slug] = newCount;
    storedUser[slug] = newUserLikes;
    localStorage.setItem("orchix-blog-likes", JSON.stringify(stored));
    localStorage.setItem("orchix-blog-user-likes", JSON.stringify(storedUser));
  };

  const hasLiked = userLikes > 0;

  return (
    <button
      onClick={handleClick}
      title={userLikes >= MAX_LIKES ? "Max likes reached" : `Click to like (${MAX_LIKES - userLikes} left)`}
      className={`group/heart inline-flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-200 select-none ${
        hasLiked
          ? "border-[rgba(239,68,68,0.4)] bg-[rgba(239,68,68,0.08)] text-red-400"
          : "border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] text-[#8a8680] hover:border-[rgba(239,68,68,0.3)] hover:text-red-400"
      }`}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill={hasLiked ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`transition-transform duration-150 ${burst ? "scale-125" : hasLiked ? "scale-110" : "group-hover/heart:scale-110"}`}
      >
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
      <span className="text-[0.78rem] font-semibold tabular-nums">{count}</span>
    </button>
  );
}
