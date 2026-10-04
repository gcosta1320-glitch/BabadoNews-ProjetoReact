import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import LandingPage from './pages/LandingPage.jsx'

// Cabeçalho, menu e rodapé aparecem uma única vez, em volta de todas as rotas
export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  )
}
