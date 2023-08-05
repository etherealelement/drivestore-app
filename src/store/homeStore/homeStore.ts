import {CartStateInterface} from "./interfaces/cartStateInterface.ts";
import {CartActionType} from "./interfaces/cartActionInterface.ts";

export const cartsShop = [

];

export const cartReducer = (state: CartStateInterface, action: CartActionType) => {
    console.log(state)
    switch (action.type) {
        case "addItem": {
            return [
                ...state,
                state.push(action.payload)
            ]
        }

    }
}

export const carts = JSON.parse(window.localStorage.getItem("cart"));
export const cartItem= localStorage.setItem("cart", JSON.stringify(cartsShop));


