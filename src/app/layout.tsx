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
      <body className="bg-yellow-400 text-black">
        <Header />
        <main className="pt-24 min-h-[60vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
