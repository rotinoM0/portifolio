"use client";

import React, { useRef } from "react";
import Header from "@/components/header";
import Trail from "@/components/mouse-trail/trail";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Intro() {
    const containerRef = useRef(null);

    return (
        <>
            {/* Introdução */}
            <div ref={containerRef} className="md:cursor-none relative flex min-h-screen items-center justify-center bg-[#080217] font-sans dark:bg-blue overflow-hidden px-4 sm:px-6">
                {/* pass a ref of the main container to Trail so it confines inside */}
                <Trail parentRef={containerRef} />
                {/* Conteúdo central */}
                <div className="flex justify-center w-full md:w-1/2 p-6 md:pl-16 z-[10]">
                    <div className="flex flex-col items-center mb-8 w-full">
                        <div className="flex flex-col w-full font-bold font-mono justify-end text-right my-6 space-y-2">
                            <h1 className="flex w-full justify-end text-4xl sm:text-5xl md:text-3xl lg:text-5xl text-zinc-900 dark:text-zinc-100">Olá! Eu sou</h1>
                            <h2 className="flex w-full justify-end text-3xl sm:text-4xl md:text-3xl lg:text-4xl text-teal-900 dark:text-teal-400">Matheus Fernandes</h2>
                            <h2 className="flex w-full justify-end text-xl  sm:text-4xl md:text-3xl lg:text-3xl text-zinc-900 dark:text-zinc-100">Desenvolvedor FullStack</h2>
                        </div>
                        {/* Botões */}
                        <div className="flex w-full flex-1 md:justify-end justify-center md:flex-row flex-col md:space-x-4 space-y-2 md:space-y-0 items-center">
                            <a
                                href="#projetos"
                                className="w-full md:w-auto text-center rounded bg-teal-600 px-4 py-2 font-medium text-white box-shadow"
                            >
                                Meus Projetos
                            </a>
                            <a
                                href="#contato"
                                className="w-full md:w-auto text-center rounded border border-zinc-300 px-4 py-2 font-medium text-zinc-900 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-800 box-shadow"
                            >
                                Entre em contato
                            </a>
                        </div>
                    </div>
                    <div className="hidden md:block sm:w-3 md-w-2 w-1 bg-teal-600 rounded mx-10" aria-hidden />
                </div>
                <a className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-zinc-900 dark:text-zinc-100"
                    href="#sobre"><ChevronDown size={32} /></a>
            </div>
        </>
    );
}
