import styles from "./Welcome.module.css";
import ButtonAppointment from "../ButtonApointment/ButtonApointment";

function Welcome() {
  return (
    <section className={styles.welcome}>
      <h1>Seja bem-vindo a Vital Spine</h1>
      <div className={styles.content}>
        <div className={styles.imagem}>
          <img
            alt=""
            src="./photos/Imagem do WhatsApp de 2025-08-21 à(s) 10.39.08_f8c74f12.jpg"
          />
        </div>


        <div className={styles.hero}>
          <p className={styles.subtitle}>Seu bem-estar é nossa prioridade.</p>
          
          <ButtonAppointment />
        </div>
      </div>
    </section>
  );
}
export default Welcome;
