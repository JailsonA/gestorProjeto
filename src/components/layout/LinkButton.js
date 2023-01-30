import style from "./LinkButton.module.css";
import { Link } from "react-router-dom";
function LinkButton({ to, text }) {
  return (
    <div>
      <Link className={style.btn} to={to}>
        {text}
      </Link>
    </div>
  );
}

export default LinkButton;
