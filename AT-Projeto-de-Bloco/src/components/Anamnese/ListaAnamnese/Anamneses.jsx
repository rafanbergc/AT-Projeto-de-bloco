import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Anamneses.module.css";

function Anamneses() {
  const [anamneses, setAnamneses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/json/anamnese.json")
      .then((response) => response.json())
      .then((data) => {
        setAnamneses(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao carregar anamneses:", error);
      });
  }, []);

  if (loading) {
    return <p style={{ padding: 20 }}>Carregando anamneses...</p>;
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
              <strong>Cidade:</strong> {paciente.cidade} / {paciente.estado}
            </p>

            <NavLink to={`/pacientes/${paciente.id}`} className={styles.botao}>
              Ver Anamnese
            </NavLink>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Anamneses;
