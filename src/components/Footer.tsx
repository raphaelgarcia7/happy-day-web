import { Baloo_2 } from "next/font/google";
import { MapPin, Phone, Mail } from "lucide-react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa"; // ícones oficiais

const baloo = Baloo_2({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export default function Footer() {
  return (
    <>
      {/* Área de Contato */}
      <section
        className={`${baloo.className} bg-amber-400 text-[#060714] py-8 px-4 sm:px-8`}
      >
        <h2 className="text-center mb-6">
          <span className="block text-2xl sm:text-3xl font-extrabold">
            Fale Conosco
          </span>
          <span className="block w-12 sm:w-16 h-1 bg-[#060714] mx-auto mt-2 rounded"></span>
        </h2>

        <div className="max-w-3xl mx-auto flex flex-col gap-4 text-center text-sm sm:text-base">
          <p className="flex items-center justify-center gap-2">
            <MapPin className="w-5 h-5" />
            Rua Heitor de Andrade, 1922 - Jardim das Indústrias -
            São José dos Campos
          </p>

          <p className="flex items-center justify-center gap-2">
            <Phone className="w-5 h-5" />
            Cel: (012) 97898-0898
          </p>

          {/* Redes sociais */}
          <div className="flex justify-center gap-6 mt-4">
            <a
              href="https://instagram.com/happydayyfestas"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaInstagram className="w-6 h-6" />
            </a>
            <a
              href="https://wa.me/55012978980898"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaWhatsapp className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer
        className={`${baloo.className} bg-[#060714] text-yellow-400 text-center py-3 sm:py-6 text-sm sm:text-base`}
      >
        <p>
          © {new Date().getFullYear()} Happy Day Festas — Todos os direitos
          reservados.
        </p>
      </footer>
    </>
  );
}
