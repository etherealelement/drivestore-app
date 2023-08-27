import {FC, useState} from 'react';
import styles from "./Availability.module.scss";
import {ArrowUp} from "../../ui/arrows/ArrowUp.tsx";
import {ArrowDown} from "../../ui/arrows/ArrowDown.tsx";
import {Checkbox} from "../../ui/checkbox/Checkbox.tsx";
import {useAppDispatch} from "../../../store/hooks/hooks.ts";
import {reset, sortByAvailability} from "../../../store/slices/catalogCardSlice.ts";
export const Availability: FC = () => {
    const [checkedHave, setCheckedHave] = useState<boolean>(true);
    const [checkedOrder, setCheckedOrder] = useState<boolean>(true);
    const [value, setValue] = useState<boolean>(true)
    const dispatch = useAppDispatch();
 
    const handleArrow = () => {
        setValue(e => !e)
    }

    // функция сортировки по наличию
    const handleSortHave = () => {
        setCheckedHave(!checkedHave);
        if (checkedHave) {
            dispatch(sortByAvailability("В наличии"))
        } else {
            dispatch(reset())
        }

    }

    const handleSortOrdered = () => {
        setCheckedOrder(!checkedOrder);
        if (checkedOrder) {
            dispatch(sortByAvailability("Под заказ"))
        } else {
            dispatch(reset())
        }
        if (!checkedHave && checkedOrder || checkedHave && !checkedOrder || !checkedOrder && !checkedHave) dispatch(reset())
    }

    // функция сортировки под заказ



    return <div className={styles.availability}>
        <div className={styles.availability__block} onClick={handleArrow}>
            <span className={styles.availability__block_drop}>
                {value ? <ArrowUp/> : <ArrowDown/>}
            </span>
            <span className={styles.availability__block_spn}>Наличие</span>
        </div>

        <div className={`${value ? styles.availability__block_input : styles.hidden}`}>
            <Checkbox type={"checkbox"} labelColor={"default"} onClick={() => dispatch(reset())}>Все</Checkbox>
            <Checkbox type={"checkbox"} labelColor={"default"} onClick={handleSortHave}>В наличии</Checkbox>
            <Checkbox type={"checkbox"} labelColor={"default"}  onClick={handleSortOrdered}>Под заказ</Checkbox>
        </div>
    </div>;
};