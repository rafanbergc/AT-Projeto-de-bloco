import VisualizarAnamnese from "../components/Anamnese/VisualizarAnamnese/VisualizarAnamnese";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function AnamneseDetalhe() {
  const { id } = useParams();
  const [anamnese, setAnamnese] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/json/anamnese.json")
      .then((response) => response.json())
      .then((data) => {
        const encontrada = data.find(
          (paciente) => paciente.id.toString() === id
        );

        setAnamnese(encontrada || null);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao carregar anamnese:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p style={{ padding: 20 }}>Carregando anamnese...</p>;
  }

  
  return <VisualizarAnamnese anamnese={anamnese} />;
}
export default AnamneseDetalhe;