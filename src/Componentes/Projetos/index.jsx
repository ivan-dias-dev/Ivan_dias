
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
                            Apresentação das stacks que eu já conhecia e estava explorando na época,
                            como parte do meu processo de aprendizado contínuo no desenvolvimento web.
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
                        JNE Pescados
                    </h3>
                    <div className={Style.bodyCard}>
                        <p>
                            Landing Page Institucional simples criada para uma holding de pescados que atua na região sul do Brasil, com foco em apresentar suas principais marcas,
                            valores e diferenciais no setor alimentício, oferecendo uma experiência visual clara e profissional para seus parceiros e clientes.
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
                            Pacote de landing pages criado para campanhas de Business Manager no Facebook, com foco em captação de leads para o setor financeiro. As páginas foram desenvolvidas com foco em desempenho e compatibilidade com o Facebook Ads, sem necessidade de responsividade, já que eram voltadas principalmente para visualização em desktop.
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
