import Home from "./pages/Home.tsx";
import {Routes, Route} from "react-router-dom";
import {Catalog} from "./pages/Catalog.tsx";
import {ProductCard} from "./pages/ProductCard.tsx";


function App() {
    return (
        <>
            <Routes>
                <Route path={"/"} element={<Home/>}></Route>
                <Route path={"/catalog"} element={<Catalog/>}></Route>
                <Route path={"/card"} element={<ProductCard/>}></Route>
            </Routes>
        </>
    )
}

export default App
