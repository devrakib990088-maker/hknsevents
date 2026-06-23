import { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import AnimatedSection from "@/components/AnimatedSection";
import CtaButton from "@/components/CtaButton";
import { whyHknsFeatures } from "@/lib/data";

const iconMap: Record<string, string> = {
  Home: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
  Eye: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
  Sparkles: "M5 3v4M3 5h4M6 17v4M4 19h4M13 3l2 4 4 2-4 2-2 4-2-4-4-2 4-2 2-4z",
  LayoutDashboard: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
  Gift: "M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V6a2 2 0 10-2 2h2zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7",
  Heart: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  BadgePercent: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
  CalendarCheck: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
};

export const metadata: Metadata = {
  title: "Why HKNS?",
  description:
    "Discover why hundreds of couples trust HKNS Events for their wedding and celebration decor.",
};

export default function WhyHknsPage() {
  return (
    <>
      <PageHeader title="Why HKNS?" breadcrumb="Why HKNS?" />

      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-xs sm:text-sm uppercase tracking-[0.2em] text-primary-light mb-3 sm:mb-4">Why Choose Us</h2>
              <h3 className="text-2xl sm:text-3xl md:text-5xl font-serif font-bold text-white mb-4 sm:mb-6">
                Experience the HKNS Difference
              </h3>
              <div className="space-y-3 sm:space-y-4 text-gray-400 leading-relaxed text-sm sm:text-base">
                <p>
                  Choosing your event decor partner is one of the most important
                  decisions you will make. With HKNS Events, you are not just
                  hiring a decorator — you are gaining a dedicated partner.
                </p>
                <p>
                  From our immersive showroom to our lifetime referral rewards,
                  every aspect of our service is designed to give you confidence
                  and a celebration that exceeds expectations.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="rounded-xl sm:rounded-2xl overflow-hidden">
                <Image
                  src="/why_hkns/Image-4-scaled.jpg"
                  alt="HKNS Events showroom experience"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-24 bg-dark-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
            {whyHknsFeatures.map((feature, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="group p-5 sm:p-8 rounded-xl sm:rounded-2xl bg-dark-3 border border-white/5 hover:border-primary/30 transition-all duration-300 h-full">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 sm:mb-5 group-hover:bg-primary/20 transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c8956c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d={iconMap[feature.icon] || iconMap.Heart} />
                    </svg>
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">{feature.title}</h3>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{feature.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-xs sm:text-sm uppercase tracking-[0.2em] text-primary-light mb-3 sm:mb-4">Our Commitment to You</h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white mb-6 sm:mb-8">Your Peace of Mind Is Our Priority</h3>
            <div className="space-y-3 sm:space-y-4 text-gray-300 leading-relaxed text-left max-w-2xl mx-auto text-sm sm:text-base">
              <p><strong className="text-white">Transparency:</strong> We show you everything before we build it.</p>
              <p><strong className="text-white">Quality:</strong> We use only premium materials and skilled artisans.</p>
              <p><strong className="text-white">Respect for Your Budget:</strong> We design within your means without compromising beauty.</p>
              <p><strong className="text-white">Dedicated Support:</strong> You will have a personal coordinator by your side.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-24 bg-dark-2 text-center">
        <AnimatedSection>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white mb-4 sm:mb-6">
            Ready to Experience the Difference?
          </h2>
          <p className="text-gray-400 mb-6 sm:mb-8 max-w-xl mx-auto text-sm sm:text-base px-4">
            Join hundreds of happy couples who trusted HKNS Events.
          </p>
          <CtaButton href="/contact">Schedule a Showroom Tour</CtaButton>
        </AnimatedSection>
      </section>
    </>
  );
}
