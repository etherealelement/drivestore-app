import { FC } from 'react';
import {CategoryItemProps} from "./CategoryItem.props.ts";
import styles from "./CategoryItem.module.scss";
import { Link } from 'react-router-dom';


export const CategoryItem: FC<CategoryItemProps> = ({image, title}:CategoryItemProps):JSX.Element => {
    return <>
        <Link to="/catalog" className={styles.categoryItem}>
            <div className={styles.categoryItem__text}>
                <p className={styles.categoryItem__text_descr}>
                    {title}
                </p>
                <p className={styles.categoryItem__text_more}>
                    Подробее
                </p>
            </div>
            <div className={styles.categoryItem__image}>
                <img src={image} alt={title}/>
            </div>
        </Link>
    </>;
};