import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface ProductFavoritesItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
    itemId: number,
    message: string,
    sale: string,
    title: string,
    image: string,
    category: string,
    price: number | string,
}