import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './Videos.module.scss';
import VideoItem from './VideoItem';
import { useEffect, useRef, useState } from 'react';


const cx = classNames.bind(styles);


function Videos({ data, isFollow, hasMore, onLoadMore }) {
    
    const[isMuted, setIsMuted] = useState(true)

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
                        isMuted={isMuted}
                        onToggleMuted={() => setIsMuted(pre => !pre)}
                       
                    />

                )
            })}
        </div>
    );
}

Videos.propTypes = {    
    data: PropTypes.array.isRequired,
    isFollow: PropTypes.bool.isRequired,
    hasMore: PropTypes.bool.isRequired,
    onLoadMore: PropTypes.func.isRequired
}

export default Videos;
