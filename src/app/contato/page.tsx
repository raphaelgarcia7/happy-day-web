export default function ContatoPage() {
  return (
    <section className="max-w-2xl mx-auto py-16 px-6 text-center">
      <h1 className="text-3xl font-bold mb-6">Entre em Contato</h1>
      <p className="text-lg mb-8">
        Fale com a gente para tirar dúvidas ou pedir seu orçamento:
      </p>

      {/* Telefone */}
      <p className="text-xl font-semibold mb-4">
        📞 <a href="tel:+5512978980898" className="hover:underline">
          (12) 97898-0898
        </a>
      </p>

      {/* WhatsApp */}
      <p className="mb-6">
        💬 <a
          href="https://wa.me/5512978980898"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-600 font-semibold hover:underline"
        >
          Falar no WhatsApp
        </a>
      </p>

      {/* Instagram */}
      <p className="text-lg">
        📷 <a
          href="https://instagram.com/happydayyfestas"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-600 font-semibold hover:underline"
        >
          @happydayyfestas
        </a>
      </p>
    </section>
  );
}
