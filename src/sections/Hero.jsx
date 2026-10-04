import { useEffect, useState } from 'react'
import CartaoNoticia from '../components/CartaoNoticia.jsx'

// Slides do carrossel: o primeiro é o texto que estava fixo no index.html,
// os outros quatro vieram do array "noticias" do script.js da Parte 1.
// Os links que iam para outros arquivos .html agora levam às seções da Landing Page.
const slides = [
  {
    categoria: 'ENTRETENIMENTO',
    imagem: '/img/party.jpg',
    alt: 'Público acompanhando um evento musical',
    titulo: 'Música e entretenimento movimentam a agenda cultural brasileira',
    texto: 'Shows, eventos e novidades do mundo dos famosos estão entre os assuntos que chamam a atenção do público.',
    link: '#entretenimento',
  },
  {
    categoria: 'ENTRETENIMENTO',
    imagem: '/img/anitta.jpg',
    alt: 'Anitta cantando em um palco decorado com flores',
    titulo: 'Anitta agita ensaio no Rio e anuncia novidades para 2027',
    texto: 'Cantora levou o público ao delírio e confirmou novidades especiais para o próximo ano.',
    link: '#entretenimento',
  },
  {
    categoria: 'ESPORTES',
    imagem: '/img/tecnico.avif',
    alt: 'Técnico da seleção brasileira',
    titulo: 'Confira os convocados para amistoso da seleção brasileira.',
    texto: 'Novos jogadores com oportunidade de observação.',
    link: '#destaques',
  },
  {
    categoria: 'TECNOLOGIA',
    imagem: '/img/ai.jpg',
    alt: 'Mão segurando um chip de inteligência artificial',
    titulo: 'Tecnologia e inovação ganham destaque em 2026',
    texto: 'Descubra as novidades tecnológicas que estão transformando o nosso dia a dia.',
    link: '#destaques',
  },
  {
    categoria: 'CULTURA',
    imagem: '/img/party.jpg',
    alt: 'Público em um evento cultural',
    titulo: 'Cultura e entretenimento movimentam o fim de semana',
    texto: 'Eventos, música e novidades culturais para você acompanhar nessa semana.',
    link: '#categorias',
  },
]

const ultimasNoticias = [
  {
    categoria: 'ENTRETENIMENTO',
    titulo: 'Shows no Brasil em 2027: confira as novidades',
    tempo: 'Há 2 horas',
    imagem: '/img/show.jpg',
    alt: 'Palco de show',
  },
  {
    categoria: 'ESPORTES',
    titulo: 'Futebol brasileiro se prepara para novos confrontos',
    tempo: 'Há 4 horas',
    imagem: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=400&q=80',
    alt: 'Bola de futebol',
  },
  {
    categoria: 'TECNOLOGIA',
    titulo: 'Novas tecnologias prometem transformar o cotidiano',
    tempo: 'Há 6 horas',
    imagem: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&q=80',
    alt: 'Computador e tecnologia',
  },
]

// Hero: primeira seção da Landing Page (veio do index.html).
// Tem o único H1 da página.
export default function Hero() {
  const [slideAtual, setSlideAtual] = useState(0)

  // A cada troca de slide (automática ou pelo clique nos indicadores),
  // agenda a próxima troca para daqui a 6 segundos
  useEffect(() => {
    const temporizador = setTimeout(() => {
      setSlideAtual((slideAtual + 1) % slides.length)
    }, 6000)

    return () => clearTimeout(temporizador)
  }, [slideAtual])

  const slide = slides[slideAtual]

  return (
    <section id="inicio" className="container-fluid px-4 px-lg-5 secao-destaque">
      <div className="row g-4">
        <div className="col-lg-8">
          <article className="noticia-destaque">
            <img className="imagem-destaque" src={slide.imagem} alt={slide.alt} />

            <div className="sobreposicao-destaque"></div>

            <div className="conteudo-destaque">
              <span className="etiqueta-noticia">{slide.categoria}</span>

              <h1>{slide.titulo}</h1>

              <p>{slide.texto}</p>

              {/* Novo na Landing: segundo botão levando à ação principal (newsletter) */}
              <div className="botoes-destaque">
                <a href={slide.link} className="botao-materia">
                  Ler matéria
                  <i className="bi bi-arrow-right"></i>
                </a>

                <a href="#newsletter" className="botao-materia botao-secundario">
                  <i className="bi bi-envelope"></i>
                  Assine a newsletter
                </a>
              </div>
            </div>

            <div className="indicadores-destaque">
              {slides.map((item, indice) => (
                <button
                  key={item.titulo}
                  type="button"
                  className={indice === slideAtual ? 'selecionado' : ''}
                  aria-label={`Mostrar notícia ${indice + 1}`}
                  onClick={() => setSlideAtual(indice)}
                ></button>
              ))}
            </div>
          </article>
        </div>

        <div className="col-lg-4">
          <aside className="noticias-laterais">
            <div className="titulo-secao">
              <h2>Últimas notícias</h2>

              <a href="#destaques">
                Ver todas
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>

            {ultimasNoticias.map((noticia) => (
              <CartaoNoticia key={noticia.titulo} noticia={noticia} />
            ))}
          </aside>
        </div>
      </div>
    </section>
  )
}
