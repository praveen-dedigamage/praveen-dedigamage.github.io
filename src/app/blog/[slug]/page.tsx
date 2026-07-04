import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Section from "@/components/Section";
import Footer from "@/components/Footer";
import { posts } from "@/lib/posts";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  return { title: post ? `${post.title} — Praveen Dedigamage` : "Blog" };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      <Section className="flex min-h-[calc(100vh-88px)] flex-col justify-center gap-6">
        <div>
          <h1 className="text-3xl font-bold">{post.title}</h1>
          <p className="mt-2 text-xs opacity-60">{post.date}</p>
        </div>
        <div className="flex max-w-2xl flex-col gap-4">
          {post.content.map((paragraph, i) => (
            <p key={i} className="leading-relaxed opacity-90">
              {paragraph}
            </p>
          ))}
        </div>
      </Section>
      <Footer />
    </>
  );
}
