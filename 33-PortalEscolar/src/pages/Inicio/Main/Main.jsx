import style from './Main.module.css';

export default function Main() {
    return (
        <>
            <main className={style.container}>
                <div className={style.conteudo}>
                    <h1 className={style.container__nome}>Helcy Moreira Martins Aguiar</h1>
                    <p className={style.container__sobre}>
                        Com mais de 20 anos de atuação, a unidade da Etec Professora Helcy Moreira Martins
                        Aguiar se destaca no ensino médio e técnico, recebendo constantemente menções e
                        congratulações em todo o estado de São Paulo.
                    </p>
                </div>
            </main>

            <section className={style.secao1}>
                <div className={style.conteudo__sobre1}>
                    <p>
                        Mantida pelo governo do Estado de São Paulo, os
                        cursos oferecidos – além de qualidade ímpar – são
                        totalmente gratuitos, levando para toda a população
                        um ensino de qualidade e a oportunidade de
                        aprender uma profissão.
                    </p>
                </div>
                <div className={style.conteudo__sobre2}>
                    <p>
                        Contando com um corpo docente extremamente
                        qualificado e estrutura física moderna, os cursos
                        oferecidos nesta unidade se destacam pela
                        qualidade de ensino, onde o aluno realmente
                        aprende conteúdos relevantes, de maneira fácil e didática.
                    </p>
                </div>
                <div className={style.conteudo__sobre3}>
                    <p>
                        Baseado em uma didática prática, os alunos são
                        envolvidos em conteúdos que abordam as diversas
                        realidades do mercado, formando assim mão de
                        obra qualificada e proporcionando uma experiência
                        diferenciada para o aluno.
                    </p>
                </div>
            </section>

            <section className={style.cursos__container}>
                <h2>Cursos técnicos</h2>
                <div className={style.cursos}>
                    <div className={style.cursos__organizador1}>
                        <div>
                            <img src="/imagens/vacina.svg" alt="Enfermagem" />
                            <p>ENFERMAGEM</p>
                        </div>
                        <div>
                            <img src="/imagens/computador.svg" alt="Desenvolvimento de Sistemas" />
                            <p>DESENVOLVIMENTO DE SISTEMAS</p>
                        </div>
                        <div>
                            <img src="/imagens/processo.svg" alt="Recursos Humanos" />
                            <p>RECURSOS HUMANOS</p>
                        </div>
                        <div>
                            <img src="/imagens/despesas.svg" alt="Administração" />
                            <p>ADMINISTRAÇÃO</p>
                        </div>
                    </div>

                    <div className={style.cursos__organizador1}>
                        <div>
                            <img src="/imagens/cana-de-acucar.svg" alt="Açucar e álcool" />
                            <p>AÇÚCAR E ÁLCOOL</p>
                        </div>
                        <div>
                            <img src="/imagens/agricultura.svg" alt="Agropecuária" />
                            <p>AGROPECUÁRIA</p>
                        </div>
                        <div>
                            <img src="/imagens/vaca.svg" alt="Zootecnia" />
                            <p>ZOOTECNIA</p>
                        </div>
                        <div>
                            <img src="/imagens/financeiro.svg" alt="Agronegócio" />
                            <p>AGRONEGÓCIO</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={style.container__estagios}>
                <div className={style.container__estagios__titulo}>
                    <h1>Estágios e empregos</h1>
                </div>
                <div className={style.container__estagios__trampo}>
                    <div className={style.container__estagios__trampo__conteudo}>
                        <p className={style.container__estagios__trampo__conteudo__titulo}>Lorem ipsum dolor sit amet</p>
                        <p className={style.container__estagios__trampo__conteudo__data}>Publicado em 00/00/2000</p>
                        <p className={style.container__estagios__trampo__conteudo__mais}>Mais mais sobre a vaga</p>
                    </div>

                    <div className={style.container__estagios__trampo__conteudo}>
                        <p className={style.container__estagios__trampo__conteudo__titulo}>Lorem ipsum dolor sit amet</p>
                        <p className={style.container__estagios__trampo__conteudo__data}>Publicado em 00/00/2000</p>
                        <p className={style.container__estagios__trampo__conteudo__mais}>Mais mais sobre a vaga</p>
                    </div>

                    <div className={style.container__estagios__trampo__conteudo}>
                        <p className={style.container__estagios__trampo__conteudo__titulo}>Lorem ipsum dolor sit amet</p>
                        <p className={style.container__estagios__trampo__conteudo__data}>Publicado em 00/00/2000</p>
                        <p className={style.container__estagios__trampo__conteudo__mais}>Mais mais sobre a vaga</p>
                    </div>
                </div>
            </section>

            <section className={style.container__noticias}>
                <h2>Notícias</h2>
                <div className={style.container__noticias__card}>
                    <div className={style.container__noticias__card__itens}>
                        <img src="/imagens/Rogue.jpg" alt="imagem da noticia" />
                        <p className={style.container__noticias__card__itens__descricao}>
                            Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit.
                        </p>
                        <p className={style.container__noticias__card__itens__data}>Postado em 00/00/00</p>
                    </div>
                    <div className={style.container__noticias__card__itens}>
                        <img src="/imagens/Rogue.jpg" alt="imagem da noticia" />
                        <p className={style.container__noticias__card__itens__descricao}>
                            Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit.
                        </p>
                        <p className={style.container__noticias__card__itens__data}>Postado em 00/00/00</p>
                    </div>
                    <div className={style.container__noticias__card__itens}>
                        <img src="/imagens/Rogue.jpg" alt="imagem da noticia" />
                        <p className={style.container__noticias__card__itens__descricao}>
                            Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit.
                        </p>
                        <p className={style.container__noticias__card__itens__data}>Postado em 00/00/00</p>
                    </div>
                </div>
                <span className={style.botao__ver__mais}>
                    <button>Ver mais notícias</button>
                </span>
            </section>
        </>
    )
}