import { useState } from "react";
import Layout from "./components/Layout";
import SemanaPage from "./pages/SemanaPage";
import MesPage from "./pages/MesPage";
import HistorialPage from "./pages/HistorialPage";
import AjustesPage from "./pages/AjustesPage";
import { useTema } from "./lib/tema";
import type { Pantalla } from "./lib/navegacion";

export default function App() {
  const [pantalla, setPantalla] = useState<Pantalla>("semana");
  const { tema, setTema } = useTema();

  return (
    <Layout actual={pantalla} onCambiar={setPantalla} tema={tema} onTema={setTema}>
      {pantalla === "semana" && <SemanaPage />}
      {pantalla === "mes" && <MesPage />}
      {pantalla === "historial" && <HistorialPage />}
      {pantalla === "ajustes" && <AjustesPage tema={tema} onTema={setTema} />}
    </Layout>
  );
}
