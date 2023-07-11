import {FC, useState} from 'react';
import styles from "./Countries.module.scss";
import {FilterDropdown} from "../../ui/filterDropdown/FilterDropdown.tsx";
import {CountriesProps} from "./Countries.props.ts";
import {Checkbox} from "../../ui/checkbox/Checkbox.tsx";


export const Countries: FC<CountriesProps>  = ({countries}:CountriesProps):JSX.Element => {
    const [visible, setVisible] = useState<boolean>(true);

    return <div className={styles.countries}>
        <div onClick={() => setVisible(() => !visible)}>
            <FilterDropdown>Страны</FilterDropdown>
        </div>
        {visible && <div className={styles.countries__box}>
            {countries.map((item, index) => <Checkbox type={"checkbox"} key={index}>{item}</Checkbox>)}
        </div>}

        <a href="#" className={`${visible ? styles.countries__box_link : styles.hidden}`}>Показать еще</a>
    </div>;
};