"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { blogPosts, formatDate } from "@/lib/blog-data";

export default function BlogsPage() {
  const [likes, setLikes] = useState<Record<string, number>>({});
  const [liked, setLiked] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const stored = localStorage.getItem("orchix-blog-likes");
    const storedLiked = localStorage.getItem("orchix-blog-liked");
    if (stored) setLikes(JSON.parse(stored));
    if (storedLiked) setLiked(JSON.parse(storedLiked));
  }, []);

  const toggleLike = (slug: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const isLiked = liked[slug];
    const newLikes = {
      ...likes,
      [slug]: (likes[slug] || 0) + (isLiked ? -1 : 1),
    };
    const newLiked = { ...liked, [slug]: !isLiked };
    setLikes(newLikes);
    setLiked(newLiked);
    localStorage.setItem("orchix-blog-likes", JSON.stringify(newLikes));
    localStorage.setItem("orchix-blog-liked", JSON.stringify(newLiked));
  };

  const rest = blogPosts;

  return (
    <main className="flex-1 bg-[#0a0a0a]">
        {/* Hero */}
        <section className="relative pt-[14rem] pb-20 px-[3rem] max-[1100px]:px-6 max-[600px]:px-4 max-[600px]:pt-[11rem]">
          {/* Background glow */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(124,91,245,0.1) 0%, transparent 70%)",
            }}
            aria-hidden="true"
          />

          <div className="max-w-[1200px] mx-auto text-center relative z-[1]">
            <span className="inline-flex items-center gap-2 text-[0.68rem] uppercase tracking-[0.16em] font-semibold text-[#a78bfa] mb-5">
              <span className="w-5 h-px bg-[rgba(124,91,245,0.6)]" />
              Our Blog
              <span className="w-5 h-px bg-[rgba(124,91,245,0.6)]" />
            </span>
            <h1
              className="font-syne font-extrabold tracking-[-0.04em] leading-[1.3] text-[#f5f2eb] mb-5 pt-2"
              style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)" }}
            >
              Insights, guides &{" "}
              <span className="font-playfair italic font-normal text-[#a78bfa]">
                real talk.
              </span>
            </h1>
            <p className="text-[0.92rem] text-[#8a8680] max-w-[520px] mx-auto leading-[1.8]">
              No fluff. No thought-leadership buzzwords. Just practical
              insights from building enterprise software, SaaS products, and
              AI systems.
            </p>
          </div>
        </section>

        {/* Blog grid */}
        <section className="max-w-[1200px] mx-auto px-[3rem] pb-20 max-[1100px]:px-6 max-[600px]:px-4">
          <div className="grid grid-cols-3 gap-6 max-[900px]:grid-cols-2 max-[600px]:grid-cols-1">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blogs/${post.slug}`}
                className="group/card relative flex flex-col rounded-[20px] overflow-hidden border border-[rgba(255,255,255,0.07)] bg-[rgba(14,14,14,0.9)] no-underline transition-all duration-500 hover:border-[rgba(124,91,245,0.25)] hover:shadow-[0_0_40px_rgba(124,91,245,0.08)] hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover/card:scale-105"
                    sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 400px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(14,14,14,0.6)] to-transparent" />

                  {/* Read time badge */}
                  <span className="absolute bottom-3 right-3 text-[0.62rem] font-semibold text-white bg-[rgba(0,0,0,0.6)] px-2.5 py-1 rounded-md backdrop-blur-sm">
                    {post.readTime}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-syne font-bold text-[1.05rem] leading-[1.3] tracking-[-0.01em] text-[#f5f2eb] mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-[0.78rem] leading-[1.65] text-[#8a8680] mb-5 line-clamp-2 flex-1">
                    {post.excerpt}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-[rgba(255,255,255,0.05)]">
                    <span className="text-[0.7rem] text-[#8a8680]">
                      {formatDate(post.date)} &middot; {post.readTime}
                    </span>

                    <button
                      onClick={(e) => toggleLike(post.slug, e)}
                      className={`group/heart flex items-center gap-1 px-2 py-1 rounded-full transition-all duration-300 ${
                        liked[post.slug]
                          ? "text-red-400"
                          : "text-[#8a8680] hover:text-red-400"
                      }`}
                    >
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 24 24"
                        fill={liked[post.slug] ? "currentColor" : "none"}
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`transition-transform duration-300 ${liked[post.slug] ? "scale-110" : "group-hover/heart:scale-110"}`}
                      >
                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                      </svg>
                      <span className="text-[0.65rem] font-semibold tabular-nums">
                        {likes[post.slug] || 0}
                      </span>
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
    </main>
  );
}
