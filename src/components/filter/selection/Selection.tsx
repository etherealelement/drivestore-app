import {ChangeEvent, FC, useState} from 'react';
import styles from "./Selection.module.scss";
import {SelectionProps} from "./Selection.props.ts";
import {Box, TextField, MenuItem} from "@mui/material";

export const Selection: FC<SelectionProps> = ({children, options}:SelectionProps):JSX.Element => {
    const [textValueLs, setTextValueLs] = useState<string>("");
    const [textValueEngine, setTextValueEngine] = useState<string>("")
    const [textValueSpeed, setTextValueSpeed] = useState<string>("")

    const handleChangeLs = (event:ChangeEvent<HTMLInputElement>):void => {
        setTextValueLs(event.target.value);
    }

    const handleChangeEngine = (event:ChangeEvent<HTMLInputElement>):void => {
        setTextValueEngine(event.target.value);
    }

    const handleChangeSpeed = (event:ChangeEvent<HTMLInputElement>):void => {
        setTextValueSpeed(event.target.value);
    }

    return <div className={styles.selection}>
        <ul className={styles.selection__list}>
             <li className={styles.selection__item}>
                   <Box width="250px">
                       <TextField label={children[0]}
                                  value={textValueLs}
                                  onChange={handleChangeLs}
                                  select fullWidth
                                  >
                           {options.map((item, index) => <MenuItem value={item} key={index}>{item}</MenuItem>)}
                       </TextField>
                   </Box>
            </li>

            <li className={styles.selection__item}>
                <Box width="250px">
                    <TextField label={children[1]}
                               value={textValueEngine}
                               onChange={handleChangeEngine}
                               select fullWidth
                    >
                        {options.map((item, index) => <MenuItem value={item} key={index}>{item}</MenuItem>)}
                    </TextField>
                </Box>
            </li>

            <li className={styles.selection__item}>
                <Box width="250px">
                    <TextField label={children[2]}
                               value={textValueSpeed}
                               onChange={handleChangeSpeed}
                               select fullWidth
                    >
                        {options.map((item, index) => <MenuItem value={item} key={index}>{item}</MenuItem>)}
                    </TextField>
                </Box>
            </li>
        </ul>
    </div>;
};