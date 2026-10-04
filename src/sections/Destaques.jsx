import CartaoMateria from '../components/CartaoMateria.jsx'

// Matérias da grade "Em destaque" do index.html.
// A matéria do Resident Evil saiu daqui porque ela também estava na minha página
// e agora aparece só na seção Entretenimento (sem conteúdo duplicado).
const materias = [
  {
    categoria: 'NOTÍCIAS',
    titulo: 'Os principais acontecimentos que movimentam o Brasil',
    resumo: 'Informação, acontecimentos e temas importantes para acompanhar as notícias do dia.',
    tempo: 'Atualizado hoje',
    imagem: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1000&q=85',
    alt: 'Evento e pessoas acompanhando uma apresentação',
  },
  {
    categoria: 'ESPORTES',
    titulo: 'Mesmo com a derrota, Diniz permanece no Corinthians',
    tempo: 'Há 5 horas',
    imagem: '/img/diniz.png',
    alt: 'Técnico Fernando Diniz com o agasalho do Corinthians',
  },
  {
    categoria: 'POLÍTICA',
    titulo: 'Governo discute novas medidas para o ambiente digital',
    tempo: 'Há 6 horas',
    imagem: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=600&q=85',
    alt: 'Prédio do Congresso Nacional',
  },
  {
    categoria: 'TECNOLOGIA',
    titulo: 'Inteligência artificial e inovação ganham espaço no mercado',
    tempo: 'Há 8 horas',
    imagem: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=85',
    alt: 'Placa eletrônica e tecnologia',
  },
  {
    categoria: 'CULTURA',
    titulo: 'Eventos culturais e atrações para aproveitar o fim de semana',
    tempo: 'Há 9 horas',
    imagem: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=600&q=85',
    alt: 'Evento cultural',
  },
]

// Seção "Em destaque" (veio do index.html)
export default function Destaques() {
  return (
    <section id="destaques" className="container-fluid px-4 px-lg-5 secao-destaques">
      <div className="titulo-secao">
        <span className="etiqueta-secao">BABADO NEWS</span>
        <h2>Em destaque</h2>
        <p>Confira assuntos que estão movimentando o Brasil e o mundo.</p>
      </div>

      <div className="grade-destaques grade-index">
        {materias.map((materia, indice) => (
          <CartaoMateria key={materia.titulo} materia={materia} principal={indice === 0} />
        ))}
      </div>
    </section>
  )
}
