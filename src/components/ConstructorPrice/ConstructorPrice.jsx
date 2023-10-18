import React, {useContext} from 'react';
import styles from './ConstructorPrice.module.css';
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import OrderDetails from "../OrderDetails/OrderDetails";
import PropTypes from "prop-types";
import {apiUrlOrder} from "../../utils/api";
import {basketContext} from "../../services/basketContext";

const ConstructorPrice = ({price, openModal, closeModal}) => {
    const {basketData, setBasketData} = useContext(basketContext)
    const addOrder = () => {
        fetch(apiUrlOrder, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                ingredients: basketData.itemsId
            })
        })
            .then((response) => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error('Ошибка сети или сервера');
                }
            })
            .then((data) => {
                setBasketData({...basketData, orderId: data.order.number});
                openModal(<OrderDetails closeModal={closeModal}/>, true)
            })
            .catch((error) => {
                throw new Error(error.message);
            })
    }

    return (
        <div className={`${styles.constructor__price} pt-10`}>
            <p className={`${styles.price} text text_type_digits-medium`}>
                {price}
                <CurrencyIcon type="primary" />
            </p>
            {/*<Button htmlType="button" type="primary" size="large" onClick={() => openModal(<OrderDetails closeModal={closeModal}/>, true)}>*/}
            <Button htmlType="button" type="primary" size="large" onClick={() => addOrder()}>
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
