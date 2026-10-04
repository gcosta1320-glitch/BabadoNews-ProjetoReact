import CartaoNoticia from '../components/CartaoNoticia.jsx'
import CartaoMateria from '../components/CartaoMateria.jsx'

// Conteúdo da minha página da Parte 1 (entretenimento.html)

// Notícia principal: era o H1 da página e agora é H3 dentro da seção
const destaque = {
  categoria: 'MÚSICA & CARNAVAL',
  titulo: 'Anitta anuncia o "maior ensaio de Carnaval de todos os tempos" no Rio',
  texto: 'Com direito a edição especial no Parque Olímpico com mais de 12 horas de duração, os "Ensaios da Anitta" chegam ao ápice com o tema místico "Cosmos" e convidados especiais.',
  imagem: '/img/ensaioanitta2.webp',
  alt: 'Cartaz dos Ensaios da Anitta com a cantora e dançarinas fantasiadas',
}

const ultimasNoticias = [
  {
    categoria: 'MÚSICA',
    titulo: 'Ensaios da Anitta: Pré-venda de ingressos abre esta semana',
    descricao: 'A maratona do projeto pré-carnavalesco promete passar por mais de 10 capitais no início do ano.',
    tempo: 'Há 1 hora',
    imagem: '/img/ensaioanitta.jpg',
    alt: 'Anitta nos Ensaios da Anitta',
  },
  {
    categoria: 'FESTIVAIS',
    titulo: 'Rock in Rio anuncia novas atrações internacionais',
    descricao: 'Organização do evento confirma nomes de peso para o Palco Mundo e Sunset no festival.',
    tempo: 'Há 3 horas',
    imagem: '/img/rockinrio.webp',
    alt: 'Palco do Rock in Rio iluminado',
  },
  {
    categoria: 'CINEMA',
    titulo: 'Estreias da semana: Ação, suspense e produções nacionais',
    descricao: 'Confira os principais títulos que acabam de chegar às telonas de todo o Brasil.',
    tempo: 'Há 5 horas',
    imagem: '/img/coracaoselvagem.webp',
    alt: 'Cartaz do filme Coração Selvagem',
  },
]

const materias = [
  {
    categoria: 'SHOWS & FESTIVAIS',
    titulo: 'Rock in Rio: Saiba como garantir os seus ingressos',
    resumo: 'Com um line-up diversificado recheado de atrações do pop, rock e K-pop, o festival se prepara para mais uma edição histórica na Cidade do Rock. Veja dicas de transporte e horários das vendas.',
    tempo: 'Atualizado hoje às 15h20',
    imagem: '/img/rockinrio.webp',
    alt: 'Multidão no Rock in Rio',
  },
  {
    categoria: 'CINEMA',
    titulo: 'Grandes lançamentos chegam aos cinemas neste mês',
    resumo: 'Do suspense psicológico às maiores franquias de ação, as bilheterias brasileiras prometem se aquecer com novidades muito aguardadas pelos cinéfilos.',
    tempo: 'Há 4 horas',
    imagem: '/img/aqueda2.webp',
    alt: 'Cartaz do filme A Queda 2: No Limite',
  },
  {
    categoria: 'STREAMING',
    titulo: 'Novas temporadas de séries premiadas chegam às plataformas',
    resumo: 'Confira o calendário completo das maratonas imperdíveis que chegam à Netflix, Max e Prime Video nas próximas semanas.',
    tempo: 'Há 6 horas',
    imagem: '/img/magnatasdocrime.webp',
    alt: 'Elenco da série Magnatas do Crime',
  },
  {
    categoria: 'CINEMA',
    titulo: '"Resident Evil" quebra recorde da franquia com US$ 60 milhões em bilheteria',
    resumo: 'Confira mais sobre esse recorde e essa franquia tão amada pelos fãs.',
    tempo: 'Há 9 horas',
    imagem: '/img/resident-evil.webp',
    alt: 'Cartaz do filme Resident Evil',
  },
]

// Seção Entretenimento: a minha página virou uma seção da Landing Page
export default function Entretenimento() {
  return (
    <section id="entretenimento" className="secao-entretenimento">
      <div className="container-fluid px-4 px-lg-5 secao-destaques">
        {/* Antes o título era "Em destaque", igual ao do index; virou "Entretenimento" */}
        <div className="titulo-secao">
          <span className="etiqueta-secao">ENTRETENIMENTO & CULTURA POP</span>
          <h2>Entretenimento</h2>
          <p>Fique por dentro das novidades da música, grandes produções do cinema e séries de streaming.</p>
        </div>

        <div className="row g-4 mb-4">
          <div className="col-lg-8">
            <article className="noticia-destaque">
              <img className="imagem-destaque" src={destaque.imagem} alt={destaque.alt} />

              <div className="sobreposicao-destaque"></div>

              <div className="conteudo-destaque">
                <span className="etiqueta-noticia">{destaque.categoria}</span>

                <h3>{destaque.titulo}</h3>

                <p>{destaque.texto}</p>

                {/* As matérias completas não foram migradas: o botão leva à ação principal da Landing */}
                <a href="#newsletter" className="botao-materia">
                  Receba as novidades
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </article>
          </div>

          <div className="col-lg-4">
            <aside className="noticias-laterais">
              <h3 className="titulo-lateral">Últimas de entretenimento</h3>

              {ultimasNoticias.map((noticia) => (
                <CartaoNoticia key={noticia.titulo} noticia={noticia} />
              ))}
            </aside>
          </div>
        </div>

        <div className="grade-destaques grade-entretenimento">
          {materias.map((materia, indice) => (
            <CartaoMateria key={materia.titulo} materia={materia} principal={indice === 0} />
          ))}
        </div>
      </div>
    </section>
  )
}
