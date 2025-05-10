import Button from "../../Button";
import style from "./Menu.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);
function MenuItem({ data, onClick }) {
  const classes = cx("menu-item", {
    separate: data.separate,
  });

  return (
    <Button
      className={classes}
      onClick={onClick}
      leftIcon={data.icon}
      to={data.to}
    >
      {data.title}
    </Button>
  );
}

export default MenuItem;
