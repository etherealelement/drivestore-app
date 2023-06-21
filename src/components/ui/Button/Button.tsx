import { FC } from 'react';
import styles from "./Button.module.scss";
import {ButtonProps} from "./Button.props.ts";
import cn from "classnames"
export const Button: FC<ButtonProps> = ({size, type,className, children, ...props}: ButtonProps):JSX.Element => {
    return <button className={cn(styles.button,className, {
        [styles.buttonBig]: size === "big",
        [styles.buttonMedium]: size === "medium",
        [styles.buttomSubmit]: type === "submit",
        [styles.buttomDefault]: type === "default"
    })} {...props}>{children}</button>;
};