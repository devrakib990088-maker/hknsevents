import { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import AnimatedSection from "@/components/AnimatedSection";
import CtaButton from "@/components/CtaButton";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about HKNS Events — over a decade of luxury event planning and decor expertise serving diverse cultural celebrations.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader title="About Us" breadcrumb="About Us" />

      <section className="py-12 sm:py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white mb-6 sm:mb-8">
              We Are Storytellers Who Design Celebrations
            </h2>
            <div className="space-y-4 sm:space-y-6">
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                HKNS Events is more than a decor company — we are artisans of
                experience. Every event we create is a carefully curated journey,
                weaving together luxury, culture, and heartfelt emotion.
              </p>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                What sets us apart is our commitment to authenticity and creativity.
                We believe every event tells a unique story, and our purpose is to
                ensure that story is beautifully reflected in every detail.
              </p>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                Our immersive showroom is a testament to our philosophy: seeing is believing.
                We invite every client to touch the fabrics, see the craftsmanship, and
                feel the magic before their big day.
              </p>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                Inspired by global cultures, architecture, and nature, our designs balance
                bold creativity with timeless elegance.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12 sm:py-16 md:py-24 bg-dark-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-xs sm:text-sm uppercase tracking-[0.2em] text-primary-light mb-3 sm:mb-4">Our Story</h2>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white mb-4 sm:mb-6">
                A Passion Born from Family
              </h3>
              <div className="space-y-3 sm:space-y-4 text-gray-300 leading-relaxed text-sm sm:text-base">
                <p>
                  HKNS Events was founded on a simple belief: every celebration
                  deserves to be extraordinary. Based in Addison, IL, we bring a
                  deep understanding of diverse cultural traditions.
                </p>
                <p>
                  From intimate gatherings to grand celebrations, we have poured
                  our passion into every project, earning the trust of hundreds
                  of families along the way.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="rounded-xl sm:rounded-2xl overflow-hidden">
                <Image
                  src="/about/Image-1024x678.jpeg"
                  alt="HKNS Events story"
                  width={1024}
                  height={678}
                  className="w-full h-auto object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-12 sm:py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
            <AnimatedSection className="order-2 md:order-1">
              <div className="rounded-xl sm:rounded-2xl overflow-hidden">
                <Image
                  src="/about/IMG_8278_8-1024x576.jpg"
                  alt="HKNS Events mission"
                  width={1024}
                  height={576}
                  className="w-full h-auto object-cover"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2} className="order-1 md:order-2">
              <h2 className="text-xs sm:text-sm uppercase tracking-[0.2em] text-primary-light mb-3 sm:mb-4">Our Mission</h2>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white mb-4 sm:mb-6">
                Elegance That Embraces Everyone
              </h3>
              <div className="space-y-3 sm:space-y-4 text-gray-300 leading-relaxed text-sm sm:text-base">
                <p>
                  We exist to provide luxurious, deeply personalized event experiences
                  that leave lasting impressions. Our mission is rooted in modern
                  elegance, cultural inclusivity, and exceptional client satisfaction.
                </p>
                <p>
                  We measure success not just by the beauty of our designs, but by
                  the joy and confidence our clients feel from first consultation
                  to last dance.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-12 sm:py-16 md:py-24 bg-dark-2">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-xs sm:text-sm uppercase tracking-[0.2em] text-primary-light mb-3 sm:mb-4">Meet the Founder</h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white mb-6 sm:mb-8">Hasan Taqvi</h3>
            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-primary/10 mx-auto mb-6 sm:mb-8 flex items-center justify-center border-2 border-primary/30 overflow-hidden">
              <Image
                src="/about/IMG_8573-scaled.jpg"
                alt="Hasan Taqvi - Founder of HKNS Events"
                width={128}
                height={128}
                className="rounded-full object-cover w-full h-full"
              />
            </div>
            <div className="space-y-4 sm:space-y-6 text-gray-300 leading-relaxed text-sm sm:text-base max-w-3xl mx-auto">
              <p>
                Hey there! I&apos;m Hasan Taqvi, the creative force behind HKNS
                Events. My passion for event design sparked at my sister&apos;s
                wedding, where I realized that creating beautiful spaces is about
                crafting unforgettable memories.
              </p>
              <p>
                I firmly believe in seeing to believe. That&apos;s why we built
                our state-of-the-art showroom — so every client can touch the
                fabrics, see the florals, and experience their vision before
                the big day.
              </p>
              <p>
                Making dreams a reality is not just my job — it&apos;s my calling.
                Let&apos;s redefine luxury and turn your vision into timeless memories.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-24 text-center">
        <AnimatedSection>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white mb-4 sm:mb-6">
            Let&apos;s Create Something Beautiful Together
          </h2>
          <p className="text-gray-400 mb-6 sm:mb-8 max-w-xl mx-auto text-sm sm:text-base px-4">
            Your dream celebration is just a conversation away.
          </p>
          <CtaButton href="/contact">Schedule a Consultation</CtaButton>
        </AnimatedSection>
      </section>
    </>
  );
}
