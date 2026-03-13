import Image from "next/image";
import { ChevronDown } from "lucide-react";

import Header from "@/components/header";
import Intro from "@/components/elements/Intro";
import Sobre from "@/components/elements/sobre";
import Projetos from "@/components/elements/projetos";
import Contato from "@/components/elements/contato";

import "./elements.css";

export default function Home() {
    return (
        <>
            <Intro />
            <Sobre />
            <Projetos />
            <Contato />
        </>
    );
}
