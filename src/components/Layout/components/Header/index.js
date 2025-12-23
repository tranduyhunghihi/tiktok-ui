import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark ,faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import styles from './Header.module.scss'
import image from '~/asset/image';
import {Wrapper as PopperWrapper} from '~/components/Popper'
import AccountItem from '~/components/AccountItem';

const cx = classNames.bind(styles)



function Header() {
    const [searchResult, setSearchResult] = useState([])

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([])
        },0)
    },[])

    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
                <div className={cx('logo')}>                
                    <img src={image.logo.default} alt='Tiktok'/>
                </div>
                <Tippy 
                        appendTo={() => document.body}
                        interactive
                        visible={searchResult.length > 0    }
                        render={attrs => (
                            <div className={cx('search-result')} tabIndex='-1' {...attrs}>
                                <PopperWrapper>
                                    <h4 className={cx('search-title')}>Accounts</h4>
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                </PopperWrapper>    
                            </div>

                        )}
                    >
                    <div className={cx('search')}>
                        <input placeholder='search accounts and videos' spellCheck={false}/>
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} /> 
                        </button>
                            <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> 
                            <button className={cx('search-btn')}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                    </div>  
                </Tippy>
                <div className={cx('action')}>
                    <h2>Actions</h2>
                </div>
        </div>
    
    </header>;
}

export default Header;