import classNames from 'classnames/bind';

import styles from './Videos.module.scss';
import VideoItem from './VideoItem';
import { useEffect, useRef } from 'react';


const cx = classNames.bind(styles);


function Videos({ data, isFollow }) {
    const videoRefs = useRef([])

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const video = entry.target;
                    if(!video) return;

                    if(entry.intersectionRatio >= 0.7){
                        video.play()
                    }else{
                        video.pause()
                    }
                })
            },
            {
                threshold: 0.7,
            }
        )
        videoRefs.current.forEach((video) => {
            if(video) observer.observe(video)
        })

        return () => observer.disconnect()
    }, [data])


    return (
        <div className={cx('wrapper')}>
            {data.map((video, index) => (
                <VideoItem
                    ref={(el) => (videoRefs.current[index] = el)}
                    key={video.id}
                    data={video}
                    isFollow={isFollow}
                />
            ))}
        </div>
    );
}

export default Videos;
