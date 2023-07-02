
// Navigation data
import {ProductData} from "../../components/popularProduct/PopularProduct.props.ts";

export const navArr:string[] = ["запчасти", "моторы", "шины", "электроника", "инструменты", "аксессуары"];


// ProductCard data
export const popularProduct:ProductData = [
    {
        id: 0,
        category: "моторы",
        image: 'src/assets/popularProducts/card-1.png',
        title: "Водонепроницаемый Рюкзак",
        price: "9 800",
        sale: false,
    },
    {
        id: 1,
        category: "запчасти",
        image: 'src/assets/popularProducts/card-2.png',
        title: "Спасательный жилет BRP Men's Airflow PFD",
        price: "6 900",
        sale: true,
    },
    {
        id: 2,
        category: "аксессуары",
        image: 'src/assets/popularProducts/card-3.png',
        title: "BRP Audio-Premium System",
        price: "68 000",
        sale: false,
    },
    {
        id: 3,
        category: "инструменты",
        image: 'src/assets/popularProducts/card-4.png',
        title: "Спасательное снаряжение",
        price: "",
        message: "нет в наличии",
        sale: true,
    },
]

// popularProduct2

export const popularProduct2:ProductData = [
    {
        id: 0,
        category: "электроника",
        image: 'src/assets/popularProductSale/image-1.png',
        title: "BRP Audio-портативная система",
        price: "",
        message: "нет в наличии",
        sale: true,
    },
    {
        id: 1,
        category: "электроника",
        image: 'src/assets/popularProductSale/image-2.png',
        title: "Garmin Echomap Plus 62cv",
        price: "45 800",
        sale: true,
    },
    {
        id: 2,
        category: "электроника",
        image: 'src/assets/popularProductSale/image-3.png',
        title: "RF D.E.S.S.TM Key",
        price: "",
        message: "нет в наличии",
        sale: true,
    },
    {
        id: 3,
        category: "электроника",
        image: 'src/assets/popularProductSale/image-4.png',
        title: "Мужской костюм 3мм",
        price: "7 000",
        sale: false,
    },
]
