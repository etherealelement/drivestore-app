export type productItemType = {
    id: number,
    category: string,
    image: string,
    title: string,
    price: number | string,
    sale: boolean,
    message: string,
    manufacturer: string,
    placeQuantity: number,
    powerEngine: number,
    engineType: string,
    releaseYear: number,
    rating: number,
}

 export type productItemState = {
    productListItem: productItemType[]
}

export const initialState:productItemState = {
    productListItem: [],
}

