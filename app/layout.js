import "./globals.css";
import { Bebas_Neue, Cinzel } from "next/font/google";
import NavBar from "@/components/NavBar";

export const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});

export const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const metadata = {
  title: "Unplugged 3.0 | Jurassic World",
  description: "24 Hour Hardware Hackathon by IETE DJSCE",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="jurassic-bg text-amber-50 min-h-screen antialiased overflow-x-hidden">
        <NavBar />
        <main className="pt-[80px]">{children}</main>
      </body>
    </html>
  );
}
