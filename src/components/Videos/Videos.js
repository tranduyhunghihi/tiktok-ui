import classNames from 'classnames/bind';

import styles from './Videos.module.scss';
import VideoItem from './VideoItem';
import { useEffect, useRef } from 'react';


const cx = classNames.bind(styles);


function Videos({ data, isFollow, hasMore, onLoadMore }) {
    const lastVideoRef = useRef()

    

    useEffect(() => {
        if(!lastVideoRef.current || !hasMore) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if(entry.isIntersecting){
                      
                    onLoadMore()
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.7
            }
        )

        observer.observe(lastVideoRef.current)

        return () => observer.disconnect()
    },[data, hasMore, onLoadMore])

    return (
        <div className={cx('wrapper')}>
            {data.map((video, index) => {
                const isLast = index === data.length - 1 
                // if (isLast) console.log('DAY LA VIDEO CUOI')

                return (
                    <VideoItem
                        ref={
                            // (el) => (videoRefs.current[index] = el)
                            isLast ? lastVideoRef : null
                        }
                        key={`${video.id}-${index}`}
                        data={video}
                        isFollow={isFollow}
                    />

                )
            })}
        </div>
    );
}

export default Videos;
