"use client";

import Image from "next/image";
import Link from "next/link";
import { blogPosts, formatDate } from "@/lib/blog-data";

const PREVIEW_COUNT = 3;

export default function BlogsSection() {
  const posts = blogPosts.slice(0, PREVIEW_COUNT);

  return (
    <section className="relative z-[2] px-[3rem] py-[5rem] max-[1100px]:px-6 max-[600px]:px-4 max-[600px]:py-12">
      {/* Background glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, rgba(124,91,245,0.07) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="max-w-[1200px] mx-auto relative z-[1]">
        {/* Header */}
        <div className="flex items-end justify-between gap-6 mb-10 flex-wrap">
          <div>
            <span className="inline-block text-[0.7rem] uppercase tracking-[0.15em] font-semibold text-[#a78bfa] mb-3">
              From the Blog
            </span>
            <h2
              className="font-syne font-extrabold tracking-[-0.04em] leading-[1.1] text-[#f5f2eb]"
              style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.9rem)" }}
            >
              Insights &{" "}
              <span className="font-playfair italic font-normal text-[#a78bfa]">real talk.</span>
            </h2>
          </div>
          <Link
            href="/blogs"
            className="group inline-flex items-center gap-2 text-[0.8rem] font-semibold text-[#8a8680] hover:text-[#a78bfa] transition-colors duration-200 no-underline shrink-0"
          >
            All articles
            <svg
              className="transition-transform duration-300 group-hover:translate-x-[3px]"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-3 gap-5 max-[900px]:grid-cols-2 max-[580px]:grid-cols-1">
          {posts.map((post, i) => (
            <Link
              key={post.slug}
              href={`/blogs/${post.slug}`}
              className="group/card relative flex flex-col rounded-[20px] overflow-hidden border border-[rgba(255,255,255,0.07)] bg-[rgba(14,14,14,0.9)] no-underline transition-all duration-500 hover:border-[rgba(124,91,245,0.25)] hover:shadow-[0_0_40px_rgba(124,91,245,0.1)] hover:-translate-y-1"
            >
              {/* Top colour strip */}
              <div
                className="h-[2px] shrink-0"
                style={{ background: i === 0 ? "linear-gradient(90deg,#7c5bf5,transparent 70%)" : i === 1 ? "linear-gradient(90deg,#a78bfa,transparent 70%)" : "linear-gradient(90deg,#6d4fe0,transparent 70%)" }}
              />

              {/* Cover image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover/card:scale-105"
                  sizes="(max-width: 580px) 100vw, (max-width: 900px) 50vw, 400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(14,14,14,0.65)] to-transparent" />
                <span className="absolute bottom-3 right-3 text-[0.62rem] font-semibold text-white bg-[rgba(0,0,0,0.6)] px-2.5 py-1 rounded-md backdrop-blur-sm">
                  {post.readTime}
                </span>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="text-[0.6rem] font-semibold uppercase tracking-[0.08em] px-2 py-0.5 rounded-full border border-[rgba(124,91,245,0.2)] bg-[rgba(124,91,245,0.07)] text-[#a78bfa]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="font-syne font-bold text-[0.95rem] leading-[1.35] tracking-[-0.01em] text-[#f5f2eb] mb-2 line-clamp-2 group-hover/card:text-[#a78bfa] transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-[0.76rem] leading-[1.65] text-[#8a8680] mb-4 line-clamp-2 flex-1">
                  {post.excerpt}
                </p>

                {/* Footer row */}
                <div className="flex items-center justify-between pt-4 border-t border-[rgba(255,255,255,0.05)]">
                  <div className="flex items-center gap-2">
                    <div className="relative w-6 h-6 rounded-full overflow-hidden border border-[rgba(124,91,245,0.3)] shrink-0">
                      <Image
                        src={post.author.avatar}
                        alt={post.author.name}
                        fill
                        className="object-cover object-top"
                        sizes="24px"
                      />
                    </div>
                    <span className="text-[0.68rem] text-[#f5f2eb] font-medium">{post.author.name}</span>
                    <span className="text-[#8a8680]/40">·</span>
                    <span className="text-[0.68rem] text-[#8a8680]">{formatDate(post.date)}</span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[0.68rem] font-semibold text-[#a78bfa] opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                    Read
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        {blogPosts.length > PREVIEW_COUNT && (
          <div className="mt-10 text-center">
            <Link
              href="/blogs"
              className="group inline-flex items-center gap-2 px-7 py-[0.85rem] rounded-full border border-[rgba(124,91,245,0.25)] bg-[rgba(124,91,245,0.07)] text-[#a78bfa] text-[0.85rem] font-semibold tracking-[0.02em] transition-all duration-300 no-underline hover:bg-[rgba(124,91,245,0.14)] hover:border-[rgba(124,91,245,0.4)]"
            >
              View all articles
              <svg
                className="transition-transform duration-300 group-hover:translate-x-[3px]"
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
