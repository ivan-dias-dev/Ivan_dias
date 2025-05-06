
import Style from './index.module.css'
import { WhatsappLogo, DeviceMobile, MapPin } from '@phosphor-icons/react';



function Contato() {
    var texto = "Em desenvolvimento...";
    return (

        <section className={Style.conteiner}>
            <div className={Style.cabecalho}>
                <h2>
                    Contate-me
                </h2>
            </div>

            <div className={Style.contatosBody}>

                <div className={Style.dados}>
                    <ul>
                        <li>
                            <MapPin size={24} color="#3A86FF" /> Curitiba-pr
                        </li>
                        <li>
                            <WhatsappLogo size={24} color="#3A86FF" /> 41 98420 4961
                        </li>
                        <li>
                            <DeviceMobile size={24} color="#3A86FF" /> contatoivandev@gmail.com
                        </li>
                    </ul>
                </div>
                <div className={Style.formulario}>
                    <input type="text" name="" id="" placeholder='Seu Nome' />
                    <input type="text" name="" id="" placeholder='Seu Email' />
                    <textarea type="text-area" name="" id="" placeholder='Escreve sua mensagem aqui...' value={texto}/>
                    <button className={Style.botao}>
                        Enviar Mensagem
                    </button>
                </div>
            </div>
        </section >

    );
}


export default Contato;
