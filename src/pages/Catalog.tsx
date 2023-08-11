import {FC} from 'react';
import {Header} from "../components/header/Header.tsx";
import {Footer} from "../components/footer/Footer.tsx";
import {Breadcrumbs} from "../components/breadcrumbs/Breadcrumbs.tsx";
import {Pagination} from "../components/pagination/Pagination.tsx";
import {ProductContent} from "../components/productContent/productContent.tsx";
import {catalogData} from "../utils/data/productArray.ts";
import {CountContext, FavoritesContext} from "../context/homeContext.ts";
import {useAppSelector} from "../store/hooks/hooks.ts";


export const Catalog: FC = () => {
    const cart = useAppSelector(state => state.cart.cartList);
    const favorites = useAppSelector(state => state.favorites.favList)

    return <>
            <CountContext.Provider value={cart}>
                <FavoritesContext.Provider value={favorites}>
                    <Header></Header>
                    <main>
                        <Breadcrumbs></Breadcrumbs>
                        <Pagination>Гидроциклы</Pagination>
                        <ProductContent ProductData={catalogData}></ProductContent>
                    </main>
                    <Footer></Footer>
                </FavoritesContext.Provider>
            </CountContext.Provider>
    </>;
};