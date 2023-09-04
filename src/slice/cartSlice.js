const { createSlice } = require('@reduxjs/toolkit');

const storageCarts = JSON.parse(localStorage.getItem('cartList'));

const updateStorage = (productList) => {
    const jsonListProduct = JSON.stringify(productList);
    localStorage.setItem('cartList', jsonListProduct);
};

const cart = createSlice({
    name: 'carts',
    initialState: storageCarts || [],
    reducers: {
        addCart: (state, action) => {
            state.push(action.payload);
            updateStorage(state);
        },
        updateCart: (state, action) => {
            const newCart = action.payload;
            const cartIndex = state.findIndex((cart) => cart.id === newCart.id);

            if (cartIndex >= 0) {
                state[cartIndex] = newCart;
                updateStorage(state);
            }
        },

        deleteCart: (state, action) => {
            const removeCartId = action.payload;
            state = state.filter((cart) => cart.id !== removeCartId);
            updateStorage(state);
            return state;
        },
    },
});

const { reducer, actions } = cart;
export const { addCart, updateCart, deleteCart } = actions;
export default reducer;
