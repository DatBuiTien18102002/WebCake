import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './InputField.module.scss';
import { FormFeedback, FormGroup, Input, Label } from 'reactstrap';
import { ErrorMessage } from 'formik';

InputField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
};

InputField.defaultProps = {
    type: 'text',
    label: '',
    placeholder: '',
    disabled: false,
};

const cx = classNames.bind(styles);

function InputField(props) {
    const { field, form, type, label, placeholder, disabled, className } = props;

    const { name } = field;

    const { errors, touched } = form;

    const showError = errors[name] && touched[name];

    return (
        <FormGroup>
            {label && <Label for={name}>{label}</Label>}

            <Input
                id={name}
                name={name}
                {...field}
                placeholder={placeholder}
                type={type}
                className={cx({ [className]: className })}
                invalid={showError}
            />
            <ErrorMessage name={name} component={FormFeedback} />

            
        </FormGroup>
    );
}

export default InputField;
