import { BadgeCheck, CalendarDays, Download, GraduationCap, Languages } from "lucide-react";
import Reveal from "@/components/reveal";
import { asset } from "@/lib/asset";

const EDUCATION = [
    {
        type: "Graduação",
        course: "Análise e Desenvolvimento de Sistemas",
        institution: "Uniasselvi",
        period: "Jan 2025 – Jul 2027 (previsão)",
        status: "Cursando atualmente",
        current: true,
    },
    {
        type: "Educação Básica",
        course: "Ensino Médio",
        institution: "E.E. José Elias Issa",
        period: "Jan 2022 – Dez 2024",
        status: "Completo",
        current: false,
    },
];

const CERTIFICATIONS = [
    {
        name: "Bootcamp Riachuelo – Cibersegurança",
        issuer: "DIO",
        date: "Concluído em Ago 2026",
    },
];

const LANGUAGES = [
    { name: "Português", level: "Nativo" },
    { name: "Inglês", level: "Fluente" },
    { name: "Francês", level: "Intermediário" },
];

export default function Formacoes() {
    return (
        <section className="relative w-full scroll-mt-24 py-24 lg:py-32" id="formacoes">
            <div className="mx-auto max-w-6xl px-5 sm:px-8">
                <Reveal>
                    <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <span className="section-tag">Formação</span>
                            <h2 className="section-title mt-3">Formações</h2>
                            <p className="mt-4 max-w-xl text-zinc-400">
                                Minha trajetória acadêmica, certificações e idiomas.
                            </p>
                        </div>
                    </div>
                </Reveal>

                <div className="mt-14 grid gap-6 lg:grid-cols-[1.3fr_1fr]">
                    <Reveal className="h-full">
                        <div className="flex h-full flex-col gap-6">
                            <h3 className="flex items-center gap-2 text-lg font-bold text-zinc-50">
                                <GraduationCap size={20} className="text-teal-400" />
                                Educação
                            </h3>

                            <div className="flex flex-col gap-4">
                                {EDUCATION.map((item) => (
                                    <div
                                        key={item.course}
                                        className="glass-card card-hover flex flex-col gap-3 rounded-2xl p-6 sm:flex-row sm:items-center sm:justify-between"
                                    >
                                        <div>
                                            <span className="text-xs font-semibold uppercase tracking-wider text-teal-400">
                                                {item.type}
                                            </span>
                                            <h4 className="mt-1 text-base font-bold text-zinc-50">{item.course}</h4>
                                            <p className="mt-1 text-sm text-zinc-400">{item.institution}</p>
                                            <p className="mt-2 inline-flex items-center gap-2 text-xs text-zinc-500">
                                                <CalendarDays size={14} />
                                                {item.period}
                                            </p>
                                        </div>
                                        <span
                                            className={`self-start rounded-full border px-3 py-1 text-xs font-semibold sm:self-center ${
                                                item.current
                                                    ? "border-teal-400/40 text-teal-400"
                                                    : "border-white/15 text-zinc-400"
                                            }`}
                                        >
                                            {item.status}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Reveal>

                    <Reveal delay={120} className="h-full">
                        <div className="flex h-full flex-col gap-6">
                            <div className="flex flex-col gap-6">
                                <h3 className="flex items-center gap-2 text-lg font-bold text-zinc-50">
                                    <BadgeCheck size={20} className="text-teal-400" />
                                    Certificações
                                </h3>

                                <div className="flex flex-col gap-4">
                                    {CERTIFICATIONS.map((cert) => (
                                        <div key={cert.name} className="glass-card card-hover rounded-2xl p-6">
                                            <h4 className="text-base font-bold text-zinc-50">{cert.name}</h4>
                                            <p className="mt-1 text-sm text-zinc-400">{cert.issuer}</p>
                                            <p className="mt-2 text-xs text-zinc-500">{cert.date}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-col gap-6">
                                <h3 className="flex items-center gap-2 text-lg font-bold text-zinc-50">
                                    <Languages size={20} className="text-teal-400" />
                                    Idiomas
                                </h3>

                                <div className="flex flex-wrap gap-3">
                                    {LANGUAGES.map((lang) => (
                                        <div key={lang.name} className="stack-item box-shadow">
                                            <span className="text-sm font-semibold text-zinc-200">{lang.name}</span>
                                            <span className="text-xs text-teal-400">{lang.level}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}