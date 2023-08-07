import Home from "./pages/Home.tsx";
import {Routes, Route} from "react-router-dom";
import {Catalog} from "./pages/Catalog.tsx";
import {ProductCard} from "./pages/ProductCard.tsx";
import {Cart} from "./pages/Cart.tsx";
import {Favorites} from "./pages/Favorites.tsx";
import {Provider} from "react-redux";
import store from "./store/store.ts";

function App() {
    return (
        <>
           <Provider store={store}>
               <Routes>
                   <Route path={"/"} element={<Home/>}></Route>
                   <Route path={"/catalog"} element={<Catalog/>}></Route>
                   <Route path={"/card"} element={<ProductCard/>}></Route>
                   <Route path={"/cart"} element={<Cart/>}></Route>
                   <Route path={"/favorites"} element={<Favorites/>}></Route>
               </Routes>
           </Provider>
        </>
    )
}

export default App
