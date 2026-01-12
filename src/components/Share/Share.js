import classNames from 'classnames/bind';
import styles from './Share.module.scss';
import {
    CopyIcon,
    EmailIcon,
    FacebookIconSHARE,
    LineIconSHARE,
    LinkedInIcon,
    PinterestIcon,
    RedditIcon,
    SearchIcon,
    TeleGramIcon,
    WhatsAppIcon,
    XIcon,
} from '../Icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faXmark } from '@fortawesome/free-solid-svg-icons';
import Image from '../Image';
import { RepostIcon } from '../Icons';
import { useRef, useState, useEffect } from 'react';

const cx = classNames.bind(styles);

const APPS_SHARE = [
    {
        icon: <RepostIcon />,
        title: 'Repost',
    },
    {
        icon: <CopyIcon />,
        title: 'Copy',
    },
    {
        icon: <WhatsAppIcon />,
        title: 'WhatsApp',
    },
    {
        icon: <FacebookIconSHARE />,
        title: 'Facebook',
    },
    {
        icon: <TeleGramIcon />,
        title: 'Telegram',
    },
    {
        icon: <XIcon />,
        title: 'X',
    },
    {
        icon: <LinkedInIcon />,
        title: 'LinkedIn',
    },
    {
        icon: <EmailIcon />,
        title: 'Email',
    },
    {
        icon: <RedditIcon />,
        title: 'Reddit',
    },
    {
        icon: <LineIconSHARE />,
        title: 'Line',
    },
    {
        icon: <PinterestIcon />,
        title: 'Pinterest',
    },
];

