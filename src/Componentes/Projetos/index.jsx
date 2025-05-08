
import Style from './index.module.css'



function Projetos() {
    return (
        <>
            <section className={Style.projetos}>
                <div className={Style.projeto} >
                    <img src="/imagens/frontMentor.png" alt="link do projeto" />
                    <h3>
                        Front End Mentor
                    </h3>
                    <div className={Style.bodyCard}>
                        <p>
                            Projeto de desafio de front-end,
                            onde o objetivo é recriar o layout de um site utilizando HTML e CSS.
                            O projeto foi desenvolvido com foco em responsividade e acessibilidade,
                            garantindo que o site funcione perfeitamente em diferentes dispositivos
                            e atenda às diretrizes de acessibilidade.
                        </p>
                    </div>
                    <button>
                        <a target="_blank" href="https://ivan-dias-dev.github.io/notifications-page-main/">
                            Ver Projeto
                        </a>
                    </button>
                </div>
                <div className={Style.projeto} >
                    <img src="/imagens/portifolioAntigo.png" alt="link do projeto" />
                    <h3>
                        Portifólio antigo
                    </h3>
                    <div className={Style.bodyCard}>
                        <p>
                            Portifólio antigo, em que eu mostrava staks que eu conhecia de aprendia no momento...
                        </p>
                    </div>
                    <div className={Style.botao}>
                        <button>
                            <a target="_blank" href="https://ivan-dias-dev.github.io/Ivan_Dias_dev  ">
                                Ver Projeto
                            </a>
                        </button>
                    </div>
                </div>
                <div className={Style.projeto} >
                    <img src="/imagens/JNE.png" alt="link do projeto" />
                    <h3>
                        Portifólio antigo
                    </h3>
                    <div className={Style.bodyCard}>
                        <p>
                            Portifólio antigo, em que eu mostrava staks que eu conhecia de aprendia no momento...
                        </p>
                    </div>
                    <div className={Style.botao}>
                        <button>
                            <a target="_blank" href="https://jne-eight.vercel.app/">
                                Ver Projeto
                            </a>
                        </button>
                    </div>
                </div>
                <div className={Style.projeto} >
                    <img src="/imagens/FBP.png" alt="link do projeto" />
                    <h3>
                        FBP Investimentos
                    </h3>
                    <div className={Style.bodyCard}>
                        <p>
                            Portifólio antigo, em que eu mostrava staks que eu conhecia de aprendia no momento...
                        </p>
                    </div>
                    <div className={Style.botao}>
                        <button>
                            <a target="_blank" href="https://fbpinvestimentos.com.br/">
                                Ver Projeto
                            </a>
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Projetos;
