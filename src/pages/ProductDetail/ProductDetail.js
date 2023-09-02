import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './ProductDetail.module.scss';
import images from '~/assets/images';
import StarRatings from 'react-star-ratings';
import Button from '~/components/Button';

ProductDetail.propTypes = {};

const cx = classNames.bind(styles);

function ProductDetail(props) {
    return (
        <section className={cx('product-detail')}>
            <div className={cx('container')}>
                <div className="row">
                    <div className={cx('col-lg-5 col-md-6 ')}>
                        <img className={cx('product-detail__img')} src={images.cake.fritter} alt="" />
                    </div>
                    <div className={cx('col-lg-7 col-md-6 ')}>
                        <div className={cx('product-detail__tittle')}>Bánh dâu tây</div>
                        <div className={cx('product-detail__rate')}>
                            <StarRatings
                                starRatedColor="#ffce3e"
                                starEmptyColor="#D5D5D5"
                                rating={3.75}
                                numberOfStars={5}
                                starDimension="17px"
                                starSpacing="3px"
                                name="rating"
                            />
                            <p className={cx('product-detail__rate-num')}>123 đánh giá</p>
                        </div>
                        <div className={cx('product-detail__desc')}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus dolore dignissimos quasi
                            deleniti esse error culpa, quos quas voluptates distinctio consectetur odio quis rerum
                            quaerat pariatur, molestias sed in iste itaque quae maiores odit asperiores officia sint.
                            Et, distinctio soluta.
                        </div>
                        <div className={cx('product-detail__price')}>
                            <span className={cx('product-detail__label')}>Giá bán: </span>
                            <span className={cx('product-detail__price-num')}>20.000 đ</span>
                        </div>

                        <div className={cx('product-detail__num-wrapper')}>
                            <div className={cx('product-detail__label')}>Số lượng: </div>
                            <div className={cx('product-detail__quantity')}>
                                <div className={cx('product-detail__control', 'control-minus')}>-</div>
                                <input className={cx('product-detail__num')} type="text" value={0} />
                                <div className={cx('product-detail__control', 'control-plus')}>+</div>
                            </div>
                        </div>
                        <Button className={cx('product-detail__btn')} primary>
                            Thêm vào giỏ hàng
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProductDetail;
