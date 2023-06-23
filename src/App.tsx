import "./utils/helpers/styles/normalize.scss"
import "./utils/helpers/styles/style.scss"
import {Header} from "./components/header/Header.tsx";
import {Banner} from "./components/banner/Banner.tsx";
import {Search} from "./components/search/Search.tsx";



function App() {
  return (
    <>
        <Header></Header>
        <main>
            <Banner></Banner>
            <Search></Search>
        </main>
    </>
  )
}

export default App
