import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "product",
    initialState: {
        data: []
    },
    reducers: {
        addToCart: (state, action) => {
            state.data.push(action.payload)
        },
        removeCart: (state, action) => {
            console.log("product", state.data);

            state.data = state.data.filter((product) => product.id !== action.payload.id)
        }
    }
})

export const { addToCart, removeCart } = productSlice.actions;
export default productSlice.reducer