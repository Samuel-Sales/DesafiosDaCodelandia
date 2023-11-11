import { Link } from 'react-router-dom';
import style from './Header.module.css';

export default function Header() {
    return (
        <header className={style.container}>
            <img src="/imagens/logo.svg" alt="Logo da pagina" />
            <nav className={style.container__navegacao}>
                <a href="">Início</a>
                <a href="">Cursos</a>
                <a href="">Vagas</a>
                <a href="">Notícias</a>
                <a href="">Contato</a>
            </nav>
            <div className={style.container__redes__sociais}>
                <a href="">
                    <img src="/imagens/Instagram.svg" alt="Instagram" />
                </a>
                <a href="">
                    <img src="/imagens/Facebook.svg" alt="Facebook" /> 
                </a>
                <a href="">
                    <img src="/imagens/Linkedin.svg" alt="Linkedin" />
                </a>
            </div>
        </header>
    )
}