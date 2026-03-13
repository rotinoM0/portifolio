import Trail from "../mouse-trail/trail";
import { Code2, Github } from "lucide-react"

import Image from "next/image";

import ratImg from "../../assets/rat.png";
import soundShapeImg from "../../assets/sound-shape.png";
import iris from "../../assets/iris.png";

function Card({ title, titleLong, description, imageSrc, techStack, projectLink, color }) {
    const colorClasses = {
        "teal": "bg-teal-800",
        "red": "bg-red-800",
        "blue": "bg-blue-800",
        "green": "bg-green-800",
        "yellow": "bg-yellow-800",
        "purple": "bg-purple-800",
    };

    return (
        <div className={`flex flex-col ${colorClasses[color] || colorClasses["teal"]} rat-project justify-between text-white card`}>
            {/* Title */}
            <div className="flex justify-between mx-2 items-center my-2">
                <h3 className="pl-7 text-xl font-bold">{title}</h3>
                <span><Image src={techStack[0].logo} alt={`${techStack[0].name} Logo`} className="w-6 h-6" width={24} height={24} /></span>
            </div>
            {/* Body */}
            <div className="flex flex-col justify-between h-full">
                <Image src={imageSrc} alt={`${title} Project`} className="bg-gray-800 w-full h-40 object-scale-down border-3 border-[#797979]" width={256} height={256} />
                <div className="flex flex-col gap-2">
                    <div className="flex w-full px-5 gap-2 items-center">
                        <div className="flex items-center gap-2">
                            {techStack.map((tech, index) => (
                                <Image key={index} src={tech.logo} alt={`${tech.name} Logo`} className="w-5 h-5 rounded-full object-cover" width={24} height={24} />
                            ))}
                        </div>
                        <h3 className="font-bold text-white">{titleLong}</h3>
                    </div>
                    <p className="text-xs px-5 card-desc">{description}</p>
                </div>
                {/* Bottom */}
                <div className="links flex items-center self-end">
                    <span className="ml-2"><Image src="/icons/github-logo.svg" alt="GitHub Logo" className="w-5 h-5" width={24} height={24} /></span>
                    <a href={projectLink} className="text-white no-underline hover:underline">Ver Projeto</a>
                </div>
            </div>
        </div>
    );
}

export default function Projetos() {
    return (
        <>
            {/* Projetos Section */}
            <section className="flex flex-col w-full min-h-screen items-center bg-[#080217]" id="projetos">
                <div className="flex flex-col md:flex-row lg:flex-row items-center justify-between h-full w-full p-10 gap-5 border-b border-zinc-700">
                    <h2 className="text-3xl font-bold title flex-1/2">Meus Projetos</h2>
                    <p className="text-zinc-400">Confira alguns dos meus projetos mais recentes e interessantes</p>
                </div>
                <div className="flex flex-wrap w-full justify-evenly items-center overflow-x-hidden">
                    {/* Project Cards */}
                    <div className="flex flex-wrap justify-center items-center my-20 cards">
                        <Card
                            title="RAT"
                            titleLong="RPG Assistant Tool"
                            description="Ferramenta de auxilio para jogos de tabuleiro utilizando a biblioteca discord.js"
                            imageSrc={ratImg}
                            techStack={[
                                { name: "JavaScript", logo: "/icons/js-logo.svg" },
                                { name: "Discord.js", logo: "/icons/discord-logo.svg" }
                            ]}
                            projectLink="https://github.com/rotinoM0/rat"
                            color="red"
                        />
                        <Card
                            title="Sound Shape"
                            titleLong="Sound Shape"
                            description="Sistema de visualização de som feito com React.js e web audio API que transforma áudio em experiências visuais interativas."
                            imageSrc={soundShapeImg}
                            techStack={[
                                { name: "React.js", logo: "/icons/react-logo.svg" },
                                { name: "JavaScript", logo: "/icons/js-logo.svg" }
                            ]}
                            projectLink="https://github.com/rotinoM0/color-sound"
                            color="teal"
                        />
                        <Card
                            title="IRIS"
                            titleLong="I.R.I.S"
                            description="Sistema de registro de inventário para pequenas empresas, oferecendo uma interface intuitiva para gerenciamento de produtos e estoque"
                            imageSrc={iris}
                            techStack={[
                                { name: "TypeScript", logo: "/icons/ts-logo.svg" },
                                { name: "React.js", logo: "/icons/react-logo.svg" }
                            ]}
                            projectLink="https://github.com/rotinoM0/iris"
                            color="purple"
                        />
                    </div>
                    {/* deck (link to github) */}
                    <div>
                        <a href="https://github.com/rotinoM0">
                            <div className={`flex flex-col bg-teal-500 rat-project justify-center text-white deck`}>
                                <div className="flex flex-col justify-between items-center my-2">
                                    <h3 className=" text-xl font-bold">Mais Projetos</h3>
                                    <span><Image src="/icons/github-logo.svg" alt={`GitHub Logo`} className="w-24 h-24" width={24} height={24} /></span>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="flex w-full justify-center items-center my-20 text-zinc-400">
                    <p>Esses são apenas alguns dos meus projetos mais recentes. Para ver mais, visite meu perfil no GitHub clicando no card acima!</p>
                </div>
            </section>
        </>
    );
}