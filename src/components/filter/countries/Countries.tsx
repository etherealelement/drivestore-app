import { FC, useState } from "react";
import styles from "./Countries.module.scss";
import { FilterDropdown } from "../../ui/filterDropdown/FilterDropdown.tsx";
import { Checkbox } from "../../ui/checkbox/Checkbox.tsx";
import { useAppDispatch } from "../../../store/hooks/hooks.ts";
import {
	reset,
	sortByCountries,
} from "../../../store/slices/catalogCardSlice.ts";



export const Countries: FC = (): JSX.Element => {
	const [visible, setVisible] = useState<boolean>(true);
	const dispatch = useAppDispatch();

	return (
		<div className={styles.countries}>
			<div onClick={() => setVisible(() => !visible)}>
				<FilterDropdown>Страны</FilterDropdown>
			</div>
			{visible && (
				<div className={styles.countries__box}>
					<Checkbox
						type={"checkbox"}
						labelColor="default"
						onClick={() => {
                            dispatch(reset())
                            dispatch(sortByCountries({type: "SORT_BY_RUSSIA", searchText: "Россия"}))
                        }}
					>
						Россия
					</Checkbox>
                    <Checkbox
						type={"checkbox"}
						labelColor="default"
						onClick={() => {
                            dispatch(reset())
                            dispatch(sortByCountries({type: "SORT_BY_USA", searchText: "США"}))
                        }}
					>
						США
					</Checkbox>
                    <Checkbox
						type={"checkbox"}
						labelColor="default"
						onClick={() => {
                            dispatch(reset())
                            dispatch(sortByCountries({type: "SORT_BY_GERMANY", searchText: "Германия"}))
                        }}
					>Германия</Checkbox>
                    <Checkbox
						type={"checkbox"}
						labelColor="default"
						onClick={() => {
                            dispatch(reset())
                            dispatch(sortByCountries({type: "SORT_BY_CHINA", searchText: "Китай"}))
                        }}
					>
						Китай
					</Checkbox>
				</div>
			)}
		</div>
	);
};
