import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './Videos.module.scss';
import { forwardRef, useState, useRef, useEffect } from 'react';
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
import Menu from './Menu';
import Share from '../Share';

const cx = classNames.bind(styles);

const VideoItem = forwardRef(({ data, isFollow, isMuted, onToggleMuted }, ref) => {
    const [play, setPlay] = useState(true);
    const [follow, setFollow] = useState(isFollow);
    const [like, setLike] = useState(false);
    const [likeCount, setLikeCount] = useState(data.likes_count);
    const [favorite, setFavorite] = useState(false);
    const [favoriteCount, setFavoritesCount] = useState(data.favorites_count);
    const [isOpenMenu, setIsOpenMenu] = useState(false)
    const [isOpenShare, setIsOpenShare] = useState(false)
    

    const videoRef = useRef();

    //handle Muted
    const handleToggleSound = () => {
        onToggleMuted()
    };

    useEffect(() => {
        if(!videoRef.current) return
        videoRef.current.muted = isMuted
    },[isMuted])

    //handle Scroll Auto Play video

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

    //handle Action Video

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

    //handle open/close Menu
    const handleOpenMenu = () => {
        setIsOpenMenu(!isOpenMenu)
    }

    useEffect(() => {   
        const handleScroll = () =>  setIsOpenMenu(false)

        window.addEventListener('scroll', handleScroll, true)

        return () =>  window.removeEventListener('scroll', handleScroll, true)

    },[])

    //handle open/close Share
    const handleOpenShare = () => {
        setIsOpenShare(!isOpenShare)
    }


    return (
        <div className={cx('video-container')} >
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
            <div className={cx('volume',{
                active: isMuted
            })} onClick={handleToggleSound} >
                {isMuted ? <FontAwesomeIcon icon={faVolumeXmark} /> : <FontAwesomeIcon icon={faVolumeLow} />}
            </div>
            
                <Menu visible={isOpenMenu} onClose={() => setIsOpenMenu(false)}>
                    <div className={cx('menu',{
                        active: isOpenMenu
                    })}
                    onClick={handleOpenMenu}
                    >
                        <FontAwesomeIcon icon={faEllipsis} />
                    </div>
                </Menu>
            
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
                <div className={cx('container')} onClick={handleOpenShare}>
                    {isOpenShare && <Share /> }
                    <div className={cx('share')}>
                        <ShareIcon />
                    </div>
                    <strong className={cx('shares-count')}>{data.shares_count}</strong>
                </div>
            </div>
        </div>
    );
})

VideoItem.propTypes = {
    data: PropTypes.shape({
        video_url: PropTypes.string.isRequired,
        likes_count: PropTypes.number,
        favorites_count: PropTypes.number,
        comments_count: PropTypes.number,
        shares_count: PropTypes.number,
        description: PropTypes.string,
        created_at: PropTypes.string,
        user: PropTypes.shape({
            nickname: PropTypes.string,
            avatar: PropTypes.string
        })

    }).isRequired,
    isFollow: PropTypes.bool.isRequired
}

export default VideoItem;
