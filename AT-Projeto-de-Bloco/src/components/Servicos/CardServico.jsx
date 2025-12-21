import styles from "./CardServico.module.css";

function CardServico({ servico, onClose }) {
  function fecharCard() {
    if (onClose) {
      onClose();
    }
  }

  return (
    <div className={styles.card}>
      <button
        className={styles.fechar}
        onClick={fecharCard}
        aria-label="Fechar"
      >
        ✕
      </button>

      <img
        src={servico.imagem}
        alt={servico.titulo}
        className={styles.imagem}
      />

      <h3 className={styles.titulo}>{servico.titulo}</h3>

      <p className={styles.descricao}>{servico.descricao}</p>

      <button className={styles.botao}>
        Eu quero esse procedimento
      </button>
    </div>
  );
}

export default CardServico;
