import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface NavBarProps extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
    children: ReactNode;
}