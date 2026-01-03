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

function AccountItem({ data, showPreview }) {
    const renderPreview = (attr) => {
        return (
            <div className={cx('info-view')} tabIndex={-1} {...attr}>
                <PopperWrapper>
                    <div className={cx('preview-header')}>
                        <Image className={cx('info-avata')} src={data.avatar} alt={data.nickname} />
                        <div className={cx('info-btn')}>
                            <Button primary>Follow</Button>
                        </div>
                    </div>
                    <div className={cx('preview-body')}>
                        <p className={cx('info-nickname')}>
                            <strong>{data.nickname}</strong>
                            {data.tick && <FontAwesomeIcon className={cx('preview-check')} icon={faCheckCircle} />}
                        </p>
                        <p className={cx('info-name')}>{data.full_name}</p>
                        <div className={cx('follower-like')}>
                            <p className={cx('follower')}>
                                <strong>{data.followers_count}</strong>
                                <span className={cx('count')}> Followers</span>
                            </p>
                            <p className={cx('like')}>
                                <strong>{data.likes_count}</strong>
                                <span className={cx('count')}> Likes</span>
                            </p>
                        </div>
                    </div>
                </PopperWrapper>
            </div>
        );
    };
    const accountItem = (
        <div className={cx('account-item')}>
            <Image className={cx('avatar')} src={data.avatar} alt={data.nickname} />
            <div className={cx('item-info')}>
                <p className={cx('nickname')}>
                    <strong>{data.nickname}</strong>
                    {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                </p>
                <p className={cx('name')}>{data.full_name}</p>
            </div>
        </div>
    );

    if (!showPreview) {
        return accountItem;
    } else {
        return (
            <Tippy
                interactive
                appendTo={() => document.body}
                delay={[800, 0]}
                placement="bottom-start"
                render={renderPreview}
            >
                {accountItem}
            </Tippy>
        );
    }
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
    showPreview: PropTypes.bool.isRequired,
};

export default AccountItem;
