export interface CartsInterface {
    id: number,
    category: string,
    image: string,
    title: string,
    price: string | number,
    message: string,
    sale: boolean,
}

export interface CartItemPayload {
    id: number,
    category: string,
    image: string,
    title: string,
    price: number | string,
    message: string,
    sale: boolean,
}