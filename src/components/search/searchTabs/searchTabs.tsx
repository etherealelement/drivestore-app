import { FC } from 'react';
import styles from './searchTabs.module.scss';
import {SearchTabsProps} from "./searchTabs.props.ts";
export const SearchTabs: FC<SearchTabsProps> = ({children,link}: SearchTabsProps):JSX.Element => {
    return <li className={styles.searchItem}>
        <a href={link} className={styles.searchItem__link}>{children}</a>
    </li>;
};