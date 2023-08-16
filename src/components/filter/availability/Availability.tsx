import {FC, useState} from 'react';
import styles from "./Availability.module.scss";
import {ArrowUp} from "../../ui/arrows/ArrowUp.tsx";
import {ArrowDown} from "../../ui/arrows/ArrowDown.tsx";
import {Checkbox} from "../../ui/checkbox/Checkbox.tsx";
import {useAppDispatch} from "../../../store/hooks/hooks.ts";
import {sortByAvailability} from "../../../store/slices/catalogCardSlice.ts";
export const Availability: FC = () => {
    const [arrow, setArrow] = useState(true);
    const dispatch = useAppDispatch();


    const [checked1, setChecked1] = useState<boolean>(false)

    // фильтрация по наличию товара


    console.log(checked1)

    const handleArrow = () => {
        setArrow(!arrow)
    }

    const handleSortAviability = () => {
        setChecked1(!checked1);
        
    }



    return <div className={styles.availability}>
        <div className={styles.availability__block} onClick={handleArrow}>
            <span className={styles.availability__block_drop}>
                {arrow ? <ArrowUp/> : <ArrowDown/>}
            </span>
            <span className={styles.availability__block_spn}>Наличие</span>
        </div>

        <div className={`${arrow ? styles.availability__block_input : styles.hidden}`}>
            <button onClick={handleSortAviability}>123</button>

            <Checkbox type={"checkbox"} labelColor={"default"} onClick={handleSortAviability}>В наличии</Checkbox>
            <Checkbox type={"checkbox"} labelColor={"default"}>Под заказ</Checkbox>
        </div>
    </div>;
};