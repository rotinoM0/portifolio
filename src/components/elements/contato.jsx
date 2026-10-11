import { ArrowUp, Github, Instagram, Linkedin, Mail, Send } from "lucide-react";
import Reveal from "@/components/reveal";

const SOCIALS = [
    { href: "https://www.linkedin.com/in/matheus-fernandes-77aa2026a/", label: "LinkedIn", Icon: Linkedin },
    { href: "https://github.com/rotinoM0", label: "GitHub", Icon: Github },
    { href: "https://www.instagram.com/matheus._fs/", label: "Instagram", Icon: Instagram },
];

export default function Contato() {
    return (
        <>
            <section className="relative w-full scroll-mt-24 py-24 lg:py-32" id="contato">
                <div className="mx-auto max-w-6xl px-5 sm:px-8">
                    <Reveal>
                        <span className="section-tag">Contato</span>
                        <h2 className="section-title mt-3">Vamos conversar?</h2>
                        <p className="mt-4 max-w-xl text-zinc-400">
                            Tem um projeto em mente, quer colaborar ou só bater um papo? Me chame.
                        </p>
                    </Reveal>

                    <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.4fr]">
                        <Reveal className="h-full">
                            <div className="flex h-full flex-col gap-6">
                                <a
                                    href="mailto:contato.matheus.fs12@gmail.com"
                                    className="glass-card card-hover flex items-center gap-4 rounded-2xl p-5"
                                >
                                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-teal-400/40 text-teal-400">
                                        <Mail size={22} />
                                    </span>
                                    <div>
                                        <h3 className="font-bold text-zinc-50">E-mail</h3>
                                        <p className="text-sm break-all text-zinc-400">contato.matheus.fs12@gmail.com</p>
                                    </div>
                                </a>

                                <div className="glass-card rounded-2xl p-5">
                                    <h3 className="font-bold text-zinc-50">Redes sociais</h3>
                                    <p className="mt-1 text-sm text-zinc-400">Acompanhe meu trabalho:</p>
                                    <div className="mt-4 flex gap-3">
                                        {SOCIALS.map(({ href, label, Icon }) => (
                                            <a
                                                key={label}
                                                href={href}
                                                target="_blank"
                                                rel="noreferrer"
                                                aria-label={label}
                                                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-zinc-300 transition-colors hover:border-teal-400/50 hover:text-teal-400"
                                            >
                                                <Icon size={19} />
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Reveal>

                        <Reveal delay={100}>
                            <form
                                className="glass-card flex flex-col gap-6 rounded-2xl p-6 sm:p-8"
                                action="https://formspree.io/f/xjgbbwwy"
                                method="POST"
                            >
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="email" className="text-sm font-semibold text-zinc-200">
                                        Seu e-mail
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        required
                                        placeholder="voce@exemplo.com"
                                        className="rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-zinc-100 outline-none transition-colors placeholder:text-zinc-500 focus:border-teal-400/60 focus:bg-white/10"
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label htmlFor="message" className="text-sm font-semibold text-zinc-200">
                                        Mensagem
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={6}
                                        required
                                        placeholder="Escreva sua mensagem..."
                                        className="rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-zinc-100 outline-none transition-colors placeholder:text-zinc-500 focus:border-teal-400/60 focus:bg-white/10"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-teal-400 px-7 py-3.5 font-semibold text-[#042f2e] transition-colors hover:bg-teal-300 sm:w-fit"
                                >
                                    Enviar mensagem
                                    <Send size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                                </button>
                            </form>
                        </Reveal>
                    </div>
                </div>
            </section>

            <footer className="border-t border-white/10 py-10">
                <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 sm:px-8 md:flex-row">
                    <p className="text-sm text-zinc-500">
                        © {new Date().getFullYear()} Matheus Fernandes. Todos os direitos reservados.
                    </p>

                    <a
                        href="#intro"
                        aria-label="Voltar ao topo"
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-300 transition-all hover:border-teal-400/50 hover:text-teal-400 hover:-translate-y-1"
                    >
                        <ArrowUp size={20} />
                    </a>
                </div>
            </footer>
        </>
    );
}