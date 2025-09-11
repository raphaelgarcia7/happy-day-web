import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Happy Day — Catálogo de Temas",
  description: "Decoração pegue e monte. Aluguel de temas, kits e itens para festas.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-yellow-400 text-black min-h-screen flex flex-col">
        {/* Header fixo */}
        <Header />

        {/* Main cresce para ocupar espaço entre Header e Footer */}
        <main className="pt-24 flex-1">{children}</main>

        {/* Footer sempre no final */}
        <Footer />
      </body>
    </html>
  );
}
