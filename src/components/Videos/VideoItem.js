import classNames from 'classnames/bind';

import styles from './Videos.module.scss';
import { forwardRef, useState, useImperativeHandle, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeLow, faVolumeXmark } from '@fortawesome/free-solid-svg-icons';


const cx = classNames.bind(styles);

function VideoItem({ data }, ref) {
    const [mute, setMute] = useState(true);

    const videoRef = useRef()

    useImperativeHandle(ref,() => {
        return videoRef.current;
    } )
    const handleToggleSound = () => {
        if(!videoRef.current) return

        videoRef.current.muted = !videoRef.current.muted;
        setMute(videoRef.current.muted)
    };

    return (
        <div className={cx('video-container')}>
            <video ref={videoRef} className={cx('video-item')} src={data.video_url} muted loop playsInline />
            <div className={cx('volume')} onClick={handleToggleSound}>
                {mute ? <FontAwesomeIcon icon={faVolumeXmark} /> : <FontAwesomeIcon icon={faVolumeLow} />}
            </div>
        </div>
    );
}

export default forwardRef(VideoItem);
