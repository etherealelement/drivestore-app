import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface CardPreviewProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    image?: string;
    oldPrice: string;
    newPrice: string;
    children: ReactNode;
    rating: number;
}