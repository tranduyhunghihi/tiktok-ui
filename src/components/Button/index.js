import { faL } from '@fortawesome/free-solid-svg-icons'
import styles from './Button.module.scss'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)

function Button({ 
    to,
    href,
    primary = false,
    outline = false,
    text = false,
    small = false,
    large = false,
    rounded = false,
    children ,
    disabled,   
    className,
    leftIcon,
    rightIcon,
    onClick ,
    ...passProps
        }) {

    let Comp = 'button'
    const props = {
        onClick,
        ...passProps
    }
    if(disabled){
        Object.keys(props).forEach(key => {
            if(key.startsWith('on') && typeof(key) ==='function' ){
                delete props[key];
            }
        })
    }
    if(to){
        props.to = to;
        Comp = Link
    }else if(href){
        props.href = href;
        Comp = 'a'
    }
    const classes = cx('wrapper' ,{
        primary,
        outline,
        small,
        large,
        text,
        [className]: className,
        disabled,
        rounded
    })
    return (  
        <Comp className={classes} {...props} >
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}

        </Comp>

    )
}

export default Button;