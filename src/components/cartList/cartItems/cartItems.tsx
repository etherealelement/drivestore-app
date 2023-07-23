import { FC } from 'react';
import {CartItemsProps} from "./cartItems.props.ts";
import styles from "./cartItems.module.scss";
import {Button} from "../../ui/Button/Button.tsx";
export const CartItems: FC<CartItemsProps> = ({category, image, title, price}: CartItemsProps): JSX.Element => {
    return <li className={styles.item}>
        <div className={styles.item__inner}>
            <div className={styles.item__info}>
                <img src={image} alt={title} />

                <div className={styles.item__info_box}>
                    <h2 className={styles.title}>{title}</h2>
                    <p className={styles.item__category}>{category}</p>
                    <span className={styles.item__price}>{price === "" ? "Нет в наличии" : price}</span>
                </div>



                
            </div>
            <div className={styles.item__price}>
                    
            </div>
            <div className={styles.item__buy}>
                <Button type={"button"} border={true} size={"small-large"}>Перейти к оплате</Button>
                <Button type={"button"} border={true} size={"small-large"} remove={true}>Удалить</Button>
            </div>
        </div>
    </li>;
};