import {createSlice} from "@reduxjs/toolkit";
import {CartActionInterface, CartStateInterface} from "../interfaces/cartSliceInterface.ts";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
    },
    reducers: {
        addCartItem(state:CartStateInterface, action:CartActionInterface) {
            state.cart.push({
                id: action.payload.id,
                message: action.payload.message,
                sale: action.payload.sale,
                title: action.payload.title,
                image: action.payload.image,
                category: action.payload.category,
                price: action.payload.price,
            })
        },
        deleteCartItem(state, action) {

        },
    }
})


export const { addCartItem, deleteCartItem } = cartSlice.actions;
export default cartSlice.reducer;