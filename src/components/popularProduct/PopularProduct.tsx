import {FC, useState} from 'react';
import styles from "./PopularProduct.module.scss"
import {NavBar} from "../ui/navbar/NavBar.tsx";
import {PopularProductCard} from "./PopularProductCard/PopularProductCard.tsx";
import {PopularProductProps} from "./PopularProduct.props.ts";

export const PopularProduct: FC<PopularProductProps> = ({ProductData, title, navData}:PopularProductProps):JSX.Element => {

    // Создание поиска
    const [event, setEvent] = useState("запчасти");
    const handleEvent = (e:any):void => {
        setEvent(e.target.innerHTML)
    }


    return <section className={styles.popular}>
        <div className="container">
            <h2 className={styles.popular__title}>
                {title}
            </h2>
            <ul className={styles.popular__nav}>
                {navData.map((item,index) => <NavBar
                    key={index}
                    children={item}
                    onEvent={handleEvent}
                ></NavBar>)}
            </ul>
            <ul className={styles.popular__card_list}>
                {ProductData.map(item => item.category === event ? <PopularProductCard
                    price={item.price}
                    image={item.image}
                    children={item.title}
                    key={item.id}
                    message={item.message}
                    sale={item.sale}
                /> : null)}
            </ul>

            <div className={styles.popular__block}>
                <button className={styles.popular__block_btn}>Показать еще</button>
            </div>
        </div>
    </section>;
};