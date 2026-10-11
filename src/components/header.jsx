"use client";

import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
    { href: "#intro", label: "Início" },
    { href: "#sobre", label: "Sobre mim" },
    { href: "#experiencia", label: "Experiência" },
    { href: "#formacoes", label: "Formações" },
    { href: "#projetos", label: "Projetos" },
    { href: "#contato", label: "Contato" },
];

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState("#intro");

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        const sections = NAV_ITEMS.map((item) => document.querySelector(item.href)).filter(Boolean);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActive(`#${entry.target.id}`);
                });
            },
            { rootMargin: "-40% 0px -55% 0px" }
        );

        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                scrolled
                    ? "bg-[#05060f]/80 backdrop-blur-md border-b border-white/10"
                    : "bg-transparent border-b border-transparent"
            }`}
        >
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
                <a href="#intro" className="flex items-center gap-2 group">
                    <span className="hidden text-lg font-bold tracking-tight text-zinc-100 sm:block">
                        Matheus<span className="text-teal-400"> Fernandes</span>
                    </span>
                </a>

                <ul className="hidden items-center gap-4 md:flex lg:gap-8">
                    {NAV_ITEMS.map((item) => (
                        <li key={item.href}>
                            <a
                                href={item.href}
                                className={`text-sm font-medium transition-colors ${
                                    active === item.href
                                        ? "text-teal-400"
                                        : "text-zinc-400 hover:text-zinc-100"
                                }`}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <button
                    className="text-zinc-200 transition-colors hover:text-teal-400 md:hidden"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Abrir menu"
                >
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {menuOpen && (
                <div className="border-t border-white/10 bg-[#05060f]/95 backdrop-blur-md md:hidden">
                    <ul className="flex flex-col gap-1 px-5 py-4">
                        {NAV_ITEMS.map((item) => (
                            <li key={item.href}>
                                <a
                                    href={item.href}
                                    onClick={() => setMenuOpen(false)}
                                    className={`block rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
                                        active === item.href
                                            ? "bg-teal-400/10 text-teal-400"
                                            : "text-zinc-300 hover:bg-white/5 hover:text-white"
                                    }`}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    );
}