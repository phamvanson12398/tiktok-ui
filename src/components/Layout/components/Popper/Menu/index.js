import classNames from "classnames/bind";
import style from "./Menu.module.scss";
import Tippy from "@tippyjs/react/headless";
import PopperWrapper from "../Wrapper";
import MenuItem from "./MenuItem";
import Header from "./Header";
import { useState } from "react";

const cx = classNames.bind(style);
function Menu({ children, items = [] }) {
  const [history, setHistory] = useState([{ data: items }]);
  console.log(history);

  const currrentMenu = history[history.length - 1];
  const handleOnHide = () => {
    if (history.length > 1) {
      return setHistory((prev) => prev.slice(0, prev.length - 1));
    }
  };
  const renderMenu = () => {
    return currrentMenu.data.map((item, index) => {
      const isParent = !!item.children;
      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => [...prev, item.children]);
            }
          }}
        />
      );
    });
  };
  return (
    <Tippy
      // visible
      interactive
      delay={[100, 200]}
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx("menu-popper")}>
            {history.length > 1 && (
              <Header
                title="Language"
                onBack={() => {
                  setHistory((prev) => prev.slice(0, prev.length - 1));
                }}
              />
            )}
            {renderMenu()}
          </PopperWrapper>
        </div>
      )}
      onHide={handleOnHide}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
