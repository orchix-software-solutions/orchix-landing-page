import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getPostBySlug, formatDate } from "@/lib/blog-data";
import LikeButton from "./like-button";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const ogImage = post.coverImage.startsWith("http")
    ? post.coverImage
    : `https://orchixsoftwaresolutions.com${post.coverImage}`;

  return {
    title: post.title,
    description: post.metaDescription,
    openGraph: {
      type: "article",
      url: `https://orchixsoftwaresolutions.com/blogs/${post.slug}`,
      title: post.title,
      description: post.metaDescription,
      publishedTime: post.date,
      authors: [post.author.name],
      images: [{ url: ogImage, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.metaDescription,
      images: [ogImage],
    },
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <main className="flex-1 bg-[#0a0a0a]">
        {/* Blog header */}
        <section className="pt-[12rem] pb-10 px-[3rem] max-[1100px]:px-6 max-[600px]:px-4 max-[600px]:pt-[9rem]">
          <div className="max-w-[1200px] mx-auto">
            {/* Back link */}
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 text-[0.75rem] text-[#a78bfa] font-semibold tracking-[0.05em] uppercase mb-6 no-underline hover:text-[#c4b5fd] transition-colors duration-200"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Back to Blogs
            </Link>

            {/* Title */}
            <h1
              className="font-syne font-extrabold tracking-[-0.03em] leading-[1.15] text-[#f5f2eb] mb-6"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}
            >
              {post.title}
            </h1>

            {/* Author row */}
            <div className="flex items-center gap-3 mb-10">
              <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-[rgba(124,91,245,0.4)] shadow-[0_0_15px_rgba(124,91,245,0.2)]">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  fill
                  className="object-cover object-top"
                  sizes="44px"
                />
              </div>
              <div>
                <p className="text-[0.85rem] font-semibold text-[#f5f2eb]">
                  {post.author.name}
                </p>
                <p className="text-[0.7rem] text-[#8a8680]">
                  {post.author.role} &middot; {formatDate(post.date)}{" "}
                  &middot; {post.readTime}
                </p>
              </div>
            </div>

            {/* Hero image */}
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.06)]">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover"
                sizes="800px"
                priority
              />
            </div>
          </div>
        </section>

        {/* Article body */}
        <article className="max-w-[1200px] mx-auto px-[3rem] pt-10 pb-16 max-[1100px]:px-6 max-[600px]:px-4 max-[600px]:pt-8 max-[600px]:pb-10">
          <div className="space-y-8">
            {post.content.map((block, i) => {
              switch (block.type) {
                case "paragraph":
                  return (
                    <p
                      key={i}
                      className="text-[1rem] leading-[1.85] text-[#c4bfb8] font-normal"
                    >
                      {block.text}
                    </p>
                  );

                case "paragraph-highlight": {
                  return (
                    <p
                      key={i}
                      className="text-[1rem] leading-[1.85] text-[#c4bfb8] font-normal"
                    >
                      {block.before}
                      <br />
                      <span className="font-semibold text-[#f5f2eb]">
                        {block.highlight}
                      </span>
                      {block.after}
                    </p>
                  );
                }

                case "heading":
                  return (
                    <h2
                      key={i}
                      className="font-syne font-bold text-[1.4rem] leading-[1.3] tracking-[-0.02em] text-[#f5f2eb] pt-4"
                    >
                      {block.text}
                    </h2>
                  );

                case "subheading":
                  return (
                    <h3
                      key={i}
                      className="font-syne font-semibold text-[1.1rem] leading-[1.3] tracking-[-0.01em] text-[#c4b5fd] pt-2"
                    >
                      {block.text}
                    </h3>
                  );

                case "image":
                  return (
                    <figure key={i} className="my-10">
                      <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.06)]">
                        <Image
                          src={block.src}
                          alt={block.alt}
                          fill
                          className="object-cover"
                          sizes="800px"
                        />
                      </div>
                      {block.caption && (
                        <figcaption className="mt-3 text-center text-[0.75rem] text-[#8a8680] italic">
                          {block.caption}
                        </figcaption>
                      )}
                    </figure>
                  );

                case "quote":
                  return (
                    <blockquote
                      key={i}
                      className="relative my-10 pl-6 border-l-2 border-[#7c5bf5] py-2"
                    >
                      <div
                        className="absolute -left-3 -top-2 font-playfair text-[4rem] leading-none text-[#7c5bf5] opacity-20 select-none pointer-events-none"
                        aria-hidden="true"
                      >
                        &ldquo;
                      </div>
                      <p className="text-[1.05rem] leading-[1.7] text-[#f5f2eb] font-medium italic">
                        {block.text}
                      </p>
                      {block.cite && (
                        <cite className="block mt-3 text-[0.78rem] text-[#a78bfa] font-semibold not-italic">
                          — {block.cite}
                        </cite>
                      )}
                    </blockquote>
                  );

                case "list":
                  return (
                    <ul key={i} className="space-y-3 pl-1">
                      {block.items.map((item, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-3 text-[0.95rem] leading-[1.7] text-[#c4bfb8]"
                        >
                          <svg
                            className="shrink-0 mt-[5px]"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#7c5bf5"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M20 6L9 17l-5-5" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  );

                default:
                  return null;
              }
            })}
          </div>

          {/* Divider + like */}
          <div className="mt-16 h-px bg-[rgba(255,255,255,0.06)]" />
          <div className="mt-8 flex justify-center">
            <LikeButton slug={post.slug} />
          </div>
        </article>

        {/* Related posts */}
        {relatedPosts.length > 0 && (
          <section className="max-w-[1200px] mx-auto px-[3rem] pb-20 max-[1100px]:px-6 max-[600px]:px-4">
            <h3 className="font-syne font-bold text-[1.2rem] text-[#f5f2eb] mb-8">
              More from the blog
            </h3>
            <div className="grid grid-cols-3 gap-6 max-[900px]:grid-cols-2 max-[600px]:grid-cols-1">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blogs/${related.slug}`}
                  className="group/card relative flex flex-col rounded-[18px] overflow-hidden border border-[rgba(255,255,255,0.07)] bg-[rgba(14,14,14,0.9)] no-underline transition-all duration-500 hover:border-[rgba(124,91,245,0.25)] hover:-translate-y-1"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={related.coverImage}
                      alt={related.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover/card:scale-105"
                      sizes="(max-width: 600px) 100vw, 400px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[rgba(14,14,14,0.5)] to-transparent" />
                  </div>
                  <div className="p-5">
                    <h4 className="font-syne font-bold text-[0.92rem] leading-[1.3] text-[#f5f2eb] mb-2 line-clamp-2">
                      {related.title}
                    </h4>
                    <p className="text-[0.72rem] text-[#8a8680]">
                      {formatDate(related.date)} &middot; {related.readTime}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
    </main>
  );
}
