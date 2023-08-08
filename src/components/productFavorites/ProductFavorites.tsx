import {FC, useContext} from 'react';
import styles from "./ProductFavorites.module.scss";
import {ProductFavoritesItem} from "./ProductFavoritesItem/ProductFavoritesItem.tsx";
import {EmtyCart} from "../cartList/emtyCart/EmtyCart.tsx";
import {FavoritesContext} from "../../context/homeContext.ts";
export const ProductFavorites: FC = () => {

    const favorites = useContext(FavoritesContext)


    return <div className={styles.productFav}>
        <div className="container">
            <ul className={styles.productFav__list}>
                {favorites.map((item:any) => <ProductFavoritesItem message={item.message} sale={item.sale} itemId={item.id} image={item.image} category={item.category} price={item.price} title={item.title} key={item.id}></ProductFavoritesItem>)}
            </ul>

            {favorites.length === 0 && <EmtyCart>Избранных товаров пока нет</EmtyCart>}
        </div>
    </div>;
};