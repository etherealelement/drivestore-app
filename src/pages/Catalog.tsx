import { FC } from 'react';
import {Header} from "../components/header/Header.tsx";
import {Footer} from "../components/footer/Footer.tsx";
import {Breadcrumbs} from "../components/breadcrumbs/Breadcrumbs.tsx";

export const Catalog: FC = () => {
    return <>
    <Header></Header>
        <main>
            <Breadcrumbs></Breadcrumbs>
        </main>
        <Footer></Footer>
    </>;
};