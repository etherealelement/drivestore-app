import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface CategoryItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
    title: string;
    image: string;
    link: string;
}