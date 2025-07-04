import Style from './index.module.css'
import { LinkedinLogo, GithubLogo, ArrowFatLineDown } from '@phosphor-icons/react';
import DownloadPDFButton from './DownloadExistingPDF.jsx';

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
                            <a href="https://api.whatsapp.com/send/?phone=41984204961&text&type=phone_number&app_absent=0" target="_blank" >
                                <button>Contate-me</button>
                            </a>
                            <DownloadPDFButton />
                        </ul>
                    </div>
                    <div className={Style.redes}>
                        <a target="_blank" href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"><LinkedinLogo size={32} /></a>
                        <a target="_blank" href="https://github.com/ivan-dias-dev"><GithubLogo size={32} /></a>
                    </div>

                </div>
                <div className={Style.imagemPai}>
                    <div className={Style.imagem}>
                        <img src="https://media.licdn.com/dms/image/v2/D4D03AQECjjOK_mg7_Q/profile-displayphoto-shrink_800_800/B4DZQXwvstG0Ak-/0/1735565443236?e=1752105600&v=beta&t=5TbaiyW8dMle6N4oqM5Ea6G5sukym152k_E0EeK_lg8" alt="" />
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
