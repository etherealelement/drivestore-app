import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface PopularProductCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
    itemId: number,
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
    availability: string,
}