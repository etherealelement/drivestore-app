import { FC, useState } from 'react';
import { Checkbox } from '../../ui/checkbox/Checkbox';
import { ArrowUp } from '../../ui/arrows/ArrowUp';
import { ArrowDown } from '../../ui/arrows/ArrowDown';
import styles from "./New.module.scss";

export const New: FC = () => {
    const [arrow, setArrow] = useState(true);

    const handleArrow = () => {
        setArrow(!arrow)
    }

    return <div>
        <div className={styles.new__block} onClick={handleArrow}>
            <span className={styles.new__block_drop}>
                {arrow ? <ArrowUp/> : <ArrowDown/>}
            </span>
            <span className={styles.new__block_spn}>Наличие</span>
        </div>

        <div className={`${arrow ? styles.new__block_input : styles.hidden}`}>
            <Checkbox type={"checkbox"}>Все</Checkbox>
            <Checkbox type={"checkbox"}>Новинки</Checkbox>
            <Checkbox type={"checkbox"}>Акции</Checkbox>
        </div>
    </div>;
};