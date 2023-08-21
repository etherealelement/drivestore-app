import {FC, useCallback, useEffect, useState} from "react";
import styles from "./Range.module.scss";
import { ArrowUp } from "../../ui/arrows/ArrowUp";
import { ArrowDown } from "../../ui/arrows/ArrowDown";
import {Slider} from "@mui/material";
import {useAppDispatch} from "../../../store/hooks/hooks.ts";
import {reset, sortByPrice} from "../../../store/slices/catalogCardSlice.ts";


export const RangeSlider: FC = (): JSX.Element => {
	const [minValue, setMinValue] = useState<number>(0)
	const [maxValue, setMaxValue] = useState<number>(1500000)
	const [arrow, setArrow] = useState(true);
	const [value, setValue] =  useState([minValue, maxValue]);


	const dispatch = useAppDispatch()

	// Changing State when volume increases/decreases
	const onPriceChange= useCallback((e: any, newValue: any) => {
		setValue(newValue)
		
	}, [value])


	//  Фильтрация 
	useEffect(() => {
		dispatch(sortByPrice(value))
		return () => {
			dispatch(reset())
		}
	}, [value, dispatch])

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
				<div className={styles.slider__box}>
					<Slider
						getAriaLabel={() => 'Temperature range'}
						value={value}
						onChange={onPriceChange}
						aria-label="Temperature"
						min={minValue}
						max={maxValue}

					/>
				</div>
			) : null}

			{arrow ? <div className={styles.price__drop_box}>
				<div className={styles.price__drop_box_input}>
					<label className={styles.price__drop_box_input_label}>
						<span className={styles.price__drop_box_input_label_spnFrom}>от</span>
						<input type="number"  placeholder={"10000"}  value={value[0]} 
						onChange={(e) => setValue(item => [+e.target.value, item[1]])}  
						className={styles.price__drop_box_input_label_from}/>
						<span className={styles.price__drop_box_input_label_spnFrom}>₽</span>
					</label>
					<label className={styles.price__drop_box_input_label}>
						<span className={styles.price__drop_box_input_label_spnFrom}>до</span>
						<input type="number" placeholder={"15000000"} value={value[1]} 
						onChange={(e) => setValue(item => [item[0], +e.target.value])}  
						min={"10000"} max={"15000000"}  className={styles.price__drop_box_input_label_to}  />
						<span className={styles.price__drop_box_input_label_spnFrom}>₽</span>
					</label>
				</div>
			</div> : null}
		</>
	);
};
