import { FC } from 'react';
import styles from "./PopularProduct.module.scss"
import {NavBar} from "../ui/navbar/NavBar.tsx";


const navArr:string[] = ["запчасти", "моторы", "шины", "электроника", "инструменты", "инструменты"]
export const PopularProduct: FC = () => {
    return <section className={styles.popular}>
        <div className="container">
            <h2 className={styles.popular__title}>
                Популярные товары
            </h2>
            <ul className={styles.popular__nav}>
                {navArr.map((item,index) => <NavBar
                    key={index}
                    children={item}
                ></NavBar>)}
            </ul>
            <ul className={styles.popular__card_list}>

            </ul>
        </div>
    </section>;
};