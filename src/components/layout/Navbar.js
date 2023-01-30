import { Link } from "react-router-dom";
import Container from "./Container";
import style from "./Navbar.module.css";
import logo from "../../img/costs_logo.png";
function Navbar() {
  return (
    <>
      <nav className={style.navbar}>
        <Container>
          <Link to="/">
            <img src={logo} alt="costs" />
          </Link>
          <ul className={style.list}>
            <li className={style.item}>
              <Link to="/">Home</Link>
            </li>
            <li className={style.item}>
              <Link to="/Projects">Projetos</Link>
            </li>
            <li className={style.item}>
              <Link to="/Company">Empresa</Link>
            </li>
            <li className={style.item}>
              <Link to="/Contact">Contato</Link>
            </li>
          </ul>
        </Container>
      </nav>
    </>
  );
}

export default Navbar;
