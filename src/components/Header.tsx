import Image from "next/image";
import Link from "next/link";
import { Baloo_2 } from "next/font/google";

const baloo = Baloo_2({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-[#060714] text-yellow-400 z-50 py-3 shadow-md">
      <div className="relative flex items-center max-w-7xl mx-auto px-2 sm:px-6">
        {/* Logo à esquerda (clicável) */}
        <Link href="#home" className="flex items-center shrink-0">
          <Image
            src="/temas/happydaylogo.png"
            alt="Logo Happy Day"
            width={150}
            height={150}
            className="w-[56px] sm:w-[96px] h-auto"
            priority
          />
        </Link>

        {/* Menu centralizado */}
        <nav className={`${baloo.className} absolute left-1/2 -translate-x-1/2`}>
          <ul className="flex items-center whitespace-nowrap gap-2 sm:gap-6 md:gap-10 text-[12px] sm:text-base md:text-lg capitalize leading-none">
            {[
              { href: "#home", label: "Home" },
              { href: "#contato", label: "Contato" },
              { href: "#catalogo", label: "Catálogo" },
            ].map((item) => (
              <li key={item.href} className="relative group">
                <a
                  href={item.href}
                  className="px-1 sm:px-2 md:px-3 py-1 transition-colors duration-300 hover:text-amber-400"
                >
                  {item.label}
                </a>
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-amber-400 transition-all duration-300 group-hover:w-full" />
              </li>
            ))}
          </ul>
        </nav>

        {/* Espaçador invisível para manter centralizado */}
        <div aria-hidden className="shrink-0 w-[56px] sm:w-[96px] h-px" />
      </div>
    </header>
  );
}
