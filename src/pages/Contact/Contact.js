import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Contact.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiamond, faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import images from '~/assets/images';
import AuthForm from '~/layouts/components/AuthForm/AuthForm';

Contact.propTypes = {};

const cx = classNames.bind(styles);

function Contact() {
    return (
        <section className={cx('contact')}>
            <div className={cx('container')}>
                <div className={cx('contact-bakery')}>Baroibeo Bakery</div>
                <div className={cx('tittle', 'contact-page-tittle')}>
                    <h2>Liên hệ với chúng tôi</h2>
                    <FontAwesomeIcon icon={faDiamond} className={cx('diamond-icon')} />
                </div>
                <div className={cx('contact-row', { row: true })}>
                    <div className="col-md-7">
                        <div className={cx('contact-img')}>
                            <img src={images.contactImg} alt="" />
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className={cx('contact-wrapper')}>
                            <div className={cx('contact-tittle')}>Liên Lạc</div>
                            <div className={cx('contact-address')}>
                                <FontAwesomeIcon className={cx('contact-icon')} icon={faPhone} />
                                <div className={cx('contact-text')}>
                                    HotLine đặt hàng: <strong>0766980573</strong>
                                </div>
                            </div>
                            <div className={cx('contact-address')}>
                                <FontAwesomeIcon className={cx('contact-icon')} icon={faEnvelope} />
                                <div className={cx('contact-text')}>
                                    Email: <strong>datbui18102002@gmail.com</strong>
                                </div>
                            </div>
                        </div>
                        <div className={cx('contact-wrapper')}>
                            <div className={cx('contact-tittle')}>Thời gian</div>
                            <div className={cx('contact-address')}>
                                <div className={cx('contact-text')}>
                                    Thứ 2 - Thứ 6: <strong>7 am - 11 pm</strong>
                                </div>
                            </div>
                            <div className={cx('contact-address')}>
                                <div className={cx('contact-text')}>
                                    Thứ 7 - Chủ nhật : <strong>8 am - 9 pm</strong>
                                </div>
                            </div>
                        </div>
                        <div className={cx('contact-wrapper')}>
                            <div className={cx('contact-tittle')}>Địa chỉ</div>
                            <div className={cx('contact-address')}>
                                <FontAwesomeIcon className={cx('contact-icon')} icon={faLocationDot} />
                                <div className={cx('contact-text')}>
                                    CH1: 125/2 Hòa Hưng, Phường 10, Quận 10, TP.HCM, Việt Nam
                                </div>
                            </div>
                            <div className={cx('contact-address')}>
                                <FontAwesomeIcon className={cx('contact-icon')} icon={faLocationDot} />
                                <div className={cx('contact-text')}>
                                    CH2: 128/5 Đường Bùi Quang Là, Phường 12, Quận Gò Vấp,TP.HCM, Việt Nam
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <iframe
                    title="Vị trí Tiệm"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d582.6267255130549!2d106.67216106257494!3d10.778356697644139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f8663dc4a19%3A0xa53f92e041dc33a!2zR2FtZUhvbWUgSMOyYSBIxrBuZw!5e0!3m2!1svi!2s!4v1693385424847!5m2!1svi!2s"
                    width="100%"
                    height="450"
                    style={{ border: 0, borderRadius: '15px' }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </section>
    );
}

export default Contact;
