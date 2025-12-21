import ButtonAppointment from "../ButtonApointment/ButtonApointment";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <img
          src="./photos/Imagem do WhatsApp de 2025-08-21 à(s) 10.39.08_f8c74f12.jpg"
          alt="Vital Spine"
        />
      </div>

      <div className={styles.info}>
        <h3>Vital Spine - Quiropraxia e Massoterapia</h3>
      </div>
      <ButtonAppointment />
      <div className={styles.info}>
        <p>Av. Sumaré, 169 - Perdizes, São Paulo - SP</p>
        <p>Telefone: (11) 98816-7357</p>
      </div>

      <div className={styles.social}>
        <p>Entre em contato em nossas redes sociais</p>
        <div className={styles.icons}>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-whatsapp"></i>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
