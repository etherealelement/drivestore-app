import { FC } from 'react';
import styles from "./CardTable.module.scss";
import {Button} from "../ui/Button/Button.tsx";
export const CardTable: FC = () => {


    return <section className={styles.cardTable}>
        <div className="container">
            <div className={styles.cardTable__inner}>
                <ul className={styles.cardTable__list}>
                    <li className={styles.cardTable__list}>Адрес</li>
                    <li className={styles.cardTable__list}>Режим работы</li>
                    <li className={styles.cardTable__list}>Доступно</li>
                    <li className={styles.cardTable__list}>Количество</li>
                </ul>

                <ul className={styles.schedule}>
                    <li className={styles.schedule__item}>
                        <p className={styles.schedule__item_text}>Москва, ул. Науки 25</p>


                        <div className={styles.schedule__item_box}>
                            <div className={styles.schedule__item_box_1}>
                                <p className={styles.schedule__item_text}>пн-сб:</p>
                                <p className={styles.schedule__item_text}>08:00-19:00</p>
                            </div>

                            <div className={styles.schedule__item_box_2}>
                                <p className={styles.schedule__item_text}>вс:</p>
                                <p className={styles.schedule__item_text}>09:00-17:00</p>
                            </div>
                        </div>

                        <div className={styles.schedule__item_container}>
                            <p className={styles.schedule__item_text}>В наличии</p>
                            <p className={styles.schedule__item_text}>1</p>
                        </div>
                        <Button type={"button"} size={"small-large"} border={true}>КУПИТЬ</Button>
                    </li>
                    <li className={styles.schedule__item}>
                        <p className={styles.schedule__item_text}>Москва, ул. Науки 25</p>


                        <div className={styles.schedule__item_box}>
                            <div className={styles.schedule__item_box_1}>
                                <p className={styles.schedule__item_text}>пн-сб:</p>
                                <p className={styles.schedule__item_text}>08:00-19:00</p>
                            </div>

                            <div className={styles.schedule__item_box_2}>
                                <p className={styles.schedule__item_text}>вс:</p>
                                <p className={styles.schedule__item_text}>09:00-17:00</p>
                            </div>
                        </div>

                        <div className={styles.schedule__item_container}>
                            <p className={styles.schedule__item_text}>В наличии</p>
                            <p className={styles.schedule__item_text}>1</p>
                        </div>
                        <Button type={"button"} size={"small-large"} border={true}>КУПИТЬ</Button>
                    </li>
                    <li className={styles.schedule__item}>
                        <p className={styles.schedule__item_text}>Москва, ул. Науки 25</p>


                        <div className={styles.schedule__item_box}>
                            <div className={styles.schedule__item_box_1}>
                                <p className={styles.schedule__item_text}>пн-сб:</p>
                                <p className={styles.schedule__item_text}>08:00-19:00</p>
                            </div>

                            <div className={styles.schedule__item_box_2}>
                                <p className={styles.schedule__item_text}>вс:</p>
                                <p className={styles.schedule__item_text}>09:00-17:00</p>
                            </div>
                        </div>

                        <div className={styles.schedule__item_container}>
                            <p className={styles.schedule__item_text}>В наличии</p>
                            <p className={styles.schedule__item_text}>1</p>
                        </div>
                        <Button type={"button"} size={"small-large"} border={true}>КУПИТЬ</Button>
                    </li>
                    <li className={styles.schedule__item}>
                        <p className={styles.schedule__item_text}>Москва, ул. Науки 25</p>


                        <div className={styles.schedule__item_box}>
                            <div className={styles.schedule__item_box_1}>
                                <p className={styles.schedule__item_text}>пн-сб:</p>
                                <p className={styles.schedule__item_text}>08:00-19:00</p>
                            </div>

                            <div className={styles.schedule__item_box_2}>
                                <p className={styles.schedule__item_text}>вс:</p>
                                <p className={styles.schedule__item_text}>09:00-17:00</p>
                            </div>
                        </div>

                        <div className={styles.schedule__item_container}>
                            <p className={styles.schedule__item_text}>В наличии</p>
                            <p className={styles.schedule__item_text}>1</p>
                        </div>
                        <Button type={"button"} size={"small-large"} border={true}>КУПИТЬ</Button>
                    </li>
                </ul>
            </div>
        </div>
    </section>;
};