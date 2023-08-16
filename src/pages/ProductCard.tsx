
import {Header} from "../components/header/Header.tsx";
import {Footer} from "../components/footer/Footer.tsx";
import {Breadcrumbs} from "../components/breadcrumbs/Breadcrumbs.tsx";
import {CardPreview} from "../components/cardPreview/CardPreview.tsx";
import {ProductSelection} from "../components/productSelection/ProductSelection.tsx";
import {CardFilter} from "../components/cardFilter/CardFilter.tsx";
import {CardTable} from "../components/cardTable/CardTable.tsx";
import {PopularProduct} from "../components/popularProduct/PopularProduct.tsx";
import {navArr, popularProduct2} from "../utils/data/productArray.ts";
import {ProductPageContext} from "../context/productPageContext.ts";
import {useAppSelector} from "../store/hooks/hooks.ts";


const itemArr:string[] = ["О товаре", "Характеристики", "Отзывы", "Самовывоз", "Доставка", "Cервис", "Гарантия"];

function ProductCard():JSX.Element {

    const product = useAppSelector(state => state.productCard.productListItem)


    return <div>
        <ProductPageContext.Provider value={product}>
            <Header></Header>
            <Breadcrumbs></Breadcrumbs>
            {product.map((item: any) => <CardPreview
                itemId={item.id}
                message={item.message}
                sale={item.sale}
                title={item.title}
                image={item.image}
                category={item.category}
                price={item.price}
                manufacturer={item.manufacturer}
                placeQuantity={item.placeQuantity}
                powerEngine={item.powerEngine}
                engineType={item.engineType}
                releaseYear={item.releaseYear}
                rating={item.rating}
                key={item.id}
            ></CardPreview>)}
            <ProductSelection items={itemArr}></ProductSelection>
            <CardFilter></CardFilter>
            <CardTable></CardTable>
            <PopularProduct title={"С этим товаром покупают"} navData={navArr} ProductData={popularProduct2}></PopularProduct>
            <Footer></Footer>
        </ProductPageContext.Provider>
    </div>;
};

export default ProductCard;