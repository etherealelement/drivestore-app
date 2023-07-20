import {FC, useContext} from 'react';
import styles from "./cartList.module.scss";
import {CartItems} from "./cartItems/cartItems.tsx";
import {CountContext} from "../../context/homeContext.ts";

export const CartList: FC = () => {
    const cart = useContext(CountContext)
    console.log(cart)
    return <section className={styles.cart}>
        <div className="container">
            <div className={styles.cartInner}>
                {cart.map((item: any) => <CartItems
                    key={item.key}
                    title={item.title}
                    image={item.image}
                    category={item.category}
                    price={item.price}
                ></CartItems>)}
            </div>
        </div>
    </section>
};