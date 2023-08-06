import {CartStateInterface} from "./interfaces/cartStateInterface.ts";
import {CartActionType} from "./interfaces/cartActionInterface.ts";

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


export const favoritesReducer = (state: any, action: any) => {
    switch (action.type) {
        case "addFav": {
            return [
                ...state,
                {
                    id: action.itemId,
                    title: action.title,
                    image: action.image,
                    sale: action.sale,
                    price: action.price,
                }
            ]
        }
    }
}