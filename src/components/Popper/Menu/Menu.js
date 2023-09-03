import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import HeadlessTippy from '@tippyjs/react/headless';
import MenuItem from './MenuItem';
import HeaderMenu from './HeaderMenu';
import { useState } from 'react';

import { Wrapper as PopperWrapper } from '..';

const cx = classNames.bind(styles);

const defaultOnclick = () => {};

function Menu({ children, items = [], arrow = false, hideOnClick = false, onClick = defaultOnclick }) {
    const [history, setHistory] = useState([{ data: items }]);

    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;

            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                            // } else if (item.tittle === 'Đăng nhập' || item.tittle === 'Đăng ký') {
                            //     item.onClick();
                        } else {
                            item.onClick();
                        }
                    }}
                />
            );
        });
    };

    const handleBack = () => {
        setHistory((prev) => prev.slice(0, history.length - 1));
    };

    const renderResult = (attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
            <PopperWrapper arrow={arrow} className={cx('menu-popper')}>
                {history.length > 1 && <HeaderMenu tittle={current.tittle} onBack={handleBack} />}
                <div className={cx('body-menu')}>{renderItems()}</div>
            </PopperWrapper>
        </div>
    );

    const handleResultOnHide = () => {
        setHistory((prev) => prev.slice(0, 1));
    };

    return (
        <div>
            <HeadlessTippy
                interactive
                hideOnClick={hideOnClick}
                // delay={[0, 700]}
                placement="bottom-end"
                offset={[17, 17]} //Chỉnh vị trí headlesstippy
                render={renderResult}
                onHide={handleResultOnHide}
            >
                {children}
            </HeadlessTippy>
        </div>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hideOnClick: PropTypes.func,
    onClick: PropTypes.func,
};

export default Menu;
