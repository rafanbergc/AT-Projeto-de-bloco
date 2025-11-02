import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={`${styles.navbar} `}>
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Services</a>
      <a href="#">Contact</a>
    </nav>
  );
}
export default Navbar;
