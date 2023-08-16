import {Routes, Route} from "react-router-dom";
import {Favorites} from "./pages/Favorites.tsx";
import {Provider} from "react-redux";
import store from "./store/store.ts";
import {lazy, Suspense} from "react";
import {Preloader} from "./components/ui/preloader/Preloader.tsx";

const Home = lazy(() => import("./pages/Home.tsx"));
const Catalog = lazy(() => import("./pages/Catalog.tsx"))
const ProductCard = lazy(() => import("./pages/ProductCard.tsx"));
const Cart = lazy(() => import("./pages/Cart.tsx"));

function App() {

    return (
        <>
           <Provider store={store}>
               <Routes>
                   <Route path={"/"} element={
                       <Suspense fallback= {<Preloader></Preloader>}>
                       <Home></Home>
                   </Suspense>}>
                       </Route>
                   <Route path={"/catalog"} element={
                       <Suspense fallback={<Preloader></Preloader>}>
                           <Catalog/>
                       </Suspense>
                   }></Route>
                   <Route path={"/card"} element={<Suspense fallback={<Preloader></Preloader>}>
                       <ProductCard></ProductCard>
                   </Suspense>}></Route>
                   <Route path={"/cart"} element={<Suspense fallback={<Preloader></Preloader>}>
                       <Cart></Cart>
                   </Suspense>}></Route>
                   <Route path={"/favorites"} element={<Favorites/>}></Route>
               </Routes>
           </Provider>
        </>
    )
}

export default App
