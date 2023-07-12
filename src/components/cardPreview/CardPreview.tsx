import {ChangeEvent, FC, useState} from 'react';
import styles from "./cardPreview.module.scss"
import {CardPreviewProps} from "./cardPreview.props.ts";
import card from "../../assets/catalogData/image-card-1.png"
import {Box} from "@mui/material";
import {Typography} from "@mui/material";
import {Rating} from "@mui/material";
import {Link} from "react-router-dom";
import {FavActive} from "../ui/favicons/FavActive.tsx";
import {FavDisable} from "../ui/favicons/FavDisable.tsx";
import {Button} from "../ui/Button/Button.tsx";


const charactiristicksTitle:{
    name: string,
    prop: string;
}[] = [
    {
        name: "Производитель",
        prop: "Канада",
    },
    {
        name: "Количество мест, шт: ",
        prop: "3",
    },
    {
        name: "Мощность, л.с.",
        prop: "155",
    },
    {
        name: "Тип двигателя",
        prop: "Бензиновый",
    },
    {
        name: "Производитель",
        prop: "Канада",
    },
    {
        name: "Год выпуска",
        prop: "2018",
    },
]


export const CardPreview: FC<CardPreviewProps> = ({children, image, oldPrice, newPrice, rating}: CardPreviewProps):JSX.Element => {
    const [star, setStar] = useState<number>(rating);
    const [active, setActive] = useState<boolean>(false)

    return <div className={styles.card}>
        <div className="container">
            <div className={styles.card__inner}>
                <div className={styles.card__left}>
                    <span className={styles.card__left_spn}>SALE</span>
                    <img src={card} alt="card" className={styles.card__left_img}/>
                    <div className={styles.card__left_inner}>
                        <p className={styles.card__left_inner_old}>{oldPrice}</p>
                        <p className={styles.card__left_inner_new}>{newPrice}</p>
                        <Link to="/" className={styles.card__left_inner_link}>Нашли дешевле? Снизим цену!</Link>
                    </div>
                </div>
                <div className={styles.card__right}>
                    <h1 className={styles.card__right_title}>{children}</h1>

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
                                onChange={ (e,number) => setStar(() => number)}
                                />
                        </Box>
                    </div>

                    <div className={styles.characteristics}>
                        <div className={styles.characteristics__block}>
                            <p className={styles.characteristics__block_text}>Характеристики</p>
                            <p className={styles.characteristics__block_text}>Есть в наличии</p>
                        </div>


                        <ul className={styles.characteristics__list}>
                            {charactiristicksTitle.map((item,index) => <li
                              key={index}  className={styles.characteristics__list_item}>
                                <p className={styles.characteristics__list_item_text}>{item.name}</p>
                                <p className={styles.characteristics__list_item_text}>{item.prop}</p>
                            </li>)}
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