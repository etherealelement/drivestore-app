import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface PopularProductCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
    itemId: number;
    image: string;
    title: string;
    price?: string | boolean;
    message?: string;
    sale?: boolean
    category: string,
}