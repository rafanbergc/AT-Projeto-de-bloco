import { useState } from "react";
import styles from "./CEP.module.css";

export default function FormularioEndereco({ onEnderecoChange }) {
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState({
    cep: "",
    logradouro: "",
    bairro: "",
    numero: "",
    complemento: "",
    localidade: "",
    uf: "",
  });
  const [erro, setErro] = useState("");

  async function buscarCep() {
    const cepLimpo = cep.replace(/\D/g, "");

    if (cepLimpo.length !== 8) {
      setErro("CEP inválido. Deve conter 8 números.");
      return;
    }

    try {
      const resposta = await fetch(
        `https://viacep.com.br/ws/${cepLimpo}/json/`
      );
      const dados = await resposta.json();

      if (dados.erro) {
        setErro("CEP não encontrado.");
        return;
      }

      const enderecoAtualizado = {
        ...endereco, 
        cep: cepLimpo,
        logradouro: dados.logradouro,
        bairro: dados.bairro,
        localidade: dados.localidade,
        uf: dados.uf,
      };

      setErro("");
      setEndereco(enderecoAtualizado);
      onEnderecoChange(enderecoAtualizado);
    } catch {
      setErro("Erro ao buscar CEP.");
    }
  }

  function handleNumeroChange(e) {
    const enderecoAtualizado = {
      ...endereco,
      numero: e.target.value,
    };

    setEndereco(enderecoAtualizado);
    onEnderecoChange(enderecoAtualizado);
  }

  function handleComplementoChange(e) {
    const enderecoAtualizado = {
      ...endereco,
      complemento: e.target.value,
    };

    setEndereco(enderecoAtualizado);
    onEnderecoChange(enderecoAtualizado);
  }

  return (
    <div>
      <label>
        CEP:
        <input
          className={styles.input}
          type="text"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
          onBlur={buscarCep}
          placeholder="Digite o CEP"
        />
      </label>

      {erro && <p className={styles.error}>{erro}</p>}

      <label>
        Logradouro:
        <input
          className={styles.input}
          type="text"
          value={endereco.logradouro}
          readOnly
        />
      </label>

      <label>
        Bairro:
        <input
          className={styles.input}
          type="text"
          value={endereco.bairro}
          readOnly
        />
      </label>

      <label>
        Número:
        <input
          className={styles.input}
          type="text"
          value={endereco.numero}
          onChange={handleNumeroChange}
          placeholder="Número"
        />
      </label>

      <label>
        Complemento:
        <input
          className={styles.input}
          type="text"
          value={endereco.complemento}
          onChange={handleComplementoChange}
          placeholder="Apto, bloco, casa..."
        />
      </label>

      <label>
        Cidade:
        <input
          className={styles.input}
          type="text"
          value={endereco.localidade}
          readOnly
        />
      </label>

      <label>
        UF:
        <input
          className={styles.input}
          type="text"
          value={endereco.uf}
          readOnly
        />
      </label>
    </div>
  );
}
