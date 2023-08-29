import { Fragment } from 'react';
import CarouselBG from './components/CarouselBG';
import images from '~/assets/images';
import Introduce from './components/Introduce/Introduce';
import Menu from './components/Menu';
import Comment from './components/Comment/Comment';
import TimeService from './components/TimeService/TimeService';
import ImgShop from './components/ImgShop/ImgShop';

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

function Home() {
    return (
        <>
            <CarouselBG items={items} />

            <Introduce />

            <Menu />

            <Comment />

            <TimeService />

            <ImgShop />
        </>
    );
}

export default Home;
