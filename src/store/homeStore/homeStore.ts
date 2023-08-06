
export const cartsShop = [

];

export const favoritesItem = [];



//
export const favoritesLocal = localStorage.setItem("favorites", JSON.stringify(favoritesItem));
export const favorites = JSON.parse(window.localStorage.getItem("favorites"))


// Хранение продуктов в локал сторе
export const carts = JSON.parse(window.localStorage.getItem("cart"));



