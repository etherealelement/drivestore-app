import {createSlice} from "@reduxjs/toolkit";
import {CartActionInterface, CartStateInterface} from "../interfaces/cartSliceInterface.ts";



const favStorage:CartStateInterface[] = [];


const favoritesSlice = createSlice({
    name: "favorites",
    initialState: {
        favorites: [],
    },
    reducers: {
        addFavorites(state:CartStateInterface,action:CartActionInterface ){
            state.favorites.push({
                id: action.payload.id,
                message: action.payload.message,
                sale: action.payload.sale,
                title: action.payload.title,
                image: action.payload.image,
                category: action.payload.category,
                price: action.payload.price,
            })
        },
        deleteFavorites(state, action) {
          state.favorites = state.favorites.filter(item => item.id !== action.payload.id);


            const favStorageFilter:CartStateInterface[] = favStorage.filter(item => item.id !== action.payload.id)
            localStorage.setItem("favorites", JSON.stringify(favStorageFilter))
        },
    },
})

export const {addFavorites, deleteFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;