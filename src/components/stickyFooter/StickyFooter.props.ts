import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface StickyFooterProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode;
}