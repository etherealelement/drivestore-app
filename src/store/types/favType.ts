

export type favCartType = {
    id: number,
    message: string,
    sale: boolean,
    title: string,
    image: string,
    category: string,
    price: number | string,
}

export type favState = {
    favList: favCartType[];
}

export const initialState:favState = {
    favList: [],
}