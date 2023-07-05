import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface BreadcrumbsItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
    children: ReactNode;
    link: string;
}