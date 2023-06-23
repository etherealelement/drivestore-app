import { FC } from 'react';
import styles from "./Search.module.scss"
import {SearchTabs} from "./searchTabs/searchTabs.tsx";
import {SearchListItemProps} from "./Search.props.ts";
import {Button} from "../ui/Button/Button.tsx";




const tabArray:SearchListItemProps[] = [
    {
        id: 1,
        name: "Поиск по  номеру",
        link: "#tab-1"
    },
    {
        id: 2,
        name: "Поиск по марке",
        link: "#tab-2"
    },
    {
        id: 3,
        name: "Поиск по названию товара",
        link: "#tab-3"
    }
];
export const Search: FC = () => {
    return <section className={styles.search}>
        <div className="container">
            <div className={styles.search__inner}>
                <div className={styles.search__tabs}>
                    <ul className={styles.search__tabs_list}>
                        {tabArray.map(item => <SearchTabs link={item.link} key={item.id} >{item.name}</SearchTabs>)}
                    </ul>
                </div>
                <div className={styles.search__block}>
                    <div id={"tab-1"} className={styles.search__block_item}>
                        <form className={styles.search__block_form}>
                            <input placeholder={"Введите номер"} type="text" className={styles.search__block_form_input}/>
                            <Button type={"submit"} size={"medium"}>искать</Button>
                        </form>
                    </div>
                    <div  id={"tab-2"} className={styles.search__block_item}>
                        <form className={styles.search__block_form}>
                            <input placeholder={"Введите марку"} type="text" className={styles.search__block_form_input}/>
                            <Button type={"submit"} size={"medium"}>искать</Button>
                        </form>
                    </div>
                    <div  id={"tab-2"} className={styles.search__block_item}>
                        <form className={styles.search__block_form}>
                            <input placeholder={"Поиск по названию товара"} type="text" className={styles.search__block_form_input}/>
                            <Button type={"submit"} size={"medium"}>искать</Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>;
};