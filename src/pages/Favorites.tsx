import {FC} from 'react';
import {Header} from "../components/header/Header.tsx";
import {Footer} from "../components/footer/Footer.tsx";
import {ProductFavorites} from "../components/productFavorites/ProductFavorites.tsx";
import {CountContext, FavoritesContext} from "../context/homeContext.ts";
import {useAppSelector} from "../store/hooks/hooks.ts";
import {StickyFooter} from "../components/stickyFooter/StickyFooter.tsx";


export const Favorites: FC = () => {

    const cart = useAppSelector(state => state.cart.cartList)
    const favorites = useAppSelector(state => state.favorites.favList)
    return <div>

        <CountContext.Provider value={cart}>
            <FavoritesContext.Provider value={favorites}>
                <StickyFooter>
                    <Header></Header>
                    <ProductFavorites></ProductFavorites>
                    <Footer></Footer>
                </StickyFooter>
            </FavoritesContext.Provider>

        </CountContext.Provider>

    </div>;
};

