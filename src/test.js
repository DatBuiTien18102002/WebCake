import React, { useState } from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';
import images from './assets/images';

const items = [
    {
        src: images.bgImage,
        altText: 'Slide 11',
        caption: 'Slide 1',
        key: 1,
    },
    {
        src: images.bgImage2,
        altText: 'Slide 2',
        caption: 'Slide 2',
        key: 2,
    },
    {
        src: images.bgImage3,
        altText: 'Slide 3',
        caption: 'Slide 3',
        key: 3,
    },
];

function App(args) {
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

    const slides = items.map((item) => {
        return (
            <CarouselItem onExiting={() => setAnimating(true)} onExited={() => setAnimating(false)} key={item.src}>
                <img src={item.src} alt={item.altText} className="bgImage" />
                {/* <CarouselCaption captionText={item.caption} captionHeader={item.caption} /> */}
                <h1 className="tittle">Coffee Time</h1>
            </CarouselItem>
        );
    });

    return (
        <div className="wrapper">
            <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
                {...args}
                className="carousel-slides"
                interval="2000"
                ride="carousel"
            >
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                {slides}
                <CarouselControl
                    direction="prev"
                    directionText="Previous"
                    onClickHandler={previous}
                    className="btn-prev"
                />
                <CarouselControl direction="next" directionText="Next" onClickHandler={next} className="btn-next" />
            </Carousel>
        </div>
    );
}
export default App;
