import Home from "./pages/Home.tsx";
import {Routes, Route} from "react-router-dom";
import {Catalog} from "./pages/Catalog.tsx";


function App() {
    return (
        <>
            <Routes>
                <Route path={"/"} element={<Home/>}></Route>
                <Route path={"/catalog"} element={<Catalog/>}></Route>
            </Routes>
        </>
    )
}

export default App
