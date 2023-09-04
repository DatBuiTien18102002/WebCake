const { createSlice } = require('@reduxjs/toolkit');

const storageProducts = JSON.parse(localStorage.getItem('productList'));

const product = createSlice({
    name: 'products',
    initialState: storageProducts || [],
    reducers: {
        setProducts: (state, action) => {
            const jsonListProduct = JSON.stringify(action.payload);
            localStorage.setItem('productList', jsonListProduct);
            return action.payload;
        },
        addProduct: (state, action) => {
            state.push(action.payload);
        },
    },
});

const { reducer, actions } = product;
export const { addProduct, setProducts } = actions;
export default reducer;
