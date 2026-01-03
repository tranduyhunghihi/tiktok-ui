import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './SuggestedAccount.module.scss';
import AccountItem from './AccountItem';
import { useState } from 'react';

const cx = classNames.bind(styles);

function SuggestedAccounts({ label, data=[], showPreview=false}) {

    const [showAll, setShowAll] = useState(false);


    const visibleAccounts = showAll ? data.slice(0, 8) : data.slice(0, 3);


    return (
        <div className={cx('wrapper')}>
            <p className={cx('label', 'separate')}>{label}</p>
            {visibleAccounts.map((info) => (
                <AccountItem key={info.id} data={info} showPreview={showPreview} />
            ))}

            {data.length > 3 && (
                <p className={cx('more-btn')} onClick={() => setShowAll((pre) => !pre)}>
                    {showAll ? 'See less' : 'See all'}
                </p>
            )}
        </div>
    );
}

SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired
};

export default SuggestedAccounts;
