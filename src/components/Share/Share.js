import classNames from 'classnames/bind';
import styles from './Share.module.scss';
import { SearchIcon } from '../Icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

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
                </div>
                <div className={cx('separate')}></div>
                <div className={cx('share-account')}>
                    
                </div>
            </div>
        </div>
    );
}

export default Share;
