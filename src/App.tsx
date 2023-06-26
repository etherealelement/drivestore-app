import "./utils/helpers/styles/normalize.scss"
import "./utils/helpers/styles/style.scss"
import {Header} from "./components/header/Header.tsx";
import {Banner} from "./components/banner/Banner.tsx";
import {Search} from "./components/search/Search.tsx";
import {Categories} from "./components/categories/Categories.tsx";



function App() {
  return (
    <>
        <Header></Header>
        <main>
            <Banner></Banner>
            <Search></Search>
            <Categories></Categories>
        </main>
    </>
  )
}

export default App
