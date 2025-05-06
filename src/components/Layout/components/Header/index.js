import styles from './Header.module.scss'
import classNames  from 'classnames/bind';


const cx = classNames.bind(styles)
function Header() {
    console.log(styles);

    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            
        </div>
    </header>;
}

export default Header;