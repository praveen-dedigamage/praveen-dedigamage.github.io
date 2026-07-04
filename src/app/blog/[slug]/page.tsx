import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Section from "@/components/Section";
import Footer from "@/components/Footer";
import { posts } from "@/lib/posts";

export function generateStaticParams() {
  // In dev, include drafts so `npm run dev` can preview them directly by
  // URL. `output: "export"` requires every rendered slug to be listed here,
  // even in dev, so this can't just filter unconditionally. Production
  // builds (what actually gets deployed) always exclude drafts.
  const isDev = process.env.NODE_ENV !== "production";
  const visible = isDev ? posts : posts.filter((post) => !post.draft);
  return visible.map((post) => ({ slug: post.slug }));
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
      <Section className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold">{post.title}</h1>
          <p className="mt-2 text-xs opacity-60">{post.date}</p>
        </div>
        <div className="flex max-w-2xl flex-col gap-6">
          {post.content.map((block, i) => {
            if (block.type === "figure") {
              return (
                <figure key={i} className="flex flex-col gap-2">
                  <Image
                    src={block.src}
                    alt={block.alt}
                    width={700}
                    height={420}
                    className="w-full rounded-xl border border-black/10 dark:border-white/10"
                  />
                  <figcaption className="text-sm opacity-60">
                    {block.caption}
                  </figcaption>
                </figure>
              );
            }
            return (
              <p key={i} className="leading-relaxed opacity-90">
                {block.text}
              </p>
            );
          })}
        </div>
      </Section>
      <Footer />
    </>
  );
}
