import { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import ContactForm from "./ContactForm";
import AnimatedSection from "@/components/AnimatedSection";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with HKNS Events. Schedule a private showroom tour today.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader title="Contact Us" breadcrumb="Contact Us" />

      <section className="py-12 sm:py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16">
            <AnimatedSection>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-3 sm:mb-4">
                Let&apos;s Start Planning Your Dream Event
              </h2>
              <p className="text-gray-400 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                Fill out the form and we&apos;ll get back to you within 24 hours
                to schedule your private showroom tour.
              </p>
              <div className="mb-6 sm:mb-8 p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-dark-2 border border-white/5">
                <h4 className="text-white font-semibold mb-2 sm:mb-3 flex items-center gap-2 text-sm sm:text-base">
                  <Clock size={16} className="text-primary" />
                  <span>Response Time</span>
                </h4>
                <p className="text-gray-400 text-xs sm:text-sm">
                  We typically respond within 24 hours. For urgent inquiries,
                  call us directly at{" "}
                  <a href={`tel:${siteConfig.phone}`} className="text-primary-light hover:text-white transition-colors">
                    {siteConfig.phone}
                  </a>
                </p>
              </div>
              <ContactForm />
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="space-y-6 sm:space-y-8">
                <div>
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-white mb-4 sm:mb-6">Get In Touch</h3>
                  <div className="space-y-4 sm:space-y-5">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Mail size={16} className="text-primary" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-gray-400 text-xs sm:text-sm">Email</p>
                        <a href={`mailto:${siteConfig.email}`} className="text-white hover:text-primary-light transition-colors text-sm sm:text-base break-all">
                          {siteConfig.email}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Phone size={16} className="text-primary" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-xs sm:text-sm">Phone</p>
                        <a href={`tel:${siteConfig.phone}`} className="text-white hover:text-primary-light transition-colors text-sm sm:text-base">
                          {siteConfig.phone}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <MapPin size={16} className="text-primary" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-xs sm:text-sm">Location</p>
                        <p className="text-white text-sm sm:text-base">{siteConfig.address}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl sm:rounded-2xl overflow-hidden relative aspect-[4/3]">
                  <Image src="/contact/IMG_3687_4-1-scaled.jpg" alt="HKNS Events showroom" fill className="object-cover" />
                </div>

                <div className="rounded-xl sm:rounded-2xl overflow-hidden border border-white/5">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23741.97814200069!2d-88.0092592!3d41.9314176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e4d1d7c2b9f1b%3A0x8c1c3f3f3f3f3f!2sAddison%2C%20IL%2060101!5e0!3m2!1sen!2sus!4v1"
                    width="100%"
                    height="220"
                    style={{ border: 0, filter: "invert(0.9) hue-rotate(180deg)" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="HKNS Events Location"
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
