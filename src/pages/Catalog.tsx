import { FC } from 'react';
import {Header} from "../components/header/Header.tsx";
import {Footer} from "../components/footer/Footer.tsx";
import {Breadcrumbs} from "../components/breadcrumbs/Breadcrumbs.tsx";
import {Pagination} from "../components/pagination/Pagination.tsx";
import {ProductContent} from "../components/productContent/productContent.tsx";
import {catalogData} from "../utils/data/productArray.ts";

export const Catalog: FC = () => {
    return <>
    <Header></Header>
        <main>
            <Breadcrumbs></Breadcrumbs>
            <Pagination>Гидроциклы</Pagination>
            <ProductContent ProductData={catalogData}></ProductContent>
        </main>
        <Footer></Footer>
    </>;
};