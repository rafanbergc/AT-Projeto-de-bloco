import { useState, useEffect } from "react";
import styles from "./NavBarAtendimentos.module.css";

function NavbarAtendimentos({ onSelect }) {
  const [aberto, setAberto] = useState(false);
  const [atendimentos, setAtendimentos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/json/procedimentos.json")
      .then((response) => response.json())
      .then((data) => {
        setAtendimentos(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao carregar atendimentos:", error);
        setLoading(false);
      });
  }, []);

  function escolher(servico) {
    onSelect(servico);
    setAberto(false);
  }

  return (
    <nav className={styles.navbar}>
      <button className={styles.menuButton} onClick={() => setAberto(!aberto)}>
        ☰ Atendimentos disponíveis
      </button>

      {aberto && (
        <div className={`${styles.links} ${styles.aberto}`}>
          {loading ? (
            <p>Carregando...</p>
          ) : (
            atendimentos.map((item) => (
              <button
                key={item.id}
                className={styles.link}
                onClick={() => escolher(item)}
              >
                {item.titulo}
              </button>
            ))
          )}
        </div>
      )}
    </nav>
  );
}

export default NavbarAtendimentos;
