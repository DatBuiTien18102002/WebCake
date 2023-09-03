import React, { Fragment, useEffect, useState } from 'react';
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
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import routes from '~/config/routes';
import Menu from '~/components/Popper/Menu/Menu';
import productApi from '~/services/productApi';
import queryString from 'query-string';

Product.propTypes = {};
const cx = classNames.bind(styles);

function Product(props) {
    const [productList, setProductList] = useState([]);
    const [pagination, setPagination] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [sortBy, setSortBy] = useState('');
    const [activeSort, setActiveSort] = useState('');

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const getProduct = async () => {
            if (sortBy === '') {
                try {
                    const params = { _page: currentPage, _limit: 7 };

                    let result = await productApi.getAll(params);

                    setProductList(result.data);

                    const totalPagination = Math.ceil(result.pagination._totalRows / result.pagination._limit);

                    setPagination(totalPagination);
                    setCurrentPage(result.pagination._page);
                    navigate(`?_page=${currentPage}&_limit=${7}`);
                } catch (error) {
                    console.log('Failed', error);
                }
            } else {
                try {
                    const result = await productApi.sort({ paginate: currentPage, ...sortBy });

                    setProductList(result.data);
                    navigate(`?_sort=${sortBy.nameSort}&_order=${sortBy.type}?&_page=${currentPage}&_limit=${7}`);
                } catch (error) {
                    console.log('Failed', error);
                }
            }
        };

        getProduct();
    }, [currentPage, sortBy]);

    // Handle Pagination

    const handlePrevPage = () => {
        if (currentPage === 1) {
            return;
        }
        setCurrentPage(currentPage - 1);
    };
    const handlePagination = (numPage) => {
        setCurrentPage(numPage);
    };
    const handleNextPage = () => {
        console.log(queryString.parse(location.search));
        console.log(queryString.stringify(queryString.parse(location.search)));
        if (currentPage === pagination) {
            console.log('max');
            return;
        }
        setCurrentPage(currentPage + 1);
    };

    // sort product

    const handleSortClick = (objectQuery, active = '') => {
        setActiveSort(active);
        setSortBy(objectQuery);
    };

    // List sort

    const filterList = [
        {
            tittle: `A đến Z`,
            type: 'name',
            sort: 'asc',
            onClick: () => {
                handleSortClick({ nameSort: 'name', type: 'asc' });
            },
        },
        {
            tittle: 'Z đến A',
            type: 'name',
            sort: 'desc',
            onClick: () => {
                handleSortClick({ nameSort: 'name', type: 'desc' });
            },
        },
        {
            tittle: 'Cao đến thấp',
            type: 'price',
            sort: 'desc',
            onClick: () => {
                handleSortClick({ nameSort: 'price', type: 'desc' });
            },
        },
        {
            tittle: 'Thấp đến cao',
            type: 'price',
            sort: 'asc',
            onClick: () => {
                handleSortClick({ nameSort: 'price', type: 'asc' });
            },
        },
    ];
    return (
        <div className={cx('product')}>
            <div className={cx('container')}>
                <div className="row">
                    <div className={cx('col-lg-2 d-lg-block d-none')}>
                        <nav className={cx('product-filter')}>
                            <div className={cx('product-filter__tittle')}>
                                <FontAwesomeIcon icon={faFilter} className={cx('product-filter__icon')} />
                                Sắp xếp
                            </div>
                            <div className={cx('product-filter__default', 'product-filter__wrapper')}>
                                <div
                                    className={cx('product-filter__item', {
                                        active: activeSort === '',
                                    })}
                                    onClick={() => handleSortClick('', '')}
                                >
                                    Mặc định
                                </div>
                            </div>
                            <div className={cx('product-filter__wrapper')}>
                                <div className={cx('product-filter__heading')}>Tên sản phẩm</div>
                                <ul className={cx('product-filter__list')}>
                                    {filterList.map((filterItem) => {
                                        if (filterItem.type === 'name') {
                                            return (
                                                <li
                                                    key={filterItem.tittle}
                                                    className={cx('product-filter__item', {
                                                        active: filterItem.tittle === activeSort,
                                                    })}
                                                    onClick={() =>
                                                        handleSortClick(
                                                            { nameSort: 'name', type: filterItem.sort },
                                                            filterItem.tittle,
                                                        )
                                                    }
                                                >
                                                    {filterItem.tittle}
                                                </li>
                                            );
                                        }
                                        return <Fragment key={filterItem.tittle}></Fragment>;
                                    })}
                                </ul>
                            </div>
                            <div className={cx('product-filter__wrapper')}>
                                <div className={cx('product-filter__heading')}>Giá sản phẩm</div>
                                <ul className={cx('product-filter__list')}>
                                    {filterList.map((filterItem) => {
                                        if (filterItem.type === 'price') {
                                            return (
                                                <li
                                                    key={filterItem.tittle}
                                                    className={cx('product-filter__item', {
                                                        active: filterItem.tittle === activeSort,
                                                    })}
                                                    onClick={() =>
                                                        handleSortClick(
                                                            { nameSort: 'price', type: filterItem.sort },
                                                            filterItem.tittle,
                                                        )
                                                    }
                                                >
                                                    {filterItem.tittle}
                                                </li>
                                            );
                                        }
                                        return <Fragment key={filterItem.tittle}></Fragment>;
                                    })}
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
                                    <span className={cx('product-page__current')}>{currentPage} </span>/
                                    <span className={cx('product-page__num-page')}> {pagination}</span>
                                </div>
                                <div className={cx('product-page__control')}>
                                    {currentPage === 1 ? (
                                        <Button className={cx('product-btn')} disable>
                                            <FontAwesomeIcon icon={faAngleLeft} className={cx('product-icon')} />
                                        </Button>
                                    ) : (
                                        <Button className={cx('product-btn')} onClick={handlePrevPage}>
                                            <FontAwesomeIcon icon={faAngleLeft} className={cx('product-icon')} />
                                        </Button>
                                    )}

                                    {currentPage === pagination ? (
                                        <Button className={cx('product-btn')} disable>
                                            <FontAwesomeIcon icon={faAngleRight} className={cx('product-icon')} />
                                        </Button>
                                    ) : (
                                        <Button className={cx('product-btn')} onClick={handleNextPage}>
                                            <FontAwesomeIcon icon={faAngleRight} className={cx('product-icon')} />
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="row row-cols-lg-5 row-cols-md-3 row-cols-2">
                            {productList.map((product) => {
                                const newPrice = product.price - (product.price * product.discount) / 100;
                                return (
                                    <div key={product.id} className="col">
                                        <Link to={`/Product/${product.id}`} className={cx('product-item')}>
                                            {/* <img src={images.cake.cupcake} alt="" className={cx('product-img')}/> */}
                                            <div
                                                className={cx('product-img')}
                                                style={{
                                                    backgroundImage: `url(${product.image})`,
                                                }}
                                            ></div>
                                            <div className={cx('product-body')}>
                                                <div className={cx('product-name')}>
                                                    <FontAwesomeIcon icon={faDiamond} />
                                                    <span>{product.name}</span>
                                                </div>
                                                <div className={cx('product-price')}>
                                                    <div className={cx('product-price--old')}>
                                                        {product.price.toLocaleString('vi-VN')} đ
                                                    </div>
                                                    <div className={cx('product-price--new')}>
                                                        {newPrice.toLocaleString('vi-VN')} đ
                                                    </div>
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
                                                            rating={product.rate}
                                                            numberOfStars={5}
                                                            starDimension="17px"
                                                            starSpacing="3px"
                                                            name="rating"
                                                        />
                                                    </div>

                                                    <div className={cx('product-favorite')}>
                                                        <FontAwesomeIcon
                                                            className={cx('product-check-icon')}
                                                            icon={faCheck}
                                                        />
                                                        <span>Yêu thích</span>
                                                    </div>

                                                    <div className={cx('product-sale')}>
                                                        <div className={cx('product-sale-percent')}>
                                                            {product.discount}%
                                                        </div>

                                                        <div className={cx('product-sale-label')}>Giảm</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                );
                            })}
                        </div>

                        <ul className={cx('pagination')}>
                            <li className={cx('pagination-item')} onClick={handlePrevPage}>
                                <div className={cx('pagination-item__link')}>
                                    <FontAwesomeIcon icon={faAngleLeft} />
                                </div>
                            </li>

                            {/* <li className={cx('pagination-item', 'pagination-item--active')}>
                                    <Link to={routes.product} className={cx('pagination-item__link')}>
                                        {num}
                                    </Link>
                                </li> */}

                            {Array.from({ length: pagination }, (_, index) => index + 1).map((num) => {
                                if (currentPage === num) {
                                    return (
                                        <li
                                            key={num}
                                            className={cx('pagination-item', 'pagination-item--active')}
                                            onClick={() => handlePagination(num)}
                                        >
                                            <div className={cx('pagination-item__link')}>{num}</div>
                                        </li>
                                    );
                                } else {
                                    return (
                                        <li
                                            key={num}
                                            className={cx('pagination-item')}
                                            onClick={() => handlePagination(num)}
                                        >
                                            <div className={cx('pagination-item__link')}>{num}</div>
                                        </li>
                                    );
                                }
                            })}
                            <li className={cx('pagination-item')} onClick={handleNextPage}>
                                <div className={cx('pagination-item__link')}>
                                    <FontAwesomeIcon icon={faAngleRight} />
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
