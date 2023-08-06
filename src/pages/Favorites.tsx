import {FC} from 'react';
import {Header} from "../components/header/Header.tsx";
import {Footer} from "../components/footer/Footer.tsx";
import {ProductFavorites} from "../components/productFavorites/ProductFavorites.tsx";
import { FavoritesContext} from "../context/homeContext.ts";
import {favorites} from "../store/homeStore/homeStore.ts";


export const Favorites: FC = () => {


    return <div>
        <FavoritesContext.Provider value={favorites}>
            <Header></Header>
            <ProductFavorites></ProductFavorites>
            <Footer></Footer>
        </FavoritesContext.Provider>

    </div>;
};

