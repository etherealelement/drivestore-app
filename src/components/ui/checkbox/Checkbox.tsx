import {FC} from 'react';
import styles from "./Checkbox.module.scss";
import {CheckboxProps} from "./Checkbox.props.ts";

export const Checkbox: FC<CheckboxProps> = ({children, type}: CheckboxProps): JSX.Element => {

    
    return <div className={styles.checkbox}>
        <label className={styles.checkbox__label}>
            <input className={styles.checkbox__input} type={type}/>
            <span className={styles.checkbox__custom}></span>
            {children}
        </label>
    </div>;
};