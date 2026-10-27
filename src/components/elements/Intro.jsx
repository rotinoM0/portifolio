"use client";

import React, { useRef } from "react";
import Trail from "@/components/mouse-trail/trail";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const SOCIALS = [
    { href: "https://github.com/rotinoM0", label: "GitHub", Icon: Github },
    { href: "https://www.linkedin.com/in/matheus-fernandes-77aa2026a/", label: "LinkedIn", Icon: Linkedin },
    { href: "mailto:contato.matheus.fs12@gmail.com", label: "E-mail", Icon: Mail },
];

export default function Intro() {
    const containerRef = useRef(null);

    return (
        <section
            id="intro"
            ref={containerRef}
            className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 sm:px-8"
        >
            <Trail parentRef={containerRef} />

            <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center text-center">                <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-zinc-50 sm:text-6xl lg:text-7xl">
                Olá, eu sou
                <span className="mt-2 block">Matheus Fernandes</span>
            </h1>

                <h2 className="mt-4 text-xl font-semibold text-teal-400 sm:text-2xl lg:text-3xl">
                    Desenvolvedor FullStack
                </h2>

                <p className="mt-6 max-w-2xl text-base text-zinc-400 sm:text-lg">
                    Construo aplicações web e desktop com foco em performance,
                    boas experiências e código limpo. Do front-end ao back-end,
                    transformo ideias em produtos reais.
                </p>

                <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
                    <a
                        href="#projetos"
                        className="group flex items-center gap-2 rounded-full bg-teal-400 px-7 py-3 font-semibold text-[#042f2e] transition-colors hover:bg-teal-300"
                    >
                        Ver meus projetos
                        <ArrowDown size={18} className="transition-transform group-hover:translate-y-0.5" />
                    </a>
                    <a
                        href="#contato"
                        className="rounded-full border border-white/15 px-7 py-3 font-semibold text-zinc-100 transition-colors hover:border-teal-400/50 hover:text-teal-400"
                    >
                        Entrar em contato
                    </a>
                </div>

                <div className="mt-10 flex items-center gap-4">
                    {SOCIALS.map(({ href, label, Icon }) => (
                        <a
                            key={label}
                            href={href}
                            target={href.startsWith("http") ? "_blank" : undefined}
                            rel="noreferrer"
                            aria-label={label}
                            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-zinc-300 transition-colors hover:border-teal-400/50 hover:text-teal-400"
                        >
                            <Icon size={20} />
                        </a>
                    ))}
                </div>
            </div>

            <a
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-500 transition-colors hover:text-teal-400"
                href="#sobre"
                aria-label="Rolar para a seção Sobre"
            >
                <ArrowDown size={28} className="animate-bounce" />
            </a>
        </section>
    );
}