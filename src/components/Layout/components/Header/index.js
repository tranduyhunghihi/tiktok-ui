import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark ,faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.scss'
import image from '~/asset/image';

const cx = classNames.bind(styles)


function Header() {
    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
                <div className={cx('logo')}>                
                    <img src={image.logo.default} alt='Tiktok'/>
                </div>
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
                <div className={cx('action')}>
                    <h2>Actions</h2>
                </div>
        </div>
    
    </header>;
}

export default Header;