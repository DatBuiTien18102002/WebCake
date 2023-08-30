import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

Footer.propTypes = {};

const cx = classNames.bind(styles);

function Footer(props) {
    return (
        <footer className={cx('footer')}>
            <div className={cx('footer-wrapper')}>
                <div className={cx('container')}>
                    <div className="row gx-5">
                        <div className="col-md-5">
                            <div className={cx('footer-logo')}>
                                <img src={images.logo} alt="" />
                            </div>

                            <div className={cx('footer-desc')}>
                                Chúng tôi luôn mong muốn mang đến cho khách hàng những trải nghiệm tốt nhất, tạo ra
                                những khoảng khắc khó quên khi đến Baroibeo bakery.
                            </div>

                            <div className={cx('footer-social')}>
                                <a href="https://twitter.com/" className={cx('footer-social-link')}>
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                                <a href="https://facebook.com/" className={cx('footer-social-link')}>
                                    <FontAwesomeIcon icon={faFacebook} />
                                </a>
                                <a href="https://Instagram.com/" className={cx('footer-social-link')}>
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                                <a href="https://tiktok.com/" className={cx('footer-social-link')}>
                                    <FontAwesomeIcon icon={faTiktok} />
                                </a>
                                <a href="https://youtube.com/" className={cx('footer-social-link')}>
                                    <FontAwesomeIcon icon={faYoutube} />
                                </a>
                            </div>
                        </div>
                        <div className="col-md-7 d-flex align-items-center">
                            <div>
                                <div className={cx('footer-location')}>
                                    <div className={cx('footer-tittle')}>Hệ thống cửa hàng</div>
                                    <div className={cx('footer-address')}>
                                        <FontAwesomeIcon className={cx('footer-icon')} icon={faLocationDot} />
                                        <div className={cx('footer-text')}>
                                            CH1: 125/2 Hòa Hưng, Phường 10, Quận 10, TP.HCM, Việt Nam
                                        </div>
                                    </div>
                                    <div className={cx('footer-address')}>
                                        <FontAwesomeIcon className={cx('footer-icon')} icon={faLocationDot} />
                                        <div className={cx('footer-text')}>
                                            CH2: 128/5 Đường Bùi Quang Là, Phường 12, Quận Gò Vấp,TP.HCM, Việt Nam
                                        </div>
                                    </div>
                                </div>

                                <div className={cx('footer-contact')}>
                                    <div className={cx('footer-tittle')}>Liên hệ</div>
                                    <div className={cx('footer-address')}>
                                        <FontAwesomeIcon className={cx('footer-icon')} icon={faPhone} />
                                        <div className={cx('footer-text')}> HotLine đặt hàng: 0766980574</div>
                                    </div>
                                    <div className={cx('footer-address')}>
                                        <FontAwesomeIcon className={cx('footer-icon')} icon={faEnvelope} />
                                        <div className={cx('footer-text')}>Email: datbui18102002@gmail.com</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('coppy-right')}>
                © Bản quyền thuộc về <span>Baroibeo Bakery</span>
            </div>
        </footer>
    );
}

export default Footer;
