import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './AuthForm.module.scss';

import { Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faGoogle } from '@fortawesome/free-brands-svg-icons';
import Button from '~/components/Button';
import { Formik, Form, FastField } from 'formik';
import * as Yup from 'yup';
import InputField from './InputField';

AuthForm.propTypes = {};

const cx = classNames.bind(styles);

function AuthForm(props) {
    const { signIn, signUp, showSignInForm, showSignUpForm } = props;

    // const { showSignInForm, showSignUpForm } = functionClickList;
    console.log(showSignInForm, showSignUpForm);

    const initialValues = {
        email: '',
        password: '',
        confirmPassword: '',
    };

    const validateSchema = Yup.object({
        email: Yup.string().email('Email không hợp lệ').required('Email không được để trống ! '),
        password: Yup.string().min(6, 'Mật khẩu phải tối thiểu 6 chữ số !').required('Mật khẩu không được để trống !'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Mật khẩu không trùng khớp! ')
            .required('Nhập lại mật khẩu !'),
    });

    return (
        <div className={cx('modal')}>
            <div className={cx('modal__overlay')}>
                <div className={cx('modal__body')}>
                    <div className={cx('auth-form')}>
                        <div className={cx('auth-form__container')}>
                            <div className={cx('auth-form__header')}>
                                {signIn ? (
                                    <>
                                        <div className={cx('auth-form__heading')}>Đăng nhập</div>
                                        <div
                                            className={cx('auth-form__switch-btn')}
                                            onClick={() => {
                                                showSignInForm(false);
                                                showSignUpForm(true);
                                            }}
                                        >
                                            Đăng ký
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className={cx('auth-form__heading')}>Đăng ký</div>
                                        <div
                                            className={cx('auth-form__switch-btn')}
                                            onClick={() => {
                                                showSignUpForm(false);
                                                showSignInForm(true);
                                            }}
                                        >
                                            Đăng nhập
                                        </div>
                                    </>
                                )}
                            </div>

                            <Formik initialValues={initialValues} validationSchema={validateSchema}>
                                {(formikProps) => {
                                    const { values, errors, touched } = formikProps;
                                    console.log({ values, errors, touched });
                                    return (
                                        <Form>
                                            <FastField
                                                name="email"
                                                component={InputField}
                                                placeholder="Email của bạn"
                                                className={cx('auth-form__input')}
                                            />
                                            <FastField
                                                name="password"
                                                component={InputField}
                                                placeholder="Mật khẩu của bạn"
                                                className={cx('auth-form__input')}
                                                type="password"
                                            />
                                            {signUp ? (
                                                <FastField
                                                    name="confirmPassword"
                                                    component={InputField}
                                                    placeholder="Nhập lại mật khẩu"
                                                    className={cx('auth-form__input')}
                                                    type="password"
                                                />
                                            ) : (
                                                <></>
                                            )}

                                            <div className={cx('auth-form__aside')}>
                                                {signUp ? (
                                                    <p className={cx('auth-form__policy-text')}>
                                                        Bằng việc đăng kí bạn đã đồng ý với Baroibeo bakery về{' '}
                                                        <Link to={'/'} className={cx('auth-form__policy-link')}>
                                                            Điều khoản dịch vụ
                                                        </Link>{' '}
                                                        &{' '}
                                                        <Link to={'/'} className={cx('auth-form__policy-link')}>
                                                            Chính sách bảo mật
                                                        </Link>
                                                    </p>
                                                ) : (
                                                    <div className={cx('auth-form__help')}>
                                                        <Link
                                                            to="/"
                                                            className={cx('auth-form__link ', 'auth-form__forgot')}
                                                        >
                                                            Quên mật khẩu
                                                        </Link>
                                                        <span className={cx('auth-form__separate')}></span>
                                                        <Link to="/" className={cx('auth-form__link')}>
                                                            Cần trợ giúp ?
                                                        </Link>
                                                    </div>
                                                )}
                                            </div>

                                            <div className={cx('auth-form_controls')}>
                                                <Button
                                                    type="button"
                                                    className={cx('btn-back')}
                                                    onClick={() => {
                                                        if (signUp) {
                                                            showSignUpForm(false);
                                                        } else {
                                                            showSignInForm(false);
                                                        }
                                                    }}
                                                >
                                                    Trở Lại
                                                </Button>
                                                {signUp ? (
                                                    <Button className={cx('btn-register')} primary>
                                                        Đăng ký
                                                    </Button>
                                                ) : (
                                                    <Button className={cx('btn-register')} primary>
                                                        Đăng nhập
                                                    </Button>
                                                )}
                                            </div>
                                        </Form>
                                    );
                                }}
                            </Formik>
                        </div>
                        <div className={cx('auth-form__socials')}>
                            <a
                                href="https://www.facebook.com/"
                                className={cx('auth-form__socials--link', 'auth-form__socials--fb')}
                            >
                                <div className={cx('auth-form__socials--wrapper')}>
                                    <FontAwesomeIcon
                                        className={cx('auth-form__socials-icon')}
                                        icon={faFacebookSquare}
                                    />
                                    <span className={cx('auth-form__socials-tittle')}>Kết nối với Facebook</span>
                                </div>
                            </a>
                            <a
                                href="https://www.google.com/webhp?hl=vi&sa=X&ved=0ahUKEwj-tLPmg_P6AhUU9XMBHc0lBpEQPAgI"
                                className={cx('auth-form__socials--link', 'auth-form__socials--gg')}
                            >
                                <div className={cx('auth-form__socials--wrapper')}>
                                    <FontAwesomeIcon className={cx('auth-form__socials-icon')} icon={faGoogle} />
                                    <span className={cx('auth-form__socials-tittle')}>Kết nối với Google</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AuthForm;