function Share({onClose}) {
    const [showAccountLeft, setShowAccountLeft] = useState(false);
    const [showAccountRight, setShowAccountRight] = useState(false);
    const [showAppLeft, setShowAppLeft] = useState(false);
    const [showAppRight, setShowAppRight] = useState(false);

    const accountsRef = useRef();
    const appsRef = useRef();

    const checkAccountScroll = () => {
        const el = accountsRef.current;
        if (!el) return;

        const { scrollLeft, clientWidth, scrollWidth } = el;

        if (scrollLeft > 0) {
            setShowAccountLeft(true);
        } else {
            setShowAccountLeft(false);
        }

        if (scrollLeft + clientWidth < scrollWidth) {
            setShowAccountRight(true);
        } else {
            setShowAccountRight(false);
        }
    };

    const checkAppScroll = () => {
        const el = appsRef.current;
        if (!el) return;

        const { scrollLeft, clientWidth, scrollWidth } = el;

        if (scrollLeft > 0) {
            setShowAppLeft(true);
        } else {
            setShowAppLeft(false);
        }

        if (scrollLeft + clientWidth < scrollWidth) {
            setShowAppRight(true);
        } else {
            setShowAppRight(false);
        }
    };

    useEffect(() => {
        checkAccountScroll();
        checkAppScroll();
    }, []);

    const handleScrollAccountRight = () => {
        accountsRef.current.scrollBy({
            left: 300,
            behavior: 'smooth',
        });
        setTimeout(() => {
            checkAccountScroll();
        }, 300);
    };

    const handleScrollAccountLeft = () => {
        accountsRef.current.scrollBy({
            left: -300,
            behavior: 'smooth',
        });
        setTimeout(() => {
            checkAccountScroll();
        }, 300);
    };

    const handleScrollAppRight = () => {
        appsRef.current.scrollBy({
            left: 300,
            behavior: 'smooth',
        });
        setTimeout(() => {
            checkAppScroll();
        }, 300);
    };

    const handleScrollAppLeft = () => {
        appsRef.current.scrollBy({
            left: -300,
            behavior: 'smooth',
        });
        setTimeout(() => {
            checkAppScroll();
        }, 300);
    };

    return (
        <div className={cx('layout')}>
            <div className={cx('wrapper')}>
                <div className={cx('share-header')}>
                    <div className={cx('btn-action')}>
                        <SearchIcon />
                    </div>
                    <div className={cx('share-title')}>Share to</div>
                    <div onClick={onClose} className={cx('btn-action')}>
                        <FontAwesomeIcon icon={faXmark} />
                    </div>
                </div>
                <div ref={accountsRef} className={cx('share-account')}>
                    <div className={cx('share-item')}>
                        <Image
                            className={cx('share_avatar')}
                            src="https://i.pinimg.com/originals/c3/5e/68/c35e683be5f16ccfaeb6e48a0a197e99.jpg"
                            alt="hung dep trai"
                        />
                        <p className={cx('share-name')}>Hung dep trai</p>
                    </div>
                    <div className={cx('share-item')}>
                        <Image
                            className={cx('share_avatar')}
                            src="https://i.pinimg.com/originals/c3/5e/68/c35e683be5f16ccfaeb6e48a0a197e99.jpg"
                            alt="hung dep trai"
                        />
                        <p className={cx('share-name')}>Hung dep trai</p>
                    </div>
                    <div className={cx('share-item')}>
                        <Image
                            className={cx('share_avatar')}
                            src="https://i.pinimg.com/originals/c3/5e/68/c35e683be5f16ccfaeb6e48a0a197e99.jpg"
                            alt="hung dep trai"
                        />
                        <p className={cx('share-name')}>Hung dep trai</p>
                    </div>
                    <div className={cx('share-item')}>
                        <Image
                            className={cx('share_avatar')}
                            src="https://i.pinimg.com/originals/c3/5e/68/c35e683be5f16ccfaeb6e48a0a197e99.jpg"
                            alt="hung dep trai"
                        />
                        <p className={cx('share-name')}>Hung dep trai</p>
                    </div>
                    <div className={cx('share-item')}>
                        <Image
                            className={cx('share_avatar')}
                            src="https://i.pinimg.com/originals/c3/5e/68/c35e683be5f16ccfaeb6e48a0a197e99.jpg"
                            alt="hung dep trai"
                        />
                        <p className={cx('share-name')}>Hung dep trai</p>
                    </div>
                    <div className={cx('share-item')}>
                        <Image
                            className={cx('share_avatar')}
                            src="https://i.pinimg.com/originals/c3/5e/68/c35e683be5f16ccfaeb6e48a0a197e99.jpg"
                            alt="hung dep trai"
                        />
                        <p className={cx('share-name')}>Hung dep trai</p>
                    </div>
                    <div className={cx('share-item')}>
                        <Image
                            className={cx('share_avatar')}
                            src="https://i.pinimg.com/originals/c3/5e/68/c35e683be5f16ccfaeb6e48a0a197e99.jpg"
                            alt="hung dep trai"
                        />
                        <p className={cx('share-name')}>Hung dep trai</p>
                    </div>
                    <div className={cx('share-item')}>
                        <Image
                            className={cx('share_avatar')}
                            src="https://i.pinimg.com/originals/c3/5e/68/c35e683be5f16ccfaeb6e48a0a197e99.jpg"
                            alt="hung dep trai"
                        />
                        <p className={cx('share-name')}>Hung dep trai</p>
                    </div>
                    <div className={cx('share-item')}>
                        <Image
                            className={cx('share_avatar')}
                            src="https://i.pinimg.com/originals/c3/5e/68/c35e683be5f16ccfaeb6e48a0a197e99.jpg"
                            alt="hung dep trai"
                        />
                        <p className={cx('share-name')}>Hung dep trai</p>
                    </div>
                    <div className={cx('share-item')}>
                        <Image
                            className={cx('share_avatar')}
                            src="https://i.pinimg.com/originals/c3/5e/68/c35e683be5f16ccfaeb6e48a0a197e99.jpg"
                            alt="hung dep trai"
                        />
                        <p className={cx('share-name')}>Hung dep trai</p>
                    </div>
                    <div className={cx('share-item')}>
                        <Image
                            className={cx('share_avatar')}
                            src="https://i.pinimg.com/originals/c3/5e/68/c35e683be5f16ccfaeb6e48a0a197e99.jpg"
                            alt="hung dep trai"
                        />
                        <p className={cx('share-name')}>Hung dep trai</p>
                    </div>
                </div>  
                
                    {showAccountLeft && (
                        <div onClick={handleScrollAccountLeft} className={cx('arrow-left-account')}>
                            <FontAwesomeIcon icon={faAngleLeft} />
                        </div>
                    )}
                    {showAccountRight && (
                        <div onClick={handleScrollAccountRight} className={cx('arrow-right-account')}>
                            <FontAwesomeIcon icon={faAngleRight} />
                        </div>
                    )}
                

                <div className={cx('separate')}></div>

                <div ref={appsRef} className={cx('share-app')}>
                    {APPS_SHARE.map((app, index) => (
                        <div key={index} className={cx('share-item')}>
                            <div className={cx('share_avatar')}>{app.icon}</div>
                            <p className={cx('share-name')}>{app.title}</p>
                        </div>
                    ))}
                </div>
                    {showAppLeft && (
                        <div onClick={handleScrollAppLeft} className={cx('arrow-left-app')}>
                            <FontAwesomeIcon icon={faAngleLeft} />
                        </div>
                    )}
                    {showAppRight && (
                        <div onClick={handleScrollAppRight} className={cx('arrow-right-app')}>
                            <FontAwesomeIcon icon={faAngleRight} />
                        </div>
                    )}
                </div>
            </div>
        
    );
}

export default Share;
