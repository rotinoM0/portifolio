"use client";

import React, {useState} from "react";
import { Menu } from "lucide-react";

export default function Header() {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full flex justify-between items-center p-4 text-zinc-100 z-10 bg-transparent sm:bg-black/30 dark:sm:bg-zinc-900/30 backdrop-blur-md">
            <div className="w-full items-center pr-20 z-7 flex">
                <h1 className="font-bold text-2xl">Matheus Fernandes</h1>
            </div>
            <div className="flex w-full justify-end items-center">
                
                {/* Navigation items */}
                <div className="md:flex hidden justify-end items-center gap-10 w-full z-7">
                    <a href="#intro">Início</a>
                    <a href="#sobre">Sobre mim</a>
                    <a href="#projetos">Meus projetos</a>
                    <a href="#contato">contato</a>
                </div>


                <button className="text-white hover:text-teal-700 transition-colors md:hidden block" onClick={() => setMenuOpen(!menuOpen)}>
                    <Menu />
                </button>
                {menuOpen && (
                    <div className="absolute top-16 right-4 bg-gray-200/10 backdrop-blur-md rounded-md shadow-lg p-4 md:hidden flex flex-col gap-4 z-20">
                        <a href="#intro" className="text-white hover:text-teal-700 transition-colors">Início</a>
                        <a href="#sobre" className="text-white hover:text-teal-700 transition-colors">Sobre mim</a>
                        <a href="#projetos" className="text-white hover:text-teal-700 transition-colors">Meus projetos</a>
                        <a href="#contato" className="text-white hover:text-teal-700 transition-colors">Contato</a>
                    </div>
                )}
            </div>
        </header>
    );
}