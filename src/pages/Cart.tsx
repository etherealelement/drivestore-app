
import {Header} from "../components/header/Header.tsx";
import {Footer} from "../components/footer/Footer.tsx";
import {CountContext, FavoritesContext} from "../context/homeContext.ts";
import {CartList} from "../components/cartList/cartList.tsx";
import {useAppSelector} from "../store/hooks/hooks.ts";
import {CartTypeTypes} from "../store/types/cartType.ts";
import {StickyFooter} from "../components/stickyFooter/StickyFooter.tsx";


function Cart():JSX.Element {
    const cart:CartTypeTypes[] = useAppSelector(state => state.cart.cartList);
    const favorites = useAppSelector(state => state.favorites.favList)

    return <div>
        <CountContext.Provider value={cart}>
                    <FavoritesContext.Provider value={favorites}>
                        <StickyFooter>
                            <Header></Header>
                            <CartList></CartList>
                            <Footer></Footer>
                        </StickyFooter>
                    </FavoritesContext.Provider>
        </CountContext.Provider>
    </div>;
};

export default Cart;