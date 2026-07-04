import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import Footer from "@/components/Footer";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog — Praveen Dedigamage",
};

export default function BlogPage() {
  const sortedPosts = [...posts].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <>
      <Section className="flex flex-col gap-8">
        <h1 className="text-3xl font-bold">
          <span className="text-accent">/</span> Blog
        </h1>
        <ul className="flex flex-col gap-8">
          {sortedPosts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="text-lg font-medium hover:text-accent"
              >
                {post.title}
              </Link>
              <p className="text-xs opacity-60">{post.date}</p>
              <p className="mt-2 text-sm leading-relaxed opacity-80">
                {post.excerpt}
              </p>
            </li>
          ))}
        </ul>
      </Section>
      <Footer />
    </>
  );
}
