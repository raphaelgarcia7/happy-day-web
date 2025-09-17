import { Baloo_2 } from "next/font/google";

const baloo = Baloo_2({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export default function Footer() {
  return (
    <footer
      className={`${baloo.className} bg-[#060714] text-yellow-400 text-center py-3 sm:py-6 mt-8 text-sm sm:text-base`}
    >
      <p>
        © {new Date().getFullYear()} Happy Day Festas — Todos os direitos
        reservados.
      </p>
    </footer>
  );
}
