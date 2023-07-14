import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface CheckboxProps extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    children: ReactNode;
    type: string;
    labelColor: "default" | "ghost";
}