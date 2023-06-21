import {FC} from 'react';
import styles from "./Header.module.scss"
import "../../utils/helpers/styles/normalize.scss"
import "../../utils/helpers/styles/style.scss";
import {Logo} from "../ui/logo/Logo.tsx"
import {AdressLogo} from "../ui/adressLogo/AdressLogo.tsx";
import {UserFavorites} from "../ui/userContentBar/UserFavorites.tsx";
import {UserHome} from "../ui/userContentBar/UserHome.tsx";
import {UserCart} from "../ui/userContentBar/UserCart.tsx";


const navigationArr:string[] = ["Квадроциклы", "Катера", "Гидроциклы", "Лодки", "Вездеходы", "Снегоходы", "Двигатели", "Запчасти"]

export const Header: FC = () => {
    return <header className={styles.header}>
        <div className="container">
            <div className={styles.header__top}>
                <div className={styles.header__top_inner}>
                    <nav className={styles.menu}>
                        <ul className={styles.menu__list}>
                            <li className={styles.menu__item}>
                                <a href="#" className={styles.menu__item_link}>Магазины</a>
                            </li>
                            <li className={styles.menu__item}>
                                <a href="#" className={styles.menu__item_link}>Акции</a>
                            </li>
                            <li className={styles.menu__item}>
                                <a href="#" className={styles.menu__item_link}>Доставка и оплата</a>
                            </li>
                        </ul>
                    </nav>
                    <a href="#" className={styles.header__top_logo}>
                        <Logo></Logo>
                    </a>
                    <a href="#" className={styles.adressLink}>
                        <AdressLogo></AdressLogo>
                        Москва,  ул. Науки  25
                    </a>

                    <ul className={styles.header__user}>
                        <li className={styles.header__user_item}>
                            <a href="#">
                                <UserFavorites></UserFavorites>
                            </a>
                        </li>
                        <li className={styles.header__user_item}>
                            <a href="#">
                                <UserHome></UserHome>
                            </a>
                        </li>
                        <li className={styles.header__user_item}>
                            <a href="#" className={styles.header__user_item_link}>
                                <span>1</span>
                                <UserCart></UserCart>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.header__bottom}>
                <ul className={styles.header__bottom_list}>
                    {navigationArr.map((item, index) => {
                       return <li className={styles.header__bottom_list_item} key={index}>
                              <a href={"#"} className={styles.header__bottom_list_item_link}>{item}</a>
                       </li>
                    }) }
                </ul>
            </div>
        </div>
    </header>;
};