import {FC, useContext} from 'react';
import styles from "./Header.module.scss"
import "../../utils/helpers/styles/normalize.scss"
import "../../utils/helpers/styles/style.scss";
import {Logo} from "../ui/logo/Logo.tsx"
import {AdressLogo} from "../ui/adressLogo/AdressLogo.tsx";
import {UserFavorites} from "../ui/userContentBar/UserFavorites.tsx";
import {UserHome} from "../ui/userContentBar/UserHome.tsx";
import {UserCart} from "../ui/userContentBar/UserCart.tsx";
import {Link} from "react-router-dom";
import {CountContext, FavoritesContext} from "../../context/homeContext.ts";

const navigationArr:string[] = ["Квадроциклы", "Катера", "Гидроциклы", "Лодки", "Вездеходы", "Снегоходы", "Двигатели", "Запчасти"]

export const Header: FC = () => {

    const cart = useContext(CountContext)
    const favorites = useContext(FavoritesContext)

    console.log(cart)

    return <header className={styles.header}>
        <div className="container">
            <div className={styles.header__top}>
                <div className={styles.header__top_inner}>
                    <nav className={styles.menu}>
                        <ul className={styles.menu__list}>
                            <li className={styles.menu__item}>
                                <Link to="/catalog" className={styles.menu__item_link}>Магазины</Link>
                            </li>
                            <li className={styles.menu__item}>
                                <Link to="/catalog" className={styles.menu__item_link}>Акции</Link>
                            </li>
                            <li className={styles.menu__item}>
                                <Link to="/" className={styles.menu__item_link}>Доставка и оплата</Link>
                            </li>
                        </ul>
                    </nav>
                    <Link to="/" className={styles.header__top_logo}>
                        <Logo></Logo>
                    </Link>
                    <Link to="#" className={styles.adressLink}>
                        <AdressLogo></AdressLogo>
                        Москва,  ул. Науки  25
                    </Link>

                    <ul className={styles.header__user}>
                        <li className={styles.header__user_item}>
                            <Link to="/favorites" className={styles.header__user_item_fav}>
                                <span>{favorites.length}</span>
                                <UserFavorites></UserFavorites>
                            </Link>
                        </li>
                        <li className={styles.header__user_item}>
                            <Link to="/">
                                <UserHome></UserHome>
                            </Link>
                        </li>
                        <li className={styles.header__user_item}>
                            <Link to="/cart" className={styles.header__user_item_link}>
                                <span>{cart.length}</span>
                                <UserCart></UserCart>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.header__bottom}>
                <ul className={styles.header__bottom_list}>
                    {navigationArr.map((item, index) => {
                       return <li className={styles.header__bottom_list_item} key={index}>
                              <Link to={"#"} className={styles.header__bottom_list_item_link}>{item}</Link>
                       </li>
                    }) }
                </ul>
            </div>
        </div>
    </header>;
};