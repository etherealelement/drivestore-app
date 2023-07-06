export interface ProductContentProps {
    ProductData: ProductContentData;
}

export type ProductContentData = [
    {
        id: number,
        category: string;
        image: string,
        title: string,
        price: string,
        message?: string,
        sale: boolean,
    }
]

