import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice.ts";
import favoritesReducer from "./slices/favoritesSlice.ts"
import productCardReducer from "./slices/productCardSlice.ts"

export default  configureStore({
    reducer: {
        cart: cartReducer,
        favorites: favoritesReducer,
        productCard: productCardReducer,
    }
})