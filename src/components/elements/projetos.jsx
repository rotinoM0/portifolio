import Trail from "../mouse-trail/trail";
import { Code2 } from "lucide-react"

import Image from "next/image";

import ratImg from "../../assets/rato.png";
import pfp from "../../assets/pfp.jpg";
import hornet from "../../assets/hornet.jpg";

import jsLogo from "../../assets/icons/js.svg";
import discordLogo from "../../assets/icons/discord.svg";
import reactLogo from "../../assets/icons/react.svg";

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
                <Image src={imageSrc} alt={`${title} Project`} className="w-full h-40 object-cover border-3 border-[#797979]" width={100} height={100} />
                <div className="flex flex-col gap-2">
                    <div className="flex w-full px-5 gap-2 items-center">
                        <div className="flex items-center gap-2">
                            {techStack.map((tech, index) => (
                                <Image key={index} src={tech.logo} alt={`${tech.name} Logo`} className="w-5 h-5 rounded-full object-cover" width={24} height={24} />
                            ))}
                        </div>
                        <h3 className="font-bold text-white">{titleLong}</h3>
                    </div>
                    <p className="text-xs px-5">{description}</p>
                </div>
                {/* Bottom */}
                <div className="links self-end">
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
            <section className="flex flex-col w-full min-h-screen bg-[#080217]" id="projetos">
                <h2 className="text-3xl font-bold text-center text-zinc-100 mt-20">Meus Projetos</h2>
                <div>
                    <div className="flex justify-center items-center my-20">
                        <Card 
                            title="RAT"
                            titleLong="RPG Assistant Tool"
                            description="Ferramenta de auxilio para jogos de tabuleiro utilizando a biblioteca discord.js"
                            imageSrc={ratImg}
                            techStack={[
                                { name: "JavaScript", logo: jsLogo },
                                { name: "Discord.js", logo: discordLogo }
                            ]}
                            projectLink="https://github.com/rotinoM0/rat" 
                            color="red"
                        />
                        <Card 
                            title="Sound Shape"
                            titleLong="Sound Shape"
                            description="Sistema de visualização de som feito com React.js e web audio API que transforma áudio em experiências visuais interativas."
                            imageSrc={pfp}
                            techStack={[
                                { name: "JavaScript", logo: reactLogo },
                                { name: "Discord.js", logo: jsLogo }
                            ]}
                            projectLink="#"
                            color="teal"
                        />
                        <Card 
                            title="IRIS"
                            titleLong="I.R.I.S"
                            description="Ferramenta de auxilio para jogos de tabuleiro utilizando a biblioteca discord.js"
                            imageSrc={hornet}
                            techStack={[
                                { name: "JavaScript", logo: reactLogo },
                                { name: "Discord.js", logo: discordLogo }
                            ]}
                            projectLink=""
                            color="blue"
                        />
                    </div>
                </div>
            </section>
        </>
    );
}