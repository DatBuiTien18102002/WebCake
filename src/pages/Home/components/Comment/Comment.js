import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Comment.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiamond } from '@fortawesome/free-solid-svg-icons';
import images from '~/assets/images';
import StarRatings from 'react-star-ratings';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CommentSlick.scss';

const cx = classNames.bind(styles);

Comment.propTypes = {};

const comments = [
    {
        avatar: images.commentAvatar.avatar1,
        name: 'Anh Dương Lâm',
        star: 4,
        desc: 'Tôi rất thích đưa gia đình đến đây vì phong cách rất chuyên nghiệp, bánh ngon và không gian quán cũng rất đẹp và sang trọng.',
    },
    {
        avatar: images.commentAvatar.avatar2,
        name: 'Chị Đức Bo',
        star: 3,
        desc: 'Trai ở đây rất đẹp, tôi là người thích sống ảo nên rất thích đến đây để chụp những tấm ảnh đẹp cùng bạn bè, theo mình thì đay cũng là nơi lý tưởng để hẹn hò.',
    },
    {
        avatar: images.commentAvatar.avatar3,
        name: 'Anh Tấn Trung',
        star: 5,
        desc: 'Mình rất hài lòng về thái độ phục vụ của quán , chủ quán rất đẹp trai thân thiện, bánh rất ngon, mình sẽ còn mua bánh ở đây nhiều lần nữa.',
    },
    {
        avatar: images.commentAvatar.avatar4,
        name: 'Anh Bray',
        star: 5,
        desc: 'Mình rất hài lòng về thái độ phục vụ của quán, bánh rất ngon, mình sẽ còn mua bánh ở đây nhiều lần nữa.',
    },
];

function Comment() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,

        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <section id="Comment" className={cx('comment')}>
            <div className={cx('container')}>
                <div className="row">
                    <div className="col-12">
                        <div className={cx('tittle', 'comment-tittle')}>
                            <h2>Đánh giá của khách hàng</h2>
                            <FontAwesomeIcon icon={faDiamond} className={cx('diamond-icon')} />
                        </div>

                        <Slider {...settings} className={cx('comment-list')}>
                            {comments.map((comment) => (
                                <div key={comment.name} className={cx('comment-item')}>
                                    <div className={cx('comment-info')}>
                                        <img src={comment.avatar} alt="" className={cx('comment-img')} />
                                        <div className={cx('comment-info-wrapper')}>
                                            <div className={cx('comment-name')}>{comment.name}</div>
                                            <StarRatings
                                                starRatedColor="yellow"
                                                rating={comment.star}
                                                numberOfStars={5}
                                                starDimension="20px"
                                                starSpacing="3px"
                                                name="rating"
                                            />
                                        </div>
                                    </div>
                                    <div className={cx('commet-desc')}>{comment.desc}</div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Comment;
