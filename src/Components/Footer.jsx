import { useContext } from "react";
import { ContextGlobal } from "./utils/ContextGlobal";
import styles from "./Footer.module.css";
function Footer() {
  const temaContext = useContext(ContextGlobal);

  return (
    <footer className={temaContext.theme}>
          <div>
            <div className={styles.footer}>
      <img src="../public/images/ico-facebook.png" className={styles.footer}/>
      <img src="../public/images/ico-instagram.png" className={styles.footer}/>
      <img src="../public/images/ico-tiktok.png" className={styles.footer}/>
      <img src="../public/images/ico-whatsapp.png" className={styles.footer}/>
      </div> <div> <p>Copyright © 2023 by Federico Molina DH</p> </div>
      </div>
    </footer>
  );
}

export default Footer;
