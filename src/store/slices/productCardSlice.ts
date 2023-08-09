import {createSlice} from "@reduxjs/toolkit";
import {CartActionInterface, CartStateInterface} from "../interfaces/cartSliceInterface.ts";


const productCardSlice = createSlice({
    name: "productCard",
    initialState: {
        productCard: []
    },
    reducers: {
        addProductCard(state:CartStateInterface, action:CartActionInterface) {
            state.productCard.push({
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
        deleteProductCard(state, action){
            if (state.productCard.length === 1) {
                 state.productCard
            } else {
                state.productCard = state.productCard.slice(1,2);
            }

        }
    }
})


export const {addProductCard,deleteProductCard } = productCardSlice.actions;
export default  productCardSlice.reducer;