import { FC } from 'react';
import {CategoryItemProps} from "./CategoryItem.props.ts";
import styles from "./CategoryItem.module.scss";

export const CategoryItem: FC<CategoryItemProps> = ({image, title, link}:CategoryItemProps):JSX.Element => {
    return <a href={link} className={styles.categoryItem}>
            <div className={styles.categoryItem__text}>
                <p className={styles.categoryItem__text_descr}>
                    {title}
                </p>
                <a href={link} className={styles.categoryItem__text_more}>
                    Подробее
                </a>
            </div>
            <div className={styles.categoryItem__image}>
                <img src={image} alt={title}/>
            </div>
    </a>;
};