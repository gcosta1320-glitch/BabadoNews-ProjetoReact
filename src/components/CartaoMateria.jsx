// Card da grade de matérias. A primeira matéria da grade é a "principal" (maior);
// as outras são "secundárias".
export default function CartaoMateria({ materia, principal }) {
  return (
    <article className={principal ? 'materia-principal' : 'materia-secundaria'}>
      <img src={materia.imagem} alt={materia.alt} />

      <div className="conteudo-materia">
        <span className="categoria-noticia">{materia.categoria}</span>
        <h3>{materia.titulo}</h3>

        {materia.resumo && <p>{materia.resumo}</p>}

        <small>
          <i className="bi bi-clock me-1"></i>
          {materia.tempo}
        </small>
      </div>
    </article>
  )
}
