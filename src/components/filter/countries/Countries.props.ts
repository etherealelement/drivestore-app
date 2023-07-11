import {DetailedHTMLProps, HTMLAttributes} from "react";

export  interface CountriesProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    countries: string[];
}