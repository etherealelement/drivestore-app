 import { FC, useState } from "react";
import { CartItemsProps } from "./cartItems.props.ts";
import styles from "./cartItems.module.scss";
import { Button } from "../../ui/Button/Button.tsx";
import PlusIcon from "../../../assets/svgicons/plus.svg";
import MinysIcon from "../../../assets/svgicons/minus.svg"
import {useDispatch} from "react-redux";
import {deleteCartItem} from "../../../store/slices/cartSlice.ts";


export const CartItems: FC<CartItemsProps> = ({
	itemId,
	category,
	image,
	title,
	price,
}: CartItemsProps): JSX.Element => {
	const [count, setCount] = useState<number>(1);
	const [totalCount, setTotalCount] = useState<number | string>(price);



	const handleIncrement = () => {
		setTotalCount(e => e + price)
		setCount((e) => e + 1);
	};

	const handleDecrement = () => {
		setTotalCount(e => e === 0 ? e: e - 1)
		setCount(e =>  e === 1 ? 1 : e - 1)
	};


	// Удаление карточки товара
	const dispath = useDispatch()


	const deleteCartItems = () => {
		dispath(deleteCartItem({
			id: itemId,
		}))
	}


	return (
		<li className={styles.item}>
			<div className={styles.item__inner}>
				<div className={styles.item__info}>
					<img src={image} alt={title} />

					<div className={styles.item__info_box}>
						<h2 className={styles.title}>{title}</h2>
						<p className={styles.item__category}>{category}</p>
						<span className={styles.item__price}>
							<b>Стоимость: {price === "" ? "Нет в наличии" : price}₽</b>
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
						<b>{price ? `Итого: ${totalCount}` : null}</b>
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
						onClick={deleteCartItems}
					>
						Удалить
					</Button>

				</div>
			</div>
		</li>
	);
};
