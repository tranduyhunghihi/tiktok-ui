import { forwardRef, useState } from 'react';
import images from '~/asset/image';
import styles from './Image.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

function Image({ src, alt, className, ...props }, ref) {
    const [fallBack, setFallBack] = useState('');

    const handleError = () => {
        setFallBack(images.noImage);
    };
    // eslint-disable-next-line jsx-a11y/alt-text
    return (
        <img
            className={classNames(styles.wrapper, className)}
            src={fallBack || src}
            alt={alt}
            ref={ref}
            {...props}
            onError={handleError}
        />
    );
}

Image.propsTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
}


export default forwardRef(Image);
