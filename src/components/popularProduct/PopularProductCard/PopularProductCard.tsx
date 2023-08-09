import {FC, useState} from 'react';
import {PopularProductCardProps} from "./PopularProductCard.props.ts";
import styles from "./PopularProductCard.module.scss";
import {FavActive} from "../../ui/favicons/FavActive.tsx";
import {FavDisable} from "../../ui/favicons/FavDisable.tsx";
import {CardIconActive} from "../../ui/cardIcon/CardIconActive.tsx";
import {CardIconDisable} from "../../ui/cardIcon/CardIconDisable.tsx";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addCartItem} from "../../../store/slices/cartSlice.ts";
import {deleteCartItem} from "../../../store/slices/cartSlice.ts";
import {addFavorites} from "../../../store/slices/favoritesSlice.ts";

export const PopularProductCard: FC<PopularProductCardProps> = ({ itemId,
                                                                    title,
                                                                    price,
                                                                    image,
                                                                    message,
                                                                    sale,
                                                                    category,
                                                                }: PopularProductCardProps): JSX.Element => {

    const [activeFav, setActiveFav] = useState(false);
    const [activeProduct, setActiveProduct] = useState(false)

    const dispatch = useDispatch()
    const deleteDispath = useDispatch()
    const favDispath = useDispatch()

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
        deleteDispath(deleteCartItem({
            id: itemId,
        }))
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

    return <li className={styles.cardItem}>

        {sale ? <span className={styles.cardItem__sale}>SALE</span> : null}

        <button className={styles.cardItem__fav} onClick={!activeFav ? addToFav : () => setActiveFav(!activeFav)}>
            {activeFav ? <FavActive/> : <FavDisable/>}
        </button>

        <div className={styles.cardItem__block}>
            <img src={image} alt="product-item"/>

            <Link to={"/card"}>
                <p className={styles.cardItem__block_descr}>
                    {title}
                </p>
            </Link>


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