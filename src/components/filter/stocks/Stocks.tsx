import {FC, useState} from 'react';
import styles from "./Stocks.module.scss";
import {FilterDropdown} from "../../ui/filterDropdown/FilterDropdown.tsx";
export const Stocks: FC = () => {
    const [visible, setVisible] = useState(true);

    const handleVisible = () => {
        setVisible(!visible)
    }


    return <div className={styles.stocks}>
        <div onClick={handleVisible}>
            <FilterDropdown>Акции</FilterDropdown>
        </div>
        {visible && <div className={styles.stocks__block}>
            <button className={styles.stocks__block_sale}>SALE</button>
            <button className={styles.stocks__block_new}>NEW</button>
            <button className={styles.stocks__block_hit}>HIT</button>
            <button className={styles.stocks__block_diller}>ДИЛЕР</button>
        </div>}
    </div>
};