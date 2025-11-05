import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
// import 'bootstrap/dist/css/bootstrap.min.css'
import './main.scss'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/logic-workbook">
      <App />
    </BrowserRouter>
  </StrictMode>,
)
