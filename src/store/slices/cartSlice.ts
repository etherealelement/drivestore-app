import {createSlice} from "@reduxjs/toolkit";
import {CartActionInterface, CartStateInterface} from "../interfaces/cartSliceInterface.ts";


const cartsLocal = JSON.parse(localStorage.getItem("cart"))
const cartStorage:CartStateInterface[] = [];

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: !cartsLocal ? [] : cartsLocal,
    },
    reducers: {
        addCartItem(state:CartStateInterface[], action:CartActionInterface) {
            state.cart.push({
                id: action.payload.id,
                message: action.payload.message,
                sale: action.payload.sale,
                title: action.payload.title,
                image: action.payload.image,
                category: action.payload.category,
                price: action.payload.price,
            })
            cartStorage.push({
                id: action.payload.id,
                message: action.payload.message,
                sale: action.payload.sale,
                title: action.payload.title,
                image: action.payload.image,
                category: action.payload.category,
                price: action.payload.price,
            })

            window.localStorage.setItem("cart", JSON.stringify(cartStorage));
        },
        deleteCartItem(state, action) {
           state.cart =  state.cart.filter(item => item.id !== action.payload.id);
           const cartStorageClear:CartStateInterface[] = cartStorage.filter(item => item.id !== action.payload.id)
            localStorage.setItem("cart", JSON.stringify(cartStorageClear))
        },
    }
})


export const { addCartItem, deleteCartItem } = cartSlice.actions;
export default cartSlice.reducer;