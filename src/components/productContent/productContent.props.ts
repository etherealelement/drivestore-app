export interface ProductContentProps {
    ProductData: ProductContentData[];
}

export interface ProductContentData {
    id: number,
    category: string;
    image: string,
    title: string,
    price: number | string,
    message?: string,
    sale: boolean,
    manufacturer: string,
    placeQuantity: number,
    powerEngine: number,
    engineType: string,
    releaseYear: number;
    rating: number,
}


