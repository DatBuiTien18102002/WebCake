import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './AboutUs.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiamond } from '@fortawesome/free-solid-svg-icons';
import images from '~/assets/images';

AboutUs.propTypes = {};

const cx = classNames.bind(styles);

function AboutUs(props) {
    return (
        <section className={cx('about')}>
            <div className={cx('container')}>
                <div className={cx('about-bakery')}>Baroibeo Bakery</div>
                <div className={cx('tittle', 'about-page-tittle')}>
                    <h2>Về chúng tôi</h2>
                    <FontAwesomeIcon icon={faDiamond} className={cx('diamond-icon')} />
                </div>

                <div className={cx('about-row', { row: true })}>
                    <div className="col-md-7">
                        <div className={cx('about-img')}>
                            <img src={images.aboutImg} alt="" />
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className={cx('about-wrapper')}>
                            <div className={cx('about-tittle')}>Một chút về Baroibeo Bakery</div>
                            <div className={cx('about-text')}>
                                Baroibeo Bakery khởi đầu là một cơ sở nhỏ với quy mô gia đình vào đầu những năm 2018.
                                Trải qua gần 5 năm xây dựng và phát triển, Baroibeo Bakery đã xây dựng được hai cửa hành
                                bánh ngọt lớn và nổi tiếng thành phố Hồ Chí Minh. Là thương hiệu được biết đến với những
                                sản phẩm chất lượng và ngon miệng. Cùng với tinh thần ham học hỏi, trách nhiệm, Baroibeo
                                Bakery đã đang và sẽ luôn mang đến cho khách hàng những chiếc bánh nghệ thuật đẹp mắt,
                                những chiếc bánh thơm ngon, dinh dưỡng và hợp vệ sinh với giá cả phải chăng.
                            </div>
                        </div>
                    </div>
                </div>

                <div className={cx('about-row', { row: true })}>
                    <div className="col-4">
                        <div className={cx('about-count')}>
                            <div className={cx('about-count-num')}>50+</div>
                            <div className={cx('about-count-text')}>Nhân viên tiệm bánh</div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className={cx('about-count')}>
                            <div className={cx('about-count-num')}>3200+</div>
                            <div className={cx('about-count-text')}>Khách hàng thân thiết</div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className={cx('about-count')}>
                            <div className={cx('about-count-num')}>70+</div>
                            <div className={cx('about-count-text')}>Bánh ngọt các loại</div>
                        </div>
                    </div>
                </div>

                <div className={cx('about-row', { row: true })}>
                    <div className="col-md-3">
                        <div className={cx('about-choice')}>
                            <img className={cx('about-icon')} src={images.aboutIcon.icon1} alt="" />
                            <div className={cx('about-choice-tittle')}>Giao Hàng Nhanh</div>
                            <div className={cx('about-choice-text')}>
                                Tận hưởng niềm vui đón nhận bánh tươi ngon ngay tại cửa nhà bạn. Chúng tôi cam kết giao
                                hàng nhanh chóng và đúng hẹn, để bạn có thêm thời gian thảnh thơi thưởng thức món ngọt.
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className={cx('about-choice')}>
                            <img className={cx('about-icon')} src={images.aboutIcon.icon2} alt="" />
                            <div className={cx('about-choice-tittle')}>Chất Lượng Cao</div>
                            <div className={cx('about-choice-text')}>
                                Mỗi chiếc bánh là sản phẩm của tình yêu và tâm huyết, được chế biến từ những nguyên liệu
                                tốt nhất và quy trình nghiêm ngặt để đảm bảo hương vị hoàn hảo.
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className={cx('about-choice')}>
                            <img className={cx('about-icon')} src={images.aboutIcon.icon3} alt="" />
                            <div className={cx('about-choice-tittle')}>Ưu Đãi Tốt Nhất</div>
                            <div className={cx('about-choice-text')}>
                                Bạn xứng đáng nhận được điều tốt nhất, và chúng tôi hiểu điều đó. Chúng tôi mang đến
                                những ưu đãi đặc biệt, giảm giá hấp dẫn và quà tặng thú vị để bạn cảm nhận sự trân trọng
                                của chúng tôi đối với sự ủng hộ của bạn.
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className={cx('about-choice')}>
                            <img className={cx('about-icon')} src={images.aboutIcon.icon4} alt="" />
                            <div className={cx('about-choice-tittle')}>Thanh Toán An Toàn</div>
                            <div className={cx('about-choice-text')}>
                                Sự an toàn của thông tin cá nhân và giao dịch thanh toán là ưu tiên hàng đầu. Với hệ
                                thống thanh toán được bảo mật hàng đầu, bạn có thể yên tâm thực hiện giao dịch một cách
                                an toàn và tiện lợi.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutUs;
