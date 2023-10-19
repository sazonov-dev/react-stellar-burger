import React, {useContext} from 'react';
import styles from './OrderDetails.module.css';
import doneIcon from '../../assets/images/done.png';
import CloseButton from "../CloseButton/CloseButton";
import PropTypes from "prop-types";
import {BasketContext} from "../../services/BasketContext";

const OrderDetails = () => {
    const {basketData} = useContext(BasketContext)

    return (
        <div className={`${styles.order} pt-30 pb-30`}>
            <h2 className={`${styles.id} text text_type_digits-large pb-8`}>{basketData.orderId}</h2>
            <p className={`text text_type_main-medium pb-15`}>идентификатор заказа</p>
            <img className={`pb-15`} src={doneIcon} alt="Иконка готовности заказа"/>
            <p className={`text text_type_main-default pb-2`}>Ваш заказ начали готовить</p>
            <p className={`text text_type_main-default text_color_inactive pb-2`}>Дождитесь готовности на орбитальной станции</p>
        </div>
    );
};

export default OrderDetails;
