import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface CartItemsProps extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
    category: string;
    image: string;
    title: string;
    sale?: boolean;
}