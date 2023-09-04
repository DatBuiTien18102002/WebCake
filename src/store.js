import { configureStore } from '@reduxjs/toolkit';
import productReducer from '~/slice/productSlice';
import cartReducer from '~/slice/cartSlice';
const rootReducer = {
    products: productReducer,
    carts: cartReducer,
};

const store = configureStore({
    reducer: rootReducer,
});

export default store;
