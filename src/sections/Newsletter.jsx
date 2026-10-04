import { useState } from 'react'

const padraoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Newsletter do index.html: virou a chamada final (CTA) da Landing Page.
// A validação é a mesma do script.js da Parte 1, agora com useState.
export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [mensagem, setMensagem] = useState({ texto: '', tipo: '' })

  function inscrever(evento) {
    evento.preventDefault()

    const emailDigitado = email.trim()

    if (emailDigitado === '') {
      setMensagem({ texto: 'Digite seu e-mail.', tipo: 'erro' })
      return
    }

    if (!padraoEmail.test(emailDigitado)) {
      setMensagem({ texto: 'Digite um e-mail válido.', tipo: 'erro' })
      return
    }

    setMensagem({
      texto: 'Inscrição realizada com sucesso! Obrigado por acompanhar o Babado News.',
      tipo: 'sucesso',
    })
    setEmail('')
  }

  return (
    <section id="newsletter" className="secao-inscricao">
      <div className="conteudo-inscricao">
        <span className="etiqueta-inscricao">BABADO NEWS</span>

        <h2>Fique por dentro!</h2>

        <p>Receba as principais notícias e novidades diretamente no seu e-mail.</p>

        {/* noValidate: quem valida é a função inscrever, para mostrar as mensagens do site */}
        <form className="formulario-inscricao" onSubmit={inscrever} noValidate>
          <div className="campo-inscricao">
            <label htmlFor="email-inscricao">Seu melhor e-mail</label>

            <input
              type="email"
              id="email-inscricao"
              name="email"
              placeholder="Digite seu e-mail"
              required
              value={email}
              onChange={(evento) => setEmail(evento.target.value)}
            />
          </div>

          <button type="submit">Inscrever-se</button>
        </form>

        <small>Sua informação está segura com a gente.</small>

        <p className={`mensagem-inscricao ${mensagem.tipo}`} aria-live="polite">
          {mensagem.texto}
        </p>
      </div>
    </section>
  )
}
