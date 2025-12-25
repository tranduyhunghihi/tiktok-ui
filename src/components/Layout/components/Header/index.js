import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark ,faSpinner, faMagnifyingGlass, faEllipsisVertical, faLanguage, faCloudArrowUp, faCoins, faGear, faArrowRightFromBracket} from '@fortawesome/free-solid-svg-icons';
import { faCircleQuestion, faKeyboard, faMessage, faPaperPlane, faUser } from '@fortawesome/free-regular-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Button from '~/components/Button'
import styles from './Header.module.scss'
import image from '~/asset/image';
import {Wrapper as PopperWrapper} from '~/components/Popper'
import AccountItem from '~/components/AccountItem';
import Menu from '~/components/Popper/Menu';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faLanguage} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English'
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tieng Viet'
                },
                {
                    type: 'language',
                    code: 'cn',
                    title: 'China'
                },
            ] 
            
        }
        
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and Help',
        to: '/feedback'
        
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard Shortcuts',
       
    }
];


function Header() {
    const [searchResult, setSearchResult] = useState([])

    const currentUser = true


    useEffect(() => {
        setTimeout(() => {
            setSearchResult([])
        },0)
    },[])

    const handleMenuChange = (menuItem) => {
        switch(menuItem.type){
            case 'language':
                //handle Change language
                break;
            default:
        }
    }

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View Profile',
            to: '/profile'
            
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin'
            
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings'
            
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
            title: 'Log out',
            to: '/logout',
            separate: true
            
        }
    ]

    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
                <div className={cx('logo')}>                
                    <img src={image.logo.default} alt='Tiktok'/>
                </div>
                <HeadlessTippy 
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
                </HeadlessTippy>

                <div className={cx('actions')}>
                {currentUser ? (    
                    <>
                        <Tippy content='Upload video' placement='bottom' delay={[0, 200]}>
                            <button className={cx('action-btn')}>
                                <FontAwesomeIcon  icon={faCloudArrowUp} />
                            </button>
                        </Tippy>
                        <Tippy content='Message' placement='bottom'>
                            <button className={cx('action-btn')}>
                                <FontAwesomeIcon  icon={faPaperPlane} />
                            </button>
                        </Tippy>
                        <Tippy content='Activity' placement='bottom'>
                            <button className={cx('action-btn')}>
                                <FontAwesomeIcon  icon={faMessage} />
                            </button>
                        </Tippy>
                    </>
                ): (
                    <>
                        <Button text >Upload</Button>
                        <Button primary >Log in</Button>
                        
                    </>
                )}
                        <Menu
                            items = {currentUser ? userMenu : MENU_ITEMS}
                            onChange={handleMenuChange}
                        >
                            {currentUser ? ( 
                                
                                <img className={cx('user-avatar')} src='https://i.pinimg.com/originals/c3/5e/68/c35e683be5f16ccfaeb6e48a0a197e99.jpg' alt='Hung dep trai' />
                                

                            ) : (
                            
                                <button className={cx('more-btn')}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </button>
                            
                            )
                            }
                        </Menu>
                </div>
        </div>
    
    </header>;
}

export default Header;