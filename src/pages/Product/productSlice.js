import productApi from '~/services/productApi';

const { createSlice } = require('@reduxjs/toolkit');

const product = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
        setProducts: (state, action) => {
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
