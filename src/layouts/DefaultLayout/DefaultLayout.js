import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { Link, useLocation } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import config from '~/config';
import { Fragment } from 'react';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    const location = useLocation();

    const listPath = location.pathname.split('/').filter((path) => path !== '');
    console.log(listPath);
    return (
        <>
            <Header />
            <div className={cx('wrapper')}>
                <div className={cx('container')}>
                    {/* <div className={cx('breadcrumb-wrapper')}> */}
                    <div className={cx('breadcrumb-container')}>
                        <Breadcrumb className={cx('breadcrumb')}>
                            <BreadcrumbItem>
                                <Link to={config.routes.home} className={cx('breadcrumb-item')}>
                                    Home
                                </Link>
                            </BreadcrumbItem>
                            {listPath.map((path) => {
                                if (listPath[listPath.length - 1] === path) {
                                    return <Fragment key={path}></Fragment>;
                                }
                                return (
                                    <BreadcrumbItem key={path}>
                                        <Link to={`/${path}`} className={cx('breadcrumb-item')}>
                                            {path}
                                        </Link>
                                    </BreadcrumbItem>
                                );
                            })}
                            <BreadcrumbItem active>{listPath[listPath.length - 1]}</BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                    {/* </div> */}
                    {children}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default DefaultLayout;
