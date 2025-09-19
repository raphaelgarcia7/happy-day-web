"use client";
import Image from "next/image";

interface CatalogItem {
  id: number;
  title: string;
  price: string;
  image: string;
}

const items: CatalogItem[] = [
  { id: 1, title: "Tema Aniversário", price: "R$ 149,90", image: "/temas/60anos.jpg" },
  { id: 2, title: "Tema Tardezinha", price: "R$ 149,90", image: "/temas/tardezinha.jpg" },
  { id: 3, title: "Tema Chá de Bebê", price: "R$ 149,90", image: "/temas/cha_de_bebe.jpg" },
  { id: 4, title: "Tema Minecraft", price: "R$ 149,90", image: "/temas/minecraft.jpg" },
  { id: 5, title: "Tema Festa 15 Anos", price: "R$ 149,90", image: "/temas/15anos.jpg" },
  { id: 6, title: "Tema Chá de Bebê", price: "R$ 149,90", image: "/temas/cha_de_bebe2.jpg" },
  { id: 7, title: "Tema Monstros C.A", price: "R$ 149,90", image: "/temas/monstroca.jpg" },
  { id: 8,  title: "Tema Bolo Fofo",        price: "R$ 149,90", image: "/temas/bolofofo.jpg" },
  { id: 9,  title: "Tema Minnie",           price: "R$ 149,90", image: "/temas/miney.jpg" },
  { id: 10, title: "Tema Chá de Bebê 3",    price: "R$ 149,90", image: "/temas/cha_de_bebe3.jpg" },
  { id: 11, title: "Tema Margarida",        price: "R$ 149,90", image: "/temas/temamargarida.jpg" },
  { id: 12, title: "Tema 15 Anos 2",        price: "R$ 149,90", image: "/temas/15anos.jpg" },
  { id: 13, title: "Tema Turma da Mônica",  price: "R$ 149,90", image: "/temas/turmadamonica.jpg" },
  { id: 14, title: "Tema Oceano",           price: "R$ 149,90", image: "/temas/temaocean.jpg" },
  { id: 15, title: "Tema Stitch & Angel",     price: "R$ 149,90", image: "/temas/stitchangel1.jpg" },
];

const whatsappUrl = "https://wa.me/55012978980898";

export default function Main({ children }: { children?: React.ReactNode }) {
  return (
    <main id="home" className="pt-32 flex-1 px-4 sm:px-6 md:px-12 lg:px-20">
      {children}

      {/* Divisória dourada moderna, mais larga em 1024/1440/2560 */}
    <div
      id="catalogo"
      className="
        mx-auto my-8 h-px w-full
        max-w-5xl                /* ~1024px base */
        lg:max-w-7xl            /* ~1280px em ≥1024px */
        [@media(min-width:1440px)]:max-w-[100rem]  /* 1600px em ≥1440px */
        [@media(min-width:2560px)]:max-w-[120rem]  /* 1920px em ≥2560px */
        bg-gradient-to-r from-transparent via-[#DCA749] to-transparent opacity-90
      "
    />


      <section  className="my-16">
        <h2 className="text-center mb-10">
          <span className="block text-2xl sm:text-3xl md:text-4xl font-extrabold text-amber-500">
            Catálogo de Temas
          </span>
          <span className="block w-12 sm:w-16 h-1 bg-amber-500 mx-auto mt-2 rounded"></span>
        </h2>

        <div
          className="
            grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3
            gap-x-2 sm:gap-x-4 md:gap-x-6
            gap-y-6 lg:gap-y-12
            max-w-[1200px] mx-auto px-2 sm:px-0
            justify-items-stretch
          "
        >
          {items.map((item) => (
            <div
              key={item.id}
              className="
                bg-white rounded-xl shadow-md hover:shadow-xl transition
                overflow-hidden flex flex-col w-full
              "
            >
              <div className="relative w-full aspect-square">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  priority={item.id === 1}
                />
              </div>

              <div className="px-[10px] pt-3 pb-4 text-center flex flex-col items-center flex-1">
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 mb-1">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-3">
                  {item.price}
                </p>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    mt-auto w-full bg-amber-500 text-white font-medium
                    py-2 rounded-lg hover:bg-amber-600 transition
                    text-xs sm:text-sm md:text-base
                  "
                >
                  Verifique a disponibilidade
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
