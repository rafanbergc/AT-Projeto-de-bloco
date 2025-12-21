import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  const [aberto, setAberto] = useState(false);

  function fecharMenu() {
    setAberto(false);
  }

  return (
    <nav className={styles.navbar}>
      <button
        className={styles.menuButton}
        onClick={() => setAberto(!aberto)}
      >
        ☰ Menu
      </button>

      <div className={`${styles.links} ${aberto ? styles.aberto : ""}`}>
        <NavLink
          to="/"
          end
          onClick={fecharMenu}
          className={({ isActive }) =>
            isActive ? styles.active : styles.link
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/NovaAnamnese"
          onClick={fecharMenu}
          className={({ isActive }) =>
            isActive ? styles.active : styles.link
          }
        >
          Nova Anamnese
        </NavLink>
        <NavLink
          to="/Anamneses"
          onClick={fecharMenu}
          className={({ isActive }) =>
            isActive ? styles.active : styles.link
          }
        >
          Lista de Anamneses
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
