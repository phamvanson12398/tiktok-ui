import styles from './Header.module.scss'
import classNames  from 'classnames/bind';
import image from '../../../assets/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import AccountItem from '../AcountItem';
// import { useState } from 'react';
import {Wrapper as PopperWrapper} from '../Popper/index' 
const cx = classNames.bind(styles)
function Header() {
    // const [SearchResult, setSearchResult]= useState([])
    // setSearchResult([1,2,3])
    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
           
            <img src={image.logo} alt='tiktok'/>
            <Tippy
                visible="true"
                render={attrs => (
                
                    <div className={(cx("search-result"))} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Acounts</h4>
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                        </PopperWrapper>
                    </div>
                )}
            >
                <div className={cx('search')}>
                    <input placeholder='Search videos and acounts' spellCheck='false'/>
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                
                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                
                    {/* <Tippy content="Tim Kiem" placement='right'> */}
                        <button className={cx('search-btn')} >
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    {/* </Tippy> */}
                </div>
            </Tippy>
            <div className={cx('action')}>

            </div>
        </div>
    </header>;
}

export default Header;