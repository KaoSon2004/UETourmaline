import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Search from '../Search';
const cx = classNames.bind(styles);
function Header() {
    const { isLoggedIn } = useSelector((state) => state.auth);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('search')}>
                <Search />
            </div>

            <div className={cx('user')}>
                {isLoggedIn ? (
                    <>
                        {' '}
                        <p className={cx('user-name')}>username</p>
                        <Link to={'/profile'}>
                            <img
                                alt="User Avatar"
                                className={cx('user-avatar')}
                                src="https://t4.ftcdn.net/jpg/02/51/95/53/360_F_251955356_FAQH0U1y1TZw3ZcdPGybwUkH90a3VAhb.jpg"
                            ></img>
                        </Link>
                    </>
                ) : (
                    <>
                        <Link to={'login'}>Đăng nhập</Link>
                    </>
                )}
            </div>
        </div>
    );
}

export default Header;
