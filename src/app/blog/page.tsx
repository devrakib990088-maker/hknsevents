import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import AnimatedSection from "@/components/AnimatedSection";
import CtaButton from "@/components/CtaButton";
import { blogPosts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blog",
  description: "HKNS Events blog — wedding decor trends, tips, and inspiration.",
};

export default function BlogPage() {
  return (
    <>
      <PageHeader title="HKNS Events Blog" breadcrumb="Blog" />

      <section className="py-6 sm:py-8 md:py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <p className="text-primary-light text-base sm:text-lg font-serif italic">Modern . Tradition . Elegance</p>
          <p className="text-gray-400 mt-3 sm:mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            Insights, inspiration, and expert advice from the HKNS Events team.
          </p>
        </AnimatedSection>
      </section>

      <section className="py-6 sm:py-8 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 sm:space-y-12">
            {blogPosts.map((post, i) => (
              <AnimatedSection key={post.slug} delay={i * 0.1}>
                <article className="group grid sm:grid-cols-2 gap-4 sm:gap-8 p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-dark-2 border border-white/5 hover:border-primary/30 transition-all duration-300">
                  <Link href={`/blog/${post.slug}`} className="relative aspect-[4/3] rounded-xl overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </Link>
                  <div className="flex flex-col justify-center">
                    <p className="text-gray-500 text-xs sm:text-sm mb-1 sm:mb-2">{post.author} &middot; {post.date}</p>
                    <Link href={`/blog/${post.slug}`}>
                      <h2 className="text-lg sm:text-2xl font-serif font-bold text-white mb-2 sm:mb-4 group-hover:text-primary-light transition-colors">
                        {post.title}
                      </h2>
                    </Link>
                    <p className="text-gray-400 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                      {post.excerpt}
                    </p>
                    <Link href={`/blog/${post.slug}`} className="text-primary-light font-medium hover:text-white transition-colors text-sm sm:text-base">
                      Read More &rarr;
                    </Link>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-24 bg-dark-2 text-center">
        <AnimatedSection>
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-white mb-3 sm:mb-4">Plan Your Dream Decor</h2>
            <p className="text-gray-400 mb-6 sm:mb-8 max-w-lg mx-auto text-sm sm:text-base">Ready to bring these ideas to life?</p>
            <CtaButton href="/contact">Contact Us Today</CtaButton>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
