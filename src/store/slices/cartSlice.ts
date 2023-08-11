import {createSlice} from "@reduxjs/toolkit";
import {initialState} from "../types/cartType.ts";


console.log(initialState)
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addCartItem(state, action) {
            state.cartList.push({
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
            console.log(action.payload)
           state.cartList = state.cartList.filter(item => item.id !== action.payload);
        },
    }
})


export const { addCartItem, deleteCartItem } = cartSlice.actions;
export default cartSlice.reducer;