import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Cart.module.scss';
import { Table } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button/Button';
import config from '~/config';
import { deleteCart } from '~/slice/cartSlice';

Cart.propTypes = {};

const cx = classNames.bind(styles);

function Cart(props) {
    const dispatch = useDispatch();
    const carts = useSelector((state) => state.carts);
    let totalPrice = 0;

    const handleDelete = (id) => {
        dispatch(deleteCart(id));
    };

    return (
        <div className={cx('Cart')}>
            <div className={cx('container')}>
                <div className={cx('cart-tittle')}>Giỏ hàng</div>
                <Table bordered className={cx('cart-info')}>
                    <thead>
                        <tr>
                            <th className={cx('cart-heading')}>#</th>
                            <th className={cx('cart-heading')}>Ảnh sản phẩm </th>
                            <th className={cx('cart-heading')}>Tên sản phẩm</th>
                            <th className={cx('cart-heading')}>Đơn giá</th>
                            <th className={cx('cart-heading')}>Số lượng</th>
                            <th className={cx('cart-heading')}>Thành tiền</th>
                            <th className={cx('cart-heading')}>Xóa</th>
                        </tr>
                    </thead>
                    <tbody>
                        {carts.map((cart, index) => {
                            totalPrice += cart.quantity * cart.price;
                            return (
                                <tr>
                                    <th scope="row">
                                        <div className={cx('cart-cell')}>{index + 1}</div>
                                    </th>

                                    <td>
                                        <div className={cx('cart-cell')}>
                                            <img src={cart.image} alt="" className={cx('cart-img')} />
                                        </div>
                                    </td>
                                    <td>
                                        <div className={cx('cart-cell')}>{cart.name}</div>
                                    </td>
                                    <td>
                                        <div className={cx('cart-cell')}>{cart.price.toLocaleString('vi-VN')} đ</div>
                                    </td>
                                    <td>
                                        <div className={cx('cart-cell')}>{cart.quantity}</div>
                                    </td>

                                    <td>
                                        <div className={cx('cart-cell')}>
                                            {(cart.quantity * cart.price).toLocaleString('vi-VN')} đ
                                        </div>
                                    </td>
                                    <td>
                                        <div
                                            className={cx('cart-cell', 'cart-delete')}
                                            onClick={() => handleDelete(cart.id)}
                                        >
                                            <FontAwesomeIcon icon={faTrashCan} />
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
                <Table bordered className={cx('cart-info-mobile')}>
                    <thead>
                        <tr>
                            <th className={cx('cart-heading-mobile')}>#</th>
                            <th className={cx('cart-heading-mobile')}>Thông tin sản phẩm</th>
                            <th className={cx('cart-heading-mobile')}>Thành tiền</th>
                            <th className={cx('cart-heading-mobile')}>Xóa</th>
                        </tr>
                    </thead>
                    <tbody>
                        {carts.map((cart, index) => {
                            totalPrice += cart.quantity * cart.price;
                            return (
                                <tr>
                                    <th scope="row">
                                        <div className={cx('cart-cell-mobile')}>{index + 1}</div>
                                    </th>

                                    <td>
                                        <div className={cx('cart-cell-mobile')}>
                                            <img className={cx('cart-img')} src={cart.image} alt="" />
                                            <div className={cx('cart-desc')}>
                                                <h5 className={cx('cart-name')}>{cart.name}</h5>
                                                <div className={cx('cart-price-wrapper')}>
                                                    <span className={cx('cart-price')}>
                                                        {cart.price.toLocaleString('vi-VN')} đ
                                                    </span>
                                                    <span className={cx('cart-multiply')}>x</span>
                                                    <span className={cx('cart-qnt')}>{cart.quantity}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </td>

                                    <td>
                                        <div className={cx('cart-cell-mobile')}>
                                            {(cart.quantity * cart.price).toLocaleString('vi-VN')} đ
                                        </div>
                                    </td>
                                    <td>
                                        <div
                                            className={cx('cart-cell-mobile', 'cart-delete')}
                                            onClick={() => handleDelete(cart.id)}
                                        >
                                            <FontAwesomeIcon icon={faTrashCan} />
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>

                <div className="row" style={{ marginTop: '40px' }}>
                    <div className="col-lg-8 col-md-6 order-md-1 order-2">
                        <Button
                            className={cx('cart-back')}
                            to={config.routes.product}
                            leftIcon={<FontAwesomeIcon icon={faArrowLeft} />}
                            primary
                        >
                            Tiếp tục mua hàng
                        </Button>
                    </div>
                    <div className="col-lg-4 col-md-6 order-md-2 order-1">
                        <Table bordered className={cx('cart-total')}>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className={cx('cart-total__text')}>Tổng tiền thanh toán</div>
                                    </td>
                                    <td>
                                        <div className={cx('cart-total__price')}>
                                            {totalPrice.toLocaleString('vi-VN')} đ
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>

                        <Button primary className={cx('cart-checkout')}>
                            Tiến hành thanh toán
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
