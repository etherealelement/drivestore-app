import {createSlice} from "@reduxjs/toolkit";
import {initialState} from "../types/favType.ts";


const favoritesSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        addFavorites(state,action ){
            state.favList.push({
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
          state.favList = state.favList.filter(item => item.id !== action.payload.id);

        },
    },
})

export const {addFavorites, deleteFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;