import { FC, useState} from 'react';
import styles from "./cardPreview.module.scss"
import {CardPreviewProps} from "./cardPreview.props.ts";
import {Box} from "@mui/material";
import {Typography} from "@mui/material";
import {Rating} from "@mui/material";
import {Link} from "react-router-dom";
import {FavActive} from "../ui/favicons/FavActive.tsx";
import {FavDisable} from "../ui/favicons/FavDisable.tsx";
import {Button} from "../ui/Button/Button.tsx";





export const CardPreview: FC<CardPreviewProps> = ({itemId, sale, title, image, price, manufacturer, placeQuantity, powerEngine, engineType,releaseYear, rating, oldPrice}: CardPreviewProps):JSX.Element => {
    const [star, setStar] = useState<number>(rating);
    const [active, setActive] = useState<boolean>(false)



    return <div className={styles.card}>
        <div className="container">
            <div className={styles.card__inner}>
                <div className={styles.card__left}>
                    {sale ? <span className={styles.card__left_spn}>SALE</span> : null}
                    <img src={image} alt="card" className={styles.card__left_img}/>
                    <div className={styles.card__left_inner}>
                        {oldPrice ? <p className={styles.card__left_inner_old}>{price}₽</p> : null}
                        <p className={styles.card__left_inner_new}>Цена: {String(price)}₽</p>
                        <Link to="/" className={styles.card__left_inner_link}>Нашли дешевле? Снизим цену!</Link>
                    </div>
                </div>
                <div className={styles.card__right}>
                    <h1 className={styles.card__right_title}>{title}</h1>

                    <span className={styles.card__right_spn}>Код товара: 	366666-2 </span>

                    <div className={styles.card__right_rating}>
                        <div   className={styles.pointer}  onClick={() => setActive(() => !active)}>
                            {active ? <FavActive></FavActive> : <FavDisable></FavDisable>}
                        </div>
                        <svg width="20" height="28" viewBox="0 0 20 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="16" y="15.7708" width="4" height="11.7255" rx="2" fill="#2F3035"/>
                            <rect x="8" y="0.527588" width="4" height="26.9687" rx="2" fill="#2F3035"/>
                            <rect y="9.90796" width="4" height="17.5883" rx="2" fill="#2F3035"/>
                        </svg>
                        <Box>
                            <Typography component="legend"></Typography>
                            <Rating
                                sx={{
                                    '& .MuiRating-iconFilled': {
                                        color: '#1C62CD',
                                    },
                                    '& .MuiRating-iconFocus': {
                                        color: '#1C62CD',
                                    },
                                    '& .MuiRating-iconHover': {
                                        color: '#1C62CD',
                                    },
                                }}
                                name="simple-controlled"
                                value={star}
                                />
                        </Box>
                    </div>

                    <div className={styles.characteristics}>
                        <div className={styles.characteristics__block}>
                            <p className={styles.characteristics__block_text}>Характеристики</p>
                            <p className={styles.characteristics__block_text}>Есть в наличии</p>
                        </div>


                        <ul className={styles.characteristics__list}>
                            <li
                              key={itemId}  className={styles.characteristics__list_item}>
                                <p className={styles.characteristics__list_item_text}>Производитель</p>
                                <p className={styles.characteristics__list_item_text}>{manufacturer}</p>
                            </li>
                            <li  className={styles.characteristics__list_item}>
                                <p className={styles.characteristics__list_item_text}>Колл-во мест</p>
                                <p className={styles.characteristics__list_item_text}>{placeQuantity}</p>
                            </li>
                            <li className={styles.characteristics__list_item}>
                                <p className={styles.characteristics__list_item_text}>Мощность двигателя л\с</p>
                                <p className={styles.characteristics__list_item_text}>{powerEngine}</p>
                            </li>
                            <li className={styles.characteristics__list_item}>
                                <p className={styles.characteristics__list_item_text}>Тип двигателя</p>
                                <p className={styles.characteristics__list_item_text}>{engineType}</p>
                            </li>
                            <li className={styles.characteristics__list_item}>
                                <p className={styles.characteristics__list_item_text}>Дата выпуска</p>
                                <p className={styles.characteristics__list_item_text}>{releaseYear}</p>
                            </li>
                        </ul>
                        <Link to="/" className={styles.characteristics__link}>Показать еще</Link>
                        <Link to="/">
                            <Button type={"button"} size={"medium"} border={true}
                            >купить</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>;
};