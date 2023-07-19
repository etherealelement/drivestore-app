import { FC } from 'react';
import {CartItemsProps} from "./cartItems.props.ts";
import styles from "./cartItems.module.scss";
export const CartItems: FC<CartItemsProps> = ({category, image, title}: CartItemsProps): JSX.Element => {
    return <li className={styles.item}>
        <img src={image} alt={title} />
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.item__category}>{category}</p>
    </li>;
};