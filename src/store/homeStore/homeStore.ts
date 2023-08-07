import {CartItemPayload, CartsInterface} from "./interfaces/cartsInterface.ts";

// favorites
export const favoritesItem = [];
export const favoritesLocal = localStorage.setItem("favorites", JSON.stringify(favoritesItem));
export const favorites = JSON.parse(window.localStorage.getItem("favorites"))

//



// Хранение продуктов в локал сторе
export const cartItem:CartsInterface[] = []
const cartData:CartsInterface[] = JSON.parse(window.localStorage.getItem("cart"))
export const carts:CartsInterface[] = cartData.length > 0 ? cartData: cartItem;

// Добавление в корзину
export const addToCart = (itemId: number, category: string, image: string, title: string, price: string | number, message: string, sale: boolean): void => {
    const payload:CartItemPayload = {
        message: message,
        sale: sale,
        id: itemId,
        category: category,
        image: image,
        title: title,
        price: price,
    }
    cartItem.push(payload)
    return localStorage.setItem("cart", JSON.stringify(cartItem));
}

// Удаление из корзины

export const removeCartItem = (itemId: number) => {
    const newData =  cartData.filter(item => item.id !== itemId)
    return window.localStorage.setItem("cart", JSON.stringify(newData))
}

