import classNames from 'classnames/bind';
import styles from './CarouselBG.module.scss';

import React, { useState } from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators } from 'reactstrap';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function CarouselBG({ items }, args) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };
    console.log(items);
    const slides = items.map((item) => {
        return (
            <CarouselItem onExiting={() => setAnimating(true)} onExited={() => setAnimating(false)} key={item.src}>
                <img src={item.src} alt={item.altText} className={cx('bgImage')} />
                <h1 className={cx('tittle')}>
                    <span className={cx('bg-icon')}>
                        <img src={images.iconBakery} alt="Icon Bakery" className={cx('icon-bakery')} />
                        <p>Baroibeo</p>
                    </span>
                    <div className={cx('bg-namebakery')}>
                        <b> Tiệm bánh Baroibeo </b>
                    </div>
                </h1>
            </CarouselItem>
        );
    });
    return (
        <div className={cx('carouselBg')}>
            <div className={cx('container')}>
                <div className="row">
                    <div className="col-12">
                        <Carousel
                            activeIndex={activeIndex}
                            next={next}
                            previous={previous}
                            {...args}
                            className={cx('carousel-slides')}
                            interval="2000"
                            ride="carousel"
                        >
                            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                            {slides}
                            <CarouselControl
                                direction="prev"
                                directionText="Previous"
                                onClickHandler={previous}
                                className={cx('btn-prev')}
                            />
                            <CarouselControl
                                direction="next"
                                directionText="Next"
                                onClickHandler={next}
                                className={cx('btn-next')}
                            />
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CarouselBG;
