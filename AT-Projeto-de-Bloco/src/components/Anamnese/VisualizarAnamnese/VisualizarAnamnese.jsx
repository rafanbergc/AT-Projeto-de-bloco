import styles from "./VisualizarAnamnese.module.css";

 function VisualizarAnamnese({ anamnese }) {
  if (!anamnese) {
    return <p className={styles.empty}>Nenhuma anamnese encontrada.</p>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Anamnese do Paciente: {anamnese.nome}</h1>

      <div className={styles.card}>
        <h2>Resumo</h2>
        <p>
          <strong>Nome:</strong> {anamnese.nome}
        </p>
        <p>
          <strong>Telefone:</strong> {anamnese.telefone}
        </p>
        <p>
          <strong>Email:</strong> {anamnese.email}
        </p>
        <p>
          <strong>Data de Nascimento:</strong> {anamnese.nascimento}
        </p>
      </div>

      <div className={styles.card}>
        <h2>Endereço</h2>
        <p>{anamnese.endereco}</p>
        <p>
          {anamnese.bairro} - {anamnese.cidade}/{anamnese.estado}
        </p>
        <p>
          <strong>CEP:</strong> {anamnese.cep}
        </p>
      </div>

      <div className={styles.card}>
        <h2>Informações de Saúde</h2>

        <ul className={styles.list}>
          <li>
            Já fez quiropraxia: <strong>{anamnese.jaFezQuiropraxia}</strong>
          </li>
          <li>
            Cirurgia: <strong>{anamnese.cirurgia}</strong>
          </li>
          <li>
            Usa medicamento: <strong>{anamnese.usaMedicamento}</strong>
          </li>
          <li>
            Uso contínuo: <strong>{anamnese.usoContinuo}</strong>
          </li>
          <li>
            Câncer: <strong>{anamnese.cancer}</strong>
          </li>
          <li>
            Gestante: <strong>{anamnese.gestante}</strong>
          </li>
          <li>
            Fumante: <strong>{anamnese.fumante}</strong>
          </li>
          <li>
            Atividade física: <strong>{anamnese.atividadeFisica}</strong>
          </li>
          <li>
            Problema cardíaco: <strong>{anamnese.cardiaco}</strong>
          </li>
        </ul>
      </div>

      {anamnese.medicamentos && (
        <div className={styles.card}>
          <h2>Medicamentos</h2>
          <p>{anamnese.medicamentos}</p>
        </div>
      )}

      
      <div className={styles.card}>
        <h2>Dores e Movimentos</h2>
        <p>{anamnese.movimentosDor}</p>
      </div>

      <div className={styles.card}>
        <h2>Observações</h2>
        <p>{anamnese.observacoes}</p>
      </div>
    </div>
  );
}
export default VisualizarAnamnese;