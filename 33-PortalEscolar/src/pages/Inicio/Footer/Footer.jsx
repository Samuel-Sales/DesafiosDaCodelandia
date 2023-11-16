import style from './Footer.module.css';

export default function Footer() {
    return (
        <>
            <footer className={style.container}>
                <img src="/imagens/logoFooter.svg" alt="Logo Footer" />
                <div className={style.container__sub}>
                    <div className={style.container__informacoes}>
                        <img src="/imagens/Globo.svg" alt="Imagem do mundo" />
                        <div>
                            <p className={style.container__informacoes__endereco}>Rua Codelândia, 1367</p>
                            <p className={style.container__informacoes__cidade}>Cafelândia, SP</p>
                        </div>
                    </div>
                    <div className={style.container__informacoes}>
                        <img src="/imagens/Phone.svg" alt="Imagem do telefone" />
                        <p className={style.container__informacoes__telefone}>+55 14 9999-9999</p>
                    </div>
                    <div className={style.container__informacoes}>
                        <img src="/imagens/email.svg" alt="Imagem do email" />
                        <p className={style.container__informacoes__email}>centropaulasouza@etec.sp.gov.br</p>
                    </div>
                </div>

                <div className={style.sobre}>
                    <p className={style.sobre__titulo}>Sobre a Etec Cafelândia</p>
                    <p className={style.sobre__texto}>
                        Com mais de 20 anos de atuação, a unidade da Etec <br /> 
                        Professora Helcy Moreira Martins Aguiar se destaca <br /> 
                        no ensino médio e técnico,recebendo <br /> 
                        constantemente menções e congratulações em todo <br /> 
                        o estado de São Paulo.
                    </p>
                    <div className={style.sobre__icones}>
                        <img src="/imagens/Instagram.svg" alt="Logo do instagram" />
                        <img src="/imagens/Facebook.svg" alt="Logo do facebook" />
                        <img src="/imagens/Linkedin.svg" alt="Logo do linkedin" />
                    </div>
                </div>
            </footer>
            <p className={style.direitos__reservados}>Etec Professora Helcy Moreira Martins Aguiar - 2022 © Todos os direitos reservados.</p>
        </>
    )
}