import Style from './index.module.css'

function Header() {
    // const [count, setCount] = useState(0)
    return (
        <>
            <div className={Style.card}>
                <p className={Style.texto}>
                    Olá meu nome é
                    <h1 className={Style.name}>
                        Ivan Dias.
                    </h1>
                </p>
                <h2> Bem-vindo ao meu espaço!</h2>
            </div>
            <div>
                v
            </div>
        </>
    )
}

export default Header
