import { FC } from 'react';
import {Availability} from "./availability/Availability.tsx";
import styles from "./Filter.module.scss"
import {NavBar} from "../ui/navbar/NavBar.tsx";
import { New } from './new/New.tsx';
import { Range } from './range/Range.tsx';
import {Selection} from "./selection/Selection.tsx";

const navArr: string[] = ["ПАРАМЕТРЫ","ПО МАРКЕ"];
const optionsArr: string[] = ["90", "130", "154", "230","300"];
const optionsTitle: string[] = ["Мощность, л.с.", "Мощность двигателя, л.с.", "Макс. скорость"];

export const Filter: FC = () => {
    return <div>
        <ul className={styles.filter__list}>
            {navArr.map((item,index) => <NavBar
                onEvent={(e) => e.preventDefault()}
                key={index}
            >{item}</NavBar>)}
        </ul>
        <Availability></Availability>
        <New></New>
        <Range></Range>
        <Selection options={optionsArr} children={optionsTitle}></Selection>
    </div>;
};