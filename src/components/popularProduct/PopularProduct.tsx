import {FC, useState} from 'react';
import styles from "./PopularProduct.module.scss"
import {NavBar} from "../ui/navbar/NavBar.tsx";
import {PopularProductCard} from "./PopularProductCard/PopularProductCard.tsx";
import {PopularProductProps} from "./PopularProduct.props.ts";
//  Slider
import {Swiper, SwiperSlide} from "swiper/react"
import  "./SliderBlock.scss"
import arrowRight from "../../assets/svgicons/arrow-right.svg"
import arrowLeft from "../../assets/svgicons/arrow-left.svg";
// @ts-ignore
import {Autoplay} from "swiper";



import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

// @ts-ignore
import {EffectCoverflow, Navigation} from "swiper";

import sliderImage1 from "../../assets/bannerImages/slider_image1.jpg";
import {popularProduct} from "../../utils/data/productArray.ts";


export const PopularProduct: FC<PopularProductProps> = ({ProductData, title, navData}:PopularProductProps):JSX.Element => {

    // Создание поиска
    const [event, setEvent] = useState("электроника");
    const handleEvent = (e:any):void => {
        setEvent(e.target.innerHTML)
    }


    return <section className={styles.popular}>
        <div className="container">
            <h2 className={styles.popular__title}>
                {title}
            </h2>
            <ul className={styles.popular__nav}>
                {navData.map((item,index) => <NavBar
                    key={index}
                    children={item}
                    onEvent={handleEvent}
                ></NavBar>)}
            </ul>


            {/*Slider*/}
            <div className="swiper-container_product">
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={"auto"}
                    coverflowEffect={
                        {
                            rotate: 0,
                            stretch: 0,
                            depth: 100,
                            modifier: 2.5,
                        }
                    }
                    className="swiper__container_product"
                    modules={[Autoplay,EffectCoverflow,Navigation]}
                    navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                        hideOnClick: true,
                        disabledClass: 'disabled_swiper_button'
                    }}

                    autoplay={{
                        delay: 5500,
                        disableOnInteraction: false
                    }}
                >




                    <ul>
                        {ProductData.map((item, index) => <SwiperSlide
                            className="swiper-slide_product"
                        key={index}>
                            {item.category === event ?  <PopularProductCard
                                children={item.title}
                                price={item.price}
                                image={item.image}
                                message={item.message}
                                sale={item.sale}
                                key={index}
                            ></PopularProductCard> : null}
                        </SwiperSlide>)}
                    </ul>


                    <div className="slider-controller">
                        <div className="swiper-button-prev">
                            <img src={arrowLeft} alt=""/>
                        </div>

                        <div className="swiper-button-next">
                            <img src={arrowRight} alt=""/>
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>

                </Swiper>

            </div>
            {/*   End Slider  */}
            <div className={styles.popular__block}>
                <button className={styles.popular__block_btn}>Показать еще</button>
            </div>
        </div>
    </section>;
};