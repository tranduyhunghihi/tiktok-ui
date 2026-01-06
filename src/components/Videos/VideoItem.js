import classNames from 'classnames/bind';

import styles from './Videos.module.scss';
import { forwardRef, useState, useImperativeHandle, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faVolumeLow, faVolumeXmark } from '@fortawesome/free-solid-svg-icons';
import {
    CheckIcon,
    CommentIcon,
    FavoritesActiveIcon,
    FavoritesIcon,
    FollowIcon,
    HeartActiveIcon,
    HeartIcon,
    ShareIcon,
} from '../Icons';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function VideoItem({ data, isFollow }, ref) {
    const [mute, setMute] = useState(true);
    const [play, setPlay] = useState(true);
    const [follow, setFollow] = useState(isFollow);
    const [like, setLike] = useState(false);
    const [likeCount, setLikeCount] = useState(data.likes_count);
    const [favorite, setFavorite] = useState(false);
    const [favoriteCount, setFavoritesCount] = useState(data.favorites_count);

    const videoRef = useRef();

    useImperativeHandle(ref, () => {
        return videoRef.current;
    });
    const handleToggleSound = () => {
        if (!videoRef.current) return;

        videoRef.current.muted = !videoRef.current.muted;
        setMute(videoRef.current.muted);
    };

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.intersectionRatio >= 0.7) {
                    video.play();
                } else {
                    video.pause();
                }
            },
            {
                threshold: 0.7,
            },
        );
        observer.observe(video);

        return () => observer.disconnect();
    }, []);

    const handleToggleVideo = () => {
        if (play) {
            videoRef.current.pause();
            setPlay(!play);
        } else {
            videoRef.current.play();
            setPlay(!play);
        }
    };

    const handleLike = () => {
        if (like) {
            setLikeCount(likeCount - 1);
            setLike(!like);
        } else {
            setLikeCount(likeCount + 1);
            setLike(!like);
        }
    };

    const handleFavorite = () => {
        if (favorite) {
            setFavoritesCount(favoriteCount - 1);
            setFavorite(!favorite);
        } else {
            setFavoritesCount(favoriteCount + 1);
            setFavorite(!favorite);
        }
    };

    const handleFollow = () => {
        setFollow(!follow);
    };

    return (
        <div className={cx('video-container')}>
            <video
                ref={(el) => {
                    videoRef.current = el;
                    if (typeof ref === 'function') ref(el);
                    else if (ref) ref.current = el;
                }}
                className={cx('video-item')}
                src={data.video_url}
                muted
                loop
                playsInline
                onClick={handleToggleVideo}
            />
            <div className={cx('volume')} onClick={handleToggleSound}>
                {mute ? <FontAwesomeIcon icon={faVolumeXmark} /> : <FontAwesomeIcon icon={faVolumeLow} />}
            </div>
            <div className={cx('menu')}>
                <FontAwesomeIcon icon={faEllipsis} />
            </div>
            <div className={cx('cretory-info')}>
                <div className={cx('cretory-nickname')}>{data.user.nickname}</div>
                <div className={cx('cretory-date')}>{data.created_at}</div>
            </div>
            <div className={cx('cretory-description')}>{data.description}</div>
            <div className={cx('action')}>
                <div className={cx('avatar-box')}>
                    <Image className={cx('avatar')} src={data.user.avatar} alt={data.user.nickname} />
                    {!follow ? (
                        <div className={cx('follow')} onClick={handleFollow}>
                            <FollowIcon />
                        </div>
                    ) : (
                        <div className={cx('un-follow')} onClick={handleFollow}>
                            <CheckIcon />
                        </div>
                    )}
                </div>
                <div className={cx('container')} onClick={handleLike}>
                    <div className={cx('like')}>{!like ? <HeartIcon /> : <HeartActiveIcon />}</div>
                    <strong className={cx('likes-count')}>{likeCount}</strong>
                </div>
                <div className={cx('container')}>
                    <div className={cx('comment')}>
                        <CommentIcon />
                    </div>
                    <strong className={cx('comments-count')}>{data.comments_count}</strong>
                </div>
                <div className={cx('container')} onClick={handleFavorite}>
                    <div className={cx('favorite')}>{!favorite ? <FavoritesIcon /> : <FavoritesActiveIcon />}</div>
                    <strong className={cx('favorites-count')}>{favoriteCount}</strong>
                </div>
                <div className={cx('container')}>
                    <div className={cx('share')}>
                        <ShareIcon />
                    </div>
                    <strong className={cx('shares-count')}>{data.shares_count}</strong>
                </div>
            </div>
        </div>
    );
}

export default forwardRef(VideoItem);
