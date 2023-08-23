import { FC, useState } from 'react';
import styles from "./Brand.module.scss";
import {ArrowUp} from "../../ui/arrows/ArrowUp.tsx";
import {ArrowDown} from "../../ui/arrows/ArrowDown.tsx";
import {Checkbox} from "../../ui/checkbox/Checkbox.tsx";
import { useAppDispatch } from '../../../store/hooks/hooks.ts';
import { reset, sortByBrand } from '../../../store/slices/catalogCardSlice.ts';



export const Brand: FC = () => {
    const [arrow, setArrow] = useState(true)
    const [state, setState] = useState<boolean>(false);
    const dispatch = useAppDispatch();

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
            <Checkbox type={"checkbox"} labelColor='default' onClick={() => {
                setState(e => !e);
                {state ? dispatch(reset()) : dispatch(sortByBrand({title: "BRP", brand: "BRP"}))}
                
            }}>BRP</Checkbox>
            <Checkbox type={"checkbox"} labelColor='default'
            onClick={() => {
                setState(e => !e);
                {state ? dispatch(reset()) : dispatch(sortByBrand({title: "Spark 2", brand: "Spark 2"}))}
            }}
            >Spark 2</Checkbox>
            <Checkbox type={"checkbox"} labelColor='default'
            onClick={() => {
                setState(e => !e);
                {state ? dispatch(reset()) : dispatch(sortByBrand({title: "Spark 3", brand: "Spark 2"}))}
            }}
            >Spark 3</Checkbox>
        </div>
    </div>;
};