import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import AnimatedSection from "@/components/AnimatedSection";
import CtaButton from "@/components/CtaButton";
import { portfolioCategories } from "@/lib/data";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Explore HKNS Events portfolio — Mandap, Sangeet, Wedding, Reception, and Speciality event designs.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHeader title="Our Portfolio" breadcrumb="Portfolio" />

      <section className="py-6 sm:py-8 md:py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed">
            Every event we design tells a unique story. Browse our portfolio categories
            and discover how we transform venues into breathtaking experiences.
          </p>
        </AnimatedSection>
      </section>

      <section className="py-6 sm:py-8 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {portfolioCategories.map((category, i) => (
              <AnimatedSection key={category.name} delay={i * 0.1}>
                <Link href="/gallery" className="group block relative rounded-xl sm:rounded-2xl overflow-hidden aspect-[4/5]">
                  <Image
                    src={category.image}
                    alt={`${category.name} - HKNS Events`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-serif font-bold text-white">{category.name}</h3>
                    <p className="text-gray-300 text-xs sm:text-sm mt-1 sm:mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
                      {category.description}
                    </p>
                    <div className="w-6 sm:w-8 h-0.5 bg-primary mt-1 sm:mt-2 transition-all duration-300 group-hover:w-12 sm:group-hover:w-16" />
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-24 bg-dark-2 text-center">
        <AnimatedSection>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white mb-4 sm:mb-6">Want to See More?</h2>
          <p className="text-gray-400 mb-6 sm:mb-8 max-w-xl mx-auto text-sm sm:text-base px-4">
            Visit our full gallery or schedule a private showroom tour.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center px-4">
            <CtaButton href="/gallery">View Full Gallery</CtaButton>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/5 transition-all duration-300 text-sm sm:text-base"
            >
              Schedule a Tour
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
