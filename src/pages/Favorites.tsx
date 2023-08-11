import {FC} from 'react';
import {Header} from "../components/header/Header.tsx";
import {Footer} from "../components/footer/Footer.tsx";
import {ProductFavorites} from "../components/productFavorites/ProductFavorites.tsx";
import {CountContext, FavoritesContext} from "../context/homeContext.ts";
import {useAppSelector} from "../store/hooks/hooks.ts";


export const Favorites: FC = () => {

    const cart = useAppSelector(state => state.cart.cartList)
    const favorites = useAppSelector(state => state.favorites.favorites)
    return <div>

        <CountContext.Provider value={cart}>
            <FavoritesContext.Provider value={favorites}>
                <Header></Header>
                <ProductFavorites></ProductFavorites>
                <Footer></Footer>
            </FavoritesContext.Provider>

        </CountContext.Provider>

    </div>;
};

