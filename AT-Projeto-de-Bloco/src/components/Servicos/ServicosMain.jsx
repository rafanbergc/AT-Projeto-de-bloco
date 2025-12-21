import { useState, useEffect } from "react";
import CardServico from "./CardServico";
import NavbarAtendimentos from "./NavBarAtendimentos";
import styles from "./ServicosMain.module.css";

function ServicosMain() {
  // Estado para o atendimento selecionado
  const [servicoSelecionado, setServicoSelecionado] = useState(null);

  // Estado para detectar mobile
  const [isMobile, setIsMobile] = useState(window.innerWidth < 441);

  // Estado para armazenar todos os atendimentos
  const [atendimentos, setAtendimentos] = useState([]);

  // Listener de resize para atualizar isMobile
  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 441);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Fetch dos atendimentos
  useEffect(() => {
    fetch("/json/procedimentos.json")
      .then((response) => response.json())
      .then((data) => {
        setAtendimentos(data);

        if (data.length > 0 && !isMobile) {
          setServicoSelecionado(data);
        }
      })
      .catch((error) => {
        console.error("Erro ao carregar atendimentos:", error);
      });
  }, [isMobile]);

  function fecharCard() {
    setServicoSelecionado(null);
  }

  return (
    <div>
      <section className={styles.servicosIntro}>
        <h2>Conheça nossos Atendimentos</h2>
        <p>Técnicas que vão ajudar na melhora da sua qualidade de vida</p>
      </section>

      {isMobile ? (
        <main className={styles.servicosMain}>
          <NavbarAtendimentos
            onSelect={setServicoSelecionado}
            atendimentos={atendimentos}
          />

          {servicoSelecionado && (
            <CardServico servico={servicoSelecionado} onClose={fecharCard} />
          )}
        </main>
      ) : (
        <main className={styles.servicosMain}>
          {atendimentos.map((atendimento) => (
            <CardServico
              key={atendimento.id}
              servico={atendimento}
              onClose={() => {}}
            />
          ))}
        </main>
      )}
    </div>
  );
}

export default ServicosMain;
