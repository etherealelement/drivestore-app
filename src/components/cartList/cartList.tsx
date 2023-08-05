import {FC, useContext} from 'react';
import styles from "./cartList.module.scss";
import {CartItems} from "./cartItems/cartItems.tsx";
import {EmtyCart} from "./emtyCart/EmtyCart.tsx";
import {CountContext} from "../../context/homeContext.ts";

export const CartList: FC = () => {
    const cart = useContext(CountContext)

    return <section className={styles.cart}>
        <div className="container">
            <div className={styles.cartInner}>
                {cart.map((item: any, index: any) => <CartItems
                    key={index}
                    title={item.title}
                    image={item.image}
                    category={item.category}
                    price={item.price}
                ></CartItems>)}
            </div>
        </div>
        <EmtyCart></EmtyCart>
    </section>
};