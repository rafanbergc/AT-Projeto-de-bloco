import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NovaAnamnese from "../pages/NovaAnamnese";
import Anamneses from "../pages/Anamneses";
import AnamneseDetalhe from "../pages/AnameseDatalhe";


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/NovaAnamnese" element={<NovaAnamnese />} />
      <Route path="/Anamneses" element={<Anamneses />} />
      <Route path="/pacientes/:id" element={<AnamneseDetalhe/>} />
    </Routes>
  );
}
