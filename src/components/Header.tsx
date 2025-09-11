import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-black text-yellow-400 z-50 flex items-center justify-between px-6 py-4">
      <div className="flex items-center">
        <Image
          src="/temas/happydaylogo.png"
          alt="Logo Happy Day"
          width={72}
          height={72}
          priority
        />
      </div>

      <nav className="flex-1 flex justify-center">
        <ul className="flex gap-6">
          <li>
            <Link href="/" className="px-4 py-2 rounded-md hover:bg-yellow-400 hover:text-black transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/contato" className="px-4 py-2 rounded-md hover:bg-yellow-400 hover:text-black transition">
              Contato
            </Link>
          </li>
          <li>
            <a
              href="/catalogo"
              className="px-4 py-2 rounded-md hover:bg-yellow-400 hover:text-black transition"
            >
              Catálogo
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
