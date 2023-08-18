import {FC} from 'react';
import styles from "./productContent.module.scss";
import {ProductContentProps} from "./productContent.props.ts";
import {PopularProductCard} from "../popularProduct/PopularProductCard/PopularProductCard.tsx";
import {Filter} from "../filter/Filter.tsx";
import {FilterError} from "../filterError/FilterError.tsx";

export const ProductContent: FC<ProductContentProps> = ({ProductData}:ProductContentProps):JSX.Element => {


    const productContentList:JSX.Element = <>
        <ul className={styles.productContent__list}>
            {ProductData.map(item => <PopularProductCard
                availability={item.availability}
                key={item.id}
                itemId={item.id}
                category={item.category}
                image={item.image}
                title={item.title}
                price={item.price}
                message={item.message}
                sale={item.sale}
                manufacturer={item.manufacturer}
                placeQuantity={item.placeQuantity}
                powerEngine={item.powerEngine}
                engineType={item.engineType}
                releaseYear={item.releaseYear}
                rating={item.rating}
            >{item.title}</PopularProductCard>)}
        </ul>
    </>



    return <section className={styles.productContent}>
        <div className="container">
            <div className={styles.productContent__inner}>
                <aside className={styles.productContend__filter}>
                    <Filter></Filter>
                </aside>
                {ProductData.length <= 0 ? <FilterError/> :productContentList}
            </div>
        </div>
    </section>;
};