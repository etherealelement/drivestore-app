import "./utils/helpers/styles/normalize.scss"
import "./utils/helpers/styles/style.scss"
import {Header} from "./components/header/Header.tsx";
import {Button} from "./components/ui/Button/Button.tsx";



function App() {
  return (
    <>
        <Header></Header>
        <main>
            <Button size={"medium"} type={"submit"}>искать</Button>
        </main>
    </>
  )
}

export default App
