// Card horizontal com imagem pequena, usado nas listas de "Últimas notícias"
// (no Hero, vindo do index, e na seção Entretenimento, vindo da minha página)
export default function CartaoNoticia({ noticia }) {
  return (
    <article className="cartao-noticia">
      <img src={noticia.imagem} alt={noticia.alt} />

      <div className="texto-cartao">
        <span className="categoria-noticia">{noticia.categoria}</span>
        <h3>{noticia.titulo}</h3>

        {/* Só as notícias de entretenimento tinham uma descrição curta */}
        {noticia.descricao && <p>{noticia.descricao}</p>}

        <small>
          <i className="bi bi-clock me-1"></i>
          {noticia.tempo}
        </small>
      </div>
    </article>
  )
}
