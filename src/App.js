import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRouters } from './routers';
import MainLayout from './layouts/MainLayout';
import { Fragment, useEffect } from 'react';
import DefaultLayout from './layouts/DefaultLayout';
import productApi from './services/productApi';
import { useDispatch } from 'react-redux';
import { setProducts } from './pages/Product/productSlice';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        const getProduct = async () => {
            try {
                let result = await productApi.get();
                dispatch(setProducts(result));
            } catch (error) {
                console.log('Failed', error);
            }
        };
        getProduct();
    }, []);

    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRouters.map((route, index) => {
                        let Layout = DefaultLayout;

                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }
                        const Page = route.page;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
