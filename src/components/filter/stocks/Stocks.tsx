import {FC, useState} from 'react';
import styles from "./Stocks.module.scss";
import {FilterDropdown} from "../../ui/filterDropdown/FilterDropdown.tsx";
import { useAppDispatch } from '../../../store/hooks/hooks.ts';
import { reset, sortByStocks } from '../../../store/slices/catalogCardSlice.ts';
export const Stocks: FC = () => {
    const [visible, setVisible] = useState(true);
    const dispatch = useAppDispatch();


    const handleVisible = () => {
        setVisible(!visible)
    }




    return <div className={styles.stocks}>
        <div onClick={handleVisible}>
            <FilterDropdown>Акции</FilterDropdown>
        </div>
        {visible && <div className={styles.stocks__block}>
            <button className={styles.stocks__block_sale} onClick={() => {
                dispatch(reset())
                dispatch(sortByStocks({type: "SORT_BY_SALE"}))
            }}>SALE</button>
            <button className={styles.stocks__block_new}
            onClick={() => {
                dispatch(reset())
                dispatch(sortByStocks({type: "SORT_BY_NEW"}))
            }}
            >NEW</button>
            <button className={styles.stocks__block_hit}
            onClick={() => {
                dispatch(reset())
                dispatch(sortByStocks({type: "SORT_BY_HIT"}))
            }}
            >HIT</button>
            <button className={styles.stocks__block_diller}
            onClick={() => {
                dispatch(reset())
                dispatch(sortByStocks({type: "SORT_BY_HIT"}))
            }}
            
            >ДИЛЕР</button>
        </div>}
    </div>
};