import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/userSlice"
import productSlice from "../features/productSlice"

const store = configureStore({
    reducer: {
        user: userSlice,
        product: productSlice
    }
})

export default store