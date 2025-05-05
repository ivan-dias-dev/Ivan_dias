
import Style from './index.module.css'
import Sobre from '../Sobre/index.jsx'
import Skills from '../Skills/index.jsx'
import Projetos from '../Projetos/index.jsx'
import Estudos from '../Estudos/index.jsx'

import { Code } from '@phosphor-icons/react';
import React, { useState } from 'react';



function Card() {
    const [selecionado, setSelecionado] = useState("Sobre");

    const renderConteudo = () => {
        switch (selecionado) {
            case "Sobre":
                return <Sobre />;
            case "Skills":
                return <Skills />;
            case "Projetos":
                return <Projetos />;
            case "Estudos":
                return <Estudos />;
            default:
                return null;
        }
    };

    return (
        <div className={Style.card}>
            <div className={Style.navegacao}>
                <button onClick={() => setSelecionado("Sobre")}>
                    <Code size={28} color="#3A86FF" />
                    Sobre
                </button>
                <button onClick={() => setSelecionado("Skills")}>
                    <Code size={28} color="#3A86FF" />
                    Skills Técnicas
                </button>

                <button onClick={() => setSelecionado("Projetos")}>
                    <Code size={28} color="#3A86FF" />
                    Projetos
                </button>
                <button onClick={() => setSelecionado("Estudos")}>
                    <Code size={28} color="#3A86FF" />
                    Estudos
                </button>
            </div>
            <h2> {selecionado} </h2>
            {renderConteudo()}

        </div>
    );
}


export default Card;
