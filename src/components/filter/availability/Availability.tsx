import {FC, useState} from 'react';
import styles from "./Availability.module.scss";
import {ArrowUp} from "../../ui/arrows/ArrowUp.tsx";
import {ArrowDown} from "../../ui/arrows/ArrowDown.tsx";
import {Checkbox} from "../../ui/checkbox/Checkbox.tsx";
export const Availability: FC = () => {
    const [arrow, setArrow] = useState(true);

    const handleArrow = () => {
        setArrow(!arrow)
    }

    return <div className={styles.availability}>
        <div className={styles.availability__block} onClick={handleArrow}>
            <span className={styles.availability__block_drop}>
                {arrow ? <ArrowUp/> : <ArrowDown/>}
            </span>
            <span className={styles.availability__block_spn}>Наличие</span>
        </div>

        <div className={`${arrow ? styles.availability__block_input : styles.hidden}`}>
            <Checkbox type={"checkbox"}>В наличии</Checkbox>
            <Checkbox type={"checkbox"}>Под заказ</Checkbox>
        </div>
    </div>;
};