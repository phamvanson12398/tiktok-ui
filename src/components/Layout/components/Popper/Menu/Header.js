import classNames from "classnames/bind";
import style from "./Menu.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(style);
function Header({ title, onBack }) {
  return (
    <header className={cx("header")}>
      <button className={cx("btn-back")} onClick={onBack}>
        <FontAwesomeIcon icon={faChevronCircleLeft} />
      </button>
      <h4 className={cx("header-title")}>{title}</h4>
    </header>
  );
}

export default Header;
