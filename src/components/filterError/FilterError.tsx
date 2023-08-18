import { FC } from 'react';
import styles from "./FilterError.module.scss";
export const FilterError: FC = () => {
    return <div className={styles.error}>
        <h2 className={styles.error__title}>
            Ошибка фильтрации, попробуйте еще раз...
        </h2>
    </div>;
};