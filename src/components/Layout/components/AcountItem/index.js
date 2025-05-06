import classNames from "classnames/bind";
import style from './AcountItem.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";


const cx = classNames.bind(style)
function AccountItem() {
    return <div className={cx('wrapper')}>
        <img className={(cx("avatar"))} src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/fc858f28f395981fb7bf8b8757dd33e4~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=b2d57f44&x-expires=1746691200&x-signature=AFYCAxlBODsJtT97AIs%2Bh9W2ZnQ%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my" alt="hoa" />
        <div className={cx('info')}>
            <h4 className={cx('name')}>
                <span>Pham Van Son</span>
                <FontAwesomeIcon className={cx('checkicon')} icon={faCheckCircle} />
            </h4>
            <p className={(cx('username'))}>PhamVan Son</p>
        </div>
    </div>;
}

export default AccountItem;