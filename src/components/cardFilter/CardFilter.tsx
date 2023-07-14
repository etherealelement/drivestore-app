import { FC } from 'react';
import styles from "./CardFilter.module.scss";
import {Box} from "@mui/material";
import {TextField} from "@mui/material";
import {Checkbox} from "../ui/checkbox/Checkbox.tsx";

export const CardFilter: FC = () => {
    return <section className={styles.cardFilter}>
        <div className="container">
            <div className={styles.cardFilter__inner}>
                <div className={styles.cardFilter__shop}>
                    <p className={styles.cardFilter__shop_title}>Магазин</p>
                        <Box>
                            <TextField id="outlined-basic"
                                       label="Поиск"
                                       variant="outlined"
                                       size="small"
                            />
                        </Box>
                </div>
                <div className={styles.cardFilter__check}>
                    <Checkbox type={"checkbox"} labelColor={"ghost"}>Забрать сегодня</Checkbox>
                    <Checkbox type={"checkbox"} labelColor={"ghost"}>Забрать сегодня</Checkbox>
                </div>
            </div>
        </div>
    </section>;
};