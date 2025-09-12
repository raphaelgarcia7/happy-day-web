import Carousel from "@/components/Carousel";

export default function HomePage() {
  return (
    <main>
      {/* Hero substituído pelo Carrossel */}
      <Carousel />

      {/* Benefícios */}
      <section className="bg-white text-black py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 shadow-md rounded-lg bg-yellow-100">
            <h2 className="text-xl font-bold mb-2">Praticidade</h2>
            <p>Escolha, retire e monte em minutos. Sem complicação!</p>
          </div>
          <div className="p-6 shadow-md rounded-lg bg-yellow-100">
            <h2 className="text-xl font-bold mb-2">Economia</h2>
            <p>Preço acessível e justo, ideal para todas as ocasiões.</p>
          </div>
          <div className="p-6 shadow-md rounded-lg bg-yellow-100">
            <h2 className="text-xl font-bold mb-2">Qualidade</h2>
            <p>Temas modernos e bem cuidados para sua festa brilhar.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
