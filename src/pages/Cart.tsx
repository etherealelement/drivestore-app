import {FC} from 'react';
import {Header} from "../components/header/Header.tsx";
import {Footer} from "../components/footer/Footer.tsx";
import { CountContext} from "../context/homeContext.ts";
import {CartList} from "../components/cartList/cartList.tsx";
import {useSelector} from "react-redux";


export const Cart: FC = () => {
    const cart = useSelector(state => state.cart.cart);



    return <div>
        <CountContext.Provider value={cart}>
                    <Header></Header>
                    <CartList></CartList>
                    <Footer></Footer>
        </CountContext.Provider>
    </div>;
};