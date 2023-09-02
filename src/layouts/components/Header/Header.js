import config from '~/config';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';

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
import { useEffect, useRef, useState } from 'react';
import AuthForm from '../AuthForm/AuthForm';

const cx = classNames.bind(styles);

const handleMenuChange = (menuItem) => {
    console.log(menuItem);
};

function Header({ isHomePage = false }) {
    const inputMobile = useRef();
    const currentUser = false;
    const hasCart = true;
    const [showSignIn, setShowSignIn] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false);

    useEffect(() => {
        inputMobile.current.checked = false;
    });

    const handleScroll = () => {
        // Xử lý  khi trang được cuộn
        inputMobile.current.checked = false;
    };

    useEffect(() => {
        // Gắn hàm xử lý sự kiện cuộn khi component mount
        window.addEventListener('scroll', handleScroll);

        // Gỡ bỏ hàm xử lý sự kiện khi component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const showSignInForm = (value = true) => {
        setShowSignIn(value);
    };

    const showSignUpForm = (value = true) => {
        setShowSignUp(value);
    };

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
            tittle: 'Đăng nhập',
            separate: true,
            onClick: showSignInForm,
            noIcon: true,
        },
        {
            tittle: 'Đăng ký',
            onClick: showSignUpForm,
            noIcon: true,
        },
    ];

    const USER_MENU = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            tittle: 'View profile',
            to: '/@datt',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            tittle: 'Settings',
            to: '/settings',
        },
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
            icon: <FontAwesomeIcon icon={faSignOut} />,
            tittle: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('container')}>
                {showSignIn ? (
                    <AuthForm signIn showSignInForm={showSignInForm} showSignUpForm={showSignUpForm} />
                ) : (
                    <></>
                )}
                {showSignUp ? (
                    <AuthForm signUp showSignInForm={showSignInForm} showSignUpForm={showSignUpForm} />
                ) : (
                    <></>
                )}

                <input
                    ref={inputMobile}
                    hidden
                    type="checkbox"
                    id="nav__mobile-input"
                    className={cx('input-hidden-mobile')}
                />

                <label htmlFor="nav__mobile-input" className={cx('header_menu-mobile-btn')}>
                    <span></span>
                    <span></span>
                    <span></span>
                </label>

                <label htmlFor="nav__mobile-input" className={cx('nav__overplay')}></label>

                <div className={cx('nav-wrapper')}>
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

                            <div className={cx('logo-mobile')}>Baroibeo Bakery </div>
                        </Link>
                    </div>

                    <nav className={cx('nav-list')}>
                        {isHomePage ? (
                            <>
                                <HeadlessTippy
                                    interactive
                                    render={(attrs) => (
                                        <div tabIndex="-1" {...attrs}>
                                            <PopperWrapper>
                                                <>
                                                    <a href={'#Introduce'} className={cx('nav-scroll')}>
                                                        Giới thiệu
                                                    </a>
                                                    <a href={'#DiscoverMenu'} className={cx('nav-scroll')}>
                                                        Khám phá menu
                                                    </a>
                                                    <a href={'#Comment'} className={cx('nav-scroll')}>
                                                        Bình luận
                                                    </a>
                                                    <a href={'#ServiceTime'} className={cx('nav-scroll')}>
                                                        Thời gian hoạt động
                                                    </a>
                                                    <a href="#ImageShop" className={cx('nav-scroll')}>
                                                        Hình ảnh quán
                                                    </a>
                                                </>
                                            </PopperWrapper>
                                        </div>
                                    )}
                                >
                                    <Link to={config.routes.home} className={cx('nav-home', 'nav-link')}>
                                        <div className={cx('nav-content')}>
                                            Home
                                            <FontAwesomeIcon
                                                className={cx('nav-home-icon', 'chevrondown-icon')}
                                                icon={faChevronDown}
                                            />
                                        </div>
                                    </Link>
                                </HeadlessTippy>

                                <Link to={config.routes.home} className={cx('nav-home-mobile', 'nav-link')}>
                                    <div className={cx('nav-content')}>Home</div>
                                </Link>
                                <ul className={cx('nav-mobile-list')}>
                                    <li className={cx('nav-mobile-item')}>
                                        <a href={'#Introduce'}>Giới thiệu</a>
                                    </li>
                                    <li className={cx('nav-mobile-item')}>
                                        <a href={'#DiscoverMenu'}>Khám phá menu</a>
                                    </li>
                                    <li className={cx('nav-mobile-item')}>
                                        <a href={'#Comment'}>Bình luận</a>
                                    </li>
                                    <li className={cx('nav-mobile-item')}>
                                        <a href={'#ServiceTime'}>Thời gian hoạt động</a>
                                    </li>
                                    <li className={cx('nav-mobile-item')}>
                                        <a href="#ImageShop">Hình ảnh quán</a>
                                    </li>
                                </ul>
                            </>
                        ) : (
                            <Link to={config.routes.home} className={cx('nav-link')}>
                                <div className={cx('nav-content')}>Home</div>
                            </Link>
                        )}
                        <Link to={config.routes.aboutUs} className={cx('nav-link')}>
                            <div className={cx('nav-content')}>AboutUs</div>
                        </Link>

                        <Link to={config.routes.product} className={cx('nav-link')}>
                            <div className={cx('nav-content')}>Product</div>
                        </Link>
                        <Link to={config.routes.contact} className={cx('nav-link')}>
                            <div className={cx('nav-content')}>Contact</div>
                        </Link>
                        {/* <Link to={config.routes.aboutUs} className={cx('nav-link')}>
                                <div className={cx('nav-content')}>Blog</div>
                            </Link> */}
                    </nav>
                </div>

                <Search />

                <div className={cx('action')}>
                    <HeadlessTippy
                        interactive
                        placement="bottom-end"
                        offset={[3, 17]}
                        render={(attrs) => (
                            <div className={cx('cart-result')} tabIndex="-1" {...attrs}>
                                <PopperWrapper arrow>
                                    {hasCart ? (
                                        <div className={cx('cart__has-cart')}>
                                            <h4 className={cx('cart-tittle')}>Sản phẩm đã thêm</h4>
                                            <ul className={cx('cart-list')}>
                                                <li className={cx('cart-item')}>
                                                    <img
                                                        className={cx('cart-img')}
                                                        src={images.cake.creamCake}
                                                        alt=""
                                                    />
                                                    <div className={cx('cart-info')}>
                                                        <div className={cx('cart-heading')}>
                                                            <h5 className={cx('cart-name')}>Bánh crep thơm ngon</h5>
                                                            <div className={cx('cart-price-wrapper')}>
                                                                <span className={cx('cart-price')}>2.000.000đ</span>
                                                                <span className={cx('cart-multiply')}>x</span>
                                                                <span className={cx('cart-qnt')}>2</span>
                                                            </div>
                                                        </div>

                                                        <div className={cx('cart-body')}>
                                                            <span className={cx('cart-desc')}>
                                                                Phân loại: Bánh ngọt
                                                            </span>
                                                            <span className={cx('cart-delete')}>Xóa</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className={cx('cart-item')}>
                                                    <img
                                                        className={cx('cart-img')}
                                                        src={images.cake.creamCake}
                                                        alt=""
                                                    />
                                                    <div className={cx('cart-info')}>
                                                        <div className={cx('cart-heading')}>
                                                            <h5 className={cx('cart-name')}>Bánh crep thơm ngon</h5>
                                                            <div className={cx('cart-price-wrapper')}>
                                                                <span className={cx('cart-price')}>2.000.000đ</span>
                                                                <span className={cx('cart-multiply')}>x</span>
                                                                <span className={cx('cart-qnt')}>2</span>
                                                            </div>
                                                        </div>

                                                        <div className={cx('cart-body')}>
                                                            <span className={cx('cart-desc')}>
                                                                Phân loại: Bánh ngọt
                                                            </span>
                                                            <span className={cx('cart-delete')}>Xóa</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className={cx('cart-item')}>
                                                    <img
                                                        className={cx('cart-img')}
                                                        src={images.cake.creamCake}
                                                        alt=""
                                                    />
                                                    <div className={cx('cart-info')}>
                                                        <div className={cx('cart-heading')}>
                                                            <h5 className={cx('cart-name')}>Bánh crep thơm ngon</h5>
                                                            <div className={cx('cart-price-wrapper')}>
                                                                <span className={cx('cart-price')}>2.000.000đ</span>
                                                                <span className={cx('cart-multiply')}>x</span>
                                                                <span className={cx('cart-qnt')}>2</span>
                                                            </div>
                                                        </div>

                                                        <div className={cx('cart-body')}>
                                                            <span className={cx('cart-desc')}>
                                                                Phân loại: Bánh ngọt
                                                            </span>
                                                            <span className={cx('cart-delete')}>Xóa</span>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                            <Button primary className={cx('cart-button')}>
                                                Xem giỏ hàng
                                            </Button>
                                        </div>
                                    ) : (
                                        <div className={cx('cart__no-cart')}>
                                            <img src={images.noCart} alt="" />
                                            <span>Chưa có sản phẩm</span>
                                        </div>
                                    )}
                                </PopperWrapper>
                            </div>
                        )}
                    >
                        <button className={cx('shopping-btn')}>
                            <FontAwesomeIcon icon={faCartShopping} />
                            <span className={cx('cart-quality')}>1</span>
                        </button>
                    </HeadlessTippy>

                    <Menu arrow items={currentUser ? USER_MENU : MENU_ITEMS} onClick={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src={images.defaultImage}
                                alt="Bui Tien Dat"
                                fallback="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/725be115c478adad12e9245e23511fb4~c5_100x100.jpeg?x-expires=1688551200&x-signature=q6dvtupt6uiVvYsDL54NYtJ61sw%3D"
                            />
                        ) : (
                            <div className={cx('user-icon')}>
                                <FontAwesomeIcon icon={faUser} />
                            </div>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
