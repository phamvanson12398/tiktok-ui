import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import image from "../../../assets/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faCoins,
  faEllipsisVertical,
  faGear,
  faKeyboard,
  faLanguage,
  faMagnifyingGlass,
  faMessage,
  faQuestion,
  faSignOut,
  faSpinner,
  faUpload,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
// import headlessTippy from '@tippyjs/react/headless';
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import AccountItem from "../AcountItem";
import Button from "../Button";
import { useState } from "react";
import PopperWrapper from "../Popper/Wrapper";
import { useEffect } from "react";
import Menu from "../Popper/Menu";
const cx = classNames.bind(styles);

const MENU_ITEM = [
  {
    icon: <FontAwesomeIcon icon={faLanguage} />,
    title: "English",
    children: {
      title: "Language",
      data: [
        {
          code: "vi",
          title: "Việt Nam",
        },
        {
          code: "EN",
          title: "English",
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faQuestion} />,
    title: "feedback and help",
    to: "/feedback",
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: "keyboard shortcuts",
  },
];
function Header() {
  const [SearchResult, setSearchResult] = useState([]);
  useEffect(() => {
    setSearchResult([1, 2, 3]);
  }, []);
  const currentUser = true;
  const menuUser = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: "View profile",
      to: "/sonpv",
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: "Get coins",
      to: "/coin",
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: "Settings",
      to: "/setting",
    },
    ...MENU_ITEM,
    {
      separate: true,
      icon: <FontAwesomeIcon icon={faSignOut} />,
      title: "Logout",
      to: "/logout",
    },
  ];
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <img src={image.logo} alt="tiktok" />
        <Tippy
          visible={(SearchResult.length = 0)}
          interactive="true"
          render={(attrs) => (
            <div className={cx("search-result")} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <h4 className={cx("search-title")}>Acounts</h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cx("search")}>
            <input placeholder="Search videos and acounts" spellCheck="false" />
            <button className={cx("clear")}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>

            <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />

            {/* <Tippy content="Tim Kiem" placement='right'> */}
            <button className={cx("search-btn")}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
            {/* </Tippy> */}
          </div>
        </Tippy>

        <div className={cx("action")}>
          {currentUser ? (
            <>
              <Tippy delay={[0, 200]} content="Upload video" placement="bottom">
                <button className={cx("action-btn")}>
                  <FontAwesomeIcon icon={faUpload} />
                </button>
              </Tippy>
              <button className={cx("action-btn")}>
                <FontAwesomeIcon icon={faMessage} />
              </button>
              <Menu items={menuUser}>
                <img
                  className={cx("user-avatar")}
                  src="https://cafefcdn.com/2019/5/27/photo-2-1558922792445997787911.png"
                  alt="beck"
                />
              </Menu>
            </>
          ) : (
            <>
              <Button text>Upload</Button>
              <Button primary>Login</Button>
              <Menu items={MENU_ITEM}>
                <button className={cx("more-btn")}>
                  <FontAwesomeIcon icon={faEllipsisVertical} />
                </button>
              </Menu>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
