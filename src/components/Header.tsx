import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-black text-yellow-400 z-50 px-4 sm:px-8 py-3 shadow-md">
      <div className="flex items-center justify-center gap-6 sm:gap-10">
        {/* Logo maior */}
        <div className="flex items-center">
          <Image
            src="/temas/happydaylogo.png"
            alt="Logo Happy Day"
            width={64}
            height={64}
            className="sm:w-[90px] sm:h-[90px]"
            priority
          />
        </div>

        {/* Navegação */}
        <nav>
          <ul className="flex gap-4 sm:gap-8 text-sm sm:text-lg font-semibold capitalize">
            {[
              { href: "/", label: "Home" },
              { href: "/contato", label: "Contato" },
              { href: "/catalogo", label: "Catálogo" },
            ].map((item) => (
              <li key={item.href} className="relative group">
                <Link
                  href={item.href}
                  className="px-2 sm:px-3 py-1 sm:py-2 transition-colors duration-300 hover:text-amber-400"
                >
                  {item.label}
                </Link>
                {/* Efeito underline animado */}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
