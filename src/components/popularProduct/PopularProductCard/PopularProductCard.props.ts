import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface PopularProductCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
    image: string;
    children: ReactNode;
    price?: string | boolean;
    message?: string;
    sale?: boolean
}