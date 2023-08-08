export interface CartActionInterface {
        id: number,
        message: string,
        sale: string,
        title: string,
        image: string,
        category: string,
        price: string;
}

export  interface  CartStateInterface {
    payload: {
        id: number,
        message: string,
        sale: string,
        title: string,
        image: string,
        category: string,
        price: string,
    }
}