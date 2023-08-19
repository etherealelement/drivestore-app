import { FC } from 'react';
import {Availability} from "./availability/Availability.tsx";
import styles from "./Filter.module.scss"
import {NavBar} from "../ui/navbar/NavBar.tsx";
import { New } from './new/New.tsx';
import {RangeSlider} from './range/Range.tsx';
import {Selection} from "./selection/Selection.tsx";
import {Brand} from "./brand/Brand.tsx";
import {Model} from "./model/Model.tsx";
import {Stocks} from "./stocks/Stocks.tsx";
import {Countries} from "./countries/Countries.tsx";
import {Choose} from "./choose/Choose.tsx";

const navArr: string[] = ["ПАРАМЕТРЫ","ПО МАРКЕ"];
const optionsArr: string[] = ["90", "130", "154", "230","300"];
const optionsTitle: string[] = ["Мощность, л.с.", "Мощность двигателя, л.с.", "Макс. скорость"];
const countriesArr: string[] = ["Россия", "Китай", "Германия", "CША"]


export const Filter: FC = () => {
    return <div className={styles.filter}>
        <ul className={styles.filter__list}>
            {navArr.map((item,index) => <NavBar
                onEvent={(e) => e.preventDefault()}
                key={index}
            >{item}</NavBar>)}
        </ul>
        <Availability></Availability>
        <New></New>
        <RangeSlider></RangeSlider>
        <Selection options={optionsArr} children={optionsTitle}></Selection>
        <Brand></Brand>
        <Model></Model>
        <Stocks></Stocks>
        <Countries countries={countriesArr}></Countries>
        <Choose></Choose>
    </div>;
};