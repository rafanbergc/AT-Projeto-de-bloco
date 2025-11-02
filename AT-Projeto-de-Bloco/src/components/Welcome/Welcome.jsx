import styles from "./Welcome.module.css";

function Welcome() {
  return (
    <section className={styles.welcome}>
      <h1>Seja bem vindo Vital Spine</h1>
      <div className={styles.content}>
        <div className={styles.imagem}>
          <img
            alt=""
            src="./photos/Imagem do WhatsApp de 2025-08-21 à(s) 10.39.08_f8c74f12.jpg"
          />
        </div>
        <div className={styles.hero}>
          <p className={styles.subtitle}>Seu bem-estar é nossa prioridade.</p>
          <div></div>
          <button className={styles.buttonAppointment}>
            Agende sua consulta
            <i className={`${styles.icon} fa-brands fa-whatsapp`}></i>
          </button>
           <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.0239441021367!2d-46.676690199999996!3d-23.531641199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce57b3ad383aad%3A0x87ca6cb2a69541f8!2sVital%20Spine!5e0!3m2!1spt-BR!2sbr!4v1761156624279!5m2!1spt-BR!2sbr"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
export default Welcome;
