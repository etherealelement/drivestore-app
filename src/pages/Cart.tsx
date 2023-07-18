import {FC, useReducer} from 'react';
import {Header} from "../components/header/Header.tsx";
import {Footer} from "../components/footer/Footer.tsx";
import {CountContextDispatch, CountContext} from "../context/homeContext.ts";
import {countReducer, cartItems} from "../store/homeStore/homeStore.ts";
import {CartList} from "../components/cartList/cartList.tsx";

export const Cart: FC = () => {
    const [count, dispatch] = useReducer(countReducer, cartItems)

    return <div>
        <CountContext.Provider value={count}>
            <CountContextDispatch.Provider value={dispatch}>
                <Header></Header>
                <CartList></CartList>
                <Footer></Footer>
            </CountContextDispatch.Provider>
        </CountContext.Provider>
    </div>;
};