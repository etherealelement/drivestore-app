import { FC } from 'react';
import {NavBarProps} from "./NavBar.props.ts";
import styles from "./NavBar.module.scss";
export const NavBar: FC<NavBarProps> = ({children}:NavBarProps):JSX.Element => {
    return <ul className={styles.nav}>
        <li className={styles.nav__list}>{children}</li>
    </ul>;
};