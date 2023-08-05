import {FC, useState} from 'react';
import {PopularProductCardProps} from "./PopularProductCard.props.ts";
import styles from "./PopularProductCard.module.scss";
import {FavActive} from "../../ui/favicons/FavActive.tsx";
import {FavDisable} from "../../ui/favicons/FavDisable.tsx";
import {CardIconActive} from "../../ui/cardIcon/CardIconActive.tsx";
import {CardIconDisable} from "../../ui/cardIcon/CardIconDisable.tsx";
import {Link} from "react-router-dom";
import {carts} from "../../../store/homeStore/homeStore.ts";


export const PopularProductCard: FC<PopularProductCardProps> = ({ itemId,
                                                                    children,
                                                                    price,
                                                                    image,
                                                                    message,
                                                                    sale
                                                                }: PopularProductCardProps): JSX.Element => {

    const [activeFav, setActiveFav] = useState(false);
    const [activeProduct, setActiveProduct] = useState(false)

    // const dispatch = useContext(CountContextDispatch)

    // addToCart

    const addToCart = () => {
        const payload = {
            id: itemId,
            title: children,
            image: image,
            category: message,
            price: price,
        }
        carts.push(payload);
        localStorage.setItem("cart", JSON.stringify(carts))
        setActiveProduct(!activeProduct)
    }


    // Dispatchers
    return <li className={styles.cardItem}>

        {sale ? <span className={styles.cardItem__sale}>SALE</span> : null}

        <button className={styles.cardItem__fav} onClick={() => setActiveFav(() => !activeFav)} >
            {activeFav ? <FavActive/> : <FavDisable/>}
        </button>

        <div className={styles.cardItem__block}>
            <img src={image} alt="product-item"/>

            <Link to={"/card"}>
                <p className={styles.cardItem__block_descr}>
                    {children}
                </p>
            </Link>


            {price ? <p className={styles.cardItem__block_price}>{price} ₽</p> :

                <div className={styles.cardItem__block_price_box}>
                    <p className={styles.cardItem__block_price_box_message}>{message}</p>
                    <Link to="/card" className={styles.cardItem__block_price_box_link}>Сообщить о поступлении</Link>
                </div>
            }

        </div>
        {price ? <button className={styles.cardItem__btn} onClick={addToCart}>
            {activeProduct ? <CardIconActive/> : <CardIconDisable/>}
        </button> : null}
    </li>

};