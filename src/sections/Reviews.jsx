"use client";
import React from "react";
import TextPink from "@/components/common/TextPink/TextPink";
import Typography from "@/components/common/Typography/Typography";
import ReviewCard from "@/components/reviews/ReviewCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import { reviews } from "@/lib/dummydata";
import "swiper/css";
import "swiper/css/free-mode";

function Reviews() {
  return (
    <section id="reviews" className="py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-16">
        <Typography variant="h1" className="capitalize text-center font-bold text-4xl sm:text-5xl! text-white leading-[1.1] sm:leading-[100%]">
          Kind words from{" "}
          <TextPink as="span" className="md:text-5xl! lg:text-5xl! tracking-[0.1px]!">
            satisfied clients
          </TextPink>
        </Typography>
      </div>

      <div className="w-full relative">
        <Swiper
          loop={true}
          speed={10000}
          slidesPerView={1.2}
          spaceBetween={20}
          centeredSlides={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: false,
          }}
          modules={[Autoplay, FreeMode]}
          breakpoints={{
            640: { slidesPerView: 1.5, spaceBetween: 30 },
            1024: { slidesPerView: 2.2, spaceBetween: 40 },
          }}
          className="review-swiper linear-transition"
        >
          {[...reviews, ...reviews].map((review, index) => (
            <SwiperSlide key={index} className="h-auto! flex items-center">
              <ReviewCard {...review} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="absolute inset-y-0 left-0 w-20 md:w-60 bg-linear-to-r from-[#000319] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 md:w-60 bg-linear-to-l from-[#000319] to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
}

export default React.memo(Reviews);
