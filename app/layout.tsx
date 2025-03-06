import type { Metadata } from "next";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import "./globals.css";

export const metadata: Metadata = {
  title: "Mountain Mixology",
  description: "Premium craft cocktail catering, based out of Canmore, AB.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
