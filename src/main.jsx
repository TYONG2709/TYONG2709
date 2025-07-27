import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// create a root to display React components inside a browser DOM node
createRoot(document.getElementById('root')).render(
  // essential tag for debugging common bugs on components early 
  // before deploying (during devepment stage)
  <StrictMode>
    <App />
  </StrictMode>,
)