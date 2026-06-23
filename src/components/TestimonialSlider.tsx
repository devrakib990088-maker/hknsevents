"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/lib/data";

export default function TestimonialSlider() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="relative max-w-4xl mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="testimonial-slider"
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={i}>
            <div className="text-center px-8 sm:px-16 py-8">
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} className="fill-primary text-primary" size={20} />
                ))}
              </div>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8 italic line-clamp-6 sm:line-clamp-none">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="text-primary-light font-semibold tracking-wider">— {t.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="absolute left-0 sm:-left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-dark-3 border border-white/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer"
        aria-label="Previous testimonial"
      >
        <ChevronLeft size={20} />
      </button>

      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="absolute right-0 sm:-right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-dark-3 border border-white/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer"
        aria-label="Next testimonial"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
}
