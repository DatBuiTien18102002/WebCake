import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './PageNotFound.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import config from '~/config';
const cx = classNames.bind(styles);

PageNotFound.propTypes = {};

function PageNotFound(props) {
    return (
        <div className={cx('not-found')}>
            <div className={cx('not-found__wrapper')}>
                <img src={images.notFound} alt="" className={cx('not-found__img')} />
                <Button
                    to={config.routes.home}
                    primary
                    className={cx('not-found__back')}
                    leftIcon={<FontAwesomeIcon icon={faArrowLeft} />}
                >
                    Quay về trang home
                </Button>
            </div>
        </div>
    );
}

export default PageNotFound;
