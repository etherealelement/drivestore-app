import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface PaginationProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode;
}

