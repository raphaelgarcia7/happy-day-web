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
      src: "/temas/diadacrianca.png",
      alt: "Dia das Crianças",
    },
    {
      id: 2,
      src: "/temas/50off.png",
      alt: "50off",
    },
  ];

  const whatsappUrl =
    "https://wa.me/5512978980898?text=Olá,%20vi%20as%20promoções%20do%20site%20Happy%20Day%20e%20gostaria%20de%20mais%20informações!";

  return (
    <div className="w-full max-w-[1140px] mx-auto my-10 relative">
      <Swiper
  modules={[Navigation, Pagination, Autoplay]}
  spaceBetween={0}
  slidesPerView={1}
  navigation={{ nextEl: ".btn-next", prevEl: ".btn-prev" }}
  pagination={{ clickable: true }}
  autoplay={{ delay: 5000, disableOnInteraction: false }}
  loop
  className="
    rounded-lg

    /* espaçamento entre bullets */
    [--swiper-pagination-bullet-horizontal-gap:3px]
    sm:[--swiper-pagination-bullet-horizontal-gap:6px]

    /* estilo base dos bullets */
    [&_.swiper-pagination-bullet]:bg-gray-300
    [&_.swiper-pagination-bullet]:opacity-70
    [&_.swiper-pagination-bullet]:transition-all
    [&_.swiper-pagination-bullet]:duration-300
    [&_.swiper-pagination-bullet]:rounded-full

    /* tamanhos por breakpoint: 320/375/425 e ↑ */
    [&_.swiper-pagination-bullet]:w-1.5
    [&_.swiper-pagination-bullet]:h-1.5
    [@media(min-width:375px)]:[&_.swiper-pagination-bullet]:w-2
    [@media(min-width:375px)]:[&_.swiper-pagination-bullet]:h-2
    [@media(min-width:425px)]:[&_.swiper-pagination-bullet]:w-2.5
    [@media(min-width:425px)]:[&_.swiper-pagination-bullet]:h-2.5
    sm:[&_.swiper-pagination-bullet]:w-3
    sm:[&_.swiper-pagination-bullet]:h-3

    /* estado ativo */
    [&_.swiper-pagination-bullet-active]:bg-amber-400
    [&_.swiper-pagination-bullet-active]:opacity-100
    [&_.swiper-pagination-bullet-active]:scale-125
  "
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
