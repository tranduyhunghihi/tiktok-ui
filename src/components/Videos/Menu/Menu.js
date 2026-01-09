import Tippy from '@tippyjs/react/headless';
import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import {
    NotAutoScrollIcon,
    AutoScrollIcon,
    CaptionsIcon,
    FloatingIcon,
    NotInterestingIcon,
    QualityIcon,
    ReportIcon,
} from '~/components/Icons';

const cx = classNames.bind(styles);

function Menu({ children, visible, onClose }) {
    const [enabled, setEnabled] = useState(false);

    



    const renderResult = (attrs) => (
        <div className={cx('wrapper')} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx('menu')}>
                <div className={cx('box-action')}>
                    <QualityIcon className={cx('action-icon')} />
                    <div className={cx('action-title')}>Quality</div>
                    <div className={cx('action-des')}>Auto</div>
                </div>
                <div className={cx('box-action')}>
                    <CaptionsIcon className={cx('action-icon')} />
                    <div className={cx('action-title')}>Captions</div>
                </div>
                <div className={cx('box-action')}>
                    {enabled ? <AutoScrollIcon className={cx('action-icon')} /> : <NotAutoScrollIcon className={cx('action-icon')}/>}
                    <div className={cx('action-title')}>Auto scroll</div>
                    <div className={cx('action-des')}>
                        <div className={cx('toggle')}>
                            <input
                                type="checkbox"
                                id="autoplay"
                                checked={enabled}
                                onChange={() => setEnabled(!enabled)}
                            />
                            <label htmlFor="autoplay" />
                        </div>
                    </div>
                </div>
                <div className={cx('box-action')}>
                    <FloatingIcon className={cx('action-icon')} />
                    <div className={cx('action-title')}>Floating Player</div>
                </div>
                <div className={cx('box-action')}>
                    <NotInterestingIcon className={cx('action-icon')} />
                    <div className={cx('action-title')}>Not interested</div>
                </div>
                <div className={cx('box-action')}>
                    <ReportIcon className={cx('action-icon')} />
                    <div className={cx('action-title')}>Report</div>
                </div>
            </PopperWrapper>
        </div>
    );

    return (
        <Tippy
            appendTo={() => document.body}
            interactive
            placement="bottom-end"
            render={renderResult}
            visible={visible}
            onClickOutside={onClose}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
