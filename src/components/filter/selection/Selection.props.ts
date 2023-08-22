import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface SelectionProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode[];
}