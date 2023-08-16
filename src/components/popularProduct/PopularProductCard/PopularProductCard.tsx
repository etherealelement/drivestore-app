import {FC, useState} from 'react';
import {PopularProductCardProps} from "./PopularProductCard.props.ts";
import styles from "./PopularProductCard.module.scss";
import {FavActive} from "../../ui/favicons/FavActive.tsx";
import {FavDisable} from "../../ui/favicons/FavDisable.tsx";
import {CardIconActive} from "../../ui/cardIcon/CardIconActive.tsx";
import {CardIconDisable} from "../../ui/cardIcon/CardIconDisable.tsx";
import {Link} from "react-router-dom";
import {addCartItem} from "../../../store/slices/cartSlice.ts";
import {deleteCartItem} from "../../../store/slices/cartSlice.ts";
import {addFavorites} from "../../../store/slices/favoritesSlice.ts";
import {addProductCard, deleteProductCard} from "../../../store/slices/productCardSlice.ts";
import {useAppDispatch} from "../../../store/hooks/hooks.ts";


export const PopularProductCard: FC<PopularProductCardProps> = ({itemId, category, image, title, price, message, sale, manufacturer, placeQuantity, powerEngine, engineType, releaseYear, rating, availability}: PopularProductCardProps): JSX.Element => {

    const [activeFav, setActiveFav] = useState(false);
    const [activeProduct, setActiveProduct] = useState(false)

    const dispatch = useAppDispatch()
    const deleteDispatch = useAppDispatch()
    const favDispath = useAppDispatch()
    const productPispatch = useAppDispatch()
    const deleteCard = useAppDispatch()

    // Добавление элемента в стор
    const addCart = () => {
        dispatch(addCartItem({
            id: itemId,
            title: title,
            price: price,
            image: image,
            message: message,
            sale: sale,
            category: category,
        }))

        setActiveProduct(!activeProduct)

    }

    // Удаление элемента из стора
    const deleteCart = () => {
        deleteDispatch(deleteCartItem(
           itemId
        ))
        setActiveProduct(!activeProduct)
    }

    // Добавление элеманта в избранное

    const addToFav = () => {
        favDispath(addFavorites({
            id: itemId,
            title: title,
            price: price,
            image: image,
            message: message,
            sale: sale,
            category: category,
        }))
        setActiveFav(!activeFav)
    }

    // Добавление в карточку продукта
    const addCardPage = () => {
        productPispatch(addProductCard({
            id: itemId,
            message: image,
            sale: sale,
            title: title,
            image: image,
            category: category,
            price: price,
            manufacturer: manufacturer,
            placeQuantity: placeQuantity,
            powerEngine: powerEngine,
            engineType: engineType,
            releaseYear: releaseYear,
            rating: rating,
        }))
        deleteCard(deleteProductCard(
            itemId,
        ))
    }




    return <li className={styles.cardItem}>

        {sale ? <span className={styles.cardItem__sale}>SALE</span> : null}

        <button className={styles.cardItem__fav} onClick={!activeFav ? addToFav : () => setActiveFav(!activeFav)}>
            {activeFav ? <FavActive/> : <FavDisable/>}
        </button>

        <div className={styles.cardItem__block}>
            <img src={image} alt="product-item"/>

            <Link to={"/card"}>
                <p className={styles.cardItem__block_descr} onClick={addCardPage}>
                    {title}
                </p>
            </Link>

            <div className={styles.cardItem__have}>
                <p className={styles.cardItem__have_title}>Наличие:</p>
                <p className={styles.cardItem__have_text}>{availability}</p>
            </div>

            {price ? <p className={styles.cardItem__block_price}>{price} ₽</p> :

                <div className={styles.cardItem__block_price_box}>
                    <p className={styles.cardItem__block_price_box_message}>{message}</p>
                    <Link to="/card" className={styles.cardItem__block_price_box_link}>Сообщить о поступлении</Link>
                </div>
            }

        </div>
        {price ? <button className={styles.cardItem__btn} onClick={!activeProduct ? addCart : deleteCart}>
            {activeProduct ? <CardIconActive/> : <CardIconDisable/>}
        </button> : null}
    </li>

};