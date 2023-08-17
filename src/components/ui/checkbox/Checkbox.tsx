import {FC} from 'react';
import styles from "./Checkbox.module.scss";
import {CheckboxProps} from "./Checkbox.props.ts";
import cn from "classnames";

export const Checkbox: FC<CheckboxProps> = ({children, type, labelColor, ...props}: CheckboxProps): JSX.Element => {

    
    return <div className={styles.checkbox}>
        <label className={cn(styles.checkbox__label, {
            [styles.checkbox__label_ghost]: labelColor === "ghost",
        })}>
            <input className={styles.checkbox__input} type={type} {...props}/>
            <span className={styles.checkbox__custom}></span>
            {children}
        </label>
    </div>;
};