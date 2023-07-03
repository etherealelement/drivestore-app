import { FC } from 'react';
import styles from "./Footer.module.scss";
import {Button} from "../ui/Button/Button.tsx";
import {footerDataLeft} from "../../utils/data/footerData.ts";
import {footerDataRight} from "../../utils/data/footerData.ts";
import {Facebook} from "../ui/footerSocialSvg/Facebook.tsx";
import {Vk} from "../ui/footerSocialSvg/Vk.tsx";
import {YouTube} from "../ui/footerSocialSvg/YouTube.tsx";
import {Inst} from "../ui/footerSocialSvg/Inst.tsx";

export const Footer: FC = () => {
    return <section className={styles.footer}>
        <div className="container">
            <div className={styles.footer__inner}>
                <div className={styles.footer__form}>
                    <h2 className={styles.footer__form_title}>Подпишитесь на нашу рассылку
                        и узнавайте о акция быстрее</h2>
                    <div className={styles.footer__form_block}>
                        <input type="email" placeholder={"Введите ваш e-mail:"} className={styles.footer__form_block_input}/>
                        <Button type={"submit"} size={"small"} border={false}>Отправить</Button>
                    </div>
                </div>
                <div className={styles.footer__links}>
                    <div className={styles.footer__links_top}>
                        <ul className={styles.footer__list_left}>
                            {footerDataLeft.map((item,index)=> <li key={index} className={styles.footer__list_left_item}>
                                <a href="#" className={styles.footer__list_left_item_link}>{item}</a>
                            </li>)}
                        </ul>

                        <ul className={styles.footer__list_right}>
                            {footerDataRight.map((item, index) => <li
                                key={index}
                                className={styles.footer__list_right_item}>
                                <a href="#" className={styles.footer__list_right_item_link}>{item}</a>
                            </li>)}
                        </ul>

                    </div>
                    <div className={styles.footer__links_bottom}>
                        <a href="#" className={styles.footer__links_bottom_link}>Договор оферты</a>
                        <a href="#" className={styles.footer__links_bottom_link}>Политика обработки персональных данных</a>
                    </div>
                </div>
                <div className={styles.footer__social}>
                    <Facebook></Facebook>
                    <Inst></Inst>
                    <Vk></Vk>
                    <YouTube></YouTube>
                </div>
            </div>
        </div>
    </section>;
};