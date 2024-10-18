//importaciones de enrutador
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

//import { FormularioGasto } from './formularioGasto/FormularioGasto'
import { Rutas } from './Routes/Routes'
import { BrowserRouter } from "react-router-dom";


//importaciones de bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import "bootstrap-icons/font/bootstrap-icons.css"

//import App from './App.jsx'
//import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Rutas></Rutas>
    <BrowserRouter>
    </BrowserRouter>
  </StrictMode>,
)
