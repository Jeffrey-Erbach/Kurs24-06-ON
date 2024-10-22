import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <button className={styles.homebtn}>Home</button>
    </div>
  );
}

export default Navbar;
