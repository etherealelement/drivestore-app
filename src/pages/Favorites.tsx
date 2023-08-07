import {FC} from 'react';
import {Header} from "../components/header/Header.tsx";
import {Footer} from "../components/footer/Footer.tsx";
import {ProductFavorites} from "../components/productFavorites/ProductFavorites.tsx";



export const Favorites: FC = () => {

    return <div>

            <Header></Header>
            <ProductFavorites></ProductFavorites>
            <Footer></Footer>

    </div>;
};

