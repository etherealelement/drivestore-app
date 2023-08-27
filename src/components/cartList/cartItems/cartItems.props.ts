import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface CartItemsProps extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
    itemId: number,
    category: string,
    image: string,
    title: string,
    price: number,
    message: string,
    sale?: boolean,
}