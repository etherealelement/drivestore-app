import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface ButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: ReactNode;
    type: "submit" | "button" | "reset";
    size: "big" | "medium";
}