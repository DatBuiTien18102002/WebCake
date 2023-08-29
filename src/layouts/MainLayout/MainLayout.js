import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './MainLayout.module.scss';
import Header from '~/layouts/components/Header';
import Footer from '~/layouts/components/Footer';

const cx = classNames.bind(styles);

function MainLayout({ children }) {
    return (
        <div>
            <Header />
            <div className={cx('wrapper')}>
                <div className={cx('container')}>{children}</div>
            </div>
            <Footer />
        </div>
    );
}

export default MainLayout;
