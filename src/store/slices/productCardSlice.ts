import {createSlice} from "@reduxjs/toolkit";
import {initialState} from "../types/productType.ts";

const productCardSlice = createSlice({
    name: "productCard",
    initialState,
    reducers: {
        addProductCard(state, action) {
            state.productListItem.push({
                id: action.payload.id,
                message: action.payload.message,
                sale: action.payload.sale,
                title: action.payload.title,
                image: action.payload.image,
                category: action.payload.category,
                price: action.payload.price,
                manufacturer: action.payload.manufacturer,
                placeQuantity: action.payload.placeQuantity,
                powerEngine: action.payload.powerEngine,
                engineType: action.payload.engineType,
                releaseYear: action.payload.releaseYear,
                rating: action.payload.rating,
            })

        },
        deleteProductCard(state){
            if (state.productListItem.length === 1) {
                 state.productListItem
            } else {
                state.productListItem = state.productListItem.slice(1,2);
            }

        }
    }
})


export const {addProductCard,deleteProductCard } = productCardSlice.actions;
export default  productCardSlice.reducer;