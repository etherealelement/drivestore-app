import {FC, useState} from 'react';
import {PopularProductCardProps} from "./PopularProductCard.props.ts";
import styles from "./PopularProductCard.module.scss";
import {FavActive} from "../../ui/favicons/FavActive.tsx";
import {FavDisable} from "../../ui/favicons/FavDisable.tsx";
import {CardIconActive} from "../../ui/cardIcon/CardIconActive.tsx";
import {CardIconDisable} from "../../ui/cardIcon/CardIconDisable.tsx";
import {Link} from "react-router-dom";
import {favorites} from "../../../store/homeStore/homeStore.ts";
import {addToCart} from "../../../store/homeStore/homeStore.ts";

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

    // const dispatch = useContext(CountContextDispatch)
    const addCart = () => {
        setActiveProduct(!activeProduct)
        addToCart(itemId, category, image, title, price, message, sale)
    }
    // addToFavorites

    const addToFavorites = () => {
      const fav = {
            id: itemId,
            title: title,
            image: image,
            category: message,
            price: price,
        }
        favorites.push(fav);
        localStorage.setItem("favorites", JSON.stringify(favorites))
        setActiveFav(!activeFav);
    }



    return <li className={styles.cardItem}>

        {sale ? <span className={styles.cardItem__sale}>SALE</span> : null}

        <button className={styles.cardItem__fav} onClick={addToFavorites}>
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
        {price ? <button className={styles.cardItem__btn} onClick={addCart}>
            {activeProduct ? <CardIconActive/> : <CardIconDisable/>}
        </button> : null}
    </li>

};