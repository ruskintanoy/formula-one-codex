import { Rubik } from "next/font/google";
import "./globals.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-rubik",
});

export const metadata = {
  title: "Formula One Codex",
  description: "Explore the world of Formula 1 - Drivers, Teams, Circuits, and more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`
          ${rubik.variable}
          font-sans antialiased bg-black text-white
        `}
      >
        {/* Fixed Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="min-h-screen container mx-auto p-4 pt-24">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
