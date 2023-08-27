import { FC } from 'react';
import {Swiper, SwiperSlide} from "swiper/react"
import  "./Slider.scss"
import arrowRight from "../../assets/bannerImages/arrow-right.svg";
import arrowLeft from "../../assets/bannerImages/arrow-left.svg";
// @ts-ignore
import {Autoplay} from "swiper";


import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";


// @ts-ignore
import {EffectCoverflow, Pagination, Navigation} from "swiper";

import sliderImage1 from "/slider_image1.jpg";

export const Slider: FC = () => {
    return (
        <>
        <div className="swiper-container">
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
            className="swiper__container"
            modules={[Autoplay,EffectCoverflow,Pagination,Navigation]}
            pagination={{
                el:".swiper-pagination",
                clickable:true,
            }}
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
                <SwiperSlide>
                    <img src={sliderImage1} alt="slider-image"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={sliderImage1} alt="slider-image"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={sliderImage1} alt="slider-image"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={sliderImage1} alt="slider-image"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={sliderImage1} alt="slider-image"/>
                </SwiperSlide>

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
        </>
    );
};