import { FC, useState } from "react";
import styles from "./FilterDropdown.module.scss";
import { ArrowDown } from "../arrows/ArrowDown";
import { ArrowUp } from "../arrows/ArrowUp";
import { FilterDropdownProps } from "./FilterDropdown.props";

export const FilterDropdown: FC<FilterDropdownProps> = ({
	children,
}: FilterDropdownProps): JSX.Element => {
	const [arrow, setArrow] = useState(false);

	const handleArrow = () => {
		setArrow(!arrow);
	};

	return (
		<>
			<div className={styles.dropdown} onClick={handleArrow}>
				<span className={styles.dropdown__block}>
					{arrow ? <ArrowUp /> : <ArrowDown />}
				</span>
				<span className={styles.dropdown__block_spn}>{children}</span>
			</div>
		</>
	);
};
