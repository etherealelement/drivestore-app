import { FC } from 'react';
import {StickyFooterProps} from "./StickyFooter.props.ts";
import styles from "./StickyFooter.module.scss";
export const StickyFooter: FC<StickyFooterProps> = ({children}: StickyFooterProps):JSX.Element => {
    return <div className={styles.stickyFooter}>
            {children}
    </div>;
};