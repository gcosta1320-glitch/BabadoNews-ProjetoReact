import { Link } from 'react-router-dom'
import { itensMenu } from '../data/menu.js'

const redesSociais = [
  { nome: 'Instagram', icone: 'bi-instagram' },
  { nome: 'Facebook', icone: 'bi-facebook' },
  { nome: 'YouTube', icone: 'bi-youtube' },
]

// Rodapé único: o index.html e o entretenimento.html tinham o mesmo rodapé,
// que agora aparece uma só vez, no fim da página
export default function Footer() {
  return (
    <footer className="rodape-site">
      <div className="container-fluid px-4 px-lg-5">
        <div className="conteudo-rodape">
          <div className="marca-rodape">
            <Link to="/" className="logo-rodape">
              BABADO <span>NEWS.</span>
            </Link>
            <p>Informação que te acompanha. Sempre.</p>
          </div>

          {/* Mesmos links do menu, vindos do mesmo array */}
          <div className="links-rodape">
            {itensMenu.map((item) => (
              <a href={item.link} key={item.link}>
                {item.texto}
              </a>
            ))}
          </div>

          <div className="redes-sociais">
            {redesSociais.map((rede) => (
              <a href="#" aria-label={rede.nome} key={rede.nome}>
                <i className={`bi ${rede.icone}`}></i>
              </a>
            ))}
          </div>
        </div>

        <div className="direitos-autorais">
          © 2026 Babado News. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}
