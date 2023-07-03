import { FC } from 'react';
import styles from "./Button.module.scss";
import {ButtonProps} from "./Button.props.ts";
import cn from "classnames"
export const Button: FC<ButtonProps> = ({size, type,className, children,border, ...props}: ButtonProps):JSX.Element => {
    return <button type={type} className={cn(styles.button,className, {
        [styles.buttonBig]: size === "big",
        [styles.buttonMedium]: size === "medium",
        [styles.buttonSmall]: size === "small",
        [styles.buttonSubmit]: type === "submit",
        [styles.buttonBtn]: type === "button",
        [styles.buttonBorder]: border,
    })} {...props}>{children}</button>;
};