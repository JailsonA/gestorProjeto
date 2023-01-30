import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import style from "./Footer.module.css";

function Footer() {
  return (
    <footer className={style.footer}>
      <ul className={style.social_list}>
        <li>
          <FaFacebook />
        </li>
        <li>
          <FaInstagram />
        </li>
        <li>
          <FaLinkedin />
        </li>
      </ul>
      <p className={style.copy_right}>
        By <span>Janilson Andrade</span> © 2023
      </p>
    </footer>
  );
}

export default Footer;
