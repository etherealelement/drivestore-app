import { FC, useState } from 'react';
import { Checkbox } from '../../ui/checkbox/Checkbox';
import { ArrowUp } from '../../ui/arrows/ArrowUp';
import { ArrowDown } from '../../ui/arrows/ArrowDown';
import styles from "./New.module.scss";
import {useAppDispatch} from "../../../store/hooks/hooks.ts";
import {reset, sortByNew} from "../../../store/slices/catalogCardSlice.ts";

export const New: FC = () => {
    //states
    const [arrow, setArrow] = useState(true);
    const [checkedNew, setCheckedNew] = useState<boolean>(true);
    const [checkedOrder, setCheckedOrder] = useState<boolean>(true);
    // dispatches

    const dispatch = useAppDispatch()

    const handleArrow = () => {
        setArrow(!arrow)
    }

    const handleSortNew = ():void => {
        setCheckedNew(e => !e)
        {checkedNew ? dispatch(sortByNew("Новинки")) : dispatch(reset())}
    }

    const handleSortStocks = () => {
        setCheckedOrder(e => !e)
        {checkedOrder ? dispatch(sortByNew("Акции")) : dispatch(reset())}
    }

    return <div>
        <div className={styles.new__block} onClick={handleArrow}>
            <span className={styles.new__block_drop}>
                {arrow ? <ArrowUp/> : <ArrowDown/>}
            </span>
            <span className={styles.new__block_spn}>Новинки</span>
        </div>

        <div className={`${arrow ? styles.new__block_input : styles.hidden}`}>
            <Checkbox type={"checkbox"} labelColor={"default"} onClick={() => dispatch(reset())}>Все</Checkbox>
            <Checkbox type={"checkbox"} labelColor={"default"} onClick={handleSortNew}>Новинки</Checkbox>
            <Checkbox type={"checkbox"} labelColor={"default"} onClick={handleSortStocks}>Акции</Checkbox>
        </div>
    </div>;
};