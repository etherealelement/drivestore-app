import {FC} from 'react';
import styles from "./productContent.module.scss";
import {ProductContentProps} from "./productContent.props.ts";
import {PopularProductCard} from "../popularProduct/PopularProductCard/PopularProductCard.tsx";
import {Filter} from "../filter/Filter.tsx";

export const ProductContent: FC<ProductContentProps> = ({ProductData}:ProductContentProps):JSX.Element => {



    return <section className={styles.productContent}>
        <div className="container">
            <div className={styles.productContent__inner}>
                <aside className={styles.productContend__filter}>
                    <Filter></Filter>
                </aside>
                <ul className={styles.productContent__list}>
                    {ProductData.map(item => <PopularProductCard
                        category={item.category}
                        message={item.message}
                        title={item.title}
                        itemId={item.id}
                        price={item.price}
                        image={item.image}
                        sale={item.sale}
                        key={item.id}
                    >{item.title}</PopularProductCard>)}
                </ul>
            </div>
        </div>
    </section>;
};