"use client";

import React, {useState} from "react";
import { Sun, Menu } from "lucide-react";

export default function Header() {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full flex justify-between items-center p-4 text-zinc-100 z-10 bg-transparent sm:bg-black/30 dark:sm:bg-zinc-900/30 backdrop-blur-md">
            <div className="w-full items-center pr-20 z-7 flex">
                <h1>My Portfolio</h1>
            </div>
            <div className="flex w-full justify-end items-center">
                
                {/* Navigation items */}
                <div className="md:flex hidden justify-end items-center gap-10 w-full z-7">
                    <a href="">Início</a>
                    <a href="">Sobre mim</a>
                    <a href="">Meus projetos</a>
                    <a href="">contato</a>
                    <button 
                        className="ml-2 p-2 rounded-md text-gray-600 over:text-gray-900 hover:bg-gray-200 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800 transition-colors"
                    >
                        <Sun />
                    </button>
                </div>


                <button className="text-white hover:text-teal-700 transition-colors md:hidden block" onClick={() => setMenuOpen(!menuOpen)}>
                    <Menu />
                </button>
                {menuOpen && (
                    <div className="absolute top-16 right-4 bg-gray-200/10 backdrop-blur-md rounded-md shadow-lg p-4 md:hidden flex flex-col gap-4 z-20">
                        <a href="" className="text-white hover:text-teal-700 transition-colors">Início</a>
                        <a href="" className="text-white hover:text-teal-700 transition-colors">Sobre mim</a>
                        <a href="" className="text-white hover:text-teal-700 transition-colors">Meus projetos</a>
                        <a href="" className="text-white hover:text-teal-700 transition-colors">Contato</a>
                        <button 
                            className="mt-2 p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
                        >
                            <Sun />
                        </button>
                    </div>
                )}
            </div>
        </header>
    );
}