import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAccount.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Tippy from '@tippyjs/react/headless';
import Button from '../Button';
import Image from '../Image';

const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (attr) => (
        <div className={cx('info-view')} tabIndex={-1} {...attr}>
            <PopperWrapper>
                <div className={cx('preview-header')}>
                    <Image
                        className={cx('info-avata')}
                        src="https://i.pinimg.com/originals/c3/5e/68/c35e683be5f16ccfaeb6e48a0a197e99.jpg"
                        alt="hung dep trai"
                    />
                    <div className={cx('info-btn')}>
                        <Button primary>Follow</Button>
                    </div>
                </div>  
                <div className={cx('preview-body')}>
                    <p className={cx('info-nickname')}> 
                        <strong>hungdeptrai</strong>
                        <FontAwesomeIcon className={cx('preview-check')} icon={faCheckCircle} />
                    </p>
                    <p className={cx('info-name')}>Tran Duy Hung</p>
                    <div className={cx('following-like')}>
                        <p className={cx('following')}>
                            <strong>6.7M</strong>
                            <span className={cx('count')}> Followers</span>
                        </p>
                        <p className={cx('like')}>
                            <strong>429.0M</strong>
                            <span className={cx('count')}> Likes</span>
                        </p>
                    </div>
                </div>
                
            </PopperWrapper>
        </div>
    );

    return (
        <Tippy
            interactive
            appendTo={() => document.body}
            delay={[800, 0]}
            placement="bottom-start"
            render={renderPreview}
        >
            <div className={cx('account-item')}>
                <Image
                    className={cx('avatar')}
                    src="https://i.pinimg.com/originals/c3/5e/68/c35e683be5f16ccfaeb6e48a0a197e99.jpg"
                    alt="hung dep trai"
                />
                <div className={cx('item-info')}>
                    <p className={cx('nickname')}>
                        <strong>hungdeptrai</strong>
                        <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                    </p>
                    <p className={cx('name')}>Tran Duy Hung</p>
                </div>
            </div>
        </Tippy>
    );
}

AccountItem.propTypes = {};

export default AccountItem;
