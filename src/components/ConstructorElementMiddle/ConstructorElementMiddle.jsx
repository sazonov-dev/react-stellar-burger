import React from 'react';
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './ConstructorElementMiddle.module.css';

const ConstructorElementMiddle = ({children}) => {
    return (
        <div className={styles.middle}>
            <DragIcon type="primary" />
            {children}
        </div>
    );
};

export default ConstructorElementMiddle;
