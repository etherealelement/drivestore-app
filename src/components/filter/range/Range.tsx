import { FC, useState } from "react";
import styles from "./Range.module.scss";
import { ArrowUp } from "../../ui/arrows/ArrowUp";
import { ArrowDown } from "../../ui/arrows/ArrowDown";
import {Box, Typography} from "@mui/material";
import Slider from "@mui/material/Slider/Slider";

export const Range: FC = (): JSX.Element => {
	const [arrow, setArrow] = useState(true);
	const [value, setValue] =  useState([0,10]);
  
	// Changing State when volume increases/decreases
	const handleChange = (e: Event, data: number[]): void => {
		const newArr = data.map(item => item);
		setValue(newArr)
	}

	const handleArrow = () => {
		setArrow(!arrow);
	};




	return (
		<>
			<div className={styles.price} onClick={handleArrow}>
				<span className={styles.price__drop}>
					{arrow ? <ArrowUp /> : <ArrowDown />}
				</span>
				<span className={styles.price__drop_spn}>Цена</span>
			</div>

			{arrow ? (
				<Box
					style={{
						marginLeft: "10px",
						display: "block",
						width: "230px",
					}}
				>
					<Slider
						getAriaLabel={() => 'Temperature range'}
						value={value}
						onChange={handleChange}
						valueLabelDisplay="auto"
					/>
				</Box>
			) : null}

			{arrow ? <div className={styles.price__drop_box}>
				<div className={styles.price__drop_box_from}>
					<span className={styles.price__drop_box_from_text}>от</span>
					<span className={styles.price__drop_box_from_counter}>{value[0]}</span>
				</div>
				<div className={styles.price__drop_box_to}>
					<span className={styles.price__drop_box_to_text}>до</span>
					<span className={styles.price__drop_box_to_counter}>{value[1]}</span>
				</div>
			</div> : null}
		</>
	);
};
