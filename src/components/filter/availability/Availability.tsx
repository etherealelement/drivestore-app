import {FC, useState} from 'react';
import styles from "./Availability.module.scss";
import {ArrowUp} from "../../ui/arrows/ArrowUp.tsx";
import {ArrowDown} from "../../ui/arrows/ArrowDown.tsx";
import {Checkbox} from "../../ui/checkbox/Checkbox.tsx";
import {useAppDispatch} from "../../../store/hooks/hooks.ts";
import {sortByAvailability, sortByOrdered} from "../../../store/slices/catalogCardSlice.ts";
export const Availability: FC = () => {
    const [arrow, setArrow] = useState(true);
    const [checked, setChecked] = useState<boolean>(false)
    const dispatch = useAppDispatch();
    // фильтрация по наличию товара
    const handleArrow = () => {
        setArrow(!arrow)
    }

    const handleSort = () => {
        setChecked(!checked)
        if(checked) {
            dispatch(sortByAvailability("В наличии"))
        } else {
            dispatch(sortByAvailability("Все товары"))
        }

    }

    return <div className={styles.availability}>
        <div className={styles.availability__block} onClick={handleArrow}>
            <span className={styles.availability__block_drop}>
                {arrow ? <ArrowUp/> : <ArrowDown/>}
            </span>
            <span className={styles.availability__block_spn}>Наличие</span>
        </div>

        <div className={`${arrow ? styles.availability__block_input : styles.hidden}`}>
            <Checkbox type={"checkbox"} labelColor={"default"} onClick={handleSort}>В наличии</Checkbox>
            <Checkbox type={"checkbox"} labelColor={"default"}  onClick={() => dispatch(sortByOrdered("Под заказ"))}>Под заказ</Checkbox>
        </div>
    </div>;
};