
import Style from './index.module.css'



function Projetos() {
    return (
        <>
            <section className={Style.projetos}>
                <div className={Style.projeto} >
                    <img src="../../../public/imagens/frontMentor.png" alt="link do projeto" />
                    <h3>
                        Front End Mentor
                    </h3>
                    <p>
                        Projeto de desafio de front-end,
                        onde o objetivo é recriar o layout de um site utilizando HTML e CSS.
                        O projeto foi desenvolvido com foco em responsividade e acessibilidade,
                        garantindo que o site funcione perfeitamente em diferentes dispositivos
                        e atenda às diretrizes de acessibilidade.
                    </p>
                    <button>
                        <a target="_blank" href="https://ivan-dias-dev.github.io/notifications-page-main/">
                            Ver Projeto
                        </a>
                    </button>
                </div>
                <div className={Style.projeto} >
                    <img src="../../../public/imagens/frontMentor.png" alt="link do projeto" />
                    <h3>
                        Front End Mentor
                    </h3>
                    <p>
                        Projeto de desafio de front-end,
                        onde o objetivo é recriar o layout de um site utilizando HTML e CSS.
                        O projeto foi desenvolvido com foco em responsividade e acessibilidade,
                        garantindo que o site funcione perfeitamente em diferentes dispositivos
                        e atenda às diretrizes de acessibilidade.
                    </p>
                    <button>
                        <a target="_blank" href="https://ivan-dias-dev.github.io/notifications-page-main/">
                            Ver Projeto
                        </a>
                    </button>
                </div>
            </section>
        </>
    );
}

export default Projetos;
