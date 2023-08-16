import {FC} from 'react';
import {CircularProgress} from "@mui/material";
import styles from "./Preloader.module.scss";
export const Preloader: FC = () => {
    return <div className={styles.overlay}>
        <div className={styles.preloader}>
            <div className={styles.preloader__inner}>
                <CircularProgress />
                <h2 className={styles.preloader__title}>Пожалуйста подождите...</h2>
            </div>

        </div>
    </div>
};