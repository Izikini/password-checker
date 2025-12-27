import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Password_history from './Password_history.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Password_history />
  </StrictMode>,
)
