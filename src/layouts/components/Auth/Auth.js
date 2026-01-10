/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import classNames from 'classnames/bind';

import styles from './Auth.module.scss';
import { AppleIcon, FacebookIcon, GoogleIcon, KakaoTalkIcon, LineIcon, QRIcon, UserIcon } from '~/components/Icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const cx = classNames.bind(styles);

const SIGN_UP = [
    {
        icon: <UserIcon />,
        title: 'Use phone or email',
    },
    {
        icon: <FacebookIcon />,
        title: 'Continue with FaceBook',
    },
    {
        icon: <GoogleIcon />,
        title: 'Continue with Google',
    },
    {
        icon: <LineIcon />,
        title: 'Continue with LINE',
    },
    {
        icon: <KakaoTalkIcon />,
        title: 'Continue with KakaoTalk',
    },
];

const LOGIN = [
    {
        icon: <QRIcon />,
        title: 'Use QR code',
    },
    ...SIGN_UP,
    {
        icon: <AppleIcon />,
        title: 'Continue with Apple',
    },
];

function Auth({ onBack }) {
    const [showLogin, setShowLogin] = useState(true);

    const handleSwitch = () => {
        setShowLogin(!showLogin);
    };

    return (
        <div className={cx('layout')}>
            <div className={cx('wrapper')}>
                <header className={cx('auth-header')}>
                    <div className={cx('btn-close')} onClick={onBack}>
                        <FontAwesomeIcon className={cx('icon')} icon={faXmark} />
                    </div>
                </header>
                <h2 className={cx('auth-label')}>{showLogin ? 'Log in to TikTok' : 'Sign up for TikTok'}</h2>
                <div className={cx('auth-box')}>
                    {showLogin
                        ? LOGIN.map((item, index) => (
                              <div key={index} className={cx('auth-container')}>
                                  <div className={cx('auth-icon')}>{item.icon}</div>
                                  <div className={cx('auth-title')}>{item.title}</div>
                              </div>
                          ))
                        : SIGN_UP.map((item, index) => (
                              <div key={index} className={cx('auth-container')}>
                                  <div className={cx('auth-icon')}>{item.icon}</div>
                                  <div className={cx('auth-title')}>{item.title}</div>
                              </div>
                          ))}
                </div>
                <div className={cx('policy')}>
                    <p className={cx('auth-policy')}>
                        By continuing with an account located in
                        <a> Vietnam </a>, you agree to our
                        <a className={cx('policy-link')}> Terms of Service </a>
                        and acknowledge that you have read our
                        <a className={cx('policy-link')}> Privacy Policy </a>
                    </p>
                </div>
                <footer className={cx('auth-bottom')}>
                    <p className={cx('bottom-text')}>
                        {showLogin ? `Don't have an account? ` : `Already have an account? `}
                    </p>
                    <a className={cx('switch')} onClick={handleSwitch}>
                        {showLogin ? 'Sign up' : 'Log in'}
                    </a>
                </footer>
            </div>
        </div>
    );
}

export default Auth;
