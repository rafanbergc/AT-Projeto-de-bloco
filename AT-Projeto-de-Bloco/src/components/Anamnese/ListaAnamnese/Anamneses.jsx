import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Anamneses.module.css";

function Anamneses() {
  const [anamneses, setAnamneses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function carregarDados() {
      try {
        const response = await fetch("/json/anamnese.json");
        const dadosJson = await response.json();

        const dadosLocal = JSON.parse(
          localStorage.getItem("anamneses")
        ) || [];

        const listaFinal = [...dadosJson, ...dadosLocal];

        setAnamneses(listaFinal);
      } catch (error) {
        console.error("Erro ao carregar anamneses:", error);
      } finally {
        setLoading(false);
      }
    }

    carregarDados();
  }, []);

  if (loading) {
    return <p style={{ padding: 20 }}>Carregando anamneses...</p>;
  }

  if (anamneses.length === 0) {
    return <p style={{ padding: 20 }}>Nenhuma anamnese cadastrada.</p>;
  }

  return (
    <main className={styles.container}>
      <h1>Lista de Anamneses</h1>

      <ul className={styles.lista}>
        {anamneses.map((paciente) => (
          <li key={paciente.id} className={styles.card}>
            <h2>{paciente.nome}</h2>

            <p>
              <strong>Telefone:</strong> {paciente.telefone}
            </p>

            <p>
              <strong>Cidade:</strong>{" "}
              {paciente.endereco?.localidade} / {paciente.endereco?.uf}
            </p>

            <NavLink
              to={`/pacientes/${paciente.id}`}
              className={styles.botao}
            >
              Ver Anamnese
            </NavLink>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Anamneses;
