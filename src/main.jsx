import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "./../node_modules/flowbite/dist/flowbite.min.js"
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
