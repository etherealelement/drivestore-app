import "../utils/helpers/styles/normalize.scss"
import "../utils/helpers/styles/style.scss"
import {Header} from "../components/header/Header.tsx";
import {Banner} from "../components/banner/Banner.tsx";
import {Search} from "../components/search/Search.tsx";
import {Categories} from "../components/categories/Categories.tsx";
import {PopularProduct} from "../components/popularProduct/PopularProduct.tsx";
import {Sales} from "../components/sales/Sales.tsx";
import {popularProduct} from "../utils/data/productArray.ts";
import {navArr} from "../utils/data/productArray.ts";
import {popularProduct2} from "../utils/data/productArray.ts";
import {Footer} from "../components/footer/Footer.tsx";
import {CountContext, FavoritesContext} from "../context/homeContext.ts";
import {useAppSelector} from "../store/hooks/hooks.ts";

function Home() {

    const cart = useAppSelector(item => item.cart.cartList)
    const favorites = useAppSelector(item => item.favorites.favList)
    return (
        <>
            <CountContext.Provider value={cart}>
                    <FavoritesContext.Provider value={favorites}>
                        <Header></Header>
                        <main>
                            <Banner></Banner>
                            <Search></Search>
                            <Categories></Categories>
                            <PopularProduct ProductData={popularProduct} title={"Популярные товары"} navData={navArr}></PopularProduct>
                            <Sales></Sales>
                            <PopularProduct ProductData={popularProduct2} title={"С этим товаром покупают"} navData={navArr}></PopularProduct>
                            <Footer></Footer>
                        </main>
                    </FavoritesContext.Provider>
            </CountContext.Provider>
        </>
    )
}

export default Home;


