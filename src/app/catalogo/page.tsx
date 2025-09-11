const temas = [
  {
    id: 1,
    nome: "Aniversário 60 Anos",
    descricao: "Elegância e sofisticação para celebrar uma data especial.",
    imagem: "/temas/60anos.jpg",
  },
  {
    id: 2,
    nome: "Chá de Bebê",
    descricao: "Um momento encantador para celebrar a chegada do bebê.",
    imagem: "/temas/chá de bebê.jpg",
  },
  {
    id: 3,
    nome: "Tardezinha",
    descricao: "Decoração leve e descontraída para uma tarde especial.",
    imagem: "/temas/tardezinha.jpg",
  },
];

export default function CatalogoPage() {
  return (
    <section className="max-w-6xl mx-auto py-16 px-6">
      <h1 className="text-3xl font-bold text-center mb-12">Catálogo de Temas</h1>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {temas.map((tema) => (
          <div
            key={tema.id}
            className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col"
          >
            <img
              src={tema.imagem}
              alt={tema.nome}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-bold mb-2">{tema.nome}</h2>
                <p className="text-gray-700 text-sm">{tema.descricao}</p>
              </div>
              <a
                href="https://wa.me/5599999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block bg-black text-yellow-400 px-4 py-2 rounded-md text-center hover:bg-yellow-500 hover:text-black transition"
              >
                Pedir orçamento
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
