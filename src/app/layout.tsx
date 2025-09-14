import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";

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
    <html lang="pt-BR" className="h-full">
      <body className="text-black min-h-screen flex flex-col bg-[url('/background_baloes.png')] bg-no-repeat bg-cover bg-center bg-fixed">
        <Header />
        <Main>{children}</Main>
        <Footer />
      </body>
    </html>
  );
}
