import {FC} from 'react';
import {Header} from "../components/header/Header.tsx";
import {Footer} from "../components/footer/Footer.tsx";
import {Breadcrumbs} from "../components/breadcrumbs/Breadcrumbs.tsx";
import {Pagination} from "../components/pagination/Pagination.tsx";
import {ProductContent} from "../components/productContent/productContent.tsx";
import {catalogData} from "../utils/data/productArray.ts";
import {CountContext} from "../context/homeContext.ts";
import {useSelector} from "react-redux";


export const Catalog: FC = () => {
    const cart = useSelector(state => state.cart.cart);
    return <>
            <CountContext.Provider value={cart}>
                <Header></Header>
                <main>
                    <Breadcrumbs></Breadcrumbs>
                    <Pagination>Гидроциклы</Pagination>
                    <ProductContent ProductData={catalogData}></ProductContent>
                </main>
                <Footer></Footer>
            </CountContext.Provider>
    </>;
};