// Categorias do index.html. Na Parte 1 cada caixa abria a página .html da categoria;
// Entretenimento agora leva à seção da minha página e as outras levam às matérias em destaque.
const categorias = [
  { nome: 'Política', descricao: 'Brasil e mundo', icone: 'bi-globe2', link: '#destaques' },
  { nome: 'Entretenimento', descricao: 'Famosos, TV e cultura', icone: 'bi-camera-reels', link: '#entretenimento' },
  { nome: 'Esportes', descricao: 'Resultados e análises', icone: 'bi-trophy', link: '#destaques' },
  { nome: 'Lifestyle', descricao: 'Moda e bem-estar', icone: 'bi-heart', link: '#destaques' },
  { nome: 'Tecnologia', descricao: 'Inovação e tendências', icone: 'bi-laptop', link: '#destaques' },
]

// Seção de categorias (veio do index.html)
export default function Categorias() {
  return (
    <section id="categorias" className="container-fluid px-4 px-lg-5 secao-categorias">
      <div className="titulo-secao titulo-categorias">
        <h2>Navegue pelo que te interessa</h2>
      </div>

      <div className="grade-categorias">
        {categorias.map((categoria) => (
          <a href={categoria.link} className="caixa-categoria" key={categoria.nome}>
            <i className={`bi ${categoria.icone} icone-categoria`}></i>

            <div>
              <h3>{categoria.nome}</h3>
              <p>{categoria.descricao}</p>
            </div>

            <i className="bi bi-arrow-up-right seta-categoria"></i>
          </a>
        ))}
      </div>
    </section>
  )
}
