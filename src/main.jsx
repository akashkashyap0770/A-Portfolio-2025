import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)

// A modern, responsive developer portfolio built with React, Tailwind CSS, and Framer Motion. Showcases projects, skills, and contact info. Live version hosted on Netlify.