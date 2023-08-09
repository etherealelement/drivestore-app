import {FC} from 'react';
import {Header} from "../components/header/Header.tsx";
import {Footer} from "../components/footer/Footer.tsx";
import {CountContext, FavoritesContext} from "../context/homeContext.ts";
import {CartList} from "../components/cartList/cartList.tsx";
import {useSelector} from "react-redux";


export const Cart: FC = () => {
    const cart = useSelector(state => state.cart.cart);
    const favorites = useSelector(state => state.favorites.favorites)

    return <div>
        <CountContext.Provider value={cart}>
                    <FavoritesContext.Provider value={favorites}>
                        <Header></Header>
                        <CartList></CartList>
                        <Footer></Footer>
                    </FavoritesContext.Provider>
        </CountContext.Provider>
    </div>;
};