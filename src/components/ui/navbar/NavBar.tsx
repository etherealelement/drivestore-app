import {FC} from 'react';
import {NavBarProps} from "./NavBar.props.ts";
import styles from "./NavBar.module.scss";


export const NavBar: FC<NavBarProps> = ({children, onEvent}:NavBarProps):JSX.Element => {
    return <>
        <li className={styles.navItem} onClick={onEvent}>
            <a  href={"#"} className={styles.navItem__link} onClick={(e)=>e.preventDefault()}>{children}</a>
        </li>
    </>;
};