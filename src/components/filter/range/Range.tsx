import { FC, useState } from "react";
import styles from "./Range.module.scss";
import { ArrowUp } from "../../ui/arrows/ArrowUp";
import { ArrowDown } from "../../ui/arrows/ArrowDown";
import { Typography } from "@mui/material";
import Slider from "@mui/material/Slider/Slider";

export const Range: FC = (): JSX.Element => {
	const [arrow, setArrow] = useState(true);
	const [value, setValue] =  useState([0,10]);
  
	// Changing State when volume increases/decreases
	const handleChange = (e: Event, data: number[]): void => {
		const newArr:number[] = data.map(item => item);
		setValue(newArr)
	}

	const handleArrow = ():void => {
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
				<div
					style={{
						margin: "auto",
						display: "block",
						width: "fit-content",
					}}
				>
					<Slider
						getAriaLabel={() => 'Temperature range'}
						value={value}
						onChange={handleChange}
					/>
					<Typography id="range-slider" gutterBottom className={styles.price__range}>
						<span className={styles.price__range_spn}>
							<p className={styles.price__range_text}>От</p>
							<p className={styles.price__range_text}>{value[0] * 10000}</p>
						</span>
						<span className={styles.price__range_spn}>
							<p className={styles.price__range_text}>До</p>
							<p className={styles.price__range_text}>{value[1] * 10000}</p>
						</span>
					</Typography>
				</div>
			) : null}
		</>
	);
};
