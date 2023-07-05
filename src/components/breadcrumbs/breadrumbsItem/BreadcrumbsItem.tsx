import { FC } from 'react';
import styles from "./BreadcrumbsItem.module.scss";
import {BreadcrumbsItemProps} from "./BreadcrumbsItem.props.ts";
import {Link} from "react-router-dom";

export const BreadcrumbsItem: FC<BreadcrumbsItemProps> = ({children, link}: BreadcrumbsItemProps):JSX.Element => {
    return <>
        <li className={styles.breadcrumbs__item}>
            <Link to={link} className={styles.breadcrumbs__item_link}>{children}</Link>
        </li>
    </>;
};