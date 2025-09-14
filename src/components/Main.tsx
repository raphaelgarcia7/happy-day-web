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
    title: "Tema Stitch",
    price: "R$ 250,00",
    image: "/temas/60anos.jpg",
  },
  {
    id: 2,
    title: "Tema Unicórnio",
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
    <main className="pt-24 flex-1 px-6 md:px-12 lg:px-20">
      {children}

      {/* Catálogo */}
      <section className="my-16">
        <h2 className="text-3xl font-bold text-center text-amber-500 mb-10">
          Catálogo
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="relative w-full h-56">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-4 flex flex-col items-center">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-lg text-gray-700 mb-4">{item.price}</p>
                <button className="bg-amber-500 text-white px-4 py-2 rounded-lg hover:bg-amber-600 transition">
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
