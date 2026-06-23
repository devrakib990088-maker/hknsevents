import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { blogPosts } from "@/lib/data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      <section className="relative min-h-[50vh] sm:min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src={post.image} alt={post.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/70 via-dark/50 to-dark" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link href="/blog" className="inline-flex items-center gap-2 text-gray-300 hover:text-primary-light transition-colors mb-6 sm:mb-8 text-sm sm:text-base">
            <ArrowLeft size={16} />
            <span>Back to Blog</span>
          </Link>
          <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">{post.author} &middot; {post.date}</p>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-serif font-bold text-white leading-tight drop-shadow-lg">{post.title}</h1>
        </div>
      </section>

      <section className="py-6 sm:py-8 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article
            className="prose prose-invert prose-sm sm:prose-base md:prose-lg max-w-none
              prose-headings:text-white prose-headings:font-serif
              prose-p:text-gray-300 prose-p:leading-relaxed
              prose-a:text-primary-light prose-a:no-underline hover:prose-a:text-white
              prose-strong:text-white"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-10 sm:mt-16 pt-6 sm:pt-8 border-t border-white/5 text-center">
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-all duration-300 text-sm sm:text-base">
              Plan Your Dream Decor
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
