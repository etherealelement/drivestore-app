import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";


export interface FilterDropdownProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode;
}