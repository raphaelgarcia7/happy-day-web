"use client";

import Image from "next/image";

interface CatalogItem {
  id: number;
  title: string;
  price: string;
  image: string;
}

const items: CatalogItem[] = [
  {
    id: 1,
    title: "Tema Aniversário",
    price: "R$ 250,00",
    image: "/temas/60anos.jpg",
  },
  {
    id: 2,
    title: "Tema Tardezinha",
    price: "R$ 220,00",
    image: "/temas/tardezinha.jpg",
  },
  {
    id: 3,
    title: "Tema Chá de Bebê",
    price: "R$ 180,00",
    image: "/temas/cha_de_bebe.jpg",
  },
];

export default function Main({ children }: { children?: React.ReactNode }) {
  return (
    <main className="pt-32 flex-1 px-4 sm:px-6 md:px-12 lg:px-20">
      {children}
      <section className="my-16">
        <h2 className="text-center mb-10">
  <span className="block text-2xl sm:text-3xl md:text-4xl font-extrabold text-amber-500">
    Catálogo de Temas
  </span>
  <span className="block w-12 sm:w-16 h-1 bg-amber-500 mx-auto mt-2 rounded"></span>
</h2>



        <div
          className="
            grid 
            grid-cols-1 
            [@media(min-width:375px)]:grid-cols-2
            [@media(min-width:767px)]:grid-cols-3
            gap-x-6 
            gap-y-6 
            lg:gap-y-12 
            max-w-6xl mx-auto 
            justify-items-center
          "
        >
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden flex flex-col w-full max-w-[280px]"
            >
              {/* Imagem sempre quadrada */}
              <div className="relative w-full aspect-square">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Conteúdo */}
              <div className="p-4 flex flex-col items-center flex-1">
                <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-2 text-center">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 mb-4">
                  {item.price}
                </p>
                <button className="mt-auto w-full bg-amber-500 text-white font-medium py-2 px-3 rounded-lg hover:bg-amber-600 transition text-sm md:text-base">
                  Verifique a disponibilidade
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
