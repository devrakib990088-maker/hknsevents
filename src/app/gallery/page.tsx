import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import AnimatedSection from "@/components/AnimatedSection";
import CtaButton from "@/components/CtaButton";
import { galleryImages } from "@/lib/data";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Gallery",
  description: "HKNS Events gallery — stunning wedding and event decor designs.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader title="Gallery" breadcrumb="Gallery" />

      <section className="py-6 sm:py-8 md:py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed">
            A visual journey through our favorite creations.
          </p>
        </AnimatedSection>
      </section>

      <section className="py-6 sm:py-8 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-6 space-y-4 sm:space-y-6">
            {galleryImages.map((src, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="break-inside-avoid rounded-xl sm:rounded-2xl overflow-hidden group relative">
                  <Image
                    src={src}
                    alt={`HKNS Events gallery image ${i + 1}`}
                    width={800}
                    height={i % 2 === 0 ? 600 : 900}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div className="text-center mt-10 sm:mt-16">
            <Link href="/portfolio" className="inline-flex items-center gap-2 text-gray-400 hover:text-primary-light transition-colors text-sm sm:text-base">
              <ArrowLeft size={16} />
              <span>Back to Portfolio</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-24 bg-dark-2 text-center">
        <AnimatedSection>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white mb-4 sm:mb-6">
            Inspired by What You See?
          </h2>
          <p className="text-gray-400 mb-6 sm:mb-8 max-w-xl mx-auto text-sm sm:text-base px-4">
            Let us create something just as stunning for your celebration.
          </p>
          <CtaButton href="/contact">Start Your Journey</CtaButton>
        </AnimatedSection>
      </section>
    </>
  );
}
