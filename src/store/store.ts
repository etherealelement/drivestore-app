import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice.ts";
import favoritesReducer from "./slices/favoritesSlice.ts"
import productCardReducer from "./slices/productCardSlice.ts"

const store = configureStore({
    reducer: {
        cart: cartReducer,
        favorites: favoritesReducer,
        productCard: productCardReducer,
    }
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;