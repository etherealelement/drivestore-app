import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface ProductFavoritesItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
    itemId?: number,
    title: string,
    image: string,
    category: string,
    price: string,
}