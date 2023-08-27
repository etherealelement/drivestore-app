import { FC } from 'react';
import styles from "./Categories.module.scss";
import {ItemCategoriesProps} from "./Categories.props.ts";
import {CategoryItem} from "./categoryItem/CategoryItem.tsx";







const categoryItems:ItemCategoriesProps[] = [
    {
        id: 0,
        title: "Квадроциклы",
        image: "/item-1.png",
        link: "#",
    },
    {
        id: 1,
        title: "Гидроциклы",
        image: "/item-2.png",
        link: "#",
    },
    {
        id: 2,
        title: "Катера",
        image: "/item-3.png",
        link: "#",
    },
    {
        id: 3,
        title: "Снегоходы",
        image: "/item-4.png",
        link: "#",
    },{
        id: 4,
        title: "Вездеходы",
        image: "/item-5.png",
        link: "#",
    },{
        id: 5,
        title: "Двигатели",
        image: "/item-6.png",
        link: "#",
    }
]


export const Categories: FC = () => {
    return <section className={styles.categories}>
        <div className="container">
            <ul className={styles.categories__list}>
                {categoryItems.map(item => <CategoryItem
                    link={item.link}
                    title={item.title}
                    image={item.image}
                    key={item.id}
                />)}
            </ul>
        </div>
    </section>;
};