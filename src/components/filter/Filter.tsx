import { FC } from 'react';
import {Availability} from "./availability/Availability.tsx";
import styles from "./Filter.module.scss"
import {NavBar} from "../ui/navbar/NavBar.tsx";
import { New } from './new/New.tsx';
import { Range } from './range/Range.tsx';

const navArr: string[] = ["ПАРАМЕТРЫ","ПО МАРКЕ"]
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
    </div>;
};