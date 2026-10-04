import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Mesmo framework CSS da Parte 1: Bootstrap 5.3 + Bootstrap Icons
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'

// Estilos do site do grupo (carregados depois do Bootstrap para sobrescrevê-lo)
import './index.css'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
