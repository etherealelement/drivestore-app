export type CartTypeTypes = {
    id: number,
    message: string,
    sale: boolean,
    title: string,
    image: string,
    category: string,
    price: number | string,

}

export type CartState = {
    cartList: CartTypeTypes[];
}

export const initialState: CartState = {
    cartList: [],
}