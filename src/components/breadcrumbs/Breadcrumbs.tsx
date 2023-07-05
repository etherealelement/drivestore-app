import {FC} from 'react';
import styles from "./Breadcrumbs.module.scss";
import {BreadcrumbsItem} from "./breadrumbsItem/BreadcrumbsItem.tsx";


const linkArray: {
    id: number,
    name:string,
    link: string,
} [] = [
    {
        id: 0,
        name: "Главная",
        link: "/",
    },
    {
        id: 1,
        name: "Каталог",
        link: "/catalog",
    }


];

export const Breadcrumbs: FC = (): JSX.Element => {
    return <div className={styles.breadcrumbs}>
        <div className="container">
            <ul className={styles.breadcrumbs__list}>
                {linkArray.map((item) => <BreadcrumbsItem
                    children={item.name}
                    key={item.id}
                    link={item.link}
                />)}
            </ul>
        </div>
    </div>;
};