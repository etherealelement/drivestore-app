import  {FC} from 'react';
import styles from "./Pagination.module.scss"
import {PaginationProps} from "./Pagination.props.ts";
import {useAppDispatch} from "../../store/hooks/hooks.ts";
import {sortByPopular} from "../../store/slices/catalogCardSlice.ts";



const paginationButtonArray:string[] = ["Полноприводные", "от 5000", "BRP","еще"];

export const Pagination: FC<PaginationProps> = ({children}:PaginationProps):JSX.Element => {
    const dispatch = useAppDispatch();


    const handleSort = (e: any) => {
        dispatch(sortByPopular(e.target.value))
    }


    return <section className={styles.pagination}>
        <div className="container">
            <h1 className={styles.pagination__title}>{children}</h1>

            <div className={styles.pagination__wrapper}>
                <ul className={styles.pagination__list}>
                    {paginationButtonArray.map((item,index) => <li key={index} className={styles.pagination__list_item}>
                        <button className={styles.pagination__list_item_btn}>{item}</button>
                    </li>)}
                </ul>

                <div className={styles.pagination__selection}>
                    <div className={styles.pagination__selection_arrow}>
                        <select className={styles.pagination__selection_select} onClick={handleSort}>
                            <option value="Популярности" className={styles.pagination__selection_select_option}>Популярности</option>
                            <option value="Цене" className={styles.pagination__selection_select_option}>Цене</option>
                            <option value="Качеству" className={styles.pagination__selection_select_option}>Качеству</option>
                        </select>

                    </div>
                </div>
            </div>
        </div>
    </section>;
};