import Home from "./pages/Home.tsx";
import {Routes, Route} from "react-router-dom";
import {Catalog} from "./pages/Catalog.tsx";
import {ProductCard} from "./pages/ProductCard.tsx";
import {Cart} from "./pages/Cart.tsx";


function App() {
    return (
        <>
            <Routes>
                <Route path={"/"} element={<Home/>}></Route>
                <Route path={"/catalog"} element={<Catalog/>}></Route>
                <Route path={"/card"} element={<ProductCard/>}></Route>
                <Route path={"/cart"} element={<Cart/>}></Route>
            </Routes>
        </>
    )
}

export default App
