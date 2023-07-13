import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface ProductSelectionProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    items: string[];
}