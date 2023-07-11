import { FC, useState } from 'react';
import styles from "./Brand.module.scss";
import {ArrowUp} from "../../ui/arrows/ArrowUp.tsx";
import {ArrowDown} from "../../ui/arrows/ArrowDown.tsx";
import {Checkbox} from "../../ui/checkbox/Checkbox.tsx";



export const Brand: FC = () => {
    const [arrow, setArrow] = useState(true)

    const handleArrow = ():void => {
        setArrow(!arrow);
    }

    return <div className={styles.brand}>
        <div className={styles.brand__block} onClick={handleArrow}>
            <span className={styles.brand__block_drop}>
                {arrow ? <ArrowDown/> : <ArrowUp/>}
            </span>
            <span className={styles.brand__block_spn}>Бренд</span>
        </div>

        <div className={`${arrow ? styles.brand__block_input : styles.hidden}`}>
            <Checkbox type={"checkbox"}>BRP</Checkbox>
            <Checkbox type={"checkbox"}>Spark 2</Checkbox>
            <Checkbox type={"checkbox"}>Spark 3</Checkbox>
        </div>

            <a href="#" className={`${arrow ? styles.brand__block_link : styles.hidden}`}>Показать еще</a>

    </div>;
};