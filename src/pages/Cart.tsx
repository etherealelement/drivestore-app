import {FC, useReducer} from 'react';
import {Header} from "../components/header/Header.tsx";
import {Footer} from "../components/footer/Footer.tsx";
import {CountContextDispatch, CountContext} from "../context/homeContext.ts";

import {CartList} from "../components/cartList/cartList.tsx";
import {cartReducer, carts} from "../store/homeStore/homeStore.ts";

export const Cart: FC = () => {
    const [cart, dispatch] = useReducer(cartReducer, carts);

    return <div>
        <CountContext.Provider value={cart}>
            <CountContextDispatch.Provider value={dispatch}>


                    <Header></Header>
                    <CartList></CartList>
                    <Footer></Footer>

            </CountContextDispatch.Provider>
        </CountContext.Provider>
    </div>;
};