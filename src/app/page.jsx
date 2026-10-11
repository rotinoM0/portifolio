import Background from "@/components/threejs/background";

import Intro from "@/components/elements/Intro";
import Sobre from "@/components/elements/sobre";
import Experiencia from "@/components/elements/experiencia";
import Formacoes from "@/components/elements/formacoes";
import Projetos from "@/components/elements/projetos";
import Contato from "@/components/elements/contato";

import "./elements.css";

export default function Home() {
    return (
        <>
            <Background />
            <Intro />
            <Sobre />
            <Experiencia />
            <Formacoes />
            <Projetos />
            <Contato />
        </>
    );
}