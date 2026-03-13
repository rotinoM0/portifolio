import { Geist, Geist_Mono } from "next/font/google";

import Header from "@/components/header";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Matheus Fernandes - Portfólio",
  description: "Portfólio de Matheus Fernandes, desenvolvedor FullStack especializado em desenvolvimento web e desktop. Explore meus projetos, habilidades e experiência profissional.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
