import { FC, useEffect, useState} from 'react';
import styles from "./Model.module.scss";
import {FilterDropdown} from "../../ui/filterDropdown/FilterDropdown.tsx";
import {TextField, Box} from "@mui/material";
import { useAppDispatch } from '../../../store/hooks/hooks.ts';
import { reset, sortByModel } from '../../../store/slices/catalogCardSlice.ts';


export const Model: FC = () => {
    const [labelValue, setLabelValue] = useState<string>("");
    const [visible, setVisible] = useState(true)
    const dispatch = useAppDispatch();

    useEffect(() => {
        const Debounce = setTimeout(() => {
            if(labelValue === "") {
                dispatch(reset())
            }

            dispatch(sortByModel({type: "SEARCH_BY_NAME", searchText: labelValue}))
        },300)
        
        return () => clearTimeout(Debounce)
    }, [labelValue])


    return <div className={styles.model}>

        <div onClick={() => setVisible(() => !visible)}>
            <FilterDropdown>Модель</FilterDropdown>
        </div>
        {visible && <Box maxWidth={"250px"} className={styles.model__box}>
            <TextField id="outlined-basic" value={labelValue} label="Введите модель" variant="outlined" fullWidth onChange={(e) => setLabelValue(e.target.value)}/>
        </Box>
        }
    </div>;
};