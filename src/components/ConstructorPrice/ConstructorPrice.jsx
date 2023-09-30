import React from 'react';
import styles from './ConstructorPrice.module.css';
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import OrderDetails from "../OrderDetails/OrderDetails";
import PropTypes from "prop-types";

const ConstructorPrice = ({price, openModal, closeModal}) => {
    return (
        <div className={`${styles.constructor__price} pt-10`}>
            <p className={`${styles.price} text text_type_digits-medium`}>
                {price}
                <CurrencyIcon type="primary" />
            </p>
            <Button htmlType="button" type="primary" size="large" onClick={() => openModal(<OrderDetails closeModal={closeModal}/>, true)}>
                Оформить заказ
            </Button>
        </div>
    );
};

ConstructorPrice.propTypes = {
    openModal: PropTypes.func,
    closeModal: PropTypes.func,
    price: PropTypes.number
}

export default ConstructorPrice;
