import "./globals.css";

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
