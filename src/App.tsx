import "./utils/helpers/styles/normalize.scss"
import "./utils/helpers/styles/style.scss"
import {Header} from "./components/header/Header.tsx";
import {Banner} from "./components/banner/Banner.tsx";
import {Search} from "./components/search/Search.tsx";
import {Categories} from "./components/categories/Categories.tsx";
import {PopularProduct} from "./components/popularProduct/PopularProduct.tsx";
import {Sales} from "./components/sales/Sales.tsx";
import {popularProduct} from "./utils/data/productArray.ts";
import {navArr} from "./utils/data/productArray.ts";
import {popularProduct2} from "./utils/data/productArray.ts";
import {Footer} from "./components/footer/Footer.tsx";


function App() {
  return (
    <>
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
    </>
  )
}

export default App
