import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './AuthForm.module.scss';

AuthForm.propTypes = {};

const cx = classNames.bind(styles);

function AuthForm(props) {
    const { signIn, signUp } = props;
    return (
        <div className={cx('AuthForm')}>
            <div className={cx('container')}>
                <div className="row"></div>
            </div>
        </div>
    );
}

export default AuthForm;
