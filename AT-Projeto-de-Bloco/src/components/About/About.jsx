import styles from "./About.module.css";
function About() {
  return (
    <div className={styles.aboutContainer}>
      <h2>Sobre nós</h2>
      <p>
        Vital Spine Saúde e Bem-Estar, esta localizada em Perdizes na Avenida
        Sumaré, 169, nossa clínica oferece um espaço acolhedor e moderno, com
        profissionais capacitados e técnicas exclusivas. Cada atendimento é
        personalizado e humanizado, proporcionando alívio rápido e resultados
        duradouros. Nossos clientes aprovam e recomendam nosso cuidado e
        dedicação.”
      </p>
    </div>
  );
}

export default About;
