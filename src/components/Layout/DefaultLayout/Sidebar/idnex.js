import classNames from "classnames/bind";
import style from "./Sibar.module.scss";

const cx = classNames.bind(style);
function Sidebar() {
  return <div className={cx("wrapper")}>sibar</div>;
}

export default Sidebar;
