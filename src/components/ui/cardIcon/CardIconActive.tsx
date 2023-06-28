import { FC } from 'react';
import icon from "../../../assets/svgicons/checkmark_icon_143111 (1).svg";
import styles from "./CardIconActive.module.scss";

export const CardIconActive: FC = () => {
    return <>
        <img src={icon} alt="icon" className={styles.icon}></img>
    </>;
};