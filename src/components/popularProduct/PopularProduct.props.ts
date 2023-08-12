export interface PopularProductProps {
    ProductData: ProductData[];
    title: string;
    navData: string[];
}

export interface ProductData
    {
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
        popular: number,
        availability: boolean,
        new: boolean,
        stocks: boolean,
        powerLs: number,
        maksSpeed: number,
        brand: string,
        model: string,
        country: string,
    }



