"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Star, Shield, Heart, Sparkles, Play } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import TestimonialSlider from "@/components/TestimonialSlider";
import CtaButton from "@/components/CtaButton";

const stats = [
  { value: "10+", label: "Years", icon: Star },
  { value: "500+", label: "Events", icon: Sparkles },
  { value: "98%", label: "Happy Clients", icon: Heart },
  { value: "50+", label: "Partners", icon: Shield },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* YouTube Video Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 w-full h-full">
            <iframe
              src="https://www.youtube.com/embed/oF0B0heofI0?autoplay=1&mute=1&loop=1&playlist=oF0B0heofI0&controls=0&showinfo=0&rel=0&playsinline=1&enablejsapi=1"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.78vh] min-w-full h-[56.25vw] min-h-full"
              style={{ pointerEvents: "none" }}
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="HKNS Events Showcase"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-dark/80 via-dark/40 to-dark/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/10 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="inline-block px-4 py-1.5 mb-4 sm:mb-6 text-xs sm:text-sm uppercase tracking-[0.25em] text-primary-light border border-primary/30 rounded-full bg-primary/10 backdrop-blur-sm">
              Premium Event Planning &amp; Decor
            </span>
          </motion.div>

          <motion.h1
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-tight mb-4 sm:mb-6"
          >
            Creating Timeless Memories
            <br />
            with <span className="text-primary-light">Elegant Events</span>
          </motion.h1>

          <motion.p
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 max-w-2xl mx-auto px-2"
          >
            Luxury Event Planning &amp; Decor Services Tailored for Your Unique Celebrations
          </motion.p>

          <motion.div
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
          >
            <CtaButton href="/contact">Schedule a Showroom Tour</CtaButton>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 hover:border-primary/50 transition-all duration-300 group text-sm sm:text-base"
            >
              <Play size={18} className="transition-transform group-hover:scale-110" />
              <span>View Our Portfolio</span>
            </Link>
          </motion.div>

          {/* Quick Info Badges */}
          <motion.div
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-10 sm:mt-14 flex flex-wrap justify-center gap-3 sm:gap-6"
          >
            {[
              "10+ Years Experience",
              "500+ Events Delivered",
              "98% Client Satisfaction",
              "Bespoke Designs",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-dark-3/60 backdrop-blur-sm border border-white/5 text-gray-400 text-xs sm:text-sm"
              >
                <Star size={12} className="text-primary shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-40 bg-gradient-to-t from-dark to-transparent" />
      </section>

      {/* Stats Strip */}
      <section className="py-8 sm:py-12 bg-dark-2 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center py-2"
              >
                <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary mx-auto mb-1 sm:mb-2" />
                <div className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white mb-0.5 sm:mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-xs sm:text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Message */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-xs sm:text-sm uppercase tracking-[0.2em] text-primary-light mb-3 sm:mb-4">
              Why Couples Trust Us
            </h2>
            <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              Your wedding is one of the most important days of your life. At{" "}
              <span className="text-white font-semibold">HKNS Events</span>, we
              treat it with the reverence, care, and precision it deserves.
              Every detail is thoughtfully curated so you can relax and enjoy
              every moment.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* About */}
      <section className="py-16 sm:py-20 md:py-32 bg-dark-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-xs sm:text-sm uppercase tracking-[0.2em] text-primary-light mb-3 sm:mb-4">
                About HKNS Events
              </h2>
              <h3 className="text-2xl sm:text-3xl md:text-5xl font-serif font-bold text-white mb-4 sm:mb-6">
                We Design Experiences
              </h3>
              <div className="space-y-3 sm:space-y-4 text-gray-400 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
                <p>
                  With over a decade of experience, HKNS Events is a trusted name in
                  luxury event planning. We specialize in multicultural celebrations,
                  blending heritage with contemporary elegance.
                </p>
                <p>
                  Our showroom lets you experience every design element before your big day.
                  No surprises — just confidence and excitement.
                </p>
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-primary-light hover:text-white transition-colors font-medium group text-sm sm:text-base"
              >
                Learn More About Us
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="grid grid-cols-2 gap-2 sm:gap-4">
                <div className="space-y-2 sm:space-y-4">
                  <div className="rounded-xl sm:rounded-2xl overflow-hidden relative h-36 sm:h-48 md:h-64">
                    <Image src="/about/Image-1024x678.jpeg" alt="HKNS Events showcase" fill className="object-cover" />
                  </div>
                  <div className="rounded-xl sm:rounded-2xl overflow-hidden relative h-28 sm:h-36 md:h-48">
                    <Image src="/about/IMG_8278_8-1024x576.jpg" alt="HKNS Events decor" fill className="object-cover" />
                  </div>
                </div>
                <div className="pt-2 sm:pt-4 md:pt-8">
                  <div className="rounded-xl sm:rounded-2xl overflow-hidden relative h-40 sm:h-52 md:h-72">
                    <Image src="/portfolio/IMG_0121_5-scaled.jpg" alt="Event decoration" fill className="object-cover" />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif font-bold text-white">
              What Our Clients Say
            </h2>
            <div className="w-12 sm:w-16 h-0.5 bg-primary mx-auto mt-3 sm:mt-4" />
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <TestimonialSlider />
          </AnimatedSection>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 sm:py-20 md:py-32 bg-dark-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-10 sm:mb-16">
            <h2 className="text-xs sm:text-sm uppercase tracking-[0.2em] text-primary-light mb-3 sm:mb-4">How It Works</h2>
            <h3 className="text-2xl sm:text-3xl md:text-5xl font-serif font-bold text-white">From Vision to Reality</h3>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
            {[
              { step: "01", title: "Consultation", desc: "We listen to your vision, culture, and story." },
              { step: "02", title: "Design & Mockup", desc: "Full design plan with real-life mockups." },
              { step: "03", title: "Showroom Preview", desc: "Touch fabrics, see florals, feel confident." },
              { step: "04", title: "Execution", desc: "Our team brings it to life while you relax." },
            ].map((item, i) => (
              <AnimatedSection key={item.step} delay={i * 0.1}>
                <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-dark-3 border border-white/5 text-center h-full">
                  <div className="text-2xl sm:text-4xl font-serif font-bold text-primary mb-2 sm:mb-3">{item.step}</div>
                  <h4 className="text-sm sm:text-lg font-semibold text-white mb-1 sm:mb-2">{item.title}</h4>
                  <p className="text-gray-400 text-xs sm:text-sm">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[800px] h-[500px] sm:h-[800px] rounded-full bg-primary blur-3xl" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif font-bold text-white mb-4 sm:mb-6">
              Ready to Create Your Dream Event?
            </h2>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg mb-8 sm:mb-10 px-2">
              Schedule a private showroom tour and start planning your perfect celebration.
            </p>
            <CtaButton href="/contact">Schedule a Showroom Tour</CtaButton>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
