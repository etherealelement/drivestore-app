export const countReducer = (state: any, action: any): void => {
    console.log(state)
    console.log(action)
    switch (action.type) {
        case "incr": {
            return {
                ...state,
                count: state.count + 1,
            }
        }

    }
}

export const cartItems = [
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
        price: 45800,
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
        price: 7000,
        sale: false,
    },
]
