import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import AnimatedSection from "@/components/AnimatedSection";
import CtaButton from "@/components/CtaButton";
import { recentEvents } from "@/lib/data";

export const metadata: Metadata = {
  title: "Recent Events",
  description: "Browse recent events by HKNS Events — stunning wedding and celebration decor.",
};

export default function RecentEventsPage() {
  return (
    <>
      <PageHeader title="Recent Events" breadcrumb="Recent Events" />

      <section className="py-6 sm:py-8 md:py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed">
            Each celebration represents countless hours of dedication and love.
            Browse our recent work and imagine what we can create for you.
          </p>
        </AnimatedSection>
      </section>

      <section className="py-6 sm:py-8 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {recentEvents.map((event, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="group rounded-xl sm:rounded-2xl overflow-hidden bg-dark-2 border border-white/5 hover:border-primary/30 transition-all duration-300">
                  <Link href="/gallery" className="block relative aspect-[4/3]">
                    <Image
                      src={event.image}
                      alt={`${event.name} - HKNS Events`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </Link>
                  <div className="p-4 sm:p-5">
                    <Link href="/gallery" className="text-base sm:text-lg font-semibold text-white hover:text-primary-light transition-colors">
                      {event.name}
                    </Link>
                    <p className="text-gray-400 text-xs sm:text-sm mt-1 sm:mt-2 leading-relaxed line-clamp-2">
                      {event.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-24 bg-dark-2 text-center">
        <AnimatedSection>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white mb-4 sm:mb-6">Your Event Could Be Next</h2>
          <p className="text-gray-400 mb-6 sm:mb-8 max-w-xl mx-auto text-sm sm:text-base px-4">
            Let us create something extraordinary together.
          </p>
          <CtaButton href="/contact">Start Planning Your Event</CtaButton>
        </AnimatedSection>
      </section>
    </>
  );
}
