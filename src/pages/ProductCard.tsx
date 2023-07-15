import { FC } from 'react';
import {Header} from "../components/header/Header.tsx";
import {Footer} from "../components/footer/Footer.tsx";
import {Breadcrumbs} from "../components/breadcrumbs/Breadcrumbs.tsx";
import {CardPreview} from "../components/cardPreview/CardPreview.tsx";
import {ProductSelection} from "../components/productSelection/ProductSelection.tsx";
import {CardFilter} from "../components/cardFilter/CardFilter.tsx";
import {CardTable} from "../components/cardTable/CardTable.tsx";
import {PopularProduct} from "../components/popularProduct/PopularProduct.tsx";
import {navArr, popularProduct2} from "../utils/data/productArray.ts";


const itemArr:string[] = ["О товаре", "Характеристики", "Отзывы", "Самовывоз", "Доставка", "Cервис", "Гарантия"];

export const ProductCard: FC = () => {
    return <div>
        <Header></Header>
        <Breadcrumbs></Breadcrumbs>
        <CardPreview newPrice={"1 100 475 ₽"} oldPrice={"1 200 475 ₽"} rating={3}>Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic</CardPreview>
        <ProductSelection items={itemArr}></ProductSelection>
        <CardFilter></CardFilter>
        <CardTable></CardTable>
        <PopularProduct title={"С этим товаром покупают"} navData={navArr} ProductData={popularProduct2}></PopularProduct>
        <Footer></Footer>




    </div>;
};