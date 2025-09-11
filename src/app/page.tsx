export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-yellow-400 text-black text-center py-20 px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
          Decoração Pegue e Monte para Sua Festa 🎉
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Transforme sua celebração com praticidade e estilo. Escolha seu tema,
          retire e monte em minutos!
        </p>
        <a
          href="https://wa.me/12996304221" // coloque o número do WhatsApp aqui
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-black text-yellow-400 font-semibold px-6 py-3 rounded-lg hover:bg-yellow-500 hover:text-black transition"
        >
          Peça seu orçamento no WhatsApp
        </a>
      </section>

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
