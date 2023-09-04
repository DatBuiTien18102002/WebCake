import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './ProductDetail.module.scss';
import images from '~/assets/images';
import StarRatings from 'react-star-ratings';
import Button from '~/components/Button';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addCart, updateCart } from '~/slice/cartSlice';

ProductDetail.propTypes = {};

const cx = classNames.bind(styles);

function ProductDetail(props) {
    const dispatch = useDispatch();
    const params = useParams();
    const [numProduct, setNumProduct] = useState(1);

    const { id } = params;
    const products = useSelector((state) => state.products);
    const carts = useSelector((state) => state.carts);
    console.log(products);
    const currentProduct = products.find((productItem) => productItem.id === id);

    const newPrice = currentProduct.price - (currentProduct.price * currentProduct.discount) / 100;
    const handleInput = (e) => {
        setNumProduct(e.target.value);
    };
    const minusNumProduct = () => {
        if (numProduct === 0) {
            return;
        }
        setNumProduct((prevState) => prevState - 1);
    };
    const plusNumProduct = () => {
        setNumProduct((prevState) => prevState + 1);
    };

    const handleAddToCart = () => {
        const existCart = carts.find((cart) => cart.id === currentProduct.id);

        if (!!existCart) {
            dispatch(
                updateCart({
                    id: existCart.id,
                    image: existCart.image,
                    name: existCart.name,
                    price: newPrice,
                    type: existCart.type,
                    quantity: numProduct + existCart.quantity,
                }),
            );
        } else {
            dispatch(
                addCart({
                    id: currentProduct.id,
                    image: currentProduct.image,
                    name: currentProduct.name,
                    price: newPrice,
                    type: currentProduct.type,
                    quantity: numProduct,
                }),
            );
        }
    };
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
                                <div
                                    className={cx('product-detail__control', 'control-minus')}
                                    onClick={minusNumProduct}
                                >
                                    -
                                </div>
                                <input
                                    className={cx('product-detail__num')}
                                    type="number"
                                    value={numProduct}
                                    onChange={handleInput}
                                />
                                <div className={cx('product-detail__control', 'control-plus')} onClick={plusNumProduct}>
                                    +
                                </div>
                            </div>
                        </div>
                        <Button className={cx('product-detail__btn')} primary onClick={handleAddToCart}>
                            Thêm vào giỏ hàng
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProductDetail;
