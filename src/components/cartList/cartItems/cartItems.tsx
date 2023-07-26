import { FC, useState } from "react";
import { CartItemsProps } from "./cartItems.props.ts";
import styles from "./cartItems.module.scss";
import { Button } from "../../ui/Button/Button.tsx";
import PlusIcon from "../../../assets/svgicons/plus.svg";
import MinysIcon from "../../../assets/svgicons/minus.svg"


export const CartItems: FC<CartItemsProps> = ({
	category,
	image,
	title,
	price,
}: CartItemsProps): JSX.Element => {
	const [count, setCount] = useState<number>(1);
	const [totalCount, setTotalCount] = useState<number | string>(price);

	console.log(totalCount)


	const handleIncrement = () => {
		setTotalCount(e => Number(e) + price)
		setCount((e) => e + 1);
	};

	const handleDecrement = () => {
		setTotalCount(e => Number(e) - Number(price) <= 0 ? price : Number(e) - Number(price))
		setCount((e) => e === 0 ? e - 1 : 1);
	};

	return (
		<li className={styles.item}>
			<div className={styles.item__inner}>
				<div className={styles.item__info}>
					<img src={image} alt={title} />

					<div className={styles.item__info_box}>
						<h2 className={styles.title}>{title}</h2>
						<p className={styles.item__category}>{category}</p>
						<span className={styles.item__price}>
							{price === "" ? "Нет в наличии" : price}
						</span>
					</div>
				</div>
				<div className={styles.item__count}>
					<button 
					className={styles.item__count_svg}
					onClick={handleDecrement}>
                        <img src={MinysIcon} alt="minus" />
                    </button>
					<span className={styles.item__count_span}>{count}</span>
					<button 
					className={styles.item__count_svg}
					onClick={handleIncrement}>
                    <img src={PlusIcon} alt="plus" />
                    </button>
				</div>

				<div className={styles.item__total}>
					<span className={styles.item__total_span}>
						{price ? `Итого: ${totalCount}` : null}
					</span>
				</div>


				<div className={styles.item__buy}>
					<Button type={"button"} border={true} size={"small"}>
						Перейти к оплате
					</Button>
					<Button
						type={"button"}
						border={true}
						size={"small-large"}
						remove={true}
					>
						Удалить
					</Button>
				</div>
			</div>
		</li>
	);
};
