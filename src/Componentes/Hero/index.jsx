import Style from './index.module.css'
import { LinkedinLogo, GithubLogo, ArrowFatLineDown } from '@phosphor-icons/react';

function Header() {
    // const [count, setCount] = useState(0)
    return (
        <>
            <div className={Style.card}>
                <div className={Style.container}>
                    <p className={Style.texto}>
                        Olá meu nome é
                        <h1 className={Style.name}>
                            Ivan Dias.
                        </h1>
                    </p>
                    <h2> Bem-vindo ao meu espaço!</h2>
                    <div className={Style.botes}>
                        <ul>
                            <button>Contate-me</button>
                            <button className={Style.cv}>CV</button>
                        </ul>
                    </div>
                    <div className={Style.redes}>
                        <a target="_blank" href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"><LinkedinLogo size={32} /></a>
                        <a target="_blank" href="https://github.com/ivan-dias-dev"><GithubLogo size={32} /></a>
                    </div>

                </div>
                <div className={Style.imagemPai}>
                    <div className={Style.imagem}>
                        <img src="/imagens/my-photo.png" alt="" />
                    </div>
                </div>
            </div>
            <div className={Style.down}>
                <ArrowFatLineDown size={32} className={Style.icones} />
            </div>
        </>
    )
}

export default Header
