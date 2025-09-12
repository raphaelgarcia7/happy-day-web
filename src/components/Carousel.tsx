"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

export default function Carousel() {
  const slides = [
    {
      id: 1,
      src: "/temas/60anos.jpg",
      alt: "Promoção 60 anos",
      legenda: "Desconto especial em festas de 60 anos!",
    },
    {
      id: 2,
      src: "/temas/cha-de-bebe.jpg",
      alt: "Promoção chá de bebê",
      legenda: "Pacote promocional para chás de bebê 💕",
    },
    {
      id: 3,
      src: "/temas/tardezinha.jpg",
      alt: "Promoção tardezinha",
      legenda: "Decoração perfeita para festas ao pôr do sol 🌅",
    },
  ];

  return (
    <div className="w-screen">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        className="w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-screen h-[500px]">
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-yellow-400 px-6">
                <h2 className="text-3xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
                  {slide.legenda}
                </h2>
                <a
                  href="https://wa.me/12996304221"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-yellow-400 text-black font-bold px-6 py-3 rounded-lg hover:bg-yellow-500 transition"
                >
                  Pedir Orçamento
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
