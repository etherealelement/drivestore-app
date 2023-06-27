import { FC } from 'react';
import {NavBarProps} from "./NavBar.props.ts";
import styles from "./NavBar.module.scss";


export const NavBar: FC<NavBarProps> = ({children}:NavBarProps):JSX.Element => {
    return <>
        <li className={styles.navItem}>
            <a  href={"#"} className={styles.navItem__link}>{children}</a>
        </li>
    </>;
};