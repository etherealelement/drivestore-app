import {catalogData} from "../../utils/data/productArray.ts";

export type CatalogCardType = {
    id: number,
    category: string;
    image: string,
    title: string,
    price: number | string,
    message?: string,
    sale: boolean,
    manufacturer: string,
    placeQuantity: number,
    powerEngine: number,
    engineType: string,
    releaseYear: number;
    rating: number,
    popular: number,
    availability: string,
    new: boolean,
    stocks: boolean,
    powerLs: number,
    maksSpeed: number,
    brand: string,
    model: string,
    country: string,
    hit: boolean,
    diller: boolean,
}

export type CatalogCardState ={
    catalog: CatalogCardType[];
}

export const initialState: CatalogCardState = {
    catalog: catalogData,
}