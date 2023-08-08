import {FC, useState} from 'react';
import {ProductFavoritesItemProps} from "./ProductFavoritesItem.props.ts";
import styles from "./ProductFavoritesItem.module.scss";

import {FavActive} from "../../ui/favicons/FavActive.tsx";
import {Button} from "../../ui/Button/Button.tsx";
import {FavDisable} from "../../ui/favicons/FavDisable.tsx";
import {useDispatch} from "react-redux";
import {addCartItem} from "../../../store/slices/cartSlice.ts";
import {Action, Dispatch} from "@reduxjs/toolkit";
import {deleteFavorites} from "../../../store/slices/favoritesSlice.ts";


export const ProductFavoritesItem: FC<ProductFavoritesItemProps> = ({ title, itemId, image, category, price, message, sale, }:ProductFavoritesItemProps): JSX.Element => {
    const [active, setActive] = useState<boolean>(true)

    const dispatchToCart:Dispatch<Action> = useDispatch()
    const removeToFavDispatch:Dispatch<Action> = useDispatch()
    // Добавление фаворита в корзину
    const addToCart = () => {
        dispatchToCart(addCartItem({
               title: title,
                id: itemId,
            image: image,
            category: category,
            price: price,
            message: message,
            sale: sale,
        }))
    }

    // Удаление элемента из фаворитов

    const removeFavItem  = () => {
        removeToFavDispatch(deleteFavorites({
            id: itemId,
        }))
        setActive(!active)
    }



    return <li className={styles.favItem}>
        <span className={styles.favItem__spn} onClick={removeFavItem}>{ active ? <FavActive></FavActive> : <FavDisable></FavDisable>}</span>
        <img src={image} alt="image"/>
        <h2 className={styles.favItem__title}>{title}</h2>
        <p className={styles.favItem__category}>{category}</p>
        <p className={styles.favItem__price}><b>Цена:</b> {price}₽</p>
        <Button size={"small"} border={true} type={"button"} className={styles.favItem__button} onClick={addToCart}>Добавить в корзину</Button>
    </li>;
};