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

function Share() {
    return (
        <div className={cx('layout')}>
            <div className={cx('wrapper')}>
                <div className={cx('share-header')}>
                    <div className={cx('btn-action')}>
                        <SearchIcon />
                    </div>
                    <div className={cx('share-title')}>Share to</div>
                    <div className={cx('btn-action')}>
                        <FontAwesomeIcon icon={faXmark} />
                    </div>
                </div>
                <div className={cx('share-account')}>
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
                    <div className={cx('share-arrow')}>
                        <div className={cx('arrow-left')}>
                            <FontAwesomeIcon icon={faAngleLeft} />
                        </div>
                        <div className={cx('arrow-right')}>
                            <FontAwesomeIcon icon={faAngleRight} />
                        </div>
                    </div>
                </div>

                <div className={cx('separate')}></div>

                <div className={cx('share-account')}>
                    {APPS_SHARE.map((app, index) => (
                        <div key={index} className={cx('share-item')}>
                            <div className={cx('share_avatar')}>{app.icon}</div>
                            <p className={cx('share-name')}>{app.title}</p>
                        </div>
                    ))}
                    <div className={cx('share-arrow')}>
                        <div className={cx('arrow-left')}>
                            <FontAwesomeIcon icon={faAngleLeft} />
                        </div>
                        <div className={cx('arrow-right')}>
                            <FontAwesomeIcon icon={faAngleRight} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Share;
