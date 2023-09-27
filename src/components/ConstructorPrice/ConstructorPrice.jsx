import React from 'react';
import styles from './ConstructorPrice.module.css';
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
const ConstructorPrice = (props) => {
    return (
        <div className={`${styles.constructor__price} pt-10`}>
            <p className={`${styles.price} text text_type_digits-medium`}>
                {props.price}
                <CurrencyIcon type="primary" />
            </p>
            <Button htmlType="button" type="primary" size="large">
                Оформить заказ
            </Button>
        </div>
    );
};

export default ConstructorPrice;
