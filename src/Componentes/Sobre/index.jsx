import Style from './index.module.css';
import { Desktop, Robot, Graph } from "@phosphor-icons/react";
function Blog() {
    return (

        <section className={Style.card}>
            <div className={Style.container1}>
                <div className={Style.icones}> <Desktop size={32} /> Desenvolvimento Web </div>
                <div className={Style.icones}> <Robot size={32} /> Desenvolvimento de ChatBot</div>
                <div className={Style.icones}> <Graph size={32} /> Automação de processos</div>
            </div>
            <div className={Style.container2}>
                <p className={Style.intro}>
                    Sou formado em <strong>Análise e Desenvolvimento de Sistemas</strong> e atuo como
                    <strong> Analista de Planejamento Pleno</strong>, com foco em análise de dados e no desenvolvimento de soluções que otimizam processos e melhoram a eficiência operacional.
                </p>
                <p className={Style.descricao}>
                    Tenho experiência com <strong>integração de sistemas</strong>, além de atuar na análise de chatbots e inteligência artificial.
                    Atualmente, estou ampliando meus conhecimentos em <strong>C# e Node.js</strong>, consolidando uma base sólida para o desenvolvimento de software e automações.
                    Busco integrar <strong>equipes inovadoras</strong> e participar de projetos desafiadores na área de tecnologia.
                </p>
            </div>
        </section>

    );
}

export default Blog;
