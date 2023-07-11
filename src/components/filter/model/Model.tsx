import {ChangeEvent, FC, useState} from 'react';
import styles from "./Model.module.scss";
import {FilterDropdown} from "../../ui/filterDropdown/FilterDropdown.tsx";
import {TextField, Box} from "@mui/material";
import {Checkbox} from "../../ui/checkbox/Checkbox.tsx";


const modelArr:string[] = ["Sea-doo Spark 2", "SeaDoo GTI 155", "SeaDoo Spark 90 ", "SeaDoo GTR 230"]
export const Model: FC = () => {
    const [labelValue, setLabelValue] = useState<string>("");
    const [visible, setVisible] = useState(true)

    const handleChangeLabel = (event: ChangeEvent<HTMLInputElement>):void => {
        setLabelValue(event.target.value)
    }

    return <div className={styles.model}>

        <div onClick={() => setVisible(() => !visible)}>
            <FilterDropdown>Модель</FilterDropdown>
        </div>
        {visible && <Box maxWidth={"291px"} className={styles.model__box}>
            <TextField id="outlined-basic" value={labelValue} label="Введите модель" variant="outlined" fullWidth onChange={handleChangeLabel}/>
        </Box>
        }

        {visible &&
        <div className={styles.model__inner}>
            {modelArr.map((item, index) => <Checkbox key={index} type={"checkbox"}>{item}</Checkbox>)}
        </div>
        }

        <a href="#" className={`${visible ? styles.model__inner_link : styles.hidden}`}>Показать еще</a>
    </div>;
};