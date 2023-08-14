import {createSlice} from "@reduxjs/toolkit";
import {initialState} from "../types/cartType.ts";
import {CartItemInterface} from "../interfaces/cartSliceInterface.ts";





const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addCartItem(state, action) {
            const cartItemData:CartItemInterface = {
                id: action.payload.id,
                message: action.payload.message,
                sale: action.payload.sale,
                title: action.payload.title,
                image: action.payload.image,
                category: action.payload.category,
                price: action.payload.price,
            }
            state.cartList.push(cartItemData)
        },
        deleteCartItem(state, action) {
            console.log(action.payload)
           state.cartList = state.cartList.filter(item => item.id !== action.payload);
        },
    }
})




export const { addCartItem, deleteCartItem } = cartSlice.actions;
export default cartSlice.reducer;