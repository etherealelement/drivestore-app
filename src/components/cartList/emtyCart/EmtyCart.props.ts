import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface EmtyCartProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode;
}