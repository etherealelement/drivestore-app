import { FC } from 'react';
import styles from "./Choose.module.scss";


export const Choose: FC = () => {
    return <div className={styles.choose}>
        <div className={styles.choose__inner}>
            <button className={styles.choose__inner_btn}>ВЫБРАТЬ</button>
            <a href="#" className={styles.choose__inner_link}>Сбросить фильтр</a>
        </div>
    </div>;
};