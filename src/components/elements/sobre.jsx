import Image from "next/image";
import { Webhook } from "lucide-react";
import Reveal from "@/components/reveal";
import { asset } from "@/lib/asset";

const LANGUAGES = [
    { name: "JavaScript", logo: "/icons/js-logo.svg" },
    { name: "TypeScript", logo: "/icons/ts-logo.svg" },
    { name: "Python", logo: "/icons/python-logo.svg" },
    { name: "HTML5", logo: "/icons/html-logo.svg" },
    { name: "CSS3", logo: "/icons/css-logo.svg" },
    { name: "Java", logo: "/icons/java-logo.svg" },
    { name: "C#", logo: "/icons/csharp-logo.svg" },
    { name: "C++", logo: "/icons/cpp-logo.svg" },
    { name: "PHP", logo: "/icons/php-logo.svg" },
];

const FRONTEND = [
    { name: "React.js", logo: "/icons/react-logo.svg" },
    { name: "Next.js", logo: "/icons/next-logo.svg" },
    { name: "Tailwind CSS", logo: "/icons/tailwind-logo.svg" },
    { name: "Bootstrap", logo: "/icons/bootstrap-logo.svg" },
];

const BACKEND = [
    { name: "Node.js", logo: "/icons/node-logo.svg" },
    { name: "Spring Boot", logo: "/icons/spring-logo.svg" },
    { name: "REST API", icon: Webhook },
];

const DATA = [
    { name: "PostgreSQL", logo: "/icons/postgresql-logo.svg" },
    { name: "MongoDB", logo: "/icons/mongodb-logo.svg" },
    { name: "MySQL", logo: "/icons/mysql-logo.svg" },
];

const TOOLS = [
    { name: "Linux", logo: "/icons/linux-logo.svg" },
    { name: "Git", logo: "/icons/git-logo.svg" },
    { name: "GitHub", logo: "/icons/github-logo.svg" },
    { name: "VS Code", logo: "/icons/vscode-logo.svg" },
    { name: "NumPy", logo: "/icons/numpy-logo.svg" },
    { name: "Pandas", logo: "/icons/pandas-logo.svg" },
];

const STATS = [
    { value: "Excelência", label: "Na produção de projetos" },
    { value: "Foco", label: "Em tecnologias e ferramentas modernas" },
    { value: "Há mais de 8 anos", label: "estudos e prática" },
    { value: "Qualidade", label: "na entrega de código" },
];

function StackChip({ name, logo, icon: Icon }) {
    return (
        <div className="stack-item box-shadow">
            {logo ? (
                <Image
                    src={asset(logo)}
                    alt={`Logo ${name}`}
                    className="h-5 w-5"
                    width={20}
                    height={20}
                />
            ) : Icon ? (
                <Icon size={18} className="text-teal-400" />
            ) : null}
            <span className="text-sm font-semibold text-zinc-200">{name}</span>
        </div>
    );
}

function StackGroup({ title, items }) {
    return (
        <div className="flex flex-col gap-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-400">{title}</h4>
            <div className="flex flex-wrap gap-3">
                {items.map((item) => (
                    <StackChip key={item.name} {...item} />
                ))}
            </div>
        </div>
    );
}

export default function Sobre() {
    return (
        <section className="relative w-full scroll-mt-24 py-24 lg:py-32" id="sobre">
            <div className="mx-auto max-w-6xl px-5 sm:px-8">
                <Reveal>
                    <span className="section-tag">Sobre mim</span>
                    <h2 className="section-title mt-3">Quem sou eu</h2>
                    <p className="mt-4 max-w-xl text-zinc-400">
                        Confira algumas informações sobre mim e minhas habilidades.
                    </p>
                </Reveal>

                <div className="mt-14 grid items-center gap-12 lg:grid-cols-[1fr_1.2fr]">
                    <Reveal>
                        <div className="mx-auto w-fit rounded-3xl border border-white/10 bg-white/[0.03] p-2">
                            <Image
                                src={asset("/pfp.png")}
                                alt="Foto de perfil de Matheus Fernandes"
                                className="h-72 w-72 rounded-[1.25rem] object-cover sm:h-80 sm:w-80"
                                width={320}
                                height={320}
                            />
                        </div>
                    </Reveal>

                    <Reveal delay={120}>
                        <div className="flex flex-col gap-6">
                            <h3 className="text-2xl font-bold text-zinc-50 sm:text-3xl">
                                Olá, eu sou <span className="text-teal-400">Matheus</span>!
                            </h3>
                            <p className="text-zinc-400">
                                Sou desenvolvedor Full Stack apaixonado por criar soluções ponta a ponta
                                que conectam código eficiente a necessidades reais de negócio. Minha
                                trajetória combina a construção de aplicações robustas — do banco de dados
                                às interfaces responsivas em Node.js, React e Next.js — com uma bagagem
                                prática no mercado.
                            </p>
                            <p className="text-zinc-400">
                                Sou movido pela curiosidade, aprendizado contínuo e pela satisfação de ver
                                uma ideia transformar operações reais. Também gosto de participar de
                                comunidades de tecnologia, compartilhar conhecimento e colaborar em
                                projetos open source.
                            </p>
                        </div>
                    </Reveal>
                </div>

                <Reveal delay={100}>
                    <div className="mt-16 grid grid-cols-2 gap-4 lg:grid-cols-4">
                        {STATS.map((stat) => (
                            <div
                                key={stat.label}
                                className="card-hover flex flex-col items-center gap-1 rounded-2xl px-4 py-6 text-center"
                            >
                                <span className="text-3xl font-extrabold text-teal-400">{stat.value}</span>
                                <span className="text-sm text-zinc-400">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </Reveal>

                <Reveal delay={100}>
                    <div className="glass-card mt-16 rounded-3xl p-6 sm:p-10">
                        <h3 className="text-2xl font-bold text-zinc-50">Minha Stack</h3>
                        <p className="mt-2 text-zinc-400">
                            Tecnologias e ferramentas com as quais trabalho:
                        </p>
                        <div className="mt-10 flex flex-col gap-10">
                            <StackGroup title="Linguagens" items={LANGUAGES} />
                            <StackGroup title="Front-end" items={FRONTEND} />
                            <StackGroup title="Back-end" items={BACKEND} />
                            <StackGroup title="Bancos de Dados" items={DATA} />
                            <StackGroup title="Ferramentas" items={TOOLS} />
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}