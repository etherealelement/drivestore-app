import {FC} from 'react';
import {Header} from "../components/header/Header.tsx";
import {Footer} from "../components/footer/Footer.tsx";
import {CountContext, FavoritesContext} from "../context/homeContext.ts";
import {CartList} from "../components/cartList/cartList.tsx";
import {useAppSelector} from "../store/hooks/hooks.ts";
import {CartTypeTypes} from "../store/types/cartType.ts";


export const Cart: FC = () => {
    const cart:CartTypeTypes[] = useAppSelector(state => state.cart.cartList);
    const favorites = useAppSelector(state => state.favorites.favList)

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