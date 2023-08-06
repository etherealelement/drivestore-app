import {FC, useRef, useState} from 'react';
import {ProductFavoritesItemProps} from "./ProductFavoritesItem.props.ts";
import styles from "./ProductFavoritesItem.module.scss";

import {FavActive} from "../../ui/favicons/FavActive.tsx";
import {Button} from "../../ui/Button/Button.tsx";
import {FavDisable} from "../../ui/favicons/FavDisable.tsx";
import {carts, favorites} from "../../../store/homeStore/homeStore.ts";

export const ProductFavoritesItem: FC<ProductFavoritesItemProps> = ({ title, image, category, price}:ProductFavoritesItemProps): JSX.Element => {
    const [active, setActive] = useState<boolean>(true)

    // Добавление фаворита в корзину
    const addToCart = () => {
        const payload = {
            title: title,
            image: image,
            category: category,
            price: price,
        }
        carts.push(payload);
        localStorage.setItem("cart", JSON.stringify(carts))

    }

    // Удаление элемента


    const removeItem = () => {

        if (!active) {
            favorites.map(item => item.id ===3 )
        }

        setActive(!active)
    }



    return <li className={styles.favItem}>
        <span className={styles.favItem__spn} onClick={removeItem}>{ active ? <FavActive></FavActive> : <FavDisable></FavDisable>}</span>
        <img src={image} alt="image"/>
        <h2 className={styles.favItem__title}>{title}</h2>
        <p className={styles.favItem__category}>{category}</p>
        <p className={styles.favItem__price}><b>Цена:</b> {price}₽</p>
        <Button size={"small"} border={true} type={"button"} className={styles.favItem__button} onClick={addToCart}>Добавить в корзину</Button>
    </li>;
};