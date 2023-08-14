import {FC} from 'react';
import styles from "./Pagination.module.scss"
import {PaginationProps} from "./Pagination.props.ts";
import {useAppDispatch} from "../../store/hooks/hooks.ts";
import {sortByPopular} from "../../store/slices/catalogCardSlice.ts";



const paginationButtonArray:string[] = ["Полноприводные", "от 5000", "BRP","еще"];

export const Pagination: FC<PaginationProps> = ({children}:PaginationProps):JSX.Element => {
    const dispatch = useAppDispatch();
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
                        <select className={styles.pagination__selection_select} onClick={(e) => dispatch(sortByPopular(e.target.value))}>
                            <option value="Популярности" className={styles.pagination__selection_select_option}>Популярности</option>
                            <option value="Цене" className={styles.pagination__selection_select_option}>Цене</option>
                            <option value="Качеству" className={styles.pagination__selection_select_option}>Качеству</option>
                        </select>

                    </div>
                    <div>
                        <button className={styles.pagination__selection_btn}>
                            <svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="1" y="1" width="21" height="19" stroke="#2F3035" stroke-width="2"/>
                                <rect x="7" y="6" width="2" height="2" fill="#2F3035" stroke="#2F3035" stroke-width="2"/>
                                <rect x="7" y="13" width="2" height="2" fill="#2F3035" stroke="#2F3035" stroke-width="2"/>
                                <rect x="14" y="6" width="2" height="2" fill="#2F3035" stroke="#2F3035" stroke-width="2"/>
                                <rect x="14" y="13" width="2" height="2" fill="#2F3035" stroke="#2F3035" stroke-width="2"/>
                            </svg>

                        </button>
                        <button className={styles.pagination__selection_btn}>
                            <svg width="25" height="21" viewBox="0 0 25 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.3">
                                    <rect x="6" width="19" height="3" rx="1.5" fill="#2F3035"/>
                                    <rect x="6" y="8" width="19" height="3" rx="1.5" fill="#2F3035"/>
                                    <rect x="6" y="16" width="19" height="3" rx="1.5" fill="#2F3035"/>
                                    <rect width="3" height="3" rx="1.5" fill="#2F3035"/>
                                    <rect y="8" width="3" height="3" rx="1.5" fill="#2F3035"/>
                                    <rect y="16" width="3" height="3" rx="1.5" fill="#2F3035"/>
                                </g>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>;
};