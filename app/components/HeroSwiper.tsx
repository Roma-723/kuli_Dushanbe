"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

interface Slide {
  image: string;
  titleKey: string;
  subtitleKey: string;
}

export default function HeroSwiper() {
  const t = useTranslations("hero");
  const slides: Slide[] = [
    {
      image: "/images/img1.png",
      titleKey: "title",
      subtitleKey: "subtitle",
    },
    {
      image: "/images/img2.png",
      titleKey: "title",
      subtitleKey: "subtitle",
    },
    {
      image: "/images/img3.png",
      titleKey: "title",
      subtitleKey: "subtitle",
    },
  ];
  return (
    <div className="w-full h-60 sm:h-125 relative overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
        }}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            <Image
              src={slide.image}
              alt={t(slide.titleKey)}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>

            <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
              <h1 className="text-white text-2xl sm:text-4xl font-bold text-center px-4 mb-2">
                {t(slide.titleKey)}
              </h1>
              <p className="text-white text-sm sm:text-lg text-center px-4">
                {t(slide.subtitleKey)}
              </p>
            </div>
          </SwiperSlide>
        ))}



        <div className="swiper-button-prev-custom absolute left-4 top-1/2 z-20 -translate-y-1/2 w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full items-center justify-center cursor-pointer transition-colors hidden sm:flex">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </div>
        <div className="swiper-button-next-custom absolute right-4 top-1/2 z-20 -translate-y-1/2 w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full items-center justify-center cursor-pointer transition-colors hidden sm:flex">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </Swiper>
      <style jsx global>{`
        .swiper-pagination {
          bottom: 20px;
          z-index: 20;}
          .swiper-pagination-bullet {
          background-color: rgba(255, 255, 255, 0.5);
          width: 10px;
          height: 10px;
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background-color: #2563eb;
        }
      `}</style>
    </div>
  );
}

