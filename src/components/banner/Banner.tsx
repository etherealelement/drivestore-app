import { FC } from 'react';
import styles from "./Banner.module.scss";
import {BannerCard} from "./BannerCard/BannerCard.tsx";
import {Slider} from "../slider/Slider.tsx";

export const Banner: FC = ():JSX.Element => {
    return <section className={styles.banner}>
        <div className="container">
            <div className={styles.banner__inner}>
                <div className={styles.slider}>
                    <Slider></Slider>
                </div>
                <div className={styles.banner__card}>
                    <BannerCard></BannerCard>
                </div>
            </div>
        </div>
    </section>;
};