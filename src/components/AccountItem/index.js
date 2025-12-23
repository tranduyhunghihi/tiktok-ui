import classNames from "classnames/bind";
import styles from './AccountItem.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";


const cx = classNames.bind(styles)

function AccountItem() {
    return ( 
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://i.pinimg.com/originals/c3/5e/68/c35e683be5f16ccfaeb6e48a0a197e99.jpg"  alt="hung dep trai"/>
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Tran Duy Hung</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />
                </h4>
                <span className={cx('username')}>tranduyhung</span>
            </div>
        </div>
     );
}

export default AccountItem;