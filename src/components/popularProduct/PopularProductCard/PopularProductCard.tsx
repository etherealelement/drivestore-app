import { FC, useState } from 'react';
import {PopularProductCardProps} from "./PopularProductCard.props.ts";
import styles from "./PopularProductCard.module.scss";
import {FavActive} from "../../ui/favicons/FavActive.tsx";
import {FavDisable} from "../../ui/favicons/FavDisable.tsx";
import {CardIconActive} from "../../ui/cardIcon/CardIconActive.tsx";
import {CardIconDisable} from "../../ui/cardIcon/CardIconDisable.tsx";

export const PopularProductCard: FC<PopularProductCardProps> = ({children, price,image, message, sale}: PopularProductCardProps): JSX.Element => {
   const [activeFav, setActiveFav] = useState(false);
   const [activeProduct, setActiveProduct] = useState(false)

    return <li className={styles.cardItem}>

        {sale ? <span className={styles.cardItem__sale}>SALE</span> : null}

        <button className={styles.cardItem__fav} onClick={() => setActiveFav(!activeFav)}>
            {activeFav ? <FavActive/> : <FavDisable/>}
        </button>

        <div className={styles.cardItem__block}>
            <img src={image} alt="product-item"/>

            <p className={styles.cardItem__block_descr}>
                {children}
            </p>


            {price ? <p className={styles.cardItem__block_price}>{price} ₽</p> :

            <div className={styles.cardItem__block_price_box}>
                <p className={styles.cardItem__block_price_box_message}>{message}</p>
                <a href="#" className={styles.cardItem__block_price_box_link}>Сообщить о поступлении</a>
            </div>
            }

        </div>
        {price ? <button className={styles.cardItem__btn} onClick={() => setActiveProduct(!activeProduct)}>
            {activeProduct ? <CardIconActive/> : <CardIconDisable/>}
        </button>: null}
    </li>;
};