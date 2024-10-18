import { Routes, Route } from "react-router-dom";
import { FormularioGasto } from "../formularioGasto/FormularioGasto";
import { Home } from "../Home/Home";

export function Rutas() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/registrousuario" element={<FormularioGasto />} />
            </Routes>
        </div>
    );
}
