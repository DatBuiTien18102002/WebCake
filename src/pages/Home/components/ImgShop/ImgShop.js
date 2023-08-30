import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './ImgShop.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiamond } from '@fortawesome/free-solid-svg-icons';
import images from '~/assets/images';
const cx = classNames.bind(styles);

ImgShop.propTypes = {};

function ImgShop(props) {
    return (
        <section id="ImageShop" className={cx('image-shop')}>
            <div className={cx('container')}>
                <div className="row">
                    <div className="col-12">
                        <div className={cx('tittle', 'image-shop-tittle')}>
                            <h2>Hình ảnh Baroibeo quán</h2>
                            <FontAwesomeIcon icon={faDiamond} className={cx('diamond-icon')} />
                        </div>
                        <div className={cx('image-list')}>
                            <div className={cx('image-item')}>
                                <img src={images.imgShop.imgShop1} alt="" />
                            </div>
                            <div className={cx('image-item')}>
                                <img src={images.imgShop.imgShop2} alt="" />
                            </div>
                            <div className={cx('image-item')}>
                                <img src={images.imgShop.imgShop3} alt="" />
                            </div>
                            <div className={cx('image-item')}>
                                <img src={images.imgShop.imgShop4} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ImgShop;
