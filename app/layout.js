import "./globals.css";
import { Cinzel, Cormorant_Garamond } from 'next/font/google'

export const cinzel = Cinzel({ subsets: ["latin"], weight: ["600","700"] });
export const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["400","500"] });

export const metadata = {
  title: "Unplugged 3.0",
  description: "24 Hour Hardware Hackathon",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-yellow-100 font-sans">
        {children}
      </body>
    </html>
  );
}
