import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { itensMenu } from '../data/menu.js'

// Menu único (fusão do menu do index.html com o do entretenimento.html).
// "sticky-top" do Bootstrap deixa o menu fixo no topo durante a rolagem.
export default function Navbar() {
  // No celular o menu começa fechado; o botão de três linhas abre e fecha
  const [menuAberto, setMenuAberto] = useState(false)

  return (
    <nav className="navbar navbar-expand-lg menu-site sticky-top">
      <div className="container-fluid px-4 px-lg-5">
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="menuPrincipal"
          aria-expanded={menuAberto}
          aria-label="Abrir menu"
          onClick={() => setMenuAberto(!menuAberto)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse menu-conteudo ${menuAberto ? 'show' : ''}`}
          id="menuPrincipal"
        >
          <ul className="navbar-nav menu-links">
            {itensMenu.map((item) => (
              <li className="nav-item" key={item.texto}>
                {/* Ao escolher um item, o menu do celular fecha */}
                {item.rota ? (
                  // NavLink sabe quando a rota está aberta e marca o item como "ativo"
                  <NavLink
                    to={item.rota}
                    className={({ isActive }) => (isActive ? 'nav-link ativo' : 'nav-link')}
                    onClick={() => setMenuAberto(false)}
                  >
                    {item.texto}
                  </NavLink>
                ) : (
                  <a href={item.link} className="nav-link" onClick={() => setMenuAberto(false)}>
                    {item.texto}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
