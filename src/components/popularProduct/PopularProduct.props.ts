export interface PopularProductProps {
    ProductData: ProductData;
    title: string;
    navData: string[];
}

export type ProductData = [
    {
        id: number,
        category: string;
        image: string,
        title: string,
        price: number | string,
        message?: string,
        sale: boolean,
    }
]


