import config from '~/config';
import MainLayout from '~/layouts/MainLayout';
import AboutUs from '~/pages/AboutUs';
import Blog from '~/pages/Blog';
import Cart from '~/pages/Cart';
import Contact from '~/pages/Contact';
import Home from '~/pages/Home';
import Product from '~/pages/Product';
import ProductDetail from '~/pages/ProductDetail';

const publicRouters = [
    { path: config.routes.home, page: Home, layout: MainLayout },
    { path: config.routes.product, page: Product },
    { path: `${config.routes.product}/:id`, page: ProductDetail },
    { path: config.routes.contact, page: Contact },
    { path: config.routes.aboutUs, page: AboutUs },
    { path: config.routes.blog, page: Blog },
    { path: config.routes.cart, page: Cart },
];

export { publicRouters };
