import classNames from 'classnames/bind';
import styles from './Introduce.module.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiamond } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function Introduce() {
    return (
        <section id="Introduce" className={cx('introduce')}>
            <div className={cx('container')}>
                <div className="row">
                    <div className="col-lg-7 col-sm-12 order-lg-1 order-2 ">
                        <div className={cx('bg-image')}>
                            <div className={cx('bg-front')}>
                                <img src={images.imgBakeryFront} alt="" className={cx('introduce-img')} />
                            </div>
                            <div className={cx('bg-back')}>
                                <img src={images.imgBakeryBehind} alt="" className={cx('introduce-img')} />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-sm-12 order-lg-2  order-1 gx-5 d-flex flex-column justify-content-center">
                        <p className={cx('introduce-name')}>Baroibeo bakery</p>
                        <h2 className={cx('introduce-tittle')}>Giới thiệu</h2>

                        <div className={cx('introduce-separate')}>
                            <FontAwesomeIcon icon={faDiamond} className={cx('introduce-icon')} />
                            <hr className={cx('introduce-line')} />
                        </div>
                        <p className={cx('introuce-info')}>
                            Với tầm nhìn trở thành thương hiệu hàng đầu về chất lượng những sản phẩm bánh ngọt. Tiệm
                            bánh Baroibeo luôn đề cao giá trị con người trong tổ chức và xem khách hàng là những người
                            bạn để chia sẻ và truyền cảm hứng. Các sản phẩm của tiệm được làm từ các nguyên liệu nhập
                            khẩu của các nước có truyền thống làm bánh như: Newzeland, Mỹ, Pháp, Bỉ. Với hương vị thơm
                            ngon đặc trưng của các loại kem, bơ, sữa, phô mai, hạt hạnh nhân, chocolate... dưới bàn tay
                            khéo léo của những người thợ làm bánh giàu kinh nghiệm của Baroibeo đã biến mỗi chiếc bánh
                            thực sự là một tác phẩm nghệ thuật
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Introduce;
