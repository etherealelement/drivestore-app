import {FC, useState} from 'react';
import styles from "./PopularProduct.module.scss"
import {NavBar} from "../ui/navbar/NavBar.tsx";
import {PopularProductCard} from "./PopularProductCard/PopularProductCard.tsx";
import {PopularProductProps} from "./PopularProduct.props.ts";


const navArr:string[] = ["запчасти", "моторы", "шины", "электроника", "инструменты", "аксессуары"];

const popularProduct:PopularProductProps[] = [
    {
        id: 0,
        category: "моторы",
        image: 'src/assets/popularProducts/card-1.png',
        title: "Водонепроницаемый Рюкзак",
        price: "9 800",
        sale: false,
    },
    {
        id: 1,
        category: "запчасти",
        image: 'src/assets/popularProducts/card-2.png',
        title: "Спасательный жилет BRP Men's Airflow PFD",
        price: "6 900",
        sale: true,
    },
    {
        id: 2,
        category: "аксессуары",
        image: 'src/assets/popularProducts/card-3.png',
        title: "BRP Audio-Premium System",
        price: "68 000",
        sale: false,
    },
    {
        id: 3,
        category: "инструменты",
        image: 'src/assets/popularProducts/card-4.png',
        title: "Спасательное снаряжение",
        price: "",
        message: "нет в наличии",
        sale: true,
    },
]

export const PopularProduct: FC = () => {

    // Создание поиска
    const [event, setEvent] = useState("запчасти");
    const handleEvent = (e:any):void => {
        setEvent(e.target.innerHTML)
    }


    return <section className={styles.popular}>
        <div className="container">
            <h2 className={styles.popular__title}>
                Популярные товары
            </h2>
            <ul className={styles.popular__nav}>
                {navArr.map((item,index) => <NavBar
                    key={index}
                    children={item}
                    onEvent={handleEvent}
                ></NavBar>)}
            </ul>
            <ul className={styles.popular__card_list}>
                {popularProduct.map(item => item.category === event ? <PopularProductCard
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