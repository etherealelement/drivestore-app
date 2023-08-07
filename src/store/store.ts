import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice.ts";


export default  configureStore({
    reducer: {
        cart: cartReducer,
    }
})