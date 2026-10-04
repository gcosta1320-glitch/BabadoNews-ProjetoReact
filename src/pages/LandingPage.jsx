import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../sections/Hero.jsx'
import Destaques from '../sections/Destaques.jsx'
import Entretenimento from '../sections/Entretenimento.jsx'
import Categorias from '../sections/Categorias.jsx'
import Newsletter from '../sections/Newsletter.jsx'

// A Landing Page só organiza a ordem das seções
export default function LandingPage() {
  const { hash } = useLocation()

  // Quando o visitante chega por um link como "/#destaques" vindo de outra rota,
  // a seção só existe depois que o React desenha a página; então rolamos até ela aqui
  useEffect(() => {
    if (hash) {
      document.querySelector(hash)?.scrollIntoView()
    }
  }, [hash])

  return (
    <>
      <Hero />
      <Destaques />
      <Entretenimento />
      <Categorias />
      <Newsletter />
    </>
  )
}
