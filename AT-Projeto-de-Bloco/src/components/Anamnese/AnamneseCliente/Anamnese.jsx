import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Anamnese.module.css";
import UL from "../../UL/UL";



export default function Anamnese() {
  const [form, setForm] = useState({});
  const [aceite, setAceite] = useState(false);

  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!aceite) {
      alert("Você precisa concordar com os termos.");
      return;
    }

    console.log("Dados da anamnese:", form);
    alert("Anamnese enviada com sucesso!");

    setForm({});
    setAceite(false);

    e.target.reset();
     navigate("/");
  }

  return (
    <div>
      <UL />
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={styles.title}>Nova Anamnese</h1>

        <h2 className={styles.section}>Dados Pessoais</h2>

        <input
          className={styles.input}
          name="nome"
          placeholder="Nome completo"
          onChange={handleChange}
          required
        />

        <input
          className={styles.input}
          type="date"
          name="nascimento"
          onChange={handleChange}
          required
        />

        <div className={styles.radioGroup}>
          <span>Sexo:</span>
          <label>
            <input
              type="radio"
              name="sexo"
              value="Feminino"
              onChange={handleChange}
            />
            Feminino
          </label>
          <label>
            <input
              type="radio"
              name="sexo"
              value="Masculino"
              onChange={handleChange}
            />
            Masculino
          </label>
        </div>

        <select
          className={styles.input}
          name="estadoCivil"
          onChange={handleChange}
          required
        >
          <option value="">Estado Civil</option>
          <option>Solteiro(a)</option>
          <option>Casado(a)</option>
          <option>Divorciado(a)</option>
        </select>

        <input
          className={styles.input}
          name="profissao"
          placeholder="Profissão"
          onChange={handleChange}
        />
        <input
          className={styles.input}
          name="cpf"
          placeholder="CPF"
          onChange={handleChange}
          required
        />
        <input
          className={styles.input}
          name="rg"
          placeholder="RG"
          onChange={handleChange}
          required
        />
        <input
          className={styles.input}
          name="telefone"
          placeholder="Telefone"
          onChange={handleChange}
          required
        />
        <input
          className={styles.input}
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />

        <h2 className={styles.section}>Endereço</h2>

        <input
          className={styles.input}
          name="cep"
          placeholder="CEP"
          onChange={handleChange}
          required
        />
        <input
          className={styles.input}
          name="endereco"
          placeholder="Endereço"
          onChange={handleChange}
        />
        <input
          className={styles.input}
          name="bairro"
          placeholder="Bairro"
          onChange={handleChange}
          required
        />
        <input
          className={styles.input}
          name="cidade"
          placeholder="Cidade"
          onChange={handleChange}
          required
        />
        <input
          className={styles.input}
          name="estado"
          placeholder="Estado"
          onChange={handleChange}
          required
        />

        <h2 className={styles.section}>Informações de Saúde</h2>

        {[
          "Já fez quiropraxia?",
          "Já realizou alguma cirurgia?",
          "Faz uso de medicamentos?",
          "O uso é contínuo?",
          "Já teve câncer?",
          "Está gestante?",
          "Tem filhos?",
          "É fumante?",
          "Pratica atividade física?",
          "Consome bebida alcoólica?",
          "É portador de marca-passo?",
          "Tem ou já teve algum problema cardíaco?",
        ].map((campo) => (
          <div key={campo} className={styles.radioGroup}>
            <span>{campo}</span>
            <label>
              <input
                type="radio"
                name={campo}
                value="Sim"
                onChange={handleChange}
              />
              Sim
            </label>
            <label>
              <input
                type="radio"
                name={campo}
                value="Não"
                onChange={handleChange}
              />
              Não
            </label>
          </div>
        ))}

        <textarea
          className={styles.textarea}
          name="medicamentos"
          placeholder="Se sim, quais medicamentos?"
          onChange={handleChange}
        />

        <textarea
          className={styles.textarea}
          name="tratamentos"
          placeholder="Já realizou algum tratamento? Qual?"
          onChange={handleChange}
        />

        <h2 className={styles.section}>Movimentos que causam dor</h2>
        <textarea
          className={styles.textarea}
          name="movimentosDor"
          onChange={handleChange}
          required
        />

        <h2 className={styles.section}>Observações</h2>
        <textarea
          className={styles.textarea}
          name="observacoes"
          onChange={handleChange}
          required
        />

        <div className={styles.checkbox}>
          <label>
            <input
              type="checkbox"
              checked={aceite}
              onChange={(e) => setAceite(e.target.checked)}
            />
            Declaro que as informações acima são verdadeiras.
          </label>
        </div>

        <button className={styles.button} type="submit">
          Enviar Anamnese
        </button>
      </form>
    </div>
  );
}
