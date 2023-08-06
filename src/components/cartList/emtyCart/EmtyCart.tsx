import {FC, useContext} from 'react';
import styles from "./EmtyCart.module.scss";
import {CountContext} from "../../../context/homeContext.ts";
import EmptyIcon from "./icons/empty-icon.svg";
import {Button} from "../../ui/Button/Button.tsx";
import {Link} from "react-router-dom";
import {EmtyCartProps} from "./EmtyCart.props.ts";
export const EmtyCart: FC<EmtyCartProps> = ({children}: EmtyCartProps) => {
    const cart = useContext(CountContext);
    if (cart.length === 0) {
        return <div className={styles.empty}>
                <div className="container">
                    <div className={styles.empty__inner}>
                        <img src={EmptyIcon} alt="icon"/>
                        <h2 className={styles.empty__title}>{children}</h2>
                        <div className={styles.empty__buttons}>
                            <Button type={"submit"} border={true} size={"small"}>
                                <Link to={"/catalog"} className={styles.empty__link}>Перейти в каталог</Link>
                            </Button>
                        </div>
                    </div>
                </div>
        </div>
    }
};