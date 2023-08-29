import config from '~/config';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Tippy from '@tippyjs/react';
// import tippy css
import 'tippy.js/dist/tippy.css';
import Menu from '~/components/Popper/Menu';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faUser,
    faCoins,
    faGear,
    faSignOut,
    faChevronDown,
    faCartShopping,
} from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import { InboxIcon, UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';

const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        tittle: 'English',
        children: {
            tittle: 'Language',
            data: [
                {
                    code: 'en',
                    tittle: 'Engligh',
                },
                {
                    code: 'vi',
                    tittle: 'Tiếng việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        tittle: 'Feedback and Help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        tittle: 'Keyboard shortcuts',
    },
];

const USER_MENU = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        tittle: 'View profile',
        to: '/@datt',
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        tittle: 'Get clearoins',
        to: '/coin',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        tittle: 'Settings',
        to: '/settings',
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faSignOut} />,
        tittle: 'Log out',
        to: '/logout',
        separate: true,
    },
];

const handleMenuChange = (menuItem) => {
    console.log(menuItem);
};

function Header({ noNav }) {
    const currentUser = true;

    return (
        <header className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('logo')}>
                    <Link to={config.routes.home} className={cx('logo-link')}>
                        {/* <img className={cx('logo-image')} src={images.logo} alt="Tiktok" /> */}
                        <ul className={cx('logo-image')}>
                            <li>B</li>
                            <li>A</li>
                            <li>R</li>
                            <li>O</li>
                            <li>I</li>
                            <li>B</li>
                            <li>E</li>
                            <li>O</li>
                        </ul>
                    </Link>
                </div>

                {!noNav ? (
                    <nav className={cx('nav-list')}>
                        <HeadlessTippy
                            interactive
                            render={(attrs) => (
                                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                    <PopperWrapper>
                                        <>
                                            <Link to={'/'} className={cx('nav-scroll')}>
                                                Giới thiệu
                                            </Link>
                                            <Link to={'/'} className={cx('nav-scroll')}>
                                                Thời gian hoạt động
                                            </Link>
                                            <Link to={'/'} className={cx('nav-scroll')}>
                                                Menu quán
                                            </Link>
                                            <Link to={'/'} className={cx('nav-scroll')}>
                                                Bình luận
                                            </Link>
                                            <Link to={'/'} className={cx('nav-scroll')}>
                                                Hình ảnh quán
                                            </Link>
                                        </>
                                    </PopperWrapper>
                                </div>
                            )}
                        >
                            <Link to={config.routes.home} className={cx('nav-link')}>
                                <div className={cx('nav-content')}>
                                    Home <FontAwesomeIcon className={cx('chevrondown-icon')} icon={faChevronDown} />
                                </div>
                            </Link>
                        </HeadlessTippy>

                        <Link to={config.routes.product} className={cx('nav-link')}>
                            <div className={cx('nav-content')}>Product</div>
                        </Link>
                        <Link to={config.routes.contact} className={cx('nav-link')}>
                            <div className={cx('nav-content')}>Contact</div>
                        </Link>
                        <Link to={config.routes.aboutUs} className={cx('nav-link')}>
                            <div className={cx('nav-content')}>AboutUs</div>
                        </Link>
                        <Link to={config.routes.blog} className={cx('nav-link')}>
                            <div className={cx('nav-content')}>Blog</div>
                        </Link>
                    </nav>
                ) : (
                    <></>
                )}

                <Search />

                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Tippy content="Upload Video">
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faCartShopping} />
                                </button>
                            </Tippy>
                            <Tippy content="Message">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>UpLoad</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}

                    <Menu items={currentUser ? USER_MENU : MENU_ITEMS} onClick={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src={images.defaultImage}
                                alt="Bui Tien Dat"
                                fallback="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/725be115c478adad12e9245e23511fb4~c5_100x100.jpeg?x-expires=1688551200&x-signature=q6dvtupt6uiVvYsDL54NYtJ61sw%3D"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
