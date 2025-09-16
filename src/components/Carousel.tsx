"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Carousel() {
  const slides = [
    {
      id: 1,
      src: "/temas/imagemexemplo.png",
      alt: "Promoção 60 anos",
    },
    {
      id: 2,
      src: "/temas/sti.png",
      alt: "Promoção chá de bebê",
    },
    {
      id: 3,
      src: "/temas/halo.png",
      alt: "Promoção tardezinha",
      legenda: "Decoração perfeita para festas ao pôr do sol 🌅",
    },
  ];

  const whatsappUrl =
    "https://wa.me/5512996304221?text=Olá,%20vi%20as%20promoções%20do%20site%20Happy%20Day%20e%20gostaria%20de%20mais%20informações!";

  return (
    <div className="w-full max-w-[1140px] mx-auto my-10 relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          nextEl: ".btn-next",
          prevEl: ".btn-prev",
        }}
        pagination={{
          clickable: true,
          bulletClass:
            "swiper-pagination-bullet bg-gray-400 w-3 h-3 rounded-full opacity-70 transition-all duration-300",
          bulletActiveClass:
            "swiper-pagination-bullet-active bg-amber-400 scale-125 opacity-100",
        }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        className="rounded-lg"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Link href={whatsappUrl} target="_blank">
              <div className="relative w-full mx-auto aspect-[285/100] h-[180px] sm:h-[240px] md:h-[320px] lg:h-[400px] cursor-pointer">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  className="object-contain rounded-lg"
                  priority
                />
              </div>
            </Link>
          </SwiperSlide>
        ))}
        <div className="btn-prev absolute left-1 sm:left-4 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center 
                w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 
                rounded-full bg-black/30 sm:bg-black/50 text-white 
                hover:bg-amber-400 hover:text-black transition">
          <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
        </div>
        <div className="btn-next absolute right-1 sm:right-4 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center 
                        w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 
                        rounded-full bg-black/30 sm:bg-black/50 text-white 
                        hover:bg-amber-400 hover:text-black transition">
          <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
        </div>
      </Swiper>
    </div>
  );
}
