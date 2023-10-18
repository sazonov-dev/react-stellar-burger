import React, {useContext} from 'react';
import styles from './ConstructorPrice.module.css';
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import OrderDetails from "../OrderDetails/OrderDetails";
import PropTypes from "prop-types";
import {BASE_URL} from "../../utils/api";
import {BasketContext} from "../../services/BasketContext";
import {request} from "../../utils/request";

const ConstructorPrice = ({price, openModal, closeModal}) => {
    const {basketData, setBasketData} = useContext(BasketContext)
    const addOrder = () => {
        request(BASE_URL + 'orders', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                ingredients: basketData.itemsId
            })
        })
            .then((data) => {
                setBasketData({...basketData, orderId: data.order.number, basket: [], itemsId: []});
                openModal(<OrderDetails closeModal={closeModal}/>, true)
            })
            .catch((error) => console.error(error.message))
    }

    return (
        <div className={`${styles.constructor__price} pt-10`}>
            <p className={`${styles.price} text text_type_digits-medium`}>
                {price}
                <CurrencyIcon type="primary" />
            </p>
            {/*<Button htmlType="button" type="primary" size="large" onClick={() => openModal(<OrderDetails closeModal={closeModal}/>, true)}>*/}
            {basketData.itemsId.length > 0 ? <Button htmlType="button" type="primary" size="large" onClick={addOrder}>
                Оформить заказ
            </Button> : <Button htmlType="button" type="primary" size="large" disabled>
                Оформить заказ
            </Button>}
        </div>
    );
};

ConstructorPrice.propTypes = {
    openModal: PropTypes.func,
    closeModal: PropTypes.func,
    price: PropTypes.number
}

export default ConstructorPrice;
