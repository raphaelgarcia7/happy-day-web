export default function Footer() {
  return (
    <footer className="bg-black text-yellow-400 text-center py-3 sm:py-6 mt-8 text-sm sm:text-base">
      <p>© {new Date().getFullYear()} Happy Day — Todos os direitos reservados.</p>
      <p className="mt-1 sm:mt-2">Instagram • WhatsApp • Endereço</p>
    </footer>
  );
}
