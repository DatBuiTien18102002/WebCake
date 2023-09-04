import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './CakeItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '../Image';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function AccountItem({ data }) {
    return (
        <Link to={`/Product/${data.id}`} className={cx('wrapper')}>
            <Image className={cx('avatar')} src={data.image} alt={data.name} />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{data.name}</span>
                </h4>
                <span className={cx('price')}>{data.price}</span>
            </div>
        </Link>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountItem;
