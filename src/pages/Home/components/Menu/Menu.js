import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiamond } from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button/Button';
import { useEffect, useState } from 'react';
import menuApi from '~/services/menuApi';
import { Link } from 'react-router-dom';
import config from '~/config';

const cx = classNames.bind(styles);
const menuItems = [
    {
        image: images.discoverCake.cupcake,
        name: 'Cupcake Chocolate',
        price: '16.000đ',
        info: 'Có nguồn gốc từ châu Âu với hình dạng cây nấm nhỏ xinh, bên trên được phủ 1 lớp kem cầu kì.',
    },
    {
        image: images.discoverCake.tiramisu,
        name: 'Bánh Tiramisu',
        price: '73.600đ',
        info: 'Nổi tiếng ở nước Ý với hương vị thơm ngon, thanh ngọt và mát lạnh đã khiến nhiều người say đắm.',
    },
    {
        image: images.discoverCake.fritter,
        name: 'Bánh Rán Dorayaki',
        price: '30.000đ',
        info: 'Là một thứ bánh cổ truyền ở Nhật Bản với vỏ ngoài mềm mịn kèm lớp nhân thơm ngon, ngọt ngào',
    },
    {
        image: images.discoverCake.donut,
        name: 'Bánh Donut',
        price: '23.200đ',
        info: 'Chiếc bánh rán tròn tròn hình chiếc nhẫn độc đáo được bọc sốt bên trên tạo cảm giác thèm ăn.',
    },
    {
        image: images.discoverCake.pancake,
        name: 'Bánh Pancake',
        price: '60.000đ',
        info: 'Bắt nguồn từ Pháp, bánh được phủ sốt caramel, chocolate, các loại mứt hoa quả... cắt tầng.',
    },
    {
        image: images.discoverCake.strawberryCake,
        name: 'Bánh Chocolate dâu',
        price: '251.100đ',
        info: 'Bắt mắt lớp nền nâu đen được phủ trên mặt nhiều màu sắc rực rỡ, hương vị ngọt béo, đắng nhẹ.',
    },
];

function Menu() {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            try {
                const result = await menuApi.getAll();
                setMenu(result);
                console.log(result);
            } catch (error) {
                console.log('Failed', error);
            }
        };

        fetchApi();
    }, []);

    return (
        <section id="DiscoverMenu" className={cx('menu')}>
            <div className={cx('container')}>
                <div className="row">
                    <div className="col-12">
                        <div className={cx('menu-wrapp')}>
                            <div className={cx('menu-tittle')}>
                                <h2>Khám phá menu</h2>
                                <h6>Có gì đặc biệt ở đây</h6>
                            </div>
                            <div className={cx('menu-list')}>
                                {menu.map((menuItem) => (
                                    <div key={menuItem.id} className={cx('menu-item')}>
                                        <div className={cx('menu-img')}>
                                            <img src={menuItem.image} alt="" />
                                        </div>
                                        <div className={cx('menu-item-info')}>
                                            <div className={cx('menu-item-title')}>
                                                <div className={cx('menu-item-name-wrapp')}>
                                                    <FontAwesomeIcon icon={faDiamond} className={cx('diamond-icon')} />
                                                    <span>{menuItem.name}</span>
                                                </div>
                                                <div className={cx('menu-item-price')}>
                                                    {menuItem.price.toLocaleString('vi-VN')} đ
                                                </div>
                                            </div>

                                            <div className={cx('menu-item-desc')}>{menuItem.info}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <Button outline className={cx('menu-btn')}>
                                <Link className={cx('menu-link')} to={config.routes.product}>
                                    Xem thêm menu
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Menu;
