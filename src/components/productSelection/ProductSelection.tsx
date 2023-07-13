import { FC } from 'react';
import styles from "./productSelection.module.scss";
import {ProductSelectionProps} from "./productSelection.props.ts";


export const ProductSelection: FC<ProductSelectionProps> = ({items}:ProductSelectionProps):JSX.Element => {
    return <div className={styles.productSelection}>
        <div className="container">
            <ul className={styles.productSelection__list}>
                {items.map((item,index) => <li className={styles.productSelection__item} key={index}>
                    <a href="/" onClick={(e) => e.preventDefault()}>{item}</a>
                </li>)}
            </ul>
        </div>
    </div>;
};