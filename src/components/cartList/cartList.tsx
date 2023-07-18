import {FC, useContext} from 'react';
import styles from "./cartList.module.scss";
import {CountContext} from "../../context/homeContext.ts";

export const CartList: FC = () => {
    const cart = useContext(CountContext)

    return <>
        <ul className={styles.cartList}>
            <li>{cart.map(item => item.image)}</li>
        </ul>;
    </>
};