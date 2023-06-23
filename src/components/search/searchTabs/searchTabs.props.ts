import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface SearchTabsProps extends DetailedHTMLProps<HTMLAttributes<HTMLLinkElement>, HTMLLinkElement> {
    children: ReactNode;
    link: string;
}