import {FC} from 'react';
import styles from "./Sales.module.scss";
import item1 from "../../assets/categoriesItem/itemsales-1.png"
import item2 from "../../assets/categoriesItem/itemsales-2.png"


export const Sales: FC = () => {
    return <section className={styles.sales}>
        <div className="container">
            <div className={styles.sales__inner}>
                <div className={styles.imageBlock}>
                    <img src={item1} alt="image"/>
                    <img src={item2} alt="image"/>
                </div>

                <div className={styles.sales__block}>
                    <p className={styles.sales__block_text}>
                        CКИДКИ
                        на все запчасти
                        до 70%
                    </p>
                </div>

                <button className={styles.sales__btn}>ПОСМОТЕТЬ ВСЕ</button>
            </div>
        </div>
    </section>;
};