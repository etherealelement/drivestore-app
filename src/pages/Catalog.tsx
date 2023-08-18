
import {Header} from "../components/header/Header.tsx";
import {Footer} from "../components/footer/Footer.tsx";
import {Breadcrumbs} from "../components/breadcrumbs/Breadcrumbs.tsx";
import {Pagination} from "../components/pagination/Pagination.tsx";
import {ProductContent} from "../components/productContent/productContent.tsx";
import {CountContext, FavoritesContext} from "../context/homeContext.ts";
import {useAppSelector} from "../store/hooks/hooks.ts";
import {StickyFooter} from "../components/stickyFooter/StickyFooter.tsx";


function Catalog(): JSX.Element{
    const cart = useAppSelector(state => state.cart.cartList);
    const favorites = useAppSelector(state => state.favorites.favList)
    const catalog = useAppSelector(state => state.catalogCard.catalog);

    return <>
            <CountContext.Provider value={cart}>
                <FavoritesContext.Provider value={favorites}>
                    <StickyFooter>
                        <Header></Header>
                        <main>
                            <Breadcrumbs></Breadcrumbs>
                            <Pagination>Гидроциклы</Pagination>
                            <ProductContent ProductData={catalog}></ProductContent>
                        </main>
                        <Footer></Footer>
                    </StickyFooter>
                </FavoritesContext.Provider>
            </CountContext.Provider>
    </>;
};

export default Catalog;