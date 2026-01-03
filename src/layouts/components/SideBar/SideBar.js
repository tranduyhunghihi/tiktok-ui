import classNames from 'classnames/bind';
import styles from './SideBar.module.scss';
import config from '~/config';
import {
    FollowingIcon,
    FollowingActiveIcon,
    HomeIcon,
    HomeActiveIcon,
    LiveIcon,
    LiveActiveIcon,
} from '~/components/Icons';

import Menu, { MenuItem } from './Menu';
import SuggestedAccounts from '~/components/SuggestedAccounts';
import { useEffect, useState } from 'react';
import * as previewService from '~/services/previewService';

const cx = classNames.bind(styles);

function SideBar() {
    const [infoPreview, setInfoPreview] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const preview = await previewService.preview();
            setInfoPreview(preview.data);
        };

        fetchData();
    }, []);


    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For you" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<FollowingIcon />}
                    activeIcon={<FollowingActiveIcon />}
                />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
            </Menu>
            <SuggestedAccounts label="Suggested accounts" data={infoPreview} showPreview={true} />
            <SuggestedAccounts label="Following accounts" data={infoPreview} showPreview={false}/>
        </aside>
    );
}

export default SideBar;
