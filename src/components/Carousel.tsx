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
      src: "/temas/cha_de_bebe.jpg",
      alt: "Promoção chá de bebê",
    },
    {
      id: 3,
      src: "/temas/tardezinha.jpg",
      alt: "Promoção tardezinha",
      legenda: "Decoração perfeita para festas ao pôr do sol 🌅",
    },
  ];

  const whatsappUrl =
    "https://wa.me/5512996304221?text=Olá,%20vi%20as%20promoções%20do%20site%20Happy%20Day%20e%20gostaria%20de%20mais%20informações!";

  return (
    <div className="w-full max-w-[1710px] mx-auto my-10 relative">
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
        className="rounded-lg shadow-lg"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Link href={whatsappUrl} target="_blank">
              <div className="relative w-full max-w-[1710px] h-[600px] mx-auto cursor-pointer">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
              </div>
            </Link>
          </SwiperSlide>
        ))}
        <div className="btn-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-12 h-12 rounded-full bg-black/50 text-white hover:bg-amber-400 hover:text-black transition">
          <ChevronLeft className="w-6 h-6" />
        </div>
        <div className="btn-next absolute right-4 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-12 h-12 rounded-full bg-black/50 text-white hover:bg-amber-400 hover:text-black transition">
          <ChevronRight className="w-6 h-6" />
        </div>
      </Swiper>
    </div>
  );
}
