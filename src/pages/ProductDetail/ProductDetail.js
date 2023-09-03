import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './ProductDetail.module.scss';
import images from '~/assets/images';
import StarRatings from 'react-star-ratings';
import Button from '~/components/Button';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

ProductDetail.propTypes = {};

const cx = classNames.bind(styles);

function ProductDetail(props) {
    const params = useParams();
    const { id } = params;

    const products = useSelector((state) => state.products);
    const currentProduct = products.find((productItem) => productItem.id === id);

    const newPrice = currentProduct.price - (currentProduct.price * currentProduct.discount) / 100;
    console.log(currentProduct);
    return (
        <section className={cx('product-detail')}>
            <div className={cx('container')}>
                <div className="row">
                    <div className={cx('col-lg-5 col-md-6 ')}>
                        <img className={cx('product-detail__img')} src={`../${currentProduct.image}`} alt="" />
                    </div>
                    <div className={cx('col-lg-7 col-md-6 ')}>
                        <div className={cx('product-detail__tittle')}>{currentProduct.name}</div>
                        <div className={cx('product-detail__rate')}>
                            <StarRatings
                                starRatedColor="#ffce3e"
                                starEmptyColor="#D5D5D5"
                                rating={currentProduct.rate}
                                numberOfStars={5}
                                starDimension="17px"
                                starSpacing="3px"
                                name="rating"
                            />
                            <p className={cx('product-detail__rate-num')}>{currentProduct.numRate} đánh giá</p>
                        </div>
                        <div className={cx('product-detail__desc')}>{currentProduct.info}</div>
                        <div className={cx('product-detail__price')}>
                            <span className={cx('product-detail__label')}>Giá bán: </span>
                            <span className={cx('product-detail__price-num')}>
                                {newPrice.toLocaleString('vi-VN')} đ
                            </span>
                        </div>

                        <div className={cx('product-detail__num-wrapper')}>
                            <div className={cx('product-detail__label')}>Số lượng: </div>
                            <div className={cx('product-detail__quantity')}>
                                <div className={cx('product-detail__control', 'control-minus')}>-</div>
                                <input className={cx('product-detail__num')} type="text" defaultValue={0} />
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
