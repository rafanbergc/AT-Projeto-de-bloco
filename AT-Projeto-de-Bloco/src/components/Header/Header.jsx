
import styles from "./Header.module.css";


function Header() {
  return (
    <div>
      <header>
        <div className={styles.logo}>
         
          <img src="./photos/Imagem do WhatsApp de 2025-08-21 à(s) 10.39.08_f8c74f12.jpg" />
        </div>
        <div class={styles.socialIcons}>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-whatsapp"></i>
        </div>
      </header>
    </div>
  );
}
export default Header;
