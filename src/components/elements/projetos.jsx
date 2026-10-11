import { ExternalLink, FolderGit2, Sparkles } from "lucide-react";
import Image from "next/image";
import Reveal from "@/components/reveal";
import { asset } from "@/lib/asset";

import ratImg from "../../assets/rat.png";
import soundShapeImg from "../../assets/sound-shape.png";
import iris from "../../assets/iris.png";

function TechIcons({ techStack }) {
    return (
        <span className="flex shrink-0 items-center gap-1.5">
            {techStack.map((tech, index) => (
                <Image
                    key={index}
                    src={asset(tech.logo)}
                    alt={`Logo ${tech.name}`}
                    className="h-5 w-5 rounded-full object-cover"
                    width={20}
                    height={20}
                />
            ))}
        </span>
    );
}

function Card({ title, subtitle, description, imageSrc, techStack, projectLink }) {
    return (
        <a
            href={projectLink}
            target="_blank"
            rel="noreferrer"
            className="glass-card card-hover group flex h-full flex-col overflow-hidden rounded-2xl"
        >
            <div className="flex h-44 items-center justify-center border-b border-white/5 bg-white/[0.02] p-6">
                <Image
                    src={imageSrc}
                    alt={`Projeto ${title}`}
                    className="max-h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                    width={256}
                    height={256}
                />
            </div>

            <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center justify-between gap-2">
                    <h3 className="text-lg font-bold text-zinc-50">{title}</h3>
                    <TechIcons techStack={techStack} />
                </div>

                <h4 className="mt-1 text-sm font-medium text-teal-400">{subtitle}</h4>

                <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">{description}</p>

                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-zinc-200 transition-colors group-hover:text-teal-400">
                    Ver projeto
                    <ExternalLink size={16} />
                </span>
            </div>
        </a>
    );
}

export default function Projetos() {
    return (
        <section className="relative w-full scroll-mt-24 py-24 lg:py-32" id="projetos">
            <div className="mx-auto max-w-6xl px-5 sm:px-8">
                <Reveal>
                    <span className="section-tag">Portfólio</span>
                    <h2 className="section-title mt-3">Meus projetos</h2>
                    <p className="mt-4 max-w-xl text-zinc-400">
                        Confira alguns dos meus projetos mais recentes e interessantes.
                    </p>
                </Reveal>

                <div className="mt-14 flex flex-col gap-6">
                    <Reveal>
                        <a
                            href="https://github.com/rotinoM0/ai-opensource-finder"
                            target="_blank"
                            rel="noreferrer"
                            className="glass-card card-hover group flex flex-col gap-6 rounded-2xl p-6 sm:p-8 lg:flex-row lg:items-center"
                        >
                            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-teal-400/40 text-teal-400">
                                <Sparkles size={30} />
                            </span>

                            <div className="flex-1">
                                <div className="flex flex-wrap items-center gap-3">
                                    <span className="rounded-full border border-teal-400/40 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-teal-400">
                                        Destaque
                                    </span>
                                    <span className="text-xs text-zinc-500">TypeScript · AI Agents · Open Source</span>
                                </div>
                                <h3 className="mt-3 text-xl font-bold text-zinc-50 sm:text-2xl">
                                    AI Open-Source Finder
                                </h3>
                                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-400">
                                    Framework com IA que encontra projetos open source alinhados às suas
                                    habilidades e interesses. Roda localmente e transforma qualquer agente
                                    de código compatível em um scout pessoal de projetos.
                                </p>
                            </div>

                            <span className="inline-flex items-center gap-2 self-start rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-zinc-100 transition-colors group-hover:border-teal-400/50 group-hover:text-teal-400 lg:self-center">
                                Ver no GitHub
                                <ExternalLink size={16} />
                            </span>
                        </a>
                    </Reveal>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        <Reveal delay={0} className="h-full">
                            <Card
                                title="IRIS"
                                subtitle="Gestão de inventário (Electron)"
                                description="Aplicação desktop em Electron com foco em organização e gerenciamento de inventário, com interface intuitiva para produtos e estoque."
                                imageSrc={iris}
                                techStack={[
                                    { name: "TypeScript", logo: "/icons/ts-logo.svg" },
                                    { name: "React.js", logo: "/icons/react-logo.svg" },
                                ]}
                                projectLink="https://github.com/rotinoM0/iris"
                            />
                        </Reveal>

                        <Reveal delay={80} className="h-full">
                            <Card
                                title="Sound Shape"
                                subtitle="Visualizador de som"
                                description="Sistema de visualização de som feito com React.js e Web Audio API que transforma áudio em experiências visuais interativas."
                                imageSrc={soundShapeImg}
                                techStack={[
                                    { name: "React.js", logo: "/icons/react-logo.svg" },
                                    { name: "JavaScript", logo: "/icons/js-logo.svg" },
                                ]}
                                projectLink="https://github.com/rotinoM0/color-sound"
                            />
                        </Reveal>

                        <Reveal delay={160} className="h-full">
                            <Card
                                title="RAT"
                                subtitle="RPG Assistant Tool"
                                description="Ferramenta de auxílio para jogos de tabuleiro utilizando a biblioteca discord.js."
                                imageSrc={ratImg}
                                techStack={[
                                    { name: "JavaScript", logo: "/icons/js-logo.svg" },
                                    { name: "Discord.js", logo: "/icons/discord-logo.svg" },
                                ]}
                                projectLink="https://github.com/rotinoM0/rat"
                            />
                        </Reveal>
                    </div>

                    <Reveal delay={100}>
                        <a
                            href="https://github.com/rotinoM0"
                            target="_blank"
                            rel="noreferrer"
                            className="glass-card card-hover group flex flex-col items-center justify-center gap-4 rounded-2xl px-6 py-10 text-center sm:flex-row sm:justify-between sm:px-10 sm:text-left"
                        >
                            <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-5">
                                <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-teal-400/40 text-teal-400">
                                    <FolderGit2 size={28} />
                                </span>
                                <div>
                                    <h3 className="text-lg font-bold text-zinc-50">Mais projetos no GitHub</h3>
                                    <p className="mt-1 text-sm text-zinc-400">
                                        Visite meu perfil e veja todos os meus repositórios e contribuições open source.
                                    </p>
                                </div>
                            </div>
                            <span className="inline-flex items-center gap-2 rounded-full border border-teal-400/40 px-5 py-2.5 text-sm font-semibold text-teal-400 transition-colors group-hover:bg-teal-400 group-hover:text-[#042f2e]">
                                GitHub
                                <ExternalLink size={16} />
                            </span>
                        </a>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}