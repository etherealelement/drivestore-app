import { FC } from 'react';
import styles from './searchTabs.module.scss';
import {SearchTabsProps} from "./searchTabs.props.ts";
export const SearchTabs: FC<SearchTabsProps> = ({children, onChangeProp}: SearchTabsProps):JSX.Element => {
    
    return <li className={styles.searchItem}>
        <button onClick={onChangeProp} className={styles.searchItem__link}>{children}</button>
    </li>
    ;
};