import { Briefcase, CalendarDays, Check, MapPin } from "lucide-react";
import Reveal from "@/components/reveal";

const EXPERIENCE = [
    {
        role: "Analista de e-Commerce",
        company: "Conecta Bags",
        location: "Vespasiano, MG",
        period: "Ago 2025 – Jan 2026",
        highlights: [
            {
                title: "Automação e Eficiência",
                text: "Desenvolvi scripts e integrações que reduziram o tempo em tarefas repetitivas, otimizando o fluxo de trabalho da equipe.",
            },
            {
                title: "Gestão de Dados",
                text: "Mantive a integridade do estoque no sistema ERP, eliminando divergências e garantindo confiabilidade nas operações.",
            },
            {
                title: "Visão de Produto e Design",
                text: "Apoiei na criação de protótipos virtuais e peças visuais, unindo a visão técnica com foco em usabilidade e apresentação.",
            },
            {
                title: "Estratégia e Vendas",
                text: "Gerenciei a presença da empresa em marketplaces para expandir o alcance e melhorar a performance de vendas.",
            },
        ],
    },
];

export default function Experiencia() {
    return (
        <section className="relative w-full scroll-mt-24 py-24 lg:py-32" id="experiencia">
            <div className="mx-auto max-w-6xl px-5 sm:px-8">
                <Reveal>
                    <span className="section-tag">Carreira</span>
                    <h2 className="section-title mt-3">Experiência Profissional</h2>
                    <p className="mt-4 max-w-xl text-zinc-400">
                        Onde coloquei a mão na massa e conectei tecnologia a necessidades reais.
                    </p>
                </Reveal>

                <div className="mt-14 flex flex-col gap-6">
                    {EXPERIENCE.map((job) => (
                        <Reveal key={job.role}>
                            <div className="glass-card card-hover rounded-2xl border-l-2 border-l-teal-400 p-6 sm:p-8">
                                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                                    <div className="flex items-start gap-4">
                                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-teal-400/40 text-teal-400">
                                            <Briefcase size={22} />
                                        </span>
                                        <div>
                                            <h3 className="text-lg font-bold text-zinc-50">{job.role}</h3>
                                            <p className="text-sm font-medium text-teal-400">{job.company}</p>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-1.5 text-xs text-zinc-500 sm:items-end sm:text-right">
                                        <span className="inline-flex items-center gap-2">
                                            <CalendarDays size={14} />
                                            {job.period}
                                        </span>
                                        <span className="inline-flex items-center gap-2">
                                            <MapPin size={14} />
                                            {job.location}
                                        </span>
                                    </div>
                                </div>

                                <ul className="mt-6 flex flex-col gap-3 border-t border-white/5 pt-6">
                                    {job.highlights.map((item) => (
                                        <li key={item.title} className="flex gap-3">
                                            <Check size={18} className="mt-0.5 shrink-0 text-teal-400" />
                                            <p className="text-sm leading-relaxed text-zinc-400">
                                                <span className="font-semibold text-zinc-200">{item.title}:</span>{" "}
                                                {item.text}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}