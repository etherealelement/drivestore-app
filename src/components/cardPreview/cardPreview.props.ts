import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface CardPreviewProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    itemId: number,
    message?: string,
    sale: string,
    title: string,
    image: string,
    category?:string,
    price: string,
    oldPrice?: number | string;
    manufacturer: string,
    placeQuantity: number,
    powerEngine: number,
    engineType: string,
    releaseYear: number,
    rating: number,
}