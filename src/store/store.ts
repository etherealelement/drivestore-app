import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice.ts";
import favoritesReducer from "./slices/favoritesSlice.ts"

export default  configureStore({
    reducer: {
        cart: cartReducer,
        favorites: favoritesReducer,
    }
})