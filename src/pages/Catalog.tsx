import {FC, useReducer} from 'react';
import {Header} from "../components/header/Header.tsx";
import {Footer} from "../components/footer/Footer.tsx";
import {Breadcrumbs} from "../components/breadcrumbs/Breadcrumbs.tsx";
import {Pagination} from "../components/pagination/Pagination.tsx";
import {ProductContent} from "../components/productContent/productContent.tsx";
import {catalogData} from "../utils/data/productArray.ts";
import {CountContextDispatch, CountContext} from "../context/homeContext.ts";
import { carts} from "../store/homeStore/homeStore.ts";
import {cartReducer} from "../store/homeStore/reducers.ts";


export const Catalog: FC = () => {
    const [cart, dispatch] = useReducer(cartReducer, carts)


    return <>
    <CountContext.Provider value={cart}>
        <CountContextDispatch.Provider value={dispatch}>
            <Header></Header>
            <main>
                <Breadcrumbs></Breadcrumbs>
                <Pagination>Гидроциклы</Pagination>
                <ProductContent ProductData={catalogData}></ProductContent>
            </main>
            <Footer></Footer>
        </CountContextDispatch.Provider>
    </CountContext.Provider>
    </>;
};