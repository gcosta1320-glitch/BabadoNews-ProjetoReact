import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

// Mesma função do script.js da Parte 1: "Rio de Janeiro, 4 de outubro de 2026"
function formatarData() {
  const dataFormatada = new Date().toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return 'Rio de Janeiro, ' + dataFormatada
}

// Cabeçalho único (veio do index.html e do entretenimento.html, que tinham o mesmo cabeçalho)
export default function Header() {
  const [data, setData] = useState(formatarData)

  // Atualiza a data a cada minuto e limpa o intervalo quando o componente sai da tela
  useEffect(() => {
    const intervalo = setInterval(() => setData(formatarData()), 60000)
    return () => clearInterval(intervalo)
  }, [])

  return (
    <header className="cabecalho-site">
      <div className="barra-superior">
        <div className="data-site">
          <span>{data}</span>
        </div>

        <div className="links-superiores">
          <a href="/#newsletter">Assine</a>
        </div>
      </div>

      <div className="cabecalho-conteudo">
        <div className="cabecalho-manifesto">
          <span className="linha-destaque"></span>
          <span>NOTÍCIAS</span>
          <span>CULTURA</span>
          <span>ENTRETENIMENTO</span>
          <span>E MUITO MAIS</span>
        </div>

        <Link to="/" className="logo-site">
          <img src="/img/logo.png" alt="Logo Babado News" />
          <p className="slogan-site">TUDO O QUE IMPORTA, EM UM SÓ LUGAR.</p>
        </Link>

        <div className="cabecalho-descricao">
          <p>Informação que te acompanha.</p>
          <strong>Todos os dias.</strong>
          <span className="linha-destaque"></span>
        </div>
      </div>
    </header>
  )
}
