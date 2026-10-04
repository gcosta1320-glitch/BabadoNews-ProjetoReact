import { useEffect } from 'react'
import Newsletter from '../sections/Newsletter.jsx'

// Pilares da marca (eram três blocos copiados no sobre.html; agora vêm de um array)
const pilares = [
  {
    titulo: 'Agilidade',
    icone: 'bi-lightning-charge',
    texto: 'Acompanhamos os fatos em tempo real para que você seja o primeiro a saber das novidades da pop culture e do mundo.',
  },
  {
    titulo: 'Credibilidade',
    icone: 'bi-check-circle',
    texto: 'Apuração precisa e compromisso com a verdade em todas as editorias, de notícias urgentes até a cobertura de shows.',
  },
  {
    titulo: 'Paixão pela Cultura',
    icone: 'bi-heart',
    texto: 'Valorizamos a música, a arte e os eventos que definem a identidade e o entretenimento no Brasil.',
  },
]

// Rota /sobre: página extra que eu fiz na Parte 1 (sobre.html), migrada como diferencial
export default function SobrePage() {
  // Ao abrir a página, começa do topo e mostra o título certo na aba do navegador
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
    document.title = 'Babado News | Sobre Nós'

    return () => {
      document.title = 'Babado News | Início'
    }
  }, [])

  return (
    <>
      <section className="container px-4 px-lg-5 py-5">
        <div className="row align-items-center g-5 mb-5">
          <div className="col-lg-6">
            <span className="etiqueta-secao">CONHEÇA O BABADO NEWS</span>

            {/* Nesta rota o único H1 é o título da página Sobre */}
            <h1 className="display-5 fw-bold mb-3">Conectando você às melhores histórias e tendências.</h1>

            <p className="lead text-muted">
              Nascemos com a missão de descomplicar a informação e trazer os principais acontecimentos do Brasil e
              do mundo com rapidez, dinamismo e responsabilidade.
            </p>

            <p>
              Do bastidor dos grandes festivais de música como o Rock in Rio às discussões mais relevantes sobre
              cultura digital, política e tecnologia, nosso time de redatores trabalha diariamente para entregar
              conteúdos relevantes, acessíveis e envolventes.
            </p>
          </div>

          <div className="col-lg-6">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
              alt="Equipe Babado News em reunião"
              className="img-fluid rounded-4 shadow"
            />
          </div>
        </div>

        <div className="row g-4 my-5 text-center">
          {pilares.map((pilar) => (
            <div className="col-md-4" key={pilar.titulo}>
              <div className="p-4 border rounded-3 bg-white h-100">
                {/* Na Parte 1 os ícones eram vermelhos (text-danger); agora usam o azul do site */}
                <i className={`bi ${pilar.icone} fs-1 mb-3 d-block icone-pilar`}></i>
                <h2 className="h4">{pilar.titulo}</h2>
                <p className="text-muted">{pilar.texto}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* O sobre.html também terminava com a newsletter: o mesmo componente é reaproveitado */}
      <Newsletter />
    </>
  )
}
