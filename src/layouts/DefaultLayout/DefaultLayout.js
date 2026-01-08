import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Header from '../components/Header';
import styles from './DefaultLayout.module.scss';
import SideBar from '~/layouts/components/SideBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {

    

    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <SideBar />
                <div className={cx('content')}>{children}</div>
                <div className={cx('btn-direction')}>
                    <div className={cx('btn-up')}>
                        <FontAwesomeIcon icon={faAngleUp} />
                    </div>
                    <div className={cx('btn-down')}>
                        <FontAwesomeIcon icon={faAngleDown} />
                    </div>
                </div>
            </div>
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
