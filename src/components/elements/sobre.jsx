import { ChevronDown } from "lucide-react";
import Image from "next/image";

function StackItem({ name, logo }) {
    return (
        <div className="stack-item box-shadow">
            <Image src={logo} alt={`${name} Logo`} className="w-6 h-6 m-2" width={24} height={24} />
            <span className="text-white font-bold">{name}</span>
        </div>
    );
}

export default function Sobre() {
    return (
        <>
            {/* Sobre Mim Section */}
            <section className="flex flex-col w-full justify-between min-h-screen bg-stone-900" id="sobre">
                {/* Cabeçalho */}
                <div className="flex flex-col md:flex-row lg:flex-row items-center justify-between h-full w-full p-10 gap-5 border-b border-zinc-700">
                    <h2 className="text-3xl font-bold title flex-1/2">Sobre mim</h2>
                    <p className="text-zinc-400">Confira algumas informações sobre mim e minhas habilidades</p>
                </div>

                {/* Conteúdo Principal */}
                <div className="flex flex-col md:flex-row lg:flex-row items-center justify-between h-full w-full p-10 gap-5">
                    <div className="flex flex-col flex-1/4 h-full flex-wrap items-center gap-5">
                        <h3 className="text-2xl font-bold text-white">Olá, eu sou <span className="text-teal-900 dark:text-teal-400">Matheus</span>!</h3>
                        <p className="text-zinc-400">Sou um desenvolvedor apaixonado por tecnologia e inovação. Tenho experiência em desenvolvimento FullStack, especialmente com React e Node.js. Adoro criar projetos que resolvam problemas reais e estou sempre buscando aprender novas tecnologias para aprimorar minhas habilidades.</p>
                        <p className="text-zinc-400">Além de programar, gosto de participar de comunidades de tecnologia, compartilhar conhecimento e colaborar em projetos open source. Estou sempre aberto a novas oportunidades e desafios que me permitam crescer como profissional e contribuir para a comunidade tech.</p>
                    </div>
                    <div className="flex flex-1 items-center justify-center">
                        <Image src="/pfp.png" alt="Foto de Perfil" className="w-64 h-64 rounded-full object-cover border-4 border-teal-400" width={256} height={256}/>
                    </div>
                </div>

                {/* Stack Tecnológica */}
                <div className="flex flex-col items-center justify-between h-full w-full p-10 gap-5 border-t border-zinc-700">
                    <h3 className="text-2xl font-bold text-white">Minha Stack</h3>
                    <p className="text-zinc-400">Tenho experiência com as seguintes tecnologias e ferramentas:</p>
                    <div className="flex flex-wrap justify-center items-center gap-10 mt-5">
                        
                        <StackItem name="JavaScript" logo="/icons/js-logo.svg" />
                        <StackItem name="TypeScript" logo="/icons/ts-logo.svg" />
                        <StackItem name="HTML5" logo="/icons/html-logo.svg" />
                        <StackItem name="CSS3" logo="/icons/css-logo.svg" />
                        <StackItem name="C++" logo="/icons/cpp-logo.svg" />
                        <StackItem name="C#" logo="/icons/csharp-logo.svg" />
                        <StackItem name="Python" logo="/icons/python-logo.svg" />

                        <StackItem name="Node.js" logo="/icons/node-logo.svg" />
                        <StackItem name="React.js" logo="/icons/react-logo.svg" />
                        <StackItem name="Next.js" logo="/icons/next-logo.svg" />
                        <StackItem name="Tailwind CSS" logo="/icons/tailwind-logo.svg" />
                        <StackItem name="Numpy" logo="/icons/numpy-logo.svg" />
                        <StackItem name="Pandas" logo="/icons/pandas-logo.svg" />
                        
                        <StackItem name="Git" logo="/icons/git-logo.svg" />
                        <StackItem name="Linux" logo="/icons/linux-logo.svg" />
                        <StackItem name="SQL" logo="/icons/sql-logo.svg" />
                        <StackItem name="MongoDB" logo="/icons/mongodb-logo.svg" />
                    </div>
                </div>
            </section>
        </>
    );
}