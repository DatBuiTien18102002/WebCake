import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Product.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAngleDown,
    faAngleLeft,
    faAngleRight,
    faCheck,
    faDiamond,
    faFilter,
    faHeart,
} from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';
import { faHeart as faEmptyHeart } from '@fortawesome/free-regular-svg-icons';
import StarRatings from 'react-star-ratings';
import images from '~/assets/images';
import { Link } from 'react-router-dom';
import routes from '~/config/routes';
import Menu from '~/components/Popper/Menu/Menu';

Product.propTypes = {};
const cx = classNames.bind(styles);

const filterList = [
    {
        tittle: `A đến Z`,
    },
    {
        tittle: 'Z đến A',
    },
    {
        tittle: 'Cao đến thấp',
    },
    {
        tittle: 'Thấp đến cao',
    },
    {
        tittle: 'Bánh ngọt',
    },
    {
        tittle: 'Bánh mặn',
    },
    {
        tittle: 'Bánh kem',
    },
];

function Product(props) {
    return (
        <div className={cx('product')}>
            <div className={cx('container')}>
                <div className="row">
                    <div className={cx('col-lg-2 d-lg-block d-none')}>
                        <nav className={cx('product-filter')}>
                            <div className={cx('product-filter__tittle')}>
                                <FontAwesomeIcon icon={faFilter} className={cx('product-filter__icon')} />
                                Bộ lọc
                            </div>
                            <div className={cx('product-filter__wrapper')}>
                                <div className={cx('product-filter__heading')}>Tên sản phẩm</div>
                                <ul className={cx('product-filter__list')}>
                                    <li className={cx('active', 'product-filter__item')}>A &#8594; Z</li>
                                    <li className={cx('product-filter__item')}>Z &#8594; A</li>
                                </ul>
                            </div>
                            <div className={cx('product-filter__wrapper')}>
                                <div className={cx('product-filter__heading')}>Giá sản phẩm</div>
                                <ul className={cx('product-filter__list')}>
                                    <li className={cx('product-filter__item')}>Cao đến thấp</li>
                                    <li className={cx('product-filter__item')}>Thấp đến cao</li>
                                </ul>
                            </div>
                            <div className={cx('product-filter__wrapper')}>
                                <div className={cx('product-filter__heading')}>Loại sản phẩm</div>
                                <ul className={cx('product-filter__list')}>
                                    <li className={cx('product-filter__item')}>Bánh ngọt</li>
                                    <li className={cx('product-filter__item')}>Bánh mặn</li>
                                    <li className={cx('product-filter__item')}>Bánh kem</li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                    <div className={cx('col-lg-10 ')}>
                        <div className={cx('product-heading')}>
                            <p className={cx('product-tittle')}>Tất cả sản phẩm</p>
                            {/* Tách component */}
                            <Menu items={filterList}>
                                <div className={cx('select-input')}>
                                    <span className={cx('select-input__label')}>Sắp xếp</span>
                                    <FontAwesomeIcon icon={faAngleDown} className={cx('product-icon')} />
                                </div>
                            </Menu>

                            <div className={cx('product-page')}>
                                <div className={cx('product-page__number')}>
                                    <span className={cx('product-page__current')}>1</span>/
                                    <span className={cx('product-page__num-page')}>14</span>
                                </div>
                                <div className={cx('product-page__control')}>
                                    <Button className={cx('product-btn')} disable>
                                        <FontAwesomeIcon icon={faAngleLeft} className={cx('product-icon')} />
                                    </Button>
                                    <Button className={cx('product-btn')}>
                                        <FontAwesomeIcon icon={faAngleRight} className={cx('product-icon')} />
                                    </Button>
                                </div>
                            </div>
                        </div>

                        <div className="row row-cols-lg-5 row-cols-md-3 row-cols-2">
                            <div className="col">
                                <div className={cx('product-item')}>
                                    {/* <img src={images.cake.cupcake} alt="" className={cx('product-img')}/> */}
                                    <div
                                        className={cx('product-img')}
                                        style={{
                                            backgroundImage: `url(${images.cake.cupcake})`,
                                        }}
                                    ></div>
                                    <div className={cx('product-body')}>
                                        <div className={cx('product-name')}>
                                            <FontAwesomeIcon icon={faDiamond} />
                                            <span>Bánh Dâu Tây</span>
                                        </div>
                                        <div className={cx('product-price')}>
                                            <div className={cx('product-price--old')}>399.000đ</div>
                                            <div className={cx('product-price--new')}>270.000đ</div>
                                        </div>
                                        <div className={cx('product-action')}>
                                            <div className={cx('product-like')}>
                                                <FontAwesomeIcon
                                                    className={cx('product-like-icon')}
                                                    icon={faEmptyHeart}
                                                />
                                                {/* <FontAwesomeIcon className={cx('product-like-icon')} icon={faHeart} /> */}
                                            </div>

                                            <div className={cx('product-rate')}>
                                                <StarRatings
                                                    starRatedColor="#ffce3e"
                                                    starEmptyColor="#D5D5D5"
                                                    rating={4.5}
                                                    numberOfStars={5}
                                                    starDimension="17px"
                                                    starSpacing="3px"
                                                    name="rating"
                                                />
                                            </div>

                                            <div className={cx('product-favorite')}>
                                                <FontAwesomeIcon className={cx('product-check-icon')} icon={faCheck} />
                                                <span>Yêu thích</span>
                                            </div>

                                            <div className={cx('product-sale')}>
                                                <div className={cx('product-sale-percent')}>10%</div>

                                                <div className={cx('product-sale-label')}>Giảm</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className={cx('product-item')}>
                                    {/* <img src={images.cake.cupcake} alt="" className={cx('product-img')}/> */}
                                    <div
                                        className={cx('product-img')}
                                        style={{
                                            backgroundImage: `url(${images.cake.cupcake})`,
                                        }}
                                    ></div>
                                    <div className={cx('product-body')}>
                                        <div className={cx('product-name')}>
                                            <FontAwesomeIcon icon={faDiamond} />
                                            <span>Bánh Dâu Tây</span>
                                        </div>
                                        <div className={cx('product-price')}>
                                            <div className={cx('product-price--old')}>399.000đ</div>
                                            <div className={cx('product-price--new')}>270.000đ</div>
                                        </div>
                                        <div className={cx('product-action')}>
                                            <div className={cx('product-like')}>
                                                <FontAwesomeIcon
                                                    className={cx('product-like-icon')}
                                                    icon={faEmptyHeart}
                                                />
                                                {/* <FontAwesomeIcon className={cx('product-like-icon')} icon={faHeart} /> */}
                                            </div>

                                            <div className={cx('product-rate')}>
                                                <StarRatings
                                                    starRatedColor="#ffce3e"
                                                    starEmptyColor="#D5D5D5"
                                                    rating={4.5}
                                                    numberOfStars={5}
                                                    starDimension="17px"
                                                    starSpacing="3px"
                                                    name="rating"
                                                />
                                            </div>

                                            <div className={cx('product-favorite')}>
                                                <FontAwesomeIcon className={cx('product-check-icon')} icon={faCheck} />
                                                <span>Yêu thích</span>
                                            </div>

                                            <div className={cx('product-sale')}>
                                                <div className={cx('product-sale-percent')}>10%</div>

                                                <div className={cx('product-sale-label')}>Giảm</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className={cx('product-item')}>
                                    {/* <img src={images.cake.cupcake} alt="" className={cx('product-img')}/> */}
                                    <div
                                        className={cx('product-img')}
                                        style={{
                                            backgroundImage: `url(${images.cake.cupcake})`,
                                        }}
                                    ></div>
                                    <div className={cx('product-body')}>
                                        <div className={cx('product-name')}>
                                            <FontAwesomeIcon icon={faDiamond} />
                                            <span>Bánh Dâu Tây</span>
                                        </div>
                                        <div className={cx('product-price')}>
                                            <div className={cx('product-price--old')}>399.000đ</div>
                                            <div className={cx('product-price--new')}>270.000đ</div>
                                        </div>
                                        <div className={cx('product-action')}>
                                            <div className={cx('product-like')}>
                                                <FontAwesomeIcon
                                                    className={cx('product-like-icon')}
                                                    icon={faEmptyHeart}
                                                />
                                                {/* <FontAwesomeIcon className={cx('product-like-icon')} icon={faHeart} /> */}
                                            </div>

                                            <div className={cx('product-rate')}>
                                                <StarRatings
                                                    starRatedColor="#ffce3e"
                                                    starEmptyColor="#D5D5D5"
                                                    rating={4.5}
                                                    numberOfStars={5}
                                                    starDimension="17px"
                                                    starSpacing="3px"
                                                    name="rating"
                                                />
                                            </div>

                                            <div className={cx('product-favorite')}>
                                                <FontAwesomeIcon className={cx('product-check-icon')} icon={faCheck} />
                                                <span>Yêu thích</span>
                                            </div>

                                            <div className={cx('product-sale')}>
                                                <div className={cx('product-sale-percent')}>10%</div>

                                                <div className={cx('product-sale-label')}>Giảm</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className={cx('product-item')}>
                                    {/* <img src={images.cake.cupcake} alt="" className={cx('product-img')}/> */}
                                    <div
                                        className={cx('product-img')}
                                        style={{
                                            backgroundImage: `url(${images.cake.cupcake})`,
                                        }}
                                    ></div>
                                    <div className={cx('product-body')}>
                                        <div className={cx('product-name')}>
                                            <FontAwesomeIcon icon={faDiamond} />
                                            <span>Bánh Dâu Tây</span>
                                        </div>
                                        <div className={cx('product-price')}>
                                            <div className={cx('product-price--old')}>399.000đ</div>
                                            <div className={cx('product-price--new')}>270.000đ</div>
                                        </div>
                                        <div className={cx('product-action')}>
                                            <div className={cx('product-like')}>
                                                <FontAwesomeIcon
                                                    className={cx('product-like-icon')}
                                                    icon={faEmptyHeart}
                                                />
                                                {/* <FontAwesomeIcon className={cx('product-like-icon')} icon={faHeart} /> */}
                                            </div>

                                            <div className={cx('product-rate')}>
                                                <StarRatings
                                                    starRatedColor="#ffce3e"
                                                    starEmptyColor="#D5D5D5"
                                                    rating={4.5}
                                                    numberOfStars={5}
                                                    starDimension="17px"
                                                    starSpacing="3px"
                                                    name="rating"
                                                />
                                            </div>

                                            <div className={cx('product-favorite')}>
                                                <FontAwesomeIcon className={cx('product-check-icon')} icon={faCheck} />
                                                <span>Yêu thích</span>
                                            </div>

                                            <div className={cx('product-sale')}>
                                                <div className={cx('product-sale-percent')}>10%</div>

                                                <div className={cx('product-sale-label')}>Giảm</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className={cx('product-item')}>
                                    {/* <img src={images.cake.cupcake} alt="" className={cx('product-img')}/> */}
                                    <div
                                        className={cx('product-img')}
                                        style={{
                                            backgroundImage: `url(${images.cake.cupcake})`,
                                        }}
                                    ></div>
                                    <div className={cx('product-body')}>
                                        <div className={cx('product-name')}>
                                            <FontAwesomeIcon icon={faDiamond} />
                                            <span>Bánh Dâu Tây</span>
                                        </div>
                                        <div className={cx('product-price')}>
                                            <div className={cx('product-price--old')}>399.000đ</div>
                                            <div className={cx('product-price--new')}>270.000đ</div>
                                        </div>
                                        <div className={cx('product-action')}>
                                            <div className={cx('product-like')}>
                                                <FontAwesomeIcon
                                                    className={cx('product-like-icon')}
                                                    icon={faEmptyHeart}
                                                />
                                                {/* <FontAwesomeIcon className={cx('product-like-icon')} icon={faHeart} /> */}
                                            </div>

                                            <div className={cx('product-rate')}>
                                                <StarRatings
                                                    starRatedColor="#ffce3e"
                                                    starEmptyColor="#D5D5D5"
                                                    rating={4.5}
                                                    numberOfStars={5}
                                                    starDimension="17px"
                                                    starSpacing="3px"
                                                    name="rating"
                                                />
                                            </div>

                                            <div className={cx('product-favorite')}>
                                                <FontAwesomeIcon className={cx('product-check-icon')} icon={faCheck} />
                                                <span>Yêu thích</span>
                                            </div>

                                            <div className={cx('product-sale')}>
                                                <div className={cx('product-sale-percent')}>10%</div>

                                                <div className={cx('product-sale-label')}>Giảm</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className={cx('product-item')}>
                                    {/* <img src={images.cake.cupcake} alt="" className={cx('product-img')}/> */}
                                    <div
                                        className={cx('product-img')}
                                        style={{
                                            backgroundImage: `url(${images.cake.cupcake})`,
                                        }}
                                    ></div>
                                    <div className={cx('product-body')}>
                                        <div className={cx('product-name')}>
                                            <FontAwesomeIcon icon={faDiamond} />
                                            <span>Bánh Dâu Tây</span>
                                        </div>
                                        <div className={cx('product-price')}>
                                            <div className={cx('product-price--old')}>399.000đ</div>
                                            <div className={cx('product-price--new')}>270.000đ</div>
                                        </div>
                                        <div className={cx('product-action')}>
                                            <div className={cx('product-like')}>
                                                <FontAwesomeIcon
                                                    className={cx('product-like-icon')}
                                                    icon={faEmptyHeart}
                                                />
                                                {/* <FontAwesomeIcon className={cx('product-like-icon')} icon={faHeart} /> */}
                                            </div>

                                            <div className={cx('product-rate')}>
                                                <StarRatings
                                                    starRatedColor="#ffce3e"
                                                    starEmptyColor="#D5D5D5"
                                                    rating={4.5}
                                                    numberOfStars={5}
                                                    starDimension="17px"
                                                    starSpacing="3px"
                                                    name="rating"
                                                />
                                            </div>

                                            <div className={cx('product-favorite')}>
                                                <FontAwesomeIcon className={cx('product-check-icon')} icon={faCheck} />
                                                <span>Yêu thích</span>
                                            </div>

                                            <div className={cx('product-sale')}>
                                                <div className={cx('product-sale-percent')}>10%</div>

                                                <div className={cx('product-sale-label')}>Giảm</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className={cx('product-item')}>
                                    {/* <img src={images.cake.cupcake} alt="" className={cx('product-img')}/> */}
                                    <div
                                        className={cx('product-img')}
                                        style={{
                                            backgroundImage: `url(${images.cake.cupcake})`,
                                        }}
                                    ></div>
                                    <div className={cx('product-body')}>
                                        <div className={cx('product-name')}>
                                            <FontAwesomeIcon icon={faDiamond} />
                                            <span>Bánh Dâu Tây</span>
                                        </div>
                                        <div className={cx('product-price')}>
                                            <div className={cx('product-price--old')}>399.000đ</div>
                                            <div className={cx('product-price--new')}>270.000đ</div>
                                        </div>
                                        <div className={cx('product-action')}>
                                            <div className={cx('product-like')}>
                                                <FontAwesomeIcon
                                                    className={cx('product-like-icon')}
                                                    icon={faEmptyHeart}
                                                />
                                                {/* <FontAwesomeIcon className={cx('product-like-icon')} icon={faHeart} /> */}
                                            </div>

                                            <div className={cx('product-rate')}>
                                                <StarRatings
                                                    starRatedColor="#ffce3e"
                                                    starEmptyColor="#D5D5D5"
                                                    rating={4.5}
                                                    numberOfStars={5}
                                                    starDimension="17px"
                                                    starSpacing="3px"
                                                    name="rating"
                                                />
                                            </div>

                                            <div className={cx('product-favorite')}>
                                                <FontAwesomeIcon className={cx('product-check-icon')} icon={faCheck} />
                                                <span>Yêu thích</span>
                                            </div>

                                            <div className={cx('product-sale')}>
                                                <div className={cx('product-sale-percent')}>10%</div>

                                                <div className={cx('product-sale-label')}>Giảm</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className={cx('product-item')}>
                                    {/* <img src={images.cake.cupcake} alt="" className={cx('product-img')}/> */}
                                    <div
                                        className={cx('product-img')}
                                        style={{
                                            backgroundImage: `url(${images.cake.cupcake})`,
                                        }}
                                    ></div>
                                    <div className={cx('product-body')}>
                                        <div className={cx('product-name')}>
                                            <FontAwesomeIcon icon={faDiamond} />
                                            <span>Bánh Dâu Tây</span>
                                        </div>
                                        <div className={cx('product-price')}>
                                            <div className={cx('product-price--old')}>399.000đ</div>
                                            <div className={cx('product-price--new')}>270.000đ</div>
                                        </div>
                                        <div className={cx('product-action')}>
                                            <div className={cx('product-like')}>
                                                <FontAwesomeIcon
                                                    className={cx('product-like-icon')}
                                                    icon={faEmptyHeart}
                                                />
                                                {/* <FontAwesomeIcon className={cx('product-like-icon')} icon={faHeart} /> */}
                                            </div>

                                            <div className={cx('product-rate')}>
                                                <StarRatings
                                                    starRatedColor="#ffce3e"
                                                    starEmptyColor="#D5D5D5"
                                                    rating={4.5}
                                                    numberOfStars={5}
                                                    starDimension="17px"
                                                    starSpacing="3px"
                                                    name="rating"
                                                />
                                            </div>

                                            <div className={cx('product-favorite')}>
                                                <FontAwesomeIcon className={cx('product-check-icon')} icon={faCheck} />
                                                <span>Yêu thích</span>
                                            </div>

                                            <div className={cx('product-sale')}>
                                                <div className={cx('product-sale-percent')}>10%</div>

                                                <div className={cx('product-sale-label')}>Giảm</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className={cx('product-item')}>
                                    {/* <img src={images.cake.cupcake} alt="" className={cx('product-img')}/> */}
                                    <div
                                        className={cx('product-img')}
                                        style={{
                                            backgroundImage: `url(${images.cake.cupcake})`,
                                        }}
                                    ></div>
                                    <div className={cx('product-body')}>
                                        <div className={cx('product-name')}>
                                            <FontAwesomeIcon icon={faDiamond} />
                                            <span>Bánh Dâu Tây</span>
                                        </div>
                                        <div className={cx('product-price')}>
                                            <div className={cx('product-price--old')}>399.000đ</div>
                                            <div className={cx('product-price--new')}>270.000đ</div>
                                        </div>
                                        <div className={cx('product-action')}>
                                            <div className={cx('product-like')}>
                                                <FontAwesomeIcon
                                                    className={cx('product-like-icon')}
                                                    icon={faEmptyHeart}
                                                />
                                                {/* <FontAwesomeIcon className={cx('product-like-icon')} icon={faHeart} /> */}
                                            </div>

                                            <div className={cx('product-rate')}>
                                                <StarRatings
                                                    starRatedColor="#ffce3e"
                                                    starEmptyColor="#D5D5D5"
                                                    rating={4.5}
                                                    numberOfStars={5}
                                                    starDimension="17px"
                                                    starSpacing="3px"
                                                    name="rating"
                                                />
                                            </div>

                                            <div className={cx('product-favorite')}>
                                                <FontAwesomeIcon className={cx('product-check-icon')} icon={faCheck} />
                                                <span>Yêu thích</span>
                                            </div>

                                            <div className={cx('product-sale')}>
                                                <div className={cx('product-sale-percent')}>10%</div>

                                                <div className={cx('product-sale-label')}>Giảm</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <ul className={cx('pagination')}>
                            <li className={cx('pagination-item')}>
                                <Link to={routes.product} className={cx('pagination-item__link')}>
                                    <FontAwesomeIcon icon={faAngleLeft} />
                                </Link>
                            </li>
                            <li className={cx('pagination-item', 'pagination-item--active')}>
                                <Link to={routes.product} className={cx('pagination-item__link')}>
                                    1
                                </Link>
                            </li>
                            <li className={cx('pagination-item')}>
                                <Link to={routes.product} className={cx('pagination-item__link')}>
                                    2
                                </Link>
                            </li>
                            <li className={cx('pagination-item')}>
                                <Link to={routes.product} className={cx('pagination-item__link')}>
                                    3
                                </Link>
                            </li>
                            <li className={cx('pagination-item')}>
                                <Link to={routes.product} className={cx('pagination-item__link')}>
                                    4
                                </Link>
                            </li>
                            <li className={cx('pagination-item')}>
                                <Link to={routes.product} className={cx('pagination-item__link')}>
                                    5
                                </Link>
                            </li>
                            <li className={cx('pagination-item')}>
                                <Link to={routes.product} className={cx('pagination-item__link')}>
                                    ...
                                </Link>
                            </li>
                            <li className={cx('pagination-item')}>
                                <Link to={routes.product} className={cx('pagination-item__link')}>
                                    14
                                </Link>
                            </li>
                            <li className={cx('pagination-item')}>
                                <Link to={routes.product} className={cx('pagination-item__link')}>
                                    <FontAwesomeIcon icon={faAngleRight} />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
