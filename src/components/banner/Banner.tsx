import { FC } from 'react';
import styles from "./Banner.module.scss";
import {BannerCard} from "./BannerCard/BannerCard.tsx";
import {Slider} from "../slider/Slider.tsx";
import { Link } from 'react-router-dom';

export const Banner: FC = ():JSX.Element => {
    return <section className={styles.banner}>
        <div className="container">
            <div className={styles.banner__inner}>
                <div className={styles.slider}>
                    <Slider></Slider>
                </div>
                <Link to="/catalog" className={styles.banner__card}>
                    <BannerCard></BannerCard>
                </Link>
            </div>
        </div>
    </section>;
};