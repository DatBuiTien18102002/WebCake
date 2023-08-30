import config from '~/config';
import MainLayout from '~/layouts/MainLayout';
import AboutUs from '~/pages/AboutUs';
import Blog from '~/pages/Blog';
import Contact from '~/pages/Contact';
import Home from '~/pages/Home';
import Product from '~/pages/Product';

const publicRouters = [
    { path: config.routes.home, page: Home, layout: MainLayout },
    { path: config.routes.product, page: Product },
    { path: config.routes.contact, page: Contact },
    { path: config.routes.aboutUs, page: AboutUs },
    { path: config.routes.blog, page: Blog },
];

export { publicRouters };
