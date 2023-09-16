import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/ContextGlobal";
import { useContext } from "react";
import styles from "./Navbar.module.css";
function Navbar() {
  const temaContext = useContext(ContextGlobal);

  function handleClick() {
    temaContext.changeTheme();
    localStorage.setItem("theme", temaContext.theme);
  }

  return (
    <div className={temaContext.theme}>
      <div className={styles.position}>
        <nav className={styles.nav}>
          <Link to={"/"}>Home</Link>
          <Link to={"/contact"}>Contacto</Link>
          <Link to={"/favs"}>Favoritos!</Link>
          <button onClick={handleClick}>{temaContext.theme}</button>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
